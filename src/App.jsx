import React, {useState} from "react";
import './App.css';

import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Items} from "./components/Items/Items";
import {items} from "./items";

export function App() {
    const [state] = useState(items);

    return (
        <div className='wrapper'>
            <Header />
            <Items items={state}/>
            <Footer />
        </div>
    );
}
