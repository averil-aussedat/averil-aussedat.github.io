// Renders an element visible. Beware, the argument must be the unique ID.
function toggleVisibility(theID) {
  var elem = document.getElementById(theID);
  if ((elem.style.display === "") || (elem.style.display === "none")) {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}
