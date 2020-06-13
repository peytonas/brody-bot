const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.PREFIX;
const token = process.env.BOT_TOKEN;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setActivity(`for guests`, {
    type: 'WATCHING'
  });
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.guild) return;
  if (!msg.content.startsWith(prefix)) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);

  const cmd = args.shift().toLowerCase();

  if (cmd === "say") {
    // Check if you can delete the message
    if (msg.deletable) msg.delete();

    msg.channel.send(args.join(" "));
  }

  if (cmd === "animerecommendations") {
    msg.channel.send("For information on where you can watch anime, please us the $watchanime command.\nMy anime recommendations are:\nA Certain Magical Index\nA Certain Scientific Railgun\nA Certain Scientifc Accelerator\nAbsolute Duo\nAngel Beats!\nAttack on Titan\nBlack Rock Shooter\nBOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense\nCharlotte\nCells at Work!\nChobits\nChuunibyou demo Koi ga Shitai!\nDanMachi\nDarling in the Franxx\nDeath Note\nDemon Slayer: Kimetsu no Yaiba\nDurarara!!\nElfen Lied\nFairy Tail\nFate/Stay Night (This is a long series, watch order can be found at https://www.reddit.com/r/fatestaynight/comments/df8rvo/rfatestaynights_official_viewing_order_guide_v2/?utm_source=share&utm_medium=web2x)\nGabriel Dropout\nGamers!\nGuilty Crown\nKaguya-sama: Love is War\nK-On!\nKonosuba (Full name is Kono Subarashii Sekai ni Shukufuku wo! I would recommend watching this after watching some of the isekai anime, like BOFURI, DanMachi, No Game No Life, Re:ZERO, and Sword Art Online)\nLucky Star\nMahouka Koukou no Rettousei\nMekakucity Actors\nMirai Nikki\nMiss Kobayahi's Dragon Maid\nMy Hero Academia\nNaruto\nNew Game!\nNo Game No Life\nOne Piece\nOwari no Seraph\nPlastic Memories\nPuella Magi Madoka Magica\nRakudai Kishi no Cavalry\nRe:ZERO Starting Life in Another World\nRWBY (This is not an actual anime, it can be found at https://roosterteeth.com/series/rwby?season=1)\nSakurasou no Pet na Kanojo\nShigatsu wa Kimi no Uso (also known as Your Lie in April)\nSoul Eater\nSteins;Gate\nSword Art Online\nThat Time I Got Reincarnated as a Slime\nThe Helpful Fox Senko-san\nThe Melancholy of Haruhi Suzumiya\nThe Monogatari Series (This is a long series, the watch order can be found at https://www.reddit.com/r/anime/comments/acwgj7/monogatari_series_simple_watch_order_guide_2019/?utm_source=share&utm_medium=web2x, I would recommend watching Kizumonogatari after Owarimonogatari)\nThe Promised Neverland\nThe Rising of the Shield Hero\nTokyo Ghoul\nYuru Yuri");
  }

  if (cmd === "watchanime") {
    msg.channel.send("Most of the anime on the list can be found on Crunchyroll. However Crunchyroll is not guaranteed to have all of the shows, due to licensing issues. If you do not have or wish to pay for Crunchyroll, you can use Kissanime (http://kissanime.ru/). (This is considered pirating, if your moral code opposes that.) While this website has every anime (and some honorary anime) ever released, there are many, many ads. To combat this, you will need a special adblock, as normal ones are blocked on the site. A guide to do this can be found at https://www.reddit.com/r/KissAnime/comments/fph29m/2020guide_how_to_bypass_the_adblock_ban/");
  }
});

client.login(token);
