import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export const Footer = () => {
  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{
        width: '100%',
        minHeight: '200px',
        background: '#21325e',
        paddingTop: '10px',
        paddingBottom: '10px',
        marginTop: '0px',
      }}
    >
      <Stack direction='row' justifyContent='center' flexWrap='wrap'>
        <Link
          href='https://linkedin.com/in/michael-veselov'
          target='_blank'
          rel='noopener noreferrer'
          color='#fff'
        >
          <LinkedInIcon
            color='inherit'
            sx={{ margin: '20px', fontSize: { xs: '50px', sm: '70px' } }}
          />
        </Link>
        <Link
          href='https://github.com/MichaelVeselov'
          target='_blank'
          rel='noopener noreferrer'
          color='#fff'
        >
          <GitHubIcon
            color='inherit'
            sx={{ margin: '20px', fontSize: { xs: '50px', sm: '70px' } }}
          />
        </Link>
        <Link href='mailto:michael.veselov@gmail.com' color='#fff'>
          <EmailIcon
            color='inherit'
            sx={{ margin: '20px', fontSize: { xs: '50px', sm: '70px' } }}
          />
        </Link>
      </Stack>
      <Typography
        variant='body1'
        color='#fff'
        textAlign='center'
        fontSize='20px'
        gutterBottom
      >
        &copy; 2023 Michael Veselov
      </Typography>
    </Stack>
  );
};
