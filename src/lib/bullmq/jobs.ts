import { Queue } from "bullmq";

const greetQueue = new Queue<GreetData>("greet", {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
  defaultJobOptions: {
    removeOnComplete: {
      age: 60,
    //   count: 1000,
    },
    removeOnFail: {
      age: 1 * 24 * 60,
      count: 10000,
    },
  },
});


await greetQueue.add("greet:aaron", { name: "Aaron" });

export default greetQueue;
