<template>
    <div class="modal">
        <form action="">
            <button 
            @click.prevent="showModal = false"
            class="modal__close" 
            >
            </button>
            <h1 class="modal__title">Add New Task</h1>
            <input class="modal__field" type="text">
            <button class="modal__submit">OK</button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    $lightGrayColor: #eef0f5; 
    $darkBlueColor: #3e434f;
    $darkBlueColorAlpha: rgba(62, 67, 79, 0.2);
    $limeColor: #50e3a4;

    .modal {
        position: absolute;
        z-index: 100;
        width: 550px;
        background-color: white;
        padding-bottom: 50px;
        box-shadow: 0 0 10px 2px $darkBlueColorAlpha;
    }

    form {
        font-family: 'Open Sans', Arial, sans-serif;
        display: flex;
        flex-direction: column;
    }

    .modal__title {
        color: $darkBlueColor;
        font-size: 25px;
        font-weight: 400;
        text-align: center;
    }

    .modal__field {
        width: 340px;
        height: 30px;
        margin: 20px auto 40px auto;
        border: none;
        font-family: 'Open Sans', Arial, sans-serif;
        font-size: 25px;
        font-weight: 300;
        text-align: center;
        color: $darkBlueColor;
        border-bottom: 2px solid $lightGrayColor;

        &:focus {
            outline: none;
        }
    }

    .modal__close {
        display: block;
        border: none;
        width: 59px;
        height: 59px;
        background-color: transparent;
        background-image: url("../assets/close.png");
        background-repeat: no-repeat;
        margin-left: 460px;
        margin-top: 20px;
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }

    .modal__submit {
        display: block;
        border: none;
        border-radius: 30px;
        padding: 10px;
        width: 350px;
        margin: 0 auto;
        font-family: 'Open Sans', Arial, sans-serif;
        font-size: 25px;
        font-weight: 300;
        color: white;
        background-color: $limeColor;
        box-shadow: 0 0 10px 2px $darkBlueColorAlpha;
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }
</style>
