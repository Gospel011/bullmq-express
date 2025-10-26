// import timeLogQueue from "./queues/time_log_queue.js";

import emailQueue from "./queues/email_queue.js";
import greetQueue from "./queues/greet_queue.js";
import timeLogQueue from "./queues/time_log_queue.js";

type QueueDataType = EmailQueueData | GreetData | undefined;
type QueueName = "send-email" | "greet" | "time-log";

async function jobProducer({
  queueName,
  numberOfJobs,
}: {
  queueName: QueueName;
  numberOfJobs: number;
}) {
  console.log("adding jobs to queue");
  return await Promise.all(
    Array.from({
      length: numberOfJobs < 0 ? 1 : numberOfJobs,
    }).map(async (_, i) => {
      const emailData: EmailQueueData = {
        email: `user${i + 1}@gmail.com`,
        body: `Hello user ${i + 1} for signing up`,
      };

      switch (queueName) {
        case "send-email":
          await emailQueue.add(`send-email-${i + 1}`, emailData);
          break;
        case "greet":
          const greetData: GreetData = {
            name: `User ${i + 1}`,
          };
          await greetQueue.add(`greet-${greetData.name}`, greetData);
        case "time-log":
          await timeLogQueue.upsertJobScheduler(
            "log-time",
            {
              every: 1 * 1000,
              limit: 100,
            },
            { name: "new-time" }
          );
        default:
          break;
      }
    })
  );
}

// const numberOfJobs: number = 50_000;
jobProducer({ queueName: "send-email", numberOfJobs: 125_000 });
jobProducer({ queueName: "time-log", numberOfJobs: 1 });
jobProducer({ queueName: "greet", numberOfJobs: 150_000 });
