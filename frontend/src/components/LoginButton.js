import React, { Component } from "react";

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="mr-2">
        <a href="#" class="">
          <button class="bg-red-600 py-1 px-3 text-white md:text-lg rounded-md">
              Entrar
          </button>
        </a>
      </div>     
    );
  }
}