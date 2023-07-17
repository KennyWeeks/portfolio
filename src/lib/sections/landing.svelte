<script lang="ts">

    import {onMount} from "svelte";
    import Menu from "../menu.svelte";

    export let path : string = "";
    export let screenWidth : number;
    export let screenHeight : number;
    let min : any = new Date().getMinutes();
    let hours : any = new Date().getHours();
    import Clock from "../clock.svelte";

    onMount(()=>{
       let hi : any = document.getElementById("hi");
       let my : any = document.getElementById("my");
       let wel : any = document.getElementById("welcome");
       let port : any = document.getElementById("portfolio_text");
       let wolf : any = document.getElementById("wolf");
       let bl : any = document.getElementById("bottom_line");
       let ml : any = document.getElementById("middle_line");
        bl.style.top = wolf.offsetTop + wolf.clientHeight + "px";
        ml.style.top = wolf.offsetTop + (wolf.clientHeight / 2) + "px";
        let menu : any = document.getElementById("menu");
        menu.style.top = wolf.offsetTop + ((wolf.clientHeight - menu.clientHeight) / 2) + "px";
        let intro : any = document.getElementById("intro");
       setTimeout(()=>{
        hi.style.opacity = 1;
       }, 500);
       setTimeout(()=>{
        my.style.opacity = 1;
       }, 1400);
       setTimeout(()=>{
        wel.style.opacity = 1;
       }, 2500);
       setTimeout(()=>{
        port.style.opacity = 1;
       }, 3600);

       window.addEventListener("resize", ()=>{
        if(window.innerHeight < 500) {
            intro.style.transform = "scale(" + (0.8 * window.innerHeight / 500) + ")"; 
        } if (window.innerHeight >= 500) {
            intro.style.transform = "scale(1.0)";
        }
       });


       if(intro.offsetTop <= wolf.offsetTop + wolf.clientHeight || intro.offsetTop <= 0) {
        intro.style.transform = "scale(" + 0.8 * window.innerHeight / 500 + ")"; 
       }

       if(intro.clientWidth >= window.innerWidth) {
        intro.style.transform = "scale(" + 0.8 * window.innerWidth / 500 + ")";
       }

       let r : any = document.querySelector(":root");
       r.style.setProperty("--minuteAngleStart", (360 * (min / 60)) + "deg");
       r.style.setProperty("--hourAngleStart", (360 * (hours % 12 / 12)) + "deg");
       

       setInterval(()=>{
        let angle : number = parseFloat(getComputedStyle(r).getPropertyValue("--minuteAngleStart"));
        r.style.setProperty("--minuteAngleStart", angle + 6 + "deg");
       }, 60000);

       setInterval(()=>{
        let angle : number = parseFloat(getComputedStyle(r).getPropertyValue("--hourAngleStart"));
        r.style.setProperty("--hourAngleStart", angle + 30 + "deg");
       }, 3600000);

       //resizeChange();
    });



</script>

<Menu/>

<div id="middle_line"></div>

<div id="bottom_line"></div>

<div id="landing">

    <div id="clock">

        <p>{hours} <span>:</span> {min}</p>

    </div>

    <img id="wolf" alt="wolf" src="{path}/images/wolf.png" width=80px/>

    <div id="intro" class:layout_2_intro={screenWidth <= screenHeight} class:layout_1_intro={screenWidth > screenHeight} >

        <h3 id="intro_text"><span id="hi">Hi,</span><br> <span id="my">my name is Kenny Weeks. </span><br> <span id="welcome">Welcome to my  ...</span> </h3>

        <!--<img id="portfolio_text" src="{path}/images/portfolio_title{screenWidth > screenHeight ? "_large" : "_large"}.svg" alt="portfolio_text"/>
        -->
        <br>
        <h1 id="portfolio_text">Portfolio</h1>

        <div id="move_into_website">
            <img src="{path}/images/mouse.png" width=25 alt="mouse"/>
            <div id="beacon_circle"></div>
        </div>
    </div>

    

</div>

<style lang="scss">

    @import "../../styles/theme.scss";

    :root {
        --minuteAngleStart: 5deg;
        --hourAngleStart: 0deg;
    }

    #bottom_line,
    #middle_line {
        width:100vw;
        height:2px;
        position:absolute;
        left:0px;
        z-index:10000;
    }

    /*#bottom_line {
        background-color:#00ff00;
    }

    #middle_line {
        background-color:#ff0000;
    }*/

    @keyframes beacon {
        0% {
            border:5px solid $offBlack;
            width:50px;
            height:50px;
        }
        20% {
            width:80px;
            height:80px;
            border:0px solid $offBlack;
        }
        100% {
            width:80px;
            height:80px;
            border:0px solid $offBlack;
        }
    }

    @keyframes rotate {
        0% {
            transform:rotate(0deg);
        }
        100% {
            transform:rotate(360deg);
        }
    }

    @keyframes rotateMinute {
        0% {
            transform:rotate(var(--minuteAngleStart));
        }
        100% {
            transform:rotate(calc(var(--minuteAngleStart) + 6deg));
        }
    }

    @keyframes rotateHours {
        0% {
            transform:rotate(var(--hourAngleStart));
        }
        100% {
            transform:rotate(calc(var(--hourAngleStart) + 30deg));
        }
    }

    @keyframes blink {
        0% {
            opacity:0.0;
        }
        100% {
            opacity: 1.0;
        }
    }

    #landing {
        width:100vw;
        height:100%;
        background-color:$offWhite;
        position:relative;
        @include flexCenter;

        #clock {
            position:absolute;
            bottom:5px;
            left:15px;
            font-family:"Digital 7";
            font-size:25px;
            font-weight:bold;
            line-height:0px;

            p > span {
                animation:blink 1s linear infinite;
                
            }
        }

        #wolf {
            position:absolute;
            top:10px;
            left:15px;
        }

        #intro {
            //width:90vw;
            display:inline-block;
            cursor:default;
            /*position:absolute;
            top:50%;
            transform:translateY(-50%);*/

            h3 {
                font-family:$font-family;
                margin-bottom:0px;
                margin-top:0px;
                padding-left:1vw;

                @include phoneVert {
                    font-size:6vw;
                }
                @include tablet {
                    font-size:6vw;
                }

                @include laptop {
                    font-size: 5vw;
                }

                @include desktopFullScreen {
                    font-size:3vw
                }
                
                span {
                    opacity:0;
                    transition:opacity 1s linear;
                }
            }

            #portfolio_text {
                font-family:"Gill Sans";
                transition: opacity 1s linear;
                margin-top:0px;
                margin-bottom:0px;
                padding:0px;
                display:inline-block;
                @include desktopSmallScreen {
                    font-size:50vh;
                }

                @include desktopFullScreen {
                    font-size:20vw;
                    line-height:13vw;
                }
                @include laptop {
                    font-size:20vw;
                    line-height:15vw;
                }

                @include tabletPhone {
                    font-size:25vw;
                    line-height:20vw;
                }

                @include tabletLarge {
                    font-size:25vw;
                    line-height:17vw;
                }

                @include phoneVert {
                    font-size:25vw;
                    line-height:15vw;
                }
            }

        }

        #move_into_website {
            width:50px;
            height:50px;
            border-radius:50%;
            position:relative;
            margin:30px auto 0px auto;
            

            @include desktopSmallScreen {
                position:absolute;
                right:30px;
                top:50%;
                transform:translateY(-50%);
            }

            @include tabletPhone {
                display:none;
            }

            img {
                position:absolute;
                top:50%;
                left:50%;
                transform:translate(-50%, -50%);
            }
            

            #beacon_circle {
                width:50px;
                height:50px;
                position:absolute;
                top:50%;
                left:50%;
                transform: translate(-50%, -50%);
                border-radius:50%;
                animation: beacon 5s linear infinite;
                animation-delay:5s;
            }
        }
    }

</style>