const BrowserInfo = () => {
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("chrome")) {
    return "Chrome";
  } else if (userAgent.includes("firefox")) {
    return "Firefox";
  } else if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
    return "Safari";
  } else if (userAgent.includes("edg")) {
    return "Edge";
  } else if (userAgent.includes("opera") || userAgent.includes("opr")) {
    return "Opera";
  } else if (userAgent.includes("msie") || userAgent.includes("trident")) {
    return "Internet Explorer";
  } else {
    return "Unknown";
  }
};

export default BrowserInfo;
