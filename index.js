function sendClick() {
    var number = document.getElementById("number").value;
    var message = document.getElementById("message").value;
    message = message.split(' ').join('%20')
    window.location = 'https://api.whatsapp.com/send?phone=' + number + '&text=%20'+ message;
}