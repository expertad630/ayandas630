window.addEventListener('DOMContentLoaded',()=>{
    var typed = new Typed(".auto-typed",{
        strings: ['Ayan Das','AKA Expert AD',' Web Developer','Front-End Developer'],
        typeSpeed: 100,
        backSpeed:100,
        loop: true,
    });
    var intro_typed= new Typed(".auto-intro",{
        strings: ['INTRODUCTION'],
        typeSpeed: 300,
    });
    var auto_project= new Typed(".auto-project",{
        strings: ["Projects","React Js", "HTML","CSS","JavaScript","React Native"],
        typeSpeed: 200,
        backSpeed:100,
        loop: true
    });
    
    
    
    document.addEventListener('click',(e)=>{
        var menu_links= document.getElementById('menu_links');
        var menu_btn= document.getElementById('menu_btn');
        console.log(menu_btn,menu_links,'menu');
        if(menu_btn.contains(e.target) || menu_links.contains(e.target)){
            menu_links.style.right='0';
        }else{
            menu_links.style.right='-500px';
        }
    })
});
