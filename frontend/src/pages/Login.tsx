// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react";
// import kamalaLogo from "../assets/kamala.jpg";

// const Login = () => {
//   const [mobile, setMobile] = useState("");
//   const [otp, setOtp] = useState("");
//   const [showOtp, setShowOtp] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);

//   const isMobileValid = mobile.length === 10;

//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   // Step 1: Send OTP
//   if (!otpSent && isMobileValid) {
//     try {
//       const response = await fetch("http://localhost:3000/send-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ phone: mobile }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setOtpSent(true);
//         alert("OTP Sent Successfully");
//       } else {
//         // show message from server when available
//         alert(data.message || "Failed to send OTP");
//       }
//     } catch (error) {
//       console.error("Network error", error);
//       alert("Server error while sending OTP");
//     }

//     return;
//   }

//   // Step 2: Verify OTP
//   if (otpSent && otp.length === 6) {
//     try {
//       const response = await fetch("http://localhost:3000/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           phone: mobile,
//           otp: otp,
//         }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         alert("Login Successful");

//         // Example redirect
//         // navigate("/");

//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       alert("Server error while verifying OTP");
//     }
//   };
//   };

//   return (
//     <div className="min-h-screen bg-[#67548b] flex items-center justify-center px-4 relative overflow-hidden p-3">

//       <div className="absolute inset-0 bg-gradient-to-br from-[#67548b] via-[#5a4680] to-[#3f2f5c]" />

//       <motion.div
//         initial={{ opacity: 0, y: 30, scale: 0.95 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-md relative z-10"
//       >
//         <Link to="/" className="block text-center mb-5">
//           <img
//             src={kamalaLogo}
//             alt="Kamala Pickle Logo"
//             className="w-auto h-16 mx-auto rounded-full mb-3 mt-3 shadow-md"
//           />
//           <h1 className="text-2xl font-bold text-white tracking-wide">
//             KAMALA <span className="font-normal">PICKLE</span>
//           </h1>
//           <p className="text-white/70 italic text-sm mt-1">
//             Taste the Tradition
//           </p>
//         </Link>

//         <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-6 md:p-10 mb-4">

//           <h2 className="text-2xl font-bold text-white mb-2">
//             Login with OTP
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-4">

//             {/* Mobile Field */}
//             <div>
//               <label className="text-white/70 text-sm mb-2 block">
//                 Mobile Number
//               </label>
//               <input
//                 type="tel"
//                 value={mobile}
//                 onChange={(e) =>
//                   setMobile(e.target.value.replace(/[^0-9]/g, ""))
//                 }
//                 maxLength={10}
//                 placeholder="Enter 10 digit number"
//                 className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/40"
//               />
//             </div>

//             {/* Show Send OTP Button */}
//             {!otpSent && (
//               <button
//                 type="submit"
//                 disabled={!isMobileValid}
//                 className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
//                   isMobileValid
//                     ? "bg-[#d4af37] text-black hover:scale-[1.02]"
//                     : "bg-gray-400 text-white cursor-not-allowed"
//                 }`}
//               >
//                 Send OTP
//               </button>
//             )}

//             {/* OTP Field */}
//             {otpSent && (
//               <>
//                 <div>
//                   <label className="text-white/70 text-sm mb-2 block">
//                     Enter OTP
//                   </label>
//                   <div className="relative">
//                     <input
//                       type={showOtp ? "text" : "password"}
//                       value={otp}
//                       onChange={(e) =>
//                         setOtp(e.target.value.replace(/[^0-9]/g, ""))
//                       }
//                       maxLength={6}
//                       placeholder="Enter 6 digit OTP"
//                       className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 pr-12 focus:outline-none focus:border-[#d4af37]"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowOtp(!showOtp)}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
//                     >
//                       {showOtp ? <EyeOff size={18} /> : <Eye size={18} />}
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={otp.length !== 6}
//                   className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
//                     otp.length === 6
//                       ? "bg-green-500 text-white hover:scale-[1.02]"
//                       : "bg-gray-400 text-white cursor-not-allowed"
//                   }`}
//                 >
//                   Verify & Login
//                 </button>
//               </>
//             )}
//           </form>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;