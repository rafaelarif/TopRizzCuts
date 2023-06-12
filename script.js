document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var fullName = document.getElementById('fullName').value;
  var email = document.getElementById('email').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;
  var barber = document.getElementById('barber').value;
  var service = document.getElementById('service').value;

  if (!fullName || !email || !date || !time || !barber || !service) {
    alert('Please fill out all fields.');
    return;
  }

  var confirmationMessage = `Thanks for booking, ${fullName}! Here are your booking details:\n\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nBarber: ${barber}\nService: ${service}`;

  document.getElementById('confirmationMessage').textContent = confirmationMessage;

  var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
  confirmationModal.show();
});