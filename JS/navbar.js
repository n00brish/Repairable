<<<<<<< HEAD
function openPage(elmnt, backgroundColor, color) {

    // Remove the background color of all tablinks/buttons
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
      tab[i].style.backgroundColor = ""; 
    } 
    // Add the specific color to the button used to open the tab content
    /*elmnt.style.backgroundColor = backgroundColor;
    elmnt.style.color = color;

  }
/*function textColor(elmnt, backgroundColor, color){

  tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++){
      tab[i].style.textColor = "";
    }
    elmnt.style.backgroundColor = backgroundColor;
    elmnt.style.color = textcolor;

}
  
  
  /*
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click(); 

  HUSK HUSK! Ny funksjon for å beholde textfargen ved klikk

*/
=======
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tab;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tab = document.getElementsByClassName("tab");
  for (i = 0; i < tab.length; i++) {
    tab[i].style.backgroundColor = "";
  }

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
>>>>>>> e7d399c75cdf4ddfdaa29776330e1c4d3f25cab2
