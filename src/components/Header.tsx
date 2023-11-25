import React from "react"
import resumeData from "../resumeData"

interface Props {
    data: {
        personalInfo: typeof resumeData.header
        socialLinks: typeof resumeData.socialLinks
    }
}

const Header = ({ data }: Props) => {
    return (
        <header id="home">
            <nav id="nav-wrap">
                <a
                    className="mobile-btn"
                    href="#nav-wrap"
                    title="Show navigation"
                >
                    Show navigation
                </a>
                <a className="mobile-btn" href="#" title="Hide navigation">
                    Hide navigation
                </a>
                <ul id="nav" className="nav">
                    <li className="current">
                        <a className="smoothscroll" href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#resume">
                            Resume
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#portfolio">
                            Works
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#testimonials">
                            Testimonials
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">
                        I am {data.personalInfo.name}.
                    </h1>
                    <h3
                        style={{
                            color: "#fff",
                            fontFamily: "sans-serif "
                        }}
                    >
                        I am a {data.personalInfo.role}
                        {data.personalInfo.roleDescription}
                    </h3>
                    <hr />
                    <ul className="social">
                        {data.socialLinks &&
                            data.socialLinks.map((item) => {
                                return (
                                    <li key={item.name}>
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <i className={item.className}></i>
                                        </a>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                    <i className="icon-down-circle"></i>
                </a>
            </p>
        </header>
    )
}

export default Header
