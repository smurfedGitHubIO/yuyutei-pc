const video = document.getElementById('camera-stream');
const captureButton = document.getElementById('capture-button');
const canvas = document.getElementById('captured-image');
const context = canvas.getContext('2d');
const imageDataInput = document.getElementById('image-data');

// Access the camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error('Error accessing camera:', error);
    });

// Capture image
captureButton.addEventListener('click', () => {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageDataUrl = canvas.toDataURL('image/png');
    imageDataInput.value = imageDataUrl;

  // Optional: Display the captured image
  // const img = new Image();
  // img.src = imageDataUrl;
  // document.body.appendChild(img);

    // Submit the form (assuming you have a form element)
    const form = document.querySelector('form');
    form.submit();
});