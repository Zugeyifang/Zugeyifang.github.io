var posts=["2025/08/13/8-13记事/","2025/09/21/祝我自己生日快乐/","2025/09/02/上学前的思索/","2025/08/04/起点、起步/","2025/10/09/预祝成功，一战成硕！一起加油！/","2025/08/03/首次尝试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };