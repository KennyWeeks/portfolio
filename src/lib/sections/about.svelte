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

        <h3>Skills &amp; Tools : <span>Click each to learn more about my proficiency and projects</span></h3>

        <div id="skills">

            

            {#each skills["all_of_it"] as pl} 

                <div class="individual-skill-button">
                    <p class="individual-skill">{pl}</p>
                </div>

            {/each}


            <!--<div id="compiled" class="skills-body">

                <div class="individual-skill-contain">
                {#each skills["programming_languages"] as pl} 

                    <div class="individual-skill-button">
                        <p class="individual-skill">{pl}</p>
                        <div class="bar">
                            <div class="inner-bar"></div>
                        </div>
                    </div>

                {/each}
                </div>

            </div>

            <div id="scripting" class="skills-body">


                <div class="individual-skill-contain">
                    {#each skills["scripting_languages"] as pl} 
    
                        <div class="individual-skill-button">
                            <p class="individual-skill">{pl}</p>
                            <div class="bar">
                                <div class="inner-bar"></div>
                            </div>
                        </div>
    
                    {/each}
                </div>
            </div>

            <div id="tools" class="skills-body">
                <div class="individual-skill-contain">
                    {#each skills["design_tools"] as pl} 
    
                        <div class="individual-skill-button">
                            <p class="individual-skill">{pl}</p>
                            <div class="bar">
                                <div class="inner-bar"></div>
                            </div>
                        </div>
    
                    {/each}
                </div>
            </div>-->

        </div>
    </div>

</div>

<style lang="scss">

    @import "../../styles/theme.scss";

    $educationBreak: 1000px;

    $summaryBreak: 860px;

    $pictureBreak: 400px;

    #about {
        @include mainAreaAndHeader;

        #about-content-area > h3 {
            font-size:1.75rem;
            margin:20px auto;
            width:80vw;
            max-width:1200px;
            text-transform:uppercase;

            span {
                text-transform:none;
                font-weight:normal;
                font-size:1.25rem;
                text-decoration:underline;
            }
        }

        #about-summary-and-edu {
            width:80vw;
            max-width:1200px; //This is just something I am setting right now, idk, if I will go through with it
            margin:auto;

            #about-summary {
                width:100%;
                @include flexRow;
                @include mediaDefinition(("<#{$summaryBreak}")) {
                    flex-wrap:wrap;
                }

                #picture {
                    width:20em;
                    height:20em;
                    @include mediaDefinition(("<#{$summaryBreak}")) {
                        margin-left:calc((80vw - 20em) / 2);
                        margin-bottom:20px;
                    }

                    @include mediaDefinition(("<#{$pictureBreak}")) {
                        width:80vw;
                        height:80vw;
                        margin-left:auto;
                    }

                    @include cornerStyles;
                    background-color:$offBlack;
                }

                #description {
                    overflow:hidden;
                    width:calc(100% - 22em);
                    height:20em;

                    @include mediaDefinition(("<#{$summaryBreak}")) {
                        width:100%;
                        height:auto;
                    }
                    
                    text-align:left;
                    @include flexCenter;

                    h3 {
                        width:100%;
                        font-size:1.75rem;
                        text-transform:uppercase;

                        @include mediaDefinition(("<#{$summaryBreak}")) {
                            text-align:center;
                        }
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

                @include mediaDefinition(("<#{$educationBreak}")) {
                    flex-wrap:wrap;
                }

                :nth-child(1) {
                    @include flipCorners;  
                    @include mediaDefinition(("<#{$educationBreak}")) {
                        margin-bottom:10px;
                    }
                }

                :nth-child(2) {
                    @include cornerStyles;
                }

                .individual-edu {
                    width:calc(50% - 5px);
                    background-color:$offBlack;
                    padding:10px 0px;
                    transition:border-radius 0.25s linear;

                    @include mediaDefinition(("<#{$educationBreak}")) {
                        width:80vw;
                    }

                    .in_ind_edu {
                        width:90%;
                        height:100%;
                        margin:auto;
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
            color:$offWhite;
            @include flexRow;
            justify-content:center;
            flex-wrap:wrap;
            align-items:center;

            .individual-skill-button {
                overflow:hidden;

                p {
                    background-color:$offBlack;
                    box-shadow:inset 0 0 0 2px $offBlack;
                    display:inline-block;
                    font-size:1.15rem;
                    padding:20px;
                    border-radius:30px;
                    margin:2.5px;
                    cursor:default;
                    transition:background-color 0.25s linear;

                    &:hover {
                        background-color:$offWhite;
                        color:$offBlack;
                    }
                }
            }
        }

    }

</style>