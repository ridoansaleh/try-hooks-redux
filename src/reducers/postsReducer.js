let initialState = {
  data: [],
  isFetching: true,
  isFetched: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        isFetching: false,
        isFetched: true,
        data: action.payload
      };
    case "FETCH_FAILED":
      return {
        ...state,
        isFetching: false,
        isFetched: true
      };
    default:
      return state;
  }
};
