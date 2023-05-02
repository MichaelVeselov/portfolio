import { useState, useEffect } from 'react';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import api from '../data';

import { TimeElementEducation } from '../components/TimeElementEducation';
import { Loader } from '../components/Loader';

export const EducationPage = () => {
  const [basicEducation, setBasicEducation] = useState([]);
  const [additionalEducation, setAdditionalEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.education.fetchBasicEducation().then((response) => {
      const data = [...response].reverse();
      setBasicEducation(data);
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setLoading(true);
    api.education.fetchAdditionalEducation().then((response) => {
      const data = [...response].reverse();
      setAdditionalEducation(data);
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading && <Loader />}
      {basicEducation && additionalEducation && (
        <div style={{ padding: '1rem 0' }}>
          <div>
            <h2
              style={{
                fontSize: '30px',
                color: '#3e497a',
                textAlign: 'center',
              }}
            >
              School and University
            </h2>
            <VerticalTimeline lineColor='#3e497a'>
              {basicEducation.map((item) => (
                <TimeElementEducation key={item.id} {...item} />
              ))}
            </VerticalTimeline>
          </div>
          <div>
            <h2
              style={{
                fontSize: '30px',
                color: '#3e497a',
                textAlign: 'center',
              }}
            >
              Сourses and continuing education
            </h2>
            <VerticalTimeline lineColor='#3e497a'>
              {additionalEducation.map((item) => (
                <TimeElementEducation key={item.id} {...item} />
              ))}
            </VerticalTimeline>
          </div>
        </div>
      )}
    </>
  );
};
