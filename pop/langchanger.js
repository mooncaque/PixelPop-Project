

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
      

      
      
	  document.getElementById("service0").textContent = "Our Services";
      
     
      document.getElementById("langselect").textContent = "Switch Languages";

      document.getElementById("formcontent1").textContent = "Sign-Up to Our Site for News";
      document.getElementById("formcontent2").textContent = "Sign-Up";
      document.getElementById("application").textContent = "Contact Us through Socials";




    }
    
    
    function switchToSinhala() {
      console.log("Switching to Sinhala")
      
 
      
      
	  document.getElementById("service0").textContent = "අපගේ සේවාවන්";
      
     
      document.getElementById("langselect").textContent = "භාෂා මාරු කරන්න";


      document.getElementById("formcontent1").textContent = "අපගේ වෙබ් අඩවියට ලියාපදිංචි වන්න";
      document.getElementById("formcontent2").textContent = "ලියාපදිංචිය";
      document.getElementById("application").textContent = "සමාජ ජාල හරහා අප හා සම්බන්ධ වන්න";


    }
    
    
    function switchToTamil() {
      console.log("Switching to Tamil")
      

      
      
	  document.getElementById("service0").textContent = "எங்கள் சேவைகள்";
      
   
      document.getElementById("langselect").textContent = "மொழிகளை மாற்றவும்";



      document.getElementById("formcontent1").textContent = "இணையதளத்தில் பதிவு செய்யவும்";
      document.getElementById("formcontent2").textContent = "பதிவு";
      document.getElementById("application").textContent = "சமூக வலைப்பின்னல்கள் மூலம் எங்களுடன் இணையுங்கள்";



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
