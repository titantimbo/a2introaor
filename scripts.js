document.addEventListener('DOMContentLoaded', function () {
    // Select all links in the document
    const links = document.querySelectorAll('a[href^="http"]');
    links.forEach(link => {
        // Set the target attribute to _blank
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer'); // For security
    });
});