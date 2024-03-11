//! -------------------------------SECTIONS-----------------------------//

function showSection(sectionId) {
    const sections = document.querySelectorAll('#main-content section');
    sections.forEach(function (section) {
      section.style.display = 'none';
    });
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  }
  

//! --------------------------------RADİO-------------------------------//

  const radio = document.getElementById("radio");

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


  document.getElementById('modalContent').innerHTML = displayMessage;


  document.getElementById('modalSound').play();


  document.getElementById('overlay').style.display = 'flex';
}

function closeModal() {

  document.getElementById('overlay').style.display = 'none';

  document.getElementById('contactForm').reset();

  const modalSound = document.getElementById('modalSound');
  modalSound.pause();
  modalSound.currentTime = 0;


  setTimeout(function () {
      window.location.href = 'index.html';
  }, 1000);
}

//! --------------------------------SEARCH-------------------------------//
document.addEventListener("DOMContentLoaded", function () {
    const linkContainers = document.querySelectorAll(".linkler");
    const searchInput = document.getElementById("input");
    const searchButton = document.getElementById("search");
    const searchResultsContainer = document.getElementById("searchArea");
    const anasayfa = document.getElementById("anasayfa");
    const about = document.getElementById("about");
    const contact = document.getElementById("contact");
    const projects = document.querySelectorAll(".projects");
    const searchLinkler = document.getElementById("searchLinkler");

  
    searchButton.addEventListener("click", function (event) {
      searchResultsContainer.style.display = "block";
      anasayfa.style.display = "none";
      about.style.display = "none";
      contact.style.display = "none";
      // projects.style.display = "none";
      projects.forEach(function (project) {
        project.style.display = "none";
      })
      event.preventDefault();
  
      const searchQuery = searchInput.value.toLowerCase();
      let filteredLinks = [];
  
      linkContainers.forEach(function (container) {
        const containerFilteredLinks = Array.from(container.getElementsByClassName("link"))
          .filter(function (link) {
            return link.innerText.toLowerCase().includes(searchQuery);
          })
          .map(function (link) {

            const newLink = link.cloneNode(true);
            const sectionId = container.parentElement.id;
            newLink.innerHTML += " (" + sectionId + ")";
            return newLink;
          });
  
        filteredLinks = filteredLinks.concat(containerFilteredLinks);
      });
  
      displaySearchResults(filteredLinks);
      searchInput.value = "";
  
    });
  
    function displaySearchResults(results) {
      searchLinkler.innerHTML = "";
  
      if (results.length > 0) {
        results.forEach(function (link) {
          searchLinkler.appendChild(link);
        });
      } else {
        searchLinkler.innerText = "No matching results found.";
      }
    }
  
    searchInput.value = "";
  });
  
