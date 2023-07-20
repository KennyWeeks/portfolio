<script lang="ts">

    import {onMount, onDestroy} from "svelte";
    import Menu from "../menu.svelte";

    export let path : string = "";
    export let screenWidth : number;
    export let screenHeight : number;
    let min : any = new Date().getMinutes();
    let hours : any = new Date().getHours();
    import Clock from "../clock.svelte";
    let wolf : HTMLElement;

    let hiTxt : string = "Hi,";
    let hiIn : string = "";
    let myTxt : string = "My name is Kenny Weeks."
    
    let myIn : string = "";
    let welTxt : string = "Welcome to my ...";
    let welIn : string = "";


    let i : number = 0;

    function typeWriter1(text:string) : void {
        if(i < text.length) {
            console.log(text.charAt(i));
            console.log(text);
            hiIn += text.charAt(i);
            i += 1;
            setTimeout(()=>{typeWriter1(text)}, 100);
        }
    }

    function typeWriter2(text:string) : void {
        if(i < text.length) {
            console.log(text.charAt(i));
            console.log(text);
            myIn += text.charAt(i);
            i += 1;
            setTimeout(()=>{typeWriter2(text)}, 100);
        }
    }

    function typeWriter3(text:string) : void {
        if(i < text.length) {
            console.log(text.charAt(i));
            console.log(text);
            welIn += text.charAt(i);
            i += 1;
            setTimeout(()=>{typeWriter3(text)}, 100);
        }
    }

    onMount(()=>{
        let menu : any = document.getElementById("menu");
        //menu.style.top = wolf.offsetTop + ((wolf.clientHeight - menu.clientHeight) / 2) + "px";
        let intro : any = document.getElementById("intro");
        typeWriter1(hiTxt);
        setTimeout(()=>{
            console.log("What");
            i = 0;
            typeWriter2(myTxt);
        }, 400);
        setTimeout(()=>{
            console.log(welTxt);
            i = 0;
            typeWriter3(welTxt);
        }, 2900);

        let class2 : Element[] = [...document.querySelectorAll(".cls-2")];
        console.log(class2);

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

    });

    onDestroy(()=>{
        //window.removeEventListener("resize");
    });



</script>

<Menu/>

<div id="middle_line"></div>

<div id="bottom_line"></div>

<div id="landing">

    <div id="clock">

        <p>{hours} <span>:</span> {min}</p>

    </div>

    <img id="wolf" bind:this={wolf} alt="wolf" src="{path}/images/wolf.png" width=80px/>

    <div id="intro" class:layout_2_intro={screenWidth <= screenHeight} class:layout_1_intro={screenWidth > screenHeight} >

        <h3 id="intro_text"><span id="hi" contenteditable="true" bind:innerText={hiIn}></span><br> <span id="my" contenteditable="true" bind:innerText={myIn}></span><br> <span id="welcome" contenteditable="true" bind:innerText={welIn}></span> </h3>

        <!--<img id="portfolio_text" src="{path}/images/portfolio_title{screenWidth > screenHeight ? "_large" : "_large"}.svg" alt="portfolio_text"/>
        -->
        <br>
        <!--<object data="{path}/images/portfolio_title_large.svg"></object>-->
        <!--<object type="image/svg+xml" data="{path}/images/portfolio_made_header.svg"></object>-->
        <svg id="Layer_1" style="width:90vw;" xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1380 250">
            <text style="font-family:'Arial'; font-size:320px; font-weight:bold;">
                <textPath xlink:href="#textLine">Portfolio</textPath>
            </text>
            <path id="textLine" d="m-20 240 h0"/>
            <animate xlink:href="#textLine" attributeName="d" begin="4.7s" dur="4s" to="m-20 240 h1800" fill="freeze"/>
        </svg>

        <div id="move_into_website">
            <img src="{path}/images/mouse.png" width=25 alt="mouse"/>
            <div  id="beacon_circle"></div>
        </div>
    </div>

    

    

</div>

<style lang="scss">

    @import "../../styles/theme.scss";


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

    @keyframes blink {
        0% {
            opacity:0.0;
        }
        100% {
            opacity: 1.0;
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0.0;
        }
        100% {
            opacity:1.0;
        }
    }

    #landing {
        width:100vw;
        height:100%;
        background-color:$offWhite;
        position:relative;
        @include flexCenter;
        text-size-adjust:none;

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
            color:$offBlack;

            object {
                font-family:"Gill Sans";
                width:80vw;
            }

            h3 {
                font-family:"Arial";
                font-weight:lighter;
                margin-bottom:0px;
                margin-top:0px;

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
                    transition:opacity 1s linear;
                }
            }

        }
        #move_into_website {
            width:50px;
            height:50px;
            border-radius:50%;
            position:relative;
            margin:30px auto 0px auto;
            opacity:0.0;
            animation: fadeIn 2s linear forwards;
            animation-delay:7.5s;
            

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
                animation-delay:6s;
            }
        }
    }

</style>