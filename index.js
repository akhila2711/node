const url = require('url');
// const address = "https://localhost:3000/home?user=akhi";
// const parsedUrl = new URL(address);

// console.log(parsedUrl.hostname); // 'localhost'
// console.log(parsedUrl.pathname); // '/home'
// console.log(parsedUrl.searchParams.get('user')); // 'akhi'

// import os from 'os';
// console.log("OS Type", os.type());
// console.log("OS Platform", os.platform());
// console.log("Total Memory", os.totalmem());
// console.log("Free Memory", os.freemem());
// console.log("CPU Architecture", os.arch());
// console.log("CPU Info", os.cpus());
// console.log("Network Interfaces", os.networkInterfaces());
// console.log("Home Directory", os.homedir());
// console.log("Uptime", os.uptime());
// console.log("OS Release", os.release());
// console.log("OS Version", os.version());
// console.log("OS Load Average", os.loadavg());
// console.log("OS Constants", os.constants);

// console.log("OS Endianness", os.endianness());
// console.log("OS Temp Directory", os.tmpdir());

// console.log("OS User Info", os.userInfo());
// console.log("OS Release", os.release());
// console.log("OS Type", os.type());
// console.log("OS Platform", os.platform());
// console.log("OS Architecture", os.arch());  
// console.log("OS Network Interfaces", os.networkInterfaces());

const fs = require('fs');

// Example buffer
const imageBuffer = getImageBufferSomehow(); // Replace with your actual buffer

fs.writeFile('image.jpg', imageBuffer, (err) => {
  if (err) throw err;
  console.log('Image saved!');
});


