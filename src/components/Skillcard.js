import React from "react";


const Skillcard = ({ skill:{id,icon, title, about} }) => (
  <div className="col-lg-6" key={id}>
    <div className="skill-card">
      <div className="card-body">
         {/* <a href="">{icon}</a> */}
        <img src={icon} alt=""  />

        <h6 className="card-title">{title}</h6>
      </div>
      <p>{about}</p>

    </div>
  </div>
);

export default Skillcard;
