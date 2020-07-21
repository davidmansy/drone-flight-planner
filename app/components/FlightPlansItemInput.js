import React from "react";

function FlightPlansItemInput({ initTitle, updateTitle }) {
  const [title, setTitle] = React.useState(initTitle);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="flight-plans-item-container">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={(e) => updateTitle(title)}
        ref={inputRef}
      />
    </div>
  );
}

export default FlightPlansItemInput;
