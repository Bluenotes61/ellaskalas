function Jakt() {

  var lag1 = {
    qa:[
      { 
        s:"Börja att gå västerut på Målarevägen.",
        q:"Vilka siffror står på skylten till vänster om denna grind?", 
        a:["640908"],
        i:"lag1_1.jpg"
      },
      { 
        s:"Sväng till vänster på Folkparksvägen.",
        q:"När ni ser dessa träd så finns bakom er rygg en skylt. Skriv in telefonnumret på skylten.", 
        a:["046 - 12 70 95", "046-12 70 95", "046-127095"],
        i:"lag1_2.jpg"
      },
      { 
        s:"Fortsätt på Folkparksvägen.",
        q:"Vilken siffra står på containern?", 
        a:["25"],
        i:"lag1_3.jpg"
      },
      { 
        s:"Ta till vänster på Maskinvägen.",
        q:"Vad står klottrat på skylten intill containern?", 
        a:["who", "WHO"],
        i:"lag1_4.jpg"
      },
      { 
        s:"Fortsätt på Maskinvägen.",
        q:"Vilket företag finns på Maskinvägen 3?", 
        a:["note", "NOTE"],
        i:"lag1_5.jpg"
      },
      { 
        s:"Fortsätt på Maskinvägen.",
        q:"Vad står mitt på brunnen i gatan intill det ni ser på bilden?", 
        a:["D400", "d400", "D 400", "d 400"],
        i:"lag1_6.jpg"
      },
      { 
        s:"Fortsätt på Maskinvägen.",
        q:"Vad står på undre namnskylten på denna stolpe?", 
        a:["Palettskolan"],
        i:"lag1_7.jpg"
      },
      { 
        s:"Sväng in mot Palettskolan.",
        q:"Vilket är sista ordet i texten på skylten som sitter intill denna skylt?", 
        a:["Målarstugan", "Målarstugan."],
        i:"lag1_8.jpg"
      },
      { 
        s:"Fortsätt mot Målarevägen.",
        q:"Vilken siffra står runt hörnet?", 
        a:["2511"],
        i:"lag1_9.jpg"
      },
      { 
        s:"Fortsätt mot Målarevägen.",
        q:"När ni ser detta nummer, vilken siffra står först på översta skylten på stången bakom er rygg?", 
        a:["613"],
        i:"lag1_10.jpg"
      },
      { 
        s:"Ta till vänster på Målarevägen.",
        q:"Vilket är andra ordet på skylten mittemot denna brevlåda?", 
        a:["genomfart"],
        i:"lag1_11.jpg"
      }
    ],
    end: "Kolla i hallgarderoben!"
  };


  var lag2 = {
    qa:[
      { 
        s:"Börja att rakt fram på Glasmästarevägen.",
        q:"Vilket nummer har huset mitt emot denna brevlåda?", 
        a:["14"],
        i:"lag2_1.jpg"
      },
      { 
        s:"När Glasmästarevägen är slut, ta till vänster på cykelvägen.",
        q:"Vilket är understa ordet på lappen på stolpen intill detta träd?", 
        a:["RECORDS"],
        i:"lag2_2.jpg"
      },
      { 
        s:"Ta till höger på Folkparksvägen.",
        q:"Titta till höger. Vilket telefonnummer ser ni?", 
        a:["358500"],
        i:"lag2_3.jpg"
      },
      { 
        s:"Fortsätt på Folkparksvägen.",
        q:"Vilket nummer har trappuppgången mittemot denna skylt?", 
        a:["3C"],
        i:"lag2_4.jpg"
      },
      { 
        s:"Fortsätt på Folkparksvägen.",
        q:"Vad står överst till höger på skylten intill?", 
        a:["VÄSTER"],
        i:"lag2_5.jpg"
      },
      { 
        s:"Ta till höger på van Dürens väg.",
        q:"Skriv efternamnet på den som bor i lägenhet 331 i denna trappuppgång.", 
        a:["Bergström"],
        i:"lag2_6.jpg"
      },
      { 
        s:"Fortsätt på van Dürens väg.",
        q:"Vilket nummer står på boxen mittemot denna skylt?", 
        a:["640412"],
        i:"lag2_7.jpg"
      },
      { 
        s:"Ta till höger på Rörläggarevägen.",
        q:"Efternamn på dem som bor mittemot denna box?", 
        a:["Kinnander"],
        i:"lag2_8.jpg"
      },
      { 
        s:"Ta till höger på Målarevägen.",
        q:"Vad är första ordet på skylten mittemot detta garage?", 
        a:["Grannar"],
        i:"lag2_9.jpg"
      }
    ],
    end: "Kolla i hallgarderoben!"
  };


  var currq = 0;
  var lag = lag1;

  function init() {
    $(".question .answerbtn").on("click", function(){
    $(".question").fadeOut(1000);
      if (answerIsRight()) {
        currq++;
        if (isDone()) {
          showFinal();
        }
        else {
          $(".correct").fadeIn(1000, function(){
            getQuestion();
            setTimeout(function(){
              $(".correct").fadeOut(1000);
              $(".question").fadeIn(1000);
            }, 3000);
          });
        }
      }
      else {
        $(".wrong").fadeIn(1000, function(){
          setTimeout(function(){
            $(".wrong").fadeOut(1000);
            $(".question").fadeIn(1000);
          }, 3000);
        });
      }
    });
    getQuestion();
    $(".question").fadeIn(1000);
  }

  function getQuestion() {
    $(".question .qarea .direction").text(lag.qa[currq].s);
    $(".question .qarea .qimg img").attr("src", "/gfx/qimages/" + lag.qa[currq].i);
    $(".question .qarea .qtext").text(lag.qa[currq].q);
  }

  function answerIsRight() {
    return true;
  }

  function isDone() {
    return true;
  }

  function showFinal() {
    $(".background").css("background-image", "url(/gfx/hopp.gif)");
    $(".final").fadeIn(1000);
  }





  init();

}


jQuery(document).ready(function() {
  new Jakt;
});
