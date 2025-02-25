function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Reservation submitted! We’ll confirm soon.');
    this.reset();
});