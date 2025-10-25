import { Worker } from "bullmq";
import { Redis } from "ioredis";

const connection = new Redis({ maxRetriesPerRequest: null });
const worker = new Worker<GreetData, WorkerReturnType>(
  "greet",
  async (job) => {
    // throw new Error("Couldn't complete job");
    console.log(`Hello ${job.data.name}`);

    return "completed";

    // job.updateProgress()
  },
  { connection }
);

worker.on("error", (error) => {
  console.log(`Greet queue errored out with error:\n`);
  console.error(error);
});

// worker.on("progress", (job, progress) => {
//   console.log({ job, progress });
// });

// worker.on("completed", (job) => {
//   console.log(`Job ${job.id} (${job.name}) completed`);
// });

// worker.on("failed", (job, err) => {
//   console.log(`${job?.id} failed with error ${err.message}`);
// });
