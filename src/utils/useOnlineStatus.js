const { useState, useEffect } = require("react");

useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    const handleOffline = () => {
      setOnlineStatus(false);
    };
    const handleOnline = () => {
        setOnlineStatus(true);
      };
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
