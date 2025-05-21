import Technologies from "../components/Technologies";


export const HERO_CONTENT = `I’m a MERN Stack Developer proficient in MongoDB, 
Express.js, React.js, and Node.js. I’ve developed practical applications like 
a Smart Medicine Reminder and a Weather App, enhancing my skills in full stack 
development, API integration, authentication, and responsive design. 
I’m passionate about building scalable, user-focused solutions that address 
real-world challenges.
`;

export const ABOUT_TEXT = `Hi, I’m Faijan Ahamed, a Computer Science and 
Engineering student at the University of Lucknow, driven by a passion for 
technology and problem-solving. I’m committed to continuous learning, 
crafting impactful web applications, and growing as a software developer. 
I’m eager to contribute to innovative projects, collaborate with talented 
teams, and make meaningful contributions to the tech community.
`;

export const PROJECTS = [
    {
        title: "Medical Reminder Web App",
        link: "https://medicinereminder.xyz",
        image: "/mr.png",
        description: 
        `A fully functional Medical Reminder Web App with features like add medicine name,
        add how much times you take the medicine per day, add time for each time, add dosage 
        of medicine for each time, add reminder, delete reminder, send reminder notification 
        via email from no-reply@medicinereminder.xyz,`,
        technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Resend"],
    },
    {
        title: "Weather App",
        link: "https://weather-app-pied-rho-47.vercel.app/",
        image: "/weather.jpg",
        description:
        `We can get the details of weather of any city around the world, it tells minimum
        temperature, maximum temperature, feels like, humidity. The data I used from the
        OpenWeatherMap API`,
        technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    },

    {
        title: "Faijan's Portfolio Webpage",
        link: "https://portfoliofaijan.vercel.app/",
        image: "/PortfolioPage1.png",
        description:
        `Here you'll find a collection of my featured projects, showcasing my skills in 
        full stack development. Each project reflects practical problem-solving and modern 
        design principles. Click through to explore the code, live demos, and key features.`,
        technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    }
]

export const CONTACT = {
    address: "Abhishekpuram, Jankipuram Extension, Lucknow, 226021",
    phoneNo: "+91 9794589839",
    email: "faijanahamed11@gmail.com",
  };