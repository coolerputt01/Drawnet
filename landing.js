import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
const Card = {
  template:`<div class="card" >
        <img :src="imageUrl" alt="tools" class="card-img">
        <p class="card-text">{{description}}</p>
      </div>`,
     props: {
    imageUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  mounted(){
    const card = document.querySelectorAll('.card');
    const observer = new ScrollObserver(false, {
            root: null, 
            threshold: 0.3,
            rootMargin: '-10px',
           });
    observer.observe(card, null, 'to-right');
  },
}
const app = createApp({});
app.component('card',Card);
app.mount('#app');
