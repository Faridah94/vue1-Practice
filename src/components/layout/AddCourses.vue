<template>
  <div id="app">
        <div class="add-smoothie container z-depth-1">
            <h2 class="center-align indigo-text">Add New Course Recipe</h2>

            <form @submit.prevent="addSmoothie">
            <div class="field courseName">
                <label for="courseName">Course title:</label>
                <input type="text" name="courseName" v-model="courseName">
            </div>
            <div class="field teacherName">
                <label for="teacherName">Teacher Name:</label>
                <input type="text" name="teacherName" v-model="teacherName">
            </div>
            <div class="field aboutCourse">
                <label for="aboutCourse">Say Something About Course:</label>
                <input type="text" name="aboutCourse" v-model="aboutCourse">
            </div>
            <div class="field noOfHours">
                <label for="noOfHours">Course hours:</label>
                <input type="number" name="noOfHours" v-model="noOfHours">
            </div>
            <div class="field center-align">
                <p v-if="feedback" class="red-text">{{ feedback }}</p>
                <button class="btn pink">Add Course</button>
            </div>
            </form>
        </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'
export default {
  name: 'AddCourses',
  data () {
    return {
      courseName: null,
      teacherName: null,
      aboutCourse: null,
      noOfHours: null,
      feedback: null,
      slug: null
    }
  },
  methods: {
    addSmoothie () {
      if (this.courseName) {
        this.feedback = null
        // create a slug
        this.slug = slugify(this.courseName, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        console.log(this.slug)
        // save Course to firestore //  set use to sepcefies an ID to our doc if you don'ts care about that use [doc().add()]
        db.collection('courses').doc(this.slug).set({
          courseName: this.courseName,
          teacherName: this.teacherName,
          aboutCourse: this.aboutCourse,
          noOfHours: this.noOfHours,
          slug: this.slug
        }).then(() => {
          this.$router.push({ name: 'Courses' })
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.feedback = 'You must enter a some informations!'
      }
    }

  }
}
</script>
<style>
.add-smoothie{
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
  margin-bottom: 60px;
}
.add-smoothie h2{
  font-size: 2em;
  margin: 20px auto;
}
.add-smoothie .field{
  margin: 20px auto;
  position: relative;
}
.add-smoothie .delete{
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>
