//Burada "./" yapmıyoruz. sadece os ile devam ediyoruz.
//Burada bu modülün sağladığı tüm method ve özelliklere erişimim var
//Örneğin mevcut kullanıcı hakkında bilgi alabiliriz.
//info about current user
const os = require('os') 
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs)