import Hero from "../components/Hero"
import LandingFooter from "../components/LandingFooter"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Stats from "../components/Stats"
import Team from "../components/Team"
import Testimonials from "../components/Testimonials"

const HomeScreen = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Stats />
            <Team />
            <Testimonials />
            <Newsletter />
            <LandingFooter />
        </div>
    )
}

export default HomeScreen
