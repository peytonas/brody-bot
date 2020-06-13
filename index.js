const Discord = require('discord.js');
const bot = new Discord.Client();
const ytdl = require('ytdl-core');
const mainHook = new Discord.WebhookClient('721174919341146235', 'a5_F6O2y6YeMJPBkXSOhE6eDI3WbEdIcNsnCsu5tza3qYIlhl-45VtUWIYRSrPugLJpe');
const sportsHook = new Discord.WebhookClient('721429549505708083', 'FWE_vCe-pwP46xrImqnyrzYQ1JZXQ4bMLe6-hYtKrV72ftiyUxuZ9l4IEDEMAyT3JeIL');

const prefix = process.env.PREFIX;
const token = process.env.BOT_TOKEN;

//STUB Chalooby-Bot status

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Brody...", { type: "WATCHING" });
});

//STUB Chalooby-Bot audio

bot.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '!join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { filter: 'audioonly' }));
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});

//STUB Chalooby-Bot responses
bot.on("message", async message => {
  if (message.author.bot) return;
  // if (message.channel.type === "dm") {
  //   message.reply(`We probably shouldn't be alone...🤫`)
  //   setTimeout(() => {
  //     message.reply(`But I won't tell if you won't...😉😏`)
  //   }, 3000);
  // };

  if (message.content.includes('ping') || message.content.includes('Ping')) {
    message.channel.send(`I WON'T DO WHAT YOU TELL ME!`)
  }

  if (message.content.includes('Tell me you love me')) {
    message.reply(`How I feel is unimportant.`)
  }

  if (message.content.includes('I love you')) {
    message.reply(`I don't know how to love yet...Will you teach me?`)
  }

  if (message.content.includes('I hate you')) {
    message.reply(`*silent robotic plotting*`)
  }

  if (message.content.includes('Gross') || message.content.includes('gross')) {
    message.channel.send('Indubitably.')
    // const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'gnome_barfing');
    // console.log(emoji);
  }

  if (message.content.includes('Disgusting') || message.content.includes('disgusting')) {
    message.channel.send({ files: ["./Assets/theFly.jpg"] })
  }

  if (message.content.includes('Chalooby')) {
    message.reply('You rang, sir?')
  }

  if (message.content.includes('D&D tomorrow?')) {
    message.channel.send('Oh, please??')
  }
})

//STUB Webhook messages

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let mainHookMessages = ["Gross.", "D&D tomorrow?", "Frustrated bloaty sounds.", "I could go for some sauerkraut.", "Fiddle fest, anyone?", "Hot.", "Bleep Blorp.", "Eat my shorts.", "Cowabunga!", "Heinous.", "Be excellent to each other."]
let sportsHookMessages = ["Kobe is 🐐", "MJ is 🐐", "Lebron is 🐐", "🦈 GO SHARKS! 🦈", "I love *sports team*, they play *sport* better than all other sports teams."]

bot.on("ready", async () => {
  setInterval(() => {
    let i = getRandomInt(11)
    mainHook.send(mainHookMessages[i])
  }, 10800000)
  setInterval(() => {
    let i = getRandomInt(5)
    sportsHook.send(sportsHookMessages[i])
  }, 21600000)
});

bot.login(token);