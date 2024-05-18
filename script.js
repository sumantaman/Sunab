'use strict';

const modal = document.querySelector('.modal');
const overlay  = document.querySelector('.overlay');
const open_modal = document.querySelectorAll('.show-modal');
const close_modal = document.querySelector('.close-modal');
console.log(open_modal);

for(  let i=0;i<open_modal.length;i++)
open_modal[i].addEventListener('click',function ()
{
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

close_modal.addEventListener('click',function()
{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})