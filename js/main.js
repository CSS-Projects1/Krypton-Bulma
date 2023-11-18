// Navbar
const navbar = document.querySelector('.nav-fixed');
// const navRem = document.querySelector('.nav-remove');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
        // navRem.classList.remove('img-1');
    } else {
        navbar.classList.remove('nav-active');
    }
};

// Tabs
// function openTab(event, tabId){

//     const tabcontent = document.getElementsByClassName('tabcontent');
//     for (let i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display ='none';
//     }

//     const tablinks = document.getElementsByClassName('tablinks');
//     for (let i = 0; i < tablinks.length; i++) {
//         tabcontent[i].className = tablinks[i].className.replace('is-active','');
//     }

//     document.getElementById(tabId).style.display ='block';
//     event.currentTarget.className += "is-active";
// }
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  var daysSinceLastWorkplaceAccident = countdown(507314280000, null, countdown.DAYS);
  console.log(daysSinceLastWorkplaceAccident);


