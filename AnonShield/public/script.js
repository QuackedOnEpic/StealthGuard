const clock = document.getElementById("clock");

function updateTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);

const input = document.getElementById('terminal-input');
const output = document.getElementById('terminal-output');

const commands = {
  submit: () => {
  window.open("https://forms.gle/g7PHmshkV7vXio7r8", "_blank");
  displayText('TERMINAL: Opening new tab for submission...');
},

  help: () => {
    displayText('Available commands:\n- help: Displays this help message\n- clear: Clears the terminal\n- submit: submit an app or feature\n- wallpaper [option]: Sets the desktop wallpaper (options: anon, space, ocean');
  },
  clear: () => {
    output.innerHTML = '';
  },
  greet: () => {
    displayText('Welcome, Type "help" for a list of commands');
  },
    wallpaper: (option) => {
    switch (option) {
      case 'anon':
        document.body.style.backgroundImage = 'url("https://cdn.glitch.global/aa1faff1-ccd8-48e2-8bf1-fc0b128ace54/Anon%20Shield.png?v=1682819935360")';
        break;
      case 'none':
        document.body.style.backgroundImage = 'url("https://cdn.glitch.global/aa1faff1-d8-48e2-8bf1-fc0b128ace54/wintrer.jpg?v=1682820702426")';
        break;
      case 'space':
        document.body.style.backgroundImage = 'url("https://cdn.glitch.global/aa1faff1-ccd8-48e2-8bf1-fc0b128ace54/space.jpg?v=1682820798419")';
        break;
      case 'ocean':
        document.body.style.backgroundImage = 'url("https://cdn.glitch.global/aa1faff1-ccd8-48e2-8bf1-fc0b128ace54/corral.jpg?v=1682820983696")';
        break;
    }
  },
  
};

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const inputText = input.value.trim();
    input.value = '';

    const inputArr = inputText.split(' ');
    const command = inputArr.shift();
    const option = inputArr.join(' ');

    if (commands.hasOwnProperty(command)) {
      commands[command](option);
    } else {
      displayText(`Invalid command: ${command}`);
    }
  }
});

function displayText(text) {
  const p = document.createElement('p');
  p.textContent = text;
  output.appendChild(p);
  output.scrollTop = output.scrollHeight;
}

commands.greet();

$(document).ready(function () {
  $("#terminal").draggable({
    handle: ".terminal-header",
    containment: "window",
  }).resizable({
    minHeight: 200,
    minWidth: 300,
    handles: "n, e, s, w, ne, se, sw, nw"
  });

  $("#minimize-terminal").on("click", function () {
    $("#terminal").hide();
    $("#terminal-icon").show();
  });

  $("#close-terminal").on("click", function () {
    $("#terminal").hide();
    $("#terminal-icon").show();
  });

  $("#terminal-icon").on("click", function () {
    $("#terminal").show();
    $("#terminal-icon").hide();
  });
});

const toggleTerminalButton = document.getElementById("toggle-terminal");

toggleTerminalButton.addEventListener("click", () => {
  const terminal = document.getElementById("terminal");
  if (terminal.style.display === "none") {
    terminal.style.display = "block";
  } else {
    terminal.style.display = "none";
  }
});
// In your script.js or start-menu.js

document.addEventListener("DOMContentLoaded", () => {
  // ... Existing code ...

  // Add event listeners for desktop icons
  const desktopBrowser = document.getElementById("desktop-browser");
  const desktopTerminal = document.getElementById("desktop-terminal");

  desktopBrowser.addEventListener("click", () => {
    // Open the browser app
  });

  desktopTerminal.addEventListener("click", () => {
    // Open the terminal app
  });
});
