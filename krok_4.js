// zamieni hex na inne liczby 
// url: https://mindedsecurity.github.io/jstillery/# 

function verify()
    /*Scope Closed:false | writes:false*/ {
    checkpass = document.getElementById('pass').value;
    split = 4;
    if (checkpass.substring(0, split * 2) == 'picoCTF{') {
        if (checkpass.substring(7, 9) == '{n') {
            if (checkpass.substring(split * 2, split * 4) == 'not_this') {
                if (checkpass.substring(3, 6) == 'oCT') {
                    if (checkpass.substring(split * 6, split * 8) == '0a029}') {
                        if (checkpass.substring(6, 11) == 'F{not') {
                            if (checkpass.substring(split * 4, split * 6) == '_again_5') {
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