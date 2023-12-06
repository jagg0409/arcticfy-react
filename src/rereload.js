import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ReloadOnUrlChange = () => {
    const location = useLocation();
  
    useEffect(() => {
      // Your condition to determine if a reload is necessary
      let shouldReload 
      if(location != location){
        shouldReload=true 
      } else{
        shouldReload=false
      }
  
      if (shouldReload) {
        window.location.reload();
      }
    }, [location.pathname]);
  
 }
export default ReloadOnUrlChange