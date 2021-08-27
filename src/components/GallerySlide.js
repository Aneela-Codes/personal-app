import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import tt from "../assets/images/frr.png";

import python from "../assets/images/python.png";
import azure from "../assets/images/azure.png";
// import css from "../assets/images/css.png";
import sass from "../assets/images/sass.png";
import react from "../assets/images/react.png";
import salesforce from "../assets/images/salesforce.png";
import boot from "../assets/images/boot.png";
import javascript from "../assets/images/javascript logo.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}

export default class PauseOnHover extends Component {
  
  render() {

    const techs = [
      {
          icon: react,
          name:"ReactJS",
          description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia odio repellat amet numquam delectus sed maiores tenetur consequatur unde voluptatum!"
      },
      {
         icon: salesforce,
         name:"Salesforce Apex",
         description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia odio repellat amet numquam delectus sed maiores tenetur consequatur unde voluptatum!"
     },
      {
         icon: python,
         name:"Python 3",
         description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia odio repellat amet numquam delectus sed maiores tenetur consequatur unde voluptatum!"
     },
     {
         icon: azure,
         name:"Azure",
         description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia odio repellat amet numquam delectus sed maiores tenetur consequatur unde voluptatum!"
     },
     {
         icon: javascript,
         name:"JavaScript",
         description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia odio repellat amet numquam delectus sed maiores tenetur consequatur unde voluptatum!"
     },
     {
      icon: boot,
      name:"Bootstap",
      description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia odio repellat amet numquam delectus sed maiores tenetur consequatur unde voluptatum!"
  },
  {
    icon: sass,
    name:"SASS",
    description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia odio repellat amet numquam delectus sed maiores tenetur consequatur unde voluptatum!"
},
{
  icon: tt,
  name:"HTML CSS JS",
  description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia odio repellat amet numquam delectus sed maiores tenetur consequatur unde voluptatum!"
}
  ]

    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slider ">
        <Slider {...settings}>
          { 
            techs.map((tech)=>{
              const {icon, name} = tech;
              return(
                <div className="slideItem" >
                <img  src={icon} alt=""  /> 
                <h6 className="text-center">{name}</h6>
           </div>
              )
            })
          }
       
        </Slider>
      </div>
    );
  }
}