function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$^&*_+-=-=.<>';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function gen(){
    var count = document.getElementById('character-count').value;
    var pass = document.getElementById('pass');
    console.log(count);
    pass.innerHTML = makeid(count);
}

function copy(){
    var pass = document.getElementById('pass');
    var password = pass.innerHTML;
    navigator.clipboard.writeText(password);
}
