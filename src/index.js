
const canvas = document.querySelector('canvas');
const dpr = 2 || window.devicePixelRatio || 1;
const width = 800;
const height= 600;

canvas.style.width=`${width}px`;
canvas.style.height=`${height}px`;
canvas.style.border=`1px solid #ccc`;


canvas.width = width*dpr;
canvas.height= height*dpr;
const ctx =  canvas.getContext('2d');

class Grid {
    constructor(ctx){
        ctx.scale(dpr,dpr);
        ctx.translate(0.5,0.5);
        ctx.strokeStyle = '#ddd';
        ctx.strokeWidth = 1;
        this.ctx =  ctx;
    }
    render(){
        const ctx = this.ctx;
        for(let y = 30,step = 30; y <= height; y += step){
            ctx.moveTo(60 ,y);
            ctx.lineTo(width-60 ,y);
        }
        for(let x = 60,step = 200; x <= width; x += step){
            ctx.moveTo(x,30 );
            ctx.lineTo(x ,height-30);
        }
        ctx.stroke();
        ctx.save();
        console.log(ctx);
    }
}

const grid = new Grid(ctx);
console.log(grid.render());
