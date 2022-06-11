
const EmailGuessesController = ({ router }) => {
  const getEmailGuess = async (req, res, next) => {
    try {
      return res.json({ success: true, data: "abc@test.com" });
    } catch (error) {
      next(error);
    }
  };

  router.get("/email-guesses", getEmailGuess);
};

export default EmailGuessesController;
