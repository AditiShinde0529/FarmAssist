const form = document.getElementById('rental-form');
const photoInput = document.getElementById('photo');
const photoPreview = document.getElementById('photo-preview');

photoInput.addEventListener('change', () => {
  const file = photoInput.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    photoPreview.src = imageUrl;
    photoPreview.style.display = 'block';
  } else {
    photoPreview.style.display = 'none';
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  // Here, you can add code to handle the form submission, such as sending the data to a backend server.
  console.log('Form data:', formData);

  // Reset the form after submission
  form.reset();
  photoPreview.style.display = 'none';
});
