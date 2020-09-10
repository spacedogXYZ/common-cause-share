var showedPostShare = false;

function PostShare(event, delay, method) {
  if (!delay) {  
    delay = 500;
  }

  if(!showedPostShare) {
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