import {useCallback, useState, useEffect, useMemo, PropsWithChildren} from "react"
import {LocalContext, TLocalContextState} from "./LocalContext"
import {getStateFromStorage, setStateToStorage} from "./storage"

const STATE_KEY = "LOCAL_CONTEXT_STATE";

export function LocalContextProvider({children}: PropsWithChildren) {
  const [contextState, setContextState] = useState({darkMode: false})

  const myWindow: Window = typeof window !== "undefined" ? window : null;

  const setContextStateToMemoryAndStorage = useCallback(function setContextStateToMemoryAndStorage(newState) {
    setStateToStorage(newState, myWindow)
    setContextState(newState)
  }, [setContextState])

  useEffect(() => {
    const localState = getStateFromStorage(myWindow)
    if (!localState) {
      setStateToStorage(contextState, myWindow)
    }
    else if(JSON.stringify(contextState) !== JSON.stringify(localState)) {
      setContextState(localState)
    }
  }, [contextState, setContextState])

  const toggleDarkMode = useCallback(function toggleDarkMode() {
    const newContextState = {...contextState}
    newContextState.darkMode = !contextState.darkMode
    setContextStateToMemoryAndStorage(newContextState)
  }, [contextState, setContextState])

  const contextValue = useMemo(() => {
    return Object.assign({}, contextState, {toggleDarkMode})
  }, [contextState, toggleDarkMode])

  return <LocalContext.Provider value={contextValue}>
    {children}
  </LocalContext.Provider>
}
