import timeLogQueue from "./queues/time_log_queue.js";

const job = await timeLogQueue.upsertJobScheduler(
  "log-time",
  {
    // pattern: "* * * * * *",
    every: 1 * 1000,
    limit: 5,
  },
  {
    name: "log",
    data: null,
    opts: {
      backoff: { type: "exponential", jitter: 0.5, delay: 5 },
      attempts: 5,
    },
  }
);


// console.log(await timeLogQueue.exportPrometheusMetrics())

console.log(`JOB ID: ${job.id}`)
