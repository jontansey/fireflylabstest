export type ReportRow = {
  dateTime: Date;
  identifierType: number;
  identifier: string;
  name: string;
  sedol: string;
};

export type Report = {
  name: string;
  rows: ReportRow[];
};
