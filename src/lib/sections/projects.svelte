<script lang="ts">

    import { onMount } from "svelte";
    import project from "../data/projects.json"
    export let scroll : number = 0;
    let top : any = 0;
    export let path : string = "";

    onMount(() => {
        const p = document.getElementById("projects");
        const body = document.getElementsByTagName("body");
        scroll = body[0].scrollTop;
        top = p?.offsetTop;
        console.log(p?.offsetTop);
        console.log(scroll);
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
                    <div class="project_image"></div>

                    <div class="project_body">

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
            @media only screen and (max-width:600px) {
                margin-left:5vw;
                flex-direction:row-reverse;
            }
            img {
                margin-left:5vw;
                margin-bottom:10px;

                @media only screen and (max-width:600px) {
                    display:none
                }
            }

            .github_link {
                width:73px;
                height:73px;
                background-color:$offBlack;
                @media only screen and (min-width:600px) {
                    margin-right:5vw;
                }
                border-radius:60px;
                position:relative;

                .github_icon {
                    width:70px;
                    height:70px;
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
                    @media only screen and (min-width:811px) {
                        width:calc(90vw - 40px);
                        @include flexRow;
                    }
                    margin:auto;
                    font-family:"Arial";

                    .project_image {
                        @media only screen and (max-width:810px) {
                            width:100%;
                            height:50vw;
                            min-height:200px;
                        }

                        @media only screen and (min-width:811px) {
                            width:400px;
                            height:400px;
                        }
                        background-color:$offWhite;
                        border-radius:10px;
                    }

                    .project_body {
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