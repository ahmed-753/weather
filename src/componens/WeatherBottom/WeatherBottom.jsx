import React, {useEffect,useContext, useState} from 'react';
import axios from "axios";
import {ThemeContext} from "../../Providers/ThemeProvider";

const WeatherBottom = () => {
    const {fun} = useContext(ThemeContext)

    const  [fiveDays,setFiveDays] = useState([])
    const [data,setData] = useState('')
    useEffect(() => {
        axios(`https://api.openweathermap.org/data/2.5/forecast?q=${fun.length ? fun : "Bishkek"}&appid=066b6f19f99f7c600ec5a1913940bb89`)

            .then(({data}) => {
                setFiveDays(data.list)
                setData(data.list[0].dt_txt.slice(0,10))
            })
            .catch((err) => console.log(err))
    },[])


    return (
      <>
          {
              JSON.stringify(fiveDays) !== '{}' &&
              <section className='weatherBottom'>
                  <div className='container'>
                      <ul className='weatherBottom__days'>
                          {
                              [... new  Set(
                                  fiveDays.map((item , idx) => item.dt_txt.slice(0,10))
                              )].map((item) =>(
                                  <div key={item.id }>
                                      <li className={`weatherBottom__day ${data === item ? 'active' : '' } `} onClick={() => setData(item)}>{item}</li>
                                  </div>


                              ))
                          }
                      </ul>
                      <div className='weatherBottom__content'>
                          {
                              fiveDays.filter((item) =>(
                                  item.dt_txt.includes(data)
                              )).map((item) =>(
                                  <div className='weatherBottom__card'>
                                      <h3 className='weatherBottom__hour'>{item.dt_txt.slice(11, 16)}</h3>
                                      <img  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} className='weather__dec-icon'/>
                                      <p className='weatherBottom__temp'>
                                          { (item.main.temp - 273.15).toFixed()}°
                                      </p>
                                      <p className='weatherBottom__temps'>
                                          { (item.main.feels_like - 273.15).toFixed()}
                                      </p>
                                      <p className='weatherBottom__temps'>{item.weather[0].main}</p>
                                  </div>
                              ))
                          }
                      </div>
                  </div>
              </section>
          }
      </>
    );
};

export default WeatherBottom;