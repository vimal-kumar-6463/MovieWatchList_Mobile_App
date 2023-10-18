import React, { useEffect } from 'react';
import RNFetchBlob from 'react-native-fetch-blob';
import { DataFrame } from 'danfojs-node';

const CSVWriterHooks = () => {
  useEffect(() => {
    const writeCSV = async () => {
      const data = [
        { Name: 'John', Age: 30 },
        { Name: 'Jane', Age: 25 },
      ];

      const csvContent = new DataFrame(data).to_csv();
      const filePath = 'path/to/your/output.csv';

      try {
        await RNFetchBlob.fs.writeFile(filePath, csvContent, 'utf8');
        console.log('CSV file written successfully');
      } catch (error) {
        console.error('Error writing CSV file:', error);
      }
    };

    writeCSV();
  }, []); // Empty dependency array to run the effect once on mount

  // Render your React Native components
  return null;
};

export default CSVWriterHooks;