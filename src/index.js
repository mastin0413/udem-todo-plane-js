import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得して初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //divを生成
  const div = document.createElement("div");
  div.className = "list-low";

  //li tag
  const li = document.createElement("li");
  li.innerText = inputText;

  //divタグの子要素に各要素を足す
  div.appendChild(li);

  //未完了リストについて
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
