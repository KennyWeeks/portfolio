<script lang="ts">
    import { onMount } from "svelte";
    export let path : string = ""
    import skills from "../data/skills.json"

    onMount(()=>{
        let about : any = document.getElementById("about");
        if(window.innerWidth > 1200) {
            let marginTop : number = (about.clientHeight - 340) / 2;
            let pom: any = document.getElementById("picture_of_me");
            pom.style.marginTop = marginTop + "px";
        }
        window.addEventListener("resize", ()=>{
            let about : any = document.getElementById("about");
            if(window.innerWidth > 1200) {
                let marginTop : number = (about.clientHeight - 340) / 2;
                let pom: any = document.getElementById("picture_of_me");
                pom.style.marginTop = marginTop + "px";
            } else {
                let pom: any = document.getElementById("picture_of_me");
                pom.style.marginTop = "0px";
            }
        });
    });
</script>

<div id="about">

    <div id="picture_of_me">

        <img src="{path}/images/about_ring.png" alt="about ring"/>

    </div>

    <div id="surrounding_area">
        <div id="content_area">

            <div class="content_container">

                <div class="content_section">
                    <p>
                        I am a computer science
                        graduate, currently attending
                        the University of California,
                        Irvine. I have a Bachelors of Science
                        in Computer Science from UNLV and two
                        minors in mathematics and physics. I’ve
                        been programming since high school, and I
                        enjoy working at the lowest level of a 
                        computer, specifically O.S. and compilers.
                    </p>
                </div>

                <div id="education">

                    <div id="in-edu">

                        <h3>Education</h3>

                        <p>
                            <span class="university">University of Nevada, Las Vegas</span>
                            GPA: 3.657<br>
                            Bachelors in Computer Science<br>
                            Minors in Physics and Mathematics<br>
                        </p>
                        <p>
                            <span class="university">University of California, Irvine</span>
                            GPA: 3.9<br>
                            Masters in Computer Science
                        </p>

                    </div>
            
                </div>

                <div id="skills">

                    <h3>Skills</h3>

                    <h4>Compiled Languages</h4>

                    <div class="skills_blocks">
                        {#each skills["programming_languages"] as cl}
                            <p> {cl} </p>
                        {/each}
                    </div>

                    <h4>Scripting Languages</h4>

                    <div class="skills_blocks">
                        {#each skills["scripting_languages"] as sl}
                            <p> {sl} </p>
                        {/each}

                    </div>

                    <h4>Design Tools</h4>

                    <div class="skills_blocks">
                        {#each skills["design_tools"] as dt}
                            <p> {dt} </p>
                        {/each}
                    </div>


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

    //So I know the max width should be 1080px, and the it will end around 600, before it switches to the mobile styles
    #about {
        width:100vw;
        background-color:$offWhite;
        position:relative;

        @include phoneVert {
            //This will pretty much just be the mobile size of the content;
            padding:50px 0px 10px 0px;
        }

        @include randomTest((">#{$tabletMin}", "<1200px")) {
            width:100vw;
            padding:80px 0px 10px 0px;
        }

        @include randomTest((">1200px", "<#{$laptopMax}")) {
            //So this is the full screen size, and it will maximize the screen size.
            height:auto;
            max-width:1600px;
            margin:auto;
            padding:20px 0px;
            @include flexRow;
        }

        @include desktop {
            height:auto;
            width:1600px;
            margin:auto;
            padding:20px 0px;
            @include flexRow;
        }

        #picture_of_me {
            box-shadow:inset 0 0 0 20px $offBlack;
            border-radius:50%;
            @include flexCenter;

            @include phoneVert {
                width:40vw;
                height:40vw;   
                box-shadow:inset 0 0 0 15px $offBlack;
                margin-left:30vw;
                margin-bottom:30px;
                margin-top:30px;
            }

            @include randomTest((">#{$tabletMin}", "<1200px")) {
                margin:auto;
                margin-bottom:0px;
                width:30vw;
                height:30vw;  
                box-shadow:inset 0 0 0 15px $offBlack; 
            }

            @include randomTest((">1200px", "<#{$laptopMax}")) {
                width:340px;
                height:340px;
                margin-left:calc(((100vw - 700px) - 340px) / 2);
            }

            @include desktop {
                width:340px;
                height:340px;
                margin-left:calc(((1600px - 800px) - 340px) / 2);
            }

            //This is the spinning part of the image
            img {

                @include desktop {
                    width:470px;
                    animation: rotate 10s linear infinite; 
                }
                @include randomTest((">1200px", "<#{$laptopMax}")) {
                    width:470px;
                    animation: rotate 10s linear infinite;
                }

                @include randomTest((">#{$tabletMin}", "<1200px")) {
                    width:42vw;
                    animation: rotate 10s linear infinite;
                }

                @include phoneVert {
                    width:58vw;
                    animation: rotate 10s linear infinite;
                }
            }
        }

        //This is the black box that the content is stored in.
        #surrounding_area {
            overflow-x:hidden;
            overflow-y:visible;
            text-align:right;

            @include phoneVert {
                width:100vw;
                height:auto;
            }

            @include randomTest((">#{$tabletMin}", "<1200px")) {
                width:100vw;
                height:auto;
                padding:20px 0px;
                margin-top:80px;
            }

            @include randomTest((">1200px", "<#{$laptopMax}")) {
                width:700px;
                bottom:0px;
                right:0px;
                height:auto;
                @include flexCenter;
            }

            @include desktop {
                width:800px;
                bottom:0px;
                right:0px;
                height:auto;
                @include flexCenter;
            }


            #content_area {
                text-align:center;
                position:relative;
                color:$offWhite;

                @include phoneVert {
                    width:90vw;
                    margin-left:5vw;
                }

                @include randomTest((">#{$tabletMin}", "<1200px")) {
                    width:90vw;
                    margin-left:5vw;
                    border-radius:20px;
                }
                @include randomTest((">1200px", "<#{$laptopMax}")) {
                    width:calc(700px - 5vw);
                    height:auto;
                    border-radius:20px;
                    margin-right:5vw;
                    @include flexCenter;
                }

                @include desktop {
                    width:100%;
                    height:auto;
                    @include flexCenter;
                }

                //This is the pattern at the top
                

                .content_container {
                    display:flex;
                    flex-direction:row;
                    flex-wrap:wrap;
                    
                    @include phoneVert {
                        height:100%;
                        padding:20px 0px;
                    }
                    //So this is when the screen shrinks
                    @include randomTest((">#{$tabletMin}", "<1200px")) {
                        border-radius:20px;
                    }

                    @include randomTest((">1200px", "<#{$laptopMax}")) {
                        width:100%;
                        height:auto;
                    }

                    @include desktop {
                        width:100%;
                        height:auto;
                    }


                    .content_section {
                        width:100%;
                        border-radius:20px;
                        background-color:$offBlack;
                        @include flexCenter;


                        p {
                            margin:auto;
                            display:inline-block;
                            text-align:center;
                            @include flexCenter;
                            font-family:"Gill Sans";

                            @include phoneVert {
                                width:80%;
                                margin:auto;
                                text-align:left;
                                font-size:18px;
                                padding:50px 0px;
                            }

                            @include randomTest((">#{$tabletMin}", "<1200px")) {
                                text-align:left;
                                font-size: 19px;
                                padding:50px 0px;
                                width:80%;
                            }

                            @include randomTest((">1200px", "<#{$laptopMax}")) {
                                width:500px;
                                font-size:19px;
                                text-align:left;
                                padding:50px 0px;
                            }

                            @include desktop {
                                width:500px;
                                font-size:20px;
                                text-align:left;
                                padding:50px 0px;
                            }
                        }
                    }

                    #education {
                        overflow:hidden;
                        background-color:$offBlack;
                        border-radius:20px;
                        margin-top:10px;
                        text-align:left;
                        @include flexCenter;

                        @include phoneVert {
                            width:100%;
                            padding:20px 0px;
                        }

                        @include randomTest((">#{$tabletMin}", "<1200px")) {
                            align-self:center;
                            width:calc(50% - 5px);
                            height:auto;
                            padding:50px 0px;
                        }

                        @include randomTest((">1200px", "<#{$laptopMax}")) {
                            align-self:center;
                            width:calc(50% - 5px);
                            height:auto;
                            padding:50px 0px;
                        }

                        @include desktop {
                            align-self:center;
                            width:calc(50% - 5px);
                            height:auto;
                            padding:50px 0px;
                        }
                        
                        #in-edu {

                            text-align:center;
                            overflow:hidden;

                            @include desktop {
                                font-size:20px;
                            }

                            h3 {
                                font-weight:bolder;
                                text-transform:uppercase;
                                margin-bottom:0px;
                                margin-top:0px;
                            }

                            p {
                                //width:calc(100% - 10px);
                                width:80%;
                                font-family:"Arial";
                                font-size:15px;
                                text-align:left;
                                display:inline-block;

                                .university {
                                    font-weight:bolder;
                                    font-size:18px;

                                    &:after {
                                        height:2px;
                                        width:50%;
                                        background-color:$offWhite;
                                        display:block;
                                        content:"";
                                        margin-bottom:0px;
                                    }
                                }

                            }

                            & > p:nth-of-type(2) {
                                margin-top:10px;
                            }
                        }
                    }

                    #skills {
                        @include randomTest((">#{$tabletMin}", "<1200px")) {
                            width:calc(50% - 5px);
                            //height:calc(50% - 10px);
                            padding:50px 0px;
                            margin-left:10px;
                        }

                        @include randomTest((">1200px", "<#{$laptopMax}"))  {
                            width:calc(50% - 5px);
                            //height:calc(50% - 10px);
                            padding:50px 0px;
                            margin-left:10px;
                        }

                        @include desktop {
                            width:calc(50% - 5px);
                            //height:calc(50% - 10px);
                            padding:50px 0px;
                            margin-left:10px;
                        }

                        @include phoneVert {
                            width:100%;
                            padding:20px 0px;
                        }
                        
                        overflow:hidden;
                        background-color:$offBlack;
                        border-radius:20px;
                        margin-top:10px;
                        text-align:center;
                        align-self:center;

                        h3 {
                            font-weight:bolder;
                            text-transform:uppercase;
                            margin-bottom:0px;
                            margin-top:0px;
                        }

                        .skills_blocks {
                            width:80%;
                            @include flexRow;
                            margin-left:10%;
                            flex-wrap:wrap;
                            justify-content:space-between;

                            p {
                                line-height:0px;
                                padding:20px;
                                box-shadow:inset 0 0 0 2px $offWhite;
                                align-items:left;
                                margin-bottom:2px;
                                margin-top:2px;
                                border-radius:20px;
                                cursor:default;

                                &:hover {
                                    box-shadow:inset 0 0 0 5px $offWhite;
                                }
                            }
                        }
                    }

                }

            }
        }
    }

</style>