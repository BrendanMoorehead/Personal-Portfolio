import './index.css';
import './app.css';
import Header from './components/Header';
import PrimarySection from './components/PrimarySection';
import ExperienceSection from './components/ExperienceSection';
function App() {
  return (
    <div className="bg-stone-800">
      <Header />
      <PrimarySection />
      <ExperienceSection />
    </div>
  );
}

export default App;
