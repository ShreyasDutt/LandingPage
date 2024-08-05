import React from 'react';
import arrow from "../assets/arrow.svg";
import heroImg from "../assets/hero.png";
import Comapanies from "./Comapanies.jsx";

function Hero() {
    return (
        <>
            <div className="flex flex-col mx-5 my-10 xl:flex-row-reverse justify-center">
                <div className="mb-10 relative z-10">
                    <img src={heroImg} className="w-96 md:w-full sm:w-full lg:w-full xl:w-[45rem] mx-auto" alt=""/>
                </div>

                <div className="xl:w-[40rem] relative z-10 mr-10">
                    <p className="text-4xl font-semibold xl:text-7xl tracking-tight ">
                        Integrate your stack <img src={arrow} className="inline-block rotate-90 w-8 h-28" alt=""/> automate
                        your work
                    </p>
                    <p className="mt-6 text-xl xl:text-2xl">
                        Evolve at the speed and scale of your business with the leader in low-code automation
                    </p>
                </div>
            </div>

            <div className=" xl:block xl:absolute xl:top-[78%] xl:ml-16 z-30 top-24 mx-5">
                <div className="flex space-x-9">
                    <button className="bg-black text-white p-4 px-5 rounded-lg hover:text-black hover:bg-white border hover:border-black text-sm transition">Start a free trial</button>
                    <button className="px-5 border-r-2 border-l-2 border-r-black border-l-black border-t-0 border border-b-0 p-1 rounded-full text-sm">Get a demo</button>
                </div>
                <div>
                    <p className="mt-10 text-gray-600">Working with the best</p>
                    <Comapanies/>
                </div>
            </div>
        </>
    );
}

export default Hero;
