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
    let y : number = 0;
    let calc : number = 0;
    let calc1 : number = 0;


</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} bind:scrollY={y}/>

<svelte:body on:scroll={(e)=>{
    let b = document.querySelector("body");
    let bh = document.querySelector("#body");
    let totalHeight = bh?.clientHeight - b?.clientHeight;
    calc = (b?.scrollTop / totalHeight) * 360;
    if(b?.scrollTop >= (totalHeight / 2) - 20) {
        document.querySelector("#first-half").style.borderRight = "5px solid #1e1919";
    } else {
        calc1 = calc;
        document.querySelector("#first-half").style.borderRight = "5px solid transparent";
    }

    if(b?.scrollTop >= (totalHeight / 2) - 20 && b?.scrollTop < totalHeight - 20) {
        document.querySelector("#second-half").style.zIndex = 1000000000;
        document.querySelector("#second-half").style.borderRight = "5px solid transparent";
        
    } else if(b?.scrollTop >= totalHeight - 20) {
        console.log("Is this ever happening")
        document.querySelector("#second-half").style.zIndex = 1000000000;
        document.querySelector("#second-half").style.borderRight = "5px solid #1e1919";
    } else {
        document.querySelector("#second-half").style.zIndex = 1000000;
        document.querySelector("#second-half").style.borderRight = "5px solid transparent";
    }
    //console.log(b?.clientHeight);
    //console.log(b?.scrollTop);
}}/>

<div id="page_tracker">

    <div id="half-cover"></div>

    <div id="first-half" style="transform:rotate({calc1+45}deg);"></div>

    <div id="second-half" style="transform:rotate({calc+45}deg);"></div>

</div>

<div id="body">
    <Landing path={base} screenWidth={screenWidth} screenHeight={screenHeight}/>

    <About path={base}/>

    <Projects scroll={h} path={base}/>

    <Contact path={base} screenWidth={screenWidth}/>
</div>

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
        overflow:hidden;
        border:2px solid $offWhite;
        background-color:$offWhite;

        #half-cover {
            width:15px;
            height:30px;
            position:absolute;
            background-color:$offWhite;
            z-index:1000000000;
            border-right:1px solid $offWhite;
        }

        #first-half {
            width:calc(90% - 10px);
            height:calc(90% - 10px);
            border-radius:50%;
            margin-left:calc(5%);
            margin-top:calc(5%);
            border-left:5px solid $offBlack;
            border-bottom:5px solid $offBlack;
            border-top:5px solid transparent;
            border-right:5px solid transparent;
            transform:rotate(45deg);
        }

        #second-half {
            position:absolute;
            width:calc(90% - 10px);
            height:calc(90% - 10px);
            top:5%;
            left:5%;
            border-radius:50%;
            border-left:5px solid $offBlack;
            border-bottom:5px solid $offBlack;
            border-top:5px solid transparent;
            border-right:5px solid transparent;
            z-index:1000000;
            transform:rotate(45deg);
        }
    }

    #body {
        width:100vw;
        height:auto;
    }

</style>