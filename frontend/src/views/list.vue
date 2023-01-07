<script>
import { mapActions } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'List',
  data() {
    return {
      name: '',
      image: '',
      price: '',
      description: '',
      category: '',

      backendError: null,
    }
  },

  methods: {
    ...mapActions(['list']),
    async submitProduct(e) {
      e.preventDefault()
      try {
        await this.list({
          name: this.name,
          image: this.image,
          price: this.price,
          description: this.description,
          category: this.category,
        })

        this.$router.push('/')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    },
  },
}
</script>

<template lang="pug">
h2 Add product
.row
  
  .col-4.column
    
     
   
    .image-placeholder 
      input.btn.upload(type='file') 
  
    //form( @submit="submitProduct")
     
  .col-4.column 
    form( @submit="submitProduct")
      .form-group
        label(for='name') Product Name
        input.form-control(v-model="name" id="name" type="text" placeholder="enter name" required)
      .form-group.postform
        label.form-Label(for='category') Product Category
        input.form-control(v-model="category" id="category" type="text" placeholder="enter Category")
      .form-group
        label.form-Label(for='description') Product Description
        textarea.form-control(v-model="description" id="description" type="text" placeholder="description" required)
      .form-group
       label.form-Label(for='image') Image url
       input.form-control(v-model="image" id="image" type="text" placeholder="enter image url" required)
      .form-group
        label.form-Label(for='Price') Product Price
        input.form-control(v-model="price" id="price" type="text" placeholder="$" required)
        input.btn.btn-primary.btnclass(type="submit" value="Publish  Product")
        div(v-if="backendError") {{ backendError }}
</template>

<style>
h2 {
  margin-left: 50px;
}
.image-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-color: lightgray;
  border: 2px;
  cursor: pointer;
}
.image-placeholder {
  padding: 20px;
  margin-bottom: 15px;
}

.column {
  margin-left: 100px;
  margin-top: 50px;
}
.btn {
  width: 50%;
  margin-top: 10px;
}
.upload {
  width: 100%;
  display: block;
}
@media (min-width: 1024px) {
}
</style>
