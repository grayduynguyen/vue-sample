<template>
    <div class="row">
        <div class="col-md-12">
            <h4>What your name?</h4><br/>
            <input type="text" placeholder="First Name" name="FirstName" v-model="customer.firstName" />
            <input type="text" placeholder="Last Name" name="LastName" v-model="customer.lastName" />

          
        </div>

        <div class="col-md-12">
            <h3>Hello : {{customer.firstName}} {{customer.lastName}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                customer: {
                    firstName: null,
                    lastName: null
                }
            }
        },
        computed: {
        },
        methods: {},
    }

</script>