module.exports = function reverse (n) {

    n = n.toString();


    let str = '';

    for (let i = n.length; i > 0; i--) {
        str += n[i - 1];        
    }


    return parseInt(str);
  
}
