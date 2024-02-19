//! -------------------------------SECTIONS-----------------------------//

function showSection(sectionId) {
    var sections = document.querySelectorAll('#main-content section');
    sections.forEach(function (section) {
      section.style.display = 'none';
    });
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  }
  

//! --------------------------------RADİO-------------------------------//

  var radio = document.getElementById("radio");

  function toggleRadio() {
      if (radio.paused) {
          radio.play();
      } else {
          radio.pause();
      }
      radio.volume = 0.03;
  }

  function pauseRadio() {
      radio.pause();
  }

  function setVolume(volume) {
      radio.volume = parseFloat(volume);
  }

  radio.addEventListener('playing', function () {
      radio.volume = 0.03;
  });

//! --------------------------------CONTACT-------------------------------//

function showFormData(event) {
  event.preventDefault();

  const username = document.getElementById('Username').value;
  const email = document.getElementById('Email').value;
  const message = document.getElementById('Your_Message').value;
  const displayMessage = `Username: ${username}<br>Email: ${email}<br>Message: ${message}`;

  // Set modal content
  document.getElementById('modalContent').innerHTML = displayMessage;

  // Play modal sound
  document.getElementById('modalSound').play();

  // Display modal
  document.getElementById('overlay').style.display = 'flex';
}

function closeModal() {
  // Hide modal
  document.getElementById('overlay').style.display = 'none';

  // Reset form
  document.getElementById('contactForm').reset();

  // Stop and rewind modal sound
  const modalSound = document.getElementById('modalSound');
  modalSound.pause();
  modalSound.currentTime = 0;

  // Redirect after a delay
  setTimeout(function () {
      window.location.href = 'index.html';
  }, 1000);
}

