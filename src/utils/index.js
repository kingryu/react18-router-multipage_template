export function getQueryStringByName(name) {
  let result = window.location.search.match(
    new RegExp("[?&]" + name + "=([^&]+)", "i")
  );
  if (result === null || result.length < 1) {
    return "";
  }
  return decodeURIComponent(result[1]);
}

let [hostdomainPrefix] = /^(qa|yz)/.exec(window.location.hostname) || [""];
if (/[0-1]?\d{1,2}\.\d+\.\d+/.test(window.location.hostname)) {
  hostdomainPrefix = "qa";
}
export const domainPrefix = hostdomainPrefix;

export function saveLocalData(key, value) {
  if (window.localStorage) {
    window.localStorage.setItem(key, value);
  }
}

export function getLocalData(key) {
  if (window.localStorage) {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function getCookie(name) {
  const mat = new RegExp("(^|[^a-z])" + name + "=(.*?)(;|$)", "i").exec(
    document.cookie
  );
  return mat ? decodeURIComponent(mat[2]) : "";
}
// time 秒
export function setCookie(name, value, time) {
  let cookie = name + "=" + encodeURIComponent(value) + "; path=/";
  if (time) {
    cookie += "; expires=" + new Date(+new Date() + time * 1000).toUTCString();
  }
  document.cookie = cookie;
}

export function loadJs(src, callback) {
  let sc = document.createElement("script");
  sc.type = "text/javascript";
  sc.src = src;
  if (callback) {
    sc.addEventListener("load", (event) => callback(), false);
  }
  document.head.appendChild(sc);
}

export function loadStyle(src) {
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = src;
  document.head.appendChild(link);
}

export function isEmpty(val) {
  if (typeof val === "undefined" || val === null || val === "") {
    return true;
  }
  if (Array.isArray(val) && val.length < 1) {
    return true;
  }
}

export function getAvatar(id) {
  if (id) {
    let imgId = (id % 30) + 1;
    return getSrc(`/static/imgs/head${imgId}.png`);
  }
  return getSrc("/static/imgs/avatar.png");
}

export function getSrc(src) {
  return `//xxx.examplecdn.com${src}`;
}

export function hideChar(str) {
  return str.substr(0, 3) + "*****" + str.substr(-3);
}
export function sendToken(text) {
  const salt = "reactexample";
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);
  let str = text + "." + Math.round(Date.now() / 1000);
  return str
    .split("")
    .map(textToChars)
    .map(applySaltToChar)
    .map(byteHex)
    .join("");
}

export function getToken(text) {
  const salt = "reactexample";
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);
  const str = text
    .match(/.{1,2}/g)
    .map((hex) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode) => String.fromCharCode(charCode))
    .join("");
  let arr = str.split(".");
  if (arr && arr.length === 2) {
    if (Date.now() / 1000 - arr[1] < 300) {
      return arr[0];
    }
  }
  return "";
}

export function parseNum(number) {
  let num = Number(number)
  if (num) {
    if (num > 1000) {
      let kNum = num / 1000;
      kNum = kNum.toFixed(2)
      if (String(kNum).length < String(num).length) {
        kNum += "k";
      }
      return kNum
    }
    return num;
  } else {
    return '0'
  }
}
