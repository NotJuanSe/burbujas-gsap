const grid = document.querySelector('.grid');
const rows = [...document.querySelectorAll('.row')];
const cells = [...document.querySelectorAll('.cell')];

const pull_distance = 70;

const updateCellPositions = () => {
  cells.forEach((cell) => {
    const rect = cell.getBoundingClientRect();
    cell.center_position = {
      x: (rect.left + rect.right) / 2,
      y: (rect.top + rect.bottom) / 2,
    };
  });
};

const handlePointerMove = (e = { x: -pull_distance, y: -pull_distance }) => {
  const { pageX: pointer_x, pageY: pointer_y } = e;
  cells.forEach((cell) => {
    const diff_x = pointer_x - cell.center_position.x;
    const diff_y = pointer_y - cell.center_position.y;
    const distance = Math.sqrt(diff_x * diff_x + diff_y * diff_y);

    if (distance < pull_distance) {
      const percent = distance / pull_distance;
      cell.pulled = true;
      gsap.to(cell, {
        duration: 0.2,
        x: diff_x * percent,
        y: diff_y * percent,
      });
    } else {
      if (!cell.pulled) {
        return;
      }

      cell.pulled = false;

      gsap.to(cell, {
        duration: 1,
        x: 0,
        y: 0,
        ease: "elastic.out(1, 0.3)",
      });
    }
  });
};

const init = () => {
  updateCellPositions();
  window.addEventListener('resize', updateCellPositions);
  window.addEventListener('pointermove', handlePointerMove);
  document.body.addEventListener('pointerleave', () => handlePointerMove());
};

init();
