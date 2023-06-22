import React, {createContext,  useState,useEffect} from "react";

export const ThemeContext = createContext();

  export const ThemeProvider = ({ children }) => {
    const [type, setType] = useState(true);

    const [current,setCurrent] = useState({})
    const [fun,setFun] = useState("")


    const Fus = (a) => {
        setFun(a)
    }
   let value ={type,setType,current,setCurrent,Fus,fun}

    return ( <ThemeContext.Provider value={ value} >
            {children}
          </ThemeContext.Provider>
    );
};

export default ThemeProvider;
