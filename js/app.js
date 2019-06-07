function showOverlay(wrapperId) {
    document.getElementById(wrapperId).classList.add('active');
}
function hideOverlay(wrapperId) {
    document.getElementById(wrapperId).classList.remove('active');
}

window.onload = function() {
    var scrollContainer = document.getElementById('scroll-container');

    document.addEventListener('scroll', function() {
        var offsetHeight = window.scrollY;

        if (offsetHeight > 12) {
            scrollContainer.classList.add('hidden');
        }
        else {
            scrollContainer.classList.remove('hidden');
        }
    });
}