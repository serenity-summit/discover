const sections=[...document.querySelectorAll('.guide-section')];
function setExpanded(button,expanded){
  button.setAttribute('aria-expanded',String(expanded));
  const content=document.getElementById(button.getAttribute('aria-controls'));
  content.hidden=!expanded;
}
function openOnly(button){
  document.querySelectorAll('.section-heading').forEach(b=>setExpanded(b,false));
  setExpanded(button,true);
}
const expandButton=document.getElementById('expand-all');
let allExpanded=false;
function resetExpandButton(){
  allExpanded=false;
  expandButton.textContent='Expand all';
}
document.querySelectorAll('.section-heading').forEach(button=>{
  button.addEventListener('click',()=>{
    if(button.getAttribute('aria-expanded')==='true'){setExpanded(button,false);}
    else{openOnly(button);}
    resetExpandButton();
  });
});
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
    if(match){shown++;}
  });
  noResults.hidden=shown!==0;
});
