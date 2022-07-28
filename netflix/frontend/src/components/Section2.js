import React from "react";

const Section2 = () => {

    return (
        <section class='flex flex-col md:flex-row items-center border-gray-900 border-b-8'>
            <div class='md:w-1/2 flex justify-center items-center '>
                <img src={require('../images/mobile-0819.jpg')} class="w-8/12" alt=""/>
            </div>

            <div class="md:w-1/2 flex flex-col justify-center text-center md:text-left p-5 md:p-10">
                <h2 class="md:text-5xl text-4xl font-semibold mb-4">
                    Download your shows to watch offline.
                </h2>
                <h5 class="md:text-xl text-lg">
                    Save your favorites easily and always have something to watch.
                </h5>
            </div>
        </section>
    );
}

export default Section2;
