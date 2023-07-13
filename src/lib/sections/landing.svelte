<script lang="ts">

    import {onMount} from "svelte";

    export let path : string = "";
    export let screenWidth : number;
    export let screenHeight : number;
    import Clock from "../clock.svelte";

    onMount(()=>{
       let hi : any = document.getElementById("hi");
       let my : any = document.getElementById("my");
       let wel : any = document.getElementById("welcome");
       let port : any = document.getElementById("portfolio_text");
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

       const resizeChange = () => {
        let wolf : any = document.getElementById("wolf");
        let intro : any = document.getElementById("intro");
        let intro_text : any = document.getElementById("intro_text");
        if(window.innerHeight < 500) {
            if(wolf.offsetTop + wolf.clientHeight >= (intro.offsetTop + intro_text.offsetTop)) {
                let pixel : number = parseInt(window.getComputedStyle(intro_text).fontSize);
                intro_text.style.fontSize = pixel - 10 + "px";
            }
        }

       }

       //Will need to add this tomorrow
       window.addEventListener("resize", ()=>{
        resizeChange();
       });

       resizeChange();
    });



</script>

<div id="landing">

    <img id="wolf" alt="wolf" src="{path}/images/wolf.png" width=80px/>

    <div id="clocks" class:layout_1_clocks={screenWidth > screenHeight} class:layout_2_clocks={screenWidth <= screenHeight}>
        <Clock/>

        <Clock otherRegion={10} region="Bucharest"/>
    </div>

    <div id="intro" class:layout_2_intro={screenWidth <= screenHeight} class:layout_1_intro={screenWidth > screenHeight} >

        <h3 id="intro_text"><span id="hi">Hi,</span><br> <span id="my">my name is Kenny Weeks. </span><br> <span id="welcome">Welcome to my  ...</span> </h3>

        <img id="portfolio_text" src="{path}/images/portfolio_title{screenWidth > screenHeight ? "_large" : "_large"}.svg" alt="portfolio_text"/>

    </div>

    <div id="move_into_website">
        <div id="beacon_circle"></div>
    </div>

</div>

<style lang="scss">

    @import "../../styles/theme.scss";

    @keyframes beacon {
        0% {
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

    #landing {
        width:100vw;
        height:100%;
        background-color:$offWhite;
        overflow:hidden;
        position:relative;
        @include flexCenter;

        #wolf {
            position:absolute;
            top:10px;
            left:10px;
        }

        #clocks {
            width:400px;
        }

        .layout_1_clocks {
            @include flexRow;
            position:absolute;
            top:15px;
            left:calc((100vw - 350px) / 2);
        }

        .layout_2_clocks {
            position:absolute;
            bottom:10px;
            left:calc(5vw + 10px);
        }

        .layout_1_intro {
            bottom:-30px;
        }

        .layout_2_intro {
            bottom:60px;
        }

        #intro {
            width:90vw;
            overflow:hidden;
            @include phoneHoriz {
                position:absolute;
                bottom:-20px;
                left:50%;
                transform:translateX(-50%);
            }

            h3 {
                font-family:"Goldoni";
                margin-bottom:0px;

                @include phoneVert {
                    font-size:6vw;
                }
                @include tablet {
                    font-size:4vw;
                }

                @include laptop {
                    font-size: 5vw;
                }
                @include desktop {
                    font-size: 5vw;
                }
                
                span {
                    opacity:0;
                    transition:opacity 1s linear;
                }
            }

            img {
                opacity: 0;
                transition: opacity 1s linear;
                width:90vw;
            }

        }

        #move_into_website {
            width:50px;
            height:50px;
            border:5px solid #000;
            border-radius:50%;
            position:absolute;
            bottom:30px;
            left:50%;
            transform:translateX(-50%);

            #beacon_circle {
                width:50px;
                height:50px;
                position:absolute;
                top:50%;
                left:50%;
                transform: translate(-50%, -50%);
                border:5px solid $offBlack;
                border-radius:50%;
                animation: beacon 5s linear infinite;
                animation-delay:5s;
            }
        }
    }

</style>