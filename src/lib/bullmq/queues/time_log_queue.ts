import { Queue } from "bullmq";

const timeLogQueue = new Queue("time-log", {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
  defaultJobOptions: {
    removeOnComplete: {
      age: 60,
      count: 1000,
    },
    removeOnFail: {
      age: 1 * 24 * 60,
      count: 10000,
    },
    backoff: { type: "exponential", jitter: 0.5, delay: 5 * 1000 },
    attempts: 7,
  },
});

export default timeLogQueue;
