import '@storybook/addon-console';

import { setConsoleOptions } from '@storybook/addon-console';

import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

setConsoleOptions({
panelExclude: [],
});
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}