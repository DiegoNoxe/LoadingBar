const n = document.querySelector('.text');
const front = document.querySelector('.front'); 
const finish = document.querySelector('.loading'); 

let i = 0;

Att();

function Att()
{
    n.innerHTML = i + '%';
    front.style.width = i+'%';
    i++;
    if(i <= 100)
    { 
        setTimeout(Att, 50);
    }
    else 
    {
        finish.innerHTML = 'Loading Finished! 🎉';
        front.style.backgroundColor = 'red'
    }

}

