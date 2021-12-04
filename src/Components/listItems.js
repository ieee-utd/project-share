import * as React from 'react';
import { 
  List,
  ListItem, 
  ListItemButton, 
  ListItemIcon,
  ListItemText,
  ListSubheader 
} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const mainListItems = (
  <div>
    <List>
      <ListItem disablePadding>
        <ListItemButton component='a' href='/'>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Progress" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component='a' href='/quiz'>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Quizes" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Tests" />
        </ListItemButton>
      </ListItem>
    </List>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Current Courses</ListSubheader>
    <ListItemButton component='a' href='/electronic-circuits'>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Electronic Circuits" />
    </ListItemButton>
    <ListItemButton component='a' href='/data-structures'>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Data Structures" />
    </ListItemButton>
    <ListItemButton component='a' href='/linear-algebra'>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Linear Algebra" />
    </ListItemButton>
  </div>
);