<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    export let path : string = ""
    import skills from "../data/skills.json";
    import Modal from "../modal.svelte";
    let about: HTMLElement;
    let about_summary : HTMLElement;
    let divideByColor : boolean = false;
    export let secondPart : HTMLElement;
    

    let openModal : boolean;

    let options : object = {
        root: null,
        margin: "0px",
        threshold: 0.3
    }

    onMount(()=>{

        //I'll have to do this for all of them.
        let observer = new IntersectionObserver((entries, observer)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting) {
                    secondPart.style.opacity = "1.0";
                } else {
                    secondPart.style.opacity = "0.0";
                }
            });
        }, options);

        //observer.observe(document.querySelector(".body_parts"));
        let bodyParts = document.querySelectorAll("#about");
        bodyParts.forEach(e=>{
            observer.observe(e);
        });

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

        <h3>Skills &amp; Tools : <span>Click each to learn more about my proficiency and projects. Flip the swich to see the skills & tools divided by category.</span></h3>

        <div class="flip-cover">
            <div class="flip-icon" role="button" tabindex="-3" on:click={(e)=>{
                divideByColor = !divideByColor;
                if(divideByColor) {
                    e.target.style.marginLeft = "2.25em";
                } else {
                    e.target.style.marginLeft = "0.25em";
                }
            }} on:keydown={()=>{}}></div>
        </div>

        <div id="skills">

            {#each skills["all_of_it"] as pl} 

                <div role="button" tabindex="-1" class="individual-skill-button" on:click={()=>{
                    openModal = true;
                }} on:keydown={()=>{}}>
                    <p class="individual-skill"
                    data-type={!divideByColor ? "" : skills["programming_languages"].includes(pl) ? "compiled" : skills["scripting_languages"].includes(pl) ? "scripting" : "tool"}
                    >{pl}</p>
                </div>

            {/each}

        </div>
    </div>

</div>

{#if openModal}
    <Modal path={path} bind:openModal={openModal}/>
{/if}

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

        .flip-cover {
            width:4em;
            height:2em;
            box-shadow:inset 0 0 0 2px $offBlack;
            margin-left:10vw;
            margin-top:0px;
            border-radius:20px;
            overflow:hidden;
            background-color:$offBlack;

            .flip-icon {
                margin-top:0.25em;
                margin-left:0.25em;
                height:1.5em;
                width:1.5em;
                border-radius:50%;
                box-shadow:inset 0 0 0 2px $offBlack;
                background-color:$offWhite;
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

                [data-type="compiled"] {
                    background-color:$compiledLanguages;
                    box-shadow:inset 0 0 0 2px $compiledLanguages;

                    &:hover {
                        background-color:$offWhite;
                        color:$compiledLanguages;
                    }
                }

                [data-type="scripting"] {
                    background-color:$scriptingLanguages;
                    box-shadow:inset 0 0 0 2px $scriptingLanguages;

                    &:hover {
                        background-color:$offWhite;
                        color:$scriptingLanguages;
                    }
                }

                [data-type="tool"] {
                    background-color:$designTools;
                    box-shadow:inset 0 0 0 2px $designTools;

                    &:hover {
                        background-color:$offWhite;
                        color:$designTools;
                    }
                }

                p {
                    -webkit-touch-callout: none; /* iOS Safari */
                    -webkit-user-select: none; /* Safari */
                    -khtml-user-select: none; /* Konqueror HTML */
                    -moz-user-select: none; /* Old versions of Firefox */
                    -ms-user-select: none; /* Internet Explorer/Edge */
                    user-select: none;
                    background-color:$offBlack;
                    box-shadow:inset 0 0 0 2px $offBlack;
                    display:inline-block;
                    font-size:1.15rem;
                    padding:20px;
                    border-radius:30px;
                    margin:2.5px;
                    cursor:default;
                    transition:background-color 0.25s linear;

                }
            }
        }

    }

</style>