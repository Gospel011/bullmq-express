import { Queue } from "bullmq";

const emailQueue = new Queue<EmailQueueData, WorkerReturnType>("send-email", {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
  defaultJobOptions: {
    backoff: { type: "exponential", jitter: 0.5, delay: 5 * 1000 },
    attempts: 7,
    // removeOnComplete: true,
    // removeOnFail: {
    //   count: 10000,
    // },
  },
});

export default emailQueue;
