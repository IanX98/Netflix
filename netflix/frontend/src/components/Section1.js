import React from "react";

const Section1 = () => {

    return (
        <section class='flex flex-col md:flex-row items-center border-gray-900 border-b-8'>
            <div class="md:w-1/2 flex flex-col justify-center text-center md:text-left p-5 md:p-10 ">
                <h2 class="md:text-5xl text-4xl font-semibold mb-4">
                    Enjoy on your TV.
                </h2>
                <h5 class="md:text-xl text-lg">
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                </h5>
            </div>
            <div class='md:w-1/2 flex justify-center items-center'>
                <img src={require('../images/tv.png')} class="w-8/12" alt=""/>
            </div>
        </section>
    );
}

export default Section1;