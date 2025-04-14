import {
  type UseControllerProps,
  useController,
  type FieldValues,
  type FieldPath,
} from "react-hook-form";
import {
  Rating as $Rating,
  type RatingProps as $RatingProps,
} from "@mantine/core";

export type RatingProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
> = UseControllerProps<TFieldValues, TName, TTransformedValues> &
  Omit<$RatingProps, "value" | "defaultValue">;

export function Rating<
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
}: RatingProps<TFieldValues, TName, TTransformedValues>) {
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
    <$Rating
      value={value}
      onChange={(e) => {
        fieldOnChange(e);
        onChange?.(e);
      }}
      {...field}
      {...props}
    />
  );
}
