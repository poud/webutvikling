// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.



const restaurants = [
    {
      id: 1,
      name: 'Frati',
      desc: 'Frati er en god restaurant',
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2874&q=80",
      price: 3,
    },
    {
      id: 2,
      name: 'Macern',
      desc: "Macern gir deg en opplevelse du har vil glemme",
      image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80",
      price: 1,
    },
    {
      id: 3,
      name: 'Burger King',
      desc: "BK gir deg en burger, som er god i beruset tilstand.",
      image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80",
      price: 2,
    },
  ];
  
  const reviews = [
    {
      restaurant: 1,
      stars: 1,
      name: "arne",
      comment: "Dette er trash"
    },
    {
      restaurant: 1,
      stars: 2,
      name: "arne",
      comment: "Dette er trash"
    },
    {
      restaurant: 2,
      stars: 2,
      name: "arne",
      comment: "Dette er trash"
    }
  ]

  const resolvers = {
    Query: {
        getRestaurant: (parent,args) => {
          return restaurants.slice(args.offset,args.first+args.offset);
        },
        getReviews: (parent, args) => {
           return reviews.filter(x => x.restaurant === args.id).slice(args.offset,args.first+args.offset);
        }
    },

    Mutation: {
        createReview(parent,args){
            const newReview = args;
            reviews.push(newReview);
            return newReview;
        }
    },

    Review: {
      restaurant: parent => restaurants.find(x => x.id === parent.restaurant)
    }
  };


  module.exports = {resolvers};

