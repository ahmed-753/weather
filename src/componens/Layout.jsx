import React, {useContext} from 'react';
import {ThemeContext} from "../Providers/ThemeProvider";
import cn from 'classnames'

const Layout = ({children}) => {
    const {type} = useContext(ThemeContext)
    console.log(type)
    return (
        <div className={cn('layout',{
            dark: type,
        })}>
            {children}
        </div>
    );
};

export default Layout;