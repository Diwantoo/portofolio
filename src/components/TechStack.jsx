import {
    SiReact, SiTailwindcss, SiFirebase, SiNodedotjs,
    SiLaravel, SiPostgresql, SiJavascript, SiHtml5,
    SiCss3, SiAndroidstudio, SiPython, SiScikitlearn, SiFigma
} from 'react-icons/si'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const technologies = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
]

function TechItem({ tech, index }) {
    const { ref, isVisible } = useScrollAnimation()
    return (
        <div
            ref={ref}
            className={`group p-4 md:p-6 rounded-2xl card-hover flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform reveal ${isVisible ? 'animate-scale-in' : ''}`}
            style={{ animationDelay: `${index * 60}ms` }}
        >
            <tech.icon
                className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                style={{ color: tech.color }}
            />
            <span className="text-xs md:text-sm font-medium text-center text-gray-300">
                {tech.name}
            </span>
        </div>
    )
}

function TechStack({ darkMode }) {
    const header = useScrollAnimation()

    return (
        <section id="tech" className={`py-24 ${darkMode ? 'bg-dark-300' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div
                    ref={header.ref}
                    className={`text-center mb-16 reveal ${header.isVisible ? 'animate-slide-up' : ''}`}
                >
                    <h2 className="section-title">Tech Stack</h2>
                    <p className="section-subtitle">
                        Technologies I work with
                    </p>
                </div>

                {/* Tech Grid */}
                <div className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 md:gap-6`}>
                    {technologies.map((tech, index) => (
                        <div
                            key={tech.name}
                            className={`${darkMode ? 'glass' : 'bg-gray-50 shadow-md'}`}
                            style={{ borderRadius: '1rem' }}
                        >
                            <TechItem tech={tech} index={index} darkMode={darkMode} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechStack
