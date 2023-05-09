import React, { useEffect, useState } from 'react';
import {
  Button,
  TextField,
  Select,
  MenuItem,
  Grid,
  Box,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import CreateCohortModal from './CreateCohortModal';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import { useGetCandidateByIdQuery } from '../features/candidate/candidateApi';
import {
  useAddStudentToCohortMutation,
  useGetAllCohortsQuery,
} from '../features/github/githubApi';

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  margin: '0 auto',
});

const CreateStudentModal = ({ createStudentOpen, onStudentClose, id }) => {
  const {
    data: candidate,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetCandidateByIdQuery(id);
  const { data: cohorts, isSuccess: isCohortSucess } = useGetAllCohortsQuery();

  const [addStudentToCohort, { isSuccess: isAddStudentSuccess }] =
    useAddStudentToCohortMutation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gitUsername, setgitUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [cohort, setCohort] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setName(candidate.name);
      setEmail(candidate.email);
      setPhone(candidate.phone);
    }
    if (isCohortSucess) {
      setCohort(cohorts[0].name);
    }
  }, [isSuccess, candidate, cohorts, isCohortSucess]);

  // Function Handlers
  const handleCohortChange = (event) => {
    setCohort(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('name', name);
    console.log('email', email);
    console.log('gitUsername', gitUsername);
    console.log('phone', phone);
    console.log('cohort', cohort);
    addStudentToCohort({ username: gitUsername, cohortName: cohort });
  };

  useEffect(() => {
    if (isAddStudentSuccess) {
      console.log('success');
      clearForm();
    }
  }, [isAddStudentSuccess]);

  const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setgitUsername('');
    setCohort('');
  };

  // Modal Handlers
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // JSX Fragments
  const studentInfo = (
    <>
      <TextField
        label="Name"
        value={name}
        required
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        label="Email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        label="Phone"
        value={phone}
        required
        onChange={(event) => setPhone(event.target.value)}
      />
      <TextField
        label="GitHub Username"
        value={gitUsername}
        required
        onChange={(event) => setgitUsername(event.target.value)}
      />
    </>
  );

  const cohortPart = (
    <Grid container spacing={2} alignItems={'center'}>
      <Grid item xs={8}>
        <Select
          displayEmpty
          value={cohort}
          onChange={handleCohortChange}
          placeholder="Cohort"
          fullWidth
          sx={{ borderRadius: '25px' , height: '3rem'}}
        >
          <MenuItem value="">Select Cohort</MenuItem>
          {cohorts?.map((cohort) => {
            return (
              <MenuItem key={cohort.name} value={cohort.name}>
                {cohort.name}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={4}>
        <Button
          size="large"
          variant="contained"
          color="info"
          onClick={handleOpen}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: '25px',
          }}
          fullWidth
          // startIcon={<AddIcon />}
        >
          Add Cohort
        </Button>
        <CreateCohortModal open={open} onClose={handleClose} />
      </Grid>
    </Grid>
  );

  const createStudentModalBody = (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '45%',
        bgcolor: 'background.paper',
        borderRadius: '25px',
        boxShadow: 15,
        p: 4,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        {/* <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        > */}
          {/* <IconButton
            sx={{ alignSelf: 'flex-end', fontSize: '2rem' }}
            onClick={onStudentClose}
          >
            <CancelIcon
              color="primary"
              sx={{ alignSelf: 'flex-end', fontSize: '2rem' }}
            />
          </IconButton> */}
        {/* </Box> */}
        <Typography variant="h4" align="center"
        textTransform={'uppercase'} m={2}>
          Create New Student
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={12}>
            <Form onSubmit={handleSubmit}>
              {studentInfo}
              {cohortPart}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
              >
                Create Student
              </Button>
            </Form>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );

  return (
    <Modal open={createStudentOpen} onClose={onStudentClose}>
      {createStudentModalBody}
    </Modal>
  );
};

export default CreateStudentModal;
