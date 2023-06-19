import { useRef } from "react"
import Hero from "../components/Hero"
import LandingFooter from "../components/LandingFooter"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Stats from "../components/Stats"
import Team from "../components/Team"
import Testimonials from "../components/Testimonials"

const HomeScreen = () => {

    return (
        <div className="flex items-center justify-center flex-col">
            <Navbar />
        </div>
    )
}

export default HomeScreen
