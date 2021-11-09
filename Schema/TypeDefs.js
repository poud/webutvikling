const {gql } = require('apollo-server');


const typeDefs = gql`

  type Restaurant {
    id: Int,
    name: String
    desc: String
    image: String
    price: Int
    reviews: [Review]
  }

  type Review {
    restaurant: Restaurant
    stars: Int
    comment: String 
    name: String
  }

  type Query {
    getRestaurant(first: Int,offset: Int): [Restaurant],
    searchRestaurant(search: String): [Restaurant],
    getRestaurantById(first: Int,offset: Int,id: Int): Restaurant,
    getReviews(first: Int,offset: Int,id: Int): [Review]
  }

  #Mutations
  type Mutation {
      createReview(restaurant: Int,stars: Int,name: String, comment: String): Review
  }
`;

module.exports = {typeDefs};