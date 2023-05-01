const gridSize = 100; // Define the grid size

function snapToGrid(value) {
  return Math.round(value / gridSize) * gridSize;
}

function enableDesktopIconDragging() {
  $(".desktop-icon").draggable({
    containment: "#desktop",
    scroll: false,
    start: function (event, ui) {
      $(this).addClass("dragging");
    },
    drag: function (event, ui) {
      // Snap to the grid while dragging
      ui.position.top = snapToGrid(ui.position.top);
      ui.position.left = snapToGrid(ui.position.left);
    },
    stop: function (event, ui) {
      $(this).removeClass("dragging");
    },
  });
}
