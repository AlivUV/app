// MUI components
import { Toolbar, List, Divider, IconButton, Drawer as MuiDrawer, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ChevronLeft as ChevronLeftIcon, ExitToApp as ExitToAppIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Custom components
import { mainListItems } from 'components/Home/ListItems';

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

function Drawer(props) {
    return (
        <DrawerStyled variant={props.variant} open={props.open}>
            <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }} >
                <IconButton onClick={props.toggleDrawer}> <ChevronLeftIcon /> </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                {mainListItems(props.setCurrentContent)}
            </List>
            <Divider />
            <List component="nav" sx={{ mt: 'auto' }}>
                <ListItemButton onClick={props.handleLogout}>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cerrar sesión" />
                </ListItemButton>
            </List>
        </DrawerStyled>
    )
}

export default Drawer;
export { Drawer };