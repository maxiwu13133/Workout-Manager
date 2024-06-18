import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {})

  return (
    <WorkoutsContext.Provider value={}>
      { children }
    </WorkoutsContext.Provider>
  )
}
