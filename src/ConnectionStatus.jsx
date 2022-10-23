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
        <div className="status">Online</div>
      );
    }
    if (onlineStatus === false) {
      return(
        <div class="status status_offline">Offline</div>
      );
    }

}

export default ConnectionStatus;