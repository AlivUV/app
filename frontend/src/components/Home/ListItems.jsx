// MUI components
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { BarChart, People } from '@mui/icons-material';

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
        <ListItemText primary="Reports" />
      </ListItemButton>
      <ListItemButton id='users' onClick={handleClick}>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItemButton>
    </List>
  )
}

export { ListItems }
export default ListItems;