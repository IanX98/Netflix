import React from "react";

const Logo = () => {

    return (
      <div class="w-6/12">
        <a href="/">
            <img src={require('../images/netflix.png')} alt="logo" class="w-5/12 md:w-2/12" />
        </a> 
      </div>  
    );
}

export default Logo;