import React from 'react';

function useEscapeKey(callback) {
    React.useEffect(()=>{

        function handleEscKey(event){
          if(event.code === 'Escape')
          callback();
        }
    
        window.addEventListener('keydown', handleEscKey);
    
        return () => {
          window.removeEventListener('keydown', handleEscKey);
        };
      }, []);
}

export default useEscapeKey;