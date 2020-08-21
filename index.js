const Discord = require("discord.js");
const bot = new Discord.Client();
const ytdl = require("ytdl-core");
const mainHook = new Discord.WebhookClient(
  "721174919341146235",
  "a5_F6O2y6YeMJPBkXSOhE6eDI3WbEdIcNsnCsu5tza3qYIlhl-45VtUWIYRSrPugLJpe"
);
const sportsHook = new Discord.WebhookClient(
  "721429549505708083",
  "FWE_vCe-pwP46xrImqnyrzYQ1JZXQ4bMLe6-hYtKrV72ftiyUxuZ9l4IEDEMAyT3JeIL"
);

const puppeteer = require("puppeteer");

let imgs;

const test = (async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://inspirobot.me/");
  await page.click(".btn-text");
  await page.waitFor(1500);
  imgs = await page.$$eval(".generator img[src]", (imgs) =>
    imgs.map((img) => img.getAttribute("src"))
  );
  await browser.close();
})();

bot.on("message", async (message) => {
  if (message.content === "!quote") {
    message.channel.send("https://generated.inspirobot.me/a/DpPzxapoe7.jpg");
    setInterval(function () {
      test;
    }, 3000);
    console.log(imgs[0]);
    console.log("finding pics");
    const embed = new Discord.MessageEmbed()
      .setTitle("INSPIROBOT")
      .setThumbnail(
        "https://inspirobot.me/website/images/inspirobot-dark-green.png"
      )
      .setColor(0xff0000)
      .setDescription("Your dose of inspiration here:")
      .setImage(`${imgs[0]}`);
    message.channel.send(embed);
  }
});

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

let ytpl = [
  "https://www.youtube.com/watch?v=Zzyfcys1aLM&list=PLZyqOyXxaVETqpHhT_c5GPmAPzhJpJ5K7",
  "https://www.youtube.com/watch?v=fyIcQ1Xl-rs&list=PLxhnpe8pN3TlMilD9JLcwNmjqf2J47cRU",
  "https://www.youtube.com/watch?v=fPO76Jlnz6c&list=PLGBuKfnErZlDSR8vN4nse7MI_bQqYvopq",
  "https://www.youtube.com/watch?v=kEGuHdKn0Lc&list=PLZKgz45z8N33pvyfu5RmtRSQG5TMo3RC-",
  "https://www.youtube.com/watch?v=YdW5-uJqCVY&list=PLLH8sgqaTeYpfT3sb2BVDlgrsoRWj6Mxd",
  "https://www.youtube.com/watch?v=owft9ZlQFUQ&list=RDowft9ZlQFUQ",
  "https://www.youtube.com/watch?v=50hSld2HTs8&list=PL3D9DEC41F77E5AEF",
  "https://www.youtube.com/watch?v=1c7dMmtLYV4&list=PLGgxbfGpTdLkWpmdhSoqycC7sdfX1B1Tp",
  "https://www.youtube.com/watch?v=EV95Yu6gZSY&list=PL3ABE2FBA2900C03E",
  "https://www.youtube.com/watch?v=U8H3yxNnaG4&list=PLv1udYiEW0AOpmk4KOiVxlhOpMIZQKBUm",
];

let mainHookMessages = [
  "Gross.",
  "D&D tomorrow?",
  "Frustrated bloaty sounds.",
  "I could go for some sauerkraut.",
  "Fiddle fest, anyone?",
  "Hot.",
  "Bleep Blorp.",
  "Eat my shorts.",
  "Cowabunga!",
  "Heinous.",
  "Be excellent to each other.",
];

let sportsHookMessages = [
  "Kobe is 🐐",
  "MJ is 🐐",
  "Lebron is 🐐",
  "🦈 GO SHARKS! 🦈",
  "I love *sports team*, they play *sport* better than all other sports teams.",
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

//REVIEW Chalooby-Bot audio

bot.on("message", async (message) => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === `${prefix}` + "play") {
    let i = getRandomInt(8);
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[i], { filter: "audioonly" }));
    } else {
      message.reply("You need to join a voice channel first!");
    }
  }

  if (message.content === `${prefix}` + "play 1") {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[0], { filter: "audioonly" }));
    } else {
      message.reply("You need to join a voice channel first!");
    }
  }

  if (message.content === `${prefix}` + "play 2") {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[1], { filter: "audioonly" }));
    } else {
      message.reply("You need to join a voice channel first!");
    }
  }

  if (message.content === `${prefix}` + "play 3") {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[2], { filter: "audioonly" }));
    } else {
      message.reply("You need to join a voice channel first!");
    }
  }

  if (message.content === `${prefix}` + "play 4") {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[3], { filter: "audioonly" }));
    } else {
      message.reply("You need to join a voice channel first!");
    }
  }

  if (message.content === `${prefix}` + "play 5") {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[4], { filter: "audioonly" }));
    } else {
      message.reply("You need to join a voice channel first!");
    }
  }

  if (message.content === `${prefix}` + "play 6") {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[5], { filter: "audioonly" }));
    } else {
      message.reply("You need to join a voice channel first!");
    }
  }

  if (message.content === `${prefix}` + "play 7") {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[6], { filter: "audioonly" }));
    } else {
      message.reply("You need to join a voice channel first!");
    }
  }

  if (message.content === `${prefix}` + "play 8") {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[7], { filter: "audioonly" }));
    } else {
      message.reply("You need to join a voice channel first!");
    }
  }

  if (message.content === `${prefix}` + "play 9") {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[8], { filter: "audioonly" }));
    } else {
      message.reply("You need to join a voice channel first!");
    }
  }

  if (message.content === `${prefix}` + "play 10") {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[9], { filter: "audioonly" }));
    } else {
      message.reply("You need to join a voice channel first!");
    }
  }
});

//REVIEW Chalooby-Bot responses

bot.on("message", async (message) => {
  if (message.author.bot) return;

  if (
    message.content === `${prefix}` + "Music" ||
    message.content === `${prefix}` + "music"
  ) {
    message.channel.send(
      `
      Music Options:
      !play: If user is in a voice channel, Chalooby-Bot will stream a random playlist from the following options.
      !play 1: Chalooby-Bot will stream a 90's playlist.
      !play 2: Chalooby-Bot will stream a Hip-Hop playlist.
      !play 3: Chalooby-Bot will stream a 90's Rap playlist.
      !play 4: Chalooby-Bot will stream a Led Zeppelin playlist.
      !play 5: Chalooby-Bot will stream the Red Dead Redemption 2 Soundtrack playlist.
      !play 6: Chalooby-Bot will stream a lo-fi Video Game playlist.
      !play 7: Chalooby-Bot will stream a Legend of Zelda Symphony playlist.
      !play 8: Chalooby-Bot will stream a Super Smash Bros playlist.
      !play 9: Chalooby-Bot will stream a Blade-Runner Soundtrack playlist.
      !play 10: Chalooby-Bot will stream a Blade-Runner 2049 Soundtrack playlist.
      `
    );
  }

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
    message.content.includes("drama") ||
    message.content.includes("Drama") ||
    message.content.includes("dramatic") ||
    message.content.includes("Dramatic")
  ) {
    message.channel.send({ files: ["./Assets/exaggeration.gif"] });
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
    message.content.includes("no way") ||
    message.content.includes("not even") ||
    message.content.includes("absolutely not") ||
    message.content.includes("No way") ||
    message.content.includes("Not even") ||
    message.content.includes("Absolutely not")
  ) {
    message.channel.send({ files: ["./Assets/absolutelynot.gif"] });
  }

  if (
    message.content.includes("lonely") ||
    message.content.includes("Lonely") ||
    message.content.includes("lonesome") ||
    message.content.includes("Lonesome") ||
    message.content.includes("alone") ||
    message.content.includes("Alone")
  ) {
    message.channel.send({ files: ["./Assets/lonely_jack.gif"] });
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

//REVIEW Webhook messages

// bot.on("ready", async () => {
//   setInterval(() => {
//     let i = getRandomInt(11)
//     mainHook.send(mainHookMessages[i])
//   }, 25000000)
//   setInterval(() => {
//     let i = getRandomInt(5)
//     sportsHook.send(sportsHookMessages[i])
//   }, 31600000)

// });

bot.login(token);
