import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Clients from './sections/Clients.jsx';
import Experience from './sections/Experience.jsx';
import Contact from './sections/Contact.jsx';

const App = () => {
    return (
        <main className='max-w-7xl mx-auto relative'>
            <Hero />
            <About />
            <Projects />
            <Clients />
            <Experience />
            <Contact />
        </main>
    );
};

export default App;