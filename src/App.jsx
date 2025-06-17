import React, { useState } from 'react';
import Home from './pages/Home';
import ProjectOne from './pages/ProjectOne';
import ProjectTwo from './pages/ProjectTwo';
import ProjectThree from './pages/ProjectThree';
import ProjectFour from './pages/ProjectFour';

function App() {
  const [page, setPage] = useState("home");

  const handleBack = () => setPage("home");

  switch (page) {
    case "ProjectOne":
      return <ProjectOne onBack={handleBack} />;
    case "ProjectTwo":
      return <ProjectTwo onBack={handleBack} />;
    case "ProjectThree":
      return <ProjectThree onBack={handleBack} />;
    case "ProjectFour":
      return <ProjectFour onBack={handleBack} />;
    default:
      return <Home setPage={setPage} />;
  }
}

export default App;