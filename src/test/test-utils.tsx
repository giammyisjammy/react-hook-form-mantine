/* eslint-disable import/export */
import { cleanup, render, RenderOptions } from '@testing-library/react'
import { FormProvider, useForm } from 'react-hook-form'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

function customRender(ui: React.ReactNode, options: RenderOptions = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => {
      const methods = useForm()
      return <FormProvider {...methods}>{children}</FormProvider>
    },
    ...options,
  })
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }
