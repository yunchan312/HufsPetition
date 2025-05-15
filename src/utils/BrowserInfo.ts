// const BrowserInfo = () => {
//   const userAgent = navigator.userAgent.toLowerCase();

//   if (userAgent.includes("chrome") || userAgent.includes("crios")) {
//     return "Chrome";
//   } else if (userAgent.includes("firefox") || userAgent.includes("fxios")) {
//     return "Firefox";
//   } else if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
//     return "Safari";
//   } else if (userAgent.includes("edg") || userAgent.includes("edgios")) {
//     return "Edge";
//   } else if (userAgent.includes("opera") || userAgent.includes("opr")) {
//     return "Opera";
//   } else if (userAgent.includes("msie") || userAgent.includes("trident")) {
//     return "Internet Explorer";
//   } else {
//     return "Unknown";
//   }
// };

// export default BrowserInfo;

const BrowserInfo = () => {
  const userAgent = navigator.userAgent.toLowerCase();

  // Chrome 및 Chrome 기반 브라우저 감지 (Android 기본 브라우저 포함)
  if (userAgent.includes("chrome") || userAgent.includes("crios")) {
    if (userAgent.includes("edg") || userAgent.includes("edgios")) {
      return "Edge";
    } else if (userAgent.includes("opr") || userAgent.includes("opera")) {
      return "Opera";
    } else if (userAgent.includes("brave")) {
      return "Brave";
    } else if (userAgent.includes("samsungbrowser")) {
      return "Samsung Internet";
    } else {
      return "Chrome";
    }
  }

  // Firefox 감지
  if (userAgent.includes("firefox") || userAgent.includes("fxios")) {
    return "Firefox";
  }

  // Safari 감지 (iOS와 데스크탑)
  if (
    userAgent.includes("safari") &&
    !userAgent.includes("chrome") &&
    !userAgent.includes("crios")
  ) {
    return "Safari";
  }

  // Internet Explorer 감지
  if (userAgent.includes("msie") || userAgent.includes("trident")) {
    return "Internet Explorer";
  }

  // Android 기본 브라우저 감지 (Chrome으로 인식될 수 있음)
  if (userAgent.includes("android") && !userAgent.includes("chrome")) {
    return "Android Browser";
  }

  // 기타 브라우저
  return "Unknown";
};

export default BrowserInfo;
