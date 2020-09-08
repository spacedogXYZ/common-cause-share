function PostShare(event, delay) {
  if (!delay) {  
    delay = 500;
  }
  setTimeout(function(){
      MicroModal.show('postshare')
    }, delay);
  return true;
}

function FBMessage(url) {
  FB.ui({
    method: 'send',
    link: url,
  }, PostShare);
}

function FBShare(url) {
  FB.ui({
    method: 'share',
    href: url,
  }, PostShare);
}

MicroModal.init();