

console.log("LINKED");

$(document).ready(function(){
    console.log('ready')
    $('header').load('header.html');
    $('footer').load('footer.html');

    document.getElementById('menu-1').addEventListener('click', function(){
    document.getElementById('big-menu').classList.add('toggle-open');
    console.log("LINKED");
    })

    document.getElementById('big-menu-close').addEventListener('click', function(){
    document.getElementById('big-menu').classList.remove('toggle-open');
    })

    document.getElementById('project-button-1').addEventListener('click', function(){
        document.getElementById('project-menu-details').classList.add('toggle-open');
    })

    

 //function   
    const openDetails = () => {
        document.getElementById('personal-website').classList.add('toggle-open');
        $( `#personal-website` ).appendTo$(`#project-button-1`);
    }
    const hoverDetails = () => {

        $( `.project-item` ).addClass("hover-project");

    }



$(()=>{
    $('#project-button-1').on('click', openDetails);
    $('#project-button-1').on('hover', hoverDetails);
  });

})