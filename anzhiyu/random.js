var posts=["2025/08/03/首次尝试/","2025/08/03/tst/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };