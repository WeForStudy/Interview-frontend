function createXHR() {
  if (typeof XMLHttpRequest !== 'undefined') {
    return new XMLHttpRequest();
  } else if(typeof ActiveXObject !== 'undefined') {
    return new ActiveXObject();
  }
}

function sendRequest( url, method = 'GET', options = {}) {
  const { timeout = 10 , async = true, cancelCallback } = options;
  const xhr = createXHR();
  const request =  new Promise((res, rej) => {
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
        res(data);
      }
    };
    xhr.send();
  })
  if (!timeout) {
    return request;
  } else {
    const cancel = new Promise((res, rej) => {
      setTimeout(() => {
        if (xhr.readyState !== 4) {
          xhr.abort();
          rej('cancelled')
          cancelCallback && cancelCallback();
        }
      }, timeout * 1000);
    })
    return Promise.race([request, cancel])
  }
}

sendRequest('http://localhost:2000/api/test', 'GET', { timeout: 1 }).then(res => {
  console.info(res);
}).catch(err => console.error(err));
