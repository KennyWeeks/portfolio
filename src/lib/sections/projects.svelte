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
    let openDescription : boolean[] = [false, false, false];

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
                    let test = entry.target as HTMLElement;
                    test.style.opacity = "1.0";
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

    <div id="project_description">
        <h3>Projects</h3>

        <p>Below are some of the projects I have worked on in the past. I wanted to put them here not just to fill up my website, but to also give an opportunity to display them when demo aren't available to maintain at all times. </p>

        <div id="github_link_area">
            <img src="{path}/images/octocat.png" alt="octocat" width=25px/> 
            <p>This icon, when pressed will link you back to the github repo of the project </p> 
            
        </div><br>

        <div id="demo_link_area">
            <p>This icon, when pressed will link you to a demo if one is available. <img src="{path}/images/octocat.png" alt="octocat" width=25px/></p> 
            
        </div>
    </div>

    <div id="projects_floating_tab" class:full_width={scroll > top} class:partial_width={scroll <= top}>
    
        <div id="content-holder">
            {#each project["project"] as p, index}
                <div class="body_parts">

                    <!--<h3 class="project_counter">Project {index + 1}</h3>-->

                    <div class="body-content">
                        <div class="project_image">

                            <div class="main_image"></div>

                        </div>

                        <div class="project_body">

                            
                            <div class="body_title">
                                <h3>{p["title"]}</h3>
                            </div>

                            <button class="open-dialog" on:click={(e)=>{
                                let target = openDescription[index];
                                if(target == false) {
                                    openDescription[index] = true;
                                } else {
                                    openDescription[index] = false;
                                }
                            }}>{openDescription[index] ? "Close" : "Read More"}</button>

                            <p style={openDescription[index] == true ? "display:block" : "display:none"} class="desc">{p["description"]}</p>

                            <div class="tools-area" style={openDescription[index] == true ? "display:block" : "display:none"} >
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
                </div>
            {/each}
        </div>

    </div>

</div>

<style lang="scss">

    @import "../../styles/theme.scss";

    $twoCardsWidth : 1388px;
    $oneCardWidth: 925px;

    #projects {
        @include mainAreaAndHeader;

        #project_description {
            width:80vw;
            max-width:1200px;
            margin:auto;

            h3 {
                font-size:1.75rem;
                text-transform:uppercase;
            }

            p {
                font-size:1.25rem;
            }

            div{
                display:inline-block;
                width:80vw;

                p {
                    margin:0px 0px 0px 0px;
                }

                img {
                    border-radius:50%;
                    float:left;
                    margin-right:10px;
                }

                &:nth-of-type(2) {
                    margin-top:10px;
                    display:none;
                }
            }
        }

        //This is is the body of the content;

        #projects_floating_tab {
            height:auto;

            @include mediaDefinition(("<#{$laptopMax}")) {
                width:80vw;
                max-width:1200px;
                margin:auto;
                margin-top:30px;
                border-radius:20px;
            }

            @include desktop {
                width:1200px;
                margin:auto;
                border-radius:20px;
            }

            #content-holder {
                margin:auto;
                width:100%;
                display:flex;
                flex-flow:row;
                flex-wrap:wrap;
                justify-content:center;
                
                .body_parts {
                    width:22.5em;
                    margin:5px;
                    height:25em;
                    overflow:hidden;
                    border-radius:20px;
                    transition:all 0.25s linear;
                    box-shadow:0 0 5px rgba(5, 68, 94, 0.8);

                    @include mediaDefinition(("<#{$twoCardsWidth}", ">#{$oneCardWidth}")) {
                        width:calc(50% - 10px);
                        min-width:22.5em;
                    }

                    @include mediaDefinition(("<#{$oneCardWidth}")) {
                        width:100%;
                    }
                    
                    .body-content {
                        width:100%;
                        height:100%;
                        overflow:hidden;
                        position:relative;

                        .project_image {
                            width:100%;
                            height:100%;
                            background-color:$offBlack;
                        }

                        .project_body {
                            width:95%;
                            height:auto;
                            padding:10px 0px;
                            background-color:$offWhite;
                            overflow-y:scroll;
                            max-height:calc(25em - 36px);
                            position:absolute;
                            bottom:0px;
                            left:2.5%;
                            bottom:calc(2.5*22.5em/100);
                            border-radius:20px;
                            border-radius:20px;
                            text-align:center;

                            @include mediaDefinition(("<#{$oneCardWidth}")) {
                                bottom: calc(2.5 * 80vw / 100);
                            }

                            h3 {
                                font-size:1.75rem;
                                text-transform:capitalize;
                                text-decoration:underline;
                                margin:auto;
                                text-align:center;
                            }

                            .open-dialog {
                                font-size:1.15rem;
                                background-color:$offBlack;
                                color:$offWhite;
                                padding:10px 15px;
                                border:none;
                                margin-top:10px;
                                border-radius:20px;
                                margin:10px auto 0px auto;
                            }

                            .desc {
                                width:80%;
                                margin:10px auto;
                                font-size:1.15rem;
                                display:none;
                            }

                            .tools-area {
                                width:80%;
                                margin:auto;
                                display:none;

                                .tools {
                                    padding:10px;
                                    font-size:1.1rem;
                                    box-shadow:inset 0 0 0 2px $offBlack;
                                    display:inline-block;
                                    margin:2px;
                                    border-radius:20px;
                                    
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>