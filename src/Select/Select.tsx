import {
  type UseControllerProps,
  useController,
  type FieldValues,
  type FieldPath,
} from 'react-hook-form'
import {
  Select as $Select,
  type SelectProps as $SelectProps,
} from '@mantine/core'

export type SelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
> = UseControllerProps<TFieldValues, TName, TTransformedValues> &
  Omit<$SelectProps, 'value' | 'defaultValue'>

export function Select<
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
}: SelectProps<TFieldValues, TName, TTransformedValues>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
    fieldState,
  } = useController<TFieldValues, TName, TTransformedValues>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  })

  return (
    <$Select
      value={value}
      onChange={(value, option) => {
        fieldOnChange(value, option)
        onChange?.(value, option)
      }}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  )
}
