// React imports
import { useNavigate } from 'react-router-dom';

// MUI components
import { Toolbar, List, Divider, IconButton, Drawer as MuiDrawer, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ChevronLeft, ExitToApp } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Custom components
import { ListItems } from 'components/Dashboard/ListItems';

// Services
import { endSession } from 'services/UserService';


const drawerWidth = 240;


const DrawerStyled = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);


function Drawer({ open, changeTab, toggleDrawer, variant }) {
    let navigate = useNavigate();

    const handleLogout = (event) => {
        event.preventDefault();
        endSession();
        navigate('/');
    }

    return (
        <DrawerStyled variant={variant} open={open}>
            <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }} >
                <IconButton onClick={toggleDrawer}> <ChevronLeft /> </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                <ListItems changeTab={changeTab} />
            </List>
            <Divider />
            <List component="nav" sx={{ mt: 'auto' }}>
                <ListItemButton onClick={handleLogout}>
                    <ListItemIcon>
                        <ExitToApp />
                    </ListItemIcon>
                    <ListItemText primary="Cerrar sesión" />
                </ListItemButton>
            </List>
        </DrawerStyled>
    )
}

export default Drawer;
export { Drawer };