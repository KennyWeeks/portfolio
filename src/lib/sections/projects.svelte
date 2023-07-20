<script lang="ts">

    import { onMount } from "svelte";
    import project from "../data/projects.json";
    import Device from 'svelte-device-info';
    import { inview } from "svelte-inview";
    export let scroll : number = 0;
    let mobile : boolean = false;
    let top : any = 0;
    export let path : string = "";
    let zIndexImages : number[] = [100, 100, 100];
    let zIndexBody : number[] = [10000, 1000, 1000];
    let opacity : number[] = [0.3, 0.3, 0.3];

    let stackButton : boolean[] = [false, false, false];
    let stackButtonTrigger : number[] = Array(stackButton.length);

    let projects : Element;

    //This is the options that will go into the threshold thing
    let options : object = {
        root: null,
        margin: "0px",
        threshold: 0.3
    }

    onMount(() => {

        //I'll have to do this for all of them.
        let observer = new IntersectionObserver((entries, observer)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting) {
                    entry.target.style.opacity = 1.0;
                } else {
                    console.log("Not there");
                }
            });
        }, options);

        //observer.observe(document.querySelector(".body_parts"));
        let bodyParts = document.querySelectorAll(".body_parts");
        bodyParts.forEach(e=>{
            observer.observe(e);
        });
    });

</script>

<div id="projects" bind:this={projects}>

    <div id="projects_floating_tab" class:full_width={scroll > top} class:partial_width={scroll <= top}>
    
        <div id="content-holder">
            {#each project["project"] as p, index}
                <div class="body_parts" style="flex-direction:{index % 2 === 1 ? "row-reverse": "row"}; margin-top:{index !== 0 ? "80px" : "0px"}">
                    <div class="project_image">

                        <div class="main_image"></div>
                        
                        <div class="move_right"></div>
                        
                        <div class="side_images_container">

                            

                            <div class="side_images">

                                <div class="side_act_img"></div>

                                <div class="side_act_img"></div>

                                <div class="side_act_img"></div>

                                <div class="side_act_img"></div>

                            </div>

                        </div>

                    </div>

                    <div class="project_body" style="{index % 2 == 0 ? "right:0px;" : "left:0px;"};">

                        
                        <div class="body_title">
                            <h3>{p["title"]}</h3>
                            <div class="option_buttons">
                                <img src="{path}/images/octocat.png" alt="octocat" width=25px/>
                            </div>
                        </div>

                        <p class="desc">{p["description"]}</p>

                        <div>
                            {#if stackButton[index] === false}
                                {#each p["stack"] as st, j}
                                    <div class="tools">{st}</div>
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
        font-family:$font-family;
        padding-bottom:20px;

        //This is is the body of the content;

        #projects_floating_tab {
            height:auto;/*This will be a dummy height, will size to content*/
            padding-top:20px;
            //background-color:$offBlack;
            padding-bottom:20px;

            @include tablet {
                margin-top:10px;
                padding-bottom:20px;
            }

            @include laptop {
                width:90vw;
                min-width:1040px;
                margin:auto;
                border-radius:20px;
            }

            @include desktop {
                width:1200px;
                margin:auto;
                border-radius:20px;
            }

            #content-holder {
                margin:auto;
                @include mediaDefinition("<800px") {
                    width:90vw;
                }
                @include mediaDefinition(("<#{$tabletMax}", ">800px")) {
                    width:800px;
                }
                @include mediaDefinition(">#{$tabletMax}") {
                    width:100%;
                }
                

                .body_parts {
                    color:$offWhite;
                    margin:auto;
                    font-family:$font-family;
                    position:relative;
                    height:auto;
                    background-color:$offBlack;
                    border-radius:20px;
                    opacity:0.0;
                    transition:opacity 0.5s linear;

                    @include mediaDefinition((">#{$tabletMax}")) {
                        width:1040px;
                        margin:0px;
                        &:nth-of-type(2) {
                            margin-left:calc(100% - 1040px);
                        }
                        @include flexRow;
                    }

                    @include mediaDefinition((">700px", "<#{$tabletMax}")) {
                        width:640px;
                    }

                    @include mediaDefinition(("<700px", ">540px")) {
                        width:490px;
                    }

                    @include mediaDefinition(("<540px")) {
                        width:90vw;
                    }

                    .project_image {
                        @include mediaDefinition((">#{$tabletMax}")) {
                            margin-left:0px;
                            width:600px;
                            transform:none;
                            display:flex;
                        }

                        @include mediaDefinition((">700px", "<#{$tabletMax}")) {
                            width:600px;
                            display:flex;
                        }

                        @include mediaDefinition(("<700px", ">540px")) {
                            width:450px;
                            display:flex;
                        }

                        @include mediaDefinition(("<540px")) {
                            width:90%;
                        }
                        padding:20px;
                        margin-left:50%;
                        margin-top:0px;
                        margin-bottom:0px;
                        transform:translateX(-50%);
                        position:relative;
                        

                        .main_image {
                            width:300px;
                            height:300px;
                            @include mediaDefinition(("<540px")) {
                                width:100%;
                            }
                            background-color:$offWhite;
                            border-radius:20px;
                        }

                        @include mediaDefinition(("<540px")) {
                            .move_right {
                                height:50px;
                                width:25px;
                                background-color:$offBlack;
                                border-top-left-radius:50px;
                                border-bottom-left-radius:50px;
                                position:absolute;
                                top:calc(310px + 70px);
                                transform:translateY(-50%);
                                right:18px;
                                z-index:1000;
                            }
                        }

                        .side_images_container {
                            @include mediaDefinition(("<540px")) {
                                position:relative;
                                width:100%;
                                overflow-x:scroll;
                                cursor:pointer;
                                margin-top:10px;
                                position:relative;
                                &::-webkit-scrollbar {
                                    display:none;
                                }

                            }

                            

                            .side_images {

                                @include mediaDefinition((">700px")) {
                                    width:300px;
                                    @include flexRow;
                                    flex-wrap:wrap;
                                }

                                @include mediaDefinition(("<700px", ">540px")) {
                                    width:150px;
                                    @include flexRow;
                                    flex-wrap:wrap;
                                }

                                @include mediaDefinition(("<540px")) {
                                    height:100px;
                                    margin-left:0px;
                                    width:500px;
                                }
                                height:300px;
                                overflow:hidden;
                                margin-left:2px;
                                

                                .side_act_img {
                                    @include mediaDefinition((">540px")) {
                                        width:149px;
                                        height:149px;
                                    }

                                    @include mediaDefinition(("<540px")) {
                                        height:100px;
                                        width:100px;
                                        box-shadow:none;
                                        display:inline-block;
                                    }
                                    
                                    background-color:$offWhite;
                                    box-shadow:inset 0 0 0 2px $offBlack;
                                    border-radius:20px;
                                }
                            }

                        }
                    }

                    .project_body {
                        padding:20px;
                        border-radius:20px;
                        background-color:$offBlack;
                        @include flexCenter;

                        .body_title {
                            width:100%;
                            @include flexRow;

                            h3 {
                                margin-top:0px;
                                margin-bottom:0px;
                                align-self:center;
                                font-size:22px;
                                display:inline-block;

                                @include underLine("&");
                            }

                            .option_buttons {
                                display:inline-block;
                                padding:0px 10px;
                                @include flexCenter;
                                border-radius:50%;
                                box-shadow:none;
                            }
                        }

                        .desc {
                            font-size:18px;
                        }

                        div {

                            div {
                                padding:15px;
                                box-shadow:inset 0 0 0 2px $offWhite;
                                border-radius:25px;
                                display:inline-block;
                                margin-right:5px;
                                margin-bottom:5px;
                                font-size:18px;
                            }
                        }
                    }

                }
            }
        }
    }
</style>