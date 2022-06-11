import React from 'react';
import {Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

export const Profile = () => {
    const user = useSelector((state: RootState) => state.auth.userInfo);

    return (
        <>
            {user && (
                <div>
                    <Typography variant='h6' color='#e3f2fd' align='right'>{`${user.surname} ${user.name}`}</Typography>
                    <Typography variant='subtitle1' color='#e3f2fd' align='right'>{user.authorities[0].authority}</Typography>
                </div>
            )}
        </>
    );
};