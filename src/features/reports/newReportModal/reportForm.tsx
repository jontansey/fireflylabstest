import React from "react";

import TextInput from "../../../common/components/form/textInput";
import Select from "../../../common/components/form/select";
import { Report } from "../../../common/types/report";
import { randomOptions } from "../../../utils/dummyData/dummyOptions";

const options = randomOptions();

type Props = {
  report: Report;
  setReport: React.Dispatch<React.SetStateAction<Report>>;
};

const ReportForm: React.FC<Props> = ({ report, setReport }) => (
  <div>
    <TextInput
      label="Name"
      type="text"
      value={report.name}
      placeholder="Name"
      width="250px"
      onChange={({ target }) => setReport({ ...report, name: target.value })}
    />
    <Select
      options={options}
      onChange={(o) => setReport({ ...report, category: o.label })}
      value={options.find(({ label }) => label === report.category)}
      label="Category"
      placeholder="Category"
      width="150px"
    />

    <Select
      options={options}
      onChange={(o) => setReport({ ...report, source: o.label })}
      value={options.find(({ label }) => label === report.source)}
      label="source"
      placeholder="Source"
      width="150px"
    />

    <Select
      options={options}
      onChange={(o) => setReport({ ...report, output: o.label })}
      value={options.find(({ label }) => label === report.output)}
      label="output"
      placeholder="Output"
      width="150px"
    />
  </div>
);

export default ReportForm;
