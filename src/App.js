// Importing necessary libraries
import React, { useState } from 'react';
import './App.css'; // Import custom CSS for styling

function App() {
  // State to hold user profile and workout recommendations
  const [userProfile, setUserProfile] = useState({
    name: '',
    fitnessGoal: 'Weight Loss',
    age: '',
    weight: '',
    height: '',
  });

  const [workouts, setWorkouts] = useState([]);

  // Function to handle profile form submission
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    generateWorkoutRecommendations();
  };

  // Function to generate dynamic workout recommendations
  const generateWorkoutRecommendations = () => {
    const goal = userProfile.fitnessGoal;
    let recommendedWorkouts = [];

    if (goal === 'Weight Loss') {
      recommendedWorkouts = [
        { name: 'Jumping Jacks', duration: '30 seconds' },
        { name: 'Burpees', duration: '15 repetitions' },
        { name: 'Mountain Climbers', duration: '30 seconds' },
      ];
    } else if (goal === 'Muscle Gain') {
      recommendedWorkouts = [
        { name: 'Push-Ups', duration: '15 repetitions' },
        { name: 'Squats', duration: '20 repetitions' },
        { name: 'Plank Hold', duration: '1 minute' },
      ];
    }

    setWorkouts(recommendedWorkouts);
  };

  // Function to update user profile state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personalized Workout Planner</h1>
        <p>Create a fitness plan tailored to your goals!</p>
      </header>

      <main>
        {/* User Profile Form */}
        <section className="profile-section">
          <h2>Your Profile</h2>
          <form onSubmit={handleProfileSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={userProfile.name}
                onChange={handleInputChange}
                required
              />
            </label>

            <label>
              Age:
              <input
                type="number"
                name="age"
                value={userProfile.age}
                onChange={handleInputChange}
                required
              />
            </label>

            <label>
              Weight (kg):
              <input
                type="number"
                name="weight"
                value={userProfile.weight}
                onChange={handleInputChange}
                required
              />
            </label>

            <label>
              Height (cm):
              <input
                type="number"
                name="height"
                value={userProfile.height}
                onChange={handleInputChange}
                required
              />
            </label>

            <label>
              Fitness Goal:
              <select
                name="fitnessGoal"
                value={userProfile.fitnessGoal}
                onChange={handleInputChange}
              >
                <option value="Weight Loss">Weight Loss</option>
                <option value="Muscle Gain">Muscle Gain</option>
              </select>
            </label>

            <button type="submit">Generate Plan</button>
          </form>
        </section>

        {/* Workout Recommendations */}
        <section className="workout-section">
          <h2>Workout Plan</h2>
          {workouts.length > 0 ? (
            <ul>
              {workouts.map((workout, index) => (
                <li key={index}>
                  {workout.name} - {workout.duration}
                </li>
              ))}
            </ul>
          ) : (
            <p>Fill out your profile to see your personalized plan!</p>
          )}
        </section>

        {/* Timer Feature (placeholder) */}
        <section className="timer-section">
          <h2>Exercise Timer</h2>
          <p>Timer feature coming soon!</p>
        </section>
      </main>

      <footer>
        <p>© 2024 Personalized Workout Planner</p>
      </footer>
    </div>
  );
}

export default App;
