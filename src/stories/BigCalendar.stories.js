import React from 'react';
import { storiesOf } from "@storybook/react";

import { BigCalendar } from "../components/bigCalendar";
const stories = storiesOf("App Test", module);

stories.add("App", () => {

  return (
    <BigCalendar
      onClickEvent={(item) => {
        console.log(item)
      }}
      onClickDay={(item) => {
        console.log(item)
      }}
      onChangeMonth={(item) => {
        console.log(item)
      }}
      onClickFooter={(item) => {
        console.log(item)
      }}
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

          {
            date: new Date(2021, 6, 5),
            backgroundColor: "#e8f4f8",
            borderColor: "#399bbc",
            footerView: true,
            footerTitle: "Ver mais",
            eventsDay: [
              {
                title: "Atendente",
                dotColor: "#000"
              },
              {
                title: "Moto boy",
                dotColor: "#000"
              }
            ]
          },
          {
            date: new Date(2021, 6, 30),
            backgroundColor: "#e8f4f8",
            borderColor: "#399bbc",
            footerView: true,
            footerTitle: "Ver mais",
            eventsDay: [
              {
                title: "Dentista",
                dotColor: "#000"
              },
              {
                title: "Farra",
                dotColor: "#000"
              }
            ]
          },
          {
            date: new Date(2021, 6, 28),
            backgroundColor: "#FF7F7F50",
            borderColor: "red",
            footerView: true,
            footerTitle: "Ver mais",
            eventsDay: [
              {
                title: "Tomar uma",
                dotColor: "#000"
              },
              {
                title: "Ressaca",
                dotColor: "#000"
              }
            ]
          },
        ]}
    />
  )
})