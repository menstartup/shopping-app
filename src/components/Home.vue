<template>
    <v-container grid-list-xs>
        <v-layout align-center class="info_box">
            <v-flex sm2 xs12 offset-sm9>
                <h1>Manh shop</h1>
                <div>
                    <p>
                        Buy what you want
                    </p>
                </div>
            </v-flex>
        </v-layout>
        <v-layout align-center class="info_box" row wrap>
            <v-flex sm2 xs12 offset-sm1>
                <h1>Manh shop</h1>
                <div>
                    <p>
                        Buy what you want here
                    </p>
                </div>
            </v-flex>
            <v-flex sm2 xs12>
                <h1>Manh shop</h1>
                <div>
                    <p>
                        Buy what you want here
                    </p>
                </div>
            </v-flex>
            <v-flex sm2 xs12>
                <h1>Manh shop</h1>
                <div>
                    <p>
                        Buy what you want here
                    </p>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.info_box .flex div {
    background-color: white;
    padding: 25px
}
.layout:first-child {
    height: 40vh;
}
.info_box .flex h1 {
    border: solid 5px white;
    padding: 10px;
    margin-bottom: 5px;
    color: white;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    text-align: center  
}
</style>
