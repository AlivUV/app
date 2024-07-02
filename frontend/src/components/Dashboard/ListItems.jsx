// MUI components
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { BarChart, People, GroupAddRounded } from '@mui/icons-material';

function ListItems({ changeTab }) {
  const handleClick = event => {
    changeTab(event.currentTarget.id);
  }

  return (
    <List>
      <ListItemButton id='reports' onClick={handleClick}>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="Reportes" />
      </ListItemButton>
      <ListItemButton id='adminRegistration' onClick={handleClick}>
        <ListItemIcon>
          <GroupAddRounded />
        </ListItemIcon>
        <ListItemText primary="Registrar usuario" />
      </ListItemButton>
      <ListItemButton id='studentsList' onClick={handleClick}>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Usuarios registrados" />
      </ListItemButton>
    </List>
  )
}

export { ListItems }
export default ListItems;