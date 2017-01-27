function Start() {

  function init() {
    setTimeout(function(){
      $(".pop.start").addClass("active");
    }, 5000);    
  }

  init();
}


jQuery(document).ready(function() {
  new Start();
});
