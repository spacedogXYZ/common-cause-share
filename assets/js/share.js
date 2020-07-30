function PostShare() {
  MicroModal.show('postshare'); 
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