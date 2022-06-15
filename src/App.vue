<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1>Firebase and Vue</h1>
    </div>
    <div class="card">
  <div class="card-header">Add Book</div>
  <div class="card-body">
    <form id="form"
          class="form-inline"
          @submit.prevent="addArticle">
      <div class="form-group mb-2">
        <label for="title" class="sr-only">Title</label>
        <input id="title"
               type="text"
               class="form-control"
               placeholder="Title"
               v-model="newArticle.title" />
      </div>
      <div class="form-group mx-sm-3 mb-2">
        <label for="author" class="sr-only">Author</label>
        <input id="author"
               type="text"
               class="form-control"
               placeholder="Author"
               v-model="newArticle.author" />
      </div>
      <div class="form-group mb-2">
        <label for="url" class="sr-only">Url</label>
        <input id="url"
               type="text"
               class="form-control"
               placeholder="http://"
               v-model="newArticle.url" />
      </div>
      <button class="btn btn-primary mx-sm-3 mb-2">Add</button>
    </form>
  </div>
</div>
  </div>
</template>

<script>
  import articlesRef from './config';
  export default {
    name: 'app',
      firebase: {
        articles: articlesRef
      },
    data(){
      return {
        newArticle: {
          title: '',
          author: '',
          url: ''
        }
      }
    },
    methods: {
      addArticle() {
        articlesRef.push(this.newArticle);
          this.newArticle.title = '';
          this.newArticle.author = '';
          this.newArticle.url = '';
      },
      removeArticle(article) {
        articlesRef.child(article['.key']).remove();
      }
    }
  }
</script>