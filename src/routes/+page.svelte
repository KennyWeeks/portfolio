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
    let h : number = 0;

</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight}/>

<svelte:body on:scroll={(e)=>{
    h = e["target"].scrollTop;
}}/>

<Menu/>

<Landing path={base} screenWidth={screenWidth} screenHeight={screenHeight}/>

<About path={base}/>

<Projects scroll={h} path={base}/>

<Contact path={base}/>

<style lang="scss">
    @import "../styles/theme.scss";

</style>