import React from 'react';
import { storiesOf } from "@storybook/react";

import BigCalendar from "../components/bigCalendar";

const stories = storiesOf("App Test", module);

stories.add("App", () => {

  return (<BigCalendar />)
})