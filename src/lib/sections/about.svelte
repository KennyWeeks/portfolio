<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    export let path : string = ""
    import skills from "../data/skills.json";
    let about: HTMLElement;
    let about_summary : HTMLElement;

    onMount(()=>{


        //let about_summary : any = document.getElementById("about-summary");
        /*window.addEventListener("resize", ()=>{
            if(window.innerWidth <= 1250) {

                aboutContentArea.style.transform = "scale(" + (0.9 * window.innerWidth / 1200) + ")";
            }
        });*/
    });
</script>

<div id="about" bind:this={about}>

    <div id="about-content-area">

        <div id="about-summary-and-edu">

            <div id="about-summary" bind:this={about_summary}>

                <div id="picture"></div>

                <div id="description">
                    <h3>About</h3>
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

            </div>

            <div id="education">

                <div class="individual-edu">
                    <div class="in_ind_edu">
                        <p>
                            <span class="university">University of California, Irvine</span><br>
                            <span class="gpa">GPA: 3.922</span><br>
                            <span class="major">Masters in Computer Science</span>
                        </p>
                    </div>
                </div>

                <div class="individual-edu">
                    <div class="in_ind_edu">
                        <p>
                            <span class="university">University of Nevada, Las Vegas</span><br>
                            <span class="gpa">GPA: 3.657</span><br>
                            <span class="major">Bachelors in Computer Science</span><br>
                            <span class="minor">Minors in Physics and Mathematics</span><br>
                        </p>
                    </div>
                </div>
                

            </div>

        </div>

        <div id="skills">


            <div id="compiled" class="skills-body">

                <div class="vert-divide"></div>

                <div class="individual-skill-contain">
                    <h3>compiled languages</h3>
                {#each skills["programming_languages"] as pl} 

                    <div class="individual-skill-button">
                        <p class="individual-skill">{pl}</p>
                        <div class="bar">
                            <div class="inner-bar"></div>
                        </div>
                        <p class="proficiency">proficient</p>
                    </div>

                {/each}
                </div>

            </div>

            <div id="scripting" class="skills-body">

                <div class="vert-divide"></div>

                <div class="individual-skill-contain">
                    <h3>Scripting languages</h3>
                    {#each skills["scripting_languages"] as pl} 
    
                        <div class="individual-skill-button">
                            <p class="individual-skill">{pl}</p>
                            <div class="bar">
                                <div class="inner-bar"></div>
                            </div>
                            <p class="proficiency">proficient</p>
                        </div>
    
                    {/each}
                </div>
            </div>

            <div id="tools" class="skills-body">
                <div class="individual-skill-contain">
                    <h3>Design tools</h3>
                    {#each skills["design_tools"] as pl} 
    
                        <div class="individual-skill-button">
                            <p class="individual-skill">{pl}</p>
                            <div class="bar">
                                <div class="inner-bar"></div>
                            </div>
                            <p class="proficiency">proficient</p>
                        </div>
    
                    {/each}
                </div>
            </div>

        </div>
    </div>

</div>

<style lang="scss">

    @import "../../styles/theme.scss";

    #about {
        @include mainAreaAndHeader;

        #about-summary-and-edu {
            width:80vw;
            max-width:1200px; //This is just something I am setting right now, idk, if I will go through with it
            margin:auto;

            #about-summary {
                width:100%;
                @include flexRow;

                #picture {
                    width:20em;
                    height:20em;
                    @include cornerStyles;
                    background-color:$offBlack;
                }

                #description {
                    overflow:hidden;
                    width:calc(100% - 22em);
                    height:20em;
                    text-align:left;
                    @include flexCenter;

                    h3 {
                        width:100%;
                        font-size:1.75rem;
                        text-transform:uppercase;
                    }

                    p {
                        margin-top:0px;
                        font-size:1.25rem;
                    }
                }
                
            }

            #education {     
                width:100%; 
                @include flexRow;
                margin-top:10px;
                color:$offWhiteFull;

                :nth-child(1) {
                    @include flipCorners;        
                }

                :nth-child(2) {
                    @include cornerStyles;
                }

                .individual-edu {
                    width:calc(50% - 5px);
                    background-color:$offBlack;
                    padding:10px 0px;
                    transition:border-radius 0.25s linear;

                    .in_ind_edu {
                        width:100%;
                        height:100%;
                        @include flexCenter;

                        .university {
                            font-size:1.5rem;
                            text-decoration:underline;
                        }

                        .gpa {
                            font-size:1.25rem;
                        }

                        .major {
                            margin:5px 0px;
                        }

                        .minor {
                            font-style:italic;
                        }
                    }
                }
            }
        }

        #skills {
            width:80vw;
            max-width:1200px; //This is just something I am setting right now, idk, if I will go through with it
            margin:auto;
            margin-top:10px;

            .skills-body {
                width:100%;
                background-color:$offBlack;
                color:$offWhite;
                padding:20px 0px;
                overflow:hidden;
                @include cornerStyles;

                &:nth-child(2) {
                    margin:10px 0px;
                } 

                .individual-skill-contain {
                    width:100%;
                    height:100%;
                        h3 {
                        font-size:1.5em;
                        text-transform:uppercase;
                        text-decoration:underline;
                        margin-left:30px;
                        margin-top:0px;
                    }

                    .individual-skill-button {
                        width:calc(100% - 60px);
                        margin-left:20px;
                        @include flexRow;
                        overflow:hidden;

                        p {
                            padding:0px 10px;
                            font-size:1.25rem;
                        }

                        .bar {
                            width:80%;
                            height:10px;
                            border-radius:50px;
                            background-color:$offWhite;
                            margin-top:28px;
                            overflow:hidden;

                            .inner-bar {
                                width:80%;
                                height:5px;
                                margin-top:2.5px;
                                margin-left:2.5px;
                                background-color:$offBlack;
                                border-radius:50px;
                            }
                        }
                    }
                } 
            }
        }

    }

</style>