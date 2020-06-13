const Discord = require('discord.js');
const bot = new Discord.Client();
const mainHook = new Discord.WebhookClient('721174919341146235', 'a5_F6O2y6YeMJPBkXSOhE6eDI3WbEdIcNsnCsu5tza3qYIlhl-45VtUWIYRSrPugLJpe');
const prefix = process.env.PREFIX;
const token = process.env.BOT_TOKEN;

//STUB Chalooby-Bot status

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Brody...", { type: "WATCHING" });
});

//STUB Chalooby-Bot responses
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
    message.reply(`Indubitably`, { files: ["./Assets/theFly.jpg"] })
  }

  if (message.content === `Chalooby`) {
    message.reply(`You rang, sir?`)
  }

  if (message.content === `D&D tomorrow?`) {
    message.reply(`Oh, please??`)
  }
})

//STUB Webhook messages

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let mainHookMessages = ["Gross.", "D&D tomorrow?", "Frustrated bloaty sounds.", "I could go for some sauer kraut.", "Fiddle fest, anyone?", "Hot."]

bot.on("ready", async () => {
  setInterval(() => {
    let i = getRandomInt(6)
    mainHook.send(mainHookMessages[i])
  }, 3600000)
});

bot.login(token);
