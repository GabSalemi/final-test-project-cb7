export const initialState = {
    filter: "All",
    value: null
}


  export const filterReducer = (state, action) => {
      switch (action.type) {
      case "SET__ALL":
        return initialState;
      case "SET__GROUP":
        return {filter: "Group", value: null};
      case "SET__FILTER":
        return {filter: "Filter", value: action.payload}
      default:
        return state;
    }
  };