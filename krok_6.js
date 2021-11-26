// obliczyć mnożenie i można połączyć
// url: https://mindedsecurity.github.io/jstillery/# 
// picoCTF{not_this_again_50a029}

function verify()
    /*Scope Closed:false | writes:false*/ {
    checkpass = document.getElementById('pass').value;
    if (checkpass.substring(0, 8) == 'picoCTF{') {
        // if (checkpass.substring(7, 9) == '{n') {
        if (checkpass.substring(8, 16) == 'not_this') {
            //if (checkpass.substring(3, 6) == 'oCT') {
            if (checkpass.substring(24, 32) == '0a029}') {
                // if (checkpass.substring(6, 11) == 'F{not') {
                if (checkpass.substring(16, 24) == '_again_5') {
                    // if (checkpass.substring(12, 16) == 'this') {
                    alert('Password Verified');
                    // }
                }
                //}
            }
            // }
        }
        //}
    } else {
        alert('Incorrect password');
    }
}