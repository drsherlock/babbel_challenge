import {
  GET_EMAIL_GUESS_STARTED,
  GET_EMAIL_GUESS_SUCCESS,
  GET_EMAIL_GUESSS_FAILURE,
} from "../actions/types";

const initialState = {
  loading: false,
  emailGuess: {},
  error: null,
};

export default function emailGuesses(state = initialState, action) {
  switch (action.type) {
    case GET_EMAIL_GUESS_STARTED:
      return {
        ...state,
        emailGuess: {},
        loading: true,
        error: null,
      };
    case GET_EMAIL_GUESS_SUCCESS:
      return {
        ...state,
        emailGuess: action.payload.emailGuess,
        loading: false,
      };
    case GET_EMAIL_GUESSS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
