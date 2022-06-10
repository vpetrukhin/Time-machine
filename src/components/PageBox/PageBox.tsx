import {PageBoxProps} from "./PageBox.props";
import {Box} from "@mui/material";

export const PageBox = ({ sx, children }: PageBoxProps) => {
    const initialSx = {
        width: '100%',
        height: '100vh',
        backgroundColor: 'secondary.main',
    }

    return (
        <Box sx={{ ...initialSx, ...sx }}>
            {children}
        </Box>
    );
};