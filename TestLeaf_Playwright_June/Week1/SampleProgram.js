console.log("Welcome To Playwright session")

let text = "Learn String and Function";
const s = text.split(" ");

console.log(s)

let ans = " ";
for (let i = 3; i >= 0; i--) {
    ans += s[i] + " ";
}

console.log("Reversed String:" + ans.slice(0, ans.length - 1))