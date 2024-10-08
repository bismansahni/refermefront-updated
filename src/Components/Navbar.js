

// import React from 'react';
// import NavbarStyles from '../styles/Navbar.module.css';
// import { useProfile } from '../Context/ProfileContext';

// const NavbarItems = [
//   { name: 'Update Profile', component: 'Update Profile' },
//   { name: 'My Requests', component: 'My Requests' },
//   { name: 'Be A Referrer', component: 'Be A Referrer' },
//   { name: 'Get Referred', component: 'Get Referred' },
//   { name: 'Logout', component: 'Logout' } // Assuming you have a logout handling mechanism
// ];

// const Navbar = ({ onToggleDashboard }) => {
//   const { profileData } = useProfile();

//   return (
//     <div className={NavbarStyles['outer-navbar']}>
//       <div className={NavbarStyles['navbar-name-header']}>
//         <h1>{profileData ? profileData.name : 'Loading...'}</h1> 
//       </div>
//       <div className={NavbarStyles['nav-items-container']}>
//         {NavbarItems.map((item, index) => (
//           <div
//             key={index}
//             className={NavbarStyles['nav-item']}
//             onClick={() => onToggleDashboard(item.component)}
//           >
//             {item.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;





import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarStyles from '../styles/Navbar.module.css';
import { useProfile } from '../Context/ProfileContext';

const NavbarItems = [
  { name: 'Update Profile', component: 'Update Profile' },
  { name: 'My Requests', component: 'My Requests' },
  { name: 'Be A Referrer', component: 'Be A Referrer' },
  { name: 'Get Referred', component: 'Get Referred' },
  { name: 'Logout', component: 'Logout' } 
];

const Navbar = ({ onToggleDashboard }) => {
  const { profileData } = useProfile();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const getFirstName = (fullName) => {
    return fullName ? fullName.split(' ')[0] : 'Loading...';
  };

  return (
    <div className={NavbarStyles['outer-navbar']}>
      <div className={NavbarStyles['navbar-name-header']}>
        <h1>{profileData ? getFirstName(profileData.name) : 'Loading...'}</h1> 
      </div>
      <div className={NavbarStyles['nav-items-container']}>
        {NavbarItems.map((item, index) => (
          <div
            key={index}
            className={NavbarStyles['nav-item']}
            onClick={() => item.component === 'Logout' ? handleLogout() : onToggleDashboard(item.component)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
