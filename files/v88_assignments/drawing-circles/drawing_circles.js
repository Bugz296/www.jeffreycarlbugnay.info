/*** USING ES5 ***/
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('reset').addEventListener("click", function(){
        location.reload();
    });
    function Circle(pos_x, pos_y){
        this.diameter = Math.floor(Math.random()*200);
        this.x = (pos_x-(diameter/2))+"px";
        this.y = (pos_y-(diameter/2))+"px";
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        let p = document.createElement('p');
        p.style = "width: "+this.diameter+"px; height: "+this.diameter+"px; top: "+this.y+"; left: "+this.x+"; background-color: #"+randomColor;
        document.getElementById('main-container').appendChild(p);
    };

    document.getElementById('main-container').addEventListener("click", function(pos){
        Circle(pos.clientX, pos.clientY);
    });

    setInterval(function(){
        let pTags = document.querySelectorAll('p');
        for(let i=0; i<pTags.length; i++){
            pTags[i].style.height = pTags[i].offsetHeight-1+"px";
            pTags[i].style.width = pTags[i].offsetWidth-1+"px";
            if(pTags[i].offsetHeight < 0){
                pTags[i].remove();
            }
        }
    }, 100);
});
/*** USING ES6 ***/