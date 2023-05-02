import { useState, useEffect } from 'react';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import api from '../data';

import { TimeElementExperience } from '../components/TimeElementExperience';
import { Loader } from '../components/Loader';

export const WorkExperiencePage = () => {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.workExperience.fetchAll().then((response) => {
      const data = [...response].reverse();
      setExperience(data);
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading && <Loader />}
      {experience && (
        <div style={{ padding: '1rem 0' }}>
          <VerticalTimeline lineColor='#3e497a'>
            {experience.map((item) => (
              <TimeElementExperience key={item.id} {...item} />
            ))}
          </VerticalTimeline>
        </div>
      )}
    </>
  );
};
