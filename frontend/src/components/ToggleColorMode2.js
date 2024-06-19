import * as React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';

import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';

function ToggleColorMode2({ mode, }) {
  return (
    <IconButton
      color="primary"
      aria-label="Theme toggle button"
    >
      {mode === 'dark' ? (
        <GroupAddRoundedIcon fontSize="small" />
      ) : (
        <GroupAddRoundedIcon />
      )}
    </IconButton>
  );
}

ToggleColorMode2.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default ToggleColorMode2;