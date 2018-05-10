

if (window.location.href.includes("clubs.classforkids")) {
  var popUpDiv = document.createElement('div')
  popUpDiv.style.width = "200px";
  popUpDiv.style.height = "200px";
  popUpDiv.style.position = "fixed"
  popUpDiv.backgroundColor = "#000000";
  popUpDiv.style.bottom = "80px";
  popUpDiv.style.right = "10px";
  console.log(popUpDiv);

  var button = document.createElement('button');
  button.innerText = "Interested? Request callback";
  button.style.position = "fixed";
  button.style.zIndex = "1";
  button.style.bottom = "60px";
  button.style.right = "0px";
  button.style.borderRadius = "5px 0px 0px 5px"
  button.style.padding = "8px 20px 8px 20px"
  var body = document.querySelector('body');
  body.appendChild(button);
  body.appendChild(popUpDiv);
  console.log("Heck");

}
