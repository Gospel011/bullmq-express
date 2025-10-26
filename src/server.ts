import "dotenv/config";
import "@/bullmq/jobs.js";
import "@/workers/greet_worker.js";
import "@/workers/time_log_worker.js";
import "@/workers/email_worker.js";
import "@/bullmq/queue_events/greet_queue_events.js";
import "@/bullmq/queue_events/send_email_queue_events.js";
import { createBullBoard } from "@bull-board/api";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { ExpressAdapter } from "@bull-board/express";

import app from "./app.js";
import emailQueue from "./lib/bullmq/queues/email_queue.js";
import greetQueue from "./lib/bullmq/queues/greet_queue.js";
import timeLogQueue from "./lib/bullmq/queues/time_log_queue.js";

const PORT: string = process.env.PORT ?? "3000";
const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/admin/queues");

createBullBoard({
  queues: [
    new BullMQAdapter(emailQueue),
    new BullMQAdapter(greetQueue),
    new BullMQAdapter(timeLogQueue),
  ],
  serverAdapter,
  options: { uiConfig: {} },
});

app.use('/admin/queues', serverAdapter.getRouter())

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
