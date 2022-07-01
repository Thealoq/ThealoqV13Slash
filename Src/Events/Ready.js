const config = global.config
const Discord = require('discord.js')
const image = "https://cdn.discordapp.com/attachments/989207875903713311/990420139340095488/Peach_1.png"
class Events {
    constructor() {
        this.name = "ready"
    }
    execute() {
        /*
        let embed = new Discord.MessageEmbed().setColor("RANDOM").setDescription(`
        :sparkles: Peach Sunucusuna hoşgeldiniz.
        ■ | Argo kelimeler, küfür, rencide edici söylemler vb. şeyler aşırıya gitmemek koşuluya serbesttir eğer ileriye gidilirse 
        ■ | Rahatsız edici paylaşımlar yapmak yasaktır (+18, korku, cinsellik vb.). 
        ■ | Spam yapmak yasaktır. 
        ■ | Reklam yapmak yasaktır (DM reklam, "Sunucuma gelmek isteyen DM" vb. cümleler de yasaktır). 
        ■ | Din, dil, ırk, siyaset ve cinsellik hakkında konuşmak ileriye gidilcek şekilde tartışmak yasaktır. 
        ■ | Herkes birbirine saygılı davranmalıdır. 
        ■ | Tartışma çıkarmak, tartışmaya dahil olmak yasaktır. 
        ■ | Yönetimce verilen kararlara veya sisteme karşı çıkılamaz. Ancak aşırıya kaçılmadığı sürece görüş belirtilebilir. 
        ■ | İstemediği halde insanları inadına etiketlemek yasaktır. - 
        ■ | Kanalları amacı dışında kullanmak yasaktır.
        ■ | Kimse başka bir kişiye üstünlük gösteremez.
        ■ | Aşırı derecede emoji ve büyük harf kullanımı yasaktır. 
        ■ | Ahlaka karşı davranışlar sergilemek yasaktır.
        ■ | Başkalarını rahatsız etmek yasaktır. 
        ■ | Bot basmak yasaktır. (Eğer bot basmaktan ban yediyseniz ve basmadıysanız yetkillere ulaşın.) 
        ■ | Discord TOS'u (https://discord.com/terms) ihlal edecek davranışlarda bulunmak yasaktır. 
        ■ | İmportant kanallarını okumadan hareket etmek yasaktır.
        ■ | Sunucu düzenini bozmak yasaktır. 
        ■ | Boş ve gereksiz başlıklar açmak yasaktır. 
        `);
        let embed2 = new Discord.MessageEmbed().setColor("RANDOM").setDescription(`
        :game_die: Oyun Kurallari
        ■ | İnsanlarin evini kırmak (claim olup olmamasi fark etmiyor) yasaktır
        ■ | Herangi bir Hile Kullanimi yasaktır
        ■ | Tpa tuzaği veya cehennem kapi tuzaği yasaktır 
        ■ | Hırsızlık yasaktır
        Sunucumuza girdiğiniz andan itibaren kuralları okumuş, anlamış ve kabul etmiş sayılırsınız, eğer kuralları kabul etmiyorsanız sunucudan ayrılmanızı tavsiye ederiz.
        `);
        client.channels.cache.find((ch) => ch.id === "989207875903713311").send({
           embeds :[embed,embed2],
           files: [
            image,
          ]
           });
           */
           client.user.setPresence({ activities: [{ name: config.footer }] });
    }
}
module.exports = Events