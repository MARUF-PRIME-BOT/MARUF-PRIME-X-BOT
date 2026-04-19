const moment = require('moment-timezone');
const fetch = require('node-fetch');

async function githubCommand(sock, chatId, message) {
  try {
    const res = await fetch('https://github.com/MARUF-PRIME-BOT/MARUF-PRIME-X-BOT');
    if (!res.ok) throw new Error('Error fetching repository data');
    const json = await res.json();

    let txt = `*乂  MARUF PRIME X BOT  乂*\n\n`;
    txt += `✩  *Name* : ${json.name}\n`;
    txt += `✩  *Watchers* : ${json.watchers_count}\n`;
    txt += `✩  *Size* : ${(json.size / 1024).toFixed(2)} MB\n`;
    txt += `✩  *Last Updated* : ${moment(json.updated_at).tz('Asia/Dhaka').format('DD/MM/YY - HH:mm:ss')}\n`;
    txt += `✩  *URL* : ${json.html_url}\n`;
    txt += `✩  *Forks* : ${json.forks_count}\n`;
    txt += `✩  *Stars* : ${json.stargazers_count}\n\n`;
    txt += `📺 *YouTube:* https://youtube.com/@saycotom\n\n`;
    txt += `💥 *Powered by MARUF PRIME X*`;

    const myNewPic = 'https://i.postimg.cc/SQg603Y9/Screenshot-20260419-155158-Tik-Tok.jpg';

    await sock.sendMessage(chatId, { 
        image: { url: myNewPic }, 
        caption: txt
    }, { quoted: message });

  } catch (error) {
    console.error(error);
    await sock.sendMessage(chatId, { text: '❌ Error fetching repository information.' }, { quoted: message });
  }
}

module.exports = githubCommand;
