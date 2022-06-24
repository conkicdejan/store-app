import React from "react";

export default function Customer({ id, fullname, remove }) {
  return (
    <div>
      <h3>{fullname}</h3>
      <button onClick={() => remove(id)}>delete</button>
    </div>
  );
}
