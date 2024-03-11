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
                    Mostrar navegación
                </a>
                <a className="mobile-btn" href="#" title="Hide navigation">
                    Ocultar navegación
                </a>
                <ul id="nav" className="nav">
                    <li className="current">
                        <a className="smoothscroll" href="#home">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#about">
                            Sobre mí
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#resume">
                            Resumen
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#portfolio">
                            Proyectos personales
                        </a>
                    </li>

                    <a
                        href="/ANDRISON-CV.pdf"
                        className="btn-cv"
                        download="CV de Andrison"
                    >
                        <li>Descargar CV</li>
                    </a>
                </ul>
            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">
                        {data.personalInfo.name}
                    </h1>
                    <h3
                        style={{
                            color: "#fff",
                            fontFamily: "sans-serif "
                        }}
                    >
                        {data.personalInfo.role}
                        <br />
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
