import React, { useState, useEffect } from 'react';
import { BackpackIcon, DesktopIcon, GlobeIcon, Link2Icon, RocketIcon } from '@radix-ui/react-icons';
import { Building } from 'lucide-react';
import { Button } from '../ui/button';

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

const ProductGuide: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('getting-started');
    const [activeCategory, setActiveCategory] = useState<string>('all');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            console.log('Hash changed to:', hash);
            if (hash) {
                const section = sections.find(s => s.id === hash);
                console.log('Found section:', section);
                if (section) {
                    setActiveSection(hash);
                    setActiveCategory(section.category);
                }
            } else {
                setActiveSection('getting-started');
                setActiveCategory('getting-started');
            }
        };

        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const currentSection = sections.find(s => s.id === activeSection) || sections[0];

    const categories = [
        { id: 'all', label: 'All Sections' },
        { id: 'getting-started', label: 'Getting Started' },
        { id: 'internships', label: 'Internships & College' },
        { id: 'careers-page', label: 'Careers Page' },
        { id: 'tnp-portal', label: 'TnP Portal' },
        { id: 'company', label: 'Company' },
        { id: 'resources', label: 'Resources' }
    ];

    const filteredSections = activeCategory === 'all'
        ? sections
        : sections.filter(s => s.category === activeCategory);

    const handleSectionClick = (sectionId: string) => {
        setActiveSection(sectionId);
        window.location.hash = sectionId;
    };

    const handleCategoryClick = (categoryId: string) => {
        setActiveCategory(categoryId);

        if (categoryId === 'all') {
            setActiveSection(sections[0].id);
            window.location.hash = sections[0].id;
        } else {
            const firstSection = sections.find(s => s.category === categoryId);
            if (firstSection) {
                setActiveSection(firstSection.id);
                window.location.hash = firstSection.id;
            }
        }
    };

    return (
        <div className="w-full flex items-center mt-6 justify-center min-h-screen bg-white">
            <div className="w-10/12 max-w-7xl flex flex-col lg:flex-row gap-4 py-12">

                <aside className="lg:w-72 w-full">
                    <div className="sticky top-24 space-y-4">
                        <div className="bg-white rounded-xl border border-border p-4">
                            <h3 className="text-sm font-semibold text-gray-700 mb-3">Categories</h3>
                            <div className="space-y-1">
                                {categories.map((cat) => (
                                    <Button
                                        key={cat.id}
                                        onClick={() => handleCategoryClick(cat.id)}
                                        variant={activeCategory === cat.id ? 'greenry' : 'ghost'}
                                        className="w-full justify-start text-sm"
                                    >
                                        {cat.label}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border border-border p-4">
                            <h3 className="text-sm font-semibold text-gray-700 mb-3">Sections</h3>
                            <nav className="space-y-1 max-h-96 overflow-y-auto">
                                {filteredSections.map((section) => (
                                    <Button
                                        key={section.id}
                                        onClick={() => handleSectionClick(section.id)}
                                        variant={activeSection === section.id ? 'greenry' : 'ghost'}
                                        className="w-full justify-start text-sm"
                                    >
                                        {section.title}
                                    </Button>
                                ))}
                            </nav>
                        </div>
                    </div>
                </aside>

                <main className="flex-1">
                    <div className="bg-white rounded-xl border border-border p-6 lg:p-8">
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3">
                                    {currentSection.heading}
                                </h1>
                                <p className="text-lg text-gray-600 font-medium">
                                    {currentSection.description}
                                </p>
                            </div>

                            <div className="prose max-w-none">
                                <p className="text-base text-gray-700 leading-relaxed">
                                    {currentSection.content}
                                </p>
                            </div>

                            {activeSection === 'getting-started' && (
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                        What is Internpluss?
                                    </h3>
                                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                        Internpluss is India's premier platform connecting students, colleges, and companies in a thriving ecosystem. We provide three powerful solutions: internship opportunities for freshers, comprehensive TnP portals for colleges, and professional careers pages for companies.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                        <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
                                            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shadow flex-shrink-0">
                                                <BackpackIcon className='w-5 h-5 text-white' />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">For Students</h4>
                                                <p className="text-gray-600 text-sm">Find internships, get mentorship, and launch your career with top companies</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                                            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shadow flex-shrink-0">
                                                <DesktopIcon className='w-5 h-5 text-white' />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">For Colleges</h4>
                                                <p className="text-gray-600 text-sm">Modern TnP portal with automated placement management and NAAC reports</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg border border-purple-100">
                                            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center shadow flex-shrink-0">
                                                <Building className='w-5 h-5 text-white' />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">For Companies</h4>
                                                <p className="text-gray-600 text-sm">No-code careers pages with ATS and access to verified talent pool</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg border border-orange-100">
                                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center shadow flex-shrink-0">
                                                <RocketIcon className='w-5 h-5 text-white' />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">Fast Growing</h4>
                                                <p className="text-gray-600 text-sm">10,000+ internships facilitated, 200+ company partners, 100+ colleges</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )}

                            {activeSection !== 'getting-started' && (
                                <div className="mt-8 p-6 bg-[#f8f9fa] rounded-xl text-base border border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                        Ready to get started?
                                    </h4>
                                    <p className="text-gray-600 mb-4">
                                        Join thousands of students, colleges, and companies already using Internpluss.
                                    </p>
                                    <Button variant="greenry">
                                        Get Started Free
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProductGuide;