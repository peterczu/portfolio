
"use client";

const projects = [
  {
    title: "ClearFast AI",
    type: "Featured SaaS Product",
    description:
      "A production SaaS platform for Nigerian clearing agents. Users upload shipment documents, AI extracts key information, and agents track shipment progress from one dashboard.",
    stack: ["Next.js", "FastAPI", "OpenAI", "Supabase", "AWS", "ECS Fargate"],
    featured: true,
  },
  {
    title: "Kifapassi",
    type: "Production Application",
    description:
      "A production AWS application with containerized deployment, CI/CD, infrastructure as code, centralized logging, secrets management and tested deployment rollback.",
    stack: ["AWS", "Terraform", "ECS", "Fargate", "GitHub Actions", "CloudWatch"],
    featured: false,
  },
  {
    title: "AWS Infrastructure Lab",
    type: "Cloud Infrastructure",
    description:
      "Hands-on AWS infrastructure built with Terraform, covering VPC networking, subnets, security groups, EC2, application load balancing and reusable infrastructure modules.",
    stack: ["AWS", "Terraform", "VPC", "IAM", "EC2", "ALB"],
    featured: false,
  },
];

const skills = [
  {
    category: "Cloud",
    items: ["AWS", "VPC", "IAM", "EC2", "ECS", "Fargate", "ALB", "CloudWatch"],
  },
  {
    category: "DevOps",
    items: ["Terraform", "Docker", "GitHub Actions", "CI/CD", "OIDC", "Linux"],
  },
  {
    category: "Development",
    items: ["Python", "FastAPI", "Next.js", "TypeScript", "REST APIs"],
  },
  {
    category: "Platforms",
    items: ["Supabase", "OpenAI", "PostgreSQL", "Kubernetes"],
  },
];

const clearfastHighlights = [
  "AI-powered document extraction",
  "Next.js frontend",
  "FastAPI backend",
  "Supabase data and storage",
  "Containerized deployment",
  "AWS ECS Fargate",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="text-lg font-bold tracking-tight">
          Peter Madueke
        </a>

        <div className="hidden gap-8 text-sm text-slate-300 sm:flex">
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-28 pt-20 sm:pt-32">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Cloud & DevOps Engineer
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            I build cloud systems
            <span className="block text-slate-400">
              and ship real applications.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            I design and deploy cloud infrastructure, containerized
            applications and CI/CD pipelines using AWS, Terraform, Docker and
            modern development tools.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-lg bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-slate-500"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
          <div>
            <p className="text-3xl font-bold">AWS</p>
            <p className="mt-2 text-sm text-slate-400">
              Cloud infrastructure & production deployments
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold">IaC</p>
            <p className="mt-2 text-sm text-slate-400">
              Infrastructure managed with Terraform
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold">CI/CD</p>
            <p className="mt-2 text-sm text-slate-400">
              Automated application delivery
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Featured Project
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            ClearFast AI
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            A real SaaS product built to solve a real operational problem for
            clearing agents.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-700 bg-slate-900">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Production SaaS
                </span>

                <span className="text-xs text-slate-500">
                  Featured Project -  www.clearfastai.com
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-bold sm:text-4xl">
                Shipment paperwork,
                <span className="block text-slate-400">
                  organized with AI.
                </span>
              </h3>

              <p className="mt-6 leading-8 text-slate-400">
                ClearFast AI helps Nigerian clearing agents organize shipment
                documents and monitor clearance progress. A Bill of Lading can
                be uploaded, processed by AI and turned into structured
                information that the user can review and manage.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {clearfastHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-800 bg-slate-950/60 p-8 sm:p-12 lg:border-l lg:border-t-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Engineering Focus
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="font-semibold">Application architecture</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Next.js frontend connected to a FastAPI backend and
                    Supabase services.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">AI integration</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    OpenAI is used to process uploaded shipment documents and
                    extract useful information.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Cloud deployment</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Containerized workloads deployed to AWS ECS Fargate with
                    automated delivery.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Production mindset</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    The project covers application development, infrastructure,
                    deployment and operational concerns.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {projects[0].stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-slate-800 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            More Work
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {projects.slice(1).map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 transition hover:border-slate-700"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {project.type}
                </span>

                <h3 className="mt-5 text-2xl font-bold">{project.title}</h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-slate-800 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-y border-slate-800 bg-slate-900/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Technical Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Tools I use to build and ship
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-slate-800 bg-slate-950/50 p-7"
              >
                <h3 className="text-lg font-semibold">{group.category}</h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-slate-700 px-3 py-2 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              About Me
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              From infrastructure to production.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-400">
              My focus is cloud engineering, DevOps and building reliable
              applications. I enjoy taking a project from infrastructure
              design through development, containerization, CI/CD and
              deployment.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              I learn by building practical systems rather than studying
              technologies in isolation. My projects have given me hands-on
              experience with cloud networking, infrastructure as code,
              containers, security, observability and application delivery.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              I am continuing to deepen my cloud engineering skills while
              building production-minded projects that demonstrate how the
              different pieces of modern cloud systems work together.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Certifications & Learning
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-7">
              <p className="text-lg font-semibold">
                AWS Cloud Engineering
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Hands-on learning across AWS infrastructure, networking,
                compute, security, containers and deployment.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-7">
              <p className="text-lg font-semibold">Infrastructure as Code</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Practical Terraform experience building and managing reusable
                AWS infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-slate-800">
  <div className="mx-auto max-w-6xl px-6 py-24">
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 sm:p-12">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
        Contact
      </p>

      <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
        Let's build something useful.
      </h2>

      <p className="mt-5 max-w-xl leading-7 text-slate-400">
        I'm open to cloud engineering, DevOps, and technical
        opportunities where I can build, learn, and contribute.
      </p>

      {/* Action Buttons & Social Links Container */}
      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
        {/* Primary Action Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:ipeterdevops@gmail.com"
            className="rounded-lg bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Email Me
          </a>

          <a
            href="#projects"
            className="rounded-lg border border-slate-700 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-slate-500"
          >
            View Projects
          </a>
        </div>

        {/* Separator Line for Desktop Layout */}
        <div className="hidden h-6 w-[1px] bg-slate-800 sm:block" />

        {/* Social Profile Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/peterczu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/peter-madueke/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Peter Madueke.</p>
          <p>Cloud & DevOps Engineering</p>
        </div>
      </footer>
    </main>
  );
}

