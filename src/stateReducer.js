export default (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        userID: action.payload
      }
    case "LOGGED_IN":
      return {
        ...state,
        loggedIn: action.payload
      };
    case "SET_CLIENTS":
      return {
        ...state,
        clients: action.payload
      };
    case "FOCUS_CLIENT_ID":
      return {
        ...state,
        clientID: action.payload
      };
    case "SET_USER_LEVEL":
      return {
        ...state,
        userLevel: action.payload
      };
    case "SET_SITES": 
      return {
        ...state,
        sites: action.payload
      };
    case "SET_ASSETS":
      return {
        ...state,
        assets: action.payload
      };    
  };
}
