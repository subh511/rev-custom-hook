//import React from 'react';

import { useEffect, useState } from "react";
import axios from "axios";

export default function DataFetching() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setState(res.data.todos);
    });
  }, []);

  return (
    <div>
      {state.map((todo) => (
        <FetchedData todo={todo} />
      ))}
    </div>
  );
}

function FetchedData({ todo }) {
  return (
    <div key={todo.id}>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}
