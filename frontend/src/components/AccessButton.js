import React, { Component } from "react";

export default class AccessButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div class="w-full flex justify-center">
        <div class="flex justify-center items-center w-11/12 md:w-10/12">
            <form method="post" class="w-6/12 justify-center">
                <div class="flex flex-grow items-stretch">
                    <input/>
                <button class="bg-red-600 font-medium md:font-normal flex justify-center items-center py-2 px-3 md:px-0 rounded-br-sm rounded-tr-sm md:text-2xl" type="submit">
                    <span>
                        Acessar
                    </span>
                    <ion-icon name="chevron-forward-outline" class="text-2xl"></ion-icon>
                </button>
                </div>
            </form>
        </div>
    </div>
    );
  }
}