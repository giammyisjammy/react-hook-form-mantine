import {
  type UseControllerProps,
  useController,
  type FieldValues,
  type FieldPath,
} from "react-hook-form";
import { type ChipProps as $ChipProps, Chip as $Chip } from "@mantine/core";
import { ChipGroup } from "./ChipGroup/ChipGroup";

export type ChipProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
> = UseControllerProps<TFieldValues, TName, TTransformedValues> &
  Omit<$ChipProps, "value" | "defaultValue">;

export const Chip = <
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
}: ChipProps<TFieldValues, TName, TTransformedValues>) => {
  const {
    field: { value, onChange: fieldOnChange, ...field },
  } = useController<TFieldValues, TName, TTransformedValues>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <$Chip
      value={value}
      checked={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      {...field}
      {...props}
    />
  );
};

Chip.Group = ChipGroup;
Chip.Item = $Chip;
