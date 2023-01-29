<template>
<div class="container">
    <p class="response">Thanks! Can't wait to see you there!</p>
    <p class="response">Abby & Ali x</p>
    <img class="image" src="~/assets/images/7.png" />
</div>
</template>

<script>
import Rsvp from '~/components/Rsvp.vue'
export default {
  name: 'ThanksPage',
  components: {
    Rsvp
  },
}

</script>


<style scoped>

.container {
    padding: 100px 30px;
}

@media (min-width: 1250px) {
    .container {
        margin: 0 auto;
        max-width: 600px
    }

}
.image {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: block;
}

.response {
    text-align: center;
    font-size: 30px;
    font-family: 'Rig-Face';
    margin: 30px 0 30px 0;
}

</style>


  