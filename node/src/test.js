var soap = require('soap');

 var parameters = {
    login: 'ServiceAccountINTEC',
    password: 'zVhdT3BB9',
    trace: 1,
    exceptions: 1,
    wsdl: 'http://demonstration.lecnam.net/services/enf_wsdl.php',
    uri: 'http://demonstration.lecnam.net/services/',
    location: 'http://demonstration.lecnam.net/services/index.php'
 };

console.log(parameters);
