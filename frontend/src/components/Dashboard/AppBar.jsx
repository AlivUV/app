// MUI components
import { Toolbar, Typography, IconButton, AppBar as MuiAppBar } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';


let drawerWidth = 240;


const AppBarStyled = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

function AppBar(props) {
    return (
        <AppBarStyled position={props.position} open={props.open}>
            <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        ...(props.open && { display: 'none' }),
                    }}
                >
                    <MenuIcon style={{ color: 'blue' }} />
                </IconButton>
                <Typography component="h1" variant="h6" color="common.white" noWrap sx={{ flexGrow: 1 }} >
                    Administrador
                </Typography>
            </Toolbar>
        </AppBarStyled>
    )
}

export default AppBar;
export { AppBar };