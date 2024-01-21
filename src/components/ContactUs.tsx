import React, { Component } from "react"
import resumeData from "../resumeData"

interface Props {
    linkedinId: string
}

const ContactUs = ({ linkedinId }: Props) => {
    return (
        <section id="contact">
            <div className="row section-head">
                <div className="ten columns">
                    <p className="lead">Información de contacto</p>
                </div>
            </div>
            <div className="row">
                <aside className="eigth columns footer-widgets">
                    <div className="widget">
                        <h4>
                            Correo electrónico:{" "}
                            <a
                                href={`mailto:${resumeData.contactInformation.email}`}
                            >
                                {resumeData.contactInformation.email}
                            </a>
                        </h4>
                        <h4>
                            Número de teléfono:{" "}
                            <a
                                href={`tel:${resumeData.contactInformation.phoneNumber}`}
                            >
                                {resumeData.contactInformation.phoneNumber}
                            </a>
                        </h4>
                        <h4>
                            Whatsapp:{" "}
                            <a
                                href={`${resumeData.contactInformation.whatsapp}`}
                            >
                                Toca aquí para chatear
                            </a>
                        </h4>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default ContactUs
