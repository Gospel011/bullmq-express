import { QueueEvents } from "bullmq";
const queueEvents = new QueueEvents("send-email");

queueEvents.on(
  "deduplicated",
  ({ jobId, deduplicatedJobId, deduplicationId }, id) => {
    console.log({ id, jobId, deduplicatedJobId, deduplicationId });
  }
);

// queueEvents.on("completed", ({ jobId, returnvalue, prev }, id) => {
//   console.log({ id, jobId, completed: true, returnvalue, prev });
// });

// queueEvents.on("failed", ({ jobId, failedReason, prev }, id) => {
//   console.log({ id, jobId, failedReason, prev });
// });
