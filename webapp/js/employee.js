function onblurEmployeeName(){
	// first check the entries in idEmpIp
	var empName = document.getElementById("idEmpIp");
	debugger;
 var empNameValue = empName.value;
 
 if(empNameValue.length === 0){
 	document.getElementById("idEmpMsg").innerText = "Name is Required";
 	document.getElementById("idEmpMsg").setAttribute("style", "color:red");
 }else{
 	var regExp = /^[A-Z][a-z]{1,}\s[A-z][a-z]{1,}$/;
 	
 		debugger;
 	if(!regExp.test(empNameValue)){
 	
 			document.getElementById("idEmpMsg").innerText = "Invalid Name eg: Surender Naik";
 	document.getElementById("idEmpMsg").setAttribute("style", "color:red");
 	}else{
 			document.getElementById("idEmpMsg").innerText = "Valid Name";
			document.getElementById("idEmpMsg").setAttribute("style", "color:green");
 	}
 }
 
}