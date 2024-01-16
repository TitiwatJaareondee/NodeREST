function isValidIP(ipAddress) {
    const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/; 
  
    if (ipv4Regex.test(ipAddress)) {
      
      const octets = ipAddress.split('.');
      for (let i = 0; i < 4; i++) {
        const octet = parseInt(octets[i], 10);
        if (isNaN(octet) || octet < 0 || octet > 255) {
          return false; 
        }
      }
      return true; 
    }
  
    return false; 
  }
  
  console.log(isValidIP("1.2.3.4"));
  console.log(isValidIP("1.2.3"));
  console.log(isValidIP("1.2.3.4.5"));
  console.log(isValidIP("123.45.67.89"));
  console.log(isValidIP("123.456.78.90"));
  console.log(isValidIP("123.045.067.089"));