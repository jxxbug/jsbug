/*
东东农场互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 FruitShareCodes(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
  '',//账号二的好友shareCode，不同好友中间用@符号隔开
]
// 判断github action里面是否有东东农场互助码
let JD_shareCode_Arr = ''
try {
  let jdCookieNode = require('./jdCookie.js') ;
  let shareCodeJSON =require('./config/shareCodeJSON.js').shareCodeJSON
  let cookiesArr = []
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if(shareCodeJSON){
    let thisCodes = shareCodeJSON.FRUITSHARECODES
    if(thisCodes){
      JD_shareCode_Arr = Array(cookiesArr.length).fill(thisCodes);
      console.log(`使用config/shareCodeJSON.js的助力码${JD_shareCode_Arr.length}个\n`)
    }
  } 
} catch (error) {
  console.log(error)
}

if(JD_shareCode_Arr){
  shareCodes = JD_shareCode_Arr
} else if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
