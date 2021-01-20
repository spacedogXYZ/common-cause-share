function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

var urlParams = parseQuery(window.location.search);
var suppressPostShare = urlParams.hasOwnProperty('hidePopup') ||
  urlParams.hasOwnProperty('hidepopup') ||
  urlParams.hasOwnProperty('hide');
var showedPostShare = false;

function PostShare(event, delay, method) {
  if (!delay) {  
    delay = 500;
  }

  if(!showedPostShare && !suppressPostShare) {
    setTimeout(function(){
        MicroModal.show('postshare')
        showedPostShare = true
      }, delay);
  }

  if(method && window.dataLayer) {
    window.dataLayer.push({
      event: 'share',
      method: method,
     })
    
  }
  return true;
}

function FBMessage(url, text) {
  FB.ui({
    method: 'send',
    link: url,
    quote: text,
  }, PostShare);

  if(window.dataLayer) {
    window.dataLayer.push({
      event: 'share',
      method: 'messenger',
    });
  }
}

function FBShare(url, text) {
  FB.ui({
    method: 'share',
    href: url,
    quote: text,
  }, PostShare);

  if(window.dataLayer) {
    window.dataLayer.push({
      event: 'share',
      method: 'facebook',
    });
  }
}

MicroModal.init();