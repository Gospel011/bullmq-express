import { Worker } from "bullmq";
import { Redis } from "ioredis";
const connection = new Redis({ maxRetriesPerRequest: null });

const worker = new Worker<null, WorkerReturnType>(
  "time-log",
  async (job, token) => {
    console.log({ jobId: job.name });
    const date = new Date();

    console.log(date.toLocaleTimeString());
    return "completed";
  },
  { connection }
);

worker.on("error", (failedReason) => {
  console.log(`Time log failed for ${failedReason}`);
});

worker.on("failed", (job, error, prev) => {
  console.log({ jobId: job?.id, error, prev });
});
