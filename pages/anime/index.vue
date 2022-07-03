<template>
    <div>s</div>
</template>

<script>
export default {
    data() {
        return{
            format: []
        }
    },
    async beforeCreate(){
        let response = await this.$axios.get('https://www.disify.com/api/email/ewfwe');
        const data = response
        // console.log(data.data)
        this.format = data.data.format
        console.log(this.format)
    }
}
</script>