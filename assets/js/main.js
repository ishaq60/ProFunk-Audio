document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu
    var hamburger = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.nav-links');

    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
            } else {
                menu.classList.add('active');
            }
        });
    }

    // Close menu when clicking links
    var menuItems = document.querySelectorAll('.nav-links a');
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function() {
            if (menu) {
                menu.classList.remove('active');
            }
        });
    }


    var playBtns = document.querySelectorAll('.play-btn');
    for (var i = 0; i < playBtns.length; i++) {
        playBtns[i].addEventListener('click', function(e) {
            e.preventDefault();
            return false;
        });
    }

    var allButtons = document.querySelectorAll('button, .contact-btn, .explore-btn, .card-read-more');
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('mouseover', function() {
            this.style.opacity = '0.8';
        });
        allButtons[i].addEventListener('mouseout', function() {
            this.style.opacity = '1';
        });
    }

    // Card pointer
    var audioCards = document.querySelectorAll('.sound-card, .image-card, .anime-card');
    for (var i = 0; i < audioCards.length; i++) {
        audioCards[i].style.cursor = 'pointer';
    }
});
