import { Button } from "@/components/ui/button"
import { Github, Mail } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import ContactInfo from "./components/contact-info"
import Services from "./components/services"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Natiq Ali
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-primary">
                About
              </Link>
              <Link href="#services" className="transition-colors hover:text-primary">
                Services
              </Link>
              <Link href="#projects" className="transition-colors hover:text-primary">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <Button
            variant="outline"
            className="ml-auto bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Resume
          </Button>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Full Stack Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed">
                  Building digital experiences with modern technologies. Focused on creating elegant solutions to
                  complex problems with clean, efficient code.
                </p>
              </div>
              <div className="flex gap-4">
                <Link href="https://github.com/natiqali" target="_blank">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
                  >
                    <Github className="h-5 w-5" />
                    GitHub
                  </Button>
                </Link>
                <Link href="mailto:natiqali1515@gmail.com">
                  <Button size="lg" className="gap-2">
                    <Mail className="h-5 w-5" />
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Services</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
                Comprehensive development services to bring your ideas to life
              </p>
            </div>
            <Services />
          </div>
        </section>

        <section id="projects" className="py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Projects</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
                A showcase of my recent work and technical expertise
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Travel Agency App"
                description="A modern travel agency web application built with React.js, TypeScript, and Tailwind CSS. Features responsive UI components, interactive travel booking interfaces, and seamless user experiences for browsing destinations, packages, and special offers."
                image="/images/travel-agency.png"
                link="https://github.com/natiqali"
                tags={["React.js", "TypeScript", "Tailwind CSS"]}
              />
              <ProjectCard
                title="Movie Info App"
                description="A movie discovery application built with React and integrated with The Open Movie Database (OMDb) API. Features movie search functionality, detailed information display, and favorites management with a clean, modern interface."
                image="/images/movie-app.png"
                link="https://github.com/natiqali"
                tags={["React", "OMDb API", "JavaScript"]}
              />
              <ProjectCard
                title="Real Estate Platform"
                description="A comprehensive real estate platform featuring property listings, advanced search filters, virtual tours, and agent-client communication. Built with modern web technologies for optimal user experience."
                image="/images/real-estate.png"
                link="https://github.com/natiqali"
                tags={["Next.js", "MongoDB", "Socket.io"]}
              />
              <ProjectCard
                title="E-commerce Dashboard"
                description="A full-featured e-commerce admin dashboard with analytics, inventory management, order tracking, and customer insights. Features real-time data visualization and comprehensive business metrics."
                image="/images/ecommerce-dashboard.png"
                link="https://github.com/natiqali"
                tags={["React", "Node.js", "PostgreSQL", "Chart.js"]}
              />
              <ProjectCard
                title="Task Management System"
                description="A collaborative project management application with Kanban boards, team collaboration features, deadline tracking, and progress analytics. Designed for enhanced productivity and team coordination."
                image="/images/task-management.png"
                link="https://github.com/natiqali"
                tags={["Next.js", "Ruby on Rails", "WebSocket"]}
              />
              <ProjectCard
                title="Social Media Analytics"
                description="A comprehensive social media management dashboard providing analytics, content scheduling, engagement metrics, and multi-platform integration for businesses and content creators."
                image="/images/social-dashboard.png"
                link="https://github.com/natiqali"
                tags={["React", "Express", "MongoDB", "D3.js"]}
              />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Tech Stack</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
                Technologies and tools I use to build amazing applications
              </p>
            </div>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Get in Touch</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
                  Ready to start your next project? Let's discuss how I can help bring your ideas to life.
                </p>
              </div>
              <ContactInfo />
              <div className="mx-auto max-w-2xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/30">
        <div className="container flex flex-col gap-2 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-sm text-muted-foreground">© 2024 Natiq Ali. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-6">
            <Link
              className="text-sm hover:underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
