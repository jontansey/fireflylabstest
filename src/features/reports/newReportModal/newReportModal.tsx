import React, { useState } from "react";

import Modal from "../../../common/components/modal";
import { Report } from "../../../common/types/report";
import { random } from "faker";

type Props = {
  modalOpen: boolean;
  close(): void;
  saveReport(newReport: Report): void;
};

const NewReportModal: React.FC<Props> = ({ modalOpen, close, saveReport }) => {
  const [report, setReport] = useState<Report>({
    id: random.number({ min: 5 }),
    name: "New Report",
    rows: [],
    category: undefined,
    output: undefined,
    source: undefined,
  });

  const save = () => saveReport(report);

  return (
    <Modal
      title="Create New Report"
      isOpen={modalOpen}
      close={close}
      actions={[{ text: "save", action: save }]}
      width={{ xs: 6 }}
      offset={{ xs: 3 }}
    >
      <input type="text" value={report.name} placeholder="Name" />
    </Modal>
  );
};

export default NewReportModal;
