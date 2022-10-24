import React, { useState, useEffect} from 'react';

const ConnectionStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
    return () => {
      window.removeEventListener("offline", () => {
        setOnlineStatus(false);
      });
      window.removeEventListener("online", () => {
        setOnlineStatus(true);
      });
    };
}, []);
    if (onlineStatus === true) {
      return (
        <div className="status">online</div>
      );
    }
    if (onlineStatus === false) {
      return(
        <div className="status status_offline">offline</div>
      );
    }

}

export default ConnectionStatus;