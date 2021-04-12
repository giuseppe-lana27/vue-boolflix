var app = new Vue(
  {
    el: '#app',
    data:{
      films: [],
      filmTitle: '',
    },
    methods:{
      searchFilm: function(){
        axios.get('https://api.themoviedb.org/3/search/movie?',{
          params: {
            api_key: '2af3dbe2dc67db19a015c5cf931f2864',
            query: this.filmTitle,
            language: 'it-IT',
          }
        })
        .then((risposta) =>{
          this.films = risposta.data.results;          
          this.filmTitle = '';
          // calcolo del voto arrotondato per eccesso
          for (var i = 0; i < this.films.length; i++){
            this.films[i].vote_average = Math.ceil(this.films[i].vote_average / 2);

          }
        })
      }
    }
});
