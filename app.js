

console.log("LINKED");

$(document).ready(function(){
    console.log('ready')
    //HEADER AND FOOTER
    $('header').load('header.html', null, () => {
        document.getElementById('menu-1').addEventListener('click', function(){
            document.getElementById('big-menu').classList.add('toggle-open');
            console.log("LINKED");
            })
        
            document.getElementById('big-menu-close').addEventListener('click', function(){
            document.getElementById('big-menu').classList.remove('toggle-open');
            })
    });
    $('footer').load('footer.html');

    // document.getElementById('project-button-1').addEventListener('click', function(){
    //     document.getElementById('project-menu-details').classList.add('toggle-open');
    // })


// for button1 - front end 
    //hover over
    const hoverOver1= () => {
        $( `.front-end` ).addClass('addDetails');
        $( `.front-end`).fadeIn(500);
    }
    //hover out
    const hoverOut1= () => {
        $( this ).find( ".front-end" ).fadeOut( "slow");
    }
// for button2 - back end
    //hover over
    const hoverOver2= () => {
        $( `.back-end` ).addClass('addDetails');
        $( `.back-end`).fadeIn(500);
    }
    //hover out
    const hoverOut2= () => {
        $( this ).find( `.back-end`).fadeOut( "slow");
    }

//projectbutton1
 const openDetails = () => {
if ( $(`#infoOnWeb`).is(":hidden")) {
    $(`#infoOnWeb`).slideDown("slow");
    } else {
        $(`#infoOnWeb`).hide();
    }   
}
//projectbutton2
const openDetails2 = () => {
    if ( $(`#infoOnWeb2`).is(":hidden")) {
        $(`#infoOnWeb2`).slideDown("slow");
        } else {
            $(`#infoOnWeb2`).hide();
        }   
    }
// 1. make the function
// 2. refer to function in here:
//$(`.project-button-3`).on('click', openDetails3);
//projectbutton3
const openDetails3 = () => {
    if ( $(`#infoOnWeb3`).is(":hidden")) {
        $(`#infoOnWeb3`).slideDown("slow");
        } else {
            $(`#infoOnWeb3`).hide();
        }   
    }

$(()=>{
    // $('#project-button-1').on('click', openDetails);
    $( `#skills-button1` ).hover(hoverOver1,hoverOut1); 
    $( `#skills-button2` ).hover(hoverOver2,hoverOut2); 
    $(`.project-button-1`).on('click', openDetails);
    $(`.project-button-2`).on('click', openDetails2);
    $(`.project-button-3`).on('click', openDetails3);
    // $(`.project-button-2`).on('click', openDetailsOfProject(#infoOnWeb));
  });

})