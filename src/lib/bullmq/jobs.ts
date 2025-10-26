// import timeLogQueue from "./queues/time_log_queue.js";

import emailQueue from "./queues/email_queue.js";

console.log("adding jobs to queue");
emailQueue.add(
  "josh",
  { email: "josh@gmail.com", body: "You've made 3 updates to your profile" },
//   { delay: 1 * 1000, jobId: "profileUpdate@josh@gmail.com" }
);
emailQueue.add(
  "josh",
  { email: "josh@gmail.com", body: "You've made 7 updates to your profile" },
//   { delay: 1 * 1000, jobId: "profileUpdate@josh@gmail.com" }
);
emailQueue.add(
  "josh",
  { email: "josh@gmail.com", body: "You've made 10 updates to your profile" },
//   { delay: 1 * 1000, jobId: "profileUpdate@josh@gmail.com" }
);
emailQueue.add(
  "josh",
  { email: "josh@gmail.com", body: "You've made 20 updates to your profile" },
//   { delay: 1 * 1000, jobId: "profileUpdate@josh@gmail.com" }
);
