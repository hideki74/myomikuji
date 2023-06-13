"use strict";

{
  const omikuji = ["大吉", "中吉", "小吉", "吉" , "末吉", "凶"];
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');

  btn.addEventListener('click', () => {
    const n = Math.floor(Math.random() * omikuji.length);
    result.textContent = omikuji[n];
  });
}