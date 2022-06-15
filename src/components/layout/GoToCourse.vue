<template>
      <div v-if="course" class="about-course container z-depth-1">
        <h2 class="indigo-text center-align">About {{ course.courseName }} Course</h2>
        <form @submit.prevent="AboutCourse">
            <div class="field courseName">
                <label for="courseName">Course title:</label>
                <p type="text" name="courseName">{{course.courseName}}</p>
            </div>
            <div class="field teacherName">
                <label for="teacherName">Teacher Name:</label>
                <p type="text" name="teacherName">{{ course.teacherName }}</p>
            </div>
            <div class="field aboutCourse">
                <label for="aboutCourse">Say Something About Course:</label>
                <p type="text" name="aboutCourse">{{ course.aboutCourse }}</p>
            </div>
            <div class="field noOfHours">
                <label for="noOfHours">Course hours:</label>
                <p type="number" name="noOfHours">{{ course.noOfHours }} </p>
            </div>
            <div class="field ratings">
              <v-row
                  align="center"
                  class="mx-0 px-5"
                >
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ml-4">4.5 (413)</div>
              </v-row>
            </div>
        </form>
          <div class="view-profile container">
            <div v-if="profile" class="card">
              <h2 class="deep-purple-text center">{{ profile.alias }}'s Wall</h2>
              <ul class="comments collection">
                <li v-for="(comment, index) in comments" :key="index">
                  <div class="deep-purple-text">{{ comment.from }}</div>
                  <div class="grey-text text-darken-2">{{ comment.content }}</div>
                </li>
              </ul>
              <form @submit.prevent="addComment">
                <div class="field">
                  <label for="comment">Add a comment</label>
                  <input type="text" name="comment" v-model="newComment">
                  <p v-if="feedback" class="red-text center">{{ feedback }}</p>
                </div>
              </form>
            </div>
          </div>
      </div>
</template>
<script>
import db from '@/firebase/init'
import slugify from 'slugify'
export default {
  name: 'GoToCourse',
  data () {
    return {
      course: null,
      feedback: null,
      slug: null,
      profile: null,
      newComment: null,
      comments: []

    }
  },
  methods: {
    AboutCourse () {
      // create a slug
      this.slug = slugify(this.course.courseName, {
        replacement: '-',
        remove: /[$*_+~.()'"!\-:@]/g,
        lower: true
      })
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
.about-course{
  margin-top: 60px;
  padding: 40px;
  max-width: 900px;
  margin-bottom: 40px;

}
.about-course h2{
  font-size: 2.4em;
  font-weight: bold;
  margin: 20px auto;
}
.about-course .field{
  margin: 20px auto;
  position: relative;
}
.about-course .field label{
  font-size: 1em;
  font-weight: bold;
}
.about-course .view-profile .card{
  padding: 20px;
  margin-top: 60px;
}
.about-course .view-profile h2{
  font-size: 2em;
  margin-top: 0;
}
.about-course .view-profile li{
  padding: 10px;
  border-bottom: 1px solid #eee
}
</style>
