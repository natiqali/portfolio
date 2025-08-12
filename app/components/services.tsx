import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Globe, Database, Palette, Zap } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Full-stack web applications using modern frameworks like React, Next.js, and Ruby on Rails with responsive design and optimal performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications with React Native, delivering native performance and seamless user experiences across iOS and Android.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Robust server-side solutions with Node.js, Ruby on Rails, and database design using PostgreSQL and MongoDB for scalable applications.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design approach creating intuitive interfaces with modern design principles, wireframing, and prototyping.",
  },
  {
    icon: Code,
    title: "API Development",
    description:
      "RESTful APIs and GraphQL services with proper authentication, documentation, and integration capabilities for seamless data flow.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Website and application optimization for speed, SEO, and user experience using best practices and modern optimization techniques.",
  },
]

export default function Services() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const IconComponent = service.icon
        return (
          <Card
            key={service.title}
            className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <IconComponent className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center leading-relaxed">{service.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
