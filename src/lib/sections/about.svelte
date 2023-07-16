<script lang="ts">
    import { onMount } from "svelte";
    export let path : string = ""
    import skills from "../data/skills.json"

    onMount(()=>{

        let about_summary : any = document.getElementById("about-summary");
        let education : any = document.getElementById("education");
        let aboutContentArea : any = document.getElementById("about-content-area");
        let about : any = document.getElementById("about");
        /*window.addEventListener("resize", ()=>{
            if(window.innerWidth <= 1250) {

                aboutContentArea.style.transform = "scale(" + (0.9 * window.innerWidth / 1200) + ")";
            }
        });*/
    });
</script>

<div id="about">

    <div id="about-content-area">

        <div id="about_image">
            <img src="{path}/images/about_ring.png" alt="about ring"/>
        </div>

        <div id="about-summary-and-edu">

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
        @include randomTest((">800px")) {
            @include flexCenter;
        }

        #about-content-area {
            @include flexRow;
            position:relative;
            flex-flow:row wrap;

            @include randomTest((">800px")) {
                width:1216px;
            }

            @include randomTest(("<800px")) {
                width:90vw;
                margin-left:5vw;
                box-shadow:inset 0 0 0 2px #00ff00;
            }

            #about_image {
                position:absolute;
                width:340px;
                height:340px;
                top:-170px;
                @include randomTest((">800px")) {
                    left:calc((800px - 340px) / 2);
                }
                @include randomTest(("<800px")) {
                    left:calc((90vw - 340px) / 2);
                }
                border-radius:50%;
                box-shadow:inset 0 0 0 2px #000;

                img {
                    width:500px;
                    animation: rotate 10s linear infinite;
                    margin-left:calc((340px - 500px) / 2);
                    margin-top:calc((350px - 500px) / 2);
                }
            }

            #about-summary-and-edu {
                width:100%;
                @include flexRow;
                flex-flow:row wrap;

                #about-summary {
                    position:relative;
                    background-color:$offBlack;
                    border-radius:$text-block-border-radius;
                    padding-top:170px;
                    padding-bottom:20px;
                    @include randomTest((">800px")) {
                        //So this will be the desktop styles
                        width:800px;
                        margin:auto;
                        
                        ;
                        margin-left:0px;
                    }

                    @include randomTest(("<800px")) {
                        width:100%;
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
                        @include randomTest((">800px")) {
                            font-size:25px;
                        }

                        @include randomTest(("<800px")) {
                            font-size:20px;
                        }
                    }
                }

                #education {
                    margin:auto;
                    height:100%;
                    margin-right:0px;


                    @include randomTest((">800px")) {
                        width:407px;
                        display:block;
                    }

                    @include randomTest(("<800px")) {
                        width:100%;
                        height:auto;
                        margin-top:7px;
                        @include flexRow;
                    }

                    .individual-edu {
                        background-color:$offBlack;
                        border-radius:$text-block-border-radius;
                        color:$offWhite;
                        font-family:$font-family;
                        
                        @include flexCenter;
                        overflow:hidden;
                        margin-top:0px;

                        @include randomTest((">800px")) {
                            width:400px;
                            height:49%;
                            font-size:25px;

                            &:nth-of-type(2) {
                                margin-top:2%;
                            }
                        }

                        @include randomTest(("<800px")) {
                            width:49.5%;
                            padding:20px 0px;
                            font-size:20px;

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
            }

            #skills {
                width:100%;
                padding:20px 0px;
                background-color:$offBlack;
                border-radius:$text-block-border-radius;
                margin-top:8px;
                font-family:$font-family;
                color:$offWhite;
                position:relative;
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
                        margin:auto;
                        margin-top:10%;
                        .individual-skill {
                            display:inline-block;
                            border-radius:50px;
                            box-shadow:inset 0 0 0 2px $offWhite;
                            @include randomTest((">800px")) {
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