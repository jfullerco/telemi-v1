import React, {useState, createContext, useReducer} from 'react'
import stateReducer from './stateReducer'
import loginService from './Services/loginService'
import getClient from './Services/clientService'


export const stateContext = createContext({})

export const StateProvider = (props) => {
    
    const {Provider} = stateContext

    const initialState = {
      userID: "",
      userLevel: "",
      loggedIn: false,
      clientID: "",
      clients: "",
      currClient: "",
      sites: "",
      currSite: "",
      assets: "",
      currAsset: "",
      orders: "",
      currOrder: "",
      tickets: "",
      currTicket: "",      
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

    const getSession = async (u) => {
      const {data: [login]} = await loginService(u)
      console.log(data)
      setClients(login.clients)
      const {data} = await getClient(clientID)
      console.log(data)
      setSites(data.sites)
      setAssets(data.assets)
    }

    
    return (
      <Provider value={{ 
          setUser,
          setLoggedIn,
          getSession,
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

