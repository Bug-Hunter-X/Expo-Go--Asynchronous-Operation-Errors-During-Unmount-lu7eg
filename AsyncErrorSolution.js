```javascript
import React, { useEffect, useState } from 'react';

const AsyncError = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function to prevent state updates after unmount
    return () => {
      // Cancel any ongoing requests if needed
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data ? JSON.stringify(data) : 'No data'}
    </div>
  );
};

export default AsyncError;
```