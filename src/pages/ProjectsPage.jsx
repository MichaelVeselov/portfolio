import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import api from '../data';

import { ProjectItem } from '../components/ProjectItem';

import { Loader } from '../components/Loader';

export const ProjectsPage = () => {
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.projects.fetchAll().then((response) => {
      const data = [...response].sort(() => Math.random() - 0.5);
      setProjectList(data);
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading && <Loader />}
      {projectList && (
        <Box sx={{ flexGrow: 1, padding: '2rem' }}>
          <Typography
            variant='h4'
            gutterBottom
            sx={{
              color: '#3e497a',
              textAlign: 'center',
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}
          >
            my portfolio projects:
          </Typography>
          <Divider sx={{ marginBottom: '2rem' }} />
          <Grid container spacing={2}>
            {projectList.map((project) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
                <ProjectItem {...project} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};
