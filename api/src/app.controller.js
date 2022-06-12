import { Router } from "express";

import EmailGuessesController from "./email-guesses/email-guesses.controller";

export default ({ cache }) => {
  const router = Router();

  EmailGuessesController({ router, cache });

  return router;
};
