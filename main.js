const firstListItems=document.querySelectorAll("ol li"),addStrikethrough=function(t){t.target.style.textDecoration="line-through"};for(const t of firstListItems)t.addEventListener("click",addStrikethrough);const secondListItems=document.querySelectorAll("ul li"),fade=function(t){t.target.style.opacity=0};for(const t of secondListItems)t.addEventListener("click",fade);const pictures=document.querySelectorAll("#row img"),collapse=function(t){t.target.style.width="0px"};for(const t of pictures)t.addEventListener("click",collapse);const meteor=document.querySelector("#destroy-all"),destroyEverything=function(){for(const t of firstListItems)t.style.textDecoration="line-through";for(const t of secondListItems)t.style.opacity=0;for(const t of pictures)t.style.width="0px"};meteor.addEventListener("click",destroyEverything);