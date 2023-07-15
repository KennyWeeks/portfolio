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
        //resizeChange();
       });

       //resizeChange();
    });



</script>

<div id="landing">

    <img id="wolf" alt="wolf" src="{path}/images/wolf.png" width=80px/>

    <div id="clocks" class:layout_1_clocks={screenWidth > screenHeight} class:layout_2_clocks={screenWidth <= screenHeight}>
        <Clock path={path}/>

        <Clock path={path} otherRegion={10} region="Bucharest"/>
    </div>

    <div id="intro" class:layout_2_intro={screenWidth <= screenHeight} class:layout_1_intro={screenWidth > screenHeight} >

        <h3 id="intro_text"><span id="hi">Hi,</span><br> <span id="my">my name is Kenny Weeks. </span><br> <span id="welcome">Welcome to my  ...</span> </h3>

        <!--<img id="portfolio_text" src="{path}/images/portfolio_title{screenWidth > screenHeight ? "_large" : "_large"}.svg" alt="portfolio_text"/>
        -->
        <h1 id="portfolio_text">Portfolio</h1>
    </div>

    <div id="move_into_website">
        <img src="{path}/images/mouse.png" width=25 alt="mouse"/>
        <div id="beacon_circle"></div>
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
            //width:90vw;
            overflow:hidden;


            h3 {
                font-family:"Gill Sans";
                margin-bottom:0px;
                margin-top:0px; 

                @include phoneVert {
                    font-size:6vw;
                }
                @include tablet {
                    font-size:4vw;
                }

                @include laptop {
                    font-size: 5vw;
                }
                @include desktopSmallScreen {
                    font-size:10vh;
                    display:inline-block;
                }

                @include desktopFullScreen {
                    font-size:80px;
                }
                
                span {
                    opacity:0;
                    transition:opacity 1s linear;
                }
            }

            #portfolio_text {
                font-family:"Gill Sans";
                transition: opacity 1s linear;
                @include desktopSmallScreen {
                    font-size:50vh;
                }

                @include desktopFullScreen {
                    width:90vw;
                    font-size:350px;
                }
                margin-top:0px;
                margin-bottom:0px;
                padding:0px;
            }

        }

        #move_into_website {
            width:50px;
            height:50px;
            border-radius:50%;
            position:relative;

            @include desktopSmallScreen {
                position:absolute;
                right:30px;
                top:50%;
                transform:translateY(-50%);
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