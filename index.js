const Discord = require('discord.js');
const bot = new Discord.Client();
const ytdl = require('ytdl-core');
const mainHook = new Discord.WebhookClient('721174919341146235', 'a5_F6O2y6YeMJPBkXSOhE6eDI3WbEdIcNsnCsu5tza3qYIlhl-45VtUWIYRSrPugLJpe');
const sportsHook = new Discord.WebhookClient('721429549505708083', 'FWE_vCe-pwP46xrImqnyrzYQ1JZXQ4bMLe6-hYtKrV72ftiyUxuZ9l4IEDEMAyT3JeIL');

const prefix = process.env.PREFIX;
const token = process.env.BOT_TOKEN;

let gifs = ["./Assets/bca.gif", "./Assets/abed_flirt.gif", "./Assets/baggle.gif", "./Assets/bat_signal.gif", "./Assets/exaggeration.gif", "./Assets/F.gif", "./Assets/f3d.gif", "./Assets/hoover.jpg", "./Assets/hot.gif", "./Assets/thatsWhatSheSaid.gif", "./Assets/theFly.jpg", "./Assets/yasQueen.gif", "./Assets/zaddy.gif", "./Assets/bears.gif"]

let ytpl = ['https://www.youtube.com/watch?v=Zzyfcys1aLM&list=PLZyqOyXxaVETqpHhT_c5GPmAPzhJpJ5K7', 'https://www.youtube.com/watch?v=fyIcQ1Xl-rs&list=PLxhnpe8pN3TlMilD9JLcwNmjqf2J47cRU', 'https://www.youtube.com/watch?v=fPO76Jlnz6c&list=PLGBuKfnErZlDSR8vN4nse7MI_bQqYvopq', 'https://www.youtube.com/watch?v=kEGuHdKn0Lc&list=PLZKgz45z8N33pvyfu5RmtRSQG5TMo3RC-', 'https://www.youtube.com/watch?v=YdW5-uJqCVY&list=PLLH8sgqaTeYpfT3sb2BVDlgrsoRWj6Mxd', 'https://www.youtube.com/watch?v=owft9ZlQFUQ&list=RDowft9ZlQFUQ', 'https://www.youtube.com/watch?v=50hSld2HTs8&list=PL3D9DEC41F77E5AEF', 'https://www.youtube.com/watch?v=1c7dMmtLYV4&list=PLGgxbfGpTdLkWpmdhSoqycC7sdfX1B1Tp', "https://www.youtube.com/watch?v=EV95Yu6gZSY&list=PL3ABE2FBA2900C03E", "https://www.youtube.com/watch?v=U8H3yxNnaG4&list=PLv1udYiEW0AOpmk4KOiVxlhOpMIZQKBUm"]

let mainHookMessages = ["Gross.", "D&D tomorrow?", "Frustrated bloaty sounds.", "I could go for some sauerkraut.", "Fiddle fest, anyone?", "Hot.", "Bleep Blorp.", "Eat my shorts.", "Cowabunga!", "Heinous.", "Be excellent to each other."]

let sportsHookMessages = ["Kobe is 🐐", "MJ is 🐐", "Lebron is 🐐", "🦈 GO SHARKS! 🦈", "I love *sports team*, they play *sport* better than all other sports teams."]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//REVIEW Chalooby-Bot status

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Brody...", { type: "WATCHING" });
});


//REVIEW Chalooby-Bot audio

bot.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === `${prefix}` + 'play') {
    let i = getRandomInt(8)
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[i], { filter: 'audioonly' }));
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  if (message.content === `${prefix}` + 'play 1') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[0], { filter: 'audioonly' }));
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  if (message.content === `${prefix}` + 'play 2') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[1], { filter: 'audioonly' }));
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  if (message.content === `${prefix}` + 'play 3') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[2], { filter: 'audioonly' }));
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  if (message.content === `${prefix}` + 'play 4') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[3], { filter: 'audioonly' }));
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  if (message.content === `${prefix}` + 'play 5') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[4], { filter: 'audioonly' }));
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  if (message.content === `${prefix}` + 'play 6') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[5], { filter: 'audioonly' }));
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  if (message.content === `${prefix}` + 'play 7') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[6], { filter: 'audioonly' }));
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  if (message.content === `${prefix}` + 'play 8') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[7], { filter: 'audioonly' }));
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  if (message.content === `${prefix}` + 'play 9') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[8], { filter: 'audioonly' }));
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  if (message.content === `${prefix}` + 'play 10') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(ytdl(ytpl[9], { filter: 'audioonly' }));
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});

//REVIEW Chalooby-Bot responses

bot.on("message", async message => {
  if (message.author.bot) return;

  if (message.content === `${prefix}` + 'Music' || (message.content === `${prefix}` + 'music')) {
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
      `)
  }

  if (message.content.includes('ping') || message.content.includes('Ping')) {
    message.channel.send(`I WON'T DO WHAT YOU TELL ME!`)
  }

  if (message.content.includes('hot') || message.content.includes('Hot')) {
    message.channel.send({ files: ["./Assets/abed_flirt.gif"] })
  }

  if (message.content.includes('Tell me a joke') || message.content.includes('tell me a joke')) {
    message.channel.send('YOUR MOM.')
  }

  if (message.content.includes('Tell me you love me')) {
    message.reply('How I feel is unimportant.')
  }

  if (message.content.includes('I love you')) {
    message.reply(`I don't know how to love yet...Will you teach me?`)
  }

  if (message.content.includes('I hate you')) {
    message.reply(`*silent robotic plotting*`)
  }

  if (message.content.includes('Gross') || message.content.includes('gross')) {
    message.channel.send('Indubitably.')
  }

  if (message.content.includes('Disgusting') || message.content.includes('disgusting')) {
    message.channel.send({ files: ["./Assets/theFly.jpg"] })
  }

  if (message.content.includes('sucks') || message.content.includes('Sucks')) {
    message.channel.send('Sucks to your ass-mar!')
  }

  if (message.content.includes('Chalooby') || message.content.includes('chalooby')) {
    message.reply('You rang, sir?')
  }

  if (message.content.includes('D&D tomorrow?')) {
    message.channel.send('Oh, please??')
  }

  if (message.content.includes('F in chat') || message.content.includes('f in chat') || message.content.includes('f in the chat') || message.content.includes('F in the chat')) {
    message.channel.send({ files: ["./Assets/F.gif"] })
  }

  if (message.content.includes('batman') || message.content.includes('Batman')) {
    message.channel.send({ files: ["./Assets/bat_signal.gif"] })
  }

  if (message.content.includes('zaddy') || message.content.includes('Zaddy')) {
    message.channel.send({ files: ["./Assets/zaddy.gif"] })
  }

  if (message.content.includes('lol') || message.content.includes('Lol') || message.content.includes('haha') || message.content.includes('Haha')) {
    message.channel.send({ files: ["./Assets/f3d.gif"] })
  }

  if (message.content.includes('Hehe') || message.content.includes('hehe')) {
    message.channel.send({ files: ["./Assets/thatsWhatSheSaid.gif"] })
  }

  if (message.content.includes('yas') || message.content.includes('Yas')) {
    message.channel.send({ files: ["./Assets/yasQueen.gif"] })
  }

  if (message.content.includes('drama') || message.content.includes('Drama') || message.content.includes('dramatic') || message.content.includes('Dramatic')) {
    message.channel.send({ files: ["./Assets/exaggeration.gif"] })
  }

  if (message.content.includes('random') || message.content.includes('Random')) {
    let i = getRandomInt(14)
    message.channel.send("Random...")
    setTimeout(function () { message.channel.send({ files: gifs[i] }) }, 3000)
  }

  if (message.content.includes('bad news') || message.content.includes('Bad news')) {
    let i = getRandomInt(2)
    let badNewsGif = ["./Assets/hoover.jpg", "./Assets/bears.jpg"]
    message.channel.send({ files: badNewsGif[i] })
  }
})

//REVIEW Webhook messages

bot.on("ready", async () => {
  setInterval(() => {
    let i = getRandomInt(11)
    mainHook.send(mainHookMessages[i])
  }, 20000000)
  setInterval(() => {
    let i = getRandomInt(5)
    sportsHook.send(sportsHookMessages[i])
  }, 21600000)
});

bot.login(token);