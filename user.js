const user = {
    name: "Riley",
    location: "Dallas, Tx",
    occupations: ["web-dev","student","machinist"],
    hobbies: [
      {
        name: "getting paid",
        type: "grinding"
      },
      {
        name: "Dirt4",
        type: "racing"
      },
      {
        name: "ping-pong",
        type: "game"
      }
    ],
    family: [
      {
        name: "Robert",
        relation: "father",
        gender: "male"
      },
      {
        name: "Nancy",
        relation: "mother",
        gender: "female"
      },{
        name: "Russell",
        relation: "uncle",
        gender: "male"
      }
    ],
    restaurants: [
      {
        name: "Chophouse Burger",
        type: "Burgers",
        rating: "9/10"
      },
      {
        name: "Frankies",
        type: "Bar and Grill",
        rating: "8/10"
      },
      {
        name: "Chick-fil-A",
        type: "Chicken",
        rating: "7/10"
      }
    ]
  }

  module.exports = {
      user
  }