import {PrivateProps} from "./Private.props";
import {Navigate} from "react-router-dom";

export const Private = ({ children }: PrivateProps) => {
    const auth = false;

    if (!auth) return <Navigate to='/auth' />

    return (
        <>
            {children}
        </>
    );
};
