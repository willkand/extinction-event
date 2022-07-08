let lineThrough = document.querySelectorAll("#lineThrough-ol li");
let fadeAway = document.querySelectorAll("#fadeAway-ul li");
let collapsePic = document.querySelectorAll("#row img")
let meteorStrike = document.querySelector("#burn")

//strikethrough
for (let i = 0; i < lineThrough.length; i++){
    
    let dinoClick = lineThrough[i];

    dinoClick.addEventListener('click', function(){
        dinoClick.style.textDecoration = "line-through";
        console.log(lineThrough[i]);
    })
}

//fadeaway
for (let i = 0; i < fadeAway.length; i++){

    let clickDisappear = fadeAway[i];

    clickDisappear.addEventListener('click', function (){
        clickDisappear.style.opacity = "0";
    })
}


//collapse
for (let i = 0; i < collapsePic.length; i++){

    let clickObscurity = collapsePic[i];

    clickObscurity.addEventListener('click', function(){
        clickObscurity.style.width = "0";
    })
}


//meteor strike
meteorStrike.addEventListener('click', function(){

    for (let i = 0; i < lineThrough.length; i++){
    
        let dinoClick = lineThrough[i];
            dinoClick.style.textDecoration = "line-through";
        }
    
    for (let i = 0; i < fadeAway.length; i++){
    
        let clickDisappear = fadeAway[i];
            clickDisappear.style.opacity = "0";
        }
    
    for (let i = 0; i < collapsePic.length; i++){
    
        let clickObscurity = collapsePic[i];
            clickObscurity.style.width = "0";
        }

})









// function strikeThrough (){
//     for(let i = 0; 1 < lineThrough.length; i++){
//         let dinoClick = lineThrough[i];

//         dinoClick.addEventListener('click', function(){
//             dinoClick.style.textDecoration = "line-through";
//             console.lo g(lineThrough[i]);
//         })
//     }
// }