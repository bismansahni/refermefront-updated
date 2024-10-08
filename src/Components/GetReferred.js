


// import React, { useState, useEffect } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { useProfile } from '../Context/ProfileContext';
// import { requestReferral } from '../services/api';
// import GetReferredStyles from '../styles/GetReferred.module.css';
// import popupStyles from '../styles/Popup.module.css';


// const GetReferred = () => {
//   const { profileData, fetchProfileData } = useProfile();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     company_name: '',
//     job_url: ''
//   });

//   const [isEditable, setIsEditable] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [toastShown, setToastShown] = useState(false);
//   const [showOverlay, setShowOverlay] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//     } else {
//       fetchProfileData(token);
//     }
//   }, [navigate, fetchProfileData]);

//   useEffect(() => {
//     if (!profileData || !profileData.current_job_role || !profileData.current_company || !profileData.resume) {
//       if (!toastShown) {
//         toast.error(
//           <div>
//             Please update your profile first.
//             <a
//               href="/update-profile"
//               onClick={(e) => {
//                 e.preventDefault();
//                 e.preventDefault();
//                 onUpdateProfile(profileData);
//               }}
//               style={{ marginLeft: '10px', color: 'blue', textDecoration: 'underline', cursor: 'pointer', textAlign: 'right' }}
//             >
//               Update Profile
//             </a>
//           </div>,
//           { autoClose: false, closeOnClick: false, draggable: false, closeButton: false }
//         );
//         setToastShown(true);
//       }
//       setIsEditable(false);
//       setShowOverlay(true);
//     }
//   }, [navigate, profileData, toastShown]);

//   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const validateJobUrl = (url) => {
//     const re = /^(ftp|http|https):\/\/[^ "]+$/;
//     return re.test(String(url).toLowerCase());
//   };

//   const onSubmit = async e => {
//     e.preventDefault();

//     if (!formData.company_name || !formData.job_url) {
//       toast.error("All fields are required");
//       setIsLoading(false);
//       return;
//     }

//     if (!validateJobUrl(formData.job_url)) {
//       toast.error('Please enter a valid job URL');
//       setIsLoading(false);
//       return;
//     }

//     setIsLoading(true);
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         const response = await requestReferral(token, formData);
//         console.log('Referral request successful:', response);
//         setShowPopup(true);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Referral request failed:', error);
//         toast.error('Referral request failed.');
//         setIsLoading(false);
//       }
//     } else {
//       toast.error('No token found. Please log in.');
//       setIsLoading(false);
//     }
//   };

//   const handleConfirmProfile = () => {
//     setShowPopup(false);
//     toast.success('Referral request successful!', { icon: false });
//     setTimeout(() => {
//       setFormData({
//         company_name: '',
//         job_url: ''
//       });
//     }, 5000);
//   };

//   const handleUpdateProfile = () => {
//     setProfileData(profileData);
//     setShowUpdateProfile(true);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   const handleDivClick = () => {
//     navigate('/dashboard');
//   };

//   return (
//     <div className={GetReferredStyles['right-dashboard']}>
//       <ToastContainer />
//       {showOverlay && <div className={GetReferredStyles.overlay}></div>}
//       <div className={GetReferredStyles['right-dashboard-header']}>
//         <h1>Get Referred</h1>
//       </div>
//       <div className={GetReferredStyles['middle-box-updateprofile']}>
//         <form onSubmit={onSubmit}>
//           <div className={GetReferredStyles['form-group']}>
//             <label htmlFor="company_name">Company Name</label>
//             <input
//               type="text"
//               id="company_name"
//               name="company_name"
//               value={formData.company_name}
//               onChange={onChange}
//               required
//               disabled={!isEditable}
//               className={!isEditable ? GetReferredStyles['form-group input:disabled'] : ''}
//             />
//           </div>
//           <div className={GetReferredStyles['form-group']}>
//             <label htmlFor="job_url">Job URL</label>
//             <input
//               type="text"
//               id="job_url"
//               name="job_url"
//               value={formData.job_url}
//               onChange={onChange}
//               required
//               disabled={!isEditable}
//               className={!isEditable ? GetReferredStyles['form-group input:disabled'] : ''}
//             />
//           </div>
//         </form>
//       </div>
//       <div className={GetReferredStyles['bottom-box-updateprofile']}>
//         <button
//           type="submit"
//           onClick={onSubmit}
//           disabled={!isEditable}
//           className={!isEditable ? GetReferredStyles['ineditable'] : ''}
//         >
//           Request Referral
//         </button>
//       </div>
//       {showPopup && profileData && (
//         <div className={popupStyles['popup-overlay']}>
//           <div className={popupStyles['popup-box']}>
//             <h3>Your Profile Data</h3>
//             <p><strong>Current Job Role:</strong> {profileData.current_job_role}</p>
//             <p><strong>Current Company:</strong> {profileData.current_company}</p>
//             <p><strong>Resume:</strong> <a href="{profileData.resume}" target="_blank" rel="noopener noreferrer">View Resume</a></p>


//           </div>
//           <div className={popupStyles['popup-box-bottom']}>
//             <button onClick={handleConfirmProfile}>Confirm  Details</button>
//             <button onClick={handleUpdateProfile}>Update Profile</button>
//             <button onClick={handleClosePopup}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GetReferred;





// import React, { useState, useEffect } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { useProfile } from '../Context/ProfileContext';
// import { requestReferral } from '../services/api';
// import GetReferredStyles from '../styles/GetReferred.module.css';
// import popupStyles from '../styles/Popup.module.css';

// const GetReferred = ({ onUpdateProfile }) => {
//   const { profileData, fetchProfileData } = useProfile();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     company_name: '',
//     job_url: ''
//   });

//   const [isEditable, setIsEditable] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [toastShown, setToastShown] = useState(false);
//   const [showOverlay, setShowOverlay] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//     } else {
//       fetchProfileData(token);
//     }
//   }, [navigate, fetchProfileData]);

//   useEffect(() => {
//     if (!profileData || !profileData.current_job_role || !profileData.current_company || !profileData.resume) {
//       if (!toastShown) {
//         toast.error(
//           <div>
//             Please update your profile first.
//             <a
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 onUpdateProfile(profileData);
//               }}
//               style={{ marginLeft: '10px', color: 'blue', textDecoration: 'underline', cursor: 'pointer', textAlign: 'right' }}
//             >
//               Update Profile
//             </a>
//           </div>,
//           { autoClose: false, closeOnClick: false, draggable: false, closeButton: false }
//         );
//         setToastShown(true);
//       }
//       setIsEditable(false);
//       setShowOverlay(true);
//     }
//   }, [profileData, toastShown, onUpdateProfile]);

//   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const validateJobUrl = (url) => {
//     const re = /^(ftp|http|https):\/\/[^ "]+$/;
//     return re.test(String(url).toLowerCase());
//   };

//   const onSubmit = async e => {
//     e.preventDefault();

//     if (!formData.company_name || !formData.job_url) {
//       toast.error("All fields are required");
//       setIsLoading(false);
//       return;
//     }

//     if (!validateJobUrl(formData.job_url)) {
//       toast.error('Please enter a valid job URL');
//       setIsLoading(false);
//       return;
//     }

//     setIsLoading(true);
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         const response = await requestReferral(token, formData);
//         console.log('Referral request successful:', response);
//         setShowPopup(true);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Referral request failed:', error);
//         toast.error('Referral request failed.');
//         setIsLoading(false);
//       }
//     } else {
//       toast.error('No token found. Please log in.');
//       setIsLoading(false);
//     }
//   };

//   const handleConfirmProfile = () => {
//     setShowPopup(false);
//     toast.success('Referral request successful!', { icon: false });
//     setTimeout(() => {
//       setFormData({
//         company_name: '',
//         job_url: ''
//       });
//     }, 5000);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div className={GetReferredStyles['right-dashboard']}>
//       <ToastContainer />
//       {showOverlay && <div className={GetReferredStyles.overlay}></div>}
//       <div className={GetReferredStyles['right-dashboard-header']}>
//         <h1>Get Referred</h1>
//       </div>
//       <div className={GetReferredStyles['middle-box-updateprofile']}>
//         <form onSubmit={onSubmit}>
//           <div className={GetReferredStyles['form-group']}>
//             <label htmlFor="company_name">Company Name</label>
//             <input
//               type="text"
//               id="company_name"
//               name="company_name"
//               value={formData.company_name}
//               onChange={onChange}
//               required
//               disabled={!isEditable}
//               className={!isEditable ? GetReferredStyles['form-group input:disabled'] : ''}
//             />
//           </div>
//           <div className={GetReferredStyles['form-group']}>
//             <label htmlFor="job_url">Job URL</label>
//             <input
//               type="text"
//               id="job_url"
//               name="job_url"
//               value={formData.job_url}
//               onChange={onChange}
//               required
//               disabled={!isEditable}
//               className={!isEditable ? GetReferredStyles['form-group input:disabled'] : ''}
//             />
//           </div>
//         </form>
//       </div>
//       <div className={GetReferredStyles['bottom-box-updateprofile']}>
//         <button
//           type="submit"
//           onClick={onSubmit}
//           disabled={!isEditable}
//           className={!isEditable ? GetReferredStyles['ineditable'] : ''}
//         >
//           Request Referral
//         </button>
//       </div>
//       {showPopup && profileData && (
//         <div className={popupStyles['popup-overlay']}>
//           <div className={popupStyles['popup-box']}>
//             <h3>Your Profile Data</h3>
//             <p><strong>Current Job Role:</strong> {profileData.current_job_role}</p>
//             <p><strong>Current Company:</strong> {profileData.current_company}</p>
//             <p><strong>Resume:</strong> <a href={profileData.resume} target="_blank" rel="noopener noreferrer">View Resume</a></p>
//           </div>
//           <div className={popupStyles['popup-box-bottom']}>
//             <button onClick={handleConfirmProfile}>Confirm Details</button>
//             <button onClick={() => onUpdateProfile(profileData)}>Update Profile</button>
//             <button onClick={handleClosePopup}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GetReferred;





// import React, { useState, useEffect } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import { useProfile } from '../Context/ProfileContext';
// import { requestReferral } from '../services/api';
// import GetReferredStyles from '../styles/GetReferred.module.css';
// import popupStyles from '../styles/Popup.module.css';

// const GetReferred = ({ onUpdateProfile }) => {
//   const { profileData, fetchProfileData } = useProfile();
//   const [formData, setFormData] = useState({
//     company_name: '',
//     job_url: ''
//   });

//   const [isEditable, setIsEditable] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [toastShown, setToastShown] = useState(false);
//   const [showOverlay, setShowOverlay] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       toast.error('No token found. Please log in.');
//     } else {
//       fetchProfileData(token);
//     }
//   }, [fetchProfileData]);

//   useEffect(() => {
//     if (!profileData || !profileData.current_job_role || !profileData.current_company || !profileData.resume) {
//       if (!toastShown) {
//         toast.error(
//           <div>
//             Please update your profile first.
//             <a
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 onUpdateProfile(profileData);
//               }}
//               style={{ marginLeft: '10px', color: 'blue', textDecoration: 'underline', cursor: 'pointer', textAlign: 'right' }}
//             >
//               Update Profile
//             </a>
//           </div>,
//           { autoClose: false, closeOnClick: false, draggable: false, closeButton: false }
//         );
//         setToastShown(true);
//       }
//       setIsEditable(false);
//       setShowOverlay(true);
//     }
//   }, [profileData, toastShown, onUpdateProfile]);

//   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const validateJobUrl = (url) => {
//     const re = /^(ftp|http|https):\/\/[^ "]+$/;
//     return re.test(String(url).toLowerCase());
//   };

//   const onSubmit = async e => {
//     e.preventDefault();

//     if (!formData.company_name || !formData.job_url) {
//       toast.error("All fields are required");
//       setIsLoading(false);
//       return;
//     }

//     if (!validateJobUrl(formData.job_url)) {
//       toast.error('Please enter a valid job URL');
//       setIsLoading(false);
//       return;
//     }

//     setIsLoading(true);
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         const response = await requestReferral(token, formData);
//         console.log('Referral request successful:', response);
//         setShowPopup(true);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Referral request failed:', error);
//         toast.error('Referral request failed.');
//         setIsLoading(false);
//       }
//     } else {
//       toast.error('No token found. Please log in.');
//       setIsLoading(false);
//     }
//   };

//   const handleConfirmProfile = () => {
//     setShowPopup(false);
//     toast.success('Referral request successful!', { icon: false });
//     setTimeout(() => {
//       setFormData({
//         company_name: '',
//         job_url: ''
//       });
//     }, 5000);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div className={GetReferredStyles['right-dashboard']}>
//       <ToastContainer />
//       {showOverlay && <div className={GetReferredStyles.overlay}></div>}
//       <div className={GetReferredStyles['right-dashboard-header']}>
//         <h1>Get Referred</h1>
//       </div>
//       <div className={GetReferredStyles['middle-box-updateprofile']}>
//         <form onSubmit={onSubmit}>
//           <div className={GetReferredStyles['form-group']}>
//             <label htmlFor="company_name">Company Name</label>
//             <input
//               type="text"
//               id="company_name"
//               name="company_name"
//               value={formData.company_name}
//               onChange={onChange}
//               required
//               disabled={!isEditable}
//               className={!isEditable ? GetReferredStyles['form-group input:disabled'] : ''}
//             />
//           </div>
//           <div className={GetReferredStyles['form-group']}>
//             <label htmlFor="job_url">Job URL</label>
//             <input
//               type="text"
//               id="job_url"
//               name="job_url"
//               value={formData.job_url}
//               onChange={onChange}
//               required
//               disabled={!isEditable}
//               className={!isEditable ? GetReferredStyles['form-group input:disabled'] : ''}
//             />
//           </div>
//         </form>
//       </div>
//       <div className={GetReferredStyles['bottom-box-updateprofile']}>
//         <button
//           type="submit"
//           onClick={onSubmit}
//           disabled={!isEditable}
//           className={!isEditable ? GetReferredStyles['ineditable'] : ''}
//         >
//           Request Referral
//         </button>
//       </div>
//       {showPopup && profileData && (
//         <div className={popupStyles['popup-overlay']}>
//           <div className={popupStyles['popup-box']}>
//             <h3>Your Profile Data</h3>
//             <p><strong>Current Job Role:</strong> {profileData.current_job_role}</p>
//             <p><strong>Current Company:</strong> {profileData.current_company}</p>
//             <p><strong>Resume:</strong> <a href={profileData.resume} target="_blank" rel="noopener noreferrer">View Resume</a></p>
//           </div>
//           <div className={popupStyles['popup-box-bottom']}>
//             <button onClick={handleConfirmProfile}>Confirm Details</button>
//             <button onClick={() => onUpdateProfile(profileData)}>Update Profile</button>
//             <button onClick={handleClosePopup}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GetReferred;




// import React, { useState, useEffect } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import { useProfile } from '../Context/ProfileContext';
// import { requestReferral } from '../services/api';
// import GetReferredStyles from '../styles/GetReferred.module.css';
// import popupStyles from '../styles/Popup.module.css';

// const GetReferred = ({ onUpdateProfile }) => {
//   const { profileData, fetchProfileData } = useProfile();
//   const [formData, setFormData] = useState({
//     company_name: '',
//     job_url: ''
//   });

//   const [isEditable, setIsEditable] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [toastShown, setToastShown] = useState(false);
//   const [showOverlay, setShowOverlay] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       toast.error('No token found. Please log in.');
//     } else {
//       fetchProfileData(token);
//     }
//   }, [fetchProfileData]);

//   useEffect(() => {
//     if (!profileData || !profileData.current_job_role || !profileData.current_company || !profileData.resume) {
//       if (!toastShown) {
//         toast.error(
//           <div>
//             Please update your profile first.
//             <a
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 onUpdateProfile(profileData);
//               }}
//               style={{ marginLeft: '10px', color: 'blue', textDecoration: 'underline', cursor: 'pointer', textAlign: 'right' }}
//             >
//               Update Profile
//             </a>
//           </div>,
//           { autoClose: false, closeOnClick: false, draggable: false, closeButton: false }
//         );
//         setToastShown(true);
//       }
//       setIsEditable(false);
//       setShowOverlay(true);
//     }
//   }, [profileData, toastShown, onUpdateProfile]);

//   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const validateJobUrl = (url) => {
//     const re = /^(ftp|http|https):\/\/[^ "]+$/;
//     return re.test(String(url).toLowerCase());
//   };

//   const onSubmit = e => {
//     e.preventDefault();

//     if (!formData.company_name || !formData.job_url) {
//       toast.error("All fields are required");
//       return;
//     }

//     if (!validateJobUrl(formData.job_url)) {
//       toast.error('Please enter a valid job URL');
//       return;
//     }

//     setShowPopup(true);
//   };

//   const handleConfirmProfile = async () => {
//     setShowPopup(false);
//     setIsLoading(true);
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         const response = await requestReferral(token, formData);
//         console.log('Referral request successful:', response);
//         toast.success('Referral request successful!', { icon: false });
//         setFormData({
//           company_name: '',
//           job_url: ''
//         });
//       } catch (error) {
//         console.error('Referral request failed:', error);
//         toast.error('Referral request failed.');
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       toast.error('No token found. Please log in.');
//       setIsLoading(false);
//     }
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div className={GetReferredStyles['right-dashboard']}>
//       <ToastContainer />
//       {showOverlay && <div className={GetReferredStyles.overlay}></div>}
//       <div className={GetReferredStyles['right-dashboard-header']}>
//         <h1>Get Referred</h1>
//       </div>
//       <div className={GetReferredStyles['middle-box-updateprofile']}>
//         <form onSubmit={onSubmit}>
//           <div className={GetReferredStyles['form-group']}>
//             <label htmlFor="company_name">Company Name</label>
//             <input
//               type="text"
//               id="company_name"
//               name="company_name"
//               value={formData.company_name}
//               onChange={onChange}
//               required
//               disabled={!isEditable}
//               className={!isEditable ? GetReferredStyles['form-group input:disabled'] : ''}
//             />
//           </div>
//           <div className={GetReferredStyles['form-group']}>
//             <label htmlFor="job_url">Job URL</label>
//             <input
//               type="text"
//               id="job_url"
//               name="job_url"
//               value={formData.job_url}
//               onChange={onChange}
//               required
//               disabled={!isEditable}
//               className={!isEditable ? GetReferredStyles['form-group input:disabled'] : ''}
//             />
//           </div>
//           <div className={GetReferredStyles['bottom-box-updateprofile']}>
//             <button
//               type="submit"
//               disabled={!isEditable}
//               className={!isEditable ? GetReferredStyles['ineditable'] : ''}
//             >
//               Request Referral
//             </button>
//           </div>
//         </form>
//       </div>
//       {showPopup && profileData && (
//         <div className={popupStyles['popup-overlay']}>
//           <div className={popupStyles['popup-box']}>
//             <h3>Your Profile Data</h3>
//             <p><strong>Current Job Role:</strong> {profileData.current_job_role}</p>
//             <p><strong>Current Company:</strong> {profileData.current_company}</p>
//             <p><strong>Resume:</strong> <a href={profileData.resume} target="_blank" rel="noopener noreferrer">View Resume</a></p>
//           </div>
//           <div className={popupStyles['popup-box-bottom']}>
//             <button onClick={handleConfirmProfile} disabled={isLoading}>Confirm Details</button>
//             <button onClick={() => onUpdateProfile(profileData)}>Update Profile</button>
//             <button onClick={handleClosePopup}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GetReferred;

// import React, { useState, useEffect } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { useProfile } from '../Context/ProfileContext';
// import { requestReferral } from '../services/api';
// import GetReferredStyles from '../styles/GetReferred.module.css';
// import popupStyles from '../styles/Popup.module.css';

// const GetReferred = ({ onUpdateProfile }) => {
//   const { profileData, fetchProfileData } = useProfile();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     company_name: '',
//     job_url: ''
//   });

//   const [isEditable, setIsEditable] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [toastShown, setToastShown] = useState(false);
//   const [showOverlay, setShowOverlay] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//     } else {
//       fetchProfileData(token);
//     }
//   }, [navigate, fetchProfileData]);

//   useEffect(() => {
//     if (!profileData || !profileData.current_job_role || !profileData.current_company || !profileData.resume) {
//       if (!toastShown) {
//         toast.error(
//           <div>
//             Please update your profile first.
//             <a
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 onUpdateProfile(profileData);
//               }}
//               style={{ marginLeft: '10px', color: 'blue', textDecoration: 'underline', cursor: 'pointer', textAlign: 'right' }}
//             >
//               Update Profile
//             </a>
//           </div>,
//           { autoClose: false, closeOnClick: false, draggable: false, closeButton: false }
//         );
//         setToastShown(true);
//       }
//       setIsEditable(false);
//       setShowOverlay(true);
//     }
//   }, [profileData, toastShown, onUpdateProfile]);

//   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const validateJobUrl = (url) => {
//     const re = /^(ftp|http|https):\/\/[^ "]+$/;
//     return re.test(String(url).toLowerCase());
//   };

//   const onSubmit = e => {
//     e.preventDefault();

//     if (!formData.company_name || !formData.job_url) {
//       toast.error("All fields are required");
//       return;
//     }

//     if (!validateJobUrl(formData.job_url)) {
//       toast.error('Please enter a valid job URL');
//       return;
//     }

//     setShowPopup(true);
//   };

//   const handleConfirmProfile = async () => {
//     setShowPopup(false);
//     setIsLoading(true);
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         const response = await requestReferral(token, formData);
//         console.log('Referral request successful:', response);
//         toast.success('Referral request successful!', { icon: false });
//         setFormData({
//           company_name: '',
//           job_url: ''
//         });
//       } catch (error) {
//         console.error('Referral request failed:', error);
//         toast.error('Referral request failed.');
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       toast.error('No token found. Please log in.');
//       setIsLoading(false);
//     }
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div className={GetReferredStyles['right-dashboard']}>
//       <ToastContainer />
//       {showOverlay && <div className={GetReferredStyles.overlay}></div>}
//       <div className={GetReferredStyles['right-dashboard-header']}>
//         <h1>Get Referred</h1>
//       </div>
//       <div className={GetReferredStyles['middle-box-updateprofile']}>
//         <form onSubmit={onSubmit}>
//           <div className={GetReferredStyles['form-group']}>
//             <label htmlFor="company_name">Company Name</label>
//             <input
//               type="text"
//               id="company_name"
//               name="company_name"
//               value={formData.company_name}
//               onChange={onChange}
//               required
//               disabled={!isEditable}
//               className={!isEditable ? GetReferredStyles['form-group input:disabled'] : ''}
//             />
//           </div>
//           <div className={GetReferredStyles['form-group']}>
//             <label htmlFor="job_url">Job URL</label>
//             <input
//               type="text"
//               id="job_url"
//               name="job_url"
//               value={formData.job_url}
//               onChange={onChange}
//               required
//               disabled={!isEditable}
//               className={!isEditable ? GetReferredStyles['form-group input:disabled'] : ''}
//             />
//           </div>
//           <div className={GetReferredStyles['bottom-box-updateprofile']}>
//             <button
//               type="submit"
//               disabled={!isEditable}
//               className={!isEditable ? GetReferredStyles['ineditable'] : ''}
//             >
//               Request Referral
//             </button>
//           </div>
//         </form>
//       </div>
//       {showPopup && profileData && (
//         <div className={popupStyles['popup-overlay']}>
//           <div className={popupStyles['popup-box']}>
//             <h3>Your Profile Data</h3>
//             <p><strong>Current Job Role:</strong> {profileData.current_job_role}</p>
//             <p><strong>Current Company:</strong> {profileData.current_company}</p>
//             <p><strong>Resume:</strong> <a href={profileData.resume} target="_blank" rel="noopener noreferrer">View Resume</a></p>
//           </div>
//           <div className={popupStyles['popup-box-bottom']}>
//             <button onClick={handleConfirmProfile} disabled={isLoading}>Confirm Details</button>
//             <button onClick={() => onUpdateProfile(profileData)}>Update Profile</button>
//             <button onClick={handleClosePopup}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GetReferred;



import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../Context/ProfileContext';
import { requestReferral } from '../services/api';
import GetReferredStyles from '../styles/GetReferred.module.css';
import popupStyles from '../styles/Popup.module.css';

const GetReferred = ({ onUpdateProfile }) => {
  const { profileData, fetchProfileData } = useProfile();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company_name: '',
    job_url: ''
  });

  const [isEditable, setIsEditable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [toastShown, setToastShown] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetchProfileData(token);
    }
  }, [navigate, fetchProfileData]);

  useEffect(() => {
    if (!profileData || !profileData.current_job_role || !profileData.current_company || !profileData.resume) {
      if (!toastShown) {
        toast.error(
          <div>
            Please update your profile first.
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onUpdateProfile(profileData);
              }}
              style={{ marginLeft: '10px', color: 'blue', textDecoration: 'underline', cursor: 'pointer', textAlign: 'right' }}
            >
              Update Profile
            </a>
          </div>,
          { autoClose: false, closeOnClick: false, draggable: false, closeButton: false }
        );
        setToastShown(true);
      }
      setIsEditable(false);
      setShowOverlay(true);
    }
  }, [profileData, toastShown, onUpdateProfile]);

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateJobUrl = (url) => {
    const re = /^(ftp|http|https):\/\/[^ "]+$/;
    return re.test(String(url).toLowerCase());
  };

  const onSubmit = e => {
    e.preventDefault();

    if (!formData.company_name || !formData.job_url) {
      toast.error("All fields are required");
      return;
    }

    if (!validateJobUrl(formData.job_url)) {
      toast.error('Please enter a valid job URL');
      return;
    }

    setShowPopup(true);
  };

  const handleConfirmProfile = async () => {
    setShowPopup(false);
    setIsLoading(true);
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await requestReferral(token, formData);
        console.log('Referral request successful:', response);
        toast.success('Referral request successful!', { icon: false });
        setFormData({
          company_name: '',
          job_url: ''
        });
      } catch (error) {
        console.error('Referral request failed:', error);
        toast.error('Referral request failed.');
      } finally {
        setIsLoading(false);
      }
    } else {
      toast.error('No token found. Please log in.');
      setIsLoading(false);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={GetReferredStyles['right-dashboard']}>
      <ToastContainer />
      {showOverlay && <div className={GetReferredStyles.overlay}></div>}
      <div className={GetReferredStyles['right-dashboard-header']}>
        <h1>Get Referred</h1>
      </div>
      <div className={GetReferredStyles['middle-box-updateprofile']}>
        <form onSubmit={onSubmit}>
          <div className={GetReferredStyles['form-group']}>
            <label htmlFor="company_name">Company Name</label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              value={formData.company_name}
              onChange={onChange}
              required
              disabled={!isEditable}
              className={!isEditable ? GetReferredStyles['form-group input:disabled'] : ''}
            />
          </div>
          <div className={GetReferredStyles['form-group']}>
            <label htmlFor="job_url">Job URL</label>
            <input
              type="text"
              id="job_url"
              name="job_url"
              value={formData.job_url}
              onChange={onChange}
              required
              disabled={!isEditable}
              className={!isEditable ? GetReferredStyles['form-group input:disabled'] : ''}
            />
          </div>
        </form>
      </div>
      <div className={GetReferredStyles['bottom-box-updateprofile']}>
        <button
          type="submit"
          onClick={onSubmit}
          disabled={!isEditable}
          className={!isEditable ? GetReferredStyles['ineditable'] : ''}
        >
          Request Referral
        </button>
      </div>
      {showPopup && profileData && (
        <div className={popupStyles['popup-overlay']}>
          <div className={popupStyles['popup-box']}>
            <h3>Your Profile Data</h3>
            <p><strong>Current Job Role:</strong> {profileData.current_job_role}</p>
            <p><strong>Current Company:</strong> {profileData.current_company}</p>
            <p><strong>Resume:</strong> <a href={profileData.resume} target="_blank" rel="noopener noreferrer">View Resume</a></p>
          </div>
          <div className={popupStyles['popup-box-bottom']}>
            <button onClick={handleConfirmProfile} disabled={isLoading}>Confirm Details</button>
            <button onClick={() => onUpdateProfile(profileData)}>Update Profile</button>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetReferred;
