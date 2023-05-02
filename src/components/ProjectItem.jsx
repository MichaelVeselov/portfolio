import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const ProjectItem = (props) => {
  const { id, name, image, description } = props;

  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: '100%',
        margin: '0 auto',
        cursor: 'pointer',
        paddingTop: '5px',
      }}
      onClick={() => navigate(`/project/${id}`)}
    >
      <CardMedia
        sx={{
          height: 200,
          borderRadius: '5px',
          objectFit: 'contain',
        }}
        component='img'
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant='h4' component='div'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
