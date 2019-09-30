import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      text: ''
    }
  },
  computed: {
    ...mapState({
      messages: state => state.messages.list
    })
  },
  methods: {
    ...mapActions({
      sendMessage: 'messages/send'
    }),
    handleSendClick () {
      if (this.text) {
        this.sendMessage(this.text)
        this.text = ''
      }
    }
  }
}
