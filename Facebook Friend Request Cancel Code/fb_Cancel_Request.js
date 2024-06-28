setInterval(() => {
  const allButtons = document.getElementsByClassName("xuxw1ft");
  for (const item of allButtons) {
    if (item.innerText === "Cancel request") {
      item.click();
    }
  }
}, 2000);
