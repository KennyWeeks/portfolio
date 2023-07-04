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
        width:35px;
        height:18px;
        @include flexCol;

        .menu_bar {
            width:100%;
            height:7px;
            background-color:$offBlack;
            border-radius:10px;

        }

        :nth-child(2) {
            width:50%;
            margin-left:50%;
        }
    }
</style>