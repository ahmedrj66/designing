document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const button = e.target.querySelector('button');
    button.textContent = 'Sending...';
    button.disabled = true;
    
    try {
        // Simulate an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Alert or handle successful submission
        alert('Thank you for your message! I will get back to you soon.');
        e.target.reset();
    } catch (error) {
        // Handle errors here
        console.error('Error:', error);
        alert('There was a problem sending your message. Please try again.');
    } finally {
        button.textContent = 'Send Message';
        button.disabled = false;
    }
});


/* Basic Reset */
