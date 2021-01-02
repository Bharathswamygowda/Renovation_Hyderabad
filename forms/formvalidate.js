$(document).ready(function() {
var delay = 2000;
$('.btn-default').click(function(e){
e.preventDefault();
var name = $('#name').val();
if(name == ''){
$('.message_box').html(
'<span style="color:red;">Enter Your Name!</span>'
);
$('#name').focus();
return false;
}

var email = $('#email').val();
if(email == ''){
$('.message_box').html(
'<span style="color:red;">Enter Email Address!</span>'
);
$('#email').focus();
return false;
}
if( $("#email").val()!='' ){
if( !isValidEmailAddress( $("#email").val() ) ){
$('.message_box').html(
'<span style="color:red;">Provided email address is incorrect!</span>'
);
$('#email').focus();
return false;
}
}

var phonenumber = $('#pumber').val();
if(phonenumber == ''){
$('.message_box').html(
'<span style="color:red;">Enter Your Phone Number</span>'
);
$('#pumber').focus();
return false;
}	


var message = $('#message').val();
if(message == ''){
$('.message_box').html(
'<span style="color:red;">Enter Your Message Here!</span>'
);
$('#message').focus();
return false;
}	







$.ajax
({
type: "POST",
url: "forms/talk_to_designer.php",
data: "name="+name+"&email="+email+"&pumber="+phonenumber + "&message="+message,
beforeSend: function() {
$('.message_box').html(
'<img src="images/Loader.gif" width="25" height="25"/>'
);
},		 
success: function(data)
{
$("#myform").trigger("reset");
setTimeout(function() {
$('.message_box').html(data);
}, delay);

}
});
});

});

//Email validation Function	
function isValidEmailAddress(emailAddress) {
var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
return pattern.test(emailAddress);
};


