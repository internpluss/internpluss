'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import ProductGuide from '@/components/ProductGuide/ProductGuide';

interface Section {
    id: string;
    title: string;
    heading: string;
    description: string;
    content: string;
    category: 'getting-started' | 'internships' | 'careers-page' | 'tnp-portal' | 'company' | 'resources';
}

const sections: Section[] = [
    // Getting Started
    {
        id: 'getting-started',
        title: 'Getting Started',
        heading: 'Welcome to Internpluss',
        description: 'Everything you need to know',
        content: 'Internpluss is your all-in-one platform connecting students, colleges, and companies. Whether you\'re a fresher looking for internships, a college managing placements, or a company building your careers page, we provide the perfect ecosystem for growth and opportunity. Let\'s get started on your journey!',
        category: 'getting-started'
    },

    // Internships Section
    {
        id: 'internships',
        title: 'Internships',
        heading: 'Find Your Dream Internship',
        description: 'Opportunities for freshers and students',
        content: 'Browse thousands of internship opportunities from top companies across India. Our platform connects freshers and students with real-world work experience that launches careers. Filter by location, domain, duration, and stipend to find the perfect match for your skills and interests.',
        category: 'internships'
    },
    {
        id: 'featured-internships',
        title: 'Featured Internships',
        heading: 'Top Recommended Internships',
        description: 'Hand-picked opportunities for you',
        content: 'Discover our curated selection of premium internships from leading organizations. These featured positions offer exceptional learning experiences, competitive stipends, and potential for pre-placement offers. Updated weekly with the best opportunities across various domains including tech, marketing, finance, and design.',
        category: 'internships'
    },
    {
        id: 'college-search',
        title: 'College Search',
        heading: 'Explore Top Colleges',
        description: 'Detailed insights about colleges',
        content: 'Get comprehensive information about colleges across India. Explore rankings, placement statistics, campus facilities, faculty details, and student reviews. Make informed decisions about your education with our detailed college profiles, admission criteria, and fee structures.',
        category: 'internships'
    },
    {
        id: 'top-categories',
        title: 'Top Categories',
        heading: 'Popular Internship Categories',
        description: 'Explore by domain',
        content: 'Find internships in trending categories including Software Development, Data Science, Digital Marketing, Graphic Design, Content Writing, Business Development, Finance, HR, and more. Each category features curated opportunities from startups to Fortune 500 companies.',
        category: 'internships'
    },

    // Careers Page Section
    {
        id: 'careers-page',
        title: 'Careers Page',
        heading: 'Build Your Company Careers Page',
        description: 'Professional recruitment portal for companies',
        content: 'Create a stunning, fully-customized careers page for your company without any coding. Showcase your company culture, list job openings, accept applications, and manage the entire recruitment process from one centralized dashboard. Perfect for startups and enterprises alike.',
        category: 'careers-page'
    },
    {
        id: 'careers-features',
        title: 'Careers Page Features',
        heading: 'Powerful Recruitment Tools',
        description: 'Everything you need to hire top talent',
        content: 'No-code career page builder with custom branding, applicant tracking system (ATS), resume parsing, candidate filtering, interview scheduling, email automation, analytics dashboard, mobile-responsive design, SEO optimization, and social media integration. Streamline your entire hiring workflow.',
        category: 'careers-page'
    },
    {
        id: 'careers-integration',
        title: 'Domain Integration',
        heading: 'Host on Your Own Domain',
        description: 'Seamless white-label solution',
        content: 'Deploy your careers page on your company\'s domain (careers.yourcompany.com) for a professional, branded experience. Simple DNS setup with full SSL security, custom email integration, and complete control over your recruitment portal. Maintain brand consistency across all touchpoints.',
        category: 'careers-page'
    },
    {
        id: 'careers-join',
        title: 'Get Started with Careers Page',
        heading: 'Launch Your Careers Page Today',
        description: 'Join hundreds of companies hiring on Internpluss',
        content: 'Start attracting top talent in minutes. Choose from our flexible pricing plans, set up your branded careers page, post unlimited job listings, and access our talent pool of thousands of verified candidates. Free trial available with no credit card required.',
        category: 'careers-page'
    },

    // TnP Portal Section
    {
        id: 'tnp-about',
        title: 'TnP Portal',
        heading: 'Training & Placement Portal',
        description: 'Complete placement management for colleges',
        content: 'Revolutionary placement management system designed for educational institutions. Manage student profiles, coordinate with companies, schedule campus drives, track placement statistics, generate NAAC reports, and streamline the entire placement process. Trusted by 100+ colleges across India.',
        category: 'tnp-portal'
    },
    {
        id: 'tnp-features',
        title: 'TnP Features',
        heading: 'Comprehensive Placement Tools',
        description: 'End-to-end placement management',
        content: 'Student database management, company outreach portal, drive scheduling, eligibility criteria management, online test integration, interview coordination, offer letter tracking, placement analytics, automated notifications, bulk email campaigns, document management, and one-click NAAC report generation.',
        category: 'tnp-portal'
    },
    {
        id: 'tnp-integration',
        title: 'TnP Integration',
        heading: 'Integrate with Your College',
        description: 'Deploy on your institution\'s domain',
        content: 'Host the TnP portal on your college subdomain (placements.yourcollege.edu) with full customization. Integrate with existing student databases, sync with college ERP systems, customize workflows for your institution\'s needs, and maintain complete data privacy and security.',
        category: 'tnp-portal'
    },
    {
        id: 'tnp-signup',
        title: 'Join TnP Platform',
        heading: 'Transform Your Placement Cell',
        description: 'Start managing placements efficiently',
        content: 'Schedule a demo to see how leading colleges are modernizing their placement processes. Get personalized onboarding, training for placement coordinators, student orientation support, and ongoing technical assistance. Contact us for institutional pricing and custom requirements.',
        category: 'tnp-portal'
    },

    // Company Section
    {
        id: 'about-us',
        title: 'About Us',
        heading: 'About Internpluss',
        description: 'Our mission and vision',
        content: 'Founded in 2023, Internpluss is India\'s fastest-growing platform bridging the gap between students, colleges, and companies. We\'ve facilitated over 10,000 internships, partnered with 200+ companies, and helped 100+ colleges modernize their placement processes. Our mission is to democratize opportunities and make quality career guidance accessible to every student.',
        category: 'company'
    },
    {
        id: 'careers',
        title: 'Careers at Internpluss',
        heading: 'Join Our Team',
        description: 'Build the future of education with us',
        content: 'We\'re a fast-growing startup solving real problems in education and employment. Join a team of passionate individuals working with cutting-edge technology. We offer competitive salaries, equity options, flexible work arrangements, learning opportunities, and a chance to make real impact in millions of students\' lives.',
        category: 'company'
    },
    {
        id: 'open-positions',
        title: 'Open Positions',
        heading: 'We\'re Hiring!',
        description: 'Explore current opportunities',
        content: 'Join us in roles spanning Software Development, Product Management, Business Development, Marketing, Design, and Operations. We\'re looking for motivated individuals who are passionate about education technology. Check our open positions for full-time roles, internships, and part-time opportunities.',
        category: 'company'
    },

    // Resources Section
    {
        id: 'programs',
        title: 'Our Programs',
        heading: 'Special Programs & Initiatives',
        description: 'Beyond internships',
        content: 'Explore our mentorship programs, skill development workshops, industry webinars, career guidance sessions, resume building workshops, mock interview programs, and certification courses. We partner with industry experts to provide holistic career development support to students.',
        category: 'resources'
    },
    {
        id: 'contact',
        title: 'Contact Us',
        heading: 'Get In Touch',
        description: 'We\'re here to help',
        content: 'Have questions? Need support? Want to partner with us? Reach out to our team. For students: support@internpluss.com | For colleges: colleges@internpluss.com | For companies: partnerships@internpluss.com | Call us: +91-XXXX-XXXXXX. Office: Jalandhar, Punjab, India.',
        category: 'resources'
    },
    {
        id: 'faqs',
        title: 'FAQs',
        heading: 'Frequently Asked Questions',
        description: 'Quick answers to common questions',
        content: 'Find answers about how to apply for internships, post job listings, integrate our TnP portal, pricing plans, technical requirements, support channels, and more. Our comprehensive FAQ section covers everything from getting started to advanced features for all user types.',
        category: 'resources'
    }
];

const Index = () => {
    const [activeSection, setActiveSection] = useState<string>('getting-started');
    const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['getting-started']));

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash) {
                const section = sections.find(s => s.id === hash);
                if (section) {
                    setActiveSection(hash);
                    setExpandedCategories(prev => new Set(prev).add(section.category));
                }
            } else {
                setActiveSection('getting-started');
            }
        };

        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const currentSection = sections.find(s => s.id === activeSection) || sections[0];

    const categories = [
        { id: 'getting-started', label: 'Getting Started' },
        { id: 'internships', label: 'Internships & College' },
        { id: 'careers-page', label: 'Careers Page' },
        { id: 'tnp-portal', label: 'TnP Portal' },
        { id: 'company', label: 'Company' },
        { id: 'resources', label: 'Resources' }
    ];

    const handleSectionClick = (sectionId: string) => {
        setActiveSection(sectionId);
        window.location.hash = sectionId;
    };

    const handleCategoryClick = (categoryId: string) => {
        if (categoryId === 'all') {
            setExpandedCategories(new Set());
        } else {
            setExpandedCategories(prev => {
                const newSet = new Set(prev);
                if (newSet.has(categoryId)) {
                    newSet.delete(categoryId);
                } else {
                    newSet.add(categoryId);
                    const firstSection = sections.find(s => s.category === categoryId);
                    if (firstSection) {
                        setActiveSection(firstSection.id);
                        window.location.hash = firstSection.id;
                    }
                }
                return newSet;
            });
        }
    };

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white">
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="70x70" />
                <title>Internpluss Docs | Official Developer Documentation</title>

                <meta name="description" content="Welcome to Internpluss Docs — the official developer documentation for integrating, building, and managing with the Internpluss platform. Explore API references, guides, and resources." />
                <meta name="keywords" content="internpluss docs, internpluss api, internpluss documentation, internpluss developer, internship platform api, api reference, integration guide, developer documentation, docs.internpluss.com" />
                <meta name="author" content="Internpluss Documentation Team" />

                <meta property="og:title" content="Internpluss Docs | Build with the Internpluss API" />
                <meta property="og:description" content="Learn how to integrate and build with Internpluss using our official documentation. Access API references, examples, and setup guides." />
                <meta property="og:image" content="/og/internpluss-og.png" />
                <meta property="og:url" content="https://docs.internpluss.com/" />

                <meta name="twitter:card" content="/og/twitter-og.png" />
                <meta name="twitter:title" content="Internpluss Docs | Developer Guides & API Reference" />
                <meta name="twitter:description" content="Explore the official Internpluss documentation and learn to integrate with our API. Get started quickly with developer-friendly guides." />
                <meta name="twitter:image" content="/og/twitter-og.png" />
            </Head>

            <Navbar
                onNavigate={handleSectionClick}
                activeSection={activeSection}
            />

            <ProductGuide
                sections={sections}
                categories={categories}
                activeSection={activeSection}
                expandedCategories={expandedCategories}
                onSectionClick={handleSectionClick}
                onCategoryClick={handleCategoryClick}
            />

            <Footer />

        </div>
    )
}

export default Index