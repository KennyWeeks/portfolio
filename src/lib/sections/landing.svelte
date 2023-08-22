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
    let visible2 : boolean = false;
    let fill : boolean = false;

    let path1 : string = "M0,21.87c16.7-2.78,38.57-5.17,66.4-5.17,34.2,0,59.25,7.95,75.15,22.27,14.71,12.72,23.46,32.21,23.46,56.06s-7.16,43.34-20.68,57.26c-18.29,19.48-48.11,29.42-81.91,29.42-10.34,0-19.88-.4-27.83-2.39v107.35H0V21.87ZM34.59,151.09c7.55,1.99,17.09,2.78,28.63,2.78,41.75,0,67.2-20.28,67.2-57.26s-25.05-52.49-63.22-52.49c-15.11,0-26.64,1.19-32.6,2.78v104.18Z"
    let path2 : string ="M374.53,188.87c0,71.17-49.3,102.18-95.83,102.18-52.09,0-92.24-38.17-92.24-99,0-64.41,42.15-102.19,95.43-102.19s92.64,40.16,92.64,99.01Zm-152.68,1.99c0,42.15,24.26,73.96,58.45,73.96s58.45-31.41,58.45-74.75c0-32.6-16.3-73.96-57.65-73.96s-59.25,38.17-59.25,74.75Z"
    let path3 : string = "M418.65,154.27c0-22.66-.4-42.15-1.59-60.04h30.61l1.19,37.77h1.59c8.75-25.85,29.82-42.15,53.28-42.15,3.97,0,6.76,.4,9.94,1.19v33c-3.58-.8-7.16-1.19-11.93-1.19-24.65,0-42.15,18.69-46.92,44.93-.79,4.77-1.59,10.34-1.59,16.3v102.58h-34.59V154.27Z"
    let path4 : string = "M600.34,38.97v55.27h50.1v26.64h-50.1v103.78c0,23.86,6.76,37.38,26.25,37.38,9.15,0,15.9-1.19,20.28-2.39l1.59,26.25c-6.76,2.78-17.49,4.77-31.01,4.77-16.3,0-29.42-5.17-37.77-14.72-9.94-10.34-13.52-27.43-13.52-50.1V120.88h-29.82v-26.64h29.82V48.11l34.19-9.15Z"
    let path5 : string = "M693.37,286.68V120.88h-27.04v-26.64h27.04v-9.15c0-27.04,5.96-51.69,22.27-67.2,13.13-12.72,30.62-17.89,46.92-17.89,12.33,0,23.06,2.78,29.82,5.57l-4.77,27.04c-5.17-2.38-12.32-4.37-22.27-4.37-29.82,0-37.38,26.24-37.38,55.67v10.34h46.52v26.64h-46.52v165.8h-34.59Z"
    let path6 : string = "M974.87,188.87c0,71.17-49.3,102.18-95.83,102.18-52.09,0-92.24-38.17-92.24-99,0-64.41,42.15-102.19,95.43-102.19s92.64,40.16,92.64,99.01Zm-152.68,1.99c0,42.15,24.26,73.96,58.45,73.96s58.45-31.41,58.45-74.75c0-32.6-16.3-73.96-57.65-73.96s-59.25,38.17-59.25,74.75Z"
    let path7 : string = "M1018.99,4.37h34.99V286.68h-34.99V4.37Z"
    let path8 : string = "M1151.78,40.16c.39,11.93-8.35,21.47-22.27,21.47-12.32,0-21.07-9.54-21.07-21.47s9.14-21.87,21.87-21.87,21.47,9.54,21.47,21.87Zm-38.97,246.52V94.23h34.99v192.44h-34.99Z"
    let path9 : string ="M1380,188.87c0,71.17-49.3,102.18-95.83,102.18-52.09,0-92.24-38.17-92.24-99,0-64.41,42.15-102.19,95.43-102.19s92.64,40.16,92.64,99.01Zm-152.68,1.99c0,42.15,24.26,73.96,58.45,73.96s58.45-31.41,58.45-74.75c0-32.6-16.3-73.96-57.65-73.96s-59.25,38.17-59.25,74.75Z"

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
        visible = false;
       }, 50);

       setTimeout(()=>{
        let intro = document.querySelector("#intro") as HTMLElement;
        console.log(intro.offsetTop);
        console.log(wolf.clientHeight + wolf.offsetTop);
        if(intro.offsetTop < wolf.clientHeight + wolf.offsetTop) {
            intro["style"].transform = "scale(" + 0.8 * window.innerHeight / 650 + ")";
        }
       }, 60)

       setTimeout(()=>{
        visible2 = true;
       }, 100)

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

    <img id="wolf" bind:this={wolf} alt="wolf" src="{path}/images/me_logo.png" style="transform:scale(-1, 1)" height=50/>

    <div id="intro" bind:this={intro}>

    {#if visible2}
        <svg style="display:inline-block;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1380 320">
            <path in:draw={{duration:800}} on:introend={()=>{fill = true;}} fill="{fill ? "#05445e" : "none"}" stroke-width=2 stroke="#05445e" d="{path1}"/>
            <path in:draw={{duration:800}} on:introend={()=>{fill = true;}} fill="{fill ? "#05445e" : "none"}" stroke-width=2 stroke="#05445e" d="{path2}"/>
            <path in:draw={{duration:800}} on:introend={()=>{fill = true;}} fill="{fill ? "#05445e" : "none"}" stroke-width=2 stroke="#05445e" d="{path3}"/>
            <path in:draw={{duration:800}} on:introend={()=>{fill = true;}} fill="{fill ? "#05445e" : "none"}" stroke-width=2 stroke="#05445e" d="{path4}"/>
            <path in:draw={{duration:800}} on:introend={()=>{fill = true;}} fill="{fill ? "#05445e" : "none"}" stroke-width=2 stroke="#05445e" d="{path5}"/>
            <path in:draw={{duration:800}} on:introend={()=>{fill = true;}} fill="{fill ? "#05445e" : "none"}" stroke-width=2 stroke="#05445e" d="{path6}"/>
            <path in:draw={{duration:800}} on:introend={()=>{fill = true;}} fill="{fill ? "#05445e" : "none"}" stroke-width=2 stroke="#05445e" d="{path7}"/>
            <path in:draw={{duration:800}} on:introend={()=>{fill = true;}} fill="{fill ? "#05445e" : "none"}" stroke-width=2 stroke="#05445e" d="{path8}"/>
            <path in:draw={{duration:800}} on:introend={()=>{fill = true;}} fill="{fill ? "#05445e" : "none"}" stroke-width=2 stroke="#05445e" d="{path9}"/>
        </svg>
    {/if}
    
    </div>

    <div id="move_into_website">
        <img src="{path}/images/mouse.png" width=25 alt="mouse"/>
        <div  id="beacon_circle"></div>
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
        height:100%;
        position:relative;
        @include flexCenter;
        text-size-adjust:none;
        background-color:$offWhite;

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
            width:50vw;
            /*position:absolute;
            top:50%;
            transform:translateY(-50%);*/
            color:$offBlack;
            position:relative;

            svg {
                font-family:"Arial";

                path {
                    transition:fill 2s linear ease-in;
                }
            }

        }

        #move_into_website {
            width:50px;
            height:50px;
            border-radius:50%;
            position:absolute;
            bottom:10px;
            left:10px;

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
                animation-delay:1s;
            }
        }
    }

</style>