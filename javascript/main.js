var config = {
    apiKey: "AIzaSyCss2YpS6Orxyb76nJhWUam0NUitu2dN64",
    authDomain: "jecrc-hackathon.firebaseapp.com",
    databaseURL: "https://jecrc-hackathon.firebaseio.com",
    projectId: "jecrc-hackathon",
    storageBucket: "jecrc-hackathon.appspot.com",
    messagingSenderId: "1043386055663"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  var gender = getInputVal('gender');  
  saveMessage(name, company, email, phone, message);
  document.querySelector('.alert').style.display = 'block';

  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  document.getElementById('contactForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message,
    gender:gender  
  });
}
