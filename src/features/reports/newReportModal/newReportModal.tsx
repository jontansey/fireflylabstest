import React, { useState } from "react";

import Modal from "../../../common/components/modal";
import { Report, Content } from "../../../common/types/report";
import { random } from "faker";
import { StyledContent } from "./newReportModal.styled";
import ReportForm from "./reportForm";
import ContentForm from "./contentForm";
import Code from "../../../common/components/form/code";

type Props = {
  modalOpen: boolean;
  close(): void;
  saveReport(newReport: Report): void;
};

const emptyReport: Report = {
  id: random.number({ min: 5 }),
  name: "",
  rows: [],
  category: undefined,
  output: undefined,
  source: undefined,
  content: [],
};

const emptyContent = (id: number): Content => ({
  id,
  name: "",
  value: "",
  type: undefined,
});

const NewReportModal: React.FC<Props> = ({ modalOpen, close, saveReport }) => {
  const [report, setReport] = useState<Report>(emptyReport);
  const [newContent, setNewContent] = useState<Content>(
    emptyContent(random.number())
  );

  const save = () => {
    //TODO add yup for validation
    if (report.name.length < 1) return;
    saveReport(report);
    setReport(emptyReport);
  };

  const addContent = () => {
    setReport({ ...report, content: [...report.content, newContent] });
    setNewContent(emptyContent(random.number()));
  };

  const removeContent = (id: number) => {
    setReport({
      ...report,
      content: [...report.content.filter((c) => c.id !== id)],
    });
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
      <ReportForm report={report} setReport={setReport} />
      <StyledContent>
        <p>Set the content for the report</p>
        {report.content.map((c) => (
          <ContentForm
            content={c}
            setContent={setNewContent}
            addContent={addContent}
            removeContent={removeContent}
            adding={false}
          />
        ))}
        <ContentForm
          content={newContent}
          setContent={setNewContent}
          addContent={addContent}
        />
      </StyledContent>

      <Code label="code" width="100%">
        {JSON.stringify(report, undefined, 2)}
      </Code>
    </Modal>
  );
};

export default NewReportModal;
