import React from 'react';
import './App.css';
import {Auth, AdminPage} from "../../pages";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

function App() {
    const { isAuth, userInfo } = useSelector((state: RootState) => state.auth);

    // TODO спросить про роли

    return (
        <div className='app'>
            {isAuth
                ? (
                    <>
                        {userInfo && userInfo.authorities[0].authority === "ROLE_ADMIN"
                            ? <AdminPage/>
                            : <>графики</>
                        }
                    </>
                )
                : <Auth />
            }
        </div>
    );
}

export default App;