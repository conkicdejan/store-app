import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function Customer({ id, fullname, remove }) {
  let match = useRouteMatch();
  return (
    <div>
      <h3>{fullname}</h3>
      <button onClick={() => remove(id)}>delete</button>
      <button>
        <Link to={`${match.path}/${id}`}>Latest purchases</Link>
      </button>
    </div>
  );
}
