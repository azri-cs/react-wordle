import React from 'react';

function GuessList({ guessList}) {
  return <>
    <div className="guess-results">
      <ol className="guess-list">
        {guessList.map((item) => (
            <p className="guess" key={item.id}>{item.label}</p>
        ))}
      </ol>
    </div>
  </>;
}

export default GuessList;
