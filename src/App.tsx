import React from "react"
import Header from "./components/Header"
import About from "./components/About"
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"
import resumeData from "./resumeData"
import ContactUs from "./components/ContactUs"

const App = () => {
    return (
        <div className="App">
            <Header
                data={{
                    personalInfo: resumeData.header,
                    socialLinks: resumeData.socialLinks
                }}
            />
            <About resumeData={resumeData.aboutMe} />
            <Resume data={resumeData.myResume} />
            <Portfolio data={resumeData.portfolio} />
            <ContactUs linkedinId={resumeData.linkedinId} />
            <Footer data={resumeData.socialLinks} />
        </div>
    )
}

export default App
