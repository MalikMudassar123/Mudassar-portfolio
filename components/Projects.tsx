'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'My Doctor Shop – Healthcare E-commerce',
    description: 'A healthcare-focused ecommerce website enabling users to browse and purchase medical products through a simple user-friendly interface. Built with Next.js, React.js, and Tailwind CSS.',
    tags: ['Next.js', 'React.js', 'E-commerce', 'WooCommerce'],
    image: '/projects/mydoctorshop-1.webp',
    liveUrl: 'http://mydoctorshop.com/',
    location: 'Pakistan',
  },
  {
    title: 'Inventory Management Web Application',
    description: 'A web-based inventory management system with barcode scanning to improve stock visibility, speed, and operational accuracy. Built with React.js and modern web technologies.',
    tags: ['React.js', 'Barcode Scanning', 'Web App', 'Inventory'],
    image: '/projects/inventory-1.webp',
    liveUrl: 'https://inventory-demo-test.netlify.app/scan',
    location: 'Global',
  },
  {
    title: 'Benders Agency – Corporate Website',
    description: 'A modern and responsive agency website focused on clean design, fast load times, and strong brand presentation. Built with Next.js for optimal performance.',
    tags: ['Next.js', 'Corporate', 'UI/UX', 'Marketing'],
    image: '/projects/bendersagency-1.webp',
    liveUrl: 'https://www.bendersagency.com/',
    location: 'USA',
  },
  {
    title: 'Valorant Agent Hub – Interactive Platform',
    description: 'An interactive frontend platform delivering structured agent data with a smooth and responsive user experience. Features API integration and gaming-focused design.',
    tags: ['React.js', 'API Integration', 'Gaming', 'Interactive'],
    image: '/projects/valorantagenthub-1.webp',
    liveUrl: 'https://valorantagenthub.vercel.app/',
    location: 'Global',
  },
  {
    title: 'MyGovTools – Utility Platform',
    description: 'A public-facing tools platform with emphasis on usability, accessibility, and clear information architecture. Built for government services with React.js.',
    tags: ['React.js', 'Accessibility', 'Public Sector', 'Tools'],
    image: '/projects/mygovtools-1.webp',
    liveUrl: 'https://www.mygovtools.org/',
    location: 'USA',
  },
  {
    title: 'ERP System (Multi-Site Inventory & POS)',
    description: 'Developed modules like POS, inventory, and user management using React.js and Node.js. Integrated dynamic APIs and ensured real-time data sync across multiple branches.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Real-time'],
    image: null,
    liveUrl: null,
    location: null,
  },
  {
    title: 'Resource Planner Tool',
    description: 'Developed a resource planning tool used for managing human and project resources. Built drag-and-drop functionality to assign resources across multiple projects.',
    tags: ['React.js', 'Context API', 'Nest.js', 'Drag & Drop'],
    image: null,
    liveUrl: null,
    location: null,
  },
  {
    title: 'HRMS – Human Resource Management System',
    description: 'Built full-stack employee management system using React.js and Node.js with JWT auth. Created dashboards, CRUD features, and role-based access control.',
    tags: ['React.js', 'Node.js', 'JWT', 'MongoDB'],
    image: null,
    liveUrl: null,
    location: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#10101a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
            A showcase of my recent work and contributions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#13131f] rounded-xl overflow-hidden border border-purple-600/20 hover:border-purple-600/40 transition-all group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-purple-400/20 overflow-hidden">
                  {project.image ? (
                    <>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#13131f] to-transparent opacity-40"></div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-20">💻</div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#13131f] to-transparent opacity-60"></div>
                    </>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm transition-colors"
                    >
                      <span>View Live Site</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
