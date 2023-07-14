<script lang="ts">

    import { onMount } from "svelte";
    import project from "../data/projects.json";
    import Device from 'svelte-device-info';
    export let scroll : number = 0;
    let mobile : boolean = false;
    let top : any = 0;
    export let path : string = "";

    onMount(() => {
        const p = document.getElementById("projects");
        const body = document.getElementsByTagName("body");
        scroll = body[0].scrollTop;
        top = p?.offsetTop;
        console.log(p?.offsetTop);
        console.log(scroll);
        mobile = Device.isMobile;
    });

</script>

<div id="projects" data-scroll={scroll}>

    <div class="intro_block">
        <img src="{path}/images/project_header_dark.png" width=275px alt="project_intro"/>

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
                    <div class="project_image">

                        <div class="main_image"></div>

                        <div class="side_images">

                            <div class="side_act_img"></div>

                            <div class="side_act_img"></div>

                            <div class="side_act_img"></div>

                            <div class="side_act_img"></div>

                        </div>

                    </div>

                    <div class="project_body" style="{index % 2 == 0 ? "right:0px;" : "left:0px;"}">

                        <h3>{p["title"]} <span><img src="{path}/images/octocat.png" alt="octocat" width=20px/></span></h3>

                        <p>{p["description"]}</p>

                        <p><i>stack - </i></p>

                        <p>
                            {#each p["stack"] as st, j}
                                {st}{#if j !== p["stack"].length - 1},&nbsp;{/if}  
                            {/each}
                        </p> 

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
        font-family:"Arial Black";

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
            
            

            img {
                margin-bottom:10px;
            }

            .github_link {
                width:50px;
                height:50px;
                background-color:$offBlack;
                margin-right:0px;
                margin-top:15px;
                border-radius:60px;
                position:relative;

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
                    font-family:"Gill Sans";
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

                        @media only screen and (max-height:400px) {
                            width:300px;
                            opacity:0.5;
                        }

                        @media only screen and (max-width:1049px) and (min-width:800px) {
                            width:600px;
                            opacity:0.5;
                            @include flexRow;
                        }

                        @media only screen and (max-width:799px) and (min-width:500px) {
                            width:450px;
                            opacity:0.5;
                            @include flexRow;
                        }

                        @media only screen and (max-width:499px) {
                            min-height:200px;
                            width:100%;
                        }

                        @media only screen and (min-width:1050px) {
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
                                border-radius:20px;
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

                        @media only screen and (min-width:1050px) {

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

                    }

                    .project_body {
                        padding:20px;
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
                            width:100%;
                        }

                        @include tablet {
                            width:70%;
                            position:absolute;
                            top:50%;
                            transform:translateY(-50%);

                            h3 {
                                width:100%;
                            }

                            h3, p {
                                font-size:18px;
                            }
                        }

                        @include laptop {
                            //So this is the larger screens of this stuff
                            width:calc(100% - 450px);
                            @include flexCenter;
                            h3, p {
                                width:80%;
                                margin-left:0%;
                                font-size:20px;
                            }
                        }

                        @include desktop {
                            width:calc(100% - 450px);
                            @include flexCenter;
                            h3, p {
                                width:80%;
                                margin-left:0%;
                                font-size:20px;
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