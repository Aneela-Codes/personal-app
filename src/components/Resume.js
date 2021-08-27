import React from "react";

import git from "../assets/images/git.png";
import vscode from "../assets/images/vscode.png";
import postman from "../assets/images/postman.png";
import mysql from "../assets/images/mysql.png";
import { motion } from "framer-motion";
import GallerySlide from "../components/GallerySlide";
import "./../styles/resume.css";
import Timeline from "./Timeline";
// import git from 'https://img.icons8.com/color/48/4a90e2/git.png'

const Resume = () => {
  const tools = [
    {
      icon: git,
      name: "Git",
    },
    {
      icon: vscode,
      name: "Visual Studio Code",
    },
    {
      icon: postman,
      name: "Postman",
    },
  ];
  const databases = [
    {
      icon: mysql,
      name: "MySQL",
    },
  ];

  const resume_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="resume"
      variants={resume_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 education">
            <h3>Education</h3>
            <div className="card">
              <h5>Computer Engineering</h5>
              <p> Mehran University of Engineering and Technology, Jamshoro </p>
              <p>2018-2022</p>
              <p>
                While still being the final year student, most of time I spend
                teaching people about the wonders of developing websites and
                applications by running workshops/sessions, at Microsoft Learn Student
                Ambassadors Club, Jamshoro.
              </p>
            </div>
          </div>
          <div className="col-lg-6 experience">
            <h3>Experience</h3>
            <div className="card">
              <h5>Web Developer</h5>
              <p>Logincinflux LTD, UK</p>
              <p>January 2021- June 2021</p>
              <p>
                During the time of the internship, I learned and worked with
                technologies i.e. C#, MS SQL and .Net Framework which I learned
                while working.
              </p>
            </div>
            {/* <div className="card">
              <h5>Salesforce Expert</h5>
              <p>2018-2020</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                odio repellat amet numquam delectus sed maiores tenetur
                consequatur unde voluptatum!
              </p>
            </div> */}
          </div>
        </div>
        <hr />
      </div>
      <div className="container techo_container ">
        <h3>Technologies</h3>
        <GallerySlide />
      </div>

      <div className="container">
        <h3>Technical Skills</h3>

        <div className="row tech_skills">
          <div className="">
            <li>
              {" "}
              <span>Standard Force.com Capabilities:</span> Workflow/Validation
              rules, Approval processes, Sharing/Security models, Reports,
              Dashboards, Analytic functionality, Sites/Portals/Communities,
              Chatter, Migration tools (Ant, Workbench, Data Loader), REST/SOAP
              API, Unit tests
            </li>
            <li>
              <span>Apex:</span> Async Apex (batch jobs, future calls,
              schedulers), Dynamic Apex, SOQL/SOSL/DML operation, SOQL query
              optimizations, Custom SOAP/REST services, Integration with
              external SOAP/REST services, Mock interfaces, Security and Sharing
              model in Apex, Apex triggers, Distributing Apex in managed
              packages
            </li>
            <li>
              {" "}
              <span>VisualForce:</span> Standard component library, Custom
              components, VisualForce Remoting, Visualforce Remote Objects, Ajax
              capabilities, VisualForce templates, Standard
              controllers/controller extensions
            </li>
            <li>
              {" "}
              <span>Front-end:</span> HTML5, CSS, SASS, Bootstrap, JavaScript, ReactJS
            </li>
            {/* <li>Technologies: JS, JSON, XML, AJAX</li> */}
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <h3>Developer tools</h3>
            {tools.map((tool) => {
              const { icon, name } = tool;
              return (
                <div className="d-flex">
                  <img src={icon} alt="" />
                  <h6>{name}</h6>
                </div>
              );
            })}
          </div>
          <div className="col-lg-6">
            <h3>databases</h3>
            {databases.map((database) => {
              const { icon, name } = database;
              return (
                <div className="d-flex">
                  <img src={icon} alt="" />
                  <h6>{name}</h6>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <hr />
      <Timeline />
    </motion.div>
  );
};

export default Resume;
