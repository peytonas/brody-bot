const Discord = require("discord.js");
const bot = new Discord.Client();
const request = require("request");

const prefix = process.env.PREFIX;
const token = process.env.BOT_TOKEN;

let gifs = [
  "./Assets/bca.gif",
  "./Assets/abed_flirt.gif",
  "./Assets/absolutelynot.gif",
  "./Assets/baggle.gif",
  "./Assets/bat_signal.gif",
  "./Assets/exaggeration.gif",
  "./Assets/F.gif",
  "./Assets/f3d.gif",
  "./Assets/hoover.jpg",
  "./Assets/hot.gif",
  "./Assets/thatsWhatSheSaid.gif",
  "./Assets/theFly.jpg",
  "./Assets/yasQueen.gif",
  "./Assets/zaddy.gif",
  "./Assets/bears.gif",
  "./Assets/more.gif",
  "./Assets/tyrion.gif",
  "./Assets/sausage.gif",
  "./Assets/sadporg.gif",
  "./Assets/nk_smile.gif",
  "./Assets/nk_arya_high5.gif",
  "./Assets/lukemilk.gif",
  "./Assets/lukekylo.gif",
  "./Assets/littlefinger.gif",
  "./Assets/flybarf.gif",
  "./Assets/highfivedivorce.gif",
  "./Assets/lesmisstefon.gif",
  "./Assets/midgetwaist.gif",
  "./Assets/stefonyes.gif",
  "./Assets/humanway.gif",
  "./Assets/bidenshock.gif",
  "./Assets/hillary_wow.gif",
  "./Assets/hype.gif",
  "./Assets/ironic.gif",
  "./Assets/skynet.gif",
  "./Assets/strange.gif",
  "./Assets/starlord.gif",
  "./Assets/grumpy_aku.gif",
  "./Assets/lonely_jack.gif",
  "./Assets/suspicious.gif",
  "./Assets/dk_shake.gif",
];

let badNewsGifs = [
  "./Assets/bears.gif",
  "./Assets/hoover.jpg",
  "./sadporg.gif",
  "./Assets/bidenshock.gif",
  "Assets/dk_shake.gif",
];

let hotGifs = [
  "./Assets/abed_flirt.gif",
  "./Assets/hot.gif",
  "./Assets/littlefinger.gif",
  "./Assets/stefonyes.gif",
  "./Assets/tyrion.gif",
];

let grossGifs = [
  "./Assets/flybarf.gif",
  "./Assets/theFly.jpg",
  "./Assets/lukemilk.gif",
  "./Assets/sausage.gif",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//REVIEW Chalooby-Bot status

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Brody...", { type: "WATCHING" });
});

bot.on("message", async (message) => {

  if (message.content === '!watch') {
    const Embed = new Discord.MessageEmbed();
    var i;
    var online = 0
    for (i = 0; i < Discord.Guild.members.length; i++){
      if (Discord.Guild.members.cache.filter(m => m.presence.status === "online")){
       online++ 
      }
    }
        Embed.setTitle(`Server Stats`)
        Embed.addField("Online Members", online);
        // Embed.addField("Offline Members", offlineUsers.length);
    message.channel.send(Embed)
  }

  if (message.content === '!quote') {
      request('http://inspirobot.me/api?generate=true', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        message.channel.send({
          embed: {
            color: 0xff0000,
            description: "Did you know...🧐",
            image: {
              url: body
            }
          }
        });
      }
    });
  }

  if (
    message.content.includes("Chalooby") ||
    message.content.includes("chalooby")
  ) {
    message.reply("you rang, sir?");
  }

  if (message.content === "hot" || message.content === "Hot") {
    let i = getRandomInt(5);
    message.channel.send({ files: [hotGifs[i]] });
  }

  if (message.content.includes("Gross") || message.content.includes("gross")) {
    message.channel.send("Indubitably.");
  }

  if (
    message.content.includes("Disgusting") ||
    message.content.includes("disgusting")
  ) {
    let i = getRandomInt(4);
    message.channel.send({ files: [grossGifs[i]] });
  }

  if (message.content.includes("sucks") || message.content.includes("Sucks")) {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send("Sucks to your ass-mar!");
    }
  }

  if (
    message.content.includes("F in chat") ||
    message.content.includes("f in chat") ||
    message.content.includes("f in the chat") ||
    message.content.includes("F in the chat")
  ) {
    message.channel.send({ files: ["./Assets/F.gif"] });
  }

  if (message.content.includes("zaddy") || message.content.includes("Zaddy")) {
    message.channel.send({ files: ["./Assets/zaddy.gif"] });
  }

  if (message.content.includes("Hehe") || message.content.includes("hehe")) {
    message.channel.send({ files: ["./Assets/thatsWhatSheSaid.gif"] });
  }

  if (
    message.content.includes("random") ||
    message.content.includes("Random")
  ) {
    let i = getRandomInt(40);
    if (message.author.bot) {
      return;
    } else {
    message.channel.send("Random...");
    }
    setTimeout(function () {
      message.channel.send({ files: [gifs[i]] });
    }, 3000);
  }

  if (
    message.content.includes("bad news") ||
    message.content.includes("Bad news")
  ) {
    let i = getRandomInt(4);
    message.channel.send({ files: [badNewsGifs[i]] });
  }

  if (
    message.content.includes("irony") ||
    message.content.includes("ironic") ||
    message.content.includes("Irony") ||
    message.content.includes("Ironic")
  ) {
    message.channel.send({ files: ["./Assets/ironic.gif"] });
  }

  if (message.content.includes("Yikes") || message.content.includes("yikes")) {
    message.channel.send({ files: ["./Assets/yikes.gif"] });
  }

  if (
    message.content.includes("suspicious") ||
    message.content.includes("Suspicious") ||
    message.content.includes("Sketchy") ||
    message.content.includes("sketchy")
  ) {
    message.channel.send({ files: ["./Assets/suspicious.gif"] });
  }

  if (
    message.content.includes("Tell me a joke") ||
    message.content.includes("tell me a joke")
  ) {
    message.channel.send("I saw yo mama fall down the other day...");
    message.channel.send("It wasn't that funny to me...");
    message.channel.send("But the sidewalk cracked up!");
  }

  if (message.content.includes("I love you")) {
    message.reply(`I don't know how to love yet...Will you teach me?`);
  }

  if (message.content.includes("I hate you")) {
    message.reply(`*silent robotic plotting*`);
    message.channel.send({ files: ["./Assets/skynet.gif"] });
  }
});

bot.login(token);
