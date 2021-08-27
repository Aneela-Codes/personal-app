import React from 'react'
import { motion } from 'framer-motion'

const Blogs = () => {
  
 const blog_variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.2, duration: 0.6,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: 'easeInOut'
        }
    }
  }
     
    return (
        <motion.div  
          variants={blog_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h1>Blogs</h1>
        </motion.div>
    )
}

export default Blogs
