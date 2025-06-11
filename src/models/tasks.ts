export type Task = {
  id: string;
  name: string;
  owner: string;
  command: string;
};

export type CardProp = {
  task: Task;
  refreshCard: any;
};

export type TaskWithExecutions = {
  id: string;
  taskExecutions: TaskExecutions[];
};


export type TaskExecutions = {
  startTime: string;
  endTime: string;
  output: string;
}