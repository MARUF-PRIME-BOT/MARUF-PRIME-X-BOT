const settings = require("../settings");

async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `✨ *MARUF PRIME X IS ALIVE!* ✨\n\n` +
                       `💎 *Version:* ${settings.version || '1.1.5'}\n` +
                       `👑 *Owner:* MARUF-PRIME-X\n` +
                       `🌍 *Status:* Online & Ready\n` +
                       `📂 *GitHub:* https://github.com/MARUF-PRIME-BOT/MARUF-PRIME-X-BOT\n\n` +
                       `🌟 *Features:*\n` +
                       `• Group Management\n` +
                       `• AI & Chat (GPT/Gemini)\n` +
                       `• Media Downloader\n` +
                       `• Fun & Games\n\n` +
                       `Type *.menu* for full command list\n\n` +
                       `🚀 *Powered by MARUF PRIME X*`;

        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                externalAdReply: {
                    title: 'TOM-PRIME-X OFFICIAL',
                    body: 'Subscribe to my YouTube Channel',
                    thumbnailUrl: 'https://github.com/MARUF-PRIME-BOT/MARUF-PRIME-X-BOT',
                    sourceUrl: 'https://youtube.com/@saycotom?si=7QiSIta2cfsdCbtW',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: message });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;
