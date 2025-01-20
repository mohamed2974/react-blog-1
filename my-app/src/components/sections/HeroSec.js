import React from 'react'
import { Capacitor } from '@capacitor/core';

export default function HeroSec() {
    const isMobileApp = Capacitor.isNativePlatform();
    if (isMobileApp) {
        return 
    }

    return (
        <div className="bg-[#282c34] text-white py-36 md:py-52"
            style={{}}
        >
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-xl mb-8">Sharing insights and stories from my journey</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Get Started
                </button>
            </div>
        </div>
    );
};

