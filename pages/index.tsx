'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import ProductGuide from '@/components/ProductGuide/ProductGuide';
import { sections, categories } from '@/components/assets/sections';

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