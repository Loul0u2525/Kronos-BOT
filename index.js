const Discord = require ("discord.js");
const fs = require ("fs");
const config = require ("./storage/config.json")
const client = new Discord.Client();
const prefix = config.prefix;

client.login(config.token);

//Démarage
client.once('ready', async () => {
    console.log('Ready!');
    console.log("Connecté en tant que  :"  + client.user.tag)
    client.user.setActivity("Préfix : * | (se fait coder)", {type: "PLAYING"});
});

//Message reply
client.on ("message" , message =>{
    if (!message.guild) return
    if (message.content === prefix + "proxii"){
        message.channel.send(`C'est qui ? C'est un gros gay !`)
    }
    if (message.content === prefix + "horus"){
        message.channel.send("Horus le dernier dinausaure, c'est notre amis et bien plus encore, on t'aime Kronosaurus !")
    }
    if (message.content === prefix + "batzr"){
        message.channel.send("Le monsieur qui est en Tiers-temps, mais chuuuut on lui pardonne :wink:")
    }
    if (message.content === prefix + "raiko"){
        message.channel.send("Ce monsieur à eu une seconde vie, sous le nom de Rekone experte")
    }
    if (message.content === prefix + "loulou"){
        message.channel.send("Fait rager tout le monde avec sa manette :joy:")
    }
});