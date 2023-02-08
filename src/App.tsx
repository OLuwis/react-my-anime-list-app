import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom"
import { useState } from "react"

function App() {
  const [ category, setCategory ] = useState("anime");
  const [ inputValue, setInputValue ] = useState("")

  return (
    <div>
      <Navbar category={[category, setCategory, inputValue, setInputValue]} />
      <Outlet context={[category, setCategory, inputValue, setInputValue]} />
      <Footer />
    </div>
  )
}

export default App