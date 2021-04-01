import React, {useState, createContext, useReducer} from 'react'
import stateReducer from './stateReducer'
import getClients from './Services/dataConnector'
import getClient from './Services/clientService'

export const stateContext = createContext({})

export const StateProvider = (props) => {
    
    const {Provider} = stateContext

    const initialState = {

      userLevel: "",
      loggedIn: false,
      currentCompany: "",
      currentSite: "",
      currentService: "",
      currentTicket: "",
      currentOrder: "",
      currentAccount: "",     
      dataLoading: false,

    }
    const [userSession, dispatch] = useReducer(stateReducer, initialState)

      const setLoggedIn = (loginState) => {
        dispatch({
          type: "LOGGED_IN",
          payload: loginState
        })
      };

      const setUserLevel = (userLevel) => {
        dispatch({
          type: "SET_USER_LEVEL",
          payload: userLevel
        })
      };

      const setCurrentCompany = (id) => {
        console.log(id)
        dispatch({
          type: "SET_CURRENT_COMPANY",
          payload: id
        })
      };

      const setCurrentSite = (id) => {
        dispatch({
          type: "SET_CURRENT_SITE",
          payload: id
        })
      };

      const setCurrentService = (id) => {
        dispatch({
          type: "SET_CURRENT_SERVICE",
          payload: id
        })
      };

      const setCurrentTicket = (id) => {
        dispatch({
          type: "SET_CURRENT_TICKET",
          payload: id
        })
      };

      const setCurrentOrder = (id) => {
        dispatch({
          type: "SET_CURRENT_ORDER",
          payload: id
        })
      };

      const setCurrentAccount = (id) => {
        dispatch({
          type: "SET_CURRENT_ACCOUNT",
          payload: id
        })
      };

    
    return (
      <Provider value={{ 
          
          setLoggedIn,
          setCurrentCompany,
          setCurrentSite,
          setCurrentService,
          setCurrentTicket,
          setCurrentOrder,
          setCurrentAccount,
          userSession
      }}>
        {props.children}
      </Provider>
    )
  
}

