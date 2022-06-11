import { Router } from "express";

import EmailGuessesController from "./email-guesses/email-guesses.controller";

export default () => {
  const router = Router();

  EmailGuessesController({ router });

  return router;
};
