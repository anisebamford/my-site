import {getStateFromStorage, setStateToStorage, STATE_KEY} from "./storage"
import {TLocalContextState} from "./LocalContext"

it("will set state to storage", () => {
  const windowMock = {
    localStorage: {
      setItem: jest.fn()
    }
  }
  setStateToStorage({hi: "hello"} as unknown as TLocalContextState, windowMock)
  expect(windowMock.localStorage.setItem).toHaveBeenCalledWith(STATE_KEY, "{\"hi\":\"hello\"}")
});

it("will get state from storage", () => {
  const windowMock = {
    localStorage: {
      getItem: () => "{\"seven\": 7}"
    }
  }
  expect(getStateFromStorage(windowMock)).toStrictEqual({
    seven: 7
  } as unknown);
});

