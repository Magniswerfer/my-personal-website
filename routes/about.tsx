// routes/about.tsx
import { PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import Navbar from "../islands/Navbar.tsx";
import PageHeader from "../components/PageHeader.tsx";
import CustomIcon from "../components/CustomIcons.tsx";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface Education {
  degree: string;
  school: string;
  period: string;
  description?: string;
}

interface Skill {
  category: string;
  items: string[];
}

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  date: string;
  link?: string;
  doi?: string;
  abstract?: string;
  type: "journal" | "conference" | "thesis" | "other";
}

export default function AboutPage(_props: PageProps) {
  const experiences: Experience[] = [
    {
      title: "Frontend Developer",
      company: "Frontmatec",
      period: "2022 - Present",
      description: [
        "Developed and maintained web applications using React and TypeScript",
        "Implemented responsive designs and modern UI components",
        "Collaborated with backend developers to integrate RESTful APIs",
      ],
    },
    // Add more experiences as needed
  ];

  const education: Education[] = [
    {
      degree: "Master of Science in Software Development",
      school: "IT University of Copenhagen",
      period: "2020 - 2022",
      description: "Specialized in web technologies and software architecture",
    },
    // Add more education entries
  ];

  const skills: Skill[] = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "HTML/CSS", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "SQL", "MongoDB"],
    },
    // Add more skill categories
  ];

  const publications: Publication[] = [
    {
      title:
        "Analyzing Developer Productivity in Software Projects: A Mixed-Methods Approach",
      authors: ["Magnus H. Kaspersen", "Other Author", "Another Author"],
      venue: "International Conference on Software Engineering (ICSE 2023)",
      date: "2023",
      type: "conference",
      doi: "10.1145/1234567.1234568",
      link: "https://example.com/paper",
      abstract:
        "This paper presents a comprehensive analysis of developer productivity metrics...",
    },
    {
      title:
        "Master's Thesis: Improving Web Application Performance Through Static Analysis",
      authors: ["Magnus H. Kaspersen"],
      venue: "IT University of Copenhagen",
      date: "2022",
      type: "thesis",
      link: "https://example.com/thesis",
      abstract:
        "This thesis explores novel approaches to improving web application performance...",
    },
    // Add more publications as needed
  ];

  return (
    <Layout title="About | Magnus H. Kaspersen">
      <div class="min-h-screen bg-neutral-100">
        <Navbar />
        <PageHeader
          title="Om mig"
          subtitle="Foredragsholder, Designer, Hacker og AI-Ekspert."
        />

        {/* Personal Introduction */}
        <section class="py-12 bg-neutral-100">
          <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto">
              <div class="prose prose-slate max-w-none">
                <p class="text-lg leading-relaxed">
                  Hello! I'm Magnus, a software developer based in Denmark with
                  a passion for building modern web applications. I specialize
                  in frontend development with React and TypeScript, but I'm
                  also experienced with various backend technologies.
                </p>
                <p class="text-lg text-gray-600 leading-relaxed">
                  When I'm not coding, I enjoy writing about technology and
                  software development on my blog. I'm particularly interested
                  in web performance, developer experience, and building
                  intuitive user interfaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section class="py-12">
          <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto">
              {/* Experience */}
              <div class="mb-12">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">
                  Experience
                </h2>
                {experiences.map((exp, index) => (
                  <div key={index} class="mb-8">
                    <div class="flex justify-between items-start mb-2">
                      <div>
                        <h3 class="text-xl font-semibold text-gray-900">
                          {exp.title}
                        </h3>
                        <p class="text-lg text-gray-600">{exp.company}</p>
                      </div>
                      <span class="text-gray-500">{exp.period}</span>
                    </div>
                    <ul class="list-disc list-inside text-gray-600 space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div class="mb-12">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Education</h2>
                {education.map((edu, index) => (
                  <div key={index} class="mb-6">
                    <div class="flex justify-between items-start mb-2">
                      <div>
                        <h3 class="text-xl font-semibold text-gray-900">
                          {edu.degree}
                        </h3>
                        <p class="text-lg text-gray-600">{edu.school}</p>
                      </div>
                      <span class="text-gray-500">{edu.period}</span>
                    </div>
                    {edu.description && (
                      <p class="text-gray-600">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div class="mb-12">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <h3 class="text-lg font-semibold text-gray-900 mb-3">
                        {skill.category}
                      </h3>
                      <div class="flex flex-wrap gap-2">
                        {skill.items.map((item, i) => (
                          <span
                            key={i}
                            class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Publications Section */}
              <section class="py-4 bg-white mb-5 rounded-lg">
                <div class="container mx-auto px-4">
                  <div class="max-w-3xl mx-auto">
                    <h2 class="text-2xl font-bold text-gray-900 mb-6">
                      Publications
                    </h2>

                    {/* Filter and display by type */}
                    {(
                      ["conference", "journal", "thesis", "other"] as const
                    ).map((type) => {
                      const typePublications = publications.filter(
                        (p) => p.type === type,
                      );
                      if (typePublications.length === 0) return null;

                      return (
                        <div key={type} class="mb-8">
                          <h3 class="text-xl font-semibold text-gray-900 mb-4 capitalize">
                            {type === "other"
                              ? "Other Publications"
                              : `${type}s`}
                          </h3>
                          <div class="space-y-6">
                            {typePublications.map((pub, index) => (
                              <div key={index} class="group">
                                <div class="mb-2">
                                  <h4 class="text-lg font-medium text-gray-900 group-hover:text-gray-700">
                                    {pub.link ? (
                                      <a
                                        href={pub.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="hover:underline"
                                      >
                                        {pub.title}
                                      </a>
                                    ) : (
                                      pub.title
                                    )}
                                  </h4>
                                  <p class="text-gray-600 text-sm">
                                    {pub.authors.join(", ")}
                                  </p>
                                  <p class="text-gray-500 text-sm">
                                    {pub.venue}, {pub.date}
                                  </p>
                                </div>

                                {/* Links and DOI */}
                                <div class="flex items-center gap-4 text-sm mb-2">
                                  {pub.doi && (
                                    <a
                                      href={`https://doi.org/${pub.doi}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      class="text-indigo-600 hover:text-indigo-800 flex items-center"
                                    >
                                      <CustomIcon
                                        name="globe"
                                        size={16}
                                        className="mr-1"
                                      />
                                      DOI
                                    </a>
                                  )}
                                  {pub.link && (
                                    <a
                                      href={pub.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      class="text-indigo-600 hover:text-indigo-800 flex items-center"
                                    >
                                      <CustomIcon
                                        name="arrow-right"
                                        size={16}
                                        className="mr-1"
                                      />
                                      View Publication
                                    </a>
                                  )}
                                </div>

                                {/* Abstract (expandable) */}
                                {pub.abstract && (
                                  <details class="text-sm text-gray-600">
                                    <summary class="cursor-pointer text-indigo-600 hover:text-indigo-800">
                                      Abstract
                                    </summary>
                                    <p class="mt-2 pl-4 border-l-2 border-gray-200">
                                      {pub.abstract}
                                    </p>
                                  </details>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
