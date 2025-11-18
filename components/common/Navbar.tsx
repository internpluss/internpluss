'use client';

import Link from 'next/link';
import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { HamburgerMenuIcon, Cross2Icon, GlobeIcon, MagnifyingGlassIcon, Cross1Icon } from '@radix-ui/react-icons';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
  activeSection?: string;
}

interface SearchableItem {
  id: number;
  title: string;
  category: string;
  url: string;
  description?: string;
}

const defaultSearchableItems: SearchableItem[] = [
  { id: 1, title: 'Getting Started', category: 'Guide', url: '#getting-started', description: 'Welcome to Internpluss' },
  { id: 2, title: 'Internships', category: 'Services', url: '#internships', description: 'Find your dream internship' },
  { id: 3, title: 'Featured Internships', category: 'Services', url: '#featured-internships', description: 'Top recommended opportunities' },
  { id: 4, title: 'College Search', category: 'Services', url: '#college-search', description: 'Explore top colleges' },
  { id: 5, title: 'Top Categories', category: 'Services', url: '#top-categories', description: 'Popular internship categories' },
  { id: 6, title: 'Careers Page', category: 'Services', url: '#careers-page', description: 'Build your company careers page' },
  { id: 7, title: 'Careers Features', category: 'Services', url: '#careers-features', description: 'Powerful recruitment tools' },
  { id: 8, title: 'Domain Integration', category: 'Services', url: '#careers-integration', description: 'Host on your own domain' },
  { id: 9, title: 'Get Started with Careers', category: 'Services', url: '#careers-join', description: 'Launch your careers page' },
  { id: 10, title: 'TnP Portal', category: 'Services', url: '#tnp-about', description: 'Training & Placement Portal' },
  { id: 11, title: 'TnP Features', category: 'Services', url: '#tnp-features', description: 'Comprehensive placement tools' },
  { id: 12, title: 'TnP Integration', category: 'Services', url: '#tnp-integration', description: 'Integrate with your college' },
  { id: 13, title: 'Join TnP Platform', category: 'Services', url: '#tnp-signup', description: 'Transform your placement cell' },
  { id: 14, title: 'About Us', category: 'Company', url: '#about-us', description: 'Our mission and vision' },
  { id: 15, title: 'Careers at Internpluss', category: 'Company', url: '#careers', description: 'Join our team' },
  { id: 16, title: 'Open Positions', category: 'Company', url: '#open-positions', description: 'We\'re hiring!' },
  { id: 17, title: 'Our Programs', category: 'Resources', url: '#programs', description: 'Special programs & initiatives' },
  { id: 18, title: 'Contact Us', category: 'Resources', url: '#contact', description: 'Get in touch' },
  { id: 19, title: 'FAQs', category: 'Resources', url: '#faqs', description: 'Frequently asked questions' },
];

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredResults, setFilteredResults] = useState<SearchableItem[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredResults([]);
      return;
    }

    const filtered: SearchableItem[] = defaultSearchableItems.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredResults(filtered);
  }, [searchQuery]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(sectionId);
    }
    setIsActive(false);
    setOpenDropdown(null);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredResults.length > 0) {
      const item = filteredResults[0];
      const sectionId = item.url.replace('#', '');
      if (onNavigate) {
        onNavigate(sectionId);
      }
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  const handleItemClick = (item: SearchableItem) => {
    const sectionId = item.url.replace('#', '');
    if (onNavigate) {
      onNavigate(sectionId);
    }
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredResults([]);
  };

  const groupedResults: Record<string, SearchableItem[]> = filteredResults.reduce((acc: Record<string, SearchableItem[]>, item: SearchableItem) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className={`fixed top-0 z-50 w-full h-auto bg-white flex items-center justify-center border-b border-border`}>

      <div className='w-full h-full flex flex-col items-center justify-center relative'>
        <div className={`w-11/12 h-full flex items-center justify-center text-left transition-all`}>

          <div className='md:w-full w-11/12 h-16 flex flex-row md:justify-start justify-between items-center z-[100] bg-white gap-4'>

            <Link href="/" className='text-2xl font-bold text-black flex items-center justify-center'>
              <Image src="/logos/main.svg" alt="logo" width={130} height={70} className=' w-32 h-auto' priority={true} />
            </Link>

            <div className='md:flex hidden flex-row w-full h-full items-center justify-between gap-4'>
              <form onSubmit={handleSearchSubmit} className='w-full max-w-[600px] relative'>
                <div className='relative w-full'>
                  <Input
                    placeholder='Search documentation...'
                    className='w-full rounded-md shadow-none pl-9 pr-8'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => setIsSearchOpen(true)}
                  />
                  <MagnifyingGlassIcon className='absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#5f5f5f] pointer-events-none' />
                  {searchQuery && (
                    <Cross1Icon
                      className='absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#5f5f5f] cursor-pointer hover:text-black'
                      onClick={clearSearch}
                    />
                  )}
                </div>

                {isSearchOpen && (
                  <div className='absolute top-full left-0 right-0 bg-white border border-[#dddedd] rounded-md shadow-lg z-50 mt-2 max-h-96 flex flex-col'>
                    <div className='px-3 py-2 border-b border-b-[#dddedd] text-sm font-medium text-gray-600'>
                      Search Documentation
                    </div>
                    {searchQuery && filteredResults.length > 0 ? (
                      <div className='p-2 overflow-y-auto flex-1'>
                        {Object.entries(groupedResults).map(([category, categoryItems]) => (
                          <div key={category} className='mb-4 last:mb-0'>
                            <div className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2'>
                              {category}
                            </div>
                            {categoryItems.map((item) => (
                              <div
                                key={item.id}
                                className='flex items-center p-2 hover:bg-gray-50 cursor-pointer rounded transition-colors duration-150'
                                onClick={() => handleItemClick(item)}
                              >
                                <div className='flex-1'>
                                  <div className='text-sm font-medium text-gray-900'>
                                    {item.title}
                                  </div>
                                  {item.description && (
                                    <div className='text-xs text-gray-500'>
                                      {item.description}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    ) : searchQuery && filteredResults.length === 0 ? (
                      <div className='p-4 text-center text-gray-500 flex-1 flex flex-col justify-center items-center'>
                        <MagnifyingGlassIcon className='w-8 h-8 mx-auto mb-2 text-gray-300' />
                        <div className='text-sm'>No results found for "{searchQuery}"</div>
                      </div>
                    ) : (
                      <div className='p-4 text-center text-gray-500 flex-1 flex flex-col justify-center items-center'>
                        <MagnifyingGlassIcon className='w-8 h-8 mx-auto mb-2 text-gray-300' />
                        <div className='text-sm'>Start typing to search...</div>
                        <div className='text-xs text-gray-400 mt-2'>Try searching for features, guides, or sections</div>
                      </div>
                    )}
                    <div className='w-full h-auto flex items-center justify-start gap-2 px-3 py-2 border-t border-t-[#dddedd]'>
                      <div className='text-xs text-gray-600'>Quick links: </div>
                      <a href='#internships' onClick={(e) => handleNavClick(e, 'internships')}>
                        <Badge variant={'secondary'} className='cursor-pointer'>Internships</Badge>
                      </a>
                      <a href='#careers-page' onClick={(e) => handleNavClick(e, 'careers-page')}>
                        <Badge variant={'secondary'} className='cursor-pointer'>Careers Page</Badge>
                      </a>
                      <a href='#tnp-about' onClick={(e) => handleNavClick(e, 'tnp-about')}>
                        <Badge variant={'secondary'} className='cursor-pointer'>TnP Portal</Badge>
                      </a>
                    </div>
                  </div>
                )}
              </form>
              <div className='min-w-8 w-8 h-8 border border-border md:hidden flex items-center justify-center rounded cursor-pointer text-gray-600 hover:bg-gray-50 transition-colors'>
                <MagnifyingGlassIcon className='w-5 h-5' />
              </div>
            </div>

            <div className='min-w-8 w-8 h-8 border border-border flex items-center justify-center rounded cursor-pointer text-gray-600 hover:bg-gray-50 transition-colors'>
              <GlobeIcon className='w-5 h-5' />
            </div>

            {isActive ? (
              <div onClick={toggleNavbar} className={`md:hidden flex text-2xl cursor-pointer text-white z-[100] ${isActive ? 'block' : ''}`}>
                <Cross2Icon className='w-6 h-6 text-[#0e0e0e] z-[100]' />
              </div>
            ) : (
              <div onClick={toggleNavbar} className="text-2xl cursor-pointer text-white z-[100] md:hidden block">
                <HamburgerMenuIcon className='w-6 h-6 text-[#0e0e0e] z-[100]' />
              </div>
            )}
          </div>

        </div>

        <div className={`fixed w-full min-h-screen bg-white text-black transition-all md:hidden flex flex-col items-center gap-4 z-30 ${isActive ? 'top-16' : '-top-full'}`}>
          <div className='w-full h-auto flex flex-col items-center justify-center p-4'>
            <div className='w-full flex flex-col gap-2'>
              <h3 className='font-semibold text-lg mb-2'>Services</h3>
              <a href="#internships" onClick={(e) => handleNavClick(e, 'internships')} className='px-4 py-2 hover:bg-gray-100 rounded'>Internships</a>
              <a href="#careers-page" onClick={(e) => handleNavClick(e, 'careers-page')} className='px-4 py-2 hover:bg-gray-100 rounded'>Careers Page</a>
              <a href="#tnp-about" onClick={(e) => handleNavClick(e, 'tnp-about')} className='px-4 py-2 hover:bg-gray-100 rounded'>TnP Portal</a>

              <h3 className='font-semibold text-lg mt-4 mb-2'>Company</h3>
              <a href="#about-us" onClick={(e) => handleNavClick(e, 'about-us')} className='px-4 py-2 hover:bg-gray-100 rounded'>About Us</a>
              <a href="#careers" onClick={(e) => handleNavClick(e, 'careers')} className='px-4 py-2 hover:bg-gray-100 rounded'>Careers</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className='px-4 py-2 hover:bg-gray-100 rounded'>Contact</a>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div
            className='fixed inset-0 z-40'
            onClick={() => setIsSearchOpen(false)}
          />
        )}

      </div >
    </div >
  )
}

export default Navbar;