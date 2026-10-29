import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "NASA NeoW API Visualizer",
    description: "Built a 3D web application fetching and rendering real-time near-Earth asteroid data from NASA's NeoWs API. Bridged declarative React with imperative WebGL using useRef, implemented smart caching, and established custom garbage-collection.",
    tags: ["React", "Three.js", "WebGL", "HTML/CSS"],
    link: "https://github.com/twaltner251/NASA-NeoW-API-Visualizer"
  },
  {
    title: "Dynamic CLI Minibatch MLP",
    description: "Engineered a custom Multi-Layer Perceptron from scratch without popular ML frameworks to classify the FashionMNIST dataset. Scaled stochastic gradient descent (SGD) with He weight initialization and dynamic CLI hyperparameter configuration.",
    tags: ["Python", "NumPy", "Machine Learning"],
    link: "https://github.com/twaltner251/Dynamic-MLP"
  },
  {
    title: "Map Routing & Pathfinding Visualizer",
    description: "Engineered a geographic routing application utilizing Dijkstra's algorithm and a custom PriorityQueue to compute shortest paths with a custom graph data structure and Haversine distance calculations.",
    tags: ["Java", "Java Swing", "Algorithms"],
    link: "https://github.com/twaltner251"
  },
  {
    title: "2D Gravity Simulation Engine",
    description: "Developed an interactive 2D physics simulation to model N-body gravitational interactions, utilizing custom vector mathematics and Newtonian mechanics to compute real-time particle trajectories and collision dynamics.",
    tags: ["Java", "Physics Simulation", "Algorithms"],
    link: "https://github.com/twaltner251/2D-Gravity-Sim"
  }
];

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="space-y-12">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
          <Code className="w-5 h-5 text-indigo-400" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">Featured Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="text-xs px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800 font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};