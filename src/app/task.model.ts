export interface ITask {
    taskId?: number;
    title?: string;
    description?: string;
    Priority?: string;
    StartDate?: string;
    endDate?: string;
    status?: string;
    assignedPerson?: string;
    attachment?: File;
    subTask?: number;
}
export interface Statuss {
    value: string;
    viewValue: string;
  }