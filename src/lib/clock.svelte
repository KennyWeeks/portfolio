<script lang="ts">

    let date : Date = new Date();
    let day : number = date.getDay();
    let hours : number = date.getHours();
    let year : number = date.getUTCFullYear();
    let minutes : number = date.getMinutes();

    console.log(hours + ": " + minutes);

    setInterval(()=>{
        minutes += 1;
        minutes = minutes == 60 ? 0 : minutes; //If it has been 60 minutes, then you are back at 0
        hours = minutes == 60 ? hours + 1 : hours; //Otherwise, you are starting the new hour;
        console.log(hours + ": " + minutes);
    }, 60000);


</script>

<div></div>

<style lang="scss"></style>