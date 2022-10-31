import React from 'react'
import Navbar from './components/Navbar'
import Belowbar from './components/Belowbar'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import PatientRegisterScreen from './Screens/PatientRegisterScreen'
import DoctorRegisterScreen from './Screens/DoctorRegisterScreen'
import PatientLoginScreen from './Screens/PatientLoginScreen'
import DoctorLoginScreen from './Screens/DoctorLoginScreen'

const App = () => {
  return (
    <Router className="min-h-screen">
       <Navbar />
       <Belowbar />
       <Routes>
       <Route exact path="/" element={<HomeScreen/>}/>
       <Route exact path="/patientregister" element={<PatientRegisterScreen/>}/>
       <Route exact path="/patientlogin" element={<PatientLoginScreen/>}/>
       <Route exact path="/doctorregister" element={<DoctorRegisterScreen/>}/>
       <Route exact path="/doctorlogin" element={<DoctorLoginScreen/>}/>
       </Routes>
       <Footer />
    </Router>
  )
}

export default App
