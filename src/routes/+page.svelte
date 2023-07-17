<script lang="ts">

    import "../styles/fonts.css"
    import { base } from '$app/paths';
    import Menu from "$lib/menu.svelte";
    import Contact from "$lib/sections/contact.svelte";
    import Projects from "$lib/sections/projects.svelte";
    import About from "$lib/sections/about.svelte";
    import Landing from "$lib/sections/landing.svelte";
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

    <div id="page_tracker_cover"></div>

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
        bottom:15px;
        right:10px;
        background-color:rgba(30, 25, 25, 0.5);
        border-radius:50%;
        border:2px solid $offWhite;

        #page_tracker_cover {
            width:20px;
            height:20px;
            background-color:$offWhite;
            border-radius:50%;
            position:absolute;
            top:5px;
            left:5px;
        }
    }

</style>