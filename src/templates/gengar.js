import React from "react";

function gengar({ pageContext: { data } }) {
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.id}</h1>
      <img src={data.image} />
      <a href="/"> GO BACK TO HOME PAGE</a>
    </div>
  );
}

export default gengar;
