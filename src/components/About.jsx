import { HiCode, HiLightningBolt, HiPuzzle } from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const highlights = [
    {
        icon: HiCode,
        title: 'Web Development',
        description: 'Building responsive and modern web applications using React, Laravel, and Tailwind CSS',
    },
    {
        icon: HiLightningBolt,
        title: 'Fast Learner',
        description: 'Quick to adapt to new technologies and always eager to learn emerging frameworks',
    },
    {
        icon: HiPuzzle,
        title: 'Problem Solver',
        description: 'Passionate about solving complex problems through clean and efficient code',
    },
]

const anim = (visible, delay = 0, type = 'up') => ({
    opacity: visible ? 1 : 0,
    transform: visible
        ? 'translateY(0) translateX(0) scale(1)'
        : type === 'left'
            ? 'translateX(-40px)'
            : type === 'right'
                ? 'translateX(40px)'
                : type === 'scale'
                    ? 'scale(0.85)'
                    : 'translateY(30px)',
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
})

function About({ darkMode }) {
    const header = useScrollAnimation()
    const leftCol = useScrollAnimation()
    const rightCol = useScrollAnimation()

    return (
        <section id="about" className={`py-24 ${darkMode ? 'bg-dark-200' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div ref={header.ref} style={anim(header.isVisible)} className="text-center mb-16">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">Get to know me better</p>
                </div>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text */}
                    <div ref={leftCol.ref} style={anim(leftCol.isVisible, 0, 'left')}>
                        <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Passionate Software Engineering Student
                        </h3>
                        <div className={`space-y-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                            <p>
                                I'm <span className="font-semibold text-blue-400">Nayendra Ajidiwanto Jaelani</span>,
                                an Informatics and Software Engineering student at Politeknik Negeri Jakarta.
                                I'm passionate about creating modern web applications and continuously improving my skills
                                in software development.
                            </p>
                            <p>
                                With a strong foundation in frontend development using React and a growing expertise in
                                backend technologies like Laravel and Node.js, I enjoy building full-stack applications
                                that solve real-world problems.
                            </p>
                            <p>
                                I'm currently focusing on web development, mobile applications, and exploring
                                data-driven systems. I believe in writing clean, maintainable code and staying
                                updated with industry best practices.
                            </p>
                        </div>
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-8">
                            {[
                                { number: '5+', label: 'Projects' },
                                { number: '2+', label: 'Years Learning' },
                                { number: '10+', label: 'Technologies' },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                                    <div className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Photo */}
                    <div ref={rightCol.ref} style={anim(rightCol.isVisible, 100, 'right')} className="flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500 to-orange-400 blur-2xl opacity-20 scale-110" />
                            <div className="relative w-64 h-72 md:w-80 md:h-96 rounded-2xl p-1 bg-gradient-to-tr from-blue-500 to-orange-400">
                                <img
                                    src="/profile.jpeg"
                                    alt="Nayendra Ajidiwanto Jaelani"
                                    className="w-full h-full rounded-2xl object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highlights */}
                <div className="grid md:grid-cols-3 gap-6 mt-16">
                    {highlights.map((item, index) => (
                        <HighlightCard key={item.title} item={item} index={index} darkMode={darkMode} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function HighlightCard({ item, index, darkMode }) {
    const { ref, isVisible } = useScrollAnimation()
    return (
        <div
            ref={ref}
            style={anim(isVisible, index * 120, 'scale')}
            className={`p-6 rounded-2xl ${darkMode ? 'glass' : 'bg-white shadow-lg'} card-hover`}
        >
            <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
                    <item.icon className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <div>
                    <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {item.title}
                    </h4>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
