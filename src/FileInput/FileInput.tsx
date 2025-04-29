import {
  type UseControllerProps,
  useController,
  type FieldValues,
  type FieldPath,
} from 'react-hook-form'
import {
  FileInput as $FileInput,
  type FileInputProps as $FileInputProps,
} from '@mantine/core'

export type FileInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
  Multiple = false,
> = UseControllerProps<TFieldValues, TName, TTransformedValues> &
  Omit<$FileInputProps, 'value' | 'defaultValue' | 'multiple'> & {
    /** Determines whether user can pick more than one file, `false` by default */
    multiple?: Multiple

    /** Controlled component value */
    value?: Multiple extends true ? File[] : File | null

    /** Uncontrolled component default value */
    defaultValue?: Multiple extends true ? File[] : File | null
  }

export function FileInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  multiple,
  ...props
}: FileInputProps<TFieldValues, TName, TTransformedValues>) {
  const {
    field: { value, ...field },
    fieldState,
  } = useController<TFieldValues, TName, TTransformedValues>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  })

  return (
    <$FileInput
      value={value}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  )
}
