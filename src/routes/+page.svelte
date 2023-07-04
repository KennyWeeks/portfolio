<script lang="ts">

    import "../styles/fonts.css"
    import { base } from '$app/paths';
    import Menu from "$lib/menu.svelte";

</script>

<Menu/>

<div id="landing">

    <div id="intro">

        <h3 id="intro_text">Hi,<br> my name is Kenny Weeks. <br> Welcome to my ... </h3>

        <img src="{base}/images/test.svg" alt="portfolio_text"/>

    </div>

</div>

<div id="about">

    <div id="picture_of_me"></div>

    <div id="content_area">

        <img src="{base}/images/pattern.svg" alt="pattern"/>

        <img src="{base}/images/pattern.svg" alt="pattern"/>

    </div>

</div>

<div id="projects">

    <div id="projects_floating_tab"></div>

</div>

<div id="contacts">

    <img src="{base}/images/contact_header.png" width=250px alt="contact_header"/>

    <p>I AM CURRENTLY NOT ACCEPTING ANY
        FREELANCE WORK, BUT FEEL FREE TO 
        MESSAGE ME AND VIEW OTHER PROJECTS</p>

    <ul>
        <li>LinkedIN</li>
        <li>Github</li>
        <li>Resume</li>
        <li>Email</li>
    </ul>

</div>

<style lang="scss">
    @import "../styles/theme.scss";

    #landing {
        width:100vw;
        height:100vh;
        background-color:$offWhite;
        overflow:hidden;
        @include flexCenter;

        #intro {
            width:100vw;
            overflow:hidden;

            h3 {
                font-family:"Goldoni";
                font-size:25px;
                margin-left:10px;
            }
        }
    }

    #about {
        width:100vw;
        background-color:$offWhite;
        padding:20px 0px;
        position:relative;

        #picture_of_me {
            width:40vw;
            height:40vw;
            box-shadow:inset 0 0 0 10px #000;
            border-radius:50%;
            margin-left:10px;
        }

        #content_area {
            width:200vw;
            height:500px;
            background-color:$offBlack;
            margin-top:20px;
            margin-left:-50vw;
            transform:rotate(-25deg);
            position:relative;
            
            img {
                max-height:130px;
                max-width:1300px;
                position:absolute;
            }

            :nth-child(2) {
                bottom:0px;
            }
        }
    }

    #projects {
        width:100vw;
        padding:10px 0px;

        #projects_floating_tab {
            width:90vw;
            height:300vh;/*This will be a dummy height, will size to content*/
            background-color:$offBlack;
            border-radius:30px;
            margin-top:calc(24vw + 10px);
            margin-left:5vw;
        }
    }

    #contacts {
        padding-left:5vw;
        overflow:hidden;
        width:100vw; 
        position:relative;

        p {
            margin-top:0px;
            font-family:"Arial Black";
            font-size:15px;
            width:70vw;
        }

        ul {
            text-decoration:none;
            list-style: none;
            padding:0px;
            display:block;
            float:right;
            margin-right:10vw;

            li {
                text-align:right;
                margin-bottom:2.5px;
                font-family:"Goldoni";
                font-weight:lighter;
                font-size:25px;
            }
        }
    }

</style>