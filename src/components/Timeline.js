import React from 'react'
const timeline =
    [ {
        year: 'June 2021 - Current',
        job: 'Salesforce Adminstrator | DevCreatives INC.',
        detail: 'Exploring more of software as a service CRM Salesforce. In future, I plan to discover Salesforce Development side.'
    },
        {
            year: 'Jan 2021 - Jun 2021',
            job: 'Web Developer | Logicinflux LTD, UK',
            detail: 'During the time of the internship, I learned and worked with technologies i.e. C#, MS SQL and .Net Framework which I learned while working.'
        },
       
        {
            year: 'April 2020 - October 2020',
            job: 'Tech Karo Web development Course | CircleWomen',
            detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facere repellendus ex velit at vel reiciendis neque, tenetur dolorum. Modi?'
        }
      
        // {
        //     year: 'February 2020',
        //     job: 'Microsoft Learn Student Student Ambassador | MUET, Jamshoro.',
        //     detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facere repellendus ex velit at vel reiciendis neque, tenetur dolorum. Modi?'
        // }
    ]


const Timeline = () => {
    return (
        <div className="timeline">
            <div className="container">
               <h3>Timeline</h3>
                <div className="time-line">
                    <div className="circle"></div>
                    <ul>
                        {
                            timeline.map((activity) => {
                                return (
                                    <li className="col-lg-6">
                                        <div className="time1 timespan">
                                            <p>{activity.year}</p>
                                        </div>
                                        <div className="timeline-content">
                                            <p className="job">{activity.job}</p>
                                            <p className="detail-para d-none d-lg-block d-xl-none d-xl-block">{activity.detail}</p>
                                        </div>

                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Timeline
