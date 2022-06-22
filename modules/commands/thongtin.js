module.exports.config = {
  name: "thongtin",
  version: "1.0.2",
  hasPermssion: 2,
  credits: "HelyT",
  description: "",
  commandCategory: "economy",
  usages: "data exp/money add/del/set [0] @<mentions>",
  cooldowns: 0,
};
module.exports.onLoad = async () => {
    const fs = require("fs-extra");
    const chalk = require("chalk");
    const figlet = require("figlet");
  const axios = require("axios");

  const dirMaterial = __dirname + `/cache/fishy/`;

  if (!fs.existsSync(dirMaterial)) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "data.json")) (await axios({
      url: "https://hely-t.github.io/storage-data/data.json",
      method: 'GET',
      responseType: 'stream'
    })).data.pipe(fs.createWriteStream(dirMaterial + "data.json"));
  
  if (!fs.existsSync(dirMaterial + "fonts/bold-font.ttf")) (await axios({
      url: "https://hely-t.github.io/storage-data/items.json",
      method: 'GET',
      responseType: 'stream'
    })).data.pipe(fs.createWriteStream(dirMaterial + "items.json"));

    console.log(chalk.yellow(figlet.textSync('HelyT', { horizontalLayout: 'full' })));
  return;
}
module.exports.run = async function({ api, event, args, Currencies, utils,Users,Threads }) {
           let { threadID, senderID, messageID } = event;
           var mentions = Object.keys(event.mentions)[0] || args[3];
          
            if(!mentions){
        var data = await Currencies.getData(senderID);
        var exp =  data.exp;
        var money = data.money
        if(args[0] == 'exp'){
              if(!args[1])api.sendMessage("Exp: " + exp,threadID,messageID)
              if(args[1] == 'add'){
              let expadd = args[2]
              console.log(expadd)
              if(!args[2])api.sendMessage("KhĂ´ng cĂ³ tham sá»‘ !",threadID,messageID)
              else api.sendMessage("ÄĂ£ cá»™ng thĂªm " + expadd + " exp cho báº£n thĂ¢n !",threadID, () => Currencies.setData(senderID, options = {exp: exp + parseInt(expadd)}),messageID);
            }
              if(args[1] == 'del'){
              let expadd = args[2]
              console.log(expadd)
              if(!args[2])api.sendMessage("KhĂ´ng cĂ³ tham sá»‘ !",threadID,messageID)
              else api.sendMessage("ÄĂ£ trá»« " + expadd + " exp cho báº£n thĂ¢n !",threadID, () => Currencies.setData(senderID, options = {exp: exp - parseInt(expadd)}),messageID);
            }
              if(args[1] == 'set'){
              let expadd = args[2]
              console.log(expadd)
              if(!args[2])api.sendMessage("KhĂ´ng cĂ³ tham sá»‘ !",threadID,messageID)
              else api.sendMessage("ÄĂ£ reset exp cá»§a báº£n thĂ¢n thĂ nh: "  + expadd,threadID, () => Currencies.setData(senderID, options = {exp: parseInt(expadd)}),messageID);
            }
         }
              if(args[0] == 'money'){
              
              if(!args[1])api.sendMessage("Money: " + money + " Ä‘Ă´",threadID,messageID)
              if(args[1] == 'add'){
              let moneyadd = args[2]
              console.log(moneyadd)
              if(!args[2])api.sendMessage("KhĂ´ng cĂ³ tham sá»‘ !",threadID,messageID)
              else api.sendMessage("ÄĂ£ cá»™ng thĂªm " + moneyadd + " Ä‘Ă´ cho báº£n thĂ¢n !",threadID, () => Currencies.setData(senderID, options = {money: money + parseInt(moneyadd)}),messageID);
            }
              if(args[1] == 'del'){
              let moneyadd = args[2]
              console.log(moneyadd)
              if(!args[2])api.sendMessage("KhĂ´ng cĂ³ tham sá»‘ !",threadID,messageID)
              else api.sendMessage("ÄĂ£ trá»« " + moneyadd + " Ä‘Ă´ cá»§a báº£n thĂ¢n !",threadID, () => Currencies.setData(senderID, options = {money: money - parseInt(moneyadd)}),messageID);
            }
              if(args[1] == 'set'){
              let moneyadd = args[2]
              console.log(moneyadd)
              if(!args[2])api.sendMessage("KhĂ´ng cĂ³ tham sá»‘ !",threadID,messageID)
              else api.sendMessage("ÄĂ£ reset Ä‘Ă´ cá»§a báº£n thĂ¢n thĂ nh: "  + moneyadd,threadID, () => Currencies.setData(senderID, options = {money: parseInt(moneyadd)}),messageID);
            }
         }
     
      }
      
         if(mentions){
          var dataa = await Currencies.getData(mentions);
          var exp =  dataa.exp;
          var money = dataa.money
          let name = Users.getData(mentions).name || (await api.getUserInfo(mentions))[mentions].name;
          const expp = (await Currencies.getData(mentions)).exp;
          console.log(expp)
          if(args[0] == 'exp'){
              if(args[1] == 'add'){
              let expadd = args[2]
              console.log(expadd)
              if(!args[2])api.sendMessage("KhĂ´ng cĂ³ tham sá»‘ !",threadID,messageID)
              else api.sendMessage("ÄĂ£ cá»™ng thĂªm " + expadd + " exp cho " + name,threadID, () => Currencies.setData(mentions, options = {exp: exp + parseInt(expadd)}),messageID);
            }
              if(args[1] == 'del'){
              let expadd = args[2]
              console.log(expadd)
              if(!args[2])api.sendMessage("KhĂ´ng cĂ³ tham sá»‘ !",threadID,messageID)
              else api.sendMessage("ÄĂ£ trá»« " + expadd + " exp cho " + name,threadID, () => Currencies.setData(mentions, options = {exp: exp - parseInt(expadd)}),messageID);
            }
              if(args[1] == 'set'){
              let expadd = args[2]
              console.log(expadd)
              if(!args[2])api.sendMessage("KhĂ´ng cĂ³ tham sá»‘ !",threadID,messageID)
              else api.sendMessage("ÄĂ£ reset exp cá»§a " + name + " thĂ nh: "  + expadd,threadID, () => Currencies.setData(mentions, options = {exp: parseInt(expadd)}),messageID);
            }
         }
              if(args[0] == 'money'){
             
              if(!args[1])api.sendMessage("Money: " + money + " Ä‘Ă´",threadID,messageID)
              if(args[1] == 'add'){
              let moneyadd = args[2]
              console.log(moneyadd)
              if(!args[2])api.sendMessage("KhĂ´ng cĂ³ tham sá»‘ !",threadID,messageID)
              else api.sendMessage("ÄĂ£ cá»™ng thĂªm " + moneyadd + " Ä‘Ă´ cho " + name,threadID, () => Currencies.setData(mentions, options = {money: money + parseInt(moneyadd)}),messageID);
            }
              if(args[1] == 'del'){
              let moneyadd = args[2]
              console.log(moneyadd)
              if(!args[2])api.sendMessage("KhĂ´ng cĂ³ tham sá»‘ !",threadID,messageID)
              else api.sendMessage("ÄĂ£ trá»« " + moneyadd + " Ä‘Ă´ cá»§a " + name,threadID, () => Currencies.setData(mentions, options = {money: money - parseInt(moneyadd)}),messageID);
            }
              if(args[1] == 'set'){
              let moneyadd = args[2]
              console.log(moneyadd)
              if(!args[2])api.sendMessage("KhĂ´ng cĂ³ tham sá»‘ !",threadID,messageID)
              else api.sendMessage("ÄĂ£ reset Ä‘Ă´ cá»§a " + name + " thĂ nh: "  + moneyadd,threadID, () => Currencies.setData(mentions, options = {money: parseInt(moneyadd)}),messageID);
            }
         }
     
      }
   
}