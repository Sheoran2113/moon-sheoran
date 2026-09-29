const menu=document.querySelector('.menu');
const nav=document.querySelector('#nav');

menu?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menu.setAttribute('aria-expanded',String(open));
});

nav?.querySelectorAll('a').forEach((link)=>link.addEventListener('click',()=>{
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded','false');
}));

// Some iPhone in-app browsers block normal anchor targets. Handle these
// important links as a direct user-initiated navigation in the same window.
document.querySelectorAll('[data-direct-link]').forEach((link)=>{
  link.addEventListener('click',(event)=>{
    event.preventDefault();
    event.stopPropagation();
    const destination=link.getAttribute('href');
    if(destination) window.location.href=destination;
  },{capture:true});
});
