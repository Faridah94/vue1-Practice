<template>
<div class="courses-part">
  <!-- <AddCourses/> -->

  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="274"
    v-for="course in courses" :key="course.id"
  >
    <v-img
      height="150"
      src="@/assets/logo.png"
    ></v-img>

    <v-card-title>{{course.courseName}}</v-card-title>

    <v-card-text>
      <div class="my-4 subtitle-1">
          {{course.teacherName}}
      </div>
      <!-- <v-row
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
      </v-row> -->
      <div>{{course.aboutCourse}}</div>
      <v-chip-group
        v-model="selection"
        active-class="deep-blue accent-4 white--text"
        column
      >
        <v-chip class="text-center">{{course.noOfHours}} Hours</v-chip>
      </v-chip-group>
    </v-card-text>

        <v-divider class="mx-2"></v-divider>

    <v-card-actions>
      <v-btn
      text
      color="deep-blue lighten-2"
      >
      <router-link id="btn" :to="{ name: 'GoToCourse', params: {course_slug: course.slug }}">
      Go to course
      </router-link>
      </v-btn>
      <span>
        <router-link :to="{ name: 'EditCourse', params: {course_slug: course.slug}}">
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
import db from '@/firebase/init'
export default {
  name: 'Courses',
  data: () => ({
    loading: false,
    selection: 1,
    courses: []
  }),

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  },
  created () {
    // fetch data from firestore

    db.collection('courses').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const course = doc.data()
          course.id = doc.id
          this.courses.push(course)
          // document.getElementById('btn').addListener('click', () => {
          //   this.$router.push({ name: 'GoToCourse', params: { id: doc.id } })
          // })
        })
      })
  }
}
</script>
<style>
.courses-part{
  max-width: 800px;
  margin: auto;
  display: inline-flex;
    padding: 80px;
}

</style>
