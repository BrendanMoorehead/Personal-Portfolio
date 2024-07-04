import './index.css';
import './app.css';
import Header from './components/Header';
import PrimarySection from './components/PrimarySection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';

function App() {
  return (
    <div className="bg-stone-800">
      <Header />
      <PrimarySection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
    </div>
  );
}

export default App;
