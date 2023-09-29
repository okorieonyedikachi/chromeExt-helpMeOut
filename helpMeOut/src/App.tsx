import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import LandingPage from "./routes/LandingPage"
import SignUp from "./routes/SignUp"
import Listing from "./routes/Listing"


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/dashboard" element={<Home/>}/>
          <Route path="/share" element={<Listing/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
