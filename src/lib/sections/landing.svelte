<script lang="ts">

    import {onMount} from "svelte";
    import Menu from "../menu.svelte";

    export let path : string = "";
    export let screenWidth : number;
    export let screenHeight : number;
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

       //resizeChange();
    });



</script>

<Menu/>

<div id="middle_line"></div>

<div id="bottom_line"></div>

<div id="landing">

    <img id="wolf" alt="wolf" src="{path}/images/wolf.png" width=80px/>

    <div id="clocks">
        <Clock path={path}/>

        <Clock path={path} otherRegion={10} region="Bucharest"/>
    </div>

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

    #landing {
        width:100vw;
        height:100%;
        background-color:$offWhite;
        position:relative;
        @include flexCenter;

        #wolf {
            position:absolute;
            top:10px;
            left:15px;
        }

        #clocks {
            width:290px;
            height:auto;
            position:absolute;
            bottom:10px;
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
                font-family:"Gill Sans";
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