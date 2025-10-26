interface GreetData {
  name: string;
}

interface EmailQueueData {
  email: string;
  body: string;
}

type WorkerReturnType = "completed" | "failed";
