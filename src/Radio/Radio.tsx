import {
  type UseControllerProps,
  useController,
  type FieldValues,
  type FieldPath,
} from 'react-hook-form'
import { Radio as $Radio, type RadioProps as $RadioProps } from '@mantine/core'
import { RadioGroup } from './RadioGroup/RadioGroup'

export type RadioProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
> = UseControllerProps<TFieldValues, TName, TTransformedValues> &
  Omit<$RadioProps, 'value' | 'defaultValue'>

export function Radio<
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
}: RadioProps<TFieldValues, TName, TTransformedValues>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
  } = useController<TFieldValues, TName, TTransformedValues>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  })

  return (
    <$Radio
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

Radio.Group = RadioGroup
Radio.Item = $Radio
