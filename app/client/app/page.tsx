'use client'
import styles from './page.module.css';
import { useEffect, useState } from 'react';

interface ApiData {
  message: string;
  // Define other properties if needed
}
export default function Index() {
  const [apiData, setApiData] = useState<ApiData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3300/api');
        if (!response.ok) {
          throw new Error('Failed to fetch data from the API');
        }
        const data: ApiData = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    return () => {};
  }, []);
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          {apiData && (
            <div>
              <h1>{apiData.message}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
