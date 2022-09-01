import React from "react";
import emojipedia from "../emojipedia";
import Term from "./terms";


export default function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(emoji =>(
    < Term
    key={emoji.id}
    emoji={emoji.emoji}
    name={emoji.name}
    meaning={emoji.meaning}
    />
))}
      </dl>
    </div>
  );
}



