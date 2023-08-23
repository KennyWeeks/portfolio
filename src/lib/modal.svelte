<script lang="ts">

    export let openModal : boolean = false;
    export let path : string = "";
    import skills from "./data/skills.json";
    export let skillTool : string = "C"; //This will be the key that will determine what is placed where
    let languagePos : number = skills["all_of_it"].indexOf(skillTool);

    $: {
        languagePos = skills["all_of_it"].indexOf(skillTool);
    }

</script>

<div class="modal-background">

    <div class="modal-content-area">

        <div class="close-area" role="button" tabindex="-2" on:click={()=>{
            openModal = false;
        }} on:keydown={()=>{}}>
        <img src="{path}/images/close.png" height=15 alt="close"/>    
    </div>
        
        <div class="move-next" role="button" tabindex="-3" on:click={()=>{
            languagePos++;
            if(languagePos > 12) {
                languagePos = 0; //The last index;
            }

            skillTool = skills["all_of_it"][languagePos];
        }} on:keydown={()=>{}}>
            <img src="{path}/images/move.png" style="margin-left:2px;" height=12 alt="close"/>
        </div>

        <div class="move-previous" role="button" tabindex="-4" on:click={()=>{
            languagePos--;
            if(languagePos < 0) {
                languagePos = 12; //The last index;
            }

            skillTool = skills["all_of_it"][languagePos];
        }} on:keydown={()=>{}}>
            <img src="{path}/images/move.png" style="transform:rotate(-180deg); margin-right:2px;" height=12 alt="close"/>
        </div>
        
        <div class="content">

            <h3 class="lang">{skillTool}</h3>

            <p class="desc">{skills["desc"][skillTool]}</p>

            <h4 class="courses-projs">Courses that used this language</h4>

            <div class="descriptors">

                {#each skills["used_it"][skillTool] as skt}

                    <div>{skt}</div>

                {/each}

            </div>

            <h4 class="courses-projs">Projects that used this language</h4>

            <div class="descriptors">

                {#each skills["projects"][skillTool] as prjt}

                    <div>{prjt}</div>

                {/each}

            </div>

        </div>

    </div>

</div>

<style lang="scss">
    @import "../styles/theme.scss";
    .modal-background {
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,0.6);
        position:absolute;
        z-index:1000000;
        top:0px;
        left:0px;
        @include flexCenter;

        .modal-content-area {
            width:80vw;
            max-height:80vh;
            height:auto;
            background-color:$offWhite;
            padding:5px 0px;
            border-radius:20px;
            color:$offBlack;
            position:relative;

            .close-area,
            .move-next,
            .move-previous {
                width:30px;
                height:30px;
                border-radius:50%;
                background-color:$offWhite;
                position:absolute;
                top:-15px;
                right:5%;
                overflow:hidden;
                @include flexCenter;
            }

            .move-next {
                right:calc(5% + 35px);
            }

            .move-previous {
                right:calc(5% + 70px);
            }

            .content {
                width:100%;
                height:100%;
                overflow-x:hidden;
                overflow-y:scroll;
            }

            .lang {
                width:90%;
                margin:10px auto;
                font-size:1.75rem;
                text-decoration:underline;
            }

            .desc {
                width:90%;
                margin:0px auto 10px auto;
                font-size:1.15rem;
            }

            .courses-projs {
                width:90%;
                font-size:1.35rem;
                margin:0px auto 10px auto;
                text-decoration:underline;
            }

            .descriptors {
                width:90%;
                margin:0px auto 10px auto;

                div {
                    font-size:1.15rem;
                    padding:15px;
                    text-transform:uppercase;
                    box-shadow:inset 0 0 0 2px $offBlack;
                    display:inline-block;
                    margin-right:2.5px;
                    margin-bottom:2.5px;
                    border-radius:20px;
                }
            }
        }
    }
</style>