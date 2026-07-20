const sections=[...document.querySelectorAll('.guide-section')];
const toc=document.getElementById('toc');
sections.forEach(section=>{
  const title=section.dataset.title;
  const link=document.createElement('a');
  link.href=`#${section.id}`;
  link.textContent=title;
  toc.appendChild(link);
});
function setExpanded(button,expanded){
  button.setAttribute('aria-expanded',String(expanded));
  const content=document.getElementById(button.getAttribute('aria-controls'));
  content.hidden=!expanded;
}
document.querySelectorAll('.section-heading').forEach(button=>{
  button.addEventListener('click',()=>setExpanded(button,button.getAttribute('aria-expanded')!=='true'));
});
document.querySelectorAll('#toc a').forEach(link=>{
  link.addEventListener('click',()=>{
    const section=document.querySelector(link.getAttribute('href'));
    setExpanded(section.querySelector('.section-heading'),true);
  });
});
const expandButton=document.getElementById('expand-all');
let allExpanded=false;
expandButton.addEventListener('click',()=>{
  allExpanded=!allExpanded;
  sections.filter(s=>!s.classList.contains('search-hidden')).forEach(s=>setExpanded(s.querySelector('.section-heading'),allExpanded));
  expandButton.textContent=allExpanded?'Collapse all':'Expand all';
});
document.getElementById('print-guide').addEventListener('click',()=>window.print());
const search=document.getElementById('guide-search');
const noResults=document.getElementById('no-results');
search.addEventListener('input',()=>{
  const q=search.value.trim().toLowerCase();
  let shown=0;
  sections.forEach(section=>{
    const match=!q||section.textContent.toLowerCase().includes(q);
    section.classList.toggle('search-hidden',!match);
    if(match){shown++; if(q)setExpanded(section.querySelector('.section-heading'),true);}
  });
  noResults.hidden=shown!==0;
});
