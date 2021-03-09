import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import { BottomNavigation } from '@material-ui/core';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentIcon from '@material-ui/icons/Assignment';
// import { BottomNavigationAction as MyBottomNavigationAction}  from '@material-ui/core';

import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { useStyles, MyBottomNavigationAction } from './style';

const BottomToolBar = () => {
  const classes = useStyles({});
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  const handleChange = (e, value) => {
    history.push(value);
  };
  return (
    <div className={classes.wrapper}>
      <BottomNavigation
        style={{ backgroundColor: '#28365b' }}
        value={pathname}
        showLabels
        onChange={handleChange}
      >
        <MyBottomNavigationAction
          label="Patients"
          value="/"
          icon={<AssignmentIndIcon />}
        />
        <MyBottomNavigationAction
          label="Tasks"
          value="/tasks"
          icon={<AssignmentIcon />}
          disabled
        />
        <MyBottomNavigationAction
          label="Admin"
          value="/tasks"
          icon={<SupervisorAccountIcon />}
          disabled
        />
        <MyBottomNavigationAction
          label="Label"
          value="/admin"
          icon={<SupervisorAccountIcon />}
          disabled
        />
      </BottomNavigation>
    </div>
  );
};
export default BottomToolBar;