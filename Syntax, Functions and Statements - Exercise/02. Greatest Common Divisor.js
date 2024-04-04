function gcd(firstNum, secondNum) {
    let smallerNum = Math.min(firstNum, secondNum);
    
    for (let i = smallerNum; i >= 1; i--) {
        if (firstNum % i === 0 && secondNum % i === 0) {
            console.log(i);
            break;
        }
    }
}

gcd(15, 5);
gcd(2154, 458);