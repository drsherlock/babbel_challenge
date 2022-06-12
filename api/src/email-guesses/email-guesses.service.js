import { InternalServerError } from "../errors";
import constants from "../constants";

const EmailGuessesService = ({ cache }) => {
  const getEmailGuess = async (fullName, companyDomain) => {
    try {
      const [firstName, lastName] = fullName.split(" ");
      const strategy = await cache.get(companyDomain);

      switch (strategy) {
        case constants.STRATEGY["first_name_last_name"]:
          return {
            email: `${firstName.toLowerCase()}${lastName.toLowerCase()}@${companyDomain}`,
          };

        case constants.STRATEGY["first_name_initial_last_name"]:
          return {
            email: `${firstName[0].toLowerCase()}${lastName.toLowerCase()}@${companyDomain}`,
          };

        default:
          throw new InternalServerError("Cannot guess email for this company!");
      }
    } catch (error) {
      throw error;
    }
  };

  return {
    getEmailGuess,
  };
};

export default EmailGuessesService;
