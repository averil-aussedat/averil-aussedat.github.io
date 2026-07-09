
// Renders an element visible
function toggleVisibility(theID) {
  var elem = document.getElementById(theID);
  var caret = document.getElementById(theID + 'caret');
  if (elem.style.display === "block") {
    elem.style.display = "none";
    caret.style.rotate = "0deg";
  } else {
    elem.style.display = "block";
    caret.style.rotate = "90deg";
  }
}

// renders all sections visible
function toggleSections() {
  var sects = document.getElementsByClassName("sectioncontent");
  firstsect = sects[0];

  if (firstsect.style.display === "block") {
    for (const thesect of sects) {
      thesect.style.display = "none";
      document.getElementById(thesect.id + 'caret').style.rotate = "0deg";
    }
  } else {
    for (const thesect of sects) {
      thesect.style.display = "block";
      document.getElementById(thesect.id + 'caret').style.rotate = "90deg";
    }
  }
}
