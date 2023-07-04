<script lang="ts"></script>

<div id="menu">

    <div class="menu_bar"></div>
    <div class="menu_bar"></div>

</div>

<style lang="scss">
    @import "../styles/theme.scss";

    #menu {
        position:absolute;
        top:15px;
        right:15px;
        z-index:10000;
        width:20px;
        height:20px;
        padding:10px;
        border-radius:50%;
        @include flexCol;
        background-color:$offWhite;

        .menu_bar {
            width:100%;
            height:7px;
            background-color:$offBlack;
            border-radius:10px;
        }

        :nth-child(2) {
            width:50%;
            margin-left:50%;
            transition:all 0.2s linear;
        }

        &:hover {
            :nth-child(2) {
                margin-left:12.5%;
                width:75%;
            }
        }

    }
</style>