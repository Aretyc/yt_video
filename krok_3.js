// zmienić nazwy na bardziej zrozumiałe 
// url: https://lelinhtinh.github.io/de4js/  

function verify() {
    checkpass = document.getElementById('pass').value;
    split = 0x4;
    if (checkpass.substring(0x0, split * 0x2) == 'picoCTF{') {
        if (checkpass.substring(0x7, 0x9) == '{n') {
            if (checkpass.substring(split * 0x2, split * 0x2 * 0x2) == 'not_this') {
                if (checkpass.substring(0x3, 0x6) == 'oCT') {
                    if (checkpass.substring(split * 0x3 * 0x2, split * 0x4 * 0x2) == '0a029}') {
                        if (checkpass.substring(0x6, 0xb) == 'F{not') {
                            if (checkpass.substring(split * 0x2 * 0x2, split * 0x3 * 0x2) == '_again_5') {
                                if (checkpass.substring(0xc, 0x10) == 'this') {
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