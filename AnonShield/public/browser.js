const toggleBrowserButton = document.getElementById("browser");

toggleBrowserButton.addEventListener("click", () => {
  const browserFrame = document.createElement("iframe");
  browserFrame.src = "http://localhost:8080/";
  browserFrame.style = "width:100%; height:calc(100% - 30px); border:none;";

  const browserHeader = document.createElement("div");
  browserHeader.id = "browser-header";
  browserHeader.style = "background-color: #555; color: white; padding: 5px; font-weight: bold; font-size: 14px; display: flex; justify-content: space-between; align-items: center;";

  const browserTitle = document.createElement("span");
  browserTitle.textContent = "Browser";

  const minimizeButton = document.createElement("button");
  minimizeButton.textContent = "_";
  minimizeButton.style = "background-color: transparent; border: none; color: white; font-size: 14px; padding: 0 5px; cursor: pointer;";

  const closeButton = document.createElement("button");
  closeButton.textContent = "x";
  closeButton.style = "background-color: transparent; border: none; color: white; font-size: 14px; padding: 0 5px; cursor: pointer;";

  browserHeader.appendChild(browserTitle);
  browserHeader.appendChild(minimizeButton);
  browserHeader.appendChild(closeButton);

  const browserWindow = document.createElement("div");
  browserWindow.id = "browser-window";
  browserWindow.appendChild(browserHeader);
  browserWindow.appendChild(browserFrame);

  document.body.appendChild(browserWindow);

  $(browserWindow).draggable({
    handle: "#browser-header",
    containment: "window",
  }).resizable({
    minHeight: 200,
    minWidth: 300,
    handles: "n, e, s, w, ne, se, sw, nw"
  });

  $(minimizeButton).on("click", function () {
    $(browserWindow).hide();
  });

  $(closeButton).on("click", function () {
    $(browserWindow).remove();
  });
});
