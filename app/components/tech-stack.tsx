import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "GraphQL"],
    color: "bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Ruby on Rails", "PostgreSQL", "MongoDB"],
    color: "bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800",
  },
  {
    category: "DevOps",
    skills: ["Linux"],
    color: "bg-purple-50 border-purple-200 dark:bg-purple-950/20 dark:border-purple-800",
  },
  {
    category: "Tools",
    skills: ["VS Code", "Postman", "Figma", "Jest", "GitHub", "Vercel"],
    color: "bg-orange-50 border-orange-200 dark:bg-orange-950/20 dark:border-orange-800",
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className={`p-6 transition-all duration-300 hover:shadow-lg ${tech.color}`}>
          <h3 className="text-lg font-semibold mb-4 text-center">{tech.category}</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full bg-background/80 px-3 py-1 text-sm font-medium shadow-sm ring-1 ring-inset ring-gray-300/50 hover:bg-background transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
