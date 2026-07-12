
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

// expands/collapses abstract in program tables
function toggleAbstracts(theID) {
  var thecaret = document.getElementById(theID + 'abscaret');
  var theabstracts = document.getElementsByClassName(theID + 'abs');

  if (thecaret.style.rotate === "0deg") {
    thecaret.style.rotate = "90deg";
    for (const theabs of theabstracts) {
      theabs.style['white-space'] = "unset";
    }
  } else {
    thecaret.style.rotate = "0deg";
    for (const theabs of theabstracts) {
      theabs.style['white-space'] = "nowrap";
      // theabs.style.white-space = "nowrap";
    }
  }
}