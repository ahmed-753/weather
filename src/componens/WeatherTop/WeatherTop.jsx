import React, { useContext, useEffect, useState } from 'react';
import thermometer from '../../img/thermometer 1.png';
import drop1 from '../../img/drop1.png';
import clouds from '../../img/clouds.png';
import wind from '../../img/wind.png';
import axios from 'axios';
import { ThemeContext } from '../../Providers/ThemeProvider';
import {logDOM} from "@testing-library/react";

const WeatherTop = () => {
    const { current, setCurrent, fun } = useContext(ThemeContext);
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        axios(
            `https://api.openweathermap.org/data/2.5/weather?q=${
                fun.length ? fun : 'Bishkek'
            }&appid=d151b61547ae25cb0e705f62816f28d4`
        )
            .then(({ data }) => setCurrent(data))
            .catch((error) => console.log(error));

        const intervalId = setInterval(() => {
            setCurrentTime(cityTime());
            console.log(122)
        }, 10000);

        return () => {
            clearInterval(intervalId);
        };
    }, [fun]);

    const addZero = (num) => {
        if (num < 10) return `0${num}`;
        else return num;
    };

    const cityTime = () => {
        let d = new Date(),
            utc = d.getTime() + (d.getTimezoneOffset() * 60000),
            nd = new Date(utc + (1000 * current.timezone)),
            hours = addZero(nd.getHours()),
            minutes = addZero(nd.getMinutes());
        return `${hours} : ${minutes}`
    };


    useEffect(() => {
        setCurrentTime(cityTime());
    }, [current]);

    return (
        <section className='weather'>
            <div className='container'>
                <div className='weather__row'>
                    {JSON.stringify(current) !== '{}' && (
                        <>
                            <div className='weather__left'>
                                <div className='weather__deg'>
                                    <p className='weather__deg-num'>
                                        {current.main && current.main.temp
                                            ? (current.main.temp - 273.15).toFixed()
                                            : ''}°
                                        <span>Сегодня</span>
                                    </p>
                                    <img
                                        src={`http://openweathermap.org/img/wn/10d@4x.png`}
                                        className='weather__dec-icon'
                                    />
                                </div>
                                <div className='weather__location'>
                                    <p className='weather__location-info'>Время: {currentTime}</p>
                                    <p className='weather__location-info'>Город: {current.name}</p>
                                </div>
                            </div>
                            <div className='weather__right'>
                                <ul className='weather__list'>
                                    <li className='weather__item'>
                                        <div className='weather__item-icons'>
                                            <div className='weather__item-icon'>
                                                <img src={thermometer} />
                                            </div>
                                            Температура
                                        </div>
                                        {current.main && current.main.feels_like
                                            ? (current.main.feels_like - 273.15).toFixed()
                                            : ''}°
                                        <span>Сегодня</span>
                                        ° - ощущается как
                                    </li>
                                    <li className='weather__item'>
                                        <div className='weather__item-icons'>
                                            <div className='weather__item-icon'>
                                                <img src={drop1} />
                                            </div>
                                            Давление
                                        </div>
                                        {current.main.pressure} мм ртутного столба - нормальное
                                    </li>
                                    <li className='weather__item'>
                                        <div className='weather__item-icons'>
                                            <div className='weather__item-icon'>
                                                <img src={clouds} />
                                            </div>
                                            Осадки
                                        </div>
                                        {current.weather[0].main}
                                    </li>
                                    <li className='weather__item'>
                                        <div className='weather__item-icons'>
                                            <div className='weather__item-icon'>
                                                <img src={wind} />
                                            </div>
                                            Ветер
                                        </div>
                                        {current.wind.speed} м/с юго-запад - легкий ветер
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default WeatherTop;
