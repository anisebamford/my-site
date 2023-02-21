import {useContext} from "react"
import {LocalContext} from "../context/LocalContext"

export function DarkModeToggle() {
  const {darkMode, toggleDarkMode} = useContext(LocalContext)

  const fn = () => {
    toggleDarkMode()
  }
  return <button onClick={toggleDarkMode}> {darkMode ? "D" : "L"} </button>
}
