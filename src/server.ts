import "dotenv/config";
import "@/bullmq/jobs.js";
import "@/workers/greet_worker.js";
import "@/workers/time_log_worker.js";
import "@/workers/email_worker.js"
import "@/bullmq/queue_events/greet_queue_events.js";
import "@/bullmq/queue_events/send_email_queue_events.js";
import app from "./app.js";

const PORT: string = process.env.PORT ?? "3000";

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
