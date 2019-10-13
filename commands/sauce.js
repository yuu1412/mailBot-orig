exports.run = (client, message, args) => {
  message.channel.send('If you don\'t know where the image came from, please try a reverse image search like Google, TinEye, ImgOps, or SauceNao!',{files:['https://file.toyhou.se/images/6364892_plnF1TceCBHi3Bg.png']}).catch(console.error);
}
