function PostShare(event, delay, method) {
  if (!delay) {  
    delay = 500;
  }
  setTimeout(function(){
      MicroModal.show('postshare')
    }, delay);

  if(method && window.dataLayer) {
    window.dataLayer.push({
      event: 'share',
      method: method,
     })
  }
  return true;
}

function FBMessage(url) {
  FB.ui({
    method: 'send',
    link: url,
  }, PostShare);

  if(window.dataLayer) {
    window.dataLayer.push({
      event: 'share',
      method: 'messenger',
    });
  }
}

function FBShare(url) {

  FB.ui({
    method: 'share',
    href: url,
  }, PostShare);

  if(window.dataLayer) {
    window.dataLayer.push({
      event: 'share',
      method: 'facebook',
    });
  }
}

MicroModal.init();