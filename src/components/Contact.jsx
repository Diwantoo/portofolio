import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { HiMail, HiLocationMarker } from 'react-icons/hi'

const contactLinks = [
    {
        icon: FaEnvelope,
        label: 'Email',
        value: 'nayendraaj19@gmail.com',
        href: 'https://mail.google.com/mail/?view=cm&to=nayendraaj19@gmail.com',
        color: 'from-red-500 to-orange-500',
    },
    {
        icon: FaGithub,
        label: 'GitHub',
        value: '@Diwantoo',
        href: 'https://github.com/Diwantoo',
        color: 'from-gray-600 to-gray-800',
    },
    {
        icon: FaInstagram,
        label: 'Instagram',
        value: '@nyndra.aj',
        href: 'https://instagram.com/nyndra.aj',
        color: 'from-pink-500 to-purple-600',
    },
]

function Contact({ darkMode }) {
    return (
        <section id="contact" className={`py-24 ${darkMode ? 'bg-dark-200' : 'bg-gray-50'}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Have a project in mind or want to connect? Feel free to reach out!
                    </p>
                </div>

                {/* Contact Card */}
                <div className={`p-8 md:p-12 rounded-3xl ${darkMode ? 'glass' : 'bg-white shadow-xl'} text-center`}>
                    {/* Email CTA */}
                    <div className="mb-10">
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${darkMode
                            ? 'bg-gradient-to-r from-blue-600 to-orange-500'
                            : 'bg-gradient-to-r from-blue-500 to-orange-400'
                            } hover:scale-110 transition-transform`}>
                            <HiMail className="w-10 h-10 text-white" />
                        </div>

                        <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Let's Connect
                        </h3>

                        <p className={`mb-6 max-w-md mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            I'm always open to discussing new opportunities, interesting projects,
                            or just having a chat about technology and software development.
                        </p>

                        <a
                            href="https://mail.google.com/mail/?view=cm&to=nayendraaj19@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-transform"
                        >
                            <FaEnvelope />
                            Send me an email
                        </a>
                    </div>

                    {/* Divider */}
                    <div className={`border-t ${darkMode ? 'border-white/10' : 'border-gray-200'} my-10`} />

                    {/* Social Links */}
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        {contactLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-4 p-4 rounded-xl ${darkMode
                                    ? 'bg-white/5 hover:bg-white/10'
                                    : 'bg-gray-50 hover:bg-gray-100'
                                    } transition-colors group hover:scale-[1.03] transform`}
                            >
                                <div className={`p-3 rounded-xl bg-gradient-to-r ${link.color}`}>
                                    <link.icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="text-left">
                                    <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                                        {link.label}
                                    </div>
                                    <div className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                                        {link.value}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Location */}
                    <div className={`mt-10 flex items-center justify-center gap-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        <HiLocationMarker />
                        <span className="text-sm">Based in Indonesia</span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact
