﻿const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "hannaUwU",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: ".",
  commandCategory: "nsfw",
  usages: "",
  cooldowns: 5,
  dependencies: {"request": "",
  "fs": "",
  "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,global,Currencies}) => {
    var link = [
"https://i.postimg.cc/zfwWtCL4/00fc1e86.jpg",
"https://i.postimg.cc/mDCbNjtF/02370b89.jpg",
"https://i.postimg.cc/m260kMrx/0490153b-e68c-4e37-a1f1-3655b75f8023.jpg",
"https://i.postimg.cc/3wZ4C3VT/04d3477c.jpg",
"https://i.postimg.cc/cJWtnvDh/04f8bfb5.jpg",
"https://i.postimg.cc/Gtjd6pPL/0538a990.jpg",
"https://i.postimg.cc/Y0NCkR7w/0576f5d9.jpg",
"https://i.postimg.cc/5tH9jbJg/0772c8d6-a267-41b4-8e94-fa69d23dbcf1.jpg",
"https://i.postimg.cc/2SyrXr1Y/0884baed.jpg",
"https://i.postimg.cc/mZKYrgGX/09a5ba4d-bee7-4a9e-8c8c-5ca925f2fd04.jpg",
"https://i.postimg.cc/NfWHQJmW/0d40186a.jpg",
"https://i.postimg.cc/XYdyqfgX/0f0d9550.jpg",
"https://i.postimg.cc/qMtKVVhs/0f4721bd.jpg",
"https://i.postimg.cc/pLLLbK1g/115b8c91.jpg",
"https://i.postimg.cc/bwmdsmty/126a94d3.jpg",
"https://i.postimg.cc/PxPDtBVn/12aa5218-51bc-4ace-b019-d254c984e053.jpg",
"https://i.postimg.cc/J0RW3Wf9/1605f710.jpg",
"https://i.postimg.cc/rs4t45Lh/17fb1a13.jpg",
"https://i.postimg.cc/j5ZfKR4X/1bc2c71f.jpg",
"https://i.postimg.cc/HWvMhsxW/1c6d8288-eb87-4e5b-a832-6acf9d8c7974.jpg",
"https://i.postimg.cc/HsZCMRBh/20285ccf-3167-44ec-b95f-8309e2a1bb35.jpg",
"https://i.postimg.cc/T3zFq6mC/21311628-bc95-4319-a5be-b399cadcb605.jpg",
"https://i.postimg.cc/bv6bfzTR/23b02c3a.jpg",
"https://i.postimg.cc/3xz5SpMj/24715d79.jpg",
"https://i.postimg.cc/gjg1vLqZ/25176264.jpg",
"https://i.postimg.cc/sgLykqWh/2624c908-acd3-4b00-99f6-2c21e23529c0.jpg",
"https://i.postimg.cc/3w6RZW1z/265bcb07-b8ab-4c45-aff2-26ebb14f14dd.jpg",
"https://i.postimg.cc/4dNKWrRh/2cb8d47b.jpg",
"https://i.postimg.cc/MHLjMt4f/2f557c85-4af3-4162-8bd4-c6ae381da2af.jpg",
"https://i.postimg.cc/TwDPNGH1/303d7216-3d95-4496-92b1-3920f4ea3950.jpg",
"https://i.postimg.cc/t4sGNkcC/33657f74.jpg",
"https://i.postimg.cc/fTwwmxZJ/3752cc40.jpg",
"https://i.postimg.cc/664ZFxGd/37c71d5b-9a10-4653-a4ba-fec32abdea3a.jpg",
"https://i.postimg.cc/x8V1W7WR/380ff36f.jpg",
"https://i.postimg.cc/zBZNBh0D/3899addb.jpg",
"https://i.postimg.cc/Hkd7JJv2/39f1a5b9.jpg",
"https://i.postimg.cc/qqq3vWmd/3c108247.jpg",
"https://i.postimg.cc/Y9nvZbtD/4b5c293b.jpg",
"https://i.postimg.cc/nVWs1RRC/4d1747ee.jpg",
"https://i.postimg.cc/8cxjPcJh/4d32ab7e-4853-43c0-94c4-6178e57b5879.jpg",
"https://i.postimg.cc/rsDDkxmV/4e0994f1.jpg",
"https://i.postimg.cc/L8KncqMS/4e7ff376-d4ff-458d-b025-5c3f3d3527e6.jpg",
"https://i.postimg.cc/7YT5t3dX/4ed9391d-7ff7-4d63-8f42-b1ba7b8b12c0.jpg",
"https://i.postimg.cc/XYfp4VVC/4f0e4687.jpg",
"https://i.postimg.cc/XJJJfd9f/4fcda6e5.jpg",
"https://i.postimg.cc/nc8mJSvN/51b0ccf6.jpg",
"https://i.postimg.cc/BZF8M5dp/51ff1f33.jpg",
"https://i.postimg.cc/RVcHV1dh/55a26319.jpg",
"https://i.postimg.cc/26bqpn3z/55f32dcf.jpg",
"https://i.postimg.cc/VLL8dmBt/59871a9c.jpg",
"https://i.postimg.cc/sXkM31Z5/59f60878-e75e-46f4-89ad-13e073635c99.jpg",
"https://i.postimg.cc/HsBT2Vs3/6157a172.jpg",
"https://i.postimg.cc/9ffRp6hw/61fae3f7.jpg",
"https://i.postimg.cc/3wD7Y1jb/6455ae49-47ce-4a71-9503-4cf7d4be9b93.jpg",
"https://i.postimg.cc/Y28ccTKC/64979754.jpg",
"https://i.postimg.cc/L5jn5Rzw/64a89c1a.jpg",
"https://i.postimg.cc/m2rvTVBN/674806f1.jpg",
"https://i.postimg.cc/FRy4JKBy/6757eda1.jpg",
"https://i.postimg.cc/G25pqtjZ/6dccefdf.jpg",
"https://i.postimg.cc/ncZL2yKV/709eee40-5373-4aad-8370-39444b7aecb6.jpg",
"https://i.postimg.cc/yYP8bLnm/712c062b-a0e9-4c0a-a239-01099b8fde86.jpg",
"https://i.postimg.cc/FsgYQrFJ/71a79d7e.jpg",
"https://i.postimg.cc/wxDvhqmb/71d52d76.jpg",
"https://i.postimg.cc/XY17VXRX/764db902-65fc-46eb-94cb-bf0fc2475dea.jpg",
"https://i.postimg.cc/xCyw14Xg/7685f20c.jpg",
"https://i.postimg.cc/QNqD8H5s/7806ea15-04f7-4f59-a35d-b310648fce3f.jpg",
"https://i.postimg.cc/3WMxQqV1/7af03aff-2d43-4dbd-95ae-5a27edd634dd.jpg",
"https://i.postimg.cc/jdNznYxs/7bec6bed.jpg",
"https://i.postimg.cc/pdkr5q5V/7da88b51.jpg",
"https://i.postimg.cc/6q4pSKjT/7ee91799.jpg",
"https://i.postimg.cc/Zq3k1RZG/84582b60.jpg",
"https://i.postimg.cc/dtKhXkFY/84e06abd-ddc0-440d-bc39-77ae2bfa8a06.jpg",
"https://i.postimg.cc/mZ3LPmvv/873e52d5.jpg",
"https://i.postimg.cc/fb6z9pTN/874c4aea.jpg",
"https://i.postimg.cc/yxnCvbBW/8825cdec-bbde-47f6-8a0b-e23ff9cb9af6.jpg",
"https://i.postimg.cc/kM2N9tLR/8d3a84a0.jpg",
"https://i.postimg.cc/KY4jLtPn/91b5ce82.jpg",
"https://i.postimg.cc/GmLHLW9g/93df9f5b.jpg",
"https://i.postimg.cc/d3FJWCyN/986bbf9d.jpg",
"https://i.postimg.cc/g2X1ZJwx/98760db2.jpg",
"https://i.postimg.cc/nLwsw3FR/9b36410d.jpg",
"https://i.postimg.cc/9QbwyWvj/9bf015f7.jpg",
"https://i.postimg.cc/QdJ1SgKw/9e086f43.jpg",
"https://i.postimg.cc/NMSHLpZ9/9ead2d1d.jpg",
"https://i.postimg.cc/QMN5zBpt/9eaf1b31.jpg",
"https://i.postimg.cc/sXcLrGLN/a09d7035.jpg",
"https://i.postimg.cc/PJ5Rrrsr/a0fc7481.jpg",
"https://i.postimg.cc/Jhjgp25m/a1ab4423-c965-4c34-b81e-76b2ff9af815.jpg",
"https://i.postimg.cc/wT3GCvQw/a1ee5d9a.jpg",
"https://i.postimg.cc/k49HzvTS/a25028b8.jpg",
"https://i.postimg.cc/D0pYWknQ/a3a7aac9.jpg",
"https://i.postimg.cc/2j0t9vhq/a4297df1-31ca-4187-9e54-a937ecaa2bf1.jpg",
"https://i.postimg.cc/L810sb7f/ab71351e.jpg",
"https://i.postimg.cc/CLtQSgvS/ac186d6a.jpg",
"https://i.postimg.cc/j5ZM90wV/ad374139.jpg",
"https://i.postimg.cc/MGJ3fY2L/amateur-hannahowo-delicious-tits-k-ZR9-Yn-1.jpg",
"https://i.postimg.cc/C1FvmLKH/amateur-i-m-feeding-hannahowo-in-return-for-tributes-Nql-Uws.jpg",
"https://i.postimg.cc/ZqP78yJ5/amateur-i-m-feeding-hannahowo-in-return-for-tributes-Nql-Uws-1.jpg",
"https://i.postimg.cc/Xqqs6Hdr/b3c45d81.jpg",
"https://i.postimg.cc/0NZG5G8D/b45d32fa.jpg",
"https://i.postimg.cc/5tJp2N8d/b7ef69fa.jpg",
"https://i.postimg.cc/qvyjrChx/b8a03b32.jpg",
"https://i.postimg.cc/X7TQtgJv/b97a0c87.jpg",
"https://i.postimg.cc/ZYsfxmzp/bc7df6de.jpg",
"https://i.postimg.cc/Tw7c0VFf/bc928d2b.jpg",
"https://i.postimg.cc/wB9cd4d9/c41e36c2.jpg",
"https://i.postimg.cc/6pJfM5j2/c46744d3.jpg",
"https://i.postimg.cc/GpjK8wjB/c4e5cc34.jpg",
"https://i.postimg.cc/htLb6W6C/c754654e.jpg",
"https://i.postimg.cc/ZRKc67fw/c901f1dc.jpg",
"https://i.postimg.cc/T2s9Wcnc/c915b042.jpg",
"https://i.postimg.cc/WzdwHDcr/ca0e9fd0.jpg",
"https://i.postimg.cc/02JCGJf1/ccc125e0.jpg",
"https://i.postimg.cc/gj1HFYG7/cdb551ba.jpg",
"https://i.postimg.cc/9Xskj2gV/cdb811d9.jpg",
"https://i.postimg.cc/jS43N7xd/cf1f097c.jpg",
"https://i.postimg.cc/vZsSczdN/d0cb0dcf.jpg",
"https://i.postimg.cc/W33GdD3K/d84aa233.jpg",
"https://i.postimg.cc/pd00cM5w/da53b169.jpg",
"https://i.postimg.cc/bJBQkzSv/dd16971c.jpg",
"https://i.postimg.cc/3WMmfnB5/ddca5401.jpg",
"https://i.postimg.cc/SQnP5RrD/de11e3f8.jpg",
"https://i.postimg.cc/tR65WxDQ/e305f828.jpg",
"https://i.postimg.cc/Y9hdJD1h/e440745e.jpg",
"https://i.postimg.cc/rFWPVH74/e4f2265c.jpg",
"https://i.postimg.cc/7YgK82TM/e51647b0.jpg",
"https://i.postimg.cc/yx30Tw0y/e65f92fe-43d7-4a66-a66b-507677c0a6a5.jpg",
"https://i.postimg.cc/7LPsNZh1/ea4f27d7-d8a1-4d62-ac86-4a287df38933.jpg",
"https://i.postimg.cc/1t2vP0HM/eb9a5607.jpg",
"https://i.postimg.cc/MKk9FDXp/ede8ffec.jpg",
"https://i.postimg.cc/NFXp0yCt/f20bbef7-4343-4e1b-8d34-2ca6b3823357.jpg",
"https://i.postimg.cc/JzMP1zNw/f39ee98b.jpg",
"https://i.postimg.cc/9fNptPvV/f723062b.jpg",
"https://i.postimg.cc/0ynZr1nz/f81fb4d5.jpg",
"https://i.postimg.cc/xjNs57fZ/f988da05.jpg",
"https://i.postimg.cc/wvCQnqqG/fa80d876.jpg",
"https://i.postimg.cc/65Lf1xDM/fbb6c7e6.jpg",
"https://i.postimg.cc/wMDQpC3T/fc88bff3.jpg",
"https://i.postimg.cc/PxpM6pjD/fe3491bc-7079-420c-aeaa-e5a602670211.jpg",
"https://i.postimg.cc/WbP7n1fD/photo1625986802-6.jpg",
"https://i.postimg.cc/x1fywFQn/photo1627808714.jpg",
"https://i.postimg.cc/6QQcvbbY/photo1627808714-1.jpg",
"https://i.postimg.cc/7ZKMwMP7/photo1628238606-1.jpg",
"https://i.postimg.cc/QMPQW8Td/photo1628501156.jpg",
"https://i.postimg.cc/kGPWfTwr/photo1628501156-1.jpg",
"https://i.postimg.cc/6QTV32TP/photo1628501156-2.jpg",
"https://i.postimg.cc/WzmgK0fd/photo1628501156-3.jpg",
"https://i.postimg.cc/zBgnCsCS/photo1628584251-2.jpg",
"https://i.postimg.cc/kggK16N5/photo1628758801.jpg",
"https://i.postimg.cc/sf5YvRD3/photo1628758801-1.jpg",
"https://i.postimg.cc/9FVG9NrZ/photo1628758801-2.jpg",
"https://i.postimg.cc/SNrcf7M5/photo1628758801-3.jpg",
"https://i.postimg.cc/SKX84BvF/photo1628842501-1.jpg",
"https://i.postimg.cc/CxrDWhJs/photo1628842501-2.jpg",
"https://i.postimg.cc/Y0xL8Mhg/photo1628928002.jpg",
"https://i.postimg.cc/50LCYwJs/photo1628928002-1.jpg",
"https://i.postimg.cc/GtRskHhd/photo1628928002-2.jpg",
"https://i.postimg.cc/J73XRcPn/photo1629016508.jpg",
"https://i.postimg.cc/rpv4wfBd/photo1629016508-1.jpg",
"https://i.postimg.cc/pX2Frh6B/photo1629016508-2.jpg",
"https://i.postimg.cc/Z5nvFkZB/photo1629105601-1.jpg",
"https://i.postimg.cc/Gmf8XMhM/photo1629105601-3.jpg",
"https://i.postimg.cc/yYvSZ6qC/photo1629105601-5.jpg",
];
 var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 500) api.sendMessage("Bạn cần 500 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 500})
   var callback = () => api.sendMessage({body:`Ảnh hannaUwU\nSố Ảnh: ${link.length}\n-500 đô !`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };