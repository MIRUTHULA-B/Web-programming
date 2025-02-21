document.querySelectorAll('.hotspot').forEach(function(hotspot) {
    hotspot.addEventListener('click', function(event) {
        alert('You clicked on ' + hotspot.title);
        // Additional logic can be added here if needed.
    });
});
