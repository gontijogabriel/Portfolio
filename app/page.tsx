"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
    Github,
    Linkedin,
    MessageCircle,
    Instagram,
    Mail,
    MapPin,
    Calendar,
    ExternalLink,
    Code,
    Database,
    Server,
    Monitor,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Home() {
    const [activeSection, setActiveSection] = useState("home")

    const skills = {
        frontend: {
            title: "Frontend",
            icon: <Monitor className="w-5 h-5" />,
            items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "TypeScript"],
        },
        backend: {
            title: "Backend",
            icon: <Server className="w-5 h-5" />,
            items: ["Python", "Django", "Django REST Framework", "Flask", "Node.js"],
        },
        database: {
            title: "Database",
            icon: <Database className="w-5 h-5" />,
            items: ["PostgreSQL", "MySQL", "SQL Server", "SQLite"],
        },
        devops: {
            title: "DevOps & Tools",
            icon: <Code className="w-5 h-5" />,
            items: ["Linux", "Git", "Docker", "AWS", "Vercel"],
        },
    }

    const projects = [
        {
            id: 1,
            name: "DevHub",
            description:
                "Plataforma completa para desenvolvedores com links rápidos, recursos e ferramentas essenciais para o desenvolvimento.",
            status: "Em Desenvolvimento",
            link: "#",
            languages: ["React", "Django REST Framework", "PostgreSQL"],
            featured: true,
        },
        {
            id: 2,
            name: "React DRF Auth",
            description:
                "Sistema completo de autenticação utilizando React no frontend com NextAuth.js e Django REST Framework com JWT no backend.",
            link: "https://github.com/gontijogabriel/react-drf-auth",
            languages: ["React", "NextAuth.js", "Django REST Framework", "JWT"],
            featured: false,
        },
    ]

    const experience = [
        {
            id: 1,
            company: "Defensoria Pública do Distrito Federal",
            position: "Estagiário de Desenvolvimento Full Stack",
            startDate: "Ago 2023",
            endDate: "Jul 2024",
            description:
                "Desenvolvimento de sistemas internos utilizando Django e React, criação de APIs RESTful, e implementação de soluções para otimizar processos administrativos.",
            link: "https://www.defensoria.df.gov.br/",
            technologies: [
                "Django",
                "Django REST Framework",
                "React",
                "HTML",
                "CSS",
                "JavaScript",
                "Swagger",
                "Linux",
                "Git",
            ],
        },
    ]

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/gontijogabriel",
            icon: <Github className="w-5 h-5" />,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/gontijogabriel/",
            icon: <Linkedin className="w-5 h-5" />,
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/61982073938",
            icon: <MessageCircle className="w-5 h-5" />,
        },
        {
            name: "Instagram",
            url: "https://instagram.com/gontijogabriel",
            icon: <Instagram className="w-5 h-5" />,
        },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "skills", "projects", "experience"]
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className="min-h-screen text-white">
            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
            >
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-bold text-white">
                            Gabriel Gontijo
                        </motion.div>
                        <div className="hidden md:flex space-x-8">
                            {["home", "about", "skills", "experience", "projects"].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`capitalize transition-colors ${activeSection === section ? "text-white" : "text-gray-500 hover:text-gray-300"
                                        }`}
                                >
                                    {section === "home"
                                        ? "Início"
                                        : section === "about"
                                            ? "Sobre"
                                            : section === "skills"
                                                ? "Habilidades"
                                                : section === "projects"
                                                    ? "Projetos"
                                                    : "Experiência"}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="mb-8">
                        <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                            <img
                                alt="Gabriel Gontijo"
                                src="https://media.licdn.com/dms/image/v2/D4D03AQGta27cWiG5PA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1683504701308?e=1754524800&v=beta&t=0JYlcQuPweyqp0nBuNyG9oDkpSTysxC-_llpqX7de2g"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6 text-white"
                    >
                        Gabriel Gontijo
                    </motion.h1>

                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-300 mb-8"
                    >
                        Desenvolvedor Full Stack
                    </motion.p>

                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
                    >
                        Especializado em React, Django e tecnologias modernas. Transformo ideias em soluções digitais inovadoras.
                    </motion.p>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {socialLinks.map((social, index) => (
                            <Button
                                key={social.name}
                                variant="outline"
                                size="lg"
                                asChild
                                className="border-gray-800 hover:border-gray-600 hover:bg-gray-900"
                            >
                                <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    {social.icon}
                                    {social.name}
                                </a>
                            </Button>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex flex-wrap justify-center gap-2"
                    >
                        {["React", "Django", "Python", "JavaScript", "PostgreSQL"].map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-gray-900 text-gray-300 border-gray-800">
                                {tech}
                            </Badge>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-6 text-white">Sobre Mim</h2>
                        <div className="w-24 h-1 bg-gray-800 mx-auto mb-8"></div>
                    </motion.div>

                    <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                        <CardContent className="p-8">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                        Sou um desenvolvedor Full Stack apaixonado por tecnologia e inovação. Com experiência em
                                        desenvolvimento web moderno, tenho foco em criar soluções eficientes e escaláveis.
                                    </p>
                                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                        Minha jornada inclui experiência prática na Defensoria Pública do DF, onde desenvolvi sistemas que
                                        impactam positivamente a vida das pessoas.
                                    </p>
                                    <div className="flex items-center gap-4 text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            <span>Brasília, DF</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Mail className="w-4 h-4" />
                                            <span>Disponível para projetos</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-white/5 rounded-lg p-4">
                                        <h4 className="font-semibold text-blue-400 mb-2">Frontend</h4>
                                        <p className="text-gray-300 text-sm">Interfaces modernas e responsivas</p>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-4">
                                        <h4 className="font-semibold text-purple-400 mb-2">Backend</h4>
                                        <p className="text-gray-300 text-sm">APIs robustas e escaláveis</p>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-4">
                                        <h4 className="font-semibold text-pink-400 mb-2">Full Stack</h4>
                                        <p className="text-gray-300 text-sm">Soluções completas end-to-end</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-6 text-white">Habilidades</h2>
                        <div className="w-24 h-1 bg-gray-800 mx-auto mb-8"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(skills).map(([key, skill], index) => (
                            <motion.div
                                key={key}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 h-full">
                                    <CardHeader className="text-center">
                                        <div className="w-12 h-12 mx-auto mb-4 bg-gray-800 rounded-lg flex items-center justify-center">
                                            {skill.icon}
                                        </div>
                                        <CardTitle className="text-white">{skill.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.items.map((item) => (
                                                <Badge
                                                    key={item}
                                                    variant="secondary"
                                                    className="bg-gray-900 text-gray-300 border-gray-800 text-xs"
                                                >
                                                    {item}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Experience Section */}
            <section id="experience" className="py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-6 text-white">Experiência</h2>
                        <div className="w-24 h-1 bg-gray-800 mx-auto mb-8"></div>
                    </motion.div>

                    {experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div>
                                            <CardTitle className="text-white text-xl">{exp.position}</CardTitle>
                                            <CardDescription className="text-gray-400 text-lg font-medium">{exp.company}</CardDescription>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <Calendar className="w-4 h-4" />
                                            <span>
                                                {exp.startDate} - {exp.endDate}
                                            </span>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                                    <Separator className="bg-gray-800 mb-4" />
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="bg-gray-900 text-gray-300 border-gray-800">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-6 text-white">Projetos</h2>
                        <div className="w-24 h-1 bg-gray-800 mx-auto mb-8"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <Card
                                    className={`bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 h-full ${project.featured ? "ring-2 ring-gray-700" : ""
                                        }`}
                                >
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <CardTitle className="text-white flex items-center gap-2">
                                                    {project.name}
                                                    {project.featured && <Badge className="bg-gray-800 text-gray-300">Destaque</Badge>}
                                                </CardTitle>
                                                {project.status && (
                                                    <Badge variant="outline" className="mt-2 border-gray-700 text-gray-400">
                                                        {project.status}
                                                    </Badge>
                                                )}
                                            </div>
                                            {project.link !== "#" && (
                                                <Button variant="ghost" size="sm" asChild>
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-gray-300 mb-4">{project.description}</CardDescription>
                                        <div className="flex flex-wrap gap-2">
                                            {project.languages.map((tech) => (
                                                <Badge key={tech} variant="secondary" className="bg-gray-900 text-gray-300 border-gray-800">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer className="py-12 px-4 border-t border-white/10">
                <div className="container mx-auto max-w-4xl text-center">
                    <p className="text-gray-400 mb-4">© 2024 Gabriel Gontijo. Todos os direitos reservados.</p>
                    <div className="flex justify-center gap-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    )
}
