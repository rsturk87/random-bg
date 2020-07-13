function randomBg() {
    const bg = ['https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2',
                'https://images.unsplash.com/photo-1490131784822-b4626a8ec96a',
                'https://images.unsplash.com/photo-1476108621677-3c620901b5e7',
                'https://images.unsplash.com/photo-1535270969328-27b968457185'];

    $('body').css({
        'background' : 'url('+ bg[Math.floor(Math.random() * bg.length)] + ') no-repeat',
        'background-attachment' : 'fixed',
        'background-position' : 'center center',
        'background-size' : 'cover'
    });
}

randomBg();

const input = document.getElementById('searchbox');
input.focus();