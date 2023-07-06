<script lang="ts">

    import "../styles/fonts.css"
    import { base } from '$app/paths';
    import Menu from "$lib/menu.svelte";
    import Contact from "$lib/sections/contact.svelte";
    import Projects from "$lib/sections/projects.svelte";
    import About from "$lib/sections/about.svelte";
    import Landing from "$lib/sections/landing.svelte";
    let screenSize : number;
    let h : number = 0;

</script>

<svelte:window bind:innerWidth={screenSize}/>

<svelte:body on:scroll={(e)=>{
    h = e["target"].scrollTop;
}}/>

<Menu/>

<Landing path={base} screenSize={screenSize}/>

<About path={base}/>

<Projects scroll={h}/>

<Contact path={base}/>

<style lang="scss">
    @import "../styles/theme.scss";

</style>