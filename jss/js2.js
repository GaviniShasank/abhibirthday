 function checkPassword() {
        var passwordInput = document.getElementById('password');
        var password = passwordInput.value.trim(); 
    
        // Change the password here
        var correctPassword = "Shasank@123";
    
        if (password === "") {
            alert("Please enter a password.");
            return false;
        }
    
        if (password === correctPassword) {
            window.location.href = "about.html";
            return false; 
        } else {
            alert("Incorrect password. Heyi senior, You can do it!");
            passwordInput.value = ""; 
            passwordInput.focus(); 
            return false; 
        }
    }