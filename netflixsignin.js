function subfunc(){
    var email=document.getElementById('ema').value;
    var password=document.getElementById('pass').value;
    alert(email+password);

    var em=localStorage.setItem(email,'email');
    var pw=localStorage.setItem(password,'password');
    
}
function change() {
    var cont = document.getElementById('extra');
    if (cont.style.display == 'block') {
        cont.style.display = 'none';

        document.getElementById(extra).value = 'Hide DIV';
    }
    else {
        cont.style.display = 'block';
        document.getElementById(extra).value = 'Show DIV';
    }
}