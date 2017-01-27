function Start() {

  function init() {
    setTimeout(function(){
      $(".pop.start").slideDown(1000);
    }, 5000);    
  }

  init();
}


jQuery(document).ready(function() {
  new Start();
});
