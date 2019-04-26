function showAbout() {
  $(".active").fadeOut("slow", function() {
    $(".active").removeClass("active");

    $("#about").fadeIn("slow", function() {
      $("#about").addClass("active");
    });
  });
}

function showCareer() {
  $(".active").fadeOut("500", function() {
    $(".active").removeClass("active");

    $("#career").fadeIn("slow", function() {
      $("#career").addClass("active");
    });
  });
}

function showContacts() {
  $(".active").fadeOut("500", function() {
    $(".active").removeClass("active");

    $("#contacts").fadeIn("500", function() {
      $("#contacts").addClass("active");
    });
  });
}

function showEducation() {
  $(".active").fadeOut("500", function() {
    $(".active").removeClass("active");

    $("#education").fadeIn("500", function() {
      $("#education").addClass("active");
    });
  });
}
