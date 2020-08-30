import { random, date } from "faker";

import { Option } from "../../common/types/select";
import { ReportRow, Report } from "../../common/types/report";

export const dummyReports: Option[] = [
  { label: "report1", value: 1 },
  { label: "report2", value: 2 },
  { label: "report3", value: 3 },
  { label: "report4", value: 4 },
];

export const randomReportRow = (): ReportRow => ({
  dateTime: date.recent(),
  identifierType: random.number(10),
  identifier: `${random.alphaNumeric(4).toUpperCase()} ${random
    .alphaNumeric(2)
    .toUpperCase()} Equity`,
  name: random.words(random.number({ min: 1, max: 2 })).toUpperCase(),
  sedol: random.alphaNumeric(7).toUpperCase(),
});

export const randomReportRows = (count = 50): ReportRow[] =>
  [...Array(count)].map(() => randomReportRow());

export const randomReport = (): Report => ({
  name: random.word(),
  rows: randomReportRows(),
});

export const randomReports = (count = 5): Report[] =>
  [...Array(count)].map(() => randomReport());
