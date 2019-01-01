const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if(message.content == '!Vent') {
        message.author.send('Hello I am 🔥Vent_Bot🔥! All messages are private and will not be shared! Feel free to delete messages! Send message !Commands to find out the commands!')
    }
    if(message.content == '!NeedLove') {
        message.author.send(':heart: :blush:')
    }
    if(message.content == '!NeedKindness') {
        message.author.send('You are the best friend anyone could ask for! :smiley:')
    }
    if (message.content == '!Sad'){
        message.author.send('Turn that frown upside down! :smiley: Be happy silly!')
    }
    if (message.content == '!Commands'){
        message.author.send('!Vent , !NeedLove , !NeedKindness, !Sad, and !Commands')
    }
});

bot.login('NTI5NDY5MDg4MzE4MzU3NTE1.DwxYaQ.MdHLxSuSyf6FF7USx8ntnhv-oOg');