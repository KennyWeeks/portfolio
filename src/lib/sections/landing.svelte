<script lang="ts">

    import {onMount, onDestroy} from "svelte";
    import {fly, draw, fade} from "svelte/transition";
    import Menu from "../menu.svelte";

    export let path : string = "";
    export let screenWidth : number;
    export let screenHeight : number;
    let min : any = new Date().getMinutes();
    let hours : any = new Date().getHours();
    import Clock from "../clock.svelte";
    let wolf : HTMLElement;
    let intro : HTMLElement;
    let visible : boolean = false;

    onMount(()=>{
        let menu : any = document.getElementById("menu");

        let class2 : Element[] = [...document.querySelectorAll(".cls-2")];
        console.log(class2);

       window.addEventListener("resize", ()=>{
        let intro = document.querySelector("#intro") as HTMLElement;
        if(window.innerHeight < 650 || intro.offsetTop < wolf.clientHeight + wolf.offsetTop) {
            intro["style"].transform = "scale(" + window.innerHeight / 650 + ")";
        } if (window.innerHeight >= 650) {
            intro["style"].transform = "scale(1.0)";
        }
       });     

       setTimeout(()=>{
        visible = true;
       }, 50);

       setTimeout(()=>{
        let intro = document.querySelector("#intro") as HTMLElement;
        console.log(intro.offsetTop);
        console.log(wolf.clientHeight + wolf.offsetTop);
        if(intro.offsetTop < wolf.clientHeight + wolf.offsetTop) {
            console.log("Hello")
            intro["style"].transform = "scale(" + 0.8 * window.innerHeight / 650 + ")";
        }
       }, 60)

    });

    onDestroy(()=>{
        //window.removeEventListener("resize");
    });



</script>

<Menu/>

<div id="middle_line"></div>

<div id="bottom_line"></div>

<div id="landing">

    <!--<div id="clock">

        <p>{hours} <span>:</span> {min}</p>

    </div>-->

    <img id="wolf" bind:this={wolf} alt="wolf" src="{path}/images/wolf.png" width=80px/>

    <div id="intro" bind:this={intro}>

        <!--<h3 id="intro_text"><span id="hi">Hi</span><br> <span id="my">My name is Kenny Weeks</span><br> <span id="welcome">Welcome to my ...</span> </h3>-->
    {#if visible} 
        <svg width="80%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 250">
            <text x=0 y=70 fill="#000" style="font-size:80px; font-weight:bold;">
                {#each "Hi" as char, i}
                    <tspan in:fade|global={{delay: i * 150, duration: 200}}>{char}</tspan>
                {/each}
            </text>
            <text x=0 y=140 fill="#000" style="font-size:80px; font-weight:bold;">
                {#each "My name is Kenny Weeks" as char, i}
                    <tspan in:fade|global={{delay: (2 * 150) + i * 150, duration: 200}}>{char}</tspan>
                {/each}
            </text>
            <text x=5 y=220 fill="#000" style="font-size:80px; font-weight:bold;">
                {#each "Welcome to my ... " as char, i}
                    <tspan in:fade|global={{delay: ((2 + 22)  * 150) + i * 150, duration: 200}}>{char}</tspan>
                {/each}
            </text>
        </svg>
        <svg style="width:90vw;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1380 260">

            <text x="-20" y=255 fill="#000" style="font-size:340px; font-weight:bold;">
                        {#each "Portfolio" as char, i}
                        <tspan in:fade|global={{delay: ((2 + 22 + 18) * 150) + i * 150, duration: 200}}>{char}</tspan>
                        {/each}
            </text>
        </svg>
    {/if}

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
            opacity:0.0;
        }
        100% {
            opacity:1.0;
        }
    }

    #landing {
        width:100vw;
        height:100vh;
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
            width:90vw;
            /*position:absolute;
            top:50%;
            transform:translateY(-50%);*/
            color:$offBlack;
            position:relative;

            svg {
                font-family:"Arial";
            }

        }

        #move_into_website {
            width:50px;
            height:50px;
            border-radius:50%;
            position:relative;
            margin:30px auto 0px auto;
            opacity:0.0;
            animation: fadeIn 1s linear forwards;
            animation-delay:7.6s;

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
                animation-delay:7.6s;
            }
        }
    }

</style>