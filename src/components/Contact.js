import React from "react";
import { motion } from "framer-motion";
import "./../styles/contact.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
// import MediumIcon from "@material-ui/icons/Medium";
const Contact = () => {
    const contact_variants = {
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
            variants={contact_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="contact"
        >
            <div className="contact_container text-center">
                <div className="contact_heading">
                    <h3 className="my-3">Contact</h3>
                </div>
                <p className="my-3">
                    Interested in hiring me for your project or just want to say hi? You
                    can fill in the contact form below or send me an email to
                    simon.doe@yourwebsite.com
                </p>
                <p className="my-4">Want to get connected? Follow me on the social channels below.</p>
                <div className="social_accounts">
                    <a  href="https://www.facebook.com/aneelareiko/" target="_blank" rel="noopener noreferrer"><FacebookIcon color="primary" /></a>
                    <a  href="https://www.twitter.com/OadAneela"  target="_blank" rel="noopener noreferrer"><TwitterIcon color="primary" /></a>
                    <a  href="https://www.linkedin.com/in/aneela-oad-0976141a3/"  target="_blank" rel="noopener noreferrer"><LinkedInIcon color="primary" /></a>
                    <a  href="https://www.instagram.com/_aneela.reiko/"  target="_blank" rel="noopener noreferrer"><InstagramIcon color="primary" /></a>
                    <a  href="https://www.youtube.com/channel/UCYWZNkrqqVcuIr1vlTpOEGw" rel="noopener noreferrer" target="_blank"><YouTubeIcon color="primary" /></a>
                    <a href="https://github.com/Aneela-Codes"  rel="noopener noreferrer" target="_blank"> <GitHubIcon/></a>
                   <a  href="https://medium.com/@aneelareiko"  target="_blank" rel="noopener noreferrer"><i className="fab fa-medium"></i></a>
                </div>
                <form action="" className="my-5">
                    <h4>Get In Touch</h4>
                    <div className="row inputs">
                        <div className="col-lg-6">
                            <input type="text" className="form-control my-3" aria-describedby="emailHelp" placeholder="Name"></input>

                        </div>
                        <div className="col-lg-6">
                            <input type="email" className="form-control my-3" aria-describedby="emailHelp" placeholder="Email"></input>

                        </div>
                        <div className="col-lg-12 my-3">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>

                        </div>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;
