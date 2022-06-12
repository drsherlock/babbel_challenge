import { BadRequestError } from "../errors";
import EmailGuessesService from "./email-guesses.service";

const EmailGuessesController = ({ router, cache }) => {
  const emailGuessesService = EmailGuessesService({ cache });

  const getEmailGuess = async (req, res, next) => {
    try {
      if (!req.query.fullName || !req.query.companyDomain) {
        throw new BadRequestError("Invalid request");
      }

      const emailGuess = await emailGuessesService.getEmailGuess(
        req.query.fullName,
        req.query.companyDomain
      );

      return res.json({ success: true, data: emailGuess });
    } catch (error) {
      next(error);
    }
  };

  router.get("/email-guesses", getEmailGuess);
};

export default EmailGuessesController;
