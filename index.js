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
  "./Assets/notAmused.gif"
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

let uncomfortableReactions = ["ಠಠ", "◉_◉", "⚆ _ ⚆"]

let jokes = [
  "I saw yo mama fall down the other day. It wasn't that funny to me...||But the sidewalk cracked up!||",
  "I'm not very funny so I have no idea. ||Who am I kidding, I'm hilarious.||",
  "What did the duck say when he found an avocado? ||Guac, guac!||",
  "Shout out to the people who don't know what the opposite of in is!",
  "What do you call a talking turtle? ||Fictional.||",
  "Are we ever going to address the fact that Mr Krabs lives in Bikini Bottom?",
  "What do you call a dog with no legs? ||Doesn't matter what you call him, he's not coming.||",
  "I had an interview for a new job earlier today. They told me I'd be earning $20,000 now, and later my pay would increase to $40,000. I told the lady I'd just come back later.",
  "I hate when my wife asks if I'm listening to her. ||What a rude way to start a conversation.||",
  "I asked my cat what two minus two is. ||He said nothing.||",
  "A Spanish magician says he'll disappear on the count of three. Uno...Dos...||He disappeared without a tres.||",
  "My wife asked me to stop singing Wonderwall all the time. ||I said maybe.||",
  "There have been rumors Chuck Norris' tears can cure COVID. Too bad he's never cried.",
  "Chuck Norris had sex with Optimus Prime and invented dubstep.",
  "Chuck Norris once urinated in a semi truck's gas tank. That truck is now known as Optimus Prime.",
  "Chuck Norris doesn't flush the toilet, he scares the sh*t out of it.",
  "My AI friend made this one up...What do you call a cat does it take to screw in a light bulb? ||They could worry the banana.||",
  "My AI friend made this one up...What did the new ants say after a dog? ||It was a pirate.||",
  "My AI friend made this one up...Why did the monsters change a lightbulb? ||And a cow the cough.||",
  "My AI friend made this one up...What do you call a pastor cross the road? ||He take the chicken.||",
  "My AI friend made this one up...What do you call a farts of tea? ||He was calling the game of the dry.||",
  "A teenage boy is getting ready to take his girlfriend to the prom. First he goes to rent a tux, but there's a huge tux line at the shop so it took forever. Next he went to pick up the flowers, so he heads over to the florist and there's a huge line for flowers too. He waits forever, but eventually he gets the flowers. Then he heads out to rent a limo. The limo line at the rental office is large too, but he's patient and gets the job done. Finally, the day of prom arrives. The two are dancing happily and his girlfriend is having a great time. When the song is over, she asks him to get her some punch, so he heads over to the punch table and he gets some punch."
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Brody...", { type: "WATCHING" });
});

bot.on("message", async (message) => {

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

  if (message.content === "Uncomfortable" || message.content === "uncomfortable") {
    let i = getRandomInt(3);
    message.channel.send([uncomfortableReactions[i]]);
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
    let i = getRandomInt(41);
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
    let i = getRandomInt(22);
    message.channel.send("Let's see...")
    setTimeout(function () {
      message.channel.send(jokes[i]);
    }, 3000);
  }

  if (message.content.includes("I love you")) {
    message.reply(`I love you too...`);
  }

  if (message.content.includes("I hate you")) {
    message.reply(`*silent robotic plotting*`);
    message.channel.send({ files: ["./Assets/skynet.gif"] });
  }

  if (message.content.includes("funny") || message.content.includes("Funny") || message.content.includes("Hilarious") || message.content.includes("hilarious")) {
    message.channel.send({ files: ["./Assets/zaddy.gif"] });
  }

  if (message.content.includes("Fight") || message.content.includes("fight") || message.content.includes("aggressive") || message.content.includes("Aggressive")) {
    message.channel.send("(ง •̀•́)ง")
  }

  if (message.content.includes("Angry") || message.content.includes("angry") || message.content.includes("Triggered") || message.content.includes("triggered") || message.content.includes("Mad") || message.content.includes("mad")) {
    message.channel.send("(╯°□°)╯︵ ┻━┻")
  }
});

bot.login(token);