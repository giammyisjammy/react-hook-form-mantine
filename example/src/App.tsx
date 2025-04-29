import { useForm } from 'react-hook-form'
import {
  Autocomplete,
  Checkbox,
  Chip,
  ColorInput,
  ColorPicker,
  FileInput,
  JsonInput,
  MultiSelect,
  NativeSelect,
  NumberInput,
  PasswordInput,
  PinInput,
  Radio,
  Rating,
  SegmentedControl,
  Select,
  Slider,
  Switch,
  Textarea,
  TextInput,
  DateInput,
  DatePickerInput,
  DateTimePicker,
  MonthPickerInput,
  TimeInput,
  YearPickerInput,
} from 'react-hook-form-mantine'

import { Paper, Container, Stack, Title, Group, Button } from '@mantine/core'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'

const schema = z.object({
  autocomplete: z.string(),
  checkbox: z.boolean(),
  chip: z.boolean(),
  chipGroupMultiple: z.array(z.string()),
  chipGroupSingle: z.string(),
  colorInput: z.string(),
  colorPicker: z.string(),
  fileInput: z.any(),
  jsonInput: z.string(),
  multiSelect: z.any(),
  nativeSelect: z.string(),
  numberInput: z.number(),
  passwordInput: z.string(),
  pinInput: z.string(),
  radio: z.string(),
  rating: z.number(),
  segmentedControl: z.string(),
  select: z.string(),
  slider: z.number(),
  switch: z.boolean(),
  textarea: z.string(),
  textInput: z.string(),

  // @mantine/dates
  dateInput: z.date().nullable(),
  datePickerInput: z.date().nullable(),
  dateTimePicker: z.date().nullable(),
  monthPickerInput: z.date().nullable(),
  timeInput: z.string(),
  yearPickerInput: z.date().nullable(),
})

// type FormSchemaIn = z.input<typeof schema>
// type FormSchemaOut = z.output<typeof schema>
type FormSchemaType = z.infer<typeof schema>

const now = new Date(Date.now())

function App() {
  const { control, handleSubmit } = useForm<FormSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      // @mantine/core
      autocomplete: '',
      checkbox: true,
      chip: true,
      chipGroupMultiple: [],
      chipGroupSingle: 'react',
      colorInput: '',
      colorPicker: '',
      fileInput: null,
      jsonInput: '',
      multiSelect: [],
      nativeSelect: '',
      numberInput: 18,
      passwordInput: '',
      pinInput: '',
      radio: '',
      rating: 2,
      segmentedControl: '',
      select: '',
      slider: 40,
      switch: false,
      textarea: '',
      textInput: '',

      // @mantine/dates
      dateInput: now,
      datePickerInput: now,
      dateTimePicker: now,
      monthPickerInput: now,
      timeInput: `${now.getHours()}:${now.getMinutes()}`,
      yearPickerInput: now,
    },
  })

  return (
    <Container size={1000}>
      <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
        <form
          onSubmit={handleSubmit(
            (values) => console.log(values),
            (values) => console.log(values)
          )}
        >
          <DevTool control={control} />
          <Stack>
            <Title order={2}>@mantine/core</Title>

            <Autocomplete
              name='autocomplete'
              label='Autocomplete'
              data={[
                { label: 'React', value: 'react' },
                { label: 'Angular', value: 'ng' },
                { label: 'Vue', value: 'vue' },
                { label: 'Svelte', value: 'svelte' },
              ]}
              control={control}
            />
            <Checkbox name='checkbox' label='Checkbox' control={control} />
            <Chip name='chip' control={control}>
              Awesome Chip
            </Chip>
            <Chip.Group multiple name='chipGroupMultiple' control={control}>
              <Chip.Item value='react'>React</Chip.Item>
              <Chip.Item value='ng'>Angular</Chip.Item>
              <Chip.Item value='svelte'>Svelte</Chip.Item>
            </Chip.Group>
            <Chip.Group name='chipGroupSingle' control={control}>
              <Chip.Item value='1'>1</Chip.Item>
              <Chip.Item value='2'>2</Chip.Item>
              <Chip.Item value='3'>3</Chip.Item>
            </Chip.Group>
            <ColorInput
              name='colorInput'
              label='ColorInput'
              control={control}
            />
            <ColorPicker name='colorPicker' control={control} />
            <FileInput name='fileInput' label='FileInput' control={control} />
            <JsonInput
              name='jsonInput'
              label='JsonInput'
              control={control}
              formatOnBlur
              autosize
              minRows={4}
            />
            <MultiSelect
              name='multiSelect'
              label='MultiSelect'
              data={['React', 'Vue', 'Angular', 'Svelte']}
              control={control}
            />
            <NativeSelect
              name='nativeSelect'
              label='NativeSelect'
              data={['React', 'Vue', 'Angular', 'Svelte']}
              control={control}
            />
            <NumberInput
              name='numberInput'
              label='NumberInput'
              control={control}
              withAsterisk
            />
            <PasswordInput
              name='passwordInput'
              label='PasswordInput'
              control={control}
              withAsterisk
            />
            <PinInput name='pinInput' control={control} />
            <Radio.Group
              name='radio'
              control={control}
              label='Radio'
              withAsterisk
            >
              <Group mt='xs'>
                {[
                  { label: 'React', value: 'react' },
                  { label: 'Angular', value: 'ng' },
                  { label: 'Vue', value: 'vue' },
                  { label: 'Svelte', value: 'svelte' },
                ].map((item) => (
                  <Radio.Item
                    key={item.value}
                    value={item.value}
                    label={item.label}
                  />
                ))}
              </Group>
            </Radio.Group>
            <Rating name='rating' control={control} />
            <SegmentedControl
              name='segmentedControl'
              data={[
                { label: 'React', value: 'react' },
                { label: 'Angular', value: 'ng' },
                { label: 'Vue', value: 'vue' },
                { label: 'Svelte', value: 'svelte' },
              ]}
              control={control}
            />
            <Select
              name='select'
              label='Select'
              data={[
                { label: 'React', value: 'react' },
                { label: 'Angular', value: 'ng' },
                { label: 'Vue', value: 'vue' },
                { label: 'Svelte', value: 'svelte' },
              ]}
              control={control}
            />
            <Slider
              name='slider'
              label='Slider'
              control={control}
              marks={[
                { value: 20, label: '20%' },
                { value: 50, label: '50%' },
                { value: 80, label: '80%' },
              ]}
            />
            <Switch name='switch' label='Switch' control={control} />
            <Textarea name='textarea' label='Textarea' control={control} />
            <TextInput name='textInput' label='TextInput' control={control} />

            <Title order={2}>@mantine/dates</Title>

            <DateInput
              clearable
              label='DateInput'
              name='dateInput'
              control={control}
            />
            <DatePickerInput
              clearable
              label='DatePickerInput'
              name='datePickerInput'
              control={control}
            />
            <DateTimePicker
              clearable
              label='DateTimePicker'
              name='dateTimePicker'
              control={control}
            />
            <MonthPickerInput
              clearable
              label='MonthPickerInput'
              name='monthPickerInput'
              control={control}
            />
            <TimeInput label='TimeInput' name='timeInput' control={control} />
            <YearPickerInput
              clearable
              label='YearPickerInput'
              name='yearPickerInput'
              control={control}
            />

            <Group>
              <Button type='submit'>Submit</Button>
            </Group>
          </Stack>
        </form>
      </Paper>
    </Container>
  )
}

export default App
