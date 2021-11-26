// zamiana split na 4 


function verify()
    /*Scope Closed:false | writes:false*/ {
    checkpass = document.getElementById('pass').value;

    if (checkpass.substring(0, 4 * 2) == 'picoCTF{') {
        if (checkpass.substring(7, 9) == '{n') {
            if (checkpass.substring(4 * 2, 4 * 4) == 'not_this') {
                if (checkpass.substring(3, 6) == 'oCT') {
                    if (checkpass.substring(4 * 6, 4 * 8) == '0a029}') {
                        if (checkpass.substring(6, 11) == 'F{not') {
                            if (checkpass.substring(4 * 4, 4 * 6) == '_again_5') {
                                if (checkpass.substring(12, 16) == 'this') {
                                    alert('Password Verified');
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        alert('Incorrect password');
    }
}