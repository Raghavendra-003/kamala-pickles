// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import kamalaLogo from "@/assets/kamala.jpg";

// interface LandingProps {
//   onEnter: () => void;
// }

// const Landing = ({ onEnter }: LandingProps) => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-royal-gradient text-center px-4">

//       {/* Big Logo */}
//       <motion.img
//         src={kamalaLogo}
//         alt="Kamala Pickle Logo"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//         className="w-56 md:w-72 rounded-full shadow-2xl"
//       />

//       {/* Brand Name */}
//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//         className="mt-8 text-4xl md:text-6xl font-montserrat font-bold tracking-widest text-gold-gradient"
//       >
//         KAMALA <span className="font-normal">PICKLE</span>
//       </motion.h1>

//       {/* Button */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.8 }}
//         className="mt-10"
//       >
//         <Button variant="gold" size="xl" className="rounded-full" onClick={onEnter}>
//           Explore
//         </Button>
//       </motion.div>
//     </div>
//   );
// };

// export default Landing;