import React from "react";
import AccessButton from "./AccessButton";
import background from "../images/background_netflix.jpg";

const Header = () => {

    return (
        <header class="min-h-screen bg-black bg-opacity-75 bg-blend-overlay showcase border-gray-600 border-b-8 flex justify-center items-center bg-no-repeat" style={{ backgroundImage: `url(${background})` }}>
        <div class="z-10 h-full py-32 md:py-0 text-gray-100 text-center flex items-center flex-col">

            <h1 class="font-semibold text-4xl md:text-5xl w-10/12 md:w-3/4 text-center">
                Filmes e séries da Netflix, tudo em um só lugar.
            </h1>
            <h3 class="text-xl md:text-xl py-5">
                Assista onde quiser. Cancele quando quiser.
            </h3>
            <h4 class="text-sm md:text-lg pb-3">
                Quer começar? Coloque seu e-mail abaixo para acessar.
            </h4>

            <AccessButton />
        </div>
    </header>
    );
}

export default Header;
