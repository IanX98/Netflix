import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <footer class=" px-5 py-10 ">
        <ul class="flex justify-between items-center">
            
            <li>&copy; 2022</li>
            <li> Feito com Python (Django) & JS (React)</li>
            <li>Netflix</li>
        </ul>
    </footer>
    );
  }
}