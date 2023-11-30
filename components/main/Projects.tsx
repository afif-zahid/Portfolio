"use client"
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";
import Image from "next/image";


const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/Movies.png"
                    title="Movies App"
                    description="A dynamic movie website featuring user-friendly design,
          intuitive navigation, and a providing an immersive user
          friendly experience."
                />
                <a
                    href='https://www.facebook.com/queueunderstop/'
                    target={"_blank"}
                    rel={"noreferrer"}

                >
                    <ProjectCard
                        src="/Weather.png"
                        title="Weather App"
                        description="Developed a sleek and accurate weather app, providing
          real-time forecasts, customizable settings, and an
          intuitive user interface for seamless user experience."
                    />
                </a>
                <Link href="https://www.instagram.com/" passHref={true} legacyBehavior>
                    {/* <Button> */}
                    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
                        <Image
                            src="/SpaceWebsite.png"
                            alt="portfolio image"
                            width={1000}
                            height={1000}
                            className="w-full object-contain"
                        />

                        <div className="relative p-4">
                            <h1 className="text-2xl font-semibold text-white">Portfolio Website</h1>
                            <p className="mt-2 text-gray-300">Embark on a cosmic journey through my portfolio, where creativity orbits technology in a stellar fusion, exploring the vast universe of design and innovation.</p>
                        </div>
                    </div>
                    {/* </Button> */}
                </Link>


            </div>
        </div>
    );
};

export default Projects;