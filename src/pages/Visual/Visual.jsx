import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = 'https://api.chainabuse.com/v0/reports?address=a&includePrivate=false&page=1&perPage=50';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          authorization: 'Basic Y2FfV2toMVJHTlRkMjB4WW1wTVIwNXNWRXBQVUhac1JISldMbkp2ZWpsT2JHTnFOUzlWVVhaYVYxQldUMkkyV21jOVBROmNhX1draDFSR05UZDIweFltcE1SMDVzVkVwUFVIWnNSSEpXTG5KdmVqbE9iR05xTlM5VlVYWmFWMUJXVDJJMldtYzlQUQ=='
        } 
      };

      try {
        const response = await fetch(apiUrl, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* You can add your JSX here */}
    </div>
  );
};

export default MyComponent;
