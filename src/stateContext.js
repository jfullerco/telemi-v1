import React, {useState, createContext, useReducer} from 'react'
import stateReducer from './stateReducer'


export const stateContext = createContext({})

export const StateProvider = (props) => {
    
    const {Provider} = stateContext
    
    const [userData, setUserData] = useState({
      
    })

    const [sessionData, setSessionData] = useState({
      client_name: "",
      sites: [],
      _id: ""
    }) 

    const initialState = {
      userID: "",
      userLevel: "",
      loggedIn: false,
      clientID: "",
      clients: "",
      sites: "",
      assets: "",
      orders: "",
      tickets: "",      
      dataLoading: false,

    }
    const [userSession, dispatch] = useReducer(stateReducer, initialState)

      const setUser = (id) => {
        dispatch({
          type: "SET_USER",
          payload: id
        })
      };

      const setLoggedIn = (loginState) => {
        dispatch({
          type: "LOGGED_IN",
          payload: loginState
        })
      };

      const setClients = (clients) => {
        dispatch({
          type: "SET_CLIENTS",
          payload: clients
        })
      };

      const setUserLevel = (userLevel) => {
        dispatch({
          type: "SET_USER_LEVEL",
          payload: userLevel
        })
      };

      const setClientID = (id) => {
        dispatch({
          type: "FOCUS_CLIENT_ID",
          payload: id
        })
      };

      const setSites = (sites) => {
        dispatch({
          type: "SET_SITES",
          payload: sites
        })
      };

      const setAssets = (assets) => {
        dispatch({
          type: "SET_ASSETS",
          payload: assets
        })
      };

      const setSiteOrders = (orders) => {
        dispatch({
          type: "SET_SITE_ORDERS",
          payload: orders
        })
      };

    
    return (
      <Provider value={{ 
          
          sessionData, 
          setSessionData,
          userData,
          setUserData,
          setUser,
          setLoggedIn,
          setClients,
          setUserLevel,
          setClientID,
          setSites,
          setAssets,
          setSiteOrders,
          userSession
      }}>
        {props.children}
      </Provider>
    )
  
}

