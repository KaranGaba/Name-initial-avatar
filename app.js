// selecting components
let firstname, lastname, generate, avatar, ctx, color;
firstname = document.getElementById("firstname");
lastname = document.getElementById("lastname");
generate = document.querySelector("form");

//creating canvas
avatar = document.createElement("canvas");
avatar.width = avatar.height = "200";
ctx = avatar.getContext("2d");
ctx.font = `${avatar.width / 2}px Arial`;
ctx.textAlign = "center";

//generating color
color = [
  "#5050ff",
  "#50ff50",
  "#ff5050",
  "#ff5000",
  "#ff0050",
  "#0050ff",
  "#00ff50",
  "#50ff00",
  "#5000ff",
];

//functions
//function to get name initials
function getInitials() {
  if (lastname.value == "") {
    let Initials = firstname.value[0].toUpperCase();
    return Initials;
  } else {
    let Initials = (firstname.value[0] + lastname.value[0]).toUpperCase();
    return Initials;
  }
}

//function to create avatar
function createAvatar(Initials) {
  let random = Math.floor(Math.random() * color.length);
  //clear canvas
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, avatar.width, avatar.height);

  //add background
  ctx.fillStyle = `${color[random]}60`;
  ctx.fillRect(0, 0, avatar.width, avatar.height);

  //add text
  ctx.fillStyle = color[random];
  ctx.fillText(Initials, avatar.width / 2, (65 / 100) * avatar.height);

  //generate as Image
  let dataURL = avatar.toDataURL();
  document.getElementById("img").src = dataURL;
}
//Event Listener
generate.addEventListener("submit", (e) => {
  e.preventDefault();
  createAvatar(getInitials());
});

// Preloaded avatar for example
createAvatar("KG");