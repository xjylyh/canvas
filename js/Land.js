class Land{
    constructor(){
        this.w = game.allImg["land"].width;
        this.h = game.allImg["land"].height;
        this.x = 0;
        this.y = game.canvas.height-this.h;
        this.speed = 1;
    }

    update(){
        this.x-=this.speed;
        this.x<=-this.w?this.x = 0:null;
    };

    render(){
        // game.draw.fillStyle = "#4ec0ca";
        // game.draw.fillRect(0,0,game.canvas.width,game.canvas.height);//画一个矩形，填补空白
        game.draw.drawImage(game.allImg["land"],this.x,this.y);
        game.draw.drawImage(game.allImg["land"],this.x+this.w,this.y);
        game.draw.drawImage(game.allImg["land"],this.x+this.w*2,this.y);//为了不出现中间空白，所以这里要补上一个图片的大小        
    };
}
