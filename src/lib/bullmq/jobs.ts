import timeLogQueue from "./queues/time_log_queue.js";

await timeLogQueue.add("log time", null, {
  repeat: {
    pattern: "* * * * * *", // cron tab expression or rrule
    limit: 9,
    key: "log",
  },
});
