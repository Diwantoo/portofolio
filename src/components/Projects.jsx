import { useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const categories = ['All', 'Web Application', 'UI/UX', 'Decision Support', 'Mobile App', 'Machine Learning']

function Projects({ darkMode }) {
    const [activeCategory, setActiveCategory] = useState('All')
    const header = useScrollAnimation()
    const filter = useScrollAnimation()

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory)

    return (
        <section id="projects" className={`py-24 ${darkMode ? 'bg-dark-200' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div
                    ref={header.ref}
                    className={`text-center mb-12 reveal ${header.isVisible ? 'animate-slide-up' : ''}`}
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        A selection of projects I've worked on
                    </p>
                </div>

                {/* Category Filter */}
                <div
                    ref={filter.ref}
                    className={`flex flex-wrap justify-center gap-3 mb-12 reveal ${filter.isVisible ? 'animate-fade-in' : ''}`}
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 hover:scale-105 ${activeCategory === category
                                ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-lg shadow-blue-500/25'
                                : darkMode
                                    ? 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            darkMode={darkMode}
                            index={i}
                        />
                    ))}
                </div>

                {/* No projects message */}
                {filteredProjects.length === 0 && (
                    <p className={`text-center py-12 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        No projects found in this category.
                    </p>
                )}
            </div>
        </section>
    )
}

export default Projects
