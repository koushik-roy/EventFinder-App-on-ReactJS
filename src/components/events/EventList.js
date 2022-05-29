import React from "react";
import ItemEvents from "./ItemEvents";
import { useState, useEffect } from "react";

const EventList = () => {
  const [eves, setEves] = useState([]);

  useEffect(() => {
    getEves();
  }, []);

  const getEves = async () => {
    const res = await fetch("/eves");
    const data = await res.json();
    setEves(data);
  };
  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {eves.map((eve) => (
          <ItemEvents eve={eve} key={eve.id} />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
