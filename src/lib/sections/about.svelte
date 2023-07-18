<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    export const path : string = ""
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

        <div id="about_image">
            <img src="{path}/images/about_ring.png" alt="about ring"/>
        </div>

        <div id="about-summary-and-edu">

            <div id="about-summary" bind:this={about_summary}>

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
                    <div class="in_ind_edu">

                        <img src="{path}/images/education.png" width=200 alt="education-png-label"/>
                        <p>
                            <span class="university">University of Nevada, Las Vegas</span><br>
                            <span class="gpa">GPA: 3.657</span><br>
                            <span class="major">Bachelors in Computer Science</span><br>
                            <span class="minor">Minors in Physics and Mathematics</span><br>
                        </p>
                    </div>
                </div>
                <div class="individual-edu">
                    <div class="in_ind_edu">
                        <p>
                            <span class="university">University of California, Irvine</span><br>
                            <span class="gpa">GPA: 3.9</span><br>
                            <span class="major">Masters in Computer Science</span>
                        </p>
                    </div>
                </div>

            </div>

        </div>

        <div id="skills">

            <img src="{path}/images/skills.png" height=250 alt="skill-png-label"/>

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
        overflow:hidden;
        cursor:default;
        @include randomTest((">800px")) {
            @include flexCenter;
            padding:250px 0px 200px 0px;
        }

        @include randomTest(("<800px")) {
            padding:250px 0px 10vw 0px;
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
            }

            #about_image {
                position:absolute;
                width:340px;
                height:340px;
                top:-170px;
                @include randomTest((">800px")) {
                    left:calc((800px - 340px) / 2);
                    width:340px;
                    height:340px;
                    top:-170px;
                }
                @include randomTest(("<800px", ">500px")) {
                    left:calc((90vw - 340px) / 2);
                    width:340px;
                    height:340px;
                    top:-170px;
                }
                @include randomTest(("<500px")) {
                    width:50vw;
                    height:50vw;
                    top:-25vw;
                    left:calc((90vw - 50vw) / 2);
                }
                border-radius:50%;
                box-shadow:inset 0 0 0 2px #000;

                img {
                    animation: rotate 10s linear infinite;
                    @include randomTest((">500px")) {
                        width:500px;   
                        margin-left:calc((340px - 500px) / 2);
                        margin-top:calc((350px - 500px) / 2);
                    }

                    @include randomTest(("<500px")) {
                        width:75vw;
                        margin-left:calc((50vw - 75vw) / 2);
                        margin-top:calc((50vw - 75vw) / 2);
                    }
                    
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

                    @include randomTest((">500px")) {
                        padding-top:170px;
                    }

                    @include randomTest(("<500px")) {
                        padding-top:25vw;
                    }

                    #picture {
                        position:absolute;
                        border-radius:50%;
                        background-color:$offWhite;
                        
                        left:50%;
                        transform:translate(-50%);
                        
                        @include randomTest((">500px")) {
                            width:320px;
                            height:320px;
                            border:20px solid $offBlack;
                            top:-170px;
                        }

                        @include randomTest(("<500px")) {
                            width:50vw;
                            height:50vw;
                            box-shadow:inset 0 0 0 20px $offBlack;
                            top:-25vw;
                        }
                    }

                    p {
                        color:$offWhite;
                        font-family:$font-family;
                        width:80%;
                        margin-left:10%;
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
                    height:calc(100% - 40px);
                    margin-right:0px;
                    margin-top:35px;


                    @include randomTest((">800px")) {
                        width:407px;
                        display:block;
                    }

                    @include randomTest(("<800px", ">600px")) {
                        width:100%;
                        height:auto;
                        margin-top:45px;
                        @include flexRow;
                    }

                    @include randomTest(("<600px")) {
                        width:100%;
                        height:auto;
                        margin-top:45px;
                    } 

                    .individual-edu {
                        background-color:$offBlack;
                        border-radius:$text-block-border-radius;
                        color:$offWhite;
                        font-family:$font-family;
                        
                        @include flexCenter;
                        margin-right:0px;

                        @include randomTest((">800px")) {
                            width:405px;
                            height:49%;
                            font-size:25px;
                            margin-right:0px;

                            &:nth-of-type(2) {
                                margin-top:2%;
                            }
                        }

                        @include randomTest(("<800px", ">600px")) {
                            width:49.5%;
                            padding:20px 0px;
                            font-size:20px;
                        }
                        @include randomTest(("<600px")) {
                            width:100%;
                            padding:20px 0px;
                            font-size:20px;

                            &:nth-of-type(2) {
                                margin-top:7px;
                            }
                        }

                        .in_ind_edu {
                            position:relative;
                            width:80%;

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

                            @include randomTest(("<600px")) {
                                margin:auto;
                                @include flexCenter;
                            }

                            img {
                                position:absolute;
                                left:-10%;

                                @include randomTest(("<600px")) {
                                    top:-55px;
                                }

                                @include randomTest((">600px", "<800px")) {
                                    top:-55px;
                                }

                                @include randomTest((">800px")) {
                                    top:-45px;
                                }
                            }
                        }

                    }
                }
            }

            #skills {
                @include randomTest((">600px")) {
                    width:calc(100% - 40px);
                    margin-left:40px;
                }

                @include randomTest(("<600px")) {
                    width:100%;
                }
                
                
                padding:20px 0px;
                background-color:$offBlack;
                border-radius:$text-block-border-radius;
                margin-top:8px;
                font-family:$font-family;
                color:$offWhite;
                position:relative;
                @include randomTest((">800px")) {
                    @include flexRow;
                }

                img {
                    position:absolute;
                    top:50%;
                    transform:translateY(-50%);
                    left:-45px;

                    @include randomTest(("<600px")) {
                        display:none;
                    }
                }

                .vert-divide {
                    background-color:$offWhite;
                    position:absolute;
                    @include randomTest((">800px")) {
                        height:80%;
                        width:2.5px;
                        top:10%;
                        right:0px;
                    }

                    @include randomTest(("<800px")) {
                        display:none;
                    }
                    
                }

                .skills-body {
                    position:relative;
                    @include randomTest((">800px")) {
                        width:33.33%;
                        height:auto;
                    }
                    @include randomTest(("<800px")) {
                        width:100%;
                        padding:20px 0px;
                    }
                    

                    .individual-skill-contain {
                        width:80%;
                        margin:auto;

                        h3 {
                            @include randomTest((">800px")) {
                                font-size:25px; 
               
                            }

                            @include randomTest(("<800px")) {
                                font-size:20px;
                                margin-top:0px;
                            }

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
                        
                        .individual-skill {
                            display:inline-block;
                            border-radius:50px;
                            box-shadow:inset 0 0 0 2px $offWhite;
                            line-height:0px;
                            @include randomTest((">800px")) {
                                font-size:25px;
                                padding:20px;
                                margin-right:15px;
                                margin-top:0px;
                                margin-bottom:10px;
                            }

                            @include randomTest(("<800px")) {
                                font-size:20px;
                                padding:20px;
                                margin-top:0px;
                                margin-bottom:10px;
                                margin-right:15px;
                            }
                        }
                    }
                }
            }
        }
    }

</style>