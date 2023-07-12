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
        <img src="{path}/images/projects_header.png" width=275px alt="project_intro"/>

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

                        <div class="image_tracker">
                            <div class="image_blip_mover"></div>

                            {#each Array(10) as _, i}
                                <div class="image_blip"></div>
                            {/each}
                        </div>

                        <div class="picture_mover" style="{ mobile ? "display:none;" : ""}"></div>

                        <div class="picture_mover" style="{ mobile ? "display:none;" : ""}"></div>

                    </div>

                    <div class="project_body" style="{index % 2 == 0 ? "right:0px;" : "left:0px;"}">

                        <h3>{p["title"]} <span><img src="{path}/images/octocat.png" alt="octocat" width=20px/></span></h3>

                        <p>{p["description"]}</p>

                        <p><i>stack - </i></p>

                        <p>
                            {#each p["stack"] as st}
                                <i>{st}, </i> 
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
        @media only screen and (min-width:811px) {
            padding-bottom:20px;
        }
        font-family:"Arial Black";

        .intro_block{
            @include flexRow;
            width:90vw;
            margin-top:5px;
            margin-left:5vw;
            @media only screen and (max-width:600px) {
                
                flex-direction:row-reverse;
            }
            img {
                margin-bottom:10px;

                @media only screen and (max-width:600px) {
                    display:none
                }
            }

            .github_link {
                width:50px;
                height:50px;
                background-color:$offBlack;
                @media only screen and (max-width:600px) {
                    margin-right:5vw;
                }
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

        #projects_floating_tab {
            background-color:$offBlack;

            @media only screen and (max-width:810px) {
                border-top-right-radius:30px;
                border-top-left-radius:30px;
                margin-top:10px;
            }

            @media only screen and (min-width:811px) {
                width:90vw;
                margin-left:5vw;
                border-radius:20px;
            }

            height:auto;/*This will be a dummy height, will size to content*/
            padding-top:20px;
            padding-bottom:20px;
            //background-color:$offBlack;
            transition:all 0.2s linear;

            #content-holder {
                width:90vw;
                margin:auto;

                .body_parts {
                    color:$offWhite;
                    @media only screen and (max-width:810px) {
                        width:90%;
                    }
                    @media only screen and (max-width:810px) and (min-width:500px) {
                        @include flexRow;
                    }
                    @media only screen and (min-width:811px) {
                        width:calc(90vw - 40px);
                        @include flexRow;
                    }
                    margin:auto;
                    font-family:"Arial";
                    position:relative;

                    .project_image {

                        @media only screen and (max-height:400px) {
                            width:300px;
                            height:300px;
                            filter:blur(3px);
                            opacity:0.5;
                        }

                        @media only screen and (max-width:810px) and (min-width:500px) {
                            width:300px;
                            height:300px;
                            filter:blur(3px);
                            opacity:0.5;
                        }

                        @media only screen and (max-width:499px) {
                            min-height:200px;
                            height:calc(90vw * 0.9);
                            width:100%;
                        }

                        @media only screen and (min-width:811px) {
                            width:400px;
                            height:400px;
                        }
                        background-color:$offWhite;
                        border-radius:10px;
                        overflow:hidden;
                        position:relative;

                        .picture_mover {
                            width:50px;
                            height:50px;
                            border-radius:50%;
                            background-color:$offBlack;
                            position:absolute;
                            top:calc((100% - 50px) / 2);
                            box-shadow:inset 0 0 0 5px $offBlack, inset 0 0 0 4px $offWhite;
                            transition:box-shadow 0.2s linear;
                            &:hover {
                                box-shadow:inset 0 0 0 5px $offBlack, inset 0 0 0 10px $offWhite;
                            }
                        }

                        .picture_mover:nth-of-type(2) {
                            left:-25px;
                        }

                        .picture_mover:nth-of-type(3) {
                            right:-25px;
                            
                        }

                        .image_tracker {
                            width:80%;
                            height:10px;
                            position:absolute;
                            left:10%;
                            bottom:10px;
                            @include flexRow;

                            .image_blip {
                                width:10px;
                                height:10px;
                                background-color:$offBlack;
                                border-radius:50%;
                            }

                            .image_blip_mover {
                                position:absolute;
                                background-color:$offWhite;
                                width:6px;
                                height:6px;
                                border-radius:50%;
                                top:2px;
                                left:2px;
                            }
                        }
                    }

                    .project_body {
                        @media only screen and (max-height:400px) {
                            width:70%;
                            position:absolute;
                            box-shadow:inset 0 0 0 2px #fff;
                            background-color:$offBlack;
                            top:50%;
                            transform:translateY(-50%);
                            padding:20px;
                            border-radius:20px;
                        }

                        @media only screen and (max-width:810px) and (min-width:500px) {
                            width:70%;
                            position:absolute;
                            box-shadow:inset 0 0 0 2px #fff;
                            background-color:$offBlack;
                            top:50%;
                            transform:translateY(-50%);
                            padding:20px;
                            border-radius:20px;
                        }

                        @media only screen and (max-width:499px) {
                            width:100%;
                        }

                        @media only screen and (min-width:811px) {
                            width:calc(100% - 400px);
                            @include flexCenter;
                            h3, p {
                                width:80%;
                                margin-left:10%;
                            }
                        }
                        h3 {
                            @media only screen and (max-width:810px) {
                                width:100%;
                            }
                            @include flexRow;
                        }
                    }
                }
            }
        }

        //These are the styles to get the full screen
        .full_width {
            @media only screen and (max-width:810px) {
                width:100vw;
                margin-left:0vw;
            }
        }

        .partial_width {
            @media only screen and (max-width:810px) {
                width:90vw;
                margin-left:5vw;
            }
        }
    }
</style>