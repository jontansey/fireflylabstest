import { random } from "faker";
import { Option } from "../../common/types/select";

export const randomOption = (id: number): Option => ({
  label: random.words(1),
  value: id,
});

export const randomOptions = (count = 10): Option[] =>
  [...Array(count)].map((c, i) => randomOption(i));
