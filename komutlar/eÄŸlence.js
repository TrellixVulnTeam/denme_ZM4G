const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const EmbedCrewCode = new Discord.MessageEmbed()


.setColor("")
.setTitle("**▬▬▬▬▬▬[** ©️ **VorteX Bot ** ©️ **]▬▬▬▬▬▬**  \n\n> <a:555:847232522584457286> `.istatistik` **Botun istatistik bilgilerini açar.** \n> <a:555:847232522584457286> **Şuanda kullanılan prefix** `.`")
.setThumbnail("https://cdn.discordapp.com/attachments/802911941512134678/802928380492120104/ezgif.com-crop_5.gif")
.setDescription(`


▬▬▬▬▬▬[ <a:jj:847509317707497493> **Eğlence Komutları** <a:jj:847509317707497493> ]▬▬▬▬▬▬

> **» .aduketçek :** Etiketlediğiniz kişiye aduket çekersiniz.
> **» .adamasmaca :** Adam Asmaca Oyununu Oynamanızı Saglar.
> **» .alkış :** Bot Alkışlamaya Başlar
> **» .atatürk :** Atatürk Gifi Atar
> **» .duello :** Bir Kişiyle VS Atmanızı Saglar.
> **» .aşkölçer :** Aşk Seviyenizi Ölçer
> **» .balıktut :** Denizden Balık Tutmanıza Yarar
> **» .efkarım :** Efkar Seviyenizi Ölçer
> **» .espri :** Bot Size Espiriler Yapar
> **» .fal :** Bot Size Falınızı Okur
> **» .fbi :** Fbi Gif Atar
> **» .intiharet :** İntihar Edersiniz
> **» .kahkaha :** Kahkaha Atarsınız.
> **» .kasaaç :** CSGO Kasası Açma Simülasyonu.
> **» .kapak :** Etiketlediniz Kisiye Kapak Laflar Soler.
> **» .kartopu :** Etiketlediginiz Kişiye Kartopu Fırlatırsınız
> **» .kralol :** Kral Gifi Atar
> **» .olayvar :** Olaya Baskın Atar
> **» .piyango :** Piyango çekersin.
> **» .token :** Botun Tokenini Atar
> **» .sarıl :** Belirtilen kişiye sarılır
> **» .sor :** Bota Soru Sorarsınız
> **» .stresçarkı :** Bir stres çarkı döndür.
> **» .tkm :** Taş kağıt makas oyununu oynar.
> **» .türk :** Türk bayrağı gönderir.
> **» .wasted :** Kişinin Fotoğrafına Wasted Efekti Uygular
> **» .yazıtura :** Yazı Tura Oynamanıza Yarar
> **» .yumrukat :** Yumruk Atmanıza Yarar
> **» .zarat :** Zar Atarsınız
> **» .öp :** Etiketlediginiz kişiyi öpersiniz.
> **» .şanslısayım :** Şanslı Sayınızı Tahmin Eder.
> **» .şekerye :** Şeker Yersiniz.

**▬▬▬▬▬▬[** <a:ayar:847496139975557120> **Bilgilendirme** <a:ayar:847496139975557120> **]▬▬▬▬▬▬**

> <a:ww:847500750962819152> **Fikirlerinizi Belirtmekten Çekinmeyin**
> <a:tac:847496141414465546> **Discord Js Sürümü : 12.5.0**
> <a:uzay:783775812867981322> **Yapımcım : MGS-MozdaTV**
`)
 
return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};

  exports.help = {
    name: 'eğlence', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: 'eğlence'
};