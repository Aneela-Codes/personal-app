// import {useState, useEffect,React} from "react";
// import { Link } from "react-router-dom";

// const SideNavbar = () => {
//   const [active, setActive] = useState("Social Life");

//   useEffect(() => {
//     let currentURL = window.location.href;

//     if (currentURL.endsWith("/certifications")) {
//       setActive("Certifications");
//     } else if (currentURL.endsWith("/sociallife")) {
//       setActive("Social Life");
//     } else if (currentURL.endsWith("/techtalks")) {
//       setActive("Tech Talks");
//     }
//   }, [active]);
//   return (
//     <div>
//       <div className="side_heading active">
//         <h1>{active}</h1>
//       </div>
//       <div className="menu">
//       {active !== "Social Life" ? (
//           <Link to="/SocialLife">
//             <div onClick={() => setActive("Social Life")}>
              
//               <h5>Social Life</h5>
//             </div>
//           </Link>
//         ) : null}
//         {active !== "Certifications" && (
//           <Link to="/certifications">
//             <div onClick={() => setActive("Certifications")}>
            
//               <h5>Certifications</h5>
//             </div>
//           </Link>
//         )}
       
//         {active !== "TechTalks" && (
//           <Link to="TechTalks">
//             <div onClick={() => setActive("TechTalks")}>
              
//               <h5>TechTalks</h5>
//             </div>
//           </Link>
//         )}     
      
//       </div>
//     </div>
//   );
// };

// export default SideNavbar;
