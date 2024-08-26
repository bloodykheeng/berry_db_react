/* eslint-disable react/prop-types */
import { Box, Typography, useTheme } from '@mui/material';

const Header = ({ title, subtitle }) => {
    const theme = useTheme();

    return (
        <Box mb="30px">
            <Typography
                variant="h2"
                fontWeight="bold"
                // color={theme.palette.primary[800]}
                mb="5px"
            >
                {title}
            </Typography>
            <Typography
                variant="h5"
                // color={theme.palette.primary[800]}
            >
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;
