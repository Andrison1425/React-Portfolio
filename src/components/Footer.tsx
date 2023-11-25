import React from "react"
import resumeData from "../resumeData"

interface Props {
    data: typeof resumeData.socialLinks
}

const Footer = ({ data }: Props) => {
    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        {data &&
                            data.map((item, index) => {
                                return (
                                    <li key={"socialLink" + index}>
                                        <a href={item.url}>
                                            <i className={item.className} />
                                        </a>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
                <div id="go-top">
                    <a
                        className="smoothscroll"
                        title="Back to Top"
                        href="#home"
                    >
                        <i className="icon-up-open" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
