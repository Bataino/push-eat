<template>
    <div class="d-flex flex-wrap">
        <div class="mx-auto px-5 h-100 bg-anger">
            <div class="w-100 mx-auto py-3 d-md-none">
                <img src="/images/failed.png" class="w-100" />
            </div>
            <div class="w-100 mx-auto py-3 d-none d-md-block">
                <img src="/images/failed-large.png" class="w-100" />
            </div>
            <div class="mx-auto px-md-5 mt-4 text-center" style="max-width:500px">
                <h1 class="text-pe-green fw-bold museo-1000">
                    OOpss!!!
                </h1>
                <br>
                <div class="fs-5 text-rt-blue pt-3 nuinto-s-bold">
                    <h4 class="museo-500 fw-bold">
                        Order Failed
                    </h4>
                    <small>
                        Something seems to have been wrong with your order.
                    </small>
                </div>

                <div class="btn btn-pe-green p-3 rounded-10 w-100 mt-5 mb-3" @click="this.$router.push('')">
                    <span class="fs-6 nexa-bold">
                        Go Back Home
                    </span>
                </div>
            </div>

        </div>
    </div>
</template>
    
<script>
export default {
    name: '',
    data() {
        return {
        }
    },
    components: {

    },
}
</script>
    
<style></style>
    