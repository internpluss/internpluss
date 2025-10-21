'use client';

import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

const Index = () => {
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


            <Navbar />

            <Footer />

        </div>
    )
}

export default Index