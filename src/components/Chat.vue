<template>
  <div class="chat container">
    <h2 class="center teal-text">Ninja Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="Message in Messages" :key="Message.id">
            <span class="teal-text"> {{Message.name}}</span>
            <span class="grey-text text-darken-3"> {{Message.content}}</span>
            <span class="grey-text time"> {{Message.timestamp}}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
  name: 'Chat',
  props: ['name'],
  components: {
    NewMessage
  },
  data () {
    return {
      Messages: []
    }
  },
  created () {
    const ref = db.collection('messages').orderBy('timestamp')

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          const doc = change.doc
          this.Messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('lll')
          })
        }
      })
    })
  }
}
</script>

<style>
.chat{
  text-align: left;
}
.chat h2{
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span{
  font-size: 1.4em;
}
.chat .time{
  display: block;
  font-size: 0.8em;
}
.messages{
  max-height: 200px;
  overflow: auto;
}
.messages::-webkit-scrollbar{
  width: 3px;
}
.messages::-webkit-scrollbar-track{
  background:#ddd;
}
.messages::-webkit-slider-thumb{
  background: #aaa;
}
</style>
