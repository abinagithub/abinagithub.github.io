const contactBtn = document.getElementById('contact-btn')
contactBtn.addEventListener('click', () => {
    const y = document.getElementById('contact-scroll').getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: y,
      behavior: 'smooth'
    });
    
})

const skill = document.getElementById('skill-btn')
skill.addEventListener('click', () => {
    const y = document.getElementById('skill-scroll').getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: y,
      behavior: 'smooth'
    });
    
})

const privous = document.getElementById('privous-btn')
privous.addEventListener('click', () => {
    const y = document.getElementById('privous-scroll').getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: y,
      behavior: 'smooth'
    });
    
})

const about = document.getElementById('about-btn')
about.addEventListener('click', () => {
    const y = document.getElementById('about-scroll').getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: y,
      behavior: 'smooth'
    });
    
})