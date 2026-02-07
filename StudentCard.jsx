
// StudentCard.jsx
// This React component displays a single student's info (name, major, year,
// image, and bio). It uses props to receive the data from a parent component,
// and React state with useState to let the user show or hide the bio text.

import React from "react";

// The StudentCard component function receives a single argument called `props`.
// `props` is an object that contains all the data passed in from the parent
// component (for example, from App.jsx when we render <StudentCard ... />).
function StudentCard(props) {
  // Destructure the props object into individual variables so we can
  // use them directly. These values are given by the parent component.
  const { name, major, year, bio, imageUrl } = props;

  // useState is a React Hook that lets this component have its own state.
  // Here we create a piece of state called `showBio` with an initial value of false.
  // - showBio: current state value (true = bio visible, false = bio hidden)
  // - setShowBio: function we call to update the showBio value
  const [showBio, setShowBio] = React.useState(false);

  // This function toggles (flips) the showBio state between true and false.
  // When the user clicks the button, we call toggleBio, which calls setShowBio
  // with the opposite of the current value using the ! (NOT) operator.
  const toggleBio = () => {
    setShowBio(!showBio);
  };

  // The return statement contains the JSX that defines what gets rendered
  // on the screen for this component.
  return (
    <div className="student-card">
      {/* Student image, using the imageUrl prop for the image source.
          The alt text uses the student's name for accessibility. */}
      <img src={imageUrl} alt={name} />

      {/* Display the student's name, coming from the `name` prop. */}
      <h2>{name}</h2>

      {/* Display the student's major and year on one line, using props. */}
      <p>
        {major} – {year}
      </p>

      {/* Button that lets the user show or hide the bio text.
          onClick calls toggleBio, which updates the showBio state. */}
      <button onClick={toggleBio}>
        {/* The button label changes based on the current value of showBio.
            If showBio is true, show "Hide Bio"; otherwise show "Show Bio". */}
        {showBio ? "Hide Bio" : "Show Bio"}
      </button>

      {/* Conditional rendering: this paragraph only appears if showBio is true.
          When showBio is false, React does not render this <p> element at all. */}
      {showBio && (
        <p className="bio">
          {/* The actual bio text comes from the `bio` prop. */}
          {bio}
        </p>
      )}
    </div>
  );
}

// Export the StudentCard component so it can be imported and used
// in other files, such as App.jsx.
export default StudentCard;
