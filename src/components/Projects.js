import { useState, React, useEffect } from "react";
import "../styles/Projects.css";
// import projects_data from '../components/Data/projects_data'
// import ProjectCard from '../components/ProjectCard'
// import { Scrollbars } from 'react-custom-scrollbars-2';

import mera from "../assets/images/mera.PNG";
import carousel from "../assets/images/carousel.JPG";
import resume from "../assets/images/resume.PNG";
import cart from "../assets/images/cart.PNG";
import quizgame from "../assets/images/quizgame.PNG";
import ecommerce from "../assets/images/ecommerce.PNG"
import port from "../assets/images/port.PNG";
import racegame from "../assets/images/racegame.PNG";
import notes from "../assets/images/notes.PNG";
import profile from "../assets/images/profile.PNG";
// import sidebar from "../assets/images/sidebar.PNG";
import typing from "../assets/images/typing.PNG";
import { motion } from "framer-motion";
// import { SRLWrapper } from "simple-react-lightbox";

const images = [
  {
    id: 1,
    title: "Grocery Store E-commerce Website" ,
    ImgName: ecommerce,
    tag: "Bootstrap",
    github: "https://github.com/Aneela-Codes/full-website",
    URL:"https://aneela-codes.github.io/full-website/home.html"
  },
  {
    id: 2,
    title: "Tourism Website" ,
    ImgName: mera,
    tag: "CSS",
    github: "https://github.com/Aneela-Codes/Mera-Pakistan",
    URL:"https://aneela-codes.github.io/Mera-Pakistan/"
  },
  {
    id: 3,
    title: "Cool Carousel",
    ImgName: carousel,
    tag: "JavaScript",
    github: "https://github.com/Aneela-Codes/Landing-page",
    URL:"https://aneela-codes.github.io/Landing-page/"
  },
  {
    id: 4,
    title: "Dynamic Resume",
    ImgName: resume,
    tag: "JavaScript",
    github: "https://github.com/Aneela-Codes/Mera-Pakistan",
    URL:"https://aneela-codes.github.io/Mera-Pakistan/"
  },
  {
    id: 5,
    title:"Shopping Cart",
    ImgName: cart,
    tag: "React",
    github: "https://github.com/Aneela-Codes/shopping-cart",
    URL:"https://aneela-codes.github.io/shopping-cart/"
  },
  {
    id: 6,
    title:"Static Portfolio",
    ImgName: port,
    tag: "Bootstrap",
    github: "https://github.com/Aneela-Codes/Portfolio-Aneela-Oad/",
    URL:"https://aneela-codes.github.io/Portfolio-Aneela-Oad/"
  },
  {
    id: 7,
    title:'Car Race Game',
    ImgName: racegame,
    tag: "JavaScript",
    github: "https://github.com/Aneela-Codes/car-racing-game",
    URL:"https://aneela-codes.github.io/car-racing-game/"
  },
  {
    id: 8,
    title:"Typing Calculator",
    ImgName: typing,
    tag: "JavaScript",
    github: "https://github.com/Aneela-Codes/typing-calculator",
    URL:"https://aneela-codes.github.io/typing-calculator/"
  },
  {
    id: 9,
    title:"Quiz Game",
    ImgName: quizgame,
    tag: "JavaScript",
    github: "https://github.com/Aneela-Codes/MCQ-s-web-app",
    URL:"https://aneela-codes.github.io/MCQ-s-web-app//"
    
  },
  {
    id: 10,
    title:"Notes Keeper",
    ImgName: notes,
    tag: "React",
    github: "https://github.com/Aneela-Codes/notes-keeper",
    URL:"https://aneela-codes.github.io/notes-keeper/"
    
  },
  {
    id: 11,
    title:"My personal website",
    ImgName: profile,
    tag: "React",
    github: "https://github.com/Aneela-Codes/personal-app",
    URL:"https://aneela-codes.github.io/personal-app/"
    
  },
];
// const options = {
//     settings: {
//       autoplaySpeed: 3000,
//       boxShadow: 'none',
//       disableKeyboardControls: false,
//       disablePanzoom: false,
//       disableWheelControls: false,
//       hideControlsAfter: 3000,
//       lightboxTransitionSpeed: 0.3,
//       lightboxTransitionTimingFunction: 'linear',
//       overlayColor: 'rgba(200, 30, 30, 0.9)',
//       overs
//       slideAnimationType: 'fade',
//       slideSpringValues: [300, 50],
//       slideTransitionSpeed: 0.6,
//       slideTransitionTimingFunction: 'linear',
//       usingPreact: false
//     }
//   }

const Projects = () => {
  const [tag, setTag] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "All"
      ? setFilteredImages(images)
      : setFilteredImages(
          images.filter((img) => {
            return img.tag === tag;
          })
        );
  }, [tag]);

  const project_variants = {
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
      className="container projects"
      variants={project_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="projects__navbar">
        <div className="navbar_item" onClick={() => setTag("All")}>
          All
        </div>
        <div className="navbar_item" onClick={() => setTag("React")}>
          {" "}
          React{" "}
        </div>
        <div className="navbar_item" onClick={() => setTag("Bootstrap")}>
          Bootstrap
        </div>
        {/* <div className="navbar_item" onClick={() => setTag("node.js")}>
          Node
        </div> */}
        <div className="navbar_item" onClick={() => setTag("JavaScript")}>
          JavaScript
        </div>
      </div>
      <div className="projects_container container">
        <div className="left"></div>
    
          <div className="row row_container">
            {filteredImages.map((img) => {
              return (
                <div className="col-lg-6 " key={img.id}>
                  <div className=" card project_card ">        
                      <img src={img.ImgName} alt="projects" className="img-fluid" />   
                      <h6>{img.title}</h6>

                      <div className="card_footer">
                       <a href={img.github}  target="_blank"
                      rel="noopener noreferrer">github</a>
                       <a href={img.URL}  target="_blank"
                      rel="noopener noreferrer" >preview</a>
                      </div>            
                  </div>
                </div>
              );
            })}
          </div>
        
        <div className="right"></div>
      </div>
    </motion.div>
  );
};

export default Projects;
