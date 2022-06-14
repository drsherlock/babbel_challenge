import EmailGuessesService from "./email-guesses.service";

const mockData = {
  "google.com": "1",
  "babbel.com": "2",
  "linkedin.com": "1",
};

describe("EmailGuessesService", () => {
  let mockCache = {
    get: async (companyDomain) => {
      return mockData[companyDomain];
    },
  };

  const emailGuessesService = EmailGuessesService({ cache: mockCache });

  describe("getEmailGuess", () => {
    test("should throw error if company domain is not missing", async () => {
      const fullName = "Nina Simons";
      const companyDomain = "microsoft.com";

      await expect(
        emailGuessesService.getEmailGuess(fullName, companyDomain)
      ).rejects.toThrow("Cannot guess email for this company!");
    });

    test("should return correct email guess for first_name_last_name strategy", async () => {
      const fullName = "Priya Kuber";
      const companyDomain = "google.com";

      const emailGuess = await emailGuessesService.getEmailGuess(
        fullName,
        companyDomain
      );

      expect(emailGuess.email).toBe("priyakuber@google.com");
    });

    test("should return correct email guess for first_name_initial_last_name strategy", async () => {
      const fullName = "Matthew Hall";
      const companyDomain = "babbel.com";

      const emailGuess = await emailGuessesService.getEmailGuess(
        fullName,
        companyDomain
      );

      expect(emailGuess.email).toBe("mhall@babbel.com");
    });
  });
});
