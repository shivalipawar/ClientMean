export class Status {
    id: number;
    ProjectName: string;
    WorkItem: number;
    Description: string;
    BlockerAction: string;
    Learnings: string;
    constructor(_id: number, _projectName: string, _workItemNumber: number, _description: string) {
     this.id = _id;
     this.ProjectName = _projectName;
     this.WorkItem =_workItemNumber;
     this.Description = _description;
  }
}