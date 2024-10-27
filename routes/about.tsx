// routes/about.tsx
import { PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import Navbar from "../islands/Navbar.tsx";
import PageHeader from "../components/PageHeader.tsx";
import CustomIcon from "../components/CustomIcons.tsx";

interface Erfaring {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface Uddannelse {
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
  type: "tidsskrift" | "konference" | "afhandling" | "other";
}

export default function AboutPage(_props: PageProps) {
  const experiences: Erfaring[] = [
    {
      title: "Partner & AI Ekspert",
      company: "Creative Oak",
      period: "2023 - Nu",
      description: [
        "Foredrag og workshops om AI",
        "Udvikling af hjemmesider i Webflow",
      ],
    },
    {
      title: "Postdoctoral Researcher",
      company: "Aarhus Universitet",
      period: "2023 - Nu",
      description: [
        "Forskning i kunstig intelligens og uddannelse",
        "Design og udvikling af forskningsprototyper",
      ],
    },
    // Add more experiences as needed
  ];

  const education: Uddannelse[] = [
    {
      degree: "Ph.d., Datalogi",
      school: "Aarhus Universitet",
      period: "2019-2023",
      description: "Forskning i kunstig intelligens i skolen",
    },
    {
      degree: "Kandidatgrad, IT Produktudvikling, cand.scient.it",
      school: "Aarhus Universitet",
      period: "2017 - 2019",
      description: "Speciale i kunstig intelligens i gymnasiet",
    },
    {
      degree: "Bachelorgrad, IT Produktudvikling",
      school: "Aarhus Universitet",
      period: "2014 - 2019",
      description: "Fokus på designforskning og produktdesign",
    },
    // Add more education entries
  ];

  const skills: Skill[] = [
    {
      category: "Frontend",
      items: ["Fresh", "TypeScript", "HTML/CSS", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Deno", "Python"],
    },
    {
      category: "Embedded",
      items: ["Arduino", "Raspberry Pi", "C++"],
    },
    // Add more skill categories
  ];

  const publications: Publication[] = [
    {
      title:
        "Staging reflections on ethical dilemmas in machine learning: A card-based design workshop for high school students",
      authors: [
        "Karl-Emil Kjær Bilstrup",
        "Magnus H Kaspersen",
        "Marianne Graves Petersen",
      ],
      venue: "Designing Interactive System (DIS)",
      date: "2020",
      type: "konference",
      doi: "10.1145/3357236.3395558",
      link: "https://dl.acm.org/doi/abs/10.1145/3357236.3395558",
      abstract:
        "The increased use of machine learning (ML) in society raises questions of how ethical dilemmas inherent in computational artefacts can be made understandable and explorable for students. To investigate this, we developed a card-based design workshop that allows students to reflect on ethical dilemmas by designing their own ML applications. The workshop was developed in an iterative process engaging four high school classrooms with students aged 16-20. We found that scaffolding students in designing meaningful ML systems served to qualify their ethical reflections. Further students' design processes allowed them to engage with the ethical dilemmas and to tie these to the properties of the technology and to their design decisions. We suggest seeing technology-close discussions about ethics as a goal in design processes, and prototyping as a means to ground these discussions in students' own design decisions, and we contribute a workshop format and design artefacts that allow for this.",
    },
    {
      title:
        "AI Education that Matters: Designing Computationally Empowering Learning Tools for Machine Learning",
      authors: ["Magnus H. Kaspersen"],
      venue: "Aarhus Universitet",
      date: "2023",
      type: "afhandling",
      link: "https://pure.au.dk/portal/da/publications/ai-education-that-matters-designing-computationally-empowering-le",
      abstract:
        "Artificial intelligence (AI), particularly machine learning (ML), has become nearly ubiquitous in recent years. From social media to medical work, AI provides the infrastructure to many of our most used and critical IT systems. However, such systems are prone to unintended biases rooted in historical data, their inner workings are opaque, and we have seen intentional nefarious use in, e.g., democratic elections. This development calls for a democratization of AI: that its further development and use be made political and that public debate is fostered around it. Qualifying this necessitates that the public develops a critical understanding of what constitutes an AI system, how such systems are designed, and what potential impacts they might have. The recency of the proliferation of AI means that while some suggestions for AI curricula exist, the design space for concrete learning tools and activities is yet ill-defined. Most previous work focuses on developing children’s skills and competencies with regard to AI, and little work exists that explicitly aims to support critical understanding of and attitudes toward it. Through a series of constructive design-research experiments aimed at sec- ondary school students, this dissertation explores the design space for learning tools and activities for computationally empowering ML education: ML education that engages learners in understanding ML to scaffolding critical reflection on its role in their own life, and in society around them. Based on six experimental designs and classroom interventions with these, the thesis makes three main contributions to HCI, child-computer interaction, and computing education. First, by analyzing the experiments and discussing them in relation to the literature, I present six concrete design principles for AI learning tools and activities with computational empowerment as the goal. Further, to qualify how these principles interact in concrete designs, I discuss their tensions and synergies. Second, I present the CEML framework: an approach to computationally empowering ML education based on a technological, material foundation that highlights the ethics and morality baked into technology and offers concrete ways of including this in computing education. Finally, I reframe my original research program and return to HCI to present Remarkable AI: an approach to AI systems design that focuses on fostering agency in users and empowering them with regard to its role in their lives. In addition, I argue that designers and HCI researchers should consider remarkableness as a sensitizing concept when designing AI systems. Together, these contributions are intended to support designers, researchers, and, not the least, educators in teaching and designing tools and activities that democratize AI and open it up for political discourse.",
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
                  Hej! Jeg er Magnus! Jeg er passioneret omkring design (både af
                  den digitale og fysiske slags). Derudover elsker jeg at nørde
                  med computere og IT. Jeg har fx selv skrevet min egen
                  hjemmeside helt fra bunden. Professionelt er jeg partner i
                  Creative Oak, og postdoc på Datalogisk Institut, Aarhus
                  Universitet.
                </p>
                <p class="text-lg text-gray-600 leading-relaxed">
                  Når jeg ikke koder, nyder jeg at skrive om teknologi og mine
                  eventyr ud i softwareudvikling på min blog. Derudover elsker
                  jeg at hacke ting, den nyeste færdighed jeg har tilføjet til
                  dét repetoir er syning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section class="py-12">
          <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto">
              {/* Erfaring */}
              <div class="mb-12">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Erfaring</h2>
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

              {/* Uddannelse */}
              <div class="mb-12">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">
                  Uddannelse
                </h2>
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

              {/* Færdigheder */}
              <div class="mb-12">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">
                  Færdigheder
                </h2>
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
                      Publikationer
                    </h2>

                    {/* Filter and display by type */}
                    {(
                      [
                        "konference",
                        "tidsskrift",
                        "afhandling",
                        "other",
                      ] as const
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
                              : `${type}`}
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
