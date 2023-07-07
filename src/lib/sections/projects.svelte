<script lang="ts">

    import { onMount } from "svelte";
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

    <div id="projects_floating_tab" class:full_width={scroll > top} class:partial_width={scroll <= top}></div>

</div>

<style lang="scss">

    @import "../../styles/theme.scss";

    #projects {
        width:100vw;
        padding:10px 0px;

        #projects_floating_tab {
            background-color:$offBlack;

            @media only screen and (min-width:811px) {
                width:100vw;
                margin-left:0vw;
            }

            height:300vh;/*This will be a dummy height, will size to content*/
            //background-color:$offBlack;
            border-radius:30px;
            margin-top:calc(18vw);
            transition:all 0.2s linear;
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