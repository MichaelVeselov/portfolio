import { Box, Stack, Typography, Link, Grid } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

import photo from '../assets/personal/mve.jpg';

import '../styles/HomePage.css';
export const HomePage = () => {
  return (
    <Box component='div' sx={{ width: '100%', backgroundColor: '#21325e' }}>
      <Stack
        direction='column'
        spacing={2}
        sx={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}
      >
        <Box
          component='img'
          alt='Michael Veselov'
          src={photo}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            marginBottom: '15px',
          }}
        />

        <Box sx={{ flexGrow: 1 }} fontFamily='Roboto Mono' color='#f0f0f0'>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={5}>
              <Typography
                sx={{ typography: { sm: 'h5', xs: 'h6' } }}
                fontFamily='inherit'
              >
                Name:
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <Typography
                sx={{ typography: { sm: 'h5', xs: 'h6' } }}
                fontFamily='inherit'
              >
                Michael Veselov
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography
                sx={{ typography: { sm: 'h5', xs: 'h6' } }}
                fontFamily='inherit'
              >
                Born:
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <Typography
                sx={{ typography: { sm: 'h5', xs: 'h6' } }}
                fontFamily='inherit'
              >
                05.03.1974 in St. Petersburg, Russia
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography
                sx={{ typography: { sm: 'h5', xs: 'h6' } }}
                fontFamily='inherit'
              >
                Nationality:
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <Typography
                sx={{ typography: { sm: 'h5', xs: 'h6' } }}
                fontFamily='inherit'
              >
                German
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography
                sx={{ typography: { sm: 'h5', xs: 'h6' } }}
                fontFamily='inherit'
              >
                Language skills:
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <Typography
                sx={{ typography: { sm: 'h5', xs: 'h6' } }}
                fontFamily='inherit'
              >
                Russian (native speaker), German (fluent), English
                (intermediate)
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box color='#f0f0f0' fontFamily='Roboto Mono'>
          <Typography
            variant='h4'
            textAlign='left'
            marginTop='10px'
            fontFamily='Roboto'
            gutterBottom
          >
            About
          </Typography>

          <Typography
            variant='body2'
            textAlign='justify'
            marginTop='10px'
            fontSize='18px'
            gutterBottom
          >
            My name is Michael Veselov. I've been studying web development since
            the beginning of 2022. At the end of August 2023 I'm going to
            complete the online course "Frontend Developer" at Result School .
            The course’s curriculum largely included Java Script and React JS. I
            also studied CSS frameworks and libraries like Tailwind CSS,
            Bootstrap, Material UI and Styled components, the React Router
            library, and the Redux state management library. At the end of the
            course I will also be able to write a small backend application
            using the Express JS and Mongo DB. On top of that, I have a
            Typescript course planned at the rest of the course.
          </Typography>

          <Typography
            variant='body2'
            textAlign='justify'
            marginTop='10px'
            fontSize='18px'
            gutterBottom
          >
            I have experience in IT field as a developer of scripts for
            converting the data of various formats into EdIFACT and as an IT
            consultant in ERP Software for the meat processing industry. Within
            the last 13 years I have been co-owner and CEO for a company
            providing engineering printing services (drawings, engineering
            documentation, etc.).
          </Typography>

          <Typography
            variant='body2'
            textAlign='justify'
            marginTop='10px'
            fontSize='18px'
            gutterBottom
          >
            My personal interests include playing chess and bridge, listening
            rock music, and reading historical literature.
          </Typography>

          <Typography
            variant='body2'
            textAlign='justify'
            marginTop='10px'
            fontSize='18px'
            gutterBottom
          >
            Starting September 01, 2023, I am looking for a job as a Web
            Developer and would welcome offers.
          </Typography>

          <Typography
            variant='h4'
            color='#f0f0f0'
            textAlign='left'
            marginTop='20px'
            fontFamily='Roboto'
            gutterBottom
          >
            Contacts
          </Typography>
          <Stack direction='column' spacing={2}>
            <Stack
              direction='row'
              alignItems='center'
              spacing={2}
              fontSize='22px'
            >
              <EmailIcon />
              <Link
                href='mailto:michael.veselov@gmail.com'
                underline='none'
                color='inherit'
              >
                michael.veselov@gmail.com
              </Link>
            </Stack>
            <Stack
              direction='row'
              alignItems='center'
              spacing={2}
              fontSize='22px'
            >
              <WhatsAppIcon />
              <Link
                href='https://api.whatsapp.com/send/?phone=79117318807'
                target='_blank'
                rel='noopener noreferrer'
                underline='none'
                color='inherit'
              >
                WhatsApp
              </Link>
            </Stack>
            <Stack
              direction='row'
              alignItems='center'
              spacing={2}
              fontSize='22px'
            >
              <TelegramIcon />
              <Link
                href='https://t.me/MichaelVeselov'
                target='_blank'
                rel='noopener noreferrer'
                underline='none'
                color='inherit'
              >
                @MichaelVeselov
              </Link>
            </Stack>
            <Stack
              direction='row'
              alignItems='center'
              spacing={2}
              fontSize='22px'
            >
              <LinkedInIcon />
              <Link
                href='https://linkedin.com/in/michael-veselov'
                target='_blank'
                rel='noopener noreferrer'
                underline='none'
                color='inherit'
              >
                LinkedIn
              </Link>
            </Stack>
            <Stack
              direction='row'
              alignItems='center'
              spacing={2}
              fontSize='22px'
            >
              <GitHubIcon />
              <Link
                href='https://github.com/MichaelVeselov'
                target='_blank'
                rel='noopener noreferrer'
                underline='none'
                color='inherit'
              >
                Github
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
