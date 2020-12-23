const Discord = require("discord.js");
const bot = new Discord.Client();

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

let hypeGifs = [
  "./Assets/hype.gif",
  "./Assets/yasQueen.gif",
  "./Assets/nk_smile.gif",
  "./Assets/nk_arya_high5.gif",
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
  if (message.content === "hot" || message.content === "Hot") {
    let i = getRandomInt(5);
    message.channel.send({ files: [hotGifs[i]] });
  }

  if (
    message.content.includes("Tell me a joke") ||
    message.content.includes("tell me a joke")
  ) {
    message.channel.send("YOUR MOM.");
  }

  if (message.content.includes("I love you")) {
    message.reply(`I don't know how to love yet...Will you teach me?`);
  }

  if (message.content.includes("I hate you")) {
    message.reply(`*silent robotic plotting*`);
    message.channel.send({ files: ["./Assets/skynet.gif"] });
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
    message.channel.send("Sucks to your ass-mar!");
  }

  if (
    message.content.includes("Chalooby") ||
    message.content.includes("chalooby")
  ) {
    message.reply("You rang, sir?");
  }

  if (
    message.content.includes("F in chat") ||
    message.content.includes("f in chat") ||
    message.content.includes("f in the chat") ||
    message.content.includes("F in the chat")
  ) {
    message.channel.send({ files: ["./Assets/F.gif"] });
  }

  if (
    message.content.includes("batman") ||
    message.content.includes("Batman")
  ) {
    message.channel.send({ files: ["./Assets/bat_signal.gif"] });
  }

  if (message.content.includes("zaddy") || message.content.includes("Zaddy")) {
    message.channel.send({ files: ["./Assets/zaddy.gif"] });
  }

  if (message.content.includes("Hehe") || message.content.includes("hehe")) {
    message.channel.send({ files: ["./Assets/thatsWhatSheSaid.gif"] });
  }

  if (message.content.includes("yas") || message.content.includes("Yas")) {
    let i = getRandomInt(4);
    message.channel.send({ files: [hypeGifs[i]] });
  }

  if (
    message.content.includes("random") ||
    message.content.includes("Random")
  ) {
    let i = getRandomInt(40);
    message.channel.send("Random...");
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
    message.content.includes("grumpy") ||
    message.content.includes("Grumpy")
  ) {
    message.channel.send({ files: ["./Assets/grumpy_aku.gif"] });
  }

  if (
    message.content.includes("suspicious") ||
    message.content.includes("Suspicious") ||
    message.content.includes("Sketchy") ||
    message.content.includes("sketchy") ||
    message.content.includes("Sketch") ||
    message.content.includes("sketch")
  ) {
    message.channel.send({ files: ["./Assets/suspicious.gif"] });
  }

  if (
    message.content.includes("Unfortunate") ||
    message.content.includes("unfortunate") ||
    message.content.includes("Disappointing") ||
    message.content.includes("disappointing")
  ) {
    message.channel.send({ files: ["./Assets/dk_shake.gif"] });
  }
});

bot.login(token);
