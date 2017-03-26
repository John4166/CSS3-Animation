# CSS3-Animation

* CSS3过渡动画
* transition过渡以及animation的区别
* transform的2D\3D变换

### CSS3过渡动画
详见index.html，目前只有五六种动画，未来会不断补充，也作为自己和他人学习的css动画库


### transition过渡以及animation的区别

transition过渡-指的是在鼠标hover的时候，属性的变化，在时间上，从立即执行，到在一段时间内执行

例如：
````
.transition1{
        width:150px;
        height: 100px;
        margin:10px 0;
        background-color:#00b3ee;
        -webkit-transition: width 2s ,height 2s;
        -moz-transition: width 2s ,height 2s;
        -ms-transition: width 2s,height 2s;
        -o-transition: width 2s,height 2s;
        transition: width 2s ,height 2s;
    }
    .transition1:hover{
        width: 250px;
        height: 150px;
    }
````

animation动画，指的是渲染dom之后，就立即执行的动画，动画的时间、方式自定
例如：
````
 .animation{
        width: 150px;
        height: 100px;
        margin: 10px 0;
        background-color:#000088 ;
        animation:myanimation 3s linear infinite;
    }
    @keyframes myanimation {
        0%{
            background-color: #000088;
        }
        50%{
            transform: translate(100px,0px) rotate(180deg);
            background-color: #990033;
        }
        100%{
            transform: translate(0px,0px);
            background-color: #000088;
       }
    }

````

### transform的2D\3D变换
translate(x,y)  --控制元素移动
rotate(x deg)   --控制元素顺时针旋转给定的角度。内旋转
rotateX()       --控制元素以X轴为转轴旋转
rotateY()       --控制元素以Y轴为转轴旋转
scale(x,y)  --控制元素缩放(宽方法x倍，高放大y倍)
skew(x,y)    --通过 skew() 方法，元素翻转给定的角度，根据给定的水平线（X 轴）和垂直线（Y 轴）参数
````
 transform: translate(10px,20px) rotate(360deg) scale(1.2,1.2);
````

