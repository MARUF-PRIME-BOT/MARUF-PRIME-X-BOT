const os = require('os');

async function infoCommand(sock, chatId, message) {
    try {
        const uptimeSeconds = process.uptime();
        const uptime = new Date(uptimeSeconds * 1000).toISOString().substr(11, 8);

        const infoMessage = `
--------------------------------------------
➥ 𝐇𝐞𝐲 𝐌𝐫/𝐦𝐢𝐬𝐬 
╭────《  𝐌𝐘 𝐒𝐄𝐋𝐅 》────⊷
│ ╭────────✧❁✧────────◆
│ │ 🌸 𝐍𝐀𝐌𝐄 :- 𝘼𝙍•~𝙈𝘼𝙍𝙐𝙁-𝐏𝐑𝐈𝐌𝐄-𝐗
│ │ 🏡 𝐅𝐑𝐎𝐌 :- 𝐃𝐇𝐀𝐊𝐀 
│ │ 📘 𝐂𝐋𝐀SS𝐒 :- 𝐇𝐈𝐃𝐄 
│ │ 💖 𝐑𝐋𝐒 :- 𝙊𝙉𝙇𝙔 𝘼𝙁𝙎𝘼𝙉𝘼
│ │ 🎯 𝐇𝐎𝐁𝐁𝐘 :- 𝐑𝐈𝐃𝐄 
│ │ ☎️ 𝐍𝐔𝐌𝐁𝐄𝐑 :- 8801926232615
│ │ ..𝐘𝐎𝐔 𝐂𝐀𝐍 𝐒𝐄𝐄 𝐌𝐘 𝐒𝐓𝐀𝐓𝐔𝐒..
│ ╰────────✧❁✧────────◆
╰══════════════════⊷
--------------------------------------------

🖥️ *Server Info:*
• Platform       : ${os.platform()}
• CPU            : ${os.cpus()[0].model.split(' ')[0]}
• Node.js Version: ${process.version}
• Uptime         : ${uptime}
• Total Memory   : ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB
• Free Memory    : ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB

   *Powered by MARUF PRIME X*`;

        const imageUrl = "https://i.postimg.cc/SQg603Y9/Screenshot-20260419-155158-Tik-Tok.jpg";

        await sock.sendMessage(chatId, { 
            image: { url: imageUrl }, 
            caption: infoMessage 
        }, { quoted: message });

    } catch (error) {
        console.error('Error in info command:', error);
        await sock.sendMessage(chatId, { text: '❌ An error occurred while fetching info.' });
    }
}

module.exports = infoCommand;
