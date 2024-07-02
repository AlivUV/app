// React imports
import { useState } from 'react';
import PropTypes from 'prop-types';

// MUI components
import { Backdrop, Box, Button, Modal, Tab, Tabs, Typography } from '@mui/material';

// Custom components
import { AcademicInformation, Fade, PersonalInformation, TabPanel } from 'components/Dashboard/users/UserModification'
import { updateApplicant } from 'services/ApplicantService';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '95%',
    md: '50%',
  },
  maxHeight: '85vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
};


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function UserModification({ applicantState, onClose, open }) {
  const [value, setValue] = useState(0);
  const [applicant, setApplicant] = applicantState;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
    updateApplicant(applicant)
      .then(status => {
        if (status === 200) {
          setApplicant(null);
          onClose();
        }
      });
  }

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2" color="primary">
              Modificar usuario
            </Typography>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Información personal" {...a11yProps(0)} />
              <Tab label="Información académica" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <PersonalInformation applicantState={[applicant, setApplicant]} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <AcademicInformation applicantState={[applicant, setApplicant]} />
            </TabPanel>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                mt: 2,
              }}
            >
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Guardar
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

UserModification.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { UserModification };
export default UserModification;