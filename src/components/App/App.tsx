import React from 'react';
import './App.css';
import {Auth, Result} from "../../pages";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

function App() {
    const { isAuth } = useSelector((state: RootState) => state.auth)

    return (
        <div className='app'>
            {isAuth
                ? <Result/>
                : <Auth />
            }
        </div>
    );
}

export default App;