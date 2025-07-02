export type ReportStatus = "Pending" | "In Review" | "Resolved";

export interface IReport {
  reportId: string;
  content: string;
  reporter: string;
  reason: string;
  date: string;
  status: ReportStatus;
}
