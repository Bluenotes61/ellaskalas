function Jakt() {

  var lagen = {
    lag1: {
      qa:[
        { 
          s:"Börja att gå västerut på Målarevägen.",
          q:"Vilka siffror står på boxen intill?", 
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
          q:"Vad står mitt på gatubrunnen intill?", 
          a:["D400", "d400", "D 400", "d 400"],
          i:"lag1_6.jpg"
        },
        { 
          s:"Fortsätt på Maskinvägen.",
          q:"Vad står på undre namnskylten på stolpen?", 
          a:["Palettskolan"],
          i:"lag1_7.jpg"
        },
        { 
          s:"Sväng in mot Palettskolan.",
          q:"Vilket är sista på skylten intill?", 
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
        },
        { 
          s:"Fortsätt på Målarevägen.",
          q:"Vad är första ordet på skylten mittemot detta garage?", 
          a:["Grannar"],
          i:"lag1_12.jpg"
        },
        { 
          s:"Gå in på Målarevägen 29.",
          q:"Vad är telefonnumret?", 
          a:["0733-915506"],
          i:"lag1_13.jpg"
        }
      ],
      end: {
        s:"Gå in och hitta sista ledtråden på Ellas rum.",
        q:"Samarbeta sedan med det andra laget för att hitta skatten.", 
        i:"lag1_final.jpg"
      }
    },
    lag2: {
      qa:[
        { 
          s:"Börja att rakt fram på Glasmästarevägen.",
          q:"Vilket nummer har huset mitt emot?", 
          a:["14"],
          i:"lag2_1.jpg"
        },
        { 
          s:"När Glasmästarevägen är slut, ta till vänster på cykelvägen.",
          q:"Vilket är understa ordet på lappen på stolpen intill?", 
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
          q:"Vilket nummer har trappuppgången mittemot?", 
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
          q:"Efternamnet på den som bor i lägenhet 331.", 
          a:["Bergström"],
          i:"lag2_6.jpg"
        },
        { 
          s:"Fortsätt på van Dürens väg.",
          q:"Vad står under hålet?", 
          a:["Metallförpackningar"],
          i:"lag2_7.jpg"
        },
        { 
          s:"Fortsätt på van Dürens väg.",
          q:"Vad är numret på huset?", 
          a:["43A"],
          i:"lag2_8.jpg"
        },
        { 
          s:"Sväng till höger på Hårlemans väg.",
          q:"Vad är telefonnumret?", 
          a:["0738 - 725 721", "0738-725 721", "0738-725721"],
          i:"lag2_9.jpg"
        },
        { 
          s:"Fortsätt på Hårlemans väg.",
          q:"Vad står på gatubrunnen?", 
          a:["FV"],
          i:"lag2_10.jpg"
        },
        { 
          s:"Sväng till höger på cykelvägen.",
          q:"Vilket telefonnummer?", 
          a:["0771-41 11 00", "0771-411100"],
          i:"lag2_11.jpg"
        },
        { 
          s:"Ta till vänster på Plåtslagarevägen.",
          q:"Efternamn på dem som bor mittemot?", 
          a:["Kinnander"],
          i:"lag2_12.jpg"
        },
        { 
          s:"Gå in på Målarevägen 29.",
          q:"Vad heter denna?", 
          a:["Weber"],
          i:"lag2_13.jpg"
        }
      ],
      end: {
        s:"Gå in och hitta sista ledtråden i köket.",
        q:"Samarbeta sedan med det andra laget för att hitta skatten.", 
        i:"lag2_final.jpg"
      }
    }
  };


  var currq = 0;
  var lag;

  function init() {
    $(".pop.start a.button").on("click", function(){
      var lagid = $(this).data("lag");
      lag = lagen[lagid];
      $(".final .clue").text(lag.end);
      getQuestion();
      $(".pop.start").slideUp(1000, function(){
        $(".question").slideDown(1000);
      });
    });
 
    $(".question .answerbtn").on("click", function(){
      $(".question").fadeOut(1000, function(){
        if (answerIsRight()) {
          currq++;
          if (isDone()) {
            showFinal();
          }
          else {
            getQuestion();
            $(".correct").fadeIn(1000);
          }
        }
        else {
          $(".wrong").fadeIn(1000);
        }
      });
    });

    $(".correct a.button").on("click", function(){
      $(".correct").fadeOut(1000, function(){
        $(".question").fadeIn(1000);
      });
    });
    
    $(".wrong a.button").on("click", function(){
      $(".wrong").fadeOut(1000, function(){
        $(".question").fadeIn(1000);
      });
    });

    $(".final .button").on("click", function(){
      $(".final").fadeOut(1000);
    });

    setTimeout(function(){
      $(".pop.start").slideDown(1000);
    }, 5000);    
  }

  function getQuestion() {
    $(".question .qarea .direction").text(lag.qa[currq].s);
    $(".question .qarea .qimg img").attr("src", "/gfx/qimages/" + lag.qa[currq].i);
    $(".question .qarea .qtext").text(lag.qa[currq].q);
    $(".question input.answer").val("");
  }

  function answerIsRight() {
    var answer = $(".question input.answer").val();
    var ok = false;
    for (var i=0; !ok && i < lag.qa[currq].a.length; i++)
      ok = (answer.toLowerCase() == lag.qa[currq].a[i].toLowerCase());
    return ok;
  }

  function isDone() {
    return currq == lag.qa.length;
  }

  function showFinal() {
    $(".background").css("background-image", "url(/gfx/hopp.gif)");
    setTimeout(function(){
      $(".final .qarea .direction").text(lag.end.s);
      $(".final .qarea .qimg img").attr("src", "/gfx/qimages/" + lag.end.i);
      $(".final .qarea .qtext").text(lag.end.q);
      $(".final").slideDown(1000);
    }, 5000);
  }


  init();

}


jQuery(document).ready(function() {
  new Jakt;
});
