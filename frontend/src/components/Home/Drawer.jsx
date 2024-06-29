// MUI components
import { Toolbar, Divider, IconButton, Drawer as MuiDrawer } from '@mui/material';
import { ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Custom components
import { ListItems } from 'components/Home/ListItems';


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


function Drawer({ changeTab, open, toggleDrawer, variant }) {
    return (
        <DrawerStyled variant={variant} open={open}>
            <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }} >
                <IconButton onClick={toggleDrawer}> <ChevronLeftIcon /> </IconButton>
            </Toolbar>
            <Divider />
            <ListItems changeTab={changeTab} />
        </DrawerStyled>
    )
}

export default Drawer;
export { Drawer };