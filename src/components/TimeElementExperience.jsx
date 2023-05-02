import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import WorkIcon from '@mui/icons-material/Work';

export const TimeElementExperience = (props) => {
  const { date, title, subtitle, description, projects, tasks } = props;
  return (
    <VerticalTimelineElement
      className='vertical-timeline-element--education'
      date={date}
      iconStyle={{ background: '#3e497a', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className='vertical-timeline-element-title'>{title}</h3>
      <h4>{subtitle}</h4>
      {description && (
        <p>
          <b>Description: </b>
          {description}
        </p>
      )}
      {projects && (
        <>
          <p>
            <b>Project list: </b>
          </p>
          <List dense={true}>
            {projects.map((task, index) => (
              <ListItem
                key={index}
                sx={{ marginTop: '-10px', marginBottom: '-10px' }}
              >
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText>{task}</ListItemText>
              </ListItem>
            ))}
          </List>
        </>
      )}
      {tasks && (
        <>
          <p>
            <b>Task list: </b>
          </p>
          <List dense={true}>
            {tasks.map((task, index) => (
              <ListItem
                key={index}
                sx={{ marginTop: '-10px', marginBottom: '-10px' }}
              >
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText>{task}</ListItemText>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </VerticalTimelineElement>
  );
};
