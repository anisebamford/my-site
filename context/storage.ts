import {TLocalContextState} from "./LocalContext";

export const STATE_KEY = "SITE_CONTEXT_STATE";

export function getStateFromStorage(windowToUse): null | TLocalContextState {
  const stateInStorage = windowToUse?.localStorage.getItem(STATE_KEY);
  if (!stateInStorage) return null;
  return JSON.parse(stateInStorage) as TLocalContextState;
}

export function setStateToStorage(state: TLocalContextState, windowToUse) {
  windowToUse?.localStorage.setItem(STATE_KEY, JSON.stringify(state));
}
