let span = document.getElementById('span-icons');
let h1 = document.getElementById('tex-h1');
let body = document.querySelector('body')
let i = document.querySelector('i')

span.addEventListener('click',function(){

    if(i.classList.contains('bi-brightness-high-fill')){
        i.classList.remove('bi-brightness-high-fill')
        i.classList.add('bi-moon-fill')
        body.style.background = '#ffffff'
        i.style.color = 'black';
        h1.style.color ='black';
        
    }
    else{
        i.classList.remove('bi-moon-fill')
        i.classList.add('bi-brightness-high-fill')
        i.style.color = 'white'
        body.style.background = '#333333'
        h1.style.color ='white'
        

        
    }
})