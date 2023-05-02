import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

export const SkillItem = ({ image, name }) => (
  <Stack direction='row' spacing={1}>
    <Chip
      avatar={
        <Avatar
          alt={name}
          src={image}
          sx={{ width: '50px !important', height: '50px !important' }}
        />
      }
      label={name}
      variant='outlined'
      sx={{ width: '100%', height: '100px', fontSize: '30px' }}
    />
  </Stack>
);
