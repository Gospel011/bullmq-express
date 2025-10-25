import { QueueEvents } from "bullmq";
const queueEvents = new QueueEvents("greet");

queueEvents.on("completed", ({ jobId, returnvalue, prev }, id) => {
  console.log({ id, jobId, completed: true, returnvalue, prev });
});


