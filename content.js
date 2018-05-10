// The div that pops up when you click the button
var popUpDiv = document.createElement('div')
popUpDiv.style.height = "400px";
popUpDiv.style.position = "fixed"
popUpDiv.style.backgroundColor = "#F4789F";
popUpDiv.style.bottom = "100px";
popUpDiv.style.right = "0px";
popUpDiv.style.zIndex = "10000";
popUpDiv.style.width = "300px"
// popUpDiv.style.display = "none"
popUpDiv.style.borderRadius = "5px 0px 0px 5px"
popUpDiv.style.display = "flex"
popUpDiv.style.flexDirection = "column"
popUpDiv.style.alignItems = "center"

// The button itself.
var button = document.createElement('button');
button.innerText = "Interested? Request callback";
button.style.position = "fixed";
button.style.zIndex = "1";
button.style.bottom = "60px";
button.style.right = "0px";
button.style.borderRadius = "5px 0px 0px 5px"
button.style.padding = "8px 20px 8px 20px"
button.onclick = function () {
  popUpDiv.style.display = "block";
};

// Pop up text
var h41 = document.createElement('h4');
var h42 = document.createElement('h4');

h41.innerText = "Short on time?"
h41.style.marginTop = "10px"
h41.style.marginBottom = "5px"
h41.style.color = "white"

h42.innerText = "We'll call you."
h42.style.color = "white"

popUpDiv.appendChild(h41)
popUpDiv.appendChild(h42)

// Pop up Form
var form = document.createElement('div')
form.innerHTML = '<form action="" method="post"><label style="color: white" for="name">Name:</label><input style="padding: 6px 10px 10px 6px" type="text" class="form" name="name"><label style="color: white" for="phone">Phone number:</label><input style="padding: 6px 10px 10px 6px" type="number" class="form" name="phone"></form><input style="border: solid black 1px;" type="submit" value="Submit" />'

popUpDiv.appendChild(form);

// GDPR

var gdpr = document.createElement('a')
gdpr.innerText = "How will my data be used?"

popUpDiv.appendChild(gdpr);

if (window.location.href.includes("clubs.classforkids")) {

  var body = document.querySelector('body');
  body.appendChild(button);
  body.appendChild(popUpDiv);
  console.log("Heck");

}
