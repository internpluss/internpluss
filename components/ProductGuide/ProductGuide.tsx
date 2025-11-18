import React, { useState, useEffect } from 'react';
import { BackpackIcon, DesktopIcon, RocketIcon } from '@radix-ui/react-icons';
import { Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Section {
    id: string;
    title: string;
    heading: string;
    description: string;
    content: string;
    category: 'getting-started' | 'internships' | 'careers-page' | 'tnp-portal' | 'company' | 'resources';
}

interface Category {
    id: string;
    label: string;
}

interface ProductGuideProps {
    sections: Section[];
    categories: Category[];
    activeSection: string;
    expandedCategories: Set<string>;
    onSectionClick: (sectionId: string) => void;
    onCategoryClick: (categoryId: string) => void;
}

const ProductGuide: React.FC<ProductGuideProps> = ({
    sections,
    categories,
    activeSection,
    expandedCategories,
    onSectionClick,
    onCategoryClick
}) => {
    const currentSection = sections.find(s => s.id === activeSection) || sections[0];

    return (
        <div className="w-full flex items-start mt-8 justify-center min-h-screen bg-white">
            <div className="w-11/12 flex flex-col lg:flex-row items-start justify-center gap-4 py-12">

                <aside className="lg:w-72 w-full">
                    <div className="sticky top-24 space-y-4">
                        <div className="bg-white rounded-xl border border-gray-200 p-4">
                            <h3 className="text-sm font-semibold text-gray-700 mb-3">Navigation</h3>
                            <div className="space-y-1">
                                {categories.map((cat) => (
                                    <div key={cat.id}>
                                        <Button
                                            onClick={() => onCategoryClick(cat.id)}
                                            variant="ghost"
                                            className="w-full justify-between text-sm hover:bg-gray-100"
                                        >
                                            <span>{cat.label}</span>
                                            <span className="text-lg font-semibold">
                                                {expandedCategories.has(cat.id) ? '−' : '+'}
                                            </span>
                                        </Button>

                                        {expandedCategories.has(cat.id) && (
                                            <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-3">
                                                {sections
                                                    .filter(s => s.category === cat.id)
                                                    .map((section) => (
                                                        <Button
                                                            key={section.id}
                                                            onClick={() => onSectionClick(section.id)}
                                                            variant={activeSection === section.id ? 'greenry' : 'ghost'}
                                                            className="w-full justify-start text-xs py-2 h-auto"
                                                        >
                                                            {section.title}
                                                        </Button>
                                                    ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                <main className="flex-1">
                    <div className="bg-white rounded-xl border border-gray-200 p-6 lg:p-8">

                        <div className='flex items-center justify-center bg-white w-full mb-6'>
                            <div className='w-full md:h-48 h-auto relative bg-[#1ab69d] flex flex-col items-start justify-between rounded-2xl overflow-hidden shadow-md'>
                                <div className='flex flex-col justify-center md:gap-2 gap-3 md:py-5 py-8 px-6'>
                                    <div className='text-white md:text-2xl text-2xl font-bold capitalize'>{currentSection.heading}</div>
                                    <div className='text-[#fff] md:text-base text-base font-normal w-10/12'>{currentSection.content}</div>
                                </div>
                                <Image src={'/header/banner.svg'} alt='internship banner' width={206} height={208} className=' absolute w-52 h-auto -bottom-8 -right-6' priority={true} />
                            </div>
                        </div>

                        <div className="space-y-6">

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