<script lang="ts">

    import "../styles/fonts.css"
    import { base } from '$app/paths';
    import Menu from "$lib/menu.svelte";
    import Contact from "$lib/sections/contact.svelte";
    import Projects from "$lib/sections/projects.svelte";
    import About from "$lib/sections/about.svelte";
    import Landing from "$lib/sections/landing.svelte";
    import type { PageData } from "./$types";
    export let data : PageData;
    console.log(data);
    let screenWidth : number;
    let screenHeight : number;
    let test : number;
    let h : number = 0;

</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight}/>

<svelte:body on:scroll={(e)=>{
    h = e["target"].scrollTop;
}}/>

<div id="page_tracker">

    <div id="half-cover"></div>

    <div id="first-half"></div>

    <div id="second-half"></div>

</div>


<Landing path={base} screenWidth={screenWidth} screenHeight={screenHeight}/>

<About path={base}/>

<Projects scroll={h} path={base}/>

<Contact path={base} screenWidth={screenWidth}/>

<style lang="scss">
    @import "../styles/theme.scss";

    #page_tracker {
        width:30px;
        height:30px;
        position:fixed;
        z-index:10000;
        bottom:20px;
        right:20px;
        border-radius:50%;
        border:2px solid $offWhite;
        overflow:hidden;
        background-color:$offWhite;

        #half-cover {
            width:50%;
            height:100%;
            background-color:$offWhite;
            position:absolute;
            z-index:100000000;
            border:5px solid $offWhite;
        }

        #first-half {
            width:calc(100% - 11px);
            height:calc(100% - 11px);
            border-radius:50%;
            border-left:5px solid $offBlack;
            border-bottom:5px solid $offBlack;
            border-top:5px solid transparent;
            border-right:5px solid transparent;
            transform:rotate(45deg);
            background-color:$offWhite;
        }

        #econd-half {
            position:absolute;
            width:calc(100% - 10px);
            height:calc(100% - 10px);
            top:00;
            left:1px;
            border-radius:50%;
            border-left:5px solid $offBlack;
            border-bottom:5px solid $offBlack;
            border-top:5px solid transparent;
            border-right:5px solid transparent;
            z-index:1000000;
            transform:rotate(45deg);
        }
    }

</style>