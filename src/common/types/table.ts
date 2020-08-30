export interface TableColumn<T> {
  title: string;
  field: keyof T & string;
  computedField?(arg0: T): string;
  center?: boolean;
}

export type DataItem = { [s: string]: any };
