
import React from 'react';
import { Service, CaseStudy, Testimonial } from './types.ts';

export const SERVICES: Service[] = [
  {
    id: 'business-dev',
    title: 'Business Development & Management',
    description: 'Transforming organizational potential into market performance through tailored management frameworks and growth strategies.',
    icon: 'briefcase',
    details: ['Operational Management', 'Growth Strategy', 'Organizational Restructuring', 'Leadership Alignment']
  },
  {
    id: 'tax-legal',
    title: 'Tax & Legal Consultancy',
    description: 'Expert guidance navigating complex fiscal landscapes and legal frameworks to ensure total compliance and efficiency.',
    icon: 'shield',
    details: ['International Taxation', 'Corporate Law', 'Compliance Audits', 'Asset Protection']
  },
  {
    id: 'market-research',
    title: 'Research & Market Analysis',
    description: 'Data-driven insights that uncover hidden opportunities and provide a competitive edge in volatile global markets.',
    icon: 'target',
    details: ['Competitor Mapping', 'Trend Forecasting', 'Consumer Behavior', 'Feasibility Studies']
  },
  {
    id: 'coaching-intl',
    title: 'Business Internationalization & Outsourcing',
    description: 'Comprehensive advisory for expanding operations across borders and optimizing resources through strategic outsourcing.',
    icon: 'activity',
    details: ['Global Market Entry', 'Supply Chain Outsourcing', 'Cross-Border Operations', 'Intercultural Advisory']
  },
  {
    id: 'registration',
    title: 'Company Registration & Document Management',
    description: 'Streamlined administrative support to get your business started, from legal registration to robust document control.',
    icon: 'users',
    details: ['Entity Incorporation', 'Governance Documentation', 'Bureaucracy Navigation', 'Digital Archiving']
  },
  {
    id: 'risk-mapping',
    title: 'Risk Analysis & Mapping',
    description: 'Identifying and mitigating structural, financial, and political risks before they impact your bottom line.',
    icon: 'shield',
    details: ['Political Risk Assessment', 'Threat Mapping', 'Continuity Planning', 'Security Audits']
  },
  {
    id: 'logistics',
    title: 'Logistics & Business Set-ups',
    description: 'Physical and operational infrastructure deployment, ensuring your business has the foundation to scale from day one.',
    icon: 'cpu',
    details: ['Supply Chain Design', 'Facility Selection', 'Vendor Integration', 'Workflow Setup']
  },
  {
    id: 'ethical-lobbying',
    title: 'Ethical Lobbying',
    description: 'Building transparent and influential bridges between private interest and public policy with integrity.',
    icon: 'target',
    details: ['Policy Advocacy', 'Stakeholder Engagement', 'Regulatory Influence', 'Ethical Standards']
  }
];

export const TEAM = [
  { 
    name: 'Mr. Ayoola Lawal', 
    role: 'Managing Partner', 
    bio: 'Guiding organizations through market research, mapping, and development with data analytics and creative thinking.',
    img: 'data:image/jpeg;base64,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' 
  },
  { 
    name: 'Dr. Sarah Chen', 
    role: 'Director of Economics', 
    bio: 'Specializing in market mapping and international tax frameworks.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    name: 'Marcus Thorne', 
    role: 'Chief of Strategy', 
    bio: 'Expert in complex market entry and resource management across global hubs.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    name: 'Sofia Al-Farsi', 
    role: 'Global Compliance Head', 
    bio: 'Leading our ethical lobbying and cross-border document management divisions.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' 
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Structural Integrity: The Foundation of Scale",
    summary: "How modern enterprises are redefining their core foundations to support rapid international expansion.",
    category: "Strategy",
    date: "May 12, 2025",
    author: "Ayoola Lawal",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
    featured: true,
    content: `
      <p>The contemporary business landscape is no longer defined by incremental growth but by the ability to pivot and scale at unprecedented velocities. However, velocity without structural integrity is a recipe for collapse. At LRA, we have observed a recurring theme among failed international expansions: a fundamental neglect of the organizational "skeleton."</p>
      
      <h2>The Anatomy of Structural Integrity</h2>
      <p>Structural integrity in a corporate context refers to the alignment of your legal framework, fiscal policy, and operational management. When a firm moves from a domestic market—for instance, Sweden—into a complex regulatory environment like the United States or the APAC region, the friction points are rarely product-related. They are systemic.</p>
      
      <ul>
        <li><strong>Regulatory Alignment:</strong> Ensuring that your corporate governance matches the local requirements of your target market.</li>
        <li><strong>Operational Mapping:</strong> Documenting and optimizing workflows to eliminate dependencies on specific individuals.</li>
        <li><strong>Fiscal Robustness:</strong> Building tax-efficient structures that are audit-proof across multiple jurisdictions.</li>
      </ul>

      <h2>Scaling the Foundation</h2>
      <p>True scale is achieved when the foundation is built to support 10x the current load. This requires a shift from reactive management to proactive structural design. Our multidisciplinary approach ensures that when you choose to scale, your foundation doesn't just hold—it propels you forward.</p>
    `
  },
  {
    id: 2,
    title: "Navigating Global Tax Landscapes in 2025",
    summary: "Expert insights into emerging fiscal frameworks and compliance strategies for cross-border operations.",
    category: "Finance",
    date: "May 10, 2025",
    author: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    featured: true,
    content: `
      <p>Fiscal transparency has moved from an idealistic goal to a global regulatory standard. As we move through 2025, the OECD's Pillar Two and other international tax reforms are reshaping how multinational corporations manage their global footprints.</p>
      
      <h2>The Shift Toward Centralized Compliance</h2>
      <p>Historically, firms managed tax compliance on a country-by-country basis. This siloed approach is increasingly dangerous in an era of real-time data sharing between tax authorities. At LRA, we advocate for a centralized "Global Tax Shield"—a framework that provides visibility across all jurisdictions while optimizing for local incentives.</p>

      <h2>Key Considerations for the Coming Year</h2>
      <ol>
        <li><strong>Minimum Global Tax Rates:</strong> Understanding the impact of the 15% global minimum tax on your operational hubs.</li>
        <li><strong>Digital Services Taxes:</strong> Navigating the fragmented landscape of DSTs in the European Union.</li>
        <li><strong>Transfer Pricing:</strong> Ensuring that inter-company transactions are documented with surgical precision to avoid double taxation.</li>
      </ol>

      <p>The goal of modern tax consultancy is not merely to save money, but to eliminate risk. A single compliance failure in a major market can negate years of strategic growth.</p>
    `
  },
  {
    id: 3,
    title: "The Ethics of Influence in Modern Policy",
    summary: "Exploring the critical role of transparency and integrity in strategic lobbying and public affairs.",
    category: "Leadership",
    date: "May 08, 2025",
    author: "Marcus Thorne",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    featured: true,
    content: `
      <p>Lobbying is often viewed through a lens of skepticism, yet it remains an essential component of the democratic and economic process. At LRA, we believe in "Ethical Lobbying"—the practice of building transparent bridges between private innovation and public policy.</p>

      <h2>The Principle of Mutual Benefit</h2>
      <p>Effective policy engagement is not about asking for favors; it is about demonstrating value. When a technology firm enters a new market, its presence can drive employment, tax revenue, and technological advancement. Ethical lobbying ensures that policymakers understand these benefits, while the firm understands its social responsibilities.</p>

      <blockquote>"Influence without integrity is temporary; influence with ethics is a strategic asset."</blockquote>

      <h2>Building Long-Term Stakeholder Trust</h2>
      <p>Our approach to public affairs is rooted in the "No Surprises" rule. We ensure that our clients are transparent about their objectives, allowing for constructive dialogue with regulatory bodies. This builds a reservoir of trust that is invaluable when complex legislative changes occur.</p>
    `
  },
  {
    id: 4,
    title: "Supply Chain Resilience in Volatile Markets",
    summary: "Clinical analysis of logistics optimization and vendor integration for sustainable market dominance.",
    category: "Operations",
    date: "May 05, 2025",
    author: "Sofia Al-Farsi",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    featured: false,
    content: `
      <p>The "just-in-time" supply chain model was designed for a stable world. In the volatile environment of the 2020s, resilience has replaced efficiency as the primary operational KPI. Sofia Al-Farsi explores how LRA helps firms map their logistical vulnerabilities.</p>
      
      <h2>Diversification Beyond Borderlines</h2>
      <p>Concentrating production or supply in a single region is no longer a viable strategy. We help our clients achieve "Multi-Hub Redundancy," ensuring that operational flow can continue even if a major trade route or region is disrupted.</p>
    `
  },
  {
    id: 5,
    title: "Data-Driven Market Entry: A Nordic Perspective",
    summary: "How LRA's Gothenburg hub serves as a strategic launchpad for global tech internationalization.",
    category: "Strategy",
    date: "May 01, 2025",
    author: "Ayoola Lawal",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
    featured: false,
    content: `
      <p>Gothenburg is more than just Sweden's industrial heart; it is a laboratory for global trade. Ayoola Lawal discusses how LRA uses data analytics to predict the success of Nordic tech firms in international markets.</p>
      
      <h2>The Gothenburg Advantage</h2>
      <p>Access to major ports and a high density of innovation hubs makes this city the ideal base for testing internationalization strategies before full-scale global deployment.</p>
    `
  },
  {
    id: 6,
    title: "The Future of Organizational Architecture",
    summary: "Redefining management frameworks to eliminate operational friction and align stakeholders.",
    category: "Leadership",
    date: "April 28, 2025",
    author: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    featured: false,
    content: `
      <p>Organizations are not static entities; they are living systems. Dr. Sarah Chen examines how modern management frameworks must evolve to support the hybrid, global workforce of tomorrow.</p>
      
      <h2>Abolishing the Hierarchy</h2>
      <p>Friction often lives in the layers of management. We help firms move toward "Dynamic Alignment"—a structure where small, principal-led teams have the autonomy to make decisions while remaining tethered to the core organizational mission.</p>
    `
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'intl-expansion',
    title: 'European Market Entry Strategy',
    client: 'Nordic Tech Holdings',
    category: 'Internationalization',
    result: 'Successfully established regional headquarters in 3 countries within 12 months.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: 'Market Reach', value: '3 Countries' },
      { label: 'Time to Market', value: '-4 Months' }
    ]
  },
  {
    id: 'tax-optimization',
    title: 'Global Tax Restructuring',
    client: 'Aether Logistics',
    category: 'Tax & Legal',
    result: 'Reduced effective global tax rate by 12% through ethical jurisdictional optimization.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: 'Savings', value: '$4.2M' },
      { label: 'Risk Rating', value: 'Low' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CEO',
    company: 'Vanguard Systems',
    quote: 'LRA Consulting didn’t just give us a report; they stayed until the results were visible in our bottom line.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  }
];

export const ICONS = {
  target: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  activity: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  users: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  cpu: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  briefcase: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  chevronRight: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  ),
  mail: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  phone: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  ),
  mapPin: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
};
