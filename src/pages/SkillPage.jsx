import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import api from '../data';

import { useFetchSkillData } from '../hooks/useFetchSkillData';

import { SkillItem } from '../components/SkillItem';
import { Loader } from '../components/Loader';

export const SkillPage = () => {
  const [frontEndSkills, feLoading] = useFetchSkillData(
    api.skills.fetchFrontEndSkills
  );
  const [backEndSkills, beLoading] = useFetchSkillData(
    api.skills.fetchBackEndSkills
  );
  const [programmingLanguageSkills, plLoading] = useFetchSkillData(
    api.skills.fetchProgrammingLanguages
  );
  const [commonKnowledgeSkills, cnLoading] = useFetchSkillData(
    api.skills.fetchCommonKnowledge
  );

  const loading = feLoading && beLoading && plLoading && cnLoading;

  if (loading) {
    return <Loader />;
  } else {
    return (
      <Box sx={{ flexGrow: 1, padding: '2rem' }}>
        <Typography
          variant='h2'
          gutterBottom
          sx={{ color: '#3e497a', textAlign: 'center', marginBottom: '1rem' }}
        >
          Skills:
        </Typography>
        <Divider sx={{ marginBottom: '2rem' }} />
        <Typography variant='h3' gutterBottom sx={{ color: '#3e497a' }}>
          Frontend skills
        </Typography>
        <Grid container spacing={2} sx={{ marginBottom: '2rem' }}>
          {frontEndSkills.map((skill) => (
            <Grid item xs={12} sm={6} md={3} lg={2} key={skill.id}>
              <SkillItem image={skill.image} name={skill.name} />
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ marginBottom: '2rem' }} />
        <Typography variant='h3' gutterBottom sx={{ color: '#3e497a' }}>
          Backend skills
        </Typography>
        <Grid container spacing={2} sx={{ marginBottom: '2rem' }}>
          {backEndSkills.map((skill) => (
            <Grid item xs={12} sm={6} md={3} lg={2} key={skill.id}>
              <SkillItem image={skill.image} name={skill.name} />
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ marginBottom: '2rem' }} />
        <Typography variant='h3' gutterBottom sx={{ color: '#3e497a' }}>
          Programming languages
        </Typography>
        <Grid container spacing={2} sx={{ marginBottom: '2rem' }}>
          {programmingLanguageSkills.map((skill) => (
            <Grid item xs={12} sm={6} md={3} lg={2} key={skill.id}>
              <SkillItem image={skill.image} name={skill.name} />
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ marginBottom: '2rem' }} />
        <Typography variant='h3' gutterBottom sx={{ color: '#3e497a' }}>
          Common knowledge
        </Typography>
        <Grid container spacing={2}>
          {commonKnowledgeSkills.map((skill) => (
            <Grid item xs={12} sm={6} md={3} lg={2} key={skill.id}>
              <SkillItem image={skill.image} name={skill.name} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
};
