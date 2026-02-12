"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const LandingPage = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="flex flex-col min-h-screen bg-[#404EED]">
            {/* Navigation */}
            <header className="px-4 lg:px-6 h-16 flex items-center max-w-7xl mx-auto w-full justify-between">
                <div className="flex items-center gap-2 font-bold text-white text-xl">
                    <span className="text-2xl">⚡</span> Antigravity
                </div>
                <nav className="hidden md:flex gap-6">
                    <Link href="#" className="text-white hover:underline underline-offset-4">Download</Link>
                    <Link href="#" className="text-white hover:underline underline-offset-4">Nitro</Link>
                    <Link href="#" className="text-white hover:underline underline-offset-4">Discover</Link>
                    <Link href="#" className="text-white hover:underline underline-offset-4">Safety</Link>
                    <Link href="#" className="text-white hover:underline underline-offset-4">Support</Link>
                </nav>
                <div className="flex gap-4">
                    <Link href="/sign-in">
                        <Button variant="secondary" size="sm" className="rounded-full bg-white text-black hover:bg-gray-100 hover:text-indigo-500 transition">
                            Login
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-1 flex items-center justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[url('https://assets-global.website-files.com/6257adef93867e56f84d3092/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg')] bg-cover bg-bottom opacity-20"></div>
                </div>

                <div className="z-10 text-center px-4 md:px-6 max-w-4xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase font-['Ginto_Nord',sans-serif]">
                        Imagine a Place...
                    </h1>
                    <p className="text-white/90 md:text-xl max-w-2xl mx-auto leading-relaxed">
                        ...where you can belong to a school club, a gaming group, or a worldwide art community.
                        Where just you and a handful of friends can spend time together. A place that makes it easy
                        to talk every day and hang out more often.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <Button size="lg" className="rounded-full bg-white text-black hover:bg-gray-100 hover:text-indigo-500 w-full sm:w-auto h-14 text-lg px-8 transition hover:shadow-xl">
                            <span className="mr-2">📥</span> Download for Windows
                        </Button>
                        <Button size="lg" className="rounded-full bg-[#23272A] text-white hover:bg-black/80 w-full sm:w-auto h-14 text-lg px-8 transition hover:shadow-xl">
                            Open Discord in your browser
                        </Button>
                    </div>
                </div>
            </main>

            {/* Footer Placeholder for visual balance */}
            <footer className="bg-[#23272A] py-12 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-white/50 text-sm">
                    <div>
                        <h3 className="text-indigo-500 font-bold mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li>Download</li>
                            <li>Nitro</li>
                            <li>Status</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-indigo-500 font-bold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>About</li>
                            <li>Jobs</li>
                            <li>Brand</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-indigo-500 font-bold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>College</li>
                            <li>Support</li>
                            <li>Safety</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-indigo-500 font-bold mb-4">Policies</h3>
                        <ul className="space-y-2">
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Guidelines</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
