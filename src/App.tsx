import React from "react"
import Header from "./components/Header"
import About from "./components/About"
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
// import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import resumeData from "./resumeData"

const App: React.FC = () => {
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
            {/* <ContactUs resumeData={resumeData} /> */}
            <Footer data={resumeData.socialLinks} />
        </div>
    )
}

export default App
