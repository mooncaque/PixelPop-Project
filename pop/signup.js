document.addEventListener("DOMContentLoaded", function() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    if (email) {
        document.getElementById("signupEmail").value = decodeURIComponent(email);
    }
});

function redirectToSignup() {
    var email = document.getElementById("email").value;
    window.location.href = 'signup.html?email=' + encodeURIComponent(email);
    return false;
}
