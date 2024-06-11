document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('#menu-header a');
    const mains = document.querySelectorAll('main');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetMain = document.getElementById(targetId);

            menuLinks.forEach(link => link.classList.remove('activate'));

            this.classList.add('activate');
           
            mains.forEach(main => main.style.display = 'none');
            
            targetMain.style.display = 'flex';
        });
    });
    
    document.getElementById('main-home').style.display = 'flex';
});

document.addEventListener('DOMContentLoaded', function() {
    const progressElements = document.querySelectorAll('.progress');
    progressElements.forEach(progressElement => {
        const progressValue = progressElement.getAttribute('data-progress');
        progressElement.style.width = progressValue + '%';
    });
});
