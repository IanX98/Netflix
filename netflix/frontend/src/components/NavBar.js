import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import LoginButton from "./LoginButton";
import EditProfileButton from "./EditProfileButton";

const NavBar = () => {
 
    return (
      <nav class="flex text-gray-100 justify-between items-center py-3 px-4 fixed w-full z-50">
        <Logo />
        <div class="w-6/12 flex flex-nowrap justify-end">
          <SearchBar />
          <LoginButton />
          <EditProfileButton />
        </div>
      </nav>
    );
}

export default NavBar;
