import React from "react";

import TextInput from "../../../common/components/form/textInput";
import Select from "../../../common/components/form/select";
import { Content } from "../../../common/types/report";
import { randomOptions } from "../../../utils/dummyData/dummyOptions";
import Button from "../../../common/components/button";
import { StyledFormWrapper } from "./newReportModal.styled";

const options = randomOptions();

type Props = {
  content: Content;
  setContent: React.Dispatch<React.SetStateAction<Content>>;
  addContent(): void;
  removeContent?(id: number): void;
  adding?: boolean;
};

const ContentForm: React.FC<Props> = ({
  content,
  setContent,
  addContent,
  removeContent,
  adding = true,
}) => (
  <StyledFormWrapper>
    <TextInput
      label="Name"
      type="text"
      value={content.name}
      placeholder="Enter Name"
      width="186px"
      onChange={({ target }) => setContent({ ...content, name: target.value })}
      disabled={!adding}
    />
    <TextInput
      label="Value"
      type="text"
      value={content.value}
      placeholder="Enter Value"
      width="186px"
      onChange={({ target }) => setContent({ ...content, value: target.value })}
      disabled={!adding}
    />
    <Select
      options={options}
      onChange={(o) => setContent({ ...content, type: o.label })}
      value={options.find(({ label }) => label === content.type)}
      label="type"
      placeholder="Select type"
      width="180px"
      disabled={!adding}
    />

    {adding ? (
      <Button onClick={addContent} style={{ display: "inline-flex" }}>
        ADD
      </Button>
    ) : (
      <Button
        onClick={() => removeContent && removeContent(content.id)}
        style={{ display: "inline-flex" }}
      >
        REMOVE
      </Button>
    )}
  </StyledFormWrapper>
);

export default ContentForm;
