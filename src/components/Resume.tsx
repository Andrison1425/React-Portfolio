import React from "react"
import resumeData from "../resumeData"

interface Props {
    data: typeof resumeData.myResume
}

const Resume = ({ data }: Props) => {
    return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1>
                        <span>Educación</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    {data.education &&
                        data.education.map((item, index) => {
                            return (
                                <div
                                    className="row item"
                                    key={"education" + index}
                                >
                                    <div className="twelve columns">
                                        <h3>{item.UniversityName}</h3>
                                        <p className="info">
                                            {item.specialization}
                                            <span>&bull;</span>{" "}
                                            <em className="date">
                                                {item.MonthOfPassing}{" "}
                                                {item.YearOfPassing}
                                            </em>
                                        </p>
                                        <p>{item.Achievements}</p>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
            <div className="row work">
                <div className="three columns header-col">
                    <h1>
                        <span>Experiencia</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    {data.work &&
                        data.work.map((item, index) => {
                            return (
                                <div className="row item" key={"work" + index}>
                                    <div className="twelve columns">
                                        <h3>{item.CompanyName}</h3>
                                        <p className="info">
                                            {item.specialization}
                                            <span>&bull;</span>{" "}
                                            <em className="date">
                                                {item.MonthOfLeaving}{" "}
                                                {item.YearOfLeaving}
                                            </em>
                                        </p>
                                        <p>{item.Achievements}</p>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>

            <div className="row skill">
                <div className="three columns header-col">
                    <h1>
                        <span>Skills</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    <p>{data.skillsDescription}</p>

                    <div className="bars">
                        <ul className="skills">
                            {data.skills &&
                                data.skills.map((item, index) => {
                                    return (
                                        <li key={"skills" + index}>
                                            <span
                                                className={`bar-expand ${item.skillname.toLowerCase()}`}
                                            ></span>
                                            <em>{item.skillname}</em>
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume
