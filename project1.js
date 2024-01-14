// Check if the page is already at the top on page load
document.addEventListener('DOMContentLoaded', function () {
    scrollFunction();
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var btn = document.getElementById('back-to-top-btn');

    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
