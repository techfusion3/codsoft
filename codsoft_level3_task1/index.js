require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
const session = require("express-session");
const MongoStore = require("connect-mongo");
const User = require('./models/User');
const bcrypt = require('bcrypt');


// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((error) => console.log(error));

// Define MongoDB schema for posts and comments
const postSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  comments: [{
    username: String,
    text: String,
    date: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

app.get("/", (req, res) => {
    res.redirect("/posts");
  });

app.use(session({
    secret: "thisissecret", // Change this in production
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI, 
        ttl: 14 * 24 * 60 * 60 // Set session TTL (Time to Live) in seconds (14 days)
    })
}));

app.use((req, res, next) => {
    res.locals.user = req.session.user;
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// 🆕 Middleware to check login status
function isLoggedIn(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect("/login");
    }
}

// Routes
app.get("/posts", async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.render("index.ejs", { posts, user: req.session.user });
});


app.get("/posts/new", isLoggedIn, (req, res) => {
    res.render("new.ejs", { user: req.session.user });
});

app.post("/posts", isLoggedIn, async (req, res) => {
    const username = req.session.user.username; // secure username from session
    const { content } = req.body;
    const newPost = new Post({ username, content });
    await newPost.save();
    res.redirect("/posts");
});

app.post("/posts/:id/comments", isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;
    const post = await Post.findById(id);

    if (post) {
        post.comments.push({
            username: req.session.user.username,
            text: comment
        });
        await post.save();
        res.redirect(`/posts/${id}`);
    } else {
        res.status(404).send("Post not found");
    }
});

app.get("/posts/:id", async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (post) {
        res.render("show.ejs", { post, user: req.session.user });
    } else {
        res.status(404).send("Post not found");
    }
});

app.patch("/posts/:id", async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    const post = await Post.findById(id);
    if (post) {
        post.content = content; // Only update content
        await post.save();
        res.redirect("/posts");
    } else {
        res.status(404).send("Post not found");
    }
});

app.get("/posts/:id/edit", isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (post) {
        res.render("edit.ejs", { post, user: req.session.user });
    } else {
        res.status(404).send("Post not found");
    }
});

app.delete("/posts/:id", async (req, res) => {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
    res.redirect("/posts");
});

app.get("/myposts", isLoggedIn, async (req, res) => {
    const user = req.session.user;
    const myPosts = await Post.find({ username: user.username });
    res.render("myposts.ejs", { posts: myPosts });
});

// Auth Routes
app.get("/register", (req, res) => {
    res.render("register.ejs", { error: null });
});

app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.render("register.ejs", { error: "Username already taken, try another" });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // hash password

        const user = new User({ username, password: hashedPassword });
        await user.save();

        console.log('User registered:', username);
        console.log('Password:', password);
        res.redirect("/login");
    } catch (err) {
        console.error('Error saving user:', err.message);
        res.status(500).send('Failed to save user');
    }
});



app.get("/login", (req, res) => {
    res.render("login", { error: null });
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.render("login", { error: "Invalid username or password." });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.render("login", { error: "Invalid username or password." });
        }

        req.session.user = user;
        res.redirect("/posts/new");
    } catch (err) {
        console.error("Login error:", err.message);
        res.status(500).send("Login failed");
    }
});



app.post("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/posts");
});

app.delete("/posts/:postId/comments/:commentIndex", async (req, res) => {
    const { postId, commentIndex } = req.params;

    const post = await Post.findById(postId);
    if (!post) {
        return res.status(404).send("Post not found");
    }

    // Only allow the user who made the comment to delete it
    if (req.session.user && post.comments[commentIndex].username === req.session.user.username) {
        post.comments.splice(commentIndex, 1);
        await post.save();
    }

    res.redirect(`/posts/${postId}`);
});

app.listen(port, () => {
    console.log("listening to port 8080");
});
