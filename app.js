const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      fullname: "",
      firstname: "",
      lastname: "",
    };
  },
  computed: {
    fullname() {
      console.log("Running again...");

      if (this.firstname === "" || this.lastname === "") {
        return "";
      }

      return `${this.firstname} ${this.lastname}`;
    },
  },
  watch: {
    firstname(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = `${value} ${this.lastname} `;
      }
    },
    lastname(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = `${this.firstname} ${value} `;
      }
    },
  },
  methods: {
    setName(event) {
      this.firstname = event.target.value;
    },
    increment(num) {
      this.counter += num;
    },
    decrement(num) {
      this.counter -= num;
      // this.counter--;
    },
    resetInput() {
      this.firstname = "";
    },
  },
});

app.mount("#events");
