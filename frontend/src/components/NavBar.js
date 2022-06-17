import React, { Component } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import LoginButton from "./LoginButton";
import EditProfileButton from "./EditProfileButton";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
}