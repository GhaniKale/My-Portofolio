import React, { useState } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Code, Smartphone, Palette, Network } from 'lucide-react';

// Components
const NavBar = ({ isDark, toggleDark }: { isDark: boolean; toggleDark: () => void }) => (
  <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <span className="text-xl font-bold text-gray-900 dark:text-white">Portfolio</span>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDark}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDark ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <img
        src="https://github.com/GhaniKale/My-Portofolio/blob/72c9899cdfcc9d4a39726ad604142f6b3e28121e/img.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full mx-auto mb-8 object-cover shadow-lg"
      />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        Hi, I'm Ghani Abassyah Helar
      </h1>
      <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
        Web Developer | Mobile App Dev | Logo Designer | Network Engineer
      </p>
      <a
        href="#contact"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Get in Touch
      </a>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
      <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
        <p className="text-lg leading-relaxed mb-6">
          With over 5 years of experience in tech, I've developed a diverse skill set spanning web development,
          mobile app dev, branding, and network engineering. My passion lies in creating seamless digital
          experiences that combine beautiful design with robust functionality.
        </p>
        <p className="text-lg leading-relaxed">
          I approach each project with a holistic perspective, leveraging my cross-disciplinary expertise
          to deliver comprehensive solutions that exceed client expectations.
        </p>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skills = [
    {
      title: 'Web Development',
      icon: Code,
      description: 'HTML, CSS, JavaScript, React, Node.js, TypeScript',
    },
    {
      title: 'Mobile App Design',
      icon: Smartphone,
      description: 'Flutter, React Native, iOS/Android Design Patterns',
    },
    {
      title: 'Logo Design',
      icon: Palette,
      description: 'Brand Identity, Vector Graphics, Typography',
    },
    {
      title: 'Network Engineering',
      icon: Network,
      description: 'Cisco, MikroTik, Network Security, Cloud Infrastructure',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.title} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <skill.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Public Information & Complaints System',
      description: 'Full-stack web application with React and Node.js',
      image: 'https://github.com/GhaniKale/my-images/blob/main/app1.png?raw=true',
      tags: ['Web Development', 'React', 'Node.js','Database','JS'],
    },
    {
      title: 'Monitoring System Safety Work',
      description: 'Mobile app for tracking People Safety using Computer Vision',
      image: 'https://github.com/GhaniKale/my-images/blob/main/app2.jpg?raw=true',
      tags: ['Mobile App', 'Flutter','AI','Python','Djanggo','Dart','MySQl','CI'],
    },
    {
      title: 'Web-Based AC Service Management Information System: Design and Implementation',
      description: 'Design and development of web-based information system for air conditioner repair service management',
      image: 'https://github.com/GhaniKale/my-images/blob/main/app3.jpg?raw=true',
      tags: ['Web Development','Laravel','JavaScript','JSON','Database','Figma','MySQL','PHP'],
    },
    {
      title: 'Enterprise Network Setup',
      description: 'Network infrastructure for a company',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=500',
      tags: ['Network Engineering','Cisco'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Get in Touch</h2>
      <div className="max-w-xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
        <div className="mt-12 flex justify-center space-x-6">
          <a href="https://github.com/GhaniKale" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/ghani-abassyah-helar-7a769121b/" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:ghaniabassyahhelar@gmail.com" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white dark:bg-gray-900 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-300">
      <p>© 2024 Ghani Abassyah Helar. All rights reserved.</p>
    </div>
  </footer>
);

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <NavBar isDark={isDark} toggleDark={toggleDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
