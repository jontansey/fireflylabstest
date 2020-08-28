export type TestIdProps = {
  testId?: string;
  testIdPrefix?: string;
  testIdSuffix?: string;
};

export const randomTestIdProps = (): TestIdProps => {
  return {
    testId: Math.random().toString(36).substring(7),
    testIdPrefix: Math.random().toString(36).substring(7),
  };
};

export const makeTestId = (
  testIdPrefix: string,
  testId: string,
  component?: string
): string => {
  return `${
    testIdPrefix && testIdPrefix.length ? `${testIdPrefix}__` : ""
  }${testId}${component && component.length ? `--${component}` : ""}`;
};
