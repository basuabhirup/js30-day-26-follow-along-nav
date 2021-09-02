const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout( () => {
    if (this.classList.contains('trigger-enter')) {
      this.classList.add('trigger-enter-active');
    }    
  }, 150);
  //Arrow functions inherit 'this' property from its parent, unlike normal functions.
  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    x: dropdownCoords.left - navCoords.left,
    y: dropdownCoords.top - navCoords.top
  }

  background.style.height = `${coords.height}px`;
  background.style.width = `${coords.width}px`;
  background.style.transform = `translate(${coords.x}px, ${coords.y}px)`
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
