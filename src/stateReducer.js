export default (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_COMPANYID":
      return {
        ...state,
        currentCompanyID: action.payload
      }
    case "SET_CURRENT_COMPANY":
      return {
        ...state,
        currentCompany: action.payload
      }  
    case "LOGGED_IN":
      return {
        ...state,
        loggedIn: action.payload
      };
    case "SET_CURRENT_SITE":
      return {
        ...state,
        currentSite: action.payload
      };
    case "SET_CURRENT_SERVICE":
      return {
        ...state,
        currentService: action.payload
      };
    case "SET_CURRENT_TICKET": 
      return {
        ...state,
        currentTicket: action.payload
      };
    case "SET_CURRENT_ORDER":
      return {
        ...state,
        currentOrder: action.payload
      };    
    case "SET_CURRENT_ACCOUNT":
      return {
        ...state,
        currentAccount: action.payload
      };  
  };
}
