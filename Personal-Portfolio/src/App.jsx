import './index.css';
import './app.css';
import Header from './components/Header';
import PrimarySection from './components/PrimarySection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import AnimatedCursor from 'react-animated-cursor';
import Section from './components/Section';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="bg-neutral-900">
      {/* <AnimatedCursor
        color="194, 194, 194"
        trailingSpeed={8}
        outerStyle={{ border: '2px solid white' }}
      /> */}
      <Header />
      <Section>
        <PrimarySection />
      </Section>
      <Section>
        <ExperienceSection />
      </Section>
      {/* <Section>
        <ProjectsSection />
      </Section> */}
      <Section>
        <EducationSection />
      </Section>
      <Section>
        <ContactSection />
      </Section>
    </div>
  );
}

export default App;
