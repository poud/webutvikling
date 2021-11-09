// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.



const restaurants = [
    {
      id: 1,
      name: 'Frati',
      desc: 'Frati er en god restaurant',
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2874&q=80",
      price: 2,
      category: "italiensk",
    },
    {
      id: 2,
      name: 'Macern',
      desc: "Macern gir deg en opplevelse du har vil glemme",
      image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80",
      price: 1,
      category: "amerikansk",
    },
    {
      id: 3,
      name: 'Burger King',
      desc: "BK gir deg en burger, som er god i beruset tilstand.",
      image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80",
      price: 1,
      category: "amerikansk",
    },
    {
      id: 4,
      name: 'Døgnvill Burger',
      desc: 'Saftige burgere døgnet rundt',
      category: 'amerikansk',
      price: 2,
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2874&q=80",
  },
  {
      id: 5,
      name: 'Emilie Eld Restaurant & Bar',
      desc: 'Eksklusiv restaurant',
      category: 'grill',
      price: 3,
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2874&q=80",
  },
  {
      id: 6,
      name: 'Bula Neobistro',
      desc: 'Flott sjømat',
      category: 'sjømat',
      price: 3,
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2874&q=80",
  },
  {
      id: 7,
      name: 'Amber Restaurant',
      desc: 'Asiatisk mat',
      category: 'asiatisk',
      price: 2,
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2874&q=80",
  },
  {
      id: 8,
      name: 'Le Bistro',
      desc: 'Eksklusiv fransk mat',
      category: 'fransk',
      price: 3,
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2874&q=80",
  },
  {
      id: 9,
      name: 'Speilsalen',
      desc: 'High-end restaurant i Trondheim',
      category: 'eksklusiv',
      price: 3,
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2874&q=80",
  },
  ];
  
  const reviews = [
    {
      restaurant: 1,
      stars: 5,
      name: "arne",
      comment: "Dette er en kjempegod restaurant."
    },
    {
      restaurant: 2,
      stars: 3,
      name: "kåre",
      comment: "Helt oke"
    },
    {
      restaurant: 3,
      stars: 4,
      name: "ole gunnar",
      comment: "Fin stemning og ganske god mat."
    },
    {
      restaurant: 3,
      stars: 1,
      name: "kalle",
      comment: "pappa lager bedre mat. og han klarer ikke steke en grandis engang."
    },
    {
      restaurant: 4,
      stars: 4,
      name: "andrea",
      comment: "godt."
    },
    {
      restaurant: 5,
      stars: 4,
      name: "emilie",
      comment: "god stemning."
    },
    {
      restaurant: 6,
      stars: 5,
      name: "ole",
      comment: "Fin stemning og ganske god mat."
    },
    {
      restaurant: 7,
      stars: 2,
      name: "anonym",
      comment: "did not like the food at all."
    },
    {
      restaurant: 8,
      stars: 3,
      name: "jack",
      comment: "helt ok"
    },
    {
      restaurant: 9,
      stars: 5,
      name: "bruker123",
      comment: "God mat."
    },

    
  ]

  const resolvers = {
    Query: {
        getRestaurant: (parent,args) => {
          return restaurants.slice(args.offset,args.first+args.offset);
        },
        searchRestaurant: (parent,args) => {
          var result = []
          for (let i = 0; i < restaurants.length; i++) {
            const element = restaurants[i];
            if(element.name.toLowerCase().includes(args.search.toLowerCase()) || element.desc.toLowerCase().includes(args.search.toLowerCase())){
              result.push(element);
            } 
          }
          return result;
        },
        getReviews: (parent, args) => {
           return reviews.filter(x => x.restaurant === args.id).slice(args.offset,args.first+args.offset);
        },
        getRestaurantById: (parent, args) => {
          return restaurants.filter(x => x.id === args.id)[0];
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

