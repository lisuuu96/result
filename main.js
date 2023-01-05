let text = 'Uwielbiam Javascript'
let message = ' Jestem swietnym programista'

function length(text1,text2) {
    if(text1.length>text2.length){
        return text1;
    }
    else(text1.length<text2.length){
        return text2;
    }

}
length(text,message)
console.log(length)