import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="mr-2">
        <form >
          <input class="py-1 px-2 rounded-md text-black" type="text" placeholder="Pesquisar..." />
        </form>
      </div>     
    );
  }
}