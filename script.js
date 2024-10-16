const cubeContainer = document.getElementById('cube-container');
let isMouseDown = false;
let startX, startY, currentX = 0, currentY = 0;
let autoRotateInterval;

function rotateCube() {
    currentX += 1; // Tăng góc quay
    currentY += 1; // Tăng góc quay
    const cube = cubeContainer.querySelector('.cube');
    cube.style.transform = `rotateY(${currentX}deg) rotateX(${-currentY}deg)`;
}

cubeContainer.addEventListener('mousedown', (event) => {
    isMouseDown = true;
    startX = event.clientX - currentX;
    startY = event.clientY - currentY;
    cubeContainer.style.cursor = 'grabbing'; // Thay đổi con trỏ khi kéo
    clearInterval(autoRotateInterval); // Dừng quay tự động khi tương tác
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
    cubeContainer.style.cursor = 'grab'; // Khôi phục con trỏ
    autoRotateInterval = setInterval(rotateCube, 100); // Bắt đầu quay tự động lại
});

document.addEventListener('mousemove', (event) => {
    if (!isMouseDown) return;

    currentX = event.clientX - startX;
    currentY = event.clientY - startY;

    const cube = cubeContainer.querySelector('.cube');
    cube.style.transform = `rotateY(${currentX}deg) rotateX(${-currentY}deg)`;
});

// Bắt đầu quay tự động khi không có tương tác
autoRotateInterval = setInterval(rotateCube, 100);
