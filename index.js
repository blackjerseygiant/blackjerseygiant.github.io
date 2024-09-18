// js for navigation between sections
function navigateTo(section) {
    const contentDiv = document.getElementById('content');
    const contactFormDiv = document.getElementById('contact-form');
    
    // remove the 'active' class from all nav links
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    
    // clear contentDiv
    contentDiv.innerHTML = '';
  
    // hide contact form by default
    contactFormDiv.style.display = 'none';
    
    // switch content based on the section
    if (section === 'about') {
      contentDiv.innerHTML = `
        <img src="chicken.jpg" alt="chicken digging in golden hour" class="author-image">
        <div class="bio">
          <p>Monique Ouk is a Cambodian-American writer. Her poetry has been recognized by Stanford University, nominated for the Pushcart Prize, and appears or is forthcoming in The Seventh Wave and The Margins. She has received support from Jackson Hole Writers and 4Culture. Currently, Monique is working on a novel set in the Cambodian countryside.</p>
       <br><br>
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
          </ul>
        </div>`;
      document.getElementById('writing-link').classList.add('active'); 
    }
    
    if (section === 'contact') {
      contentDiv.innerHTML = ''; // clear content
      contactFormDiv.style.display = 'block'; // show the contact form
      document.getElementById('contact-link').classList.add('active'); 
    }

    if (section === 'khmer') {
      contentDiv.innerHTML = `
        <img src="angkorwat.jpg" alt="Angkor Wat | Cambodian-American poets and writers" class="author-image">
        <div class="bio khmer-essay">
          <h2>Cambodian-American poets, writers, and others from the diaspora</h2>
          <ul>
            <li>Poetry: 
                <a href="https://www.monicasok.com/" target="_blank">Monica Sok</a>,
                <a href="https://www.sokunthary.com/about-me" target="_blank">Sokunthary Svay</a>,
                <a href="https://www.pichchendabao.com/" target="_blank">Pichchenda Bao</a>,
                <a href="https://www.bunkongtuon.com/" target="_blank">Bunkong Tuon</a>,
                <a href="https://www.aprillim.com/" target="_blank">Alice Lim</a>
            </li><br>

            <li>Fiction:
                <a href="https://www.harpercollins.com/products/afterparties-anthony-veasna-so?variant=39696421224482" target="_blank">
                Anthony Veasna So</a>, 
                <a href="https://vaddeyratner.com/" target="_blank">Vaddey Ratner</a>,
                <a href="http://www.vichetchum.com/" target="_blank">Vichet Chum</a>,
                <a href="https://www.instagram.com/smeasuniverse/" target="_blank">Sambath Meas</a>
            </li><br>

            <li>Memoir:
                <a href="https://www.slownoodles.com/" target="_blank">Chanta Nguon</a>,
                <a href="https://www.putsata.com/" target="_blank">Putsata Reang</a>,
                <a href="https://www.chanrithyhim.com/" target="_blank">Chanrithy Him</a>,
                <a href="https://drawnandquarterly.com/author/tian-veasna/" target="_blank">Tian Veasna</a>,
                <a href="https://www.alicepung.net/" target="_blank">Alice Pung</a>,
                <a href="https://www.underthenagatail.com/" target="_blank">Mae Bunseng & James Taing</a>,
                <a href="https://www.maylytao.com/" target="_blank">Mayly Tao</a>,
                <a href="https://www.loungung.com/" target="_blank">Loung Ung</a>
            </li><br>
            
            <li>Archival projects:
                <a href="https://www.coloringcambodia.com/about" target="_blank">Coloring Cambodia</a>,
                <a href="https://www.instagram.com/cambodianarchives" target="_blank">@cambodianarchives</a>

          
          <br><br>
          <h2>𓆝 𓆟 𓆞</h2>
          <p>I first discovered the poet Monica Sok when I was fourteen.</p>
          <p>At the time, Loung Ung (<i>First They Killed My Father</i>) and Vaddey Ratner 
          (<i>In the Shadow of the Banyan</i>) were the only Cambodian authors that I knew of. 
          Almost everything else I came across from the diaspora was centered on genocide. Make no mistake: 
          this literature is essential. As a pre-teen, I devoured every Cambodian genocide memoir or novel 
          I could find at my local library, seeking answers to the questions I was too afraid to ask my own parents. 
          But at some point, the weight of these emotions—shaped by my parents’ survival, our losses, and what 
          I inherited—grew too heavy to hold. I needed to understand of the rest of my world.</p>
          <p>When I first googled "cambodian american poet," I was desperate to find someone like me, a 
          child of genocide survivors, who could help me make sense of the joy and grief and loss and guilt and nostalgia 
          that I carried.  Monica Sok was the first, and at the time, the only writer I found, but possibly the 
          most impactful to me since. Here I was, alone in my bedroom, reading words that I swore were taken 
          from my own life too:
          </p>
          <p>
          "I want to know the names of things, <br>
          only the names in Khmer. <br>
          I want to know the names of trees <br>
          whose roots grow on temple roofs. <br><br>

          I don't want to know my uncle was never found. <br>
          When my aunts looked for his face, his was not there. <br>
          […]"
          <br><br>
          —"Yearning", <i>Year Zero</i>
          </p>
          <p> * </p>
          <p>
          I will never be able to fully articulate the emotion I felt upon realizing that a writer before me 
          carried this pain too, yet still moved tenderly through her life. Since then, I’ve been fortunate to 
          find other Cambodian-American writers over the past decade. I’m in awe of our community and excited 
          for the stories, novels, poems, and art we will continue to share with each other and the world. 
          If you found this page by googling “Cambodian-American poets” or “Cambodian-American writers,” 
          I hope this list helps you discover more voices, just as I did.
          </p>
          <br><br><br>
        </div>`;
      document.getElementById('khmer-link').classList.add('active'); 
    }

  }
  
  // js for form submission
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
  
