import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

import api from '../data';

import { Loader } from '../components/Loader';

const BackButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  backgroundColor: '#3e497a',
  borderRadius: '5px',
  fontWeight: 'bolder',
}));

export const SingleProjectPage = () => {
  const { id } = useParams();

  const [currentProject, setCurrentProject] = useState(null);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    api.projects.getById(id).then((data) => {
      setCurrentProject(data);
      setLoading(false);
    });
  }, [id]);

  // const currentProject = projectList.find((project) => project.id === id);

  if (!loading) {
    const { name, image, techs, github, deploy } = currentProject;

    return (
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        sx={{
          maxWidth: '600px',
          minHeight: '600px',
          margin: '1rem auto',
          padding: '0.5rem 0.5rem',
        }}
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ width: '100%', marginTop: '1rem' }}
        >
          <BackButton
            variant='outlined'
            startIcon={<ArrowBackIcon />}
            sx={{ fontSize: '15px' }}
            onClick={() => navigate(-1)}
          >
            Back
          </BackButton>
          <Typography
            variant='h4'
            component='h4'
            textAlign='center'
            marginTop='10px'
            color='#3e497a'
          >
            {name}
          </Typography>
        </Stack>

        <Box
          component='img'
          src={image}
          alt={name}
          sx={{
            marginTop: '10px',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />
        <Typography
          variant='h5'
          component='h5'
          textAlign='center'
          marginTop='10px'
          color='#3e497a'
        >
          Technologies used in this project:
        </Typography>
        <Paper
          sx={{
            display: 'flex',
            gap: 1,
            justifyContent: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
            padding: '5px',
            marginTop: '10px',
            width: '100%',
          }}
          component='ul'
        >
          {techs.map((skill) => {
            const { id, name, image } = skill;
            return (
              <li key={id}>
                <Chip
                  label={name}
                  variant='outlined'
                  avatar={<Avatar src={image} alt={name} />}
                  sx={{ fontSize: '20px' }}
                />
              </li>
            );
          })}
        </Paper>
        <Typography
          variant='h5'
          component='h5'
          textAlign='center'
          color='#3e497a'
        >
          Links:
        </Typography>
        <Paper
          sx={{
            display: 'flex',
            gap: 4,
            justifyContent: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
            padding: '5px',
            marginTop: '10px',
            width: '100%',
          }}
          component='ul'
        >
          {github && (
            <Chip
              icon={<GitHubIcon />}
              label='GitHub'
              variant='outlined'
              sx={{ height: '35px', fontSize: '20px' }}
              component='a'
              clickable
              href={github}
              target='_blank'
              rel='noopener noreferrer'
            />
          )}

          {deploy && (
            <Chip
              icon={<WebIcon />}
              label='Vercel'
              variant='outlined'
              sx={{ height: '35px', fontSize: '20px' }}
              component='a'
              clickable
              href={deploy}
              target='_blank'
              rel='noopener noreferrer'
            />
          )}
        </Paper>
      </Stack>
    );
  } else {
    return <Loader />;
  }
};
