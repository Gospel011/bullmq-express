import "dotenv/config";
import app from "./app.js";

const PORT: string = process.env.PORT ?? "3000";

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
