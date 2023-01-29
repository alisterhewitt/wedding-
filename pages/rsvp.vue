<template>
  <div class="main">
    <img class="image" src="~/assets/images/leaves.png" />
    <div class="heading">
    <h1>ABBY</h1>
    <h2>And</h2>
    <h1>Alister</h1>
    <h3>15 JULY 2023 @ 12.00PM</h3>
    <h4>Tros yr afon<br/>Beaumaris</br>Isle of anglesey<br/>LL58 8RN
    </h4>
  </div>
    <div class="polaroids">
    <img class="image" src="~/assets/images/1.png" />
    <img class="image" src="~/assets/images/2.png" />
    <img class="image" src="~/assets/images/3.png" />
    <img class="image" src="~/assets/images/4.png" />
    <img class="image" src="~/assets/images/6.png" />
    <img class="image" src="~/assets/images/5.png" />
  </div>
    <Intro />
    <Rsvp/>  
  </div>
</template>

<script>
import Rsvp from '~/components/Rsvp.vue'
import Intro from '~/components/Intro.vue'

export default {
  name: 'RsvpPage',
  components: {
    Rsvp,
    Intro,
  },
}
</script>

<style scoped>

.main {
  padding: 0 0 100px 0;
}

.heading {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 0 60px 0;
}
.image {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: block;
}

.polaroids {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin: 0 0 100px 0;
  padding: 0 40px;
}

@media (min-width: 1250px) {
  .polaroids {
    grid-template-columns: repeat(3, 1fr);
  }
}
    


</style>
