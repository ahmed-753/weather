import React, {useContext, useState} from 'react';
import wea from "../../img/logo.svg"
import drop from "../../img/drop.png"
import {ThemeContext} from "../../Providers/ThemeProvider";


const Header = () => {

    const {setType,setCurrent,Fus} = useContext(ThemeContext)
    const [value,setValue] = useState('')
    const Search = (a) => {
        Fus(a)
    }
    Search(value)
    return (
        <header className='header'>
            <div className='container'>
                <nav className='header__nav'>
                    <h1 className='header__title'>
                        <img src={wea}/>
                        React weather
                    </h1>
                    <div className='header__right'>
                        <img onClick={() => setType(prev => !prev) } src={drop}/>
                        <input onChange={(event) => setValue(event.target.value)}  className='header__right-search' type='search' placeholder='Поиск города'/>
                    </div>
                </nav>
            </div>

        </header>
    );
};

export default Header;