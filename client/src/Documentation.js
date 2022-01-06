import React, { Component } from 'react';
import diagram from './Diagram.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <header className="App-header">
            <h1>Dokumentacja</h1>
            <img src={diagram} alt="logo" />

            <h4>Aplikacja została stworzona na podstawie zadania 10</h4>
            <b>Dodano:</b><br />
            <p>- Main.js - komponent strony głównej<br/>
            - Documentation.js - komponent wyświetlający dokumentację<br/>
            - History.js - komponent wyświetlający historię ostatnich 10 wprowadzanych wartości</p><br/>
            
            <b>Zmodyfikowano:</b><br/>
            client:<br/>
            <p>- Fib.js - dodano metody umożliwiające interakcję z modułem historii<br/>
            - App.js - zrealizowano w formie routera React</p><br/>
            <br/>
            worker:<br/>
            <p>- index.js - zmieniono funkcję obliczającą k-ty wyraz ciągu</p><br/>
            <br/>

            <Link to="/"><b>Strona główna</b></Link>
            <p> </p>
            </header>
        </div>
    );
  };
