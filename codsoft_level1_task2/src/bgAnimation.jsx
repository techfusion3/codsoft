// import Particles from 'react-tsparticles';
// import { loadSlim } from 'tsparticles-slim';
// import { useCallback } from 'react';

// function BgAnimation() {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   return (
//     <div className="relative min-h-screen overflow-hidden">
      
//       {/* Global Particles Background */}
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={{
//           background: { color: { value: '#000' } },
//           fpsLimit: 60,
//           particles: {
//             color: { value: '#ffffff' },
//             links: { enable: true, color: '#fff', distance: 150, opacity: 0.5 },
//             move: { enable: true, speed: 2 },
//             number: { density: { enable: true, area: 800 }, value: 80 },
//             size: { value: { min: 1, max: 5 } },
//           },
//         }}
//         className="fixed inset-0 z-0"
//       />

//       {/* Main Content */}
//       <div className="relative z-10">
        

//         <section className="h-screen flex flex-col justify-center items-center text-center px-8">
//           {/* Other sections go here */}
          
//         </section>
//       </div>
//     </div>
//   );
// }

// export default BgAnimation;
