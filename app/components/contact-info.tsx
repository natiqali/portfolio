import { Mail, Phone, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function ContactInfo() {
  return (
    <div className="grid gap-6 md:grid-cols-2 mb-8">
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-center">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
              <Mail className="h-5 w-5 text-primary" />
              <Link
                href="mailto:natiqali1515@gmail.com"
                className="text-sm hover:underline hover:text-primary transition-colors"
              >
                natiqali1515@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
              <Phone className="h-5 w-5 text-primary" />
              <Link href="tel:+923104733260" className="text-sm hover:underline hover:text-primary transition-colors">
                +92 310 4733260
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-center">Connect With Me</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
              <Github className="h-5 w-5 text-primary" />
              <Link
                href="https://github.com/natiqali"
                target="_blank"
                className="text-sm hover:underline hover:text-primary transition-colors"
              >
                github.com/natiqali
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
