<script lang="ts">
    import { onMount } from "svelte";
    export let path : string = ""
    import skills from "../data/skills.json"

    onMount(()=>{

        let about_summary : any = document.getElementById("about-summary");
        let education : any = document.getElementById("education");
        education.style.height = about_summary.clientHeight + "px";
    });
</script>

<div id="about">

    <div id="about-content-area">

        <img src="{path}/images/about_ring.png" alt="about ring"/>

        <div id="about-summary">

            <div id="picture"></div>

            <p>I am a computer science
                graduate, currently attending
                the University of California,
                Irvine. I have a Bachelors of Science
                in Computer Science from UNLV and two
                minors in mathematics and physics. I’ve
                been programming since high school, and I
                enjoy working at the lowest level of a 
                computer, specifically O.S. and compilers.</p>

        </div>

        <div id="education">

            <div class="individual-edu">
                <p>
                    <span class="university">University of Nevada, Las Vegas</span><br>
                    <span class="gpa">GPA: 3.657</span><br>
                    <span class="major">Bachelors in Computer Science</span><br>
                    <span class="minor">Minors in Physics and Mathematics</span><br>
                </p>
            </div>
            <div class="individual-edu">
                <p>
                    <span class="university">University of California, Irvine</span><br>
                    <span class="gpa">GPA: 3.9</span><br>
                    <span class="major">Masters in Computer Science</span>
                </p>
            </div>

        </div>

        <div id="skills">

            <div id="compiled" class="skills-body">

                <div class="vert-divide"></div>

                <div class="individual-skill-contain">
                    <h3>compiled languages</h3>
                {#each skills["programming_languages"] as pl} 

                    <p class="individual-skill">{pl}</p>

                {/each}
                </div>

            </div>

            <div id="scripting" class="skills-body">

                <div class="vert-divide"></div>

                <div class="individual-skill-contain">
                    <h3>Scripting languages</h3>
                    {#each skills["scripting_languages"] as pl} 
    
                        <p class="individual-skill">{pl}</p>
    
                    {/each}
                </div>
            </div>

            <div id="tools" class="skills-body">
                <div class="individual-skill-contain">
                    <h3>Design tools</h3>
                    {#each skills["design_tools"] as pl} 
    
                        <p class="individual-skill">{pl}</p>
    
                    {/each}
                </div>
            </div>

        </div>
    </div>

</div>

<style lang="scss">

    @import "../../styles/theme.scss";

    @keyframes rotate {
        0% {
            transform:rotate(0deg);
        }
        100% {
            transform:rotate(360deg);
        }
    }

    #about {
        width:100vw;
        height:auto;
        padding:250px 0px 200px 0px;
        overflow:hidden;
        cursor:default;
        @include flexCenter;

        #about-content-area {
            width:1216px;
            display:flex;
            justify-content:space-between;
            position:relative;
            flex-flow:row wrap;

            img {
                position:absolute;
                width:500px;
                height:500px;
                top:-250px;
                left:calc((800px - 500px) / 2);
                animation: rotate 10s linear infinite;
            }

            #about-summary {
                position:relative;
                border-radius:$text-block-border-radius;
                @include randomTest((">1200px")) {
                    //So this will be the desktop styles
                    width:800px;
                    margin:auto;
                    background-color:$offBlack;
                    padding-top:170px;
                    padding-bottom:20px;
                }

                #picture {
                    width:320px;
                    height:320px;
                    position:absolute;
                    border-radius:50%;
                    background-color:$offWhite;
                    top:-170px;
                    left:50%;
                    transform:translate(-50%);
                    border:20px solid $offBlack;
                }

                p {
                    color:$offWhite;
                    font-family:$font-family;
                    width:90%;
                    margin-left:5%;
                    @include randomTest((">1200px")) {
                        font-size:25px;
                    }
                }
            }

            #education {
                margin:auto;
                height:100%;

                @include randomTest((">1200px")) {
                    width:400px;
                    display:block;
                }

                .individual-edu {
                    background-color:$offBlack;
                    border-radius:$text-block-border-radius;
                    color:$offWhite;
                    font-family:$font-family;
                    font-size:25px;
                    @include flexCenter;

                    @include randomTest((">1200px")) {
                        width:400px;
                        height:49%;

                        &:nth-of-type(2) {
                            margin-top:2%;
                        }
                    }

                    .university {
                        font-weight:bolder;
                    }

                    .gpa {
                        font-size:18px;
                    }

                    .major {
                        font-size:20px;
                        font-style:italic;
                    }

                    .minor {
                        font-size:18px;
                        font-style:italic;
                    }

                }
            }

            #skills {
                width:100%;
                padding:20px 0px;
                background-color:$offBlack;
                border-radius:$text-block-border-radius;
                margin-top:8px;
                font-family:$font-family;
                color:$offWhite;
                @include flexRow;

                .vert-divide {
                    height:80%;
                    width:2.5px;
                    background-color:$offWhite;
                    position:absolute;
                    top:10%;
                    right:0px;
                    
                }

                .skills-body {
                    width:33.33%;
                    height:400px;
                    position:relative;
                    @include flexCenter;

                    .individual-skill-contain {

                        h3 {
                            font-size:25px;
                            text-transform:capitalize;
                            margin-top:0px;

                            &::after {
                                height:2px;
                                width:50%;
                                content:"";
                                background-color:$offWhite;
                                display:block;
                            }
                        }
                        width:80%;
                        .individual-skill {
                            display:inline-block;
                            border-radius:50px;
                            box-shadow:inset 0 0 0 2px $offWhite;
                            @include randomTest((">1200px")) {
                                font-size:25px;
                                padding:10px 20px;
                                margin-right:15px;
                                margin-top:0px;
                                margin-bottom:10px;
                            }
                        }
                    }
                }
            }
        }
    }

</style>