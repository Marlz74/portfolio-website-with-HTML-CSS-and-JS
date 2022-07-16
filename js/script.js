const nav_container=document.querySelector('.nav_container'),
theme_btn=document.querySelector('.theme_btn'),
controls=document.querySelectorAll('.control');
controls.forEach(control=>{
    control.onclick=()=>{
        let current_control=document.querySelector('.active');
        current_control.classList.toggle('active');
        control.classList.toggle('active');
        let section_id='#'+control.dataset.id;
        let current_sec=document.querySelector('.current_sec');
        let new_sec=document.querySelector(section_id);
        current_sec.classList.replace('current_sec','none');
        new_sec.classList.toggle('none');
        new_sec.classList.add('current_sec');       

    }

})
theme_btn.onclick=()=>{
    let body=document.querySelector('body');
    body.classList.toggle('light_theme');
}