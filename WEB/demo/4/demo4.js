const links=document.querySelectorAll('.nav li a');
links.forEach(link=>){
    let letters=link.textContent.split('');
    link.textContent='';
    letters.forEach(letters,i)=>{
        let span=document.createElement('span');
        span.textContent=letters;
        span.dataset.text=letters;
        span.style.transitionDelay=I/15+"s";
        link.append(span);
    }
}