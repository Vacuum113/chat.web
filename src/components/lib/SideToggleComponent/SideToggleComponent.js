export default {
  data () {
    return {
      isClicked: false
    }
  },
  created: function () {
    this.isClicked = false
  },
  methods: {
    ClicedOn () {
      this.isClicked = !this.isClicked
    }
  }
}
