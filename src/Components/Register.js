// import React, { useState } from "react";
// import { register, verifyOTP } from "../services/api";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import Loader from "../Components/Loader";
// import OtpModal from "../Components/Otpmodal";
// import styles from "../styles/Register.module.css";
// import "react-toastify/dist/ReactToastify.css";
// import { useProfile } from "../Context/ProfileContext";
// import "../styles/Toastify.css";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [otp, setOtp] = useState("");
//   const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [animation, setAnimation] = useState("");
//   const { name, email, password } = formData;
//   const navigate = useNavigate();
//   const { fetchProfileData } = useProfile();

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password) {
//       toast.error("All fields are required");
//       return;
//     }

//     if (!validateEmail(email)) {
//       toast.error("Please enter a valid email address");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await register(name, email, password);
//       console.log("Registration successful:", response);
//       setIsOtpModalOpen(true);
//       setIsLoading(false);
//     } catch (error) {
//       console.error("Registration failed:", error);
//       if (error.response && error.response.status === 409) {
//         toast.error("A User with this email already exists");
//       } else {
//         toast.error("Registration failed. Please try again.");
//       }
//       setIsLoading(false);
//     }
//   };

//   const handleOtpSubmit = async () => {
//     setIsLoading(true);
//     try {
//       const response = await verifyOTP(email, otp);
//       console.log("OTP verification successful:", response);
//       localStorage.setItem("token", response.token);
//       await fetchProfileData(response.token);
//       setAnimation(styles["slide-left"]);
//       setIsOtpModalOpen(false);
//       setTimeout(() => {
//         navigate("/dashboard");
//       }, 500);
//     } catch (error) {
//       console.error("OTP verification failed:", error);
//       toast.error("Incorrect OTP. Please try again.");
//       setOtp("");
//       setIsLoading(false);

//       setIsOtpModalOpen(false);
//       setTimeout(() => {
//         setIsOtpModalOpen(true);
//       }, 0);
//     }
//   };

//   const handleLoginClick = (e) => {
//     e.preventDefault();
//     navigate("/login");
//   };

//   return (
//     <div className={`${styles["main-register-container"]} ${animation}`}>
//       {isLoading && <Loader />}
//       <ToastContainer />
//       <div className={styles["register-box"]}>
//         <div className={styles["register-box-left"]}>
//           <h1>Become a Referrer and Help Others Succeed!</h1>
//           <h1>Get Referred to Your Dream Job!</h1>
//         </div>
//         <div className={styles["register-box-right"]}>
//           <div className={styles["heading-box"]}>
//             <h2>Register Now!</h2>
//           </div>
//           <div className={styles["form-box"]}>
//             <form onSubmit={onSubmit}>
//               <div className={styles["form-group"]}>
//                 <label htmlFor="name">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={name}
//                   onChange={onChange}
//                 />
//               </div>
//               <div className={styles["form-group"]}>
//                 <label htmlFor="email">Email Address</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={email}
//                   onChange={onChange}
//                 />
//               </div>
//               <div className={styles["form-group"]}>
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={password}
//                   onChange={onChange}
//                 />
//               </div>
//             </form>
//           </div>
//           <div className={styles["button-box"]}>
//             <button type="submit" onClick={onSubmit} disabled={isLoading}>
//               Continue
//             </button>
//             <p>
//               Already have an account?{" "}
//               <a href="/login" onClick={handleLoginClick}>
//                 Login Here
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Use the OTP Modal */}
//       <OtpModal
//         isOpen={isOtpModalOpen}
//         onRequestClose={() => setIsOtpModalOpen(false)}
//         otp={otp}
//         setOtp={setOtp}
//         handleOtpSubmit={handleOtpSubmit}
//         isLoading={isLoading}
//       />
//     </div>
//   );
// };

// export default Register;





import React, { useState } from "react";
import { register, verifyOTP } from "../services/api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Components/Loader";
import OtpModal from "../Components/Otpmodal";
import styles from "../styles/Register.module.css";
import "react-toastify/dist/ReactToastify.css";
import { useProfile } from "../Context/ProfileContext";
import "../styles/Toastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [otp, setOtp] = useState("");
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [animation, setAnimation] = useState("");
  const { name, email, password } = formData;
  const navigate = useNavigate();
  const { fetchProfileData } = useProfile();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    try {
      const response = await register(name, email, password);
      console.log("Registration successful:", response);
      setIsOtpModalOpen(true);
      setIsLoading(false);
    } catch (error) {
      console.error("Registration failed:", error);
      if (error.response && error.response.status === 409) {
        toast.error("A User with this email already exists");
      } else {
        toast.error("Registration failed. Please try again.");
      }
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await verifyOTP(email, otp);
      console.log("OTP verification successful:", response);
      localStorage.setItem("token", response.token);
      await fetchProfileData(response.token);
      setAnimation(styles["slide-left"]);
      setIsOtpModalOpen(false);
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    } catch (error) {
      console.error("OTP verification failed:", error);
      toast.error("Incorrect OTP. Please try again.");
      setOtp("");
      setIsLoading(false);

      setIsOtpModalOpen(false);
      setTimeout(() => {
        setIsOtpModalOpen(true);
      }, 0);
    }
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className={`${styles["main-register-container"]} ${animation}`}>
      {isLoading && <Loader />}
      <ToastContainer />
      <div className={styles["register-box"]}>
        <div className={styles["register-box-left"]}>
          <h1>Become a Referrer and Help Others Succeed!</h1>
          <h1>Get Referred to Your Dream Job!</h1>
        </div>
        <div className={styles["register-box-right"]}>
          <div className={styles["heading-box"]}>
            <h2>Register Now!</h2>
          </div>
          <div className={styles["form-box"]}>
            <form onSubmit={onSubmit}>
              <div className={styles["form-group"]}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
            </form>
          </div>
          <div className={styles["button-box"]}>
            <button type="submit" onClick={onSubmit} disabled={isLoading}>
              Continue
            </button>
            <p>
              Already have an account?{" "}
              <a href="/login" onClick={handleLoginClick}>
                Login Here
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Use the OTP Modal */}
      <OtpModal
        isOpen={isOtpModalOpen}
        onRequestClose={() => setIsOtpModalOpen(false)}
        otp={otp}
        setOtp={setOtp}
        handleOtpSubmit={handleOtpSubmit}
        isLoading={isLoading}
        email={email} // Pass the email to the modal
      />
    </div>
  );
};

export default Register;
