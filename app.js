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

    // Start a path
    ctx.beginPath

    // Start the line here
    ctx.moveTo(lastX, lastY);

    // End the line here
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    // Update lastX and lastY for new starting points
    lastX = e.offsetX;
    lastY = e.offsetY;
};

c.addEventListener('mousemove', draw);

c.addEventListener('mousedown', (e) => {
    // Update lastX and lastY with current mouse position
    lastX = e.offsetX;
    lastY = e.offsetY;
    
    isDrawing = true;
});

c.addEventListener('mouseup', () => isDrawing = false);

// If mouse goes outside window
c.addEventListener('mouseout', () => isDrawing = false);