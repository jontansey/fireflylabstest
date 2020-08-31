import React, { useState } from "react";

import Modal from "../../../common/components/modal";
import { Report } from "../../../common/types/report";
import { random } from "faker";
import TextInput from "../../../common/components/form/textInput";
import Select from "../../../common/components/form/select";
import { randomOptions } from "../../../utils/dummyData/dummyOptions";

type Props = {
  modalOpen: boolean;
  close(): void;
  saveReport(newReport: Report): void;
};

const options = randomOptions();
const emptyReport = {
  id: random.number({ min: 5 }),
  name: "",
  rows: [],
  category: undefined,
  output: undefined,
  source: undefined,
};

const NewReportModal: React.FC<Props> = ({ modalOpen, close, saveReport }) => {
  const [report, setReport] = useState<Report>(emptyReport);

  const save = () => {
    //TODO add yup for validation
    if (report.name.length < 1) return;
    saveReport(report);
    setReport(emptyReport);
  };

  return (
    <Modal
      title="Create New Report"
      isOpen={modalOpen}
      close={close}
      actions={[{ text: "save", action: save }]}
      width={{ xs: 6 }}
      offset={{ xs: 3 }}
    >
      <TextInput
        label="Name"
        type="text"
        value={report.name}
        placeholder="Name"
        width="265px;"
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
    </Modal>
  );
};

export default NewReportModal;
