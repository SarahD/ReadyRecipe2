export default {
  ingredientInput: [{
      ingredients: ['chicken', 'peppers', 'onions', 'tortillas'],
      recipes: ['chickenFajitas', 'tacos'],
    },
    {
      ingredients: ['chicken', 'peppers', 'onions', 'tortillas', 'cheese'],
      recipes: ['chickenFajitas', 'loadedChickenBurritos', 'quesadillas'],
    },
    {
      ingredients: ['egg', 'tuna', 'milk', 'green peas'],
      recipes: ['tunaCasserole'],
  }],

  chickenFajitas: {
    name: 'Chicken Fajita',
    image: 'https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/Flavorful-Chicken-Fajitas_exps12540_BOS3149327B02_08_5bC_RMS.jpg',
    prep: 50,
    cook: 4,
    directions: '<ol><li>Preheat oven to 425°F. Combine topping ingredients and set aside.</li>' +
        '<li>Boil noodles al dente according to package directions. Drain and rinse under cold water.</li>' +
        '<li>Cook onion and celery in butter until tender, about 5-7 minutes.</li>' +
        '<li>In a large bowl combine noodles, onion mixture, peas, soup, milk, cheese, tuna and parsley. Mix well.</li>' +
        '<li>Spread into a 2qt casserole dish and top with crumb topping.</li>' +
        '<li>Bake 18-20 minutes or until bubbly.</li></ol>'
  },
  tacos: {
    name: 'Tacos',
    image: 'https://www.mylatinatable.com/wp-content/uploads/2014/02/fh-tacos.jpg',
    prep: 30,
    cook: 10,
    ingredients: [{
      name: "Tortillas",
      quantity: '10',
      measure: 'item',
      type: 'bread'
    },{
      name: "Lettuce",
      quantity: '1',
      measure: 'item',
      measureLabel: 'Head',
      type: 'vegetable'
    },{
      name: "Hamburg",
      quantity: '1',
      measure: 'lb',
      type: 'meat'
    },{
      name: "Shredded Cheese",
      quantity: '8',
      measure: 'oz',
      type: 'dairy'
    }],
    directions: '<ol><li>Preheat oven to 425°F. Combine topping ingredients and set aside.</li>' +
        '<li>Boil noodles al dente according to package directions. Drain and rinse under cold water.</li>' +
        '<li>Cook onion and celery in butter until tender, about 5-7 minutes.</li>' +
        '<li>In a large bowl combine noodles, onion mixture, peas, soup, milk, cheese, tuna and parsley. Mix well.</li>' +
        '<li>Spread into a 2qt casserole dish and top with crumb topping.</li>' +
        '<li>Bake 18-20 minutes or until bubbly.</li></ol>'
  },
  quesadillas: {
    name: 'Quesadillas',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Quesadilla_2.jpg/1200px-Quesadilla_2.jpg',
    prep: 8,
    cook: 9,
    ingredients: [{
      name: "Peppers",
      quantity: '2',
      measure: 'item',
      type: 'vegetable'
    },{
      name: "Tortillas",
      quantity: '10',
      measure: 'item',
      type: 'bread'
    },{
      name: "Chicken",
      quantity: '1/2',
      measure: 'lb',
      type: 'meat'
    },{
      name: "Shredded Cheese",
      quantity: '8',
      measure: 'oz',
      type: 'dairy'
    }],
    directions: '<ol><li>Preheat oven to 425°F. Combine topping ingredients and set aside.</li>' +
        '<li>Boil noodles al dente according to package directions. Drain and rinse under cold water.</li>' +
        '<li>Cook onion and celery in butter until tender, about 5-7 minutes.</li>' +
        '<li>In a large bowl combine noodles, onion mixture, peas, soup, milk, cheese, tuna and parsley. Mix well.</li>' +
        '<li>Spread into a 2qt casserole dish and top with crumb topping.</li>' +
        '<li>Bake 18-20 minutes or until bubbly.</li></ol>'
  },
  loadedChickenBurritos: {
    name: 'Loaded Chicken Burritos',
    image: 'https://images-gmi-pmc.edge-generalmills.com/fe7f2591-dc1e-46a4-8f10-a738973d7d92.jpg',
    prep: 30,
    cook: 15,
  },
  tunaCasserole: {
    name: 'Tuna Casserole',
    image: 'https://fthmb.tqn.com/aPAwH4oFxcqfHZDOVRYGJ-ZZ4fw=/960x0/filters:no_upscale()/tuna-casserole-08-18-56b71e013df78c0b135dd879.jpg',
    prep: 30,
    cook: 45,
    ingredients: [{
      name: "Tuna",
      quantity: '1',
      measure: 'lb',
      type: 'fish'
    }],
    directions: '<ol><li>Preheat oven to 425°F. Combine topping ingredients and set aside.</li>' +
        '<li>Boil noodles al dente according to package directions. Drain and rinse under cold water.</li>' +
        '<li>Cook onion and celery in butter until tender, about 5-7 minutes.</li>' +
        '<li>In a large bowl combine noodles, onion mixture, peas, soup, milk, cheese, tuna and parsley. Mix well.</li>' +
        '<li>Spread into a 2qt casserole dish and top with crumb topping.</li>' +
        '<li>Bake 18-20 minutes or until bubbly.</li></ol>'
  },
}