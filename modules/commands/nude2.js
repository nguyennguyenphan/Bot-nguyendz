module.exports.config = {
	name: "nude2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thanh dz",
	description: "Random ảnh trai xinh nhất Việt Nam :))",
	commandCategory: "random-img",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.vinhbeat.ga/nude.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/nude2.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nude2.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/nude2.${ext}`)).on("close", callback);
			})
}