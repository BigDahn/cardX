import CustomerService from "./Components/CustomerService"
import DashboardControl from "./Components/DashboardControl"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import MidSection from "./Components/MidSection"
import MoreConcept from "./Components/MoreConcept"
import Navbar from "./Components/Navbar"
import RegistrationSteps from "./Components/RegistrationSteps"
import SectionLayout from "./Components/SectionLayout"



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
        <MoreConcept/>
           <MidSection />
      <SectionLayout />
      <DashboardControl/>
      <CustomerService/>
      <RegistrationSteps/>
      <Footer/>
    </div>
  )
}

export default App
