import React from 'react';
import { Link } from 'wouter';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { Button } from '@/components/common/Button';
import { ArrowRight, Box, RefreshCw, GitMerge } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Technologies() {
  const categories = [
    {
      name: "Frontend Development",
      desc: "We build responsive, accessible, and highly interactive user interfaces using modern component-based frameworks. We prioritize Core Web Vitals, server-side rendering, and state management for optimal performance.",
      techs: [
        { name: "React", icon: "react", desc: "Our primary library for building highly interactive UIs.", tag: "Core" },
        { name: "Next.js", icon: "nextdotjs", desc: "Used for server-side rendering and static site generation.", tag: "Core" },
        { name: "TypeScript", icon: "typescript", desc: "Providing static typing to prevent runtime errors.", tag: "Core" },
        { name: "Tailwind CSS", icon: "tailwindcss", desc: "Utility-first CSS for rapid and consistent styling.", tag: "Core" },
        { name: "Vue.js", icon: "vuedotjs", desc: "Progressive framework for specific client requirements.", tag: "Secondary" },
        { name: "Angular", icon: "angular", desc: "Maintained for legacy enterprise system modernizations.", tag: "Secondary" }
      ]
    },
    {
      name: "Backend Engineering",
      desc: "Our backend architectures are designed for high throughput, security, and scalability. We choose languages based on the specific computing requirements of the application.",
      techs: [
        { name: "Node.js", icon: "nodedotjs", desc: "Event-driven, non-blocking I/O for scalable APIs.", tag: "Core" },
        { name: "Python", icon: "python", desc: "Used extensively for data processing and AI backends.", tag: "Core" },
        { name: "Go", icon: "go", desc: "High-performance microservices requiring massive concurrency.", tag: "Specialized" },
        { name: "Java", icon: "openjdk", desc: "Enterprise applications relying on the Spring ecosystem.", tag: "Enterprise" },
        { name: ".NET", icon: "dotnet", desc: "C# backend environments for Microsoft-centric clients.", tag: "Enterprise" },
        { name: "FastAPI", icon: "fastapi", desc: "High-performance Python framework for ML model serving.", tag: "Specialized" }
      ]
    },
    {
      name: "Database Systems",
      desc: "Data integrity is paramount. We implement relational databases for transactional accuracy, NoSQL for flexible document storage, and distributed caches for extreme speed.",
      techs: [
        { name: "PostgreSQL", icon: "postgresql", desc: "Our default RDBMS for strict ACID compliance and JSONB support.", tag: "Core" },
        { name: "MongoDB", icon: "mongodb", desc: "Document database for rapid schema iteration.", tag: "Core" },
        { name: "Redis", icon: "redis", desc: "In-memory data store used for caching and session management.", tag: "Core" },
        { name: "MySQL", icon: "mysql", desc: "Relational database used primarily in legacy system integrations.", tag: "Secondary" },
        { name: "Supabase", icon: "supabase", desc: "Open source Firebase alternative built on Postgres.", tag: "Specialized" },
        { name: "Firebase", icon: "firebase", desc: "Real-time database used for rapid MVP and mobile development.", tag: "Specialized" }
      ]
    },
    {
      name: "Cloud Infrastructure",
      desc: "We deploy on the world's most resilient cloud providers, utilizing Infrastructure as Code (IaC) to ensure environments are perfectly reproducible and scalable.",
      techs: [
        { name: "AWS", icon: "amazonwebservices", desc: "Our primary cloud provider for complex enterprise architectures.", tag: "Core" },
        { name: "Azure", icon: "microsoftazure", desc: "Cloud infrastructure for clients deeply embedded in Microsoft tools.", tag: "Secondary" },
        { name: "GCP", icon: "googlecloud", desc: "Google Cloud Platform, favored for heavy Kubernetes/data workloads.", tag: "Secondary" },
        { name: "Vercel", icon: "vercel", desc: "Serverless edge network specifically for Next.js frontends.", tag: "Core" },
        { name: "DigitalOcean", icon: "digitalocean", desc: "Simpler cloud hosting for smaller scale applications and MVPs.", tag: "Secondary" },
        { name: "Cloudflare", icon: "cloudflare", desc: "Global CDN, edge computing, and strict web application firewall.", tag: "Core" }
      ]
    },
    {
      name: "DevOps & CI/CD",
      desc: "Automation is the key to reliable software. We build pipelines that automatically test, containerize, and deploy code multiple times a day with zero downtime.",
      techs: [
        { name: "Docker", icon: "docker", desc: "Containerization standard for absolute environment parity.", tag: "Core" },
        { name: "Kubernetes", icon: "kubernetes", desc: "Orchestration for massive-scale microservice architectures.", tag: "Enterprise" },
        { name: "GitHub Actions", icon: "githubactions", desc: "Our preferred tool for building automated CI/CD pipelines.", tag: "Core" },
        { name: "Terraform", icon: "terraform", desc: "Infrastructure as Code (IaC) for provisioning cloud resources.", tag: "Core" },
        { name: "Nginx", icon: "nginx", desc: "High-performance reverse proxy and load balancer.", tag: "Core" },
        { name: "Jenkins", icon: "jenkins", desc: "Legacy automation server used primarily in enterprise integrations.", tag: "Secondary" }
      ]
    },
    {
      name: "AI & Machine Learning",
      desc: "We integrate state-of-the-art artificial intelligence models to automate processes, generate insights, and build entirely new product categories.",
      techs: [
        { name: "TensorFlow", icon: "tensorflow", desc: "Google's open-source machine learning framework.", tag: "Core" },
        { name: "PyTorch", icon: "pytorch", desc: "Meta's ML framework, favored for complex neural networks.", tag: "Core" },
        { name: "LangChain", icon: "langchain", desc: "Framework for developing applications powered by LLMs.", tag: "Core" },
        { name: "OpenAI", icon: "openai", desc: "API integrations for state-of-the-art language models.", tag: "Core" },
        { name: "HuggingFace", icon: "huggingface", desc: "Ecosystem for open-source AI models and datasets.", tag: "Specialized" },
        { name: "scikit-learn", icon: "scikitlearn", desc: "Standard library for traditional machine learning algorithms.", tag: "Core" }
      ]
    },
    {
      name: "Mobile Development",
      desc: "We build native and cross-platform applications that deliver 60fps performance and feel right at home on iOS and Android devices.",
      techs: [
        { name: "React Native", icon: "react", desc: "Our default framework for rapid cross-platform development.", tag: "Core" },
        { name: "Flutter", icon: "flutter", desc: "Google's UI toolkit for natively compiled applications.", tag: "Core" },
        { name: "Swift", icon: "swift", desc: "Apple's native language for iOS, used for hardware-intensive apps.", tag: "Specialized" },
        { name: "Kotlin", icon: "kotlin", desc: "Native Android development for specific enterprise requirements.", tag: "Specialized" },
        { name: "Expo", icon: "expo", desc: "Framework and platform for universal React applications.", tag: "Core" }
      ]
    },
    {
      name: "Security & Authentication",
      desc: "Security is non-negotiable. We implement zero-trust architectures, modern authentication protocols, and continuous vulnerability scanning.",
      techs: [
        { name: "OAuth 2.0", icon: "oauth", desc: "Industry-standard protocol for authorization.", tag: "Core" },
        { name: "JWT", icon: "jsonwebtokens", desc: "Stateless, secure token format for API authentication.", tag: "Core" },
        { name: "Vault", icon: "vault", desc: "HashiCorp's tool for securely storing and managing secrets.", tag: "Enterprise" },
        { name: "Snyk", icon: "snyk", desc: "Automated vulnerability scanning in our CI/CD pipelines.", tag: "Core" },
        { name: "Cloudflare WAF", icon: "cloudflare", desc: "Enterprise-grade protection against DDoS and injection attacks.", tag: "Core" }
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-[#111] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80" 
            alt="Code on screen" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">Our Arsenal</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              The Technology Stack That Powers Our Work
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Intro paragraph */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-black mb-6">Pragmatic Tech Selection</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We do not chase shiny new frameworks simply because they are trending. We choose technologies based on three criteria: community maturity, long-term maintainability, and precise alignment with your business requirements. We are polyglot engineers; we use the right tool for the job.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Technology Categories */}
      <div className="bg-gray-50">
        {categories.map((cat, i) => (
          <section key={i} className={cn("py-24 md:py-32", i % 2 === 0 ? "bg-white" : "bg-gray-50")}>
            <div className="container mx-auto px-4 md:px-8">
              <ScrollReveal className="mb-16">
                <div className="w-16 h-1 bg-primary mb-6" />
                <h2 className="text-4xl md:text-5xl font-black text-black mb-6">{cat.name}</h2>
                <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">{cat.desc}</p>
              </ScrollReveal>

              <div className="grid lg:grid-cols-2 gap-x-12 gap-y-6">
                {cat.techs.map((tech, j) => (
                  <ScrollReveal key={j} delay={j * 0.05} className="flex items-start gap-6 p-6 border border-gray-200 bg-white hover:border-black transition-colors group">
                    <div className="w-16 h-16 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
                      <img 
                        src={`https://cdn.simpleicons.org/${tech.icon}`} 
                        alt={tech.name}
                        className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                      />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-black">{tech.name}</h4>
                        <span className={cn(
                          "text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider",
                          tech.tag === 'Core' ? "bg-red-100 text-primary" : "bg-gray-100 text-gray-600"
                        )}>
                          {tech.tag}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{tech.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 4. Architecture Patterns */}
      <section className="py-24 md:py-32 bg-[#111111] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Architecture Patterns</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Tools are only as good as the blueprint. We employ modern architectural paradigms to ensure systems are resilient and scalable.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Box className="w-10 h-10" />, title: "Microservices", desc: "Decoupling monolithic applications into small, independently deployable services that communicate via robust APIs. Essential for massive scaling." },
              { icon: <RefreshCw className="w-10 h-10" />, title: "Event-Driven", desc: "Utilizing Kafka or RabbitMQ to build systems that react to state changes in real-time, completely decoupling producers from consumers." },
              { icon: <GitMerge className="w-10 h-10" />, title: "Strangler Fig", desc: "Our approach to legacy modernization. We safely place an API gateway in front of old systems and replace functionality piece by piece." }
            ].map((pattern, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="bg-white/5 border border-white/10 p-10">
                <div className="text-primary mb-6">{pattern.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{pattern.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{pattern.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tech Selection Philosophy */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-4xl font-black text-black mb-8">Ready to Build?</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Whether you need to establish a modern tech stack from scratch or integrate a new application into your existing legacy environment, our architects are ready to help.
            </p>
            <Button asChild size="lg" className="bg-primary text-white hover:bg-black h-16 px-10 text-lg">
              <Link href="/contact">Schedule an Architecture Consultation</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}