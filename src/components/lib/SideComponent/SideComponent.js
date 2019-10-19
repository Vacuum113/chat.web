export default {
  data () {
    return {
      isClicked: false
    }
  },
  methods: {
    handleOpen: function () {
      this.isClicked = !this.isClicked
    }
  }
}
