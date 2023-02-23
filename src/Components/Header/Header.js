import React from "react";


import headerStyle from './Header.module.css'


const Header = ()=>{
    return (<header>
        <section >
            <p className={headerStyle.subscribe}><a href="#subscribe">Subscribe to our weather newsletter</a></p>
            <div className={headerStyle.banner}>
                <img className={headerStyle.img} src="https://static01.nyt.com/images/2014/12/11/technology/personaltech/11machin-illo/11machin-illo-superJumbo-v3.jpg" alt="weather"/>
                <h1 className={headerStyle.title}>Weather Website</h1>
            </div>
        </section>
       
    </header>)
    
}

export default Header;