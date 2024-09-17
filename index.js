// JavaScript for navigation between sections
function navigateTo(section) {
    const contentDiv = document.getElementById('content');
    const contactFormDiv = document.getElementById('contact-form');
    
    // Remove the 'active' class from all nav links
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    
    // Clear contentDiv
    contentDiv.innerHTML = '';
  
    // Hide contact form by default
    contactFormDiv.style.display = 'none';
    
    // Switch content based on the section
    if (section === 'about') {
      contentDiv.innerHTML = `
        <img src="chicken.jpg" alt="chicken digging in golden hour" class="author-image">
        <div class="bio">
          <p>Monique Ouk is a Cambodian-American writer. Her poetry has been recognized by Stanford University, nominated for the Pushcart Prize, and appears or is forthcoming in The Seventh Wave and The Margins. She has received support from Jackson Hole Writers and 4Culture. Currently, Monique is working on a novel set in the Cambodian countryside.</p>
        </div>`;
      document.getElementById('about-link').classList.add('active'); // Highlight the About link
    }
    
    if (section === 'writing') {
      contentDiv.innerHTML = `
        <img src="dog.jpg" class="author-image">
        <div class="bio">
          <ul>
            <li>2025, "Without Translation," <i>The Margins</i></li>
            <li>2023, <a href="https://www.theseventhwave.org/monique-ouk/2/" target="_blank">"Learning How to Fish Again,"</a> <i>The Seventh Wave</i></li>
            <li>2023, <a href="https://www.theseventhwave.org/monique-ouk/" target="_blank">"Affirmation,"</a> <i>The Seventh Wave</i></li>
            <!-- Add more writing pieces here -->
          </ul>
        </div>`;
      document.getElementById('writing-link').classList.add('active'); // Highlight the Writing link
    }
    
    if (section === 'contact') {
      contentDiv.innerHTML = ''; // Clear content
      contactFormDiv.style.display = 'block'; // Show the contact form
      document.getElementById('contact-link').classList.add('active'); // Highlight the Contact link
    }
  }
  
  // JavaScript for form submission
  document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const result = document.getElementById('result');
    
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    
    result.innerHTML = "Please wait...";
  
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = "Form submitted successfully";
      } else {
        result.innerHTML = json.message;
      }
    })
    .catch(error => {
      result.innerHTML = "Something went wrong!";
    })
    .then(function() {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
  });
  
