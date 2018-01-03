let app = new Vue({
  el: "#app",
  data: {
    newName: '',
    shows: ["The Office", "How to Get Away with Murder", "The X Files"]
  },
  methods: {
      addName(){
         this.shows.push(this.newName);
         this.newName = '';
      }
  }
});
