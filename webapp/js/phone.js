function onEveryInput(){
	
	var phoneNumber = document.getElementById("idPhoneIp").value;
	
	var regExp = /^[789][0-9]{9}$/;
	if(!regExp.test(phoneNumber)){
		document.getElementById("idPhoneMsg").innerText = "Invalid Number, Enter 10 Digits";
		document.getElementById("idPhoneMsg").style.color = "Red";
	}else{
		document.getElementById("idPhoneMsg").innerText = "Valid Number";
		document.getElementById("idPhoneMsg").style.color = "Green";
	}
	
	
}