import {useContext, PropsWithChildren} from "react"
import {LocalContext} from "../context/LocalContext"

export function StylesWrapper({children}: PropsWithChildren) {
  const {darkMode} = useContext(LocalContext)
  const classes: string[] = []
  if (darkMode) classes.push("dark-mode")
  return <div className={classes.join(" ")}> {children} </div>
}
