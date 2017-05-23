export const environment = {
  production: true,

  API: {
    BASE_URL: 'https://yelpsearchbackend.herokuapp.com',
    yelp: function(){
      return {
        search: `${this.BASE_URL}/search/results`
      }
    }
  }
};
