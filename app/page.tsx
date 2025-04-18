import Link from "next/link"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 md:py-12">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-8 h-8 bg-black flex items-center justify-center">
          <span className="text-white text-xs font-bold">\n</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <h2 className="text-xl font-medium mb-1">Sandeep Edara</h2>
          <p className="text-gray-500">Sr. Engineer at Walmart</p>
        </div>
        <a href="mailto:sandeepedara@gmail.com">
          <Button variant="outline" size="sm" className="rounded-full px-4">
            <Mail className="h-4 w-4" />
            Email
          </Button>
        </a>
      </div>

      {/* Bio */}
      <div className="space-y-6 mb-12 text-gray-500">
        <p>
          I'm a software engineer from Bengaluru, India with a deep focus on web technologies. Currently, I work at{" "}
          <Link href="www.walmart.com" className="underline underline-offset-4">
            Walmart
          </Link>
          , developing experiences for the store associates.
        </p>

        <p>
          Over the past decade, I've worked, in small startups, and within larger organizations. I have dabbled with
          unix systems building stuff using perl/sed/awk, developed bespoke visualizations using d3, webgl (threejs).
        </p>
      </div>

      {/* Experiences */}
      <div className="mb-12">
        <h2 className="text-xl font-medium mb-4">Experiences</h2>
        <div className="space-y-4">
          {experiences.map((experience) => (
            <div key={experience.company} className="flex justify-between py-2">
              <div>
                <h4 className="font-medium">{experience.company}</h4>
              </div>
              <div className="text-right">
                <p className="text-gray-500">{experience.position}</p>
                <p className="text-sm text-gray-500">{experience.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

const experiences = [
  {
    company: "Walmart",
    position: "Sr. Software Engineer",
    period: "2020 - now",
  },
  {
    company: "Smartbear",
    position: "Software Engineer",
    period: "2018 - 2020",
  },
  {
    company: "Mindtree",
    position: "Lead Engineer",
    period: "2017 - 2018",
  },
  {
    company: "TCS - Data visualization CoE",
    position: "Lead Engineer",
    period: "2012 - 2017",
  },
]

