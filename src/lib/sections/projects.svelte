<script lang="ts">

    import { onMount } from "svelte";
    import project from "../data/projects.json"
    console.log(JSON.stringify(project))
    export let scroll : number = 0;
    let top : any = 0;

    onMount(() => {
        const p = document.getElementById("projects");
        top = p?.offsetTop;
        console.log(p?.offsetTop);
        console.log(scroll);
    });

</script>

<div id="projects" data-scroll={scroll}>

    <div id="projects_floating_tab" class:full_width={scroll > top} class:partial_width={scroll <= top}>
    
        <div id="content-holder">
            {#each project["project"] as p}
                <div class="body_parts">
                    <div class="project_image"></div>

                    <div class="project_body">

                        <h3>{p["title"]} <span><img src="images/octocat.png" alt="octocat" width=20px/></span></h3>

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
        width:100vw;
        padding:10px 0px 0px 0px;
        font-family:"Arial Black";

        #projects_floating_tab {
            background-color:$offBlack;

            @media only screen and (min-width:811px) {
                width:100vw;
                margin-left:0vw;
            }

            height:auto;/*This will be a dummy height, will size to content*/
            padding-top:20px;
            padding-bottom:20px;
            //background-color:$offBlack;
            border-top-right-radius:30px;
            border-top-left-radius:30px;
            margin-top:calc(18vw);
            transition:all 0.2s linear;

            #content-holder {
                width:90vw;
                margin:auto;

                .body_parts {
                    color:$offWhite;
                    width:90%;
                    margin:auto;
                    font-family:"Arial";

                    .project_image {
                        width:100%;
                        height:200px;
                        background-color:$offWhite;
                        border-radius:10px;
                    }

                    .project_body {
                        h3 {
                            width:100%;
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