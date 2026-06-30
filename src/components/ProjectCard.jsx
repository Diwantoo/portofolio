import { FaFolder, FaExternalLinkAlt } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function ProjectCard({ project, darkMode, index = 0 }) {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <div
            ref={ref}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
                transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms`,
            }}
            className={`group rounded-2xl overflow-hidden ${darkMode ? 'glass' : 'bg-white shadow-lg'} card-hover`}
        >
            {/* Project Image Placeholder */}
            <div className={`h-48 ${darkMode ? 'bg-gradient-to-br from-blue-600/30 to-orange-500/30' : 'bg-gradient-to-br from-blue-100 to-orange-100'} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-4xl font-bold ${darkMode ? 'text-white/20' : 'text-blue-300'}`}>
                        {project.name.charAt(0)}
                    </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hover:scale-110 transform">
                            <FaFolder size={20} />
                        </a>
                    )}
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hover:scale-110 transform">
                            <FaExternalLinkAlt size={18} />
                        </a>
                    )}
                </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                    {project.category}
                </span>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.name}
                </h3>
                <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                </p>
                <p className={`text-xs mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    <span className="font-medium">Role:</span> {project.role}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span key={tech} className="tech-badge text-xs">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
