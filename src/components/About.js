import React from "react";
import DescriptionIcon from "@material-ui/icons/Description";
// import resume from "../assets/resume.pdf";
import salesforce from "../assets/images/salesforce.png";
import session1 from "../assets/images/session1.PNG";
import session2 from "../assets/images/session2.PNG";
import YouTubeIcon from "@material-ui/icons/YouTube";
import randomBlog from "../assets/images/randomblog.JPG";
import top from "../assets/images/top.JPG";
import execution from "../assets/images/execution.JPG";

// import sales from "../assets/images/sales.png";
import cloud from "../assets/images/cloud.png";
import browser from "../assets/images/browser.png";
// import ai from "../assets/images/ai.png";
// import web from "../assets/images/web.png";
// import port from "../assets/images/portfolio.svg";
import Skillcard from "./Skillcard";
import ContactsIcon from "@material-ui/icons/Contacts";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    {
      id: 1,
      icon: browser,
      title: "Front-End Development",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 2,
      icon: cloud,
      title: "Cloud Computing",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 3,
      icon: salesforce,
      title: "Salesforce Adminstration",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 4,
      icon: salesforce,
      title: "Salesforce Development",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    // {
    //   id: 5,
    //   icon: ai,
    //   title: "Internet of Things - IoT",
    //   about: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    // },
    // {
    //   id: 6,
    //   icon: web,
    //   title: "Back-End Development",
    //   about: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    // },
  ];

  const sessions = [
    {
      id: 1,
      title: "Introduction to Bootstrap",
      link: session1,
      details:
        "This hands-on tutorial is from my first ever live session I conducted on one the most demanding and famous CSS frameworks called Bootstrap. Date: 20/12/2020     Time: 8PM PST ",
      youtubeLink: "https://youtu.be/2aQsSNF8538",
    },
    {
      id: 1,
      title: "Getting Familiar with SASS/SCSS",
      link: session2,
      details:
        "This hands-on tutorial is from my the live session I conducted on one the most demanding web technologies - SASS which is short for Syntactically Awesome Stylesheets. Date: 17/07/2021 ",
      youtubeLink: "https://youtu.be/9eCGLMgSVKQ",
    },
  ];

  const blogs = [
    {
      id: 1,
      title: "Top Used Firefox Extension",
      img: top,
      date: "May 20, 2020",
      link: "https://medium.com/@aneelareiko/top-used-firefox-extension-c4d12ffe97f1",
    },
    {
      id: 2,
      title: "Random Number Quiz in JavaScript",
      img: randomBlog,
      date: "Aug 31, 2020",
      link: "https://medium.com/@aneelareiko/random-number-quiz-in-javascript-50ca06ab319",
    },
    {
      id: 3,
      title: "Execution Context and Execution Stack in JavaScript",
      img: execution,
      date: "Sep 13, 2020",
      link: "https://medium.com/@aneelareiko/execution-context-and-execution-stack-in-javascript-1c9949114cb0",
    },
  ];
  // ------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------
  const about_variants = {
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
      className="about"
      variants={about_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <p className="quote">
        {" "}
        “There are three responses to a piece of design – yes, no, and{" "}
        <span>WOW!</span> Wow is the one to aim for”
      </p>
      <p className="about_intro">
        A competent and committed Web Design and Development graduate looking
        for a rewarding career in the Information Technology sector. Highly
        focused with a comprehensive knowledge of designing and developing the
        layout, visual appearance and usability of a website. Possessing a
        proven track record of successfully completing projects from the concept
        through to design, testing and handover. Eager to learn, easy going by
        nature and able to get along with both work colleagues and senior
        managers. Currently looking for a suitable graduate web developer
        position with a progressive employer.
      </p>

      <button className="btn btn1">
        <ContactsIcon /> Hire Me
      </button>
      <a href="/" className="btn btn2" download="resume.pdf">
        {" "}
        <DescriptionIcon /> Download Resume
      </a>
      <div className="container about_container my-5">
        <h3 className="services">My Expertise</h3>

        <div className="row">
          {skills.map((skill, ind) => (
            <Skillcard skill={skill} key={ind} />
          ))}
        </div>
      </div>

      <div className="container sessions">
        <h3>Live Sessions</h3>
        <p className="my-5">
          I am <b className="text-uppercase ">Microsoft Learn Student Ambassador</b> . I love spending time teaching
          people about the wonders of developing websites and applications by
          running workshops, at Microsoft Learn Student Ambassadors Club,
          Jamshoro.
        </p>
        <div className="row">
          {sessions.map((session) => {
            return (
              <div className="col-lg-6 ">
                <div className="card text-center">
                  <img src={session.link} alt="" />
                  <h5 className="my-3">{session.title}</h5>
                  <p className="d-lg-block d-none">{session.details}</p>
                  <button className="btn">
                    {" "}
                    <YouTubeIcon />{" "}
                    <a
                      href={session.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in YouTube
                    </a>{" "}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container blogs">
        <h3>Latest blogs</h3>
        <div className="row">
          {blogs.map((blog) => {
            return (
              <div className="col-lg-6">
                <div className="blog_container">
                  <img src={blog.img} alt="blog" className="img-fluid" />
                  <h6>{blog.title}</h6>
                  <p>{blog.date}</p>
                  <div className="openLink">
                    <a href={blog.link}  target="_blank"
                      rel="noopener noreferrer" className="text-uppercase">read more</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
