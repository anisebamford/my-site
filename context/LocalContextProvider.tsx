import {useCallback, useState, useEffect, useMemo, PropsWithChildren} from "react"
import {LocalContext, TLocalContextState} from "./LocalContext"
import {getStateFromStorage, setStateToStorage} from "./storage"

const STATE_KEY = "LOCAL_CONTEXT_STATE";

function getStateFromStorage() {
  const valueInStorage = window?.localStorage.getItem(STATE_KEY);
  return valueInStorage ? JSON.parse(valueInStorage) as TLocalContextState : null;
}

function setStateToStorage(state) {
  window?.localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

export function LocalContextProvider({children}: PropsWithChildren) {
  const [contextState, setContextState] = useState({darkMode: false})

  const setContextStateToMemoryAndStorage = useCallback(function setContextStateToMemoryAndStorage(newState) {
    setStateToStorage(newState)
    setContextState(newState)
  }, [setContextState])

  useEffect(() => {
    const localState = getStateFromStorage()
    if (!localState) {
      setStateToStorage(contextState)
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
