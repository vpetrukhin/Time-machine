import React from 'react';
import {Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {roleType} from "../../types/auth.types";

export const Profile = () => {
    const user = useSelector((state: RootState) => state.auth.userInfo);

    const getRoleByRussian = (role: roleType): string => {
        switch (role) {
            case "ROLE_ADMIN": {
                return 'Администратор';
            }
            case "ROLE_USER": {
                return 'Пользователь';
            }
        }
    }

    // [
    //     {
    //         "name": "string",
    //         "equation": "string",
    //         "paramList": [
    //             {
    //                 "name": "string",
    //                 "title": "string",
    //                 "type": "string"
    //             }
    //         ]
    //     }
    // ]

    // (a, b, c) => {
    //
    // }


    return (
        <>
            {user && (
                <div>
                    <Typography variant='h6' color='#e3f2fd' align='right'>{`${user.surname} ${user.name}`}</Typography>
                    <Typography variant='subtitle1' color='#e3f2fd' align='right'>{getRoleByRussian(user.authorities[0].authority)}</Typography>
                </div>
            )}
        </>
    );
};