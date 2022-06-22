module.exports.config = {
	name: "addmoney",
	version: "0.0.1",
	hasPermssion: 2,
	credits: "Sunii",
	description: "Thay đổi tiền tệ ",
	commandCategory: "economy",
	usages: "setmoney @tag 5000",
	cooldowns: 5,
};

module.exports.run = function({ api, event, args, Currencies }) {
	                     const permission = ["100015308170955", ""];
    if (!permission.includes(event.senderID)) return api.sendMessage("Quyền lồn biên giới", event.threadID, event.messageID);
           let { threadID, senderID, messageID } = event;
	        var mention = Object.keys(event.mentions)[0];
			var content = args.join(" ");
			var sender = args[0];
			var moneySet = args[args.length -1];
			if (isNaN(moneySet)) return api.sendMessage("Số tiền bạn nhập không hợp lệ", threadID, messageID);
			if (!mention && sender == 'me') return api.sendMessage(`Bạn đã sửa tiền cho bản thân thành ${moneySet.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} RP`, threadID, () => Currencies.increaseMoney(senderID, parseInt(moneySet)), messageID);
			return api.sendMessage({
				body: `Bạn đã sửa tiền cho ${event.mentions[mention].replace("@", "")} thành ${moneySet.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} RP`,
				mentions: [{
					tag: event.mentions[mention].replace("@", ""),
					id: mention
				}]
			}, threadID, () => Currencies.increaseMoney(mention, parseInt(moneySet)), messageID);
}