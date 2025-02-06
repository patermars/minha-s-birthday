document.addEventListener('DOMContentLoaded', () => {
    const photoLink = document.getElementById('photoLink');
    const surpriseImage = document.getElementById('surpriseImage');
    const bgMusic = document.getElementById('bgMusic');

    // Create a modal for the enlarged image
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.display = 'none';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    const modalImage = document.createElement('img');
    modalImage.style.maxWidth = '90%';
    modalImage.style.maxHeight = '90%';
    modalImage.style.borderRadius = '10px';

    modal.appendChild(modalImage);
    document.body.appendChild(modal);

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Button click event
    photoLink.addEventListener('click', () => {
        // Play background music
        bgMusic.play();

        // Set modal image source and display
        modalImage.src = surpriseImage.src;
        modal.style.display = 'flex';
    });
});