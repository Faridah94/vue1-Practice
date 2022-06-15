<template>
      <div v-if="course" class="edit-smoothie container z-depth-1">
        <h2 class="indigo-text center-align">Edit {{ course.courseName }}Course</h2>
        <form @submit.prevent="EditCourse">
            <div class="field courseName">
                <label for="courseName">Course title:</label>
                <input type="text" name="courseName" v-model="course.courseName">
            </div>
            <div class="field teacherName">
                <label for="teacherName">Teacher Name:</label>
                <input type="text" name="teacherName" v-model="course.teacherName">
            </div>
            <div class="field aboutCourse">
                <label for="aboutCourse">Say Something About Course:</label>
                <input type="text" name="aboutCourse" v-model="course.aboutCourse">
            </div>
            <div class="field noOfHours">
                <label for="noOfHours">Course hours:</label>
                <input type="number" name="noOfHours" v-model="course.noOfHours">
            </div>
            <div class="field center-align">
                <p v-if="feedback" class="red-text">{{ feedback }}</p>
                <button class="btn pink">Update</button>
            </div>
          </form>
      </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'
export default {
  name: 'EditCourse',
  data () {
    return {
      course: null,
      feedback: null,
      slug: null
    }
  },
  methods: {
    EditCourse () {
      if (this.course.courseName) {
        this.feedback = null
        // create a slug
        this.slug = slugify(this.course.courseName, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        // update Course in firestore
        db.collection('courses').doc(this.course.id).update({
          courseName: this.course.courseName,
          slug: this.slug,
          teacherName: this.course.teacherName,
          aboutCourse: this.course.aboutCourse,
          noOfHours: this.course.noOfHours
        }).then(() => {
          this.$router.push({ name: 'Courses' })
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.feedback = 'You must enter a course title'
      }
    }

  },
  created () {
    const ref = db.collection('courses').where('slug', '==', this.$route.params.course_slug)
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.course = doc.data()
        this.course.id = doc.id
      })
    })
  }
}
</script>

<style>
.edit-smoothie{
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.edit-smoothie h2{
  font-size: 2em;
  margin: 20px auto;
}
.edit-smoothie .field{
  margin: 20px auto;
  position: relative;
}
.edit-smoothie .delete{
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>
