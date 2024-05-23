//#region /*** USING ES5 ***/
// function Circles(instances){
//     this.instances = instances;
//     this.circles = [];
//     this.draw_circles = function(id){
//         let diameter, x, y, randomColor;
//         for(let i=0; i<instances; i++){
//             randomColor = Math.floor(Math.random()*16777215).toString(16);
//             x = Math.floor(Math.random()*1500)+"px";
//             y = Math.floor(Math.random()*700)+"px";
//             diameter = Math.floor(Math.random()*200);
//             this.circles += `<p style="`+ 
//                 `width: ${diameter}px;`+
//                 `height: ${diameter}px;`+
//                 `top: ${y};`+
//                 `left: ${x};`+
//                 `background-color: #${randomColor};`+
//                 `position: absolute;`+
//                 `border-radius: 100px;"`+
//                 `class="cLib_circle">`+
//                 `</p>`;
//         }
//         document.getElementById(id).innerHTML = this.circles;
//         return this;
//     };
//     this.expand = function(interval){
//         setInterval(function(){
//             let element = document.querySelectorAll(".cLib_circle");
//             for(let i=0; i<element.length; i++){
//                 element[i].style.height = element[i].offsetHeight+1+"px";
//                 element[i].style.width = element[i].offsetWidth+1+"px";
//                 element[i].style.borderRadius = element[i].offsetWidth+1+"px";
//                 if(element[i].offsetHeight > 300){
//                     element[i].remove();
//                 }
//             }
//         }, interval);
//         return this;
//     };
// }
//#endregion
//#region /*** USING ES5 w/ PROTO ***/
// function Circles(instances){
//     return this.instances = instances;
// }
// Circles.prototype.draw_circles = function(id){
//     this.circles = [];
//     let diameter, x, y, randomColor;
//     for(let i=0; i<this.instances; i++){
//         randomColor = Math.floor(Math.random()*16777215).toString(16);
//         x = Math.floor(Math.random()*1500)+"px";
//         y = Math.floor(Math.random()*700)+"px";
//         diameter = Math.floor(Math.random()*200);
//         this.circles += `<p style="`+ 
//             `width: ${diameter}px;`+
//             `height: ${diameter}px;`+
//             `top: ${y};`+
//             `left: ${x};`+
//             `background-color: #${randomColor};`+
//             `position: absolute;`+
//             `border-radius: 100px;"`+
//             `class="cLib_circle">`+
//             `</p>`;
//     }
//     document.getElementById(id).innerHTML = this.circles;
//     return this;
// };
// Circles.prototype.expand = function(interval){
//     setInterval(function(){
//         let element = document.querySelectorAll(".cLib_circle");
//         for(let i=0; i<element.length; i++){
//             element[i].style.height = element[i].offsetHeight+1+"px";
//             element[i].style.width = element[i].offsetWidth+1+"px";
//             element[i].style.borderRadius = element[i].offsetWidth+1+"px";
//             if(element[i].offsetHeight > 300){
//                 element[i].remove();
//             }
//         }
//     }, interval);
//     return this;
// };
//#endregion
//#region /*** USING ES6 ***/
class Circles{
    constructor(instances){
        this.instances = instances;
        this.circles = [];
    };
    draw_circles(id){
        let diameter, x, y, randomColor;
        for(let i=0; i<this.instances; i++){
            randomColor = Math.floor(Math.random()*16777215).toString(16);
            x = Math.floor(Math.random()*1500)+"px";
            y = Math.floor(Math.random()*700)+"px";
            diameter = Math.floor(Math.random()*200);
            this.circles += `<p style="`+ 
                `width: ${diameter}px;`+
                `height: ${diameter}px;`+
                `top: ${y};`+
                `left: ${x};`+
                `background-color: #${randomColor};`+
                `position: absolute;`+
                `border-radius: 100px;"`+
                `class="cLib_circle">`+
                `</p>`;
        }
        document.getElementById(id).innerHTML = this.circles;
        return this;
    };
    expand(interval){
        setInterval(function(){
            let element = document.querySelectorAll(".cLib_circle");
            for(let i=0; i<element.length; i++){
                element[i].style.height = element[i].offsetHeight+1+"px";
                element[i].style.width = element[i].offsetWidth+1+"px";
                element[i].style.borderRadius = element[i].offsetWidth+1+"px";
                if(element[i].offsetHeight > 300){
                    element[i].remove();
                }
            }
        }, interval);
        return this;
    };
}
//#endregion