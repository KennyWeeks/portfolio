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

    let firstPart : HTMLElement;
    let secondPart : HTMLElement;
    let thirdPart : HTMLElement;
    let fourthPart : HTMLElement;
    let returnToTop : HTMLElement;

    let mainBody : HTMLElement;

</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} bind:scrollY={y}/>

<svelte:body/>

<div id="page_tracker" role="button" tabindex="-4" on:click={()=>{
    document.querySelector("body").scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
    /*window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth",
});*/
}} on:keydown={()=>{}}>

    <div id="half-cover">

        <img bind:this={returnToTop} src="{base}/images/return_to_top.png" height=20 alt="return to top"/>

    </div>

    <div bind:this={firstPart} class="progress-bars" id="first-part"></div>

    <div bind:this={secondPart} class="progress-bars" id="second-part"></div>

    <div bind:this={thirdPart} class="progress-bars" id="third-part"></div>

    <div bind:this={fourthPart} class="progress-bars" id="fourth-part"></div>

</div>

<div bind:this={mainBody} style="width:auto; height:100%;">
    <Landing path={base} screenWidth={screenWidth} screenHeight={screenHeight} firstPart={firstPart} returnToTop={returnToTop}/>

    <About path={base} secondPart={secondPart}/>

    <Projects scroll={h} path={base} thirdPart={thirdPart}/>

    <Contact path={base} screenWidth={screenWidth} fourthPart={fourthPart}/>
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
        overflow:hidden;
        background-color:rgba(5, 68, 94, 0.4);
        transform:rotate(45deg);

        #half-cover {
            width:20px;
            height:20px;
            background-color:$offWhite;
            margin-top:5px;
            margin-left:5px;

            img {
                transform:rotate(-45deg);
                opacity:0.0;
            }
        }

        .progress-bars {
            position:absolute;
            width:30px;
            height:5px;
            background-color:$offBlack;
            opacity:0.0;
            transition:opacity 0.25s linear;
        }

        #first-part {
            top:0px;
            opacity:1.0;            
        }

        #second-part {
            transform:rotate(-90deg);
            top:13px;
            left:12.5px;
        }

        #third-part {
            bottom:0px;
        }

        #fourth-part {
            transform:rotate(-90deg);
            top:13px;
            left:-12.5px;
        }

    }


</style>