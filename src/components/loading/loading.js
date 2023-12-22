import './loading.css'; // Add styling for your loading screen
import arc from "../img/arc_64.png"
import monk from "../img/monk_64.png"
import React, { useState, useEffect } from 'react';
import LoadingBar from './loadBar';

const LoadingScreen = () => {

    const [loadingProgress, setLoadingProgress] = useState(0);

    // Simulate loading progress (you should replace this with your actual loading logic)
    useEffect(() => {
      const progressInterval = setInterval(() => {
        setLoadingProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 1 : 100));
      }, 15);
  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(progressInterval);
    }, []);



  return (
    <div className="loading-screen">
    <div id="arctic-load">
                <img src={arc} alt="" /><img src={monk} alt="" />
      <LoadingBar progress={loadingProgress} />
            </div>
      {/* You can add additional loading indicators or graphics here */}
    </div>
  );
};

export default LoadingScreen;