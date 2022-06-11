import app from "./app";
import winston from "./winston";

const port = process.env.PORT || 81;

app.listen(port, () => {
  winston.info(`App listening at http://localhost:${port}`);
});
