import {useContext} from "react"
import {LocalContext} from "../context/LocalContext"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSun} from "@fortawesome/free-solid-svg-icons"

export function DarkModeToggle() {
  const {darkMode, toggleDarkMode} = useContext(LocalContext)

  return <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
    <FontAwesomeIcon icon={faSun} />
  </button>
}
