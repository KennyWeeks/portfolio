<script lang="ts">

    import { onMount } from "svelte";
    import project from "../data/projects.json";
    import Device from 'svelte-device-info';
    export let scroll : number = 0;
    let mobile : boolean = false;
    let top : any = 0;
    export let path : string = "";
    let zIndexImages : number[] = [100, 100, 100];
    let zIndexBody : number[] = [10000, 1000, 1000];
    let opacity : number[] = [0.3, 0.3, 0.3];

    let stackButton : boolean[] = [false, false, false];
    let stackButtonTrigger : number[] = Array(stackButton.length);

    onMount(() => {
        const p = document.getElementById("projects");
        const body = document.getElementsByTagName("body");
        scroll = body[0].scrollTop;
        top = p?.offsetTop;
        console.log(p?.offsetTop);
        console.log(scroll);
        mobile = Device.isMobile;

        const bodyParts = [...document.querySelectorAll(".project_body")];
        const bodyP = document.querySelector(".body_parts");
        window.addEventListener("resize", ()=>{
            bodyParts.forEach((e, i)=>{
                console.log(e);
                if(bodyP.clientHeight < e.clientHeight) {
                    stackButton[i] = true;
                    stackButtonTrigger[i] = window.innerWidth;
                } else {
                    if(window.innerWidth > stackButtonTrigger[i]) {
                        stackButton[i] = false;
                    }
                }
            });
        });
    });

</script>

<div id="projects" data-scroll={scroll}>

    <div class="intro_block">
        <h3>Projects</h3>

        <div class="github_link">
            
            <div class="github_icon" style="background-image:url('{path}/images/octocat.png')">
                <!--The octocat will be the background-->
            </div>

        </div>
    </div>

    <div id="projects_floating_tab" class:full_width={scroll > top} class:partial_width={scroll <= top}>
    
        <div id="content-holder">
            {#each project["project"] as p, index}
                <div class="body_parts" style="flex-direction:{index % 2 === 1 ? "row-reverse": "row"}; margin-top:{index !== 0 ? "50px" : "0px"}">
                    <div class="project_image" style="z-index:{zIndexImages[index]}; opacity:{opacity[index]};">

                        <div class="main_image"></div>

                        <div class="side_images">

                            <div class="side_act_img"></div>

                            <div class="side_act_img"></div>

                            <div class="side_act_img"></div>

                            <div class="side_act_img"></div>

                        </div>

                    </div>

                    <div class="tablet_menu_options" style="{index % 2 == 0 ? "left:10px;" : "right:10px;"}; z-index:{zIndexBody[index]};">

                        <div class="option_button" on:click={()=>{
                            zIndexImages[index] = zIndexBody[index];
                            zIndexBody[index] = 100;
                            opacity[index] = 1.0;
                        }}>
                        
                            <img src="{path}/images/gallery.png" width=30 alt="gallery"/>

                        </div>

                        <div class="option_button">

                            <img src="{path}/images/link.png" width=30 alt="gallery"/>

                        </div>

                    </div>

                    <div class="project_body" style="{index % 2 == 0 ? "right:0px;" : "left:0px;"}; z-index:{zIndexBody[index]}">

                        <h3>{p["title"]} <span><img src="{path}/images/octocat.png" alt="octocat" width=20px/></span></h3>

                        <p class="desc">{p["description"]}</p>

                        <div>
                            {#if stackButton[index] === false}
                                {#each p["stack"] as st, j}
                                    <p class="tools">{st}</p>
                                {/each}
                            {:else}
                                <button>stack {stackButton[index]}</button>
                            {/if}
                        </div> 

                    </div>
                </div>
            {/each}
        </div>

    </div>

</div>

<style lang="scss">

    @import "../../styles/theme.scss";

    #projects {
        position:relative;
        width:100vw;
        padding-top:10px;
        @include randomTest(">#{$tabletMax}") {
            padding-bottom:20px;
        }
        font-family:$font-family;

        .intro_block{
            @include flexRow;
            margin-top:5px;
            
            @include randomTest(("<#{$laptopMax}")) {
                width:90vw;
                margin-left:5vw;
            }

            @include randomTest((">#{$laptopMax}")) {
                width:1600px;
                margin:auto;
            }
            
            
            h3 {
                font-size:50px;
                font-family:$font-family;
                margin-bottom:0px;
                margin-top:0px;
                align-self:center;
                font-weight:bold;
                text-transform:lowercase;
            }

            .github_link {
                width:50px;
                height:50px;
                background-color:$offBlack;
                margin-right:0px;
                margin-top:15px;
                border-radius:60px;
                position:relative;
                align-self:center;

                .github_icon {
                    width:47px;
                    height:47px;
                    border-radius:50%;
                    position:absolute;
                    top:1.5px;
                    right:1.5px;
                    background-size:cover;
                    background-repeat:no-repeat;
                    background-position:center center;
                }
            }
        }

        //This is is the body of the content;

        #projects_floating_tab {
            background-color:$offBlack;
            height:auto;/*This will be a dummy height, will size to content*/
            padding-top:20px;
            //background-color:$offBlack;
            transition:all 0.2s linear;
            padding-bottom:20px;

            @include phoneVert {
                
            }

            @include tablet {
                margin-top:10px;
                padding-bottom:20px;
            }

            @include laptop {
                width:90vw;
                max-width:1600px;
                margin-left:5vw;
                border-radius:20px;
            }

            @include desktop {
                width:1600px;
                margin:auto;
                border-radius:20px;
            }

            #content-holder {
                margin:auto;
                @include randomTest("<#{$laptopMax}") {
                    width:calc(90vw);
                }
                @include randomTest(">#{$laptopMax}") {
                    width:1600px;
                }
                

                .body_parts {
                    color:$offWhite;
                    margin:auto;
                    font-family:$font-family;
                    position:relative;

                    @include phoneVert {
                        width:90%;
                    }
                    @include randomTest(">#{$tabletMin}") {
                        @include flexRow;
                    }

                    //We'll make the custom one in sass first, but we can shrink they two down
                    @include tablet {
                        width:calc(90vw - 40px);
                    }
                    @include laptop {
                        width:calc(90vw - 40px);
                    }

                    @include desktop {
                        width:calc(100% - 40px);
                    }

                    .project_image {

                        //background-color:$offWhite;
                        border-radius:10px;
                        overflow:hidden;
                        position:relative;
                        height:300px;
                        background-color:$offBlack;

                        @media only screen and (max-height:400px) {
                            width:300px;
                            opacity:0.5;
                        }

                        @media only screen and (max-width:1049px) and (min-width:800px) {
                            width:600px;
                            opacity:0.5;
                            @include flexRow;
                        }

                        @media only screen and (min-width:1600px) {
                            width:600px;
                            @include flexRow;
                        }

                        @media only screen and (max-width:799px) and (min-width:500px) {
                            width:450px;
                            opacity:0.5;
                            @include flexRow;
                        }

                        @media only screen and (max-width:499px) {
                            min-height:200px;
                            height:250px;
                            width:100%;
                        }

                        @media only screen and (min-width:1050px) and (max-width:1600px) {
                            width:450px;
                            @include flexRow;
                        }

                        .main_image {
                            width:300px;
                            height:300px;
                            background-color:$offWhite;
                            border-radius:20px;

                            @include phoneVert {
                                //So on a vertical phone screen, this will be the final height
                                width:100%;
                                height:250px;
                                background-color:$offWhite;
                                border-radius:10px;
                                margin-bottom:0px;
                            }
                        }

                        @media only screen and (max-width:1049px) and (min-width:800px) {
                            .side_images {
                                width:295px;
                                height:300px;
                                margin-left:5px;
                                @include flexRow;
                                flex-wrap:wrap;

                                .side_act_img {
                                    width:145px;
                                    height:147.5px;
                                    border-radius:20px;
                                    background-color:$offWhite;
                                    margin-bottom:5px;
                                }
                            }
                        }

                        @media only screen and (max-width:799px) and (min-width:500px) {
                            .side_images {
                                width:145px;
                                height:300px;
                                margin-left:5px;

                                .side_act_img {
                                    width:145px;
                                    height:147.5px;
                                    border-radius:20px;
                                    background-color:$offWhite;
                                    margin-bottom:5px;
                                }
                            }
                        }

                        @media only screen and (max-width:499px) {
                            .side_images {
                                display:none;
                            }
                        }

                        @media only screen and (min-width:1050px) and (max-width:1600px) {

                            .side_images {
                                width:145px;
                                height:300px;
                                margin-left:5px;

                                .side_act_img {
                                    width:145px;
                                    height:147.5px;
                                    border-radius:20px;
                                    background-color:$offWhite;
                                    margin-bottom:5px;
                                }
                            }
                        }

                        @media only screen and (min-width:1600px) {
                            .side_images {
                                width:295px;
                                height:300px;
                                margin-left:5px;
                                @include flexRow;
                                flex-wrap:wrap;

                                .side_act_img {
                                    width:145px;
                                    height:147.5px;
                                    border-radius:20px;
                                    background-color:$offWhite;
                                    margin-bottom:5px;
                                }
                            }
                        }

                    }

                    .tablet_menu_options {
                        @include tablet {
                            width:40px;
                            height:auto;
                            padding:10px;
                            position:absolute;
                            top:50%;
                            transform:translateY(-50%);
                            background-color:$offBlack;
                            border-radius:50px;


                            .option_button {
                                width:40px;
                                height:40px;
                                border-radius:50%;
                                background-color:$offWhite;
                                @include flexCenter;

                                &:nth-of-type(2) {
                                    margin:10px 0px 0px 0px;
                                }


                            }
                        }
                    }

                    .project_body {
                        padding-top:20px;
                        padding-bottom:20px;
                        @include randomTest(">#{$tabletMin}") {
                            padding:20px;
                        }
                        border-radius:20px;
                        background-color:$offBlack;

                        @include phoneHoriz {
                            width:70%;
                            position:absolute;
                            
                            top:50%;
                            transform:translateY(-50%);
                        }

                        //Here are the horizontal styles
                        @include phoneVert {
                            margin-left:0px;
                            h3, .desc {
                                @include flexRow;
                                font-size:22px;
                                width:100%;
                                margin-top:0px;
                            }
                            .desc {
                                margin:0px 0px 15px 0px;
                            }
                            div {
                                width:100%;
                                p {
                                    font-size:20px;
                                    display:inline-block;
                                    margin:0px 5px 5px 0px ;
                                    line-height:0px;
                                    padding:20px;
                                    box-shadow:inset 0 0 0 2px $offWhite;
                                    border-radius:20px;

                                }
                            }
                        }

                        @include tablet {
                            width:calc(100% - 120px);
                            position:absolute;
                            top:50%;
                            transform:translateY(-50%);

                            h3, .desc {
                                width:100%;
                                font-size:22px;
                            }

                            .desc {
                                margin-top:0px;
                                font-size:20px;
                            }

                            div {
                                width:100%;
                                p {
                                    font-size:18px;
                                    display:inline-block;
                                    margin:0px 5px 5px 0px ;
                                    line-height:0px;
                                    padding:20px;
                                    box-shadow:inset 0 0 0 2px $offWhite;
                                    border-radius:20px;
                                }
                            }

                        }

                        @include laptop {
                            //So this is the larger screens of this stuff
                            width:calc(100% - 450px);
                            @include flexCenter;

                            h3, .desc {
                                margin-left:0%;
                                width:80%;
                                font-size:22px;
                            }

                            .desc {
                                margin:0px 0px 20px 0px;
                                font-size:20px;
                            }

                            div {
                                width:80%;
                                .tools {
                                    font-size:20px;
                                    display:inline-block;
                                    margin:0px 5px 5px 0px ;
                                    line-height:0px;
                                    padding:20px;
                                    box-shadow:inset 0 0 0 2px $offWhite;
                                    border-radius:20px;
                                }
                            }
                        }

                        @include desktop {
                            width:calc(100% - 650px);
                            @include flexCenter;
                            h3, .desc {
                                width:80%;
                                margin-left:0%;
                                font-size:25px;
                            }

                            .desc {
                                font-size:22px;
                                margin-top:0px;
                            }

                            div {
                                width:80%;
                                p {
                                    font-size:20px;
                                    display:inline-block;
                                    margin:0px 5px 5px 0px ;
                                    line-height:0px;
                                    padding:20px;
                                    box-shadow:inset 0 0 0 2px $offWhite;
                                    border-radius:20px;
                                }
                            }
                        }
                    }

                }
            }
        }

        //These are the styles to get the full screen
        .full_width {
            @include randomTest("<#{$tabletMax}") {
                width:100vw;
                margin-left:0vw;
                border-top-left-radius:20px;
                border-top-right-radius:20px;
            }
        }

        .partial_width {
            @include randomTest("<#{$tabletMax}") {
                width:90vw;
                margin-left:5vw;
                border-top-left-radius:20px;
                border-top-right-radius:20px;
            }
        }
    }
</style>