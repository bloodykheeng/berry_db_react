import { useTheme } from '@mui/material/styles';
import logo from 'assets/zane_photos/logos/zane_db_no_bg.png'; // adjust the path as needed

// ==============================|| LOGO COMPONENT ||============================== //

const ZaneLogo = () => {
    const theme = useTheme();

    return <img src={logo} alt="Logo" width="100" />;
};

export default ZaneLogo;
