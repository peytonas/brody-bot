const Discord = require('discord.js');
const bot = new Discord.Client();
const mainHook = new Discord.WebhookClient('721174919341146235', 'a5_F6O2y6YeMJPBkXSOhE6eDI3WbEdIcNsnCsu5tza3qYIlhl-45VtUWIYRSrPugLJpe');
const prefix = process.env.PREFIX;
const token = process.env.BOT_TOKEN;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let messages = ["Gross.", "D&D tomorrow?", "Frustrated bloaty sounds.", "I could go for some sauer kraut.", "Fiddle fest, anyone?"]

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") {
    message.reply(`We probably shouldn't be alone...🤫`)
    setTimeout(() => {
      message.reply(`But I won't tell if you won't...😉😏`)
    }, 3000);
  };

  if (message.content === 'ping') {
    message.reply(`I WON'T DO WHAT YOU TELL ME!`)
  }

  if (message.content === 'I love you') {
    message.reply(`I don't know how to love yet...Will you teach me?`)
  }

  if (message.content === 'Gross.') {
    message.reply(`Indubitably`)
  }

  if (message.content === `Chalooby`) {
    message.reply(`You rang, sir?`)
  }
})

bot.on("ready", async () => {
  setInterval(() => {
    let i = getRandomInt(5)
    mainHook.send(messages[i])
  }, 300000)
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Brody...", { type: "WATCHING" });
});

bot.login(token);
