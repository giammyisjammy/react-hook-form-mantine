import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
} from 'react-hook-form'
import {
  Checkbox as $Checkbox,
  type CheckboxProps as $CheckboxProps,
} from '@mantine/core'
import { CheckboxGroup } from './CheckBoxGroup/CheckBoxGroup'

export type CheckboxProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
> = UseControllerProps<TFieldValues, TName, TTransformedValues> &
  Omit<$CheckboxProps, 'checked' | 'defaultValue'>

export const Checkbox = <
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
}: CheckboxProps<TFieldValues, TName, TTransformedValues>) => {
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
    <$Checkbox
      error={fieldState.error?.message}
      value={value}
      checked={value}
      onChange={(e) => {
        fieldOnChange(e)
        onChange?.(e)
      }}
      {...field}
      {...props}
    />
  )
}

Checkbox.Group = CheckboxGroup
Checkbox.Item = $Checkbox
