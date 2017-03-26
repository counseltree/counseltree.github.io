<script>
    function postContactToGoogle() {
	var name=$('#name').val();
	var email=$('#email').val();
	var role=$('#role').val();
	var phone=$('#phone').val();
	var question=$('#question').val();
	var other=$('#other').val();
$.ajax({
url:"https://docs.google.com/forms/d/e/1FAIpQLSezDPOBR1EnX9wHZiSfvCmZLVVJNDEx9P7GjUYHSuTScqsMug/formResponse",data:{"entry.1033867345":name,"entry.1922753883":email,"entry.1481280500":role,"entry.442283225":phone,"entry.976111059":question,"entry.1618255132":other},type:"POST",dataType:"xml",statusCode: {0:function() { window.location.replace("thankyou.html");},200:function(){window.location.replace("thankyou.html");}}
});
}


</script>