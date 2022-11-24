function ValidateIPaddress(inputText)
 {
 var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
 if(ipv4_address.value.match(ipformat))
  {
    document.form-group.ipv4_address.focus();
    return true;
  }
 else
  {
    alert("You have entered an invalid IP address!");
    document.form-group.ipv4_address.focus();
    return false;
  }
 }
