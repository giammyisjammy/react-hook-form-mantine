import { forwardRef } from "react";
import {
  type UseControllerProps,
  useController,
  type FieldValues,
  type FieldPath,
} from "react-hook-form";
import {
  NumberInput as $NumberInput,
  type NumberInputProps as $NumberInputProps,
} from "@mantine/core";
import { useMergeRefs } from "../useMergedRef";

export type NumberInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
> = UseControllerProps<TFieldValues, TName, TTransformedValues> &
  Omit<$NumberInputProps, "value" | "defaultValue">;

export const NumberInput = forwardRef(function NumberInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
>(
  {
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
    onChange,
    ...props
  }: NumberInputProps<TFieldValues, TName, TTransformedValues>,
  ref: React.Ref<HTMLInputElement>,
) {
  const {
    field: { value, onChange: fieldOnChange, ref: hookRef, ...field },
    fieldState,
  } = useController<TFieldValues, TName, TTransformedValues>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  const mergedRef = useMergeRefs(hookRef, ref);

  return (
    <$NumberInput
      ref={mergedRef}
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
});
