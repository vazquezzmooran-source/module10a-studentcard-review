// App.jsx
// This is the root component of the app. It renders a single StudentCard
// and passes in the student's data as props (name, major, year, bio, image).

// Import the StudentCard component from the local file so we can use it here.
import StudentCard from './StudentCard';

function App() {
  // The App component returns JSX that defines what appears on the page.
  return (
    <div>
      {/* Render one StudentCard component and pass in props.
          Each attribute below (name, major, year, bio, imageUrl)
          becomes a property on the `props` object inside StudentCard. */}
      <StudentCard
        name="Emily Carter"
        major="Computer Science"
        year="Sophomore"
        bio="I enjoy building interactive web apps and working on open source projects in my spare time."
        imageUrl="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150&h=150&fit=crop&crop=face"
      />
    </div>
  );
}

// Export the App component so it can be used as the main entry point of the app.
export default App;
