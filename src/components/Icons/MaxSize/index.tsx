import * as React from 'react';

import { IconLabel, IconButton } from '../../IconButton';

const MaxSizeIcon = () => {
  return (
    <IconButton onClick={() => console.log('a')}>
      {/* <SvgComponent /> */}
      <IconLabel>more</IconLabel>
    </IconButton>
  );
};

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      {...props}
      height="30px"
    >
      <path d="M3 4.414l17.293 17.293 1.414-1.414L4.414 3H14V1H1v13h2zM47 45.586L29.707 28.293l-1.414 1.414L45.586 47H36v2h13V36h-2zM36 3h9.586L28.293 20.293l1.414 1.414L47 4.414V14h2V1H36zM14 47H4.414l17.293-17.293-1.414-1.414L3 45.586V36H1v13h13z" />
    </svg>
  );
}

export default MaxSizeIcon;
