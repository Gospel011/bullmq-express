import "dotenv/config";
import '@/bullmq/jobs.js'
import '@/bullmq/workers.js'
import '@/bullmq/queue_events.js'
import app from "./app.js";

const PORT: string = process.env.PORT ?? "3000";

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
