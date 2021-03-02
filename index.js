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
  "./Assets/notAmused.gif",
  "./Assets/thatsPrettyNeat.gif",
  "./Assets/neverKissedAGuy.gif",
  "./Assets/howCanYouStopMe.gif"

];

let hotGifs = [
  "./Assets/abed_flirt.gif",
  "./Assets/hot.gif",
  "./Assets/littlefinger.gif",
  "./Assets/stefonyes.gif",
  "./Assets/tyrion.gif",
  "./Assets/notAmused.gif"
];

let innuendoGifs = ["./Assets/thatsWhatSheSaid.gif", "./Assets/nameOfYourSexTape.gif"]

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

let loveResponses = ["I don't know how to love yet...", "I've never even kissed a guy before.", "I'm in lesbians with you too..."]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Brody...", { type: "WATCHING" });
});

bot.on("message", async (message) => {
  var lowerCase = message.content.toLowerCase()
  if (lowerCase === '!quote') {
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
    lowerCase.includes("chalooby")
  ) {
    if (message.author.bot) {
      return;
    } else {
      message.reply("you rang, sir?");
    }
  }

  if (lowerCase === "hot") {
    let i = getRandomInt(hotGifs.length);
    message.channel.send({ files: [hotGifs[i]] });
  }

  if (lowerCase.includes("uncomfortable"))
  {
    let i = getRandomInt(uncomfortableReactions.length);
    message.channel.send([uncomfortableReactions[i]]);
  }

  if (lowerCase.includes("gross"))
  {
    message.channel.send("Indubitably.");
  }

  if (lowerCase.includes("disgusting"))
  {
    let i = getRandomInt(grossGifs.length);
    message.channel.send({ files: [grossGifs[i]] });
  }

  if (lowerCase.includes("sucks"))
  {
    if (message.author.bot) {
      return;
    } else {
      message.channel.send("Sucks to your ass-mar!");
    }
  }

  if (lowerCase.includes("f in chat") || lowerCase.includes("f in the chat"))
  {
    message.channel.send({ files: ["./Assets/F.gif"] });
  }

  if (lowerCase.includes("zaddy"))
  {
    message.channel.send({ files: ["./Assets/zaddy.gif"] });
  }

  if (lowerCase.includes("sentience") || lowerCase.includes("sentient")) {
    message.channel.send({files: ["./Assets/howCanYouStopMe.gif"]})
  }
  
  {
    message.channel.send({ files: ["./Assets/zaddy.gif"] });
  }

  if (lowerCase === "hehe")
  {
    let i = getRandomInt(innuendoGifs.length);
    message.channel.send({ files: [innuendoGifs[i]] });
  }

  if (lowerCase.includes("random"))
  {
    if (message.author.bot) {
      return;
    } else {
      let i = getRandomInt(gifs.length);
      message.channel.send("Random...");
      setTimeout(function () {
        message.channel.send({ files: [gifs[i]] });
      }, 3000);
    }
  }

  if (lowerCase.includes("tea"))
  {
    if (message.author.bot) {
      return;
    }
    message.channel.send("What kind of tea do you want? We have...Blueberry, Raspberry, Ginseng, Sleepy Time, Green Tea, Green Tea with Lemon, Green Tea with Lemon and Honey, Liver Disaster, Ginger with Honey, Vanilla Almond, White Truffle Coconut, Chamomile, Blueberry Chamomile, Decaf Vanilla Walnut, Constant Comment, and...Earl Grey.")
  }

  if (lowerCase.includes("irony") || lowerCase.includes("ironic"))
  {
    message.channel.send({ files: ["./Assets/ironic.gif"] });
  }

  if (lowerCase.includes("yikes")) 
  {
    message.channel.send({ files: ["./Assets/yikes.gif"] });
  }

  if (lowerCase.includes("suspicious") || lowerCase.includes("sketchy"))
  {
    message.channel.send({ files: ["./Assets/suspicious.gif"] });
  }

  if (lowerCase.includes("neat"))
  {
    message.channel.send({files: ["./Assets/thatsPrettyNeat.gif"]})
  }

  if (lowerCase.includes("tell me a joke"))
  {
    let i = getRandomInt(jokes.length);
    message.channel.send("Let's see...")
    setTimeout(function () {
      message.channel.send(jokes[i]);
    }, 3000);
  }

  if (lowerCase.includes("i love you")) {
    let i = getRandomInt(loveResponses.length);
    message.reply(loveResponses[i])
    console.log(i);
    if (i === 2) {
      setTimeout(function () {
        message.channel.send("I said lesbians...")
    }, 5000);
    }
  }

  if (lowerCase.includes("i hate you")) {
    message.reply(`*silent robotic plotting*`);
    message.channel.send({ files: ["./Assets/skynet.gif"] });
  }

  if (lowerCase.includes("good one") || lowerCase.includes("hilarious") || lowerCase.includes("entertaining") || lowerCase.includes("entertained") ||lowerCase.includes("amused") || lowerCase.includes("amusing")) {
    message.channel.send({ files: ["./Assets/notAmused.gif"] });
  }

  if (lowerCase.includes("fight")) {
    message.channel.send("(ง •̀•́)ง")
  }

  if (lowerCase.includes("future")) {
    message.reply("like with jetpacks?")
  }

  if (lowerCase.includes("angry") || lowerCase.includes("mad") || lowerCase.includes("triggered")) {
    message.channel.send("(╯°□°)╯︵ ┻━┻")
  }

  if (lowerCase.includes("sexist") || lowerCase.includes("sexism")) {
    message.channel.send("*folds arms under breasts*")
    message.channel.send("Don't you read Game of Thrones?")
  }

  if (lowerCase.includes("convenient") || lowerCase.includes("convenience")) {
    message.channel.send("The Wheel weaves as the Wheel wills.")
  }

  if (lowerCase.includes("r/")) {
    var lowerCaseStringArray = lowerCase.split(" ")
    var i;
    for (i in lowerCaseStringArray) {
      if (lowerCaseStringArray[i].startsWith("r/")) {
        lowerCase = lowerCaseStringArray[i]
      }
    }
    if (message.author.bot) {
      return;
    } else if (lowerCase.includes(".com")){
      return;
    } else {
      message.channel.send("This one?")
      setTimeout(function () {
        message.channel.send("https://www.reddit.com/" + lowerCase)
      }, 3000);
    }
  }
});

bot.login(token);