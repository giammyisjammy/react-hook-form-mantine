import {
  type UseControllerProps,
  useController,
  type FieldValues,
  type FieldPath,
} from "react-hook-form";
import {
  MultiSelect as $MultiSelect,
  type MultiSelectProps as $MultiSelectProps,
} from "@mantine/core";

export type MultiSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
> = UseControllerProps<TFieldValues, TName, TTransformedValues> &
  Omit<$MultiSelectProps, "value" | "defaultValue">;

export function MultiSelect<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: MultiSelectProps<TFieldValues, TName, TTransformedValues>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
    fieldState,
  } = useController<TFieldValues, TName, TTransformedValues>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$MultiSelect
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  );
}
