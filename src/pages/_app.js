import '@/styles/globals.css'
import { MainContext } from '@/state'
import { filterReducer } from '@/state/reducer'
import { useReducer } from 'react'
import { initialState } from '@/state/reducer'

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  return  <MainContext.Provider value={{ state, dispatch }}>
            <Component {...pageProps} />
          </MainContext.Provider>
}
