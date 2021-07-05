const path = require('path');
const fs = require('fs');
const exec = require('child_process').exec;
const root = path.resolve(__dirname, '../');
// const root = path.join(__dirname);

let date = new Date()
let loggerDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getHours()}`

fs.unlink(`logs/2logger.txt`, function (err) {
})
fs.exists('logs', (exists) => {
  if (!exists) {
    fs.mkdir('logs', (exists) => {
      console.log('创建目录 logs')
    })
  } else {
    console.log('logs目录已经存在')
  }
})
console.log('当前运行目录：' + root)
console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)

function doWriteFile(file, str, flag) {
  // 写入文件内容（如果文件不存在会创建一个文件）
  //  { 'flag': 'a' } 文件末尾追加内容
  let path = 'logs/' + file + '.txt'
  fs.writeFile(path, str, { 'flag': flag || '' }, function (err) {
    console.log(str + '' + file)
    str = str || ''
    time = str.substr(str.indexOf('🕛') + 2)
    time.substr(0, time.indexOf('秒') + 1)
    time = (time || '').length < 20 ? time : ''
    let d = new Date()
    console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} 写入日志文件 ${path} 耗时：${time}`)
  });
}





//不执行的js文件
var notList = [
  "00shareCodeJSON.js",
  "Env.min.js",
  "format_share_jd_code.js",
  "getJDCookie.js",
  "index.js",
  "jdCookie.js",
  "jdDreamFactoryShareCodes.js",//null
  "jdFactoryShareCodes.js",//null
  "jdFruitShareCodes.js",//null
  "jdJxncShareCodes.js",//null
  "jdJxncTokens.js",//null  
  "jdPetShareCodes.js",//null
  "jdPlantBeanShareCodes.js",//null
  "jd_crazy_joy_coin.js",//挂机不会停止的 屏蔽
  "JS_USER_AGENTS.js",
  "onlyOneExecute.js",
  "sendNotify.js",
  "smartReplace.js",
  "tencentscf.js",
  "USER_AGENTS.js",
  "JD_extra_cookie.js",
  "jx_cfdtx.js",
  "jd_joy_help.js",
  "jd_delCoupon.js",//删除优惠券🎟（未设定自动运行，删券慎用）
  "00myCookies.js",//
  "00shareCodeJSON.js",//
  "0testCookie.js",//

  // 执行耗时长的任务启动脚本时只启动一次
  // "jd_speed_sign.js",//7765.434 秒
  // "jd_xtg.js",//2450.991 秒
  // "jd_star_shop.js",//3563.573 秒  6557.1 秒
  // "jd_carnivalcity.js",//5107.722 秒  14710.556 秒


  // "jdSuperMarketShareCodes.js",
  // "jd_bean_change.js",
  // "jd_bean_home.js",
  // "jd_bean_sign.js",
  // "jd_beauty.js",
  // "jd_blueCoin.js",
  // "jd_bookshop.js",
  // "jd_car.js",
  // "jd_car_exchange.js",
  // "jd_cash.js",
  // "jd_cash_exchange.js",
  // "jd_cfd.js",
  // "jd_city.js",
  // "jd_club_lottery.js",
  // "jd_crazy_joy.js",
  // "jd_crazy_joy_bonus.js",
  // "JD_DailyBonus.js",
  // "jd_daily_egg.js",
  // "jd_daily_lottery.js",
  // "jd_dreamFactory.js",
  // "jd_family.js",
  // "jd_fruit.js",
  // "jd_get_share_code.js",
  // "jd_global.js",
  // "jd_gold_creator.js",
  // "jd_half_redrain.js",
  // "jd_health.js",
  // "jd_health_collect.js",
  // "jd_jdfactory.js",
  // "jd_jdzz.js",
  // "jd_jin_tie.js",
  // "jd_joy.js",
  // "jd_joy_feedPets.js",
  // "jd_joy_reward.js",
  // "jd_joy_run.js",
  // "jd_joy_steal.js",
  // "jd_jump.js",
  // "jd_jxnc.js",
  // "jd_kd.js",
  // "jd_live.js",
  // "jd_live_redrain.js",
  // "jd_lotteryMachine.js",
  // "jd_market_lottery.js",
  // "jd_moneyTree.js",
  // "jd_ms.js",
  // "jd_necklace.js",
  // "jd_nzmh.js",
  // "jd_pet.js",
  // "jd_pigPet.js",
  // "jd_pk.js",
  // "jd_plantBean.js",
  // "jd_priceProtect.js",
  // "jd_rankingList.js",
  // "jd_redPacket.js",
  // "jd_sgmh.js",
  // "jd_shake.js",
  // "jd_shop.js",
  // "jd_shoplottery.js",
  // "jd_ShopSign.js",
  // "jd_small_home.js",
  // "jd_speed.js",
  // "jd_superMarket.js",
  // "jd_super_redrain.js",
  // "jd_syj.js",
  // "jd_try.js",
  // "jd_unsubscribe.js",
  // "jd_speed_redpocke.js",
  // "jd_xtg_help.js",
  // "jd_zoo.js",
  // "jx_sign.js",
  // "monk_shop_lottery.js",


  // "jd_618Opencard01.js",
  // "jd_618Opencard03.js",
  // "jd_618Opencard05.js",
  // "jd_dragonboat.js",
  // "jd_hby_lottery.js",
  // "jd_mcxhd_brandcity.js",
  // "jd_zooCollect.js",

]
function not(a) {
  return !notList.includes(a)
}

var runFileList = []
var filelist = fs.readdirSync(root)
console.log('读取目录文件。。。')
for (let i = 0; i < filelist.length; i++) {
  const file = filelist[i];
  if (file && not(file) && /\.(js)$/.test(file)) {
    runFileList.push(file)
  }
}
// console.log('文件总数：'+filelist.length)
console.log('要执行的脚本数量：' + runFileList.length)
// console.log(runFileList)

runTask();


let taskLog = {}

function runTask() {
  for (let i = 0; i < runFileList.length; i++) {
    const thisFile = runFileList[i];
    let code = 'node ' + thisFile
    runScript(code, thisFile)
  }

  setInterval(function () {
    let date = new Date();
    let s = date.getSeconds();//(0 ~ 59)
    let m = date.getMinutes();//(0 ~ 59)
    let h = date.getHours();//(0 ~ 23)  
    let key = h + '_' + m
    if (!taskLog[key]) {
      taskLog[key] = true
      console.log(`时间${h}:${m}:${s} 查找需要执行的任务...`)
      for (let i = 0; i < runFileList.length; i++) {
        const thisFile = runFileList[i];
        if (isTheTime(thisFile, date)) {
          let code = 'node ' + thisFile
          runScript(code, thisFile)
        }
      }
    }
  }, 1000);
}

function runScript(code, file) {
  let d = new Date()
  console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} 执行脚本: ${code}`);

  exec(code, (error, stdout, stderr) => {
    error = error || ''
    stderr = stderr || ''
    stdout = stdout || ''
    doWriteFile(file, stdout)
    if (error) {
      console.log(`error: ${file}:${error}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${file}:${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
  });
}




const cronMap = {
  'jd_618Opencard01.js': '16 3,13 3-18 6 *',//大牌联合618提前购
  'jd_618Opencard02.js': '16 3,13 3-19 6 *',//大牌强联合好物提前购
  'jd_618Opencard03.js': '0 3,13 3-19 6 *',//大牌强联合好物提前购
  'jd_618Opencard04.js': '7 3,13 3-19 6 *',//大牌联合宠爱有礼
  'jd_618Opencard05.js': '5 3,13 3-19 6 *',//大牌联合'臻'宠粉丝
  'jd_bean_change.js': '0 18 * * *',//京豆昨日收益
  'jd_bean_home.js': '12 22 * * *',//京东首页领京豆
  'jd_beauty.js': '1 7,12,19 * * *',//京东美丽研究院
  'jd_blueCoin.js': '5 16 * * *',//京小超领蓝币
  'jd_bookshop.js': '1 8,12,18 * * *',//京东口袋书店
  'jd_brandcarnivalcity.js': '0 * * * *',//品牌狂欢城
  'jd_car.js': '16 22 * * *',//京东汽车
  'jd_carnivalcity.js': '0 5,11,14,17 * * *',//手机狂欢城
  'jd_cash.js': '5 * * * *',//签到领现金😅
  'jd_cfd.js': '5 0,5,11 * * *',//京喜财富岛
  'jd_club_lottery.js': '20 16 * * *',//抽京豆
  // 'jd_crazy_joy_coin.js':'0 0/5 * * *',//京东疯狂JOY挂机
  'jd_crazy_joy.js': '0 20 * * *',//京东疯狂JOY
  'jd_daily_bounds.js': '15 16 * * *',//京东每日签到
  'jd_daily_egg.js': '22 16 * * *',//京东金融天天提额
  'jd_daily_lottery.js': '13 1,22,23 * * *',//JD每日抽奖
  // 'jd_delCoupon.js':'',//删除优惠券🎟（未设定自动运行，删券慎用）
  'jd_dragonboat.js': '15 2,13 1-19 6 *',//龙舟🐉
  'jd_dreamFactory.js': '0 */1 * * *',//京喜工厂
  'jd_flipcards.js': '1 0-23/1 * 6 *',//翻翻乐
  'jd_fruit.js': '0 3,9,16,22 * * *',//京东农场
  'jd_get_share_code.js': '0 0 * * *',//
  'jd_gold_creator.js': '10 9,21 * * *',//
  'jd_half_redrain.js': '30 0,1-23/1 * * *',//半点京豆雨
  'jd_hby_lottery.js': '0 12 * * *',//主会场红包雨
  'jd_health_collect.js': '5-45/20 * * * *',//JD健康收集
  'jd_health.js': '0 6,15,20 * * *',//JD健康
  'jd_jdfactory.js': '30 18,23 * * *',//东东工厂
  'jd_jdzz.js': '10 15,16,17 * * *',//京东赚赚小程序
  'jd_jin_tie.js': '10 8 * * *',//领金贴
  'jd_joy_feedPets.js': '15 */1 * * *',//京东宠汪汪喂食🐕
  'jd_joy_reward.js': '0 0-16/8 * * *',//宠汪汪积分兑换京豆🐕
  'jd_joy_run.js': '0 1-13/2 * * *',//宠汪汪2🐕
  'jd_joy_steal.js': '0 0-16/24 * * *',//京东宠汪汪偷好友狗粮和积分🐕
  'jd_joy.js': '15 */7 * * *',//京东宠汪汪🐕
  'jd_jump.js': '15 0-23/2 * * *',//跳跳乐瓜分京豆
  'jd_jxnc.js': '0 1,10 * * *',//京喜农场
  'jd_kd.js': '18 4,16,22 * * *',//京东快递签到
  'jd_limitBox.js': '30 7,19 1-18 6 *',//限时盲盒
  'jd_live.js': '10-20/5 12 * * *',//京东直播📳
  'jd_lotteryMachine.js': '17 16 * * *',//京东抽奖机
  'jd_market_lottery.js': '4 2 * * *',//幸运大转盘
  'jd_mcxhd_brandcity.js': '0 0-23/1 * * *',//新潮品牌狂欢
  'jd_mohe.js': '0 0-23/4 * * *',//5G盲盒
  'jd_moneyTree.js': '20 */3 * * *',//京东摇钱树
  'jd_ms.js': '0 1 * * *',//京东秒秒币
  'jd_necklace.js': '0 13,17 * * *',//点点券
  'jd_nzmh.js': '13 4,10,17 * * *',//京东女装盲盒📦
  'jd_pet.js': '40 4,10,23 * * *',//京东萌宠
  'jd_petPig.js': '23 16 * * *',//京东金融养猪猪🐖
  'jd_pk.js': '15 1,6,11 17-31 5 *',//京享值pk
  'jd_plantBean.js': '0 5,16,20 * * *',//京东种豆得豆
  'jd_priceProtect.js': '1 1 */3 * *',//京东价格保护
  'jd_rankingList.js': '19 16 * * *',//京东排行榜
  'jd_redPacket.js': '21 0,8,16 * * *',//全民抢红包
  'jd_sgmh.js': '20 2 * * *',// 闪购盲盒🎁
  'jd_shake.js': '10 1,5,17 * * *',//超级摇一摇
  'jd_shop.js': '1 16 * * *',//京东进店领豆
  'jd_shoplottery.js': '3 23 * * *',//
  'jd_ShopSign.js': '10 17,4 * * *',//
  'jd_small_home.js': '55 16 * * *',//东东小窝
  'jd_speed_redpocke.js': '1 * * * *',//京东极速版红包
  'jd_speed_sign.js': '50 4,16 * * *',//京东极速版
  'jd_speed.js': '30 */3 * * *',//京东天天加速✈️
  'jd_star_shop.js': '0 14,18 * * *',//明星小店
  'jd_super_redrain.js': '0 * * * *',//整点京豆雨
  'jd_superMarket.js': '1 1-23/5 * * *',//东东超市🎰
  'jd_syj.js': '10 8 * * *',//New赚京豆🥔
  'jd_unsubscribe.js': '0 15 * * *',//京东取消关注❌
  'jd_xtg_help.js': '0 18 * * *',//家电星推官互助
  'jd_zc.js': '30 5,12 * * *',//总裁送好礼
  'jd_zoo.js': '13 * * * *',//动物连萌
  'jd_zooCollect.js': '0-59/30 * * * *',//动物联盟收集金币
  '.js': '',//
}

function isTheTime(thisFile, date) {
  date = date || new Date();
  // let s  = date.getSeconds();//(0 ~ 59)
  let m = date.getMinutes();//(0 ~ 59)
  let h = date.getHours();//(0 ~ 23)  
  h = h < 8 ? h + 16 : h - 8

  let cronStr = cronMap[thisFile]

  cronStr = cronStr || '0 * * * *';
  let cronArr = cronStr.split(' ');
  cronArr.length = 5;
  // let d  = date.getDate();//(1 ~ 31)  
  // let M  = date.getMonth;//(0 ~ 11)
  let mStr = cronArr[0] || '0';//分钟表达式
  let hStr = cronArr[1] || '*';//小时表达式


  if (hStr == '*') {
    // if(mStr=='*'){
    //     return m==0;
    // }else{
    return testMinutes(mStr, m);
    // }
  } else if (isNum(hStr)) {
    if (parseInt(hStr) == h) {
      return testMinutes(mStr, m)
    }
  } else if (hStr.indexOf('/') > 0) {
    let everyH = hStr.split('/')[1]
    if (h % parseInt(everyH) == 0) {
      return testMinutes(mStr, m)
    }
  } else if (hStr.indexOf(',') > 0) {
    if ((',' + hStr + ',').indexOf(',' + h + ',') >= 0) {
      return testMinutes(mStr, m)
    }
  } else if (hStr.indexOf('-') > 0) {
    let hParams = hStr.split('-')
    hParams.length = 2
    let startH = hParams[0] || 0
    let endH = hParams[1] || 23
    if (h >= startH && h <= endH) {
      return testMinutes(mStr, m)
    }
  } else {
    return testMinutes(mStr, m)
  }
  return false

}

function testMinutes(mStr, m) {
  if (mStr == '*') {
    return true
  } else if (isNum(mStr)) {
    return parseInt(mStr) == m
  } else if (mStr.indexOf('/') > 0) {
    let everyM = mStr.split('/')[1]
    return m % parseInt(everyM) == 0
  } else if (mStr.indexOf(',') > 0) {
    return (',' + mStr + ',').indexOf(',' + m + ',') >= 0
  } else {
    return m == 0
  }
}
function isNum(str) {
  return /^\d+$/.test(str)
}
