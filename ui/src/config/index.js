export const config = {
  API:
    process.env.NODE_ENV === "development"
      ? "http://localhost:81/api"
      : "http://api.babbel.com/api",
};
