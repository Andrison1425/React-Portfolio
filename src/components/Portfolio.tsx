import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import resumeData from "../resumeData"
import { faAngular } from "@fortawesome/free-brands-svg-icons"

interface Props {
    data: typeof resumeData.portfolio
}

const Porfolio = ({ data }: Props) => {
    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Mira algunos de mis proyectos personales.</h1>
                    <div
                        id="portfolio-wrapper"
                        className="bgrid-quarters s-bgrid-thirds cf"
                    >
                        <div>
                            <h2>Chanime</h2>
                            <div className="proyectos__cont-prin-app">
                                <div className="cont-app-img">
                                    <img
                                        src="images/portfolio/chanime/screen.jpeg"
                                        alt="Puzeos Screen"
                                    />
                                    <img
                                        src="images/portfolio/chanime/screen2.jpeg"
                                        alt="Puzeos Screen"
                                        className="img-sec"
                                    />
                                </div>
                                <div className="cont-info">
                                    <h4>Características</h4>
                                    <ul>
                                        <li>
                                            Envío de mensajes de texto, voz,
                                            imágenes, audio, videos y
                                            documentos.
                                        </li>
                                        <li>
                                            Datos y archivos se guardan de
                                            manera local para el uso sin
                                            conexión.
                                        </li>
                                        <li>
                                            Sistema de registro e inicio de
                                            sesión.
                                        </li>
                                        <li>Notificaciones push.</li>
                                        <li>Perfiles de usuario.</li>
                                        <li>Modo oscuro y multidiomas.</li>
                                        <li>
                                            Permite bloquear usuarios o eliminar
                                            chats.
                                        </li>
                                        <li>Buscador de mensajes.</li>
                                    </ul>
                                    <h4>Tecnologías</h4>
                                    <div className="cont-tec">
                                        <li id="ionic">
                                            <svg>
                                                <use href="#ico-ionic"></use>
                                            </svg>
                                            <h4>Ionic</h4>
                                        </li>
                                        <li id="angular">
                                            <FontAwesomeIcon
                                                icon={faAngular}
                                                id="angular"
                                            />
                                            <h4>Angular</h4>
                                        </li>
                                        <li id="typescript">
                                            <svg>
                                                <use href="#ico-typescript"></use>
                                            </svg>
                                            <h4>TypeScript</h4>
                                        </li>
                                        <li id="firebase">
                                            <svg>
                                                <use href="#ico-firebase"></use>
                                            </svg>
                                            <h4>Firebase</h4>
                                        </li>
                                    </div>

                                    <a
                                        href="/apps/chanime.apk"
                                        target="chanime"
                                        className="boton"
                                    >
                                        Descargar aplicación móvil (Android)
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2>Musicalia</h2>
                            <div className="proyectos__cont-prin-app">
                                <div className="cont-app-img">
                                    <img
                                        src="images/portfolio/musicalia/screen.jpeg"
                                        alt="Musicalia Screen"
                                    />
                                    <img
                                        src="images/portfolio/musicalia/screen2.jpeg"
                                        alt="Musicalia Screen"
                                        className="img-sec"
                                    />
                                </div>
                                <div className="cont-info">
                                    <h4>Características</h4>
                                    <ul>
                                        <li>
                                            Crea listas de reproducción y
                                            compartirlas.
                                        </li>
                                        <li>
                                            Reproduce listas de canciones online
                                            y en segundo plano.
                                        </li>
                                        <li>Guarda tus listas favoritas.</li>
                                        <li>Notificaciones push.</li>
                                        <li>Perfiles de usuario.</li>
                                        <li>
                                            Explora las listas de los demás
                                            usuarios.
                                        </li>
                                    </ul>
                                    <h4>Tecnologías</h4>
                                    <div className="cont-tec">
                                        <li id="ionic">
                                            <svg>
                                                <use href="#ico-ionic"></use>
                                            </svg>
                                            <h4>Ionic</h4>
                                        </li>
                                        <li id="angular">
                                            <FontAwesomeIcon
                                                icon={faAngular}
                                                id="angular"
                                            />
                                            <h4>Angular</h4>
                                        </li>
                                        <li id="typescript">
                                            <svg>
                                                <use href="#ico-typescript"></use>
                                            </svg>
                                            <h4>TypeScript</h4>
                                        </li>
                                        <li id="firebase">
                                            <svg>
                                                <use href="#ico-firebase"></use>
                                            </svg>
                                            <h4>Firebase</h4>
                                        </li>
                                    </div>

                                    <a
                                        href="/apps/musicalia.apk"
                                        target="chanime"
                                        className="boton"
                                    >
                                        Descargar aplicación móvil (Android)
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2>Comprafacil (En desarrollo)</h2>
                            <div className="proyectos__cont-prin-app">
                                <div className="cont-app-img">
                                    <img
                                        src="images/portfolio/pedivanza/screen.png"
                                        alt="Comprafacil Screen"
                                    />
                                    <img
                                        src="images/portfolio/pedivanza/screen2.png"
                                        alt="Comprafacil Screen"
                                        className="img-sec"
                                    />
                                </div>
                                <div className="cont-info">
                                    <h4>Características</h4>
                                    <ul>
                                        <li>
                                            Crear una cuenta con
                                            email/contraseña y teléfono.
                                        </li>
                                        <li>Uso de Firebase Functions.</li>
                                        <li>Obtener ubicación del usuario.</li>
                                        <li>
                                            Calcular ruta más corta entre dos
                                            ubicaciones.
                                        </li>
                                        <li>Realizar pagos con Stripe</li>
                                    </ul>
                                    <h4>Tecnologías</h4>
                                    <div className="cont-tec">
                                        <li id="ionic">
                                            <svg>
                                                <use href="#ico-ionic"></use>
                                            </svg>
                                            <h4>Ionic</h4>
                                        </li>
                                        <li id="angular">
                                            <FontAwesomeIcon
                                                icon={faAngular}
                                                id="angular"
                                            />
                                            <h4>Angular</h4>
                                        </li>
                                        <li id="typescript">
                                            <svg>
                                                <use href="#ico-typescript"></use>
                                            </svg>
                                            <h4>TypeScript</h4>
                                        </li>
                                        <li id="firebase">
                                            <svg>
                                                <use href="#ico-firebase"></use>
                                            </svg>
                                            <h4>Firebase</h4>
                                        </li>
                                    </div>

                                    <a
                                        href="http://localhost:3000/chanime.apk"
                                        target="puzeos"
                                        className="boton"
                                    >
                                        Descargar aplicación móvil (Android)
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Porfolio
