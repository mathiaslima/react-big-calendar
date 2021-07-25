![image](https://github.com/mathiaslima/react-big-calendar/blob/master/example-1.png)

> Responsive

![image](https://github.com/mathiaslima/react-big-calendar/blob/master/responsive.png)

# React Big Calendar

> A simple and lightweight react component of a big agenda

[![NPM](https://img.shields.io/npm/v/@mathiaslima/react-big-calendar.svg)](https://www.npmjs.com/package/@mathiaslima/react-big-calendar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.md)
[![npm](https://img.shields.io/npm/dt/@mathiaslima/react-big-calendar.svg)](https://www.npmjs.com/package/@mathiaslima/react-big-calendar)
[![npm](https://img.shields.io/npm/dw/@mathiaslima/react-big-calendar.svg)](https://www.npmjs.com/package/@mathiaslima/react-big-calendar)

## Demo

coming soon

## Install

```bash
npm install @mathiaslima/react-big-calendar
```

or

```bash
yarn add @mathiaslima/react-big-calendar
```

## Usage

```jsx
import React from 'react'
import { BigCalendar } from '@mathiaslima/react-big-calendar';

const MyView = (props) => (
   <BigCalendar 
     eventsMonth={
        [
          {
            date: new Date(),
            backgroundColor: "#f0fded",
            borderColor: "green",
            footerView: true,
            // footerIcon: "<>",
            footerTitle: `Ver mais`,
            eventsDay: [
              {
                title: "Ajudante de cozinha",
                dotColor: "#000",
              },
              {
                title: "Cozinheiro",
                dotColor: "#000",
              },

            ]
          },
        ]
   />
)
```

## LOCALE

> Default is en-US

![image](https://github.com/mathiaslima/react-big-calendar/blob/master/locale.png)

```jsx
import React from 'react'
import { BigCalendar } from '@mathiaslima/react-big-calendar';
import en from 'date-fns/locale/en-US';

const MyView = (props) => (
   <BigCalendar 
     locale={en}
     eventsMonth={
        [
          {
            date: new Date(),
            backgroundColor: "#f0fded",
            borderColor: "green",
            footerView: true,
            // footerIcon: "<>",
            footerTitle: `Ver mais`,
            eventsDay: [
              {
                title: "Ajudante de cozinha",
                dotColor: "#000",
              },
              {
                title: "Cozinheiro",
                dotColor: "#000",
              },

            ]
          },
        ]
   />
)
```

### Props

- `eventsMonth:`
```jsx
      [
          {
            date: new Date(),
            backgroundColor: "#f0fded",
            borderColor: "green",
            footerView: true,
            // footerIcon: "<>",
            footerTitle: `Ver mais`,
            eventsDay: [
              {
                title: "Ajudante de cozinha",
                dotColor: "#000",
              },
              {
                title: "Cozinheiro",
                dotColor: "#000",
              },

            ]
          },
        ]

```
  - **Optional**
  - Send the event data you want to render.

- `leftIcon: String | Component`

  - **Optional**
  - The button to navigate to the previous month.

- `rightIcon: String | Component`
  - **Optional**
  - The button to navigate to the next month.

* `onMonthChange: Function(date: Date)`

  - **Optional**
  - The callback function to be called when clicking the next and previous buttons.

  ```jsx
  () => new Date
  ```
  
  
* `onClickFooter: Function(date: Date, event: Object )`

  - **Optional**
  - the function is called when you click on the footer of the day card

```jsx
  () => {
            return (
                {
                    date: "2021-07-18T20:48:54.270Z",
                    backgroundColor: "#e8f4f8",
                    borderColor: "#399bbc",
                    footerView: true,
                    footerTitle: "Ver mais",
                    eventsDay: [
                        {
                            title: "Jobs hoje",
                            dotColor: "#000"
                        },
                        {
                            title: "Jobs hoje",
                            dotColor: "#000"
                        }
                    ]
                }
            )
        }
```

* `onClickEvent: Function(date: Date, eventDay: Object )`

  - **Optional**
  - the function is called when you click on the day card event

 ```jsx
  () => {
            return (
                {
                    title: "Jobs hoje",
                    dotColor: "#000"
                }
            )
        }
  ```


* `small: Boolean`

  - **Optional**
  - Whether to apply the mobile styles or not.
  - Default value: false


## License

Licensed under the MIT License, Copyright © 2021-present Mathias Lima [mathiaslima](https://github.com/mathiaslima).

See [LICENSE](./LICENSE) for more information.
