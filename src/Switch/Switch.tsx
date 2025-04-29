import {
  type UseControllerProps,
  useController,
  type FieldValues,
  type FieldPath,
} from 'react-hook-form'
import {
  Switch as $Switch,
  type SwitchProps as $SwitchProps,
} from '@mantine/core'
import { SwitchGroup } from './SwitchGroup/SwitchGroup'

export type SwitchProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
> = UseControllerProps<TFieldValues, TName, TTransformedValues> &
  Omit<$SwitchProps, 'value' | 'checked' | 'defaultValue'>

export function Switch<
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
}: SwitchProps<TFieldValues, TName, TTransformedValues>) {
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
    <$Switch
      value={value}
      checked={value}
      onChange={(e) => {
        fieldOnChange(e)
        onChange?.(e)
      }}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  )
}

Switch.Item = $Switch
Switch.Group = SwitchGroup
