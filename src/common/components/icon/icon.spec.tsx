import React from "react";
import { render, cleanup } from "@testing-library/react";

import "jest-dom/extend-expect";
import "jest-styled-components";

import Providers from "../../../providers";
import { Icon, IconProps } from "./icon";
import { randomIcon } from "../../../utils/dummyData/dummyIcon";
import { makeTestId, randomTestIdProps } from "../../../utils/testIdUtils";

afterEach(cleanup);

const defaultProps: IconProps = {
  icon: randomIcon(),
  ...randomTestIdProps(),
};

const testId = makeTestId(defaultProps.testIdPrefix!, defaultProps.testId!);

const renderComponent = (props: IconProps = defaultProps) =>
  render(
    <Providers>
      <Icon {...props} data-testid={testId} />
    </Providers>
  );

describe("<Icon>", () => {
  it("renders the underlying library component passing props correctly", async () => {
    const { queryByRole } = renderComponent();

    //assert
    expect(queryByRole("img")).not.toBeNull();
  });
});

describe("TestID", () => {
  it("correctly generates the data-testid attribute", async () => {
    const { getByTestId } = renderComponent(defaultProps);

    expect(getByTestId(testId)).toBeDefined();
  });
});
