"use strict"
//時間変更
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const hour = now.getHours();
const min = now.getMinutes();

const output = `${year}/${month + 1}/${date}/ ${hour}:${min}`;
document.getElementById("time").textContent = output;

//コンファーム表示
document.getElementById("sign").addEventListener("click" , () => {
    window.confirm("登録しました");
});


//プロンプト表示 facebook
document.getElementById("face").addEventListener("click" , () => {
    const one = window.prompt("facebookと入力で登録");
    if(one === "facebook") {
        window.alert("登録が完了しました");
    } else {
        window.alert("登録に失敗しました");
    }
});

//プロンプト表示　google
document.getElementById("goo").addEventListener("click" , () => {
    const two = window.prompt("googleと入力で登録");
    if(two === "google") {
        window.alert("登録が完了しました");
    } else {
        window.alert("登録に失敗しました");
    }
});
