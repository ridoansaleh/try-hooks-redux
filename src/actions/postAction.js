const HOSTNAME = "https://jsonplaceholder.typicode.com/";

export const fetchAllPost = () => dispatch => {
  return fetch(HOSTNAME + "posts")
    .then(res => {
      if (res.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + res.status
        );
        return;
      }
      res.json().then(data => {
        dispatch({
          type: "FETCH_POSTS",
          payload: data
        });
      });
    })
    .catch(err => {
      dispatch({
        type: "FETCH_FAILED"
      });
      console.log("Fetch Error :-S", err);
    });
};
