import EmailGuessesService from "./email-guesses.service";

const EmailGuessesController = ({ router }) => {
  const emailGuessesService = EmailGuessesService();

  const getEmailGuess = async (req, res, next) => {
    try {
      const emailGuess = await emailGuessesService.getEmailGuess();

      return res.json({ success: true, data: emailGuess });
    } catch (error) {
      next(error);
    }
  };

  router.get("/email-guesses", getEmailGuess);
};

export default EmailGuessesController;
