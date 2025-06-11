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
