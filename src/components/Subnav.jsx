import React from "react";

export default function Subnav() {
  const objects = [
    {
      id: 0,
      name: "MOON",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      time: "3 DAYS"
    },
    { id: 1, name: "Mars" },
    { id: 2, name: "Europa" },
    { id: 3, name: "Titan" },
  ];

  const listItems = objects.map((object) => {
    return <li key={object.id}>{object.name}</li>;
  });

  return <ul>{listItems}</ul>;
}
