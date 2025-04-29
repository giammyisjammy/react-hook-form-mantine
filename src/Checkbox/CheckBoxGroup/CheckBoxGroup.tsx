import {
  type CheckboxGroupProps as $CheckboxGroupProps,
  CheckboxGroup as $CheckboxGroup,
} from '@mantine/core'
import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
} from 'react-hook-form'

export type CheckboxGroupProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
> = UseControllerProps<TFieldValues, TName, TTransformedValues> &
  Omit<$CheckboxGroupProps, 'checked' | 'defaultValue'>

export const CheckboxGroup = <
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
}: CheckboxGroupProps<TFieldValues, TName, TTransformedValues>) => {
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
    <$CheckboxGroup
      error={fieldState.error?.message}
      value={value}
      onChange={(e) => {
        fieldOnChange(e)
        onChange?.(e)
      }}
      {...field}
      {...props}
    />
  )
}
