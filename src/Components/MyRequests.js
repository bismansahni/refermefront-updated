// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getReferrals } from "../services/api.js";
// import styles from "../styles/MyRequests.module.css";
// import { useProfile } from "../Context/ProfileContext";

// const MyRequests = () => {
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [referrals, setReferrals] = useState([]);
//   const navigate = useNavigate();
//   const { profileData, fetchProfileData } = useProfile();

//   useEffect(() => {
//     const fetchReferrals = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           navigate("/login");
//           console.error("No token found");
//           return;
//         }
//         console.log("Fetching referrals...");
//         const fetchedReferrals = await getReferrals(token);
//         console.log("Fetched referrals:", fetchedReferrals);
//         setReferrals(Array.isArray(fetchedReferrals) ? fetchedReferrals : []);
//       } catch (error) {
//         console.error("Error getting referrals", error);
//       }
//     };

//     fetchReferrals();
//   }, [navigate]);

//   const handleDivClick = () => {
//     navigate("/dashboard");
//   };

//   return (
//     <div className={styles["right-dashboard"]}>
//       <div className={styles["right-dashboard-header"]}>
//         <h1>My Requests</h1>
//       </div>
//       <div className={styles["right-dashboard-left-box"]}>
      
//         {referrals.map((referral, index) => (
//           <button
//             key={index}
//             className={styles["request-preview"]}
//             onClick={() => setSelectedRequest(referral)}
//           >
//             Your request to {referral.company_name}
//           </button>
//         ))}
//       </div>
//       <div className={styles["right-dashboard-right-box"]}>
       
//       {referrals.length === 0 ? (
//           <p>You don't have any requests</p>
//         ) : selectedRequest ? (
//           <div className={styles["request-details"]}>
//             <h3>Company: {selectedRequest.company_name}</h3>
//             <h3>
//               Job Link: &nbsp;
//               <a
//                 href={selectedRequest.job_url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Job Posting
//               </a>
//             </h3>
//             <h3>
//               Resume Link: &nbsp;
//               <a
//                 href={selectedRequest.resume}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Resume
//               </a>
//             </h3>
//           </div>
//         ) : (
//           <div className={styles["no-selection"]}>
//             <p>Select a referral request to view details</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyRequests;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getReferrals } from "../services/api.js";
import styles from "../styles/MyRequests.module.css";
import { useProfile } from "../Context/ProfileContext";

const MyRequests = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [referrals, setReferrals] = useState([]);
  const navigate = useNavigate();
  const { profileData, fetchProfileData } = useProfile();

  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          console.error("No token found");
          return;
        }
        console.log("Fetching referrals...");
        const fetchedReferrals = await getReferrals(token);
        console.log("Fetched referrals:", fetchedReferrals);
        setReferrals(Array.isArray(fetchedReferrals) ? fetchedReferrals : []);
      } catch (error) {
        console.error("Error getting referrals", error);
      }
    };

    fetchReferrals();
  }, [navigate]);

  const handleDivClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className={styles["right-dashboard"]}>
      <div className={styles["right-dashboard-header"]}>
        <h1>My Requests</h1>
      </div>
      <div className={styles["right-dashboard-left-box"]}>
        {referrals.map((referral, index) => (
          <button
            key={index}
            className={styles["request-preview"]}
            onClick={() => setSelectedRequest(referral)}
          >
            Your request to {referral.company_name}
          </button>
        ))}
      </div>
      <div className={styles["right-dashboard-right-box"]}>
        {referrals.length === 0 ? (
          <p className={styles["no-requests"]}>You don't have any requests</p>
        ) : selectedRequest ? (
          <div className={styles["request-details"]}>
            <h3>Company: {selectedRequest.company_name}</h3>
            <h3>
              Job Link: &nbsp;
              <a
                href={selectedRequest.job_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Job Posting
              </a>
            </h3>
            <h3>
              Resume Link: &nbsp;
              <a
                href={selectedRequest.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </h3>
          </div>
        ) : (
          <div className={styles["no-selection"]}>
            <p>Select a referral request to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRequests;
