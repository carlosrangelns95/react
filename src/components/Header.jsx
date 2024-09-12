import Box from '@mui/material/Box';
import igniteLogo from '../assets/ignite-logo.svg'

const style = {
    backgroundColor: '#202024',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.25rem 0'
}

export function Header() {
    return (

        <Box component='header' sx={style}>
            <img src={igniteLogo} alt="logotivo do ignite" />
            <strong>Ignite Feed</strong>
        </Box>

    );
}