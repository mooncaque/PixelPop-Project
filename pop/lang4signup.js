

$(document).ready(function() {
       
    var previouslyClickedButton = localStorage.getItem('clickedButton');
    if (previouslyClickedButton) {
        $('#' + previouslyClickedButton).addClass('clicked');
    }

    $('.langs button').click(function() {
        
        $('.langs button').removeClass('clicked');
        
        
        $(this).addClass('clicked');

        
        localStorage.setItem('clickedButton', $(this).attr('id'));
    });
});




function switchToEnglish() {
  console.log("Switching to English")
  

  
  
  document.getElementById("signuptext").textContent = "Sign-Up";
  document.getElementById("signupbutton").textContent = "Sign-Up";
  document.getElementById("dont").textContent = "Already have an account?";

  document.getElementById("langselect").textContent = "Switch Languages";


}


function switchToSinhala() {
  console.log("Switching to Sinhala")
  

  
  
  document.getElementById("signuptext").textContent = "ලියාපදිංචිය";
  document.getElementById("signupbutton").textContent = "ලියාපදිංචිය";
  document.getElementById("dont").textContent = "දැනටමත් ගිණුමක් තිබේද?";

  document.getElementById("langselect").textContent = "භාෂා මාරු කරන්න";


}


function switchToTamil() {
  console.log("Switching to Tamil")
  

  
  
  document.getElementById("signuptext").textContent = "பதிவு";
  document.getElementById("signupbutton").textContent = "பதிவு";
  document.getElementById("dont").textContent = "ஏற்கனவே ஒரு கணக்கு உள்ளதா?";

  document.getElementById("langselect").textContent = "மொழிகளை மாற்றவும்";


}


function setLanguageFromStorage() {
    var selectedLanguage = localStorage.getItem('selectedLanguage');
    
    if (selectedLanguage === 'english') {
        switchToEnglish();
    } else if (selectedLanguage === 'sinhala') {
        switchToSinhala();
    } else if (selectedLanguage === 'tamil') {
        switchToTamil();
    } else {
        switchToEnglish();
    }
}


document.getElementById("englishBtn").addEventListener("click", function() {
  localStorage.setItem('selectedLanguage', 'english');
  switchToEnglish();
  
});
document.getElementById("sinhalaBtn").addEventListener("click", function() {
  localStorage.setItem('selectedLanguage', 'sinhala');
  switchToSinhala();
  
});
document.getElementById("tamilBtn").addEventListener("click", function() {
  localStorage.setItem('selectedLanguage', 'tamil');
  switchToTamil();
  
});


setLanguageFromStorage();




document.addEventListener("DOMContentLoaded", function() {
var welcomeElement = document.getElementById("welcome");
welcomeElement.classList.add("appear");
});



function redirectToFacebook() {
window.location.href = 'https://www.facebook.com';
}

function redirectToInstagram() {
window.location.href = 'https://www.instagram.com';
}

function redirectToEmail() {
window.location.href = 'mailto:example@example.com';
}
