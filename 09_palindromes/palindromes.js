const palindromes = function (str) {
    let notAllowed = ['.', ',', '!', '?', ' ']
    let strArr = str.split("");
    let testArr = [];
    let counter = 0;

    for(let i = 0; i < strArr.length; i++)
    {
        if(notAllowed.indexOf(strArr[i]) !== -1)
        {
            //console.log(strArr[i])
            // testArr.push(strArr[i]);
            strArr.splice(strArr.indexOf(strArr[i]), 1);
        }
    }

    for(let i = 0; i < strArr.length; i++)
    {
        if(notAllowed.indexOf(strArr[i]) !== -1)
        {
            //console.log(strArr[i])
            testArr.push(strArr[i]);
            strArr.splice(strArr.indexOf(strArr[i]), 1);
        }
    }
    let lowerStr = strArr.join('').toLowerCase();
    console.log(lowerStr);
    let newArr1 = lowerStr.split('');
    let newArr2 = newArr1.slice().reverse();

    for(let i = 0; i < newArr1.length; i++)
    {
        if(newArr1[i]===newArr2[i])
        {
            counter += 1;
        }
    }

    if(counter===newArr1.length)
    {
        return true;
    }
    else
    {
        return false;
    }
};

console.log(palindromes('A car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;
