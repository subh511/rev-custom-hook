//import React from 'react';

import { useEffect, useState } from "react";
import axios from "axios";

function useFetched(n) {
  const [state, setState] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
        axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
          setState(res.data.todos);
          setLoading(false);
        });
      },n*1000);

    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setState(res.data.todos);
      setLoading(false);
    });
  }, []);
  return { state, loading };
}

export default function DataFetching() {
  let { state, loading } = useFetched(5);

  if (loading) {
    return <div>Loading....</div>;
  }

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
