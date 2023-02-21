import {createContext, useState, useCallback} from "react"

export type TLocalContextState = {
  darkMode: boolean;
}

export type TLocalContext = TLocalContextState & {toggleDarkMode: () => void}

export const LocalContext = createContext<TLocalContext>({
  darkMode: false,
  toggleDarkMode: () => null,
})

