var app = new Vue(
  {
    el: '#app',
    data:{
      apiKey: '2af3dbe2dc67db19a015c5cf931f2864',
      apiUrl: 'https://api.themoviedb.org/3/search/',
      films: [],
      search: '',
      tvShows: [],
    },
    methods:{
      searchFilm: function(){
        axios.get(this.apiUrl + 'movie',{
          params: {
            api_key: this.apiKey,
            query: this.search,
            language: 'it-IT',
          }
        })
        .then((risposta) =>{
          this.films = risposta.data.results;
          // calcolo del voto arrotondato per eccesso
          for (var i = 0; i < this.films.length; i++){
            this.films[i].vote_average = Math.ceil(this.films[i].vote_average / 2);
          }
        })
        axios.get(this.apiUrl + 'tv',{
          params: {
            api_key: this.apiKey,
            query: this.search,
            language: 'it-IT',
          }
        })
        .then((risultato) =>{
          this.tvShows = risultato.data.results;
          // calcolo del voto arrotondato per eccesso
          for (var j = 0; j < this.tvShows.length; j++){
            this.tvShows[j].vote_average = Math.ceil(this.tvShows[j].vote_average / 2);
          }
        })
        this.search = '';
      },
    }
});
