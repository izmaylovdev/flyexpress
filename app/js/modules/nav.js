export default function (){
    let trigger = document.getElementById('asideTrigger'),
        aside = document.getElementsByClassName('aside')[0];

    trigger.addEventListener('click', (event) => {
        trigger.classList.toggle('aside-trigger_active');
        aside.classList.toggle('aside_active');
        event.stopPropagation();
        event.preventDefault();
    });

    aside.addEventListener('click', (event)=>{
        event.stopPropagation();
    });
    document.addEventListener('click', (event)=>{
        trigger.classList.remove('aside-trigger_active');
        aside.classList.remove('aside_active');
    })

}