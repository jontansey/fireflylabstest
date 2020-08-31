export type ReportRow = {
  dateTime: Date;
  identifierType: number;
  identifier: string;
  name: string;
  sedol: string;
};

export type Content = {
  id: number;
  name: string;
  value: string;
  type?: string;
};

export type Report = {
  id: number;
  name: string;
  rows: ReportRow[];

  category?: string;
  source?: string;
  output?: string;

  content: Content[];
};
