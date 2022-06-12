import axios from "axios";

import { config } from "../config";

import {
  GET_EMAIL_GUESS_STARTED,
  GET_EMAIL_GUESS_SUCCESS,
  GET_EMAIL_GUESSS_FAILURE,
} from "./types";

export const getEmailGuess = ({ fullName, companyDomain }) => {
  return async (dispatch) => {
    dispatch(getEmailGuessStarted());
    try {
      const response = await axios.get(
        `${config.API}/v1/email-guesses?fullName=${fullName}&companyDomain=${companyDomain}`
      );
      if (response.data.success) {
        dispatch(getEmailGuessSuccess(response.data.data));
      } else {
        throw new Error(response.data.error);
      }
    } catch (err) {
      dispatch(getEmailGuessFailure(err.response.data.error));
    }
  };
};

const getEmailGuessStarted = () => ({
  type: GET_EMAIL_GUESS_STARTED,
});

const getEmailGuessSuccess = (data) => ({
  type: GET_EMAIL_GUESS_SUCCESS,
  payload: {
    emailGuess: data,
  },
});

const getEmailGuessFailure = (error) => ({
  type: GET_EMAIL_GUESSS_FAILURE,
  payload: {
    error,
  },
});
