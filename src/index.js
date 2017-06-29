//
// const canvas = document.querySelector('canvas');
// const dpr = 2 || window.devicePixelRatio || 1;
// const width = 800;
// const height= 600;

// canvas.style.width=`${width}px`;
// canvas.style.height=`${height}px`;
// canvas.style.border=`1px solid #ccc`;
//
//
// canvas.width = width*dpr;
// canvas.height= height*dpr;
// const ctx =  canvas.getContext('2d');
//
// class Grid {
//     constructor(ctx){
//         ctx.scale(dpr,dpr);
//         ctx.translate(0.5,0.5);
//         ctx.strokeStyle = '#ddd';
//         ctx.strokeWidth = 1;
//         this.ctx =  ctx;
//     }
//     render(){
//         const ctx = this.ctx;
//         ctx.fillStyle='#888';
//         // ctx.font = "italic light 100px/24px arial sans-serif";
//         for(let y = 30,step = 30; y <= height; y += step){
//             if(y < height){
//                 ctx.textAlign="end";
//                 ctx.fillText(y, 50, y+6);
//             }
//             ctx.moveTo(60 ,y);
//             ctx.lineTo(width-60 ,y);
//         }
//         for(let x = 60,step = 40; x < width; x += step){
//             if(x < width-20){
//                 ctx.textAlign="center";
//                 ctx.fillText(x-60, x, height-10);
//             }
//             ctx.moveTo(x,30 );
//             ctx.lineTo(x ,height-30);
//         }
//         ctx.stroke();
//         ctx.save();
//
//         // ctx.fillText("60", 50, 24);
//
//         console.log(ctx);
//     }
// }
//
// const grid = new Grid(ctx);
// console.log(grid.render());

export const padding = 2;
export const width = 1300;
export const height = 540;
export const masterHeight = 350;
export const gutter = 30;

// 点
class Point{
    constructor(x,y) {
        this.x = x-0.5;
        this.y = y-0.5;
    }
}

class Section {
    constructor(p1,p2,p3,p4){
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.p4 = p4;
    }
}

class LayOut{
    constructor(width,height,padding){
        this.s1 = new Section(
            new Point(padding,padding),
            new Point(width-padding,padding),
            new Point(width-padding,masterHeight+padding),
            new Point(padding,masterHeight+padding)
        )
        this.s2 = new Section(
            new Point(padding,height-(height-masterHeight-padding*2)+gutter),
            new Point(width-padding,height-(height-masterHeight-padding*2)+gutter),
            new Point(width-padding,height-padding),
            new Point(padding,height-padding)
        )
    }
}

const canvas = document.querySelector('canvas');
const dpr = window.devicePixelRatio || 1;


canvas.style.width=`${width}px`;
canvas.style.height=`${height}px`;
// canvas.style.border=`1px solid #ccc`;

canvas.width = width*dpr;
canvas.height= height*dpr;
const ctx =  canvas.getContext('2d');
ctx.strokeStyle = '#f60';
ctx.strokeWidth = 1;


const layout = new LayOut(width,height,padding);

const s1=  layout.s1;
const s2=  layout.s2;

function lineTo(p){
    ctx.lineTo(p.x,p.y)
}
function moveTo(p){
    ctx.moveTo(p.x,p.y)
}

moveTo(s1.p1);
lineTo(s1.p2);
lineTo(s1.p3);
lineTo(s1.p4);
lineTo(s1.p1);

moveTo(s2.p1);
lineTo(s2.p2);
lineTo(s2.p3);
lineTo(s2.p4);
lineTo(s2.p1);
//
// ctx.moveTo(s1.p1.x,s1.p1.y);
// ctx.lineTo(s1.p2.x,s1.p2.y);
// ctx.lineTo(s1.p3.x,s1.p3.y);
// ctx.lineTo(s1.p4.x,s1.p4.y);
// ctx.lineTo(s1.p1.x,s1.p1.y);


ctx.stroke();
ctx.save();




console.log(layout);
