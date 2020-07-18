const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var a= expr.match(/.{10}/g)
    var c =[];
    
    for(var i=0;i<a.length;i++){
        if (a[i] === '**********') {c[i]=' '}
        else { 
           c[i]=a[i].replace(/00/g,"")
           c[i]=c[i].replace(/10/g,".") 
           c[i]=c[i].replace(/11/g,"-") 
           c[i]=MORSE_TABLE[c[i]];
        }
    }
  
    return c.join('');
    
}

module.exports = {
    decode
}