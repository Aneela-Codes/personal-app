import React from "react";
import logo from "../assets/images/logo.jpg";
// import resume from "../assets/resume.pdf";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import DescriptionIcon from "@material-ui/icons/Description";
// import SideNavbar from "./SideNavbar";
import { motion } from "framer-motion";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import PhoneEnabledRoundedIcon from "@material-ui/icons/PhoneEnabledRounded";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import SendIcon from '@material-ui/icons/Send';



const Sidebar = () => {
  const handleEmail = () => {
    window.open("emailto:aneelareiko@gmail.com");
  };

  const sidebar_variants = {
    hidden: {
      x: "-20vw",
      // opacity:0
    },
    visible: {
      x: "1vw",

      transition: {
        delay: 0.3,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      variants={sidebar_variants}
      initail="hidden"
      animate="visible"
      className="app_sidebar"
    >
      <div className="profile_img">
        <img src={logo} alt="" className="img-fluid sidebar_img" />
      </div>
      <div className="profile_name">
        <h1>
          {" "}
          Aneela <span> Oad</span>
        </h1>
      </div>
      <div className="profile_details profile_title">
        {/* <h2>Cloud Engineer</h2> */}
        <p>
          Hi, my name is Aneela Oad and I'm a computer engineer student. Welcome
          to my personal website!
        </p>
      </div>

      <figure className="sidebar_social_icons container">
        <a href="https://www.youtube.com/channel/UCYWZNkrqqVcuIr1vlTpOEGw">
          <YouTubeIcon color="primary" />
        </a>

        <a href="https://www.twitter.com/OadAneela" rel="noopener noreferrer" target="_blank">
          <TwitterIcon color="primary" />
        </a>
        <a
          href="https://www.linkedin.com/in/aneela-oad-0976141a3/"
          target="_blank" rel="noopener noreferrer"
        >
          <LinkedInIcon color="primary" />
        </a>
        <a href="https://github.com/Aneela-Codes" target="_blank" rel="noopener noreferrer">
          <GitHubIcon color="primary" />
        </a>
        {/* <a href="https://medium.com/@aneelareiko" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-medium"></i>
        </a> */}
      </figure>
      <hr />
      <div className="container general_info">
        <h6 >General Information</h6>
        <table>
          <tr>
            <td>
              {" "}
              <EmailRoundedIcon /> Email{" "}
            </td>
            <td>:</td>
            <td>aneelareiko@gmail.com</td>
          </tr>
          <tr>
            <td>
              {" "}
              <PhoneEnabledRoundedIcon /> Phone{" "}
            </td>
            <td>:</td>
            <td>090078019</td>
          </tr>
          <tr>
            <td>
              {" "}
              <LocationOnRoundedIcon /> Location{" "}
            </td>
            <td>:</td>

            <td>Hyderabad</td>
          </tr>
        </table>
        <button className="profile_details profile_email btn" onClick={handleEmail}>   <span>Send Email</span> 
          <div className="sendIcon">
          <SendIcon/>
          </div>
         </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
