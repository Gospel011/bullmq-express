import { Queue } from "bullmq";

const timeLogQueue = new Queue("time_log", {
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
    backoff: { type: "exponential" },
    attempts: 3,
  },
});

export default timeLogQueue;
