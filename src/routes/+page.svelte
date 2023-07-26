<script lang="ts">

    import "../styles/fonts.css"
    import { base } from '$app/paths';
    import Menu from "$lib/menu.svelte";
    import Contact from "$lib/sections/contact.svelte";
    import Projects from "$lib/sections/projects.svelte";
    import About from "$lib/sections/about.svelte";
    import Landing from "$lib/sections/landing.svelte";
    import { onMount } from "svelte";
    let screenWidth : number;
    let screenHeight : number;
    let test : number;
    let h : number = 0;
    let y : number = 0;
    let calc : number = 0;
    let calc1 : number = 0;

    let b : HTMLElement;
    let bh : HTMLElement;
    let firstHalf : HTMLElement;
    let secondHalf : HTMLElement;

    onMount(()=>{
        let t : HTMLElement = document.querySelector("body") as HTMLElement;
        console.log(t.childNodes);
        b = t.childNodes[1] as HTMLElement;
    })


</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} bind:scrollY={y}/>

<svelte:body on:scroll={(e)=>{
    console.log(b.clientHeight);
    console.log(b.offsetTop)
    /*console.log(bh);
    console.log(b);
    let totalHeight = bh.clientHeight - b.clientHeight;
    calc = (b.scrollTop / totalHeight) * 360;
    console.log(calc);
    if(b.scrollTop >= (totalHeight / 2) - 20) {
        firstHalf.style.borderRight = "5px solid #1e1919";
    } else {
        calc1 = calc;
        firstHalf.style.borderRight = "5px solid transparent";
    }

    if(b.scrollTop >= (totalHeight / 2) - 20 && b.scrollTop < totalHeight - 20) {
        secondHalf.style.zIndex = "1000000000";
        secondHalf.style.borderRight = "5px solid transparent";
        
    } else if(b.scrollTop >= totalHeight - 20) {
        console.log("Is this ever happening")
        secondHalf.style.zIndex = "1000000000";
        secondHalf.style.borderRight = "5px solid #1e1919";
    } else {
        secondHalf.style.zIndex = "1000000";
        secondHalf.style.borderRight = "5px solid transparent";
    }*/
    
}}/>

<div id="page_tracker">

    <div id="half-cover"></div>

    <div bind:this={firstHalf} id="first-half" style="transform:rotate({calc1+45}deg);"></div>

    <div bind:this={secondHalf} id="second-half" style="transform:rotate({calc+45}deg);"></div>

</div>

<div style="width:auto; height:100%;">
    <Landing path={base} screenWidth={screenWidth} screenHeight={screenHeight}/>

    <About path={base}/>

    <Projects scroll={h} path={base}/>

    <Contact path={base} screenWidth={screenWidth}/>
</div>

<style lang="scss">
    @import "../styles/theme.scss";

    @mixin borderSpecs {
        border-radius:50%;
        border-left:5px solid $offBlack;
        border-bottom:5px solid $offBlack;
        border-top:5px solid transparent;
        border-right:5px solid transparent;
        transform:rotate(45deg);
    }

    #page_tracker {
        width:30px;
        height:30px;
        position:fixed;
        z-index:10000;
        bottom:20px;
        right:20px;
        border-radius:50%;
        overflow:hidden;
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
            margin-left:calc(5%);
            margin-top:calc(5%);
            @include borderSpecs; 
        }

        #second-half {
            position:absolute;
            width:calc(90% - 10px);
            height:calc(90% - 10px);
            top:5%;
            left:5%;
            z-index:1000000;
            @include borderSpecs;
        }
    }


</style>