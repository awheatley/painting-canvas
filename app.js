const c = document.querySelector('.canvas');
const ctx = c.getContext('2d');

// Set the width and height for canvas (default is 800x800)
c.width = window.innerWidth;
c.height = window.innerHeight;

// Set stroke styles
ctx.strokeStyle = '#216ab2';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

const draw = (e) => {
    if (!isDrawing) return;  // Function doesn't run if not mousedown
};

c.addEventListener('mousemove', draw);
c.addEventListener('mousedown', () => isDrawing = true);
c.addEventListener('mouseup', () => isDrawing = false);

// If mouse goes outside window
c.addEventListener('mouseout', () => isDrawing = false);