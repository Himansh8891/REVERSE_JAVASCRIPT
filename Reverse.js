function reverseWords(str) {
    let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" ");
}
let a = reverseWords("hi hello");
console.log(a);