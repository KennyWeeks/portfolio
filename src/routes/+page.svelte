<script lang="ts">

    import "../styles/fonts.css"
    import { base } from '$app/paths';
    import Menu from "$lib/menu.svelte";
    import Clock from "$lib/clock.svelte";
    import Contact from "$lib/sections/contact.svelte";
    import Projects from "$lib/sections/projects.svelte";
    import About from "$lib/sections/about.svelte";
    import Landing from "$lib/sections/landing.svelte";
    let screenSize : number;

</script>

<svelte:window bind:innerWidth={screenSize}/>

<Menu/>

<Landing path={base} screenSize={screenSize}/>

<About path={base}/>

<Projects/>

<Contact path={base}/>

<style lang="scss">
    @import "../styles/theme.scss";

</style>