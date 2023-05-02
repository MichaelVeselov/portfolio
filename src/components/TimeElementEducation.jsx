import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import WorkIcon from '@mui/icons-material/Work';

export const TimeElementEducation = (props) => {
  const { date, title, subtitle, description, length, certificate } = props;
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
      {length && (
        <p>
          <b>Course length: </b>
          {length} hours.
        </p>
      )}
      {certificate && (
        <p>
          <b>Certificate number: </b>
          {certificate}.
        </p>
      )}
    </VerticalTimelineElement>
  );
};
