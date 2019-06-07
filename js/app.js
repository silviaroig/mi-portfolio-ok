function showOverlay(wrapperId) {
    document.getElementById(wrapperId).classList.add('active');
}
function hideOverlay(wrapperId) {
    document.getElementById(wrapperId).classList.remove('active');
}

window.onload = function() {
    console.log('test');
}