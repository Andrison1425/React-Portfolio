import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import resumeData from "../resumeData"
import { faAngular, faReact } from "@fortawesome/free-brands-svg-icons"

interface Props {
    data: typeof resumeData.portfolio
}

const Porfolio = ({ data }: Props) => {
    return (
        <section id="portfolio">
            <svg
                className="icons"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "none" }}
            >
                <symbol id="ico-firebase" xmlns="http://www.w3.org/2000/svg">
                    <title>Firebase icon</title>
                    <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" />
                </symbol>
                <symbol id="ico-ionic" xmlns="http://www.w3.org/2000/svg">
                    <title>Ionic icon</title>
                    <path d="M22.922 7.027l-.103-.23-.169.188c-.408.464-.928.82-1.505 1.036l-.159.061.066.155a9.745 9.745 0 0 1 .75 3.759c0 5.405-4.397 9.806-9.806 9.806-5.409 0-9.802-4.397-9.802-9.802 0-5.405 4.402-9.806 9.806-9.806 1.467 0 2.883.319 4.2.947l.155.075.066-.155a3.767 3.767 0 0 1 1.106-1.453l.197-.159-.225-.117A11.905 11.905 0 0 0 12.001.001c-6.619 0-12 5.381-12 12s5.381 12 12 12 12-5.381 12-12c0-1.73-.361-3.403-1.078-4.973zM12 6.53A5.476 5.476 0 0 0 6.53 12 5.476 5.476 0 0 0 12 17.47 5.476 5.476 0 0 0 17.47 12 5.479 5.479 0 0 0 12 6.53zm10.345-2.007a2.494 2.494 0 1 1-4.988 0 2.494 2.494 0 0 1 4.988 0z" />
                </symbol>
                <symbol id="ico-typescript" xmlns="http://www.w3.org/2000/svg">
                    <title>TypeScript icon</title>
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                </symbol>
                <symbol id="ico-expo" xmlns="http://www.w3.org/2000/svg">
                    <title>Expo icon</title>
                    <path d="M24.292 15.547c1.968 0.131 3.729-1.213 4.115-3.145-0.475-0.735-1.287-1.177-2.161-1.177-2.272-0.052-3.491 2.651-1.953 4.323zM15.115 4.697l5.359-3.104-1.708-0.963-7.391 4.281 0.589 0.328 1.119 0.629 2.032-1.176zM21.161 1.307c0.089 0.027 0.161 0.1 0.188 0.188l2.484 7.593c0.047 0.131-0.005 0.272-0.125 0.344-1.968 1.156-2.916 3.489-2.317 5.693 0.656 2.391 2.937 3.953 5.401 3.703 0.135-0.011 0.265 0.073 0.307 0.203l2.563 7.803c0.041 0.131-0.011 0.271-0.125 0.344l-7.859 4.771c-0.037 0.021-0.084 0.036-0.131 0.036-0.068 0.016-0.14 0-0.203-0.041l-2.765-1.797c-0.048-0.031-0.084-0.077-0.109-0.129l-5.396-12.896-8.219 4.875c-0.016 0.011-0.037 0.021-0.052 0.032-0.084 0.036-0.183 0.025-0.261-0.021l-1.859-1.093c-0.136-0.073-0.188-0.245-0.115-0.381l7.953-15.749c0.025-0.057 0.077-0.104 0.135-0.131l7.959-4.609c0.088-0.052 0.197-0.057 0.292-0.005zM12.839 6.407l-1.932-1.089-7.693 15.229 1.396 0.823 6.631-9.015c0.063-0.089 0.167-0.136 0.271-0.12 0.104 0.011 0.192 0.077 0.235 0.177l7.228 17.296 1.933 1.251-8.063-24.552zM26.245 16.964c-2.256 0-3.787-2.292-2.923-4.376 0.86-2.083 3.563-2.619 5.156-1.025 0.595 0.593 0.928 1.396 0.928 2.235 0.005 1.749-1.412 3.167-3.161 3.167z" />
                </symbol>
                <symbol id="ico-solidity" xmlns="http://www.w3.org/2000/svg">
                    <title>solidity</title>
                    <path
                        className="a"
                        d="M241.4,0,160.89,143.09H0L80.45,0h161"
                        opacity="0.45"
                        style={{ isolation: "isolate" }}
                    />
                    <path
                        className="b"
                        d="M160.89,143.09h161L241.4,0H80.45Z"
                        opacity="0.6"
                        style={{ isolation: "isolate" }}
                    />
                    <path
                        className="c"
                        d="M80.45,286.12l80.44-143L80.45,0,0,143.09Z"
                        opacity="0.8"
                        style={{ isolation: "isolate" }}
                    />
                    <path
                        className="a"
                        d="M81.25,500.79,161.76,357.7h161L242.2,500.79H81.25"
                        opacity="0.45"
                        style={{ isolation: "isolate" }}
                    />
                    <path
                        className="b"
                        d="M161.76,357.7H.8L81.25,500.79h161Z"
                        opacity="0.6"
                        style={{ isolation: "isolate" }}
                    />
                    <path
                        className="c"
                        d="M242.2,214.67l-80.44,143L242.2,500.79,322.71,357.7Z"
                        opacity="0.8"
                        style={{ isolation: "isolate" }}
                    />
                </symbol>
                <symbol id="ico-gatsby" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m1250 0c-690.4 0-1250 559.6-1250 1250s559.6 1250 1250 1250 1250-559.6 1250-1250-559.6-1250-1250-1250zm-981.4 1263 968.4 968.4c-531.8-6.9-961.5-436.6-968.4-968.4zm1201.1 943.9-1176.6-1176.6c99.8-436.3 490.3-761.9 956.9-761.9 326.1 0 615.1 159.1 793.6 403.9l-135.9 119.9c-144.8-207.6-385.4-343.5-657.7-343.5-346.7 0-642 220.2-753.6 528.4l1026.5 1026.4c249.3-90.3 441-300.7 505.2-561.3h-425.4v-192.2h629c-.1 466.6-325.7 857.1-762 956.9z"
                        fill="#744c9e"
                    />
                </symbol>
            </svg>

            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Mira algunos de mis proyectos personales.</h1>
                    <h6>
                        Por razones legales no puedo mostrar los proyectos en
                        los que he trabajado bajo contrato, pero en ellos he
                        utilizado todas las tecnologías que se encuentran
                        listadas en la sección anterior.
                    </h6>
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
                            <h2>Pedivanza (En desarrollo)</h2>
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
                                        <li>Guardar métodos de pago.</li>
                                        <li>Realizar pagos con Stripe</li>
                                    </ul>
                                    <h4>Tecnologías</h4>
                                    <div className="cont-tec">
                                        <li id="react-native">
                                            <FontAwesomeIcon
                                                icon={faReact}
                                                id="react"
                                            />
                                            <h4>React Native</h4>
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
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2>Pedivanza Delivery (En desarrollo)</h2>
                            <div className="proyectos__cont-prin-app">
                                <div className="cont-app-img">
                                    <img
                                        src="images/portfolio/pedivanza-delivery/screen.png"
                                        alt="Comprafacil Screen"
                                    />
                                    <img
                                        src="images/portfolio/pedivanza-delivery/screen2.png"
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
                                            Calcular ruta más corta entre varias
                                            ubicaciones.
                                        </li>
                                        <li>
                                            Iniciar navegación en Google Maps
                                        </li>
                                    </ul>
                                    <h4>Tecnologías</h4>
                                    <div className="cont-tec">
                                        <li id="react-native">
                                            <FontAwesomeIcon
                                                icon={faReact}
                                                id="react"
                                            />
                                            <h4>React Native</h4>
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
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2>Pedivanza Seller (En desarrollo)</h2>
                            <div className="proyectos__cont-prin-app">
                                <div className="cont-app-img">
                                    <img
                                        src="images/portfolio/pedivanza-seller/screen.png"
                                        alt="Comprafacil Screen"
                                    />
                                    <img
                                        src="images/portfolio/pedivanza-seller/screen2.png"
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
                                        <li>Registra repartidores.</li>
                                        <li>Crea y modifica artículos.</li>
                                        <li>
                                            Asigna pedidos e interactúa con los
                                            clientes.
                                        </li>
                                        <li>Mira información en tiempo real</li>
                                    </ul>
                                    <h4>Tecnologías</h4>
                                    <div className="cont-tec">
                                        <li id="react-native">
                                            <FontAwesomeIcon
                                                icon={faReact}
                                                id="react"
                                            />
                                            <h4>React Native</h4>
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
