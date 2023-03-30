"use strict";

console.log("fighting!");
console.log(document); // html 태그 전체를 콘솔에 띄워주자.
const url = window.location.href;
console.log(url);
const mainUrl = url.replace("login.html", "main.html");
console.log(mainUrl);
// console.log(location.replace("./main.html"));
let loginButton = document.getElementById("submit"); // 버튼을 만들고.
// let login = document.querySelector("button");
loginButton.addEventListener("click", loginFunc); // 'click'이란 id의 버튼을 누르면 signinFunc 함수를 실행.

function loginFunc() {
  let userid = document.getElementById("id").value; // userid 의 값을 받아와 넣음.
  let userpw = document.getElementById("password").value; // userpw 의 값을 받아와 넣음.

  if (userid === "chlwo796" && userpw === "12345678") {
    alert("로그인 성공");
    moveToMain;
    // window.location.href = mainUrl;
    console.log(location.href);
    location.replace("./main.html");
    // history.back;
    // location.href = "../main.html";
    // const url = window.location.href;
    console.log(url);
  } else if (userid === null) {
    alert("아이디를 입력해 주세요.");
  } else {
    alert("비밀번호를 입력해 주세요.");
  }
}
// function moveToMain() {
//   let link = "main.html";
//   location.href = link;
// }
// login.addEventListener("click", moveToMain);
