import { addons, types } from '@storybook/addons'
import { AddonPanel } from '@storybook/components'
import { ADDON_ID, PANEL_ID } from './constants'
import { ReactHookFormPanel } from './ReactHookFormPanel'

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'React Hook Form',
    render: ({ active }) => (
      <AddonPanel active={active ?? false}>
        <ReactHookFormPanel />
      </AddonPanel>
    ),
  })
})
