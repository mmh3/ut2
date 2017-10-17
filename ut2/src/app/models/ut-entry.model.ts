export class UtEntry {
    public timeTrackerUid: number;
    public projectNo: number;
    public entryDate: Date;
    public workType: number;
    public minutes: number;
    public dateCreated: Date;
    public createdBy: string;
    public dateLastModified: Date;
    public lastMaintainedBy: string;
    public employeeId: number;
    public actionType: number;
    public comments: string;
    public badWork: string;

    constructor(timeTrackerUid: number,
                projectNo: number,
                entryDate: Date,
                workType: number,
                minutes: number,
                dateCreated: Date,
                createdBy: string,
                dateLastModified: Date,
                lastMaintainedBy: string,
                employeeId: number,
                actionType: number,
                comments: string,
                badWork: string) {
       this.timeTrackerUid = timeTrackerUid;
       this.projectNo = projectNo;
       this.entryDate = entryDate;
       this.workType = workType;
       this.minutes = minutes;
       this.dateCreated = dateCreated;
       this.createdBy = createdBy;
       this.dateLastModified = dateLastModified;
       this.lastMaintainedBy = lastMaintainedBy;
       this.employeeId = employeeId;
       this.actionType = actionType;
       this.comments = comments;
       this.badWork = badWork;
    }
}
