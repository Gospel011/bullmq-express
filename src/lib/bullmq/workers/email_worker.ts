import { Worker } from "bullmq";
import { Redis } from "ioredis";

const connection = new Redis({ maxRetriesPerRequest: null });
const worker = new Worker<EmailQueueData, WorkerReturnType>(
  "send-email",
  async (job) => {
    // console.log(`About to send email to ${job.data.email} (jobId: ${job.id})`);
    job.updateProgress(50);
    await new Promise((resolve) => setTimeout(resolve, 10 * 1000));
    job.updateProgress(100);
    return "completed";
  },
  { connection }
);

worker.on("completed", (job, result) => {
  console.log(
    `Email sent to ${job.data.email} (jobId: ${job.id}). Body: ${job.data.body}`
  );
});

worker.on("failed", (job, error) => {
  console.log(`${job?.name} failed with error: ${error.message}`);
});

worker.on("error", (failedReason) => {
  console.log(`Email queue failed with reason: ${failedReason}`);
});

worker.on("stalled", (jobId) => {
  console.log(`${jobId} stalled`);
});

worker.on("progress", (job, result) => {
  console.log({ progress: job.progress, result });
});
