import { random, date } from "faker";

import { ReportRow, Report } from "../../common/types/report";

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

export const randomReport = (id: number): Report => ({
  id,
  name: random.word(),
  rows: randomReportRows(random.number({ min: 30, max: 100 })),
});

export const randomReports = (count = 5): Report[] =>
  [...Array(count)].map((a, i) => randomReport(i));
