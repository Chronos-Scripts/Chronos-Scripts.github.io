const aboutMeBtn = document.getElementById('about-me-btn');
const workBtn = document.getElementById('work-btn');
const contactBtn = document.getElementById('contact-btn');
const mainContent = document.getElementById('main-content');

aboutMeBtn.addEventListener('click', () => {
  showSection('about-me');
});

workBtn.addEventListener('click', () => {
  showSection('work');
});

contactBtn.addEventListener('click', () => {
  showSection('contact');
});

function showSection(sectionId) {
  const sections = mainContent.querySelectorAll('section');
  sections.forEach(section => section.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
}