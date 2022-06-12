import contacts from "../../contacts.json";
import constants from "../constants";

export const seedCache = async ({ cache }) => {
  for (const contact in contacts) {
    const [userName, companyDomain] = contacts[contact].split("@");
    const [firstName, lastName] = contact.split(" ");

    if (userName === `${firstName.toLowerCase()}${lastName.toLowerCase()}`) {
      await cache.set(
        companyDomain,
        constants.STRATEGY["first_name_last_name"]
      );
    } else if (
      userName === `${firstName[0].toLowerCase()}${lastName.toLowerCase()}`
    ) {
      await cache.set(
        companyDomain,
        constants.STRATEGY["first_name_initial_last_name"]
      );
    }
  }
};
