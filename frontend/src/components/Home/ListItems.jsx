import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';

export const mainListItems = (
  <>
    <ListItemButton>
      <ListItemIcon>
        <GroupAddRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Registrar usuario" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Usuarios registrados" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reportes" />
    </ListItemButton>
  </>
);
