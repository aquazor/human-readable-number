module.exports = function toReadable(number) {
    const zero = "zero";
    const oneToNine = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const tenToNinteen = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const decades = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundred = "hundred";

    let readable = "";

    if (number === 0) {
        readable = zero;
    }
    if (number > 0 && number < 10) {
        readable = oneToNine[number];
    } else if (number >= 10 && number < 20) {
        readable = tenToNinteen[number % 10];
    } else if (number >= 20 && number < 100) {
        readable =
            decades[Math.floor(number / 10)] + " " + oneToNine[number % 10];
    } else if (number >= 100 && number < 1000 && number % 100 < 20) {
        //103, 113
        readable = `${oneToNine[Math.floor(number / 100)]} ${hundred} ${
            // 103 / 100 = 1.03 , Math.floor(1.03) = 1
            // 113 / 100 = 1.13 , Math.floor(1.13) = 1
            Math.floor(number / 10) % 10
                ? // 103 / 10 = 10.3 , Math.floor(10.3) = 10 , 10 % 10 = 0 => false (: ...)
                  // 110 / 10 = 11 , Math.floor(11) = 11 , 11 % 10 = 1 => true (... :)
                  tenToNinteen[number % 10]
                : // 113 % 10 = 3 , tenToNinteen[3] = 'thirteen'
                  oneToNine[number % 10]
            // 103 % 10 = 3 , oneToNine[3] = 'three'
        } `;
    } else if (number >= 100 && number < 1000 && number % 100 >= 20) {
        readable = `${oneToNine[Math.floor(number / 100)]} ${hundred} ${
            decades[Math.floor(number / 10) % 10]
        } ${oneToNine[Math.floor(number % 10)]}
      `;
    } else if (number > 999 || number < 0) {
        readable = "I can make numbers readable from 0 to 999";
    } else {
        readable;
    }
    // console.log(readable.trim());
    return readable.trim();
};
