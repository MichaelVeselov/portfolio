import { useState, useEffect } from 'react';

export const useFetchSkillData = (requestFunc) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestFunc().then((response) => {
      const data = Object.keys(response).map((key) => response[key]);
      setData(data);
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  return [data, loading];
};
