import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { HiChevronDown } from 'react-icons/hi'

function Hero({ darkMode }) {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-float delay-300" />
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 animate-fade-in">
                    {/* Left - Text */}
                    <div className="text-center md:text-left flex-1">
                        {/* Greeting */}
                        <p className={`text-lg md:text-xl ${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium mb-4`}>
                            Hello, I'm
                        </p>

                        {/* Name */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
                            <span className="gradient-text">Nayendra Ajidiwanto Jaelani</span>
                        </h1>

                        {/* Role */}
                        <h2 className={`text-xl md:text-2xl font-semibold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'} animate-slide-up delay-100`}>
                            Informatics & Software Engineering Student
                        </h2>

                        {/* Tagline */}
                        <p className={`text-base md:text-lg max-w-xl mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'} animate-slide-up delay-200`}>
                            Passionate about web development and software engineering. Building modern applications and constantly learning new technologies.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10 animate-slide-up delay-300">
                            <a
                                href="#projects"
                                className="btn-primary hover:scale-105 transition-transform"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="btn-secondary hover:scale-105 transition-transform"
                            >
                                Contact
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex justify-center md:justify-start gap-6 animate-slide-up delay-400">
                            <a
                                href="https://github.com/cicakkayang123"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 rounded-xl ${darkMode ? 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10' : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'} transition-all hover:scale-110 hover:-translate-y-1`}
                                aria-label="GitHub"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://instagram.com/nyndra.aj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 rounded-xl ${darkMode ? 'bg-white/5 text-gray-300 hover:text-pink-400 hover:bg-white/10' : 'bg-gray-100 text-gray-600 hover:text-pink-600 hover:bg-gray-200'} transition-all hover:scale-110 hover:-translate-y-1`}
                                aria-label="Instagram"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&to=nayendraaj19@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 rounded-xl ${darkMode ? 'bg-white/5 text-gray-300 hover:text-blue-400 hover:bg-white/10' : 'bg-gray-100 text-gray-600 hover:text-blue-600 hover:bg-gray-200'} transition-all hover:scale-110 hover:-translate-y-1`}
                                aria-label="Email"
                            >
                                <FaEnvelope size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Right - Photo */}
                    <div className="flex-shrink-0 animate-fade-in">
                        <div className="relative">
                            {/* Glow ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-orange-400 blur-2xl opacity-30 scale-110" />
                            {/* Border ring */}
                            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-orange-400">
                                <img
                                    src="/profile.jpeg"
                                    alt="Nayendra Ajidiwanto Jaelani"
                                    className="w-full h-full rounded-full object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <a href="#about" className={`${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        <HiChevronDown size={32} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
