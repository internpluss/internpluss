'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { DiscordLogoIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

const Footer = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='w-full flex flex-col bg-white items-center justify-center md:pb-12 pb-0'>

            <div className="md:w-10/12 w-full flex flex-col items-center justify-center h-auto text-[#000] py-4 bg-[#f8f9fa] rounded-3xl">

                <div className='flex flex-col w-11/12 px-2 pt-4'>

                    <div className='flex flex-row flex-wrap items-start justify-between py-6 gap-4 mb-8'>

                        <div className='w-auto flex flex-col gap-3'>
                            <div className='flex flex-row items-center gap-1 text-[22px]'>
                                <Link href="/" className='text-[25px] font-bold text-black'>
                                    <Image src="/logos/main.svg" alt="logo" width={180} height={80} className=' w-44 h-auto' priority={true} />
                                </Link>
                            </div>
                            <div className='text-[#4c4c4c]'>
                                <div className='text-[18px] font-medium mb-4'>
                                    Chat with us<br />
                                    <span className='text-[#1ab69d] text-xl font-medium'>+91 94706-56588</span>
                                </div>
                                <div className='text-[14px] font-medium leading-6'>
                                    Startupmed Marketing Pvt. Ltd.<br />
                                    E-585, Jagjeet Nagar<br />
                                    Shahdara, Delhi - 110053<br />
                                    contact@internpluss.com <br />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 items-start justify-center w-auto text-[14px] text-[#4c4c4c] mt-4'>
                            <p className='mb-2 text-[#000] text-[1rem] font-semibold'>For Candidates</p>
                            <a href='/internships' className='font-medium min-w-32 h-6'>Browse Internships</a>
                            <a href='/' className='font-medium min-w-32 h-6'>Browse Category</a>
                            <a href='/internships' className='font-medium min-w-32 h-6'>Candidate Dashboard</a>
                            <a href='/internships' className='font-medium min-w-32 h-6'>Internship Alert</a>
                            <a href='/internships' className='font-medium min-w-32 h-6'>My Bookmarks</a>
                        </div>

                        <div className='flex flex-col gap-2 items-start justify-center w-auto text-[14px] text-[#4c4c4c] mt-4'>
                            <p className='mb-2 text-[#000] text-[1rem] font-semibold'>For Employers</p>
                            <a href='/internships' className='font-medium min-w-32 h-6'>Browse Companies</a>
                            <a href='/internships' className='font-medium min-w-32 h-6'>Employers Dashboard</a>
                            <a href='/internships' className='font-medium min-w-32 h-6'>Submit Internships</a>
                            <a href='/internships' className='font-medium min-w-32 h-6'>Internship Packages</a>
                            <a href='/contact' className='font-medium min-w-32 h-6'>Report Problem</a>
                        </div>

                        <div className='flex flex-col gap-2 items-start justify-center w-auto text-[14px] text-[#4c4c4c] mt-4'>
                            <p className='mb-2 text-[#000] text-[1rem] font-semibold'>Helpful Resources</p>
                            <a href='/sitemap.xml' className='font-medium min-w-32 h-6'>Site Map</a>
                            <a href='/terms' className='font-medium min-w-32 h-6'>Terms of Use</a>
                            <a href='/privacy' className='font-medium min-w-32 h-6'>Privacy Center</a>
                            <a href='/' className='font-medium min-w-32 h-6'>Security Center</a>
                            <a href='/center' className='font-medium min-w-32 h-6'>Accessibility Center</a>
                        </div>

                        <div className='flex flex-col gap-2 items-start justify-center w-auto text-[14px] text-[#4c4c4c] mt-4'>
                            <p className='mb-2 text-[#000] text-[1rem] font-semibold'>About Us</p>
                            <a href='/contact' className='font-medium min-w-32 h-6'>Contact Us</a>
                            <a href='/company' className='font-medium min-w-32 h-6'>Company</a>
                            <a href='/internpluss-campus-connect' className='font-medium min-w-32 h-6'>Our Programs</a>
                            <a href='/blogs' className='font-medium min-w-32 h-6'>Blogs</a>
                            <a href='/faqs' className='font-medium min-w-32 h-6'>Faqs</a>
                        </div>

                    </div>

                    <div className='w-full h-auto flex lg:flex-row flex-col pb-8'>
                        <div className='flex flex-row items-center md:justify-start justify-center w-full text-[14px] text-[#4c4c4c]'>
                            © 2025 Internpluss. All Right Reserved.
                        </div>

                        <div className='flex flex-row items-center justify-center gap-2 mt-2 text-[14px] text-[#4c4c4c]'>
                            <Link href='https://github.com/internpluss-inc'>
                                <GitHubLogoIcon className='w-4 h-4' />
                            </Link>
                            <Link href='https://www.linkedin.com/company/internplus/'>
                                <LinkedInLogoIcon className='w-4 h-4' />
                            </Link>
                            <Link href='https://www.instagram.com/internpluss?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
                                <InstagramLogoIcon className='w-4 h-4' />
                            </Link>
                            <TwitterLogoIcon className='w-4 h-4' />
                            <Link href='https://discord.gg/vfM9CjEg'>
                                <DiscordLogoIcon className='w-4 h-4' />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer