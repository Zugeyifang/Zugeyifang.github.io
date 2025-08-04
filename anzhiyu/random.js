var posts=["2025/08/03/tst/","2025/08/03/首次尝试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };