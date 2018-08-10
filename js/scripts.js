//Back-end
function addA(a1, a2, a3, a4, a5, a6) {
  if (a1 === "a") {
    a1 = 1
  } else {
    a1 = 0
  };

  if (a2 === "a") {
    a2 = 1
  } else {
    a2 = 0
  };

  if (a3 === "a") {
    a3 = 1
  } else {
    a3 = 0
  };

  if (a4 === "a") {
    a4 = 1
  } else {
    a4 = 0
  };

  if (a5 === "a") {
    a5 = 1
  } else {
    a5 = 0
  };

  if (a6 === "a") {
    a6 = 1
  } else {
    a6 = 0
  };

  return a1 + a2 + a3 + a4 + a5 + a6;
}

function addB(b1, b2, b3, b4, b5, b6) {
  if (b1 === "b") {
    b1 = 1
  } else {
    b1 = 0
  };

  if (b2 === "b") {
    b2 = 1
  } else {
    b2 = 0
  };

  if (b3 === "b") {
    b3 = 1
  } else {
    b3 = 0
  };

  if (b4 === "b") {
    b4 = 1
  } else {
    b4 = 0
  };

  if (b5 === "b") {
    b5 = 1
  } else {
    b5 = 0
  };

  if (b6 === "b") {
    b6 = 1
  } else {
    b6 = 0
  };

  return b1 + b2 + b3 + b4 + b5 + b6;
}

function addC(c1, c2, c3, c4, c5, c6) {
  if (c1 === "c") {
    c1 = 1
  } else {
    c1 = 0
  };

  if (c2 === "c") {
    c2 = 1
  } else {
    c2 = 0
  };

  if (c3 === "c") {
    c3 = 1
  } else {
    c3 = 0
  };

  if (c4 === "c") {
    c4 = 1
  } else {
    c4 = 0
  };

  if (c5 === "c") {
    c5 = 1
  } else {
    c5 = 0
  };

  if (c6 === "c") {
    c6 = 1
  } else {
    c6 = 0
  };

  return c1 + c2 + c3 + c4 + c5 + c6;
}



//Front-end
$(document).ready(function(){
  $("#quiz button").click(function(event){
    event.preventDefault();
    $("#quiz, .title").hide();

    var q1 = $("input:radio[name=Q1]:checked").val();
    var q2 = $("input:radio[name=Q2]:checked").val();
    var q3 = $("input:radio[name=Q3]:checked").val();
    var q4 = $("input:radio[name=Q4]:checked").val();
    var q5 = $("input:radio[name=Q5]:checked").val();
    var q6 = $("input:radio[name=Q6]:checked").val();

    var totalA = addA(q1, q2, q3, q4, q5, q6);
    var totalB = addB(q1, q2, q3, q4, q5, q6);
    var totalC = addC(q1, q2, q3, q4, q5, q6);

    if (totalA >= totalB && totalA >= totalC) {
      if (totalA > totalB && totalA > totalC) {
        $("#ruby-rails").show();
      } else if (totalA === totalB && totalA > totalC) {
        $("#tie, #ruby-rails, #css-react").show();
      } else if (totalA > totalB && totalA === totalC) {
        $("#tie, #ruby-rails, #c-net").show();
      } else {
        $("#tie, #ruby-rails, #css-react, #c-net").show();
      }
    } else if (totalB >= totalA && totalB >= totalC) {
      if (totalB > totalA && totalB > totalC) {
        $("#css-react").show();
      } else {
        $("#tie, #css-react, #c-net").show();
      }
    } else {
      $("#c-net").show();
    };
    $("#again").show();
  });

  $(".results button").click(function(){
    location.reload();
  });

});
