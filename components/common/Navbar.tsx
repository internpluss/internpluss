'use client';

import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';

import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = 50;

      if (scrollPosition > offset) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 z-50 w-full h-auto bg-white flex items-center justify-center duration-300 ${isScrolled ? 'border-b border-border' : 'border-transparent'}`}>

      <div className='w-full h-full flex flex-col items-center justify-center relative'>
        <div className={`md:w-9/12 w-full h-full flex items-center justify-center text-left transition-all`}>

          <div className='md:w-full w-11/12 h-16 flex flex-row md:justify-start justify-between items-center z-[100] bg-white'>

            <Link href="/" className='text-2xl font-bold text-black flex items-center justify-center'>
              <Image src="/logos/main.svg" alt="logo" width={130} height={70} className=' w-32 h-auto' priority={true} />
            </Link>

            <div className='md:flex hidden flex-row w-full h-full justify-between lg:pl-12 pl-4'>
              <div className={`h-full flex flex-row gap-3 text-center items-center text-base font-medium`}>

                <div id="internship-btnContainer" className='w-full h-full flex items-center justify-center'>
                  <Link id='internship-btn' href="/internships" className='bg-white h-full w-auto flex items-center justify-center cursor-default'>
                    <span id='btn-imain' className='py-1 px-3 text-[#000] rounded transition-all'>Services</span>
                  </Link>

                  <div id='internship-content' className={`absolute left-0 top-16 w-full text-base flex flex-row bg-white text-black z-5 items-center justify-center transition-all border border-border shadow-md`}>

                    <div className='w-[77%] h-full flex flex-row items-start justify-start gap-4'>

                      <div className='md:w-96 w-auto flex flex-col items-start justify-start text-left pt-3 pb-8 gap-2'>

                        <div className='px-5 text-lg font-semibold'>Internships & College Search</div>

                        <Link href="/internships" className='w-full flex flex-row gap-3 transition-all hover:bg-[#eaecee] p-2 px-3 rounded'>
                          <Image src="/navbar/program.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>Internships</div>
                            <div className='text-xs font-normal text-[#000]'>Find the best internships for students.</div>
                          </div>
                        </Link>

                        <Link href="/featured/internships" className='w-full flex flex-row gap-3 transition-all hover:bg-[#eaecee] p-2 px-3 rounded'>
                          <Image src="/navbar/program.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>Featured Internships</div>
                            <div className='text-xs font-normal text-[#000]'>Check out our top recommended internships.</div>
                          </div>
                        </Link>

                        <Link href="/college" className='w-full flex flex-row gap-3 transition-all hover:bg-[#eaecee] p-2 px-3 rounded'>
                          <Image src="/navbar/program.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>College</div>
                            <div className='text-xs font-normal text-[#000]'>Get detail insight about your colleges.</div>
                          </div>
                        </Link>

                        <Link href="/college/top-engineering-colleges" className='w-full flex flex-row gap-3 transition-all hover:bg-[#eaecee] p-2 px-3 rounded'>
                          <Image src="/navbar/program.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>Top Categories</div>
                            <div className='text-xs font-normal text-[#000]'>Explore the best internship categories.</div>
                          </div>
                        </Link>

                      </div>

                      <div className='md:w-96 w-auto flex flex-col items-start justify-start text-left pt-3 pb-8 gap-2'>

                        <div className='px-5 text-lg font-semibold'>Careers Page</div>

                        <Link href="https://careers.internpluss.com" className='w-full flex flex-row gap-3 transition-all hover:bg-[#eaecee] p-2 px-3 rounded'>
                          <Image src="/navbar/program.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>Carrers Page</div>
                            <div className='text-xs font-normal text-[#000]'>Find job opportunities on our careers page.</div>
                          </div>
                        </Link>

                        <Link href="https://careers.internpluss.com/features" className='w-full flex flex-row gap-3 transition-all hover:bg-[#eaecee] p-2 px-3 rounded'>
                          <Image src="/navbar/program.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>Careers Page Features</div>
                            <div className='text-xs font-normal text-[#000]'>Explore the features of Careers Page.</div>
                          </div>
                        </Link>

                        <Link href="https://careers.internpluss.com/integration" className='w-full flex flex-row gap-3 transition-all hover:bg-[#eaecee] p-2 px-3 rounded'>
                          <Image src="/navbar/program.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>Integration</div>
                            <div className='text-xs font-normal text-[#000]'>Integrate with your own domain.</div>
                          </div>
                        </Link>

                        <Link href="https://careers.internpluss.com/join-us" className='w-full flex flex-row gap-3 transition-all hover:bg-[#eaecee] p-2 px-3 rounded'>
                          <Image src="/navbar/program.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>Join Us</div>
                            <div className='text-xs font-normal text-[#000]'>Explore the features of Careers Page.</div>
                          </div>
                        </Link>

                      </div>

                      <div className='md:w-96 w-auto flex flex-col items-start justify-start text-left pt-3 pb-8 gap-2'>

                        <div className='px-5 text-lg font-semibold'>TnP Portal</div>

                        <Link href="https://tnp.internpluss.com/" className='w-full flex flex-row gap-3 transition-all hover:bg-[#eaecee] p-2 px-3 rounded'>
                          <Image src="/navbar/program.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>About TnP Portal</div>
                            <div className='text-xs font-normal text-[#000]'>Learn about our Training and Placement portal.</div>
                          </div>
                        </Link>

                        <Link href="https://tnp.internpluss.com/features" className='w-full flex flex-row gap-3 transition-all hover:bg-[#eaecee] p-2 px-3 rounded'>
                          <Image src="/navbar/program.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>Explore TnP Features</div>
                            <div className='text-xs font-normal text-[#000]'>Features for Training and placement Portals.</div>
                          </div>
                        </Link>

                        <Link href="https://tnp.internpluss.com/integration" className='w-full flex flex-row gap-3 transition-all hover:bg-[#eaecee] p-2 px-3 rounded'>
                          <Image src="/navbar/program.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>Integration</div>
                            <div className='text-xs font-normal text-[#000]'>Integrate with your own domain.</div>
                          </div>
                        </Link>

                        <Link href="https://tnp.internpluss.com/contact" className='w-full flex flex-row gap-3 transition-all hover:bg-[#eaecee] p-2 px-3 rounded'>
                          <Image src="/navbar/program.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>Join Us</div>
                            <div className='text-xs font-normal text-[#000]'>Sign up for our TnP platform.</div>
                          </div>
                        </Link>

                      </div>

                    </div>

                  </div>
                </div>

                <div id="company-btnContainer" className='w-full h-full flex items-center justify-center'>

                  <Link href='/company' id='company-btn' className='bg-white h-full w-auto flex items-center justify-center cursor-default'>
                    <span id='btn-cmain' className='py-1 px-3 text-[#000] rounded transition-all'>
                      Company
                    </span>
                  </Link>

                  <div id='company-content' className={`absolute left-0 top-16 w-full text-base flex flex-row bg-white text-black z-5 items-center justify-center transition-all border border-border shadow-md`}>

                    <div className='w-[77%] h-full flex flex-row items-start justify-start gap-4'>

                      <div className='flex flex-col items-start justify-start text-left pt-3 pb-8 gap-2'>

                        <div className='px-5 text-lg font-semibold'>Company</div>

                        <Link href="/company" className='w-96 flex flex-row gap-3 transition-all hover:bg-[#eaecee] py-2 px-3 rounded-md'>
                          <Image src="/navbar/about-us.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>About Us</div>
                            <div className='text-xs font-normal text-[#000]'>Get to know our team and mission.</div>
                          </div>
                        </Link>

                        <Link href="/careers" className='w-96 flex flex-row gap-3 transition-all hover:bg-[#eaecee] py-2 px-3 rounded-md'>
                          <Image src="/navbar/careers.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>Careers</div>
                            <div className='text-xs font-normal text-[#000]'>Why you should join our fast growing startup.</div>
                          </div>
                        </Link>

                        <Link href="/open-positions" className='w-96 flex flex-row gap-3 transition-all hover:bg-[#eaecee] py-2 px-3 rounded-md'>
                          <Image src="/navbar/hiring.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>Open Positions</div>
                            <div className='text-xs font-normal text-[#000]'>Ready to join us and make an impact today.</div>
                          </div>
                        </Link>

                      </div>

                      <div className='flex flex-col items-start justify-start text-left pt-3 pb-8 gap-2'>

                        <div className='px-5 text-lg font-semibold'>Resources</div>

                        <Link href="/our-programs" className='w-96 flex flex-row gap-3 transition-all hover:bg-[#eaecee] p-2 px-3 rounded-md'>
                          <Image src="/navbar/program.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>Our Programs</div>
                            <div className='text-xs font-normal text-[#000]'>Discover our programs and join us today.</div>
                          </div>
                        </Link>

                        <Link href="/contact" className='w-96 flex flex-row gap-3 transition-all hover:bg-[#eaecee] p-2 px-3 rounded-md'>
                          <Image src="/navbar/contact.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>Contact</div>
                            <div className='text-xs font-normal text-[#000]'>Get in touch with us for assistance.</div>
                          </div>
                        </Link>

                        <Link href="/faqs" className='w-96 flex flex-row gap-3 transition-all hover:bg-[#eaecee] p-2 px-3 rounded-md'>
                          <Image src="/navbar/faqs.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>FAQs</div>
                            <div className='text-xs font-normal text-[#000]'>Find answers to commonly asked questions here.</div>
                          </div>
                        </Link>

                      </div>

                      <div className='flex flex-col items-start justify-start text-left pt-3 pb-8 gap-2'>

                        <div className='px-5 text-lg font-semibold'>Terms</div>

                        <Link href="/company" className='w-96 flex flex-row gap-3 transition-all hover:bg-[#eaecee] py-2 px-3 rounded-md'>
                          <Image src="/navbar/about-us.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>Terms & Conditions</div>
                            <div className='text-xs font-normal text-[#000]'>Get to know our terms and conditions.</div>
                          </div>
                        </Link>

                        <Link href="/careers" className='w-96 flex flex-row gap-3 transition-all hover:bg-[#eaecee] py-2 px-3 rounded-md'>
                          <Image src="/navbar/careers.svg" alt="logo" width={48} height={48} className=' w-12 h-12' priority={true} />
                          <div className='flex flex-col items-start justify-center'>
                            <div>Privacy Policy</div>
                            <div className='text-xs font-normal text-[#000]'>Our Privacy Policy for our users.</div>
                          </div>
                        </Link>

                      </div>

                    </div>

                  </div>

                </div>

                <Link href='/contact' id='pages-btn' className='bg-white h-full w-auto flex items-center justify-center cursor-pointer'>
                  <span id='btn-pmain' className='py-1 px-3 text-[#000] rounded transition-all'>
                    Contact
                  </span>
                </Link>

              </div>

              <div className='flex flex-row items-center justify-center gap-4'>
                <Button size='custom' variant='outline'>Sign In</Button>
                <Button size='custom' variant='greenry'>Get started for free</Button>
              </div>
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
          <div className='w-full h-auto flex flex-col items-center justify-center'>
          </div>
        </div>

      </div >
    </div >
  )
}

export default Navbar