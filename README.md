# portfolio - kathleen

INSTRUCTIONS: 
A README.md file with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.


# LINK
https://kathleendiep.github.io/portfolio/



# JQUERY METHODS
1. BIG-MENU Nav bar
    when clicking over the "hamburger" icon, the menu will appear


2. when hovering over on skills, the skillsets show by using
- addClass (to make content opacity:1)
- fadeIn
- fadeOut



3. when clicking on projects button, accordion style info opens up. 

if ( $(`#infoOnWeb`).is(":hidden")) {
    $(`#infoOnWeb`).slideDown("slow");
    } else {
        $(`#infoOnWeb`).hide();
    }   
}



# UNSOLVED PROBLEMS
1. having content load responsively when user scrolls down. 