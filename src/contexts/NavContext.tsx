import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'

interface NavProviderProps {
  children: ReactNode
}

interface NavContextProps {
  setActiveLinkId: Dispatch<SetStateAction<string>>
  activeLinkId: string
}

export const NavContext = createContext({} as NavContextProps)

function NavProvider({ children }: NavProviderProps) {
  const [activeLinkId, setActiveLinkId] = useState('')

  const providerValue = {
    activeLinkId,
    setActiveLinkId,
  }

  return (
    <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
  )
}

export default NavProvider
