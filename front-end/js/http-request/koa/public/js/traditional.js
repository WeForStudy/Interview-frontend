function createXHR() {
  if (typeof XMLHttpRequest !== 'undefined') {
    return new XMLHttpRequest();
  } else if(typeof ActiveXObject !== 'undefined') {
    return new ActiveXObject();
  }
}

function sendRequest(url, method = 'GET', async = true) {
  const xhr = createXHR();
  xhr.open(method, url, async);
  xhr.onreadystatechange = function() {
    const { readyState, status, responseText, responseXML, response } = xhr;
    let data;
    if (readyState === 4 && status === 200) {
      if (!xhr.responseType || xhr.responseType === "text") {
        let obj = responseText;
        try {
          data = JSON.parse(obj);
        } catch(e) {
          console.log(e);
          data = responseText;
        }
      } else if(responseType === 'document') {
        data = responseXML;
      } else {
        data = response;
      }
      console.log(data);
      return data;
    }
  };
  xhr.send();
  cancel(1, xhr);
}

function cancel(seconds, xhrObj) {
  setTimeout(() => {
    if (xhrObj.readyState !== 4) {
      xhrObj.abort();
      console.log('cancelled');
    }
  }, seconds * 1000);
}
sendRequest('http://localhost:2000/api/test');
