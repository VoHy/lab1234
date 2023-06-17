import React from 'react'
import {Film } from '../share/ListOfFilm'
import { useState } from 'react'

export default function Films() {
    const [film, setfilm] = useState([])
    return (
        <div className='container'>
            {Film.map((film) => (

                <div className='card'>
                    <img src={film.img} width="460" height="345" />
                    <h3>{film.name}</h3>
                    <h3>{film.nation}</h3>
                    <h3>{film.year}</h3>
                    <p><button>Detail</button></p>
                    {/* <p><button onClick={() => { setfilm(film) }}>
                        <a href='#popup1' id='openPopUp'>Detail</a>
                    </button></p>
                </div>
            ))}
            <div id='popup1' className='overlay'>
                <div className='popup'>
                    <img src={film.img} />
                    <h2>{film.name}</h2>
                    <a className='close' href='#'>&times;</a>
                    <div className='content'>
                        {film.info}
                    </div>
                </div>
            </div> */}
        </div>
            ))}</div>
    )
}

