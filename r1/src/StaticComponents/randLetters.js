

export default function randLetters() {
    const list = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
    var res = "";
    for(var i = 0; i < 8; i++) {
        var rnd = Math.floor(Math.random() * list.length);
        res = res + list.charAt(rnd);
    }
    return res;
}