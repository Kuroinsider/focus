// script.js
document.querySelectorAll('.option').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.option').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
    });
});

document.getElementById('searchBtn').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    const selectedEngine = document.querySelector('.options .selected').getAttribute('data-target');
    let url = '';
    switch (selectedEngine) {
        case 'google':
            url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            break;
        case 'youtube':
            url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
            break;
    }
    this.firstChild.classList.add('spinning');  // Ensure to add CSS for this animation
    setTimeout(() => { // Redirect after a slight delay to show animation
        window.location.href = url;
    }, 500);
});

