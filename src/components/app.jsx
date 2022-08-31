import React from "react";
import emojipedia from "../emojipedia";
import Term from "./terms";

function makeemoji(emoji){
    return < Term
    key={emoji.id}
    emoji={emoji.emoji}
    name={emoji.name}
    meaning={emoji.meaning}
    />
};

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(makeemoji)}
      </dl>
    </div>
  );
}

export default App;
