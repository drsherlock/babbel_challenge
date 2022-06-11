import { InternalServerError } from "../errors";

const EmailGuessesService = () => {
  const getEmailGuess = async () => {
    try {
      return { email: "abc@test.com" };
    } catch (error) {
      throw new InternalServerError("Server error");
    }
  };

  return {
    getEmailGuess,
  };
};

export default EmailGuessesService;
