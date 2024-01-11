const fs = require("fs");
const crypto = require("crypto").webcrypto;
let recipes = [
  {
    name: "Easter Leftover Sandwich",
    ingredients:
      "12 whole Hard Boiled Eggs\n1/2 cup Mayonnaise\n3 Tablespoons Grainy Dijon Mustard\n Salt And Pepper, to taste\n Several Dashes Worcestershire Sauce\n Leftover Baked Ham, Sliced\n Kaiser Rolls Or Other Bread\n Extra Mayonnaise And Dijon, For Spreading\n Swiss Cheese Or Other Cheese Slices\n Thinly Sliced Red Onion\n Avocado Slices\n Sliced Tomatoes\n Lettuce, Spinach, Or Arugula",
    url: "http://thepioneerwoman.com/cooking/2013/04/easter-leftover-sandwich/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2013/03/leftoversandwich.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2013-04-01",
    prepTime: "PT15M",
    description:
      "Got leftover Easter eggs?    Got leftover Easter ham?    Got a hearty appetite?    Good! You've come to the right place!    I...",
  },
  {
    name: "Pasta with Pesto Cream Sauce",
    ingredients:
      "3/4 cups Fresh Basil Leaves\n1/2 cup Grated Parmesan Cheese\n3 Tablespoons Pine Nuts\n2 cloves Garlic, Peeled\n Salt And Pepper, to taste\n1/3 cup Extra Virgin Olive Oil\n1/2 cup Heavy Cream\n2 Tablespoons Butter\n1/4 cup Grated Parmesan (additional)\n12 ounces, weight Pasta (cavitappi, Fusili, Etc.)\n2 whole Tomatoes, Diced",
    url: "http://thepioneerwoman.com/cooking/2011/06/pasta-with-pesto-cream-sauce/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/06/pesto.jpg",
    cookTime: "PT10M",
    recipeYield: "8",
    datePublished: "2011-06-06",
    prepTime: "PT6M",
    description:
      "I finally have basil in my garden. Basil I can use. This is a huge development.     I had no basil during the winter. None. G...",
  },
  {
    name: "Herb Roasted Pork Tenderloin with Preserves",
    ingredients:
      "2 whole Pork Tenderloins\n Salt And Pepper, to taste\n8 Tablespoons Herbs De Provence (more If Needed\n1 cup Preserves (fig, Peach, Plum)\n1 cup Water\n1 Tablespoon Vinegar",
    url: "http://thepioneerwoman.com/cooking/2011/09/herb-roasted-pork-tenderloin-with-preserves/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/09/porkloin.jpg",
    cookTime: "PT15M",
    recipeYield: "12",
    datePublished: "2011-09-15",
    prepTime: "PT5M",
    description:
      "This was yummy. And easy. And pretty! And it took basically no time to make.     Before I share the recipe, I'll just say it:...",
  },
  {
    name: "Chicken Florentine Pasta",
    ingredients:
      "1 pound Penne\n4 whole Boneless, Skinless Chicken Breasts\n Salt And Pepper, to taste\n2 Tablespoons Butter\n2 Tablespoons Olive Oil\n4 cloves Garlic, Minced\n3/4 cups Dry White Wine\n3/4 cups Low-sodium Broth, More If Needed\n1 bag Baby Spinach\n2 cups Grape Tomatoes, Halved Lengthwise\n4 ounces, weight Parmesan Cheese, Shaved With Vegetable Peeler",
    url: "http://thepioneerwoman.com/cooking/2012/04/chicken-florentine-pasta/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/04/florentine.jpg",
    cookTime: "PT20M",
    recipeYield: "10",
    datePublished: "2012-04-23",
    prepTime: "PT10M",
    description:
      "I made this for a late lunch Saturday, and it absolutely completed me. It also absolutely completed my fourteen-year-old daug...",
  },
  {
    name: "Perfect Iced Coffee",
    ingredients:
      "1 pound Ground Coffee (good, Rich Roast)\n8 quarts Cold Water\n Half-and-half (healthy Splash Per Serving)\n Sweetened Condensed Milk (2-3 Tablespoons Per Serving)\n Note: Can Use Skim Milk, 2% Milk, Whole Milk, Sugar, Artificial Sweeteners, Syrups...adapt To Your Liking!",
    url: "http://thepioneerwoman.com/cooking/2011/06/perfect-iced-coffee/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/06/icedcoffee.jpg",
    cookTime: "PT",
    recipeYield: "24",
    datePublished: "2011-06-13",
    prepTime: "PT8H",
    description:
      "Iced coffee is my life. When I wake up, often around the time party animals on the west coast are just heading home, I start ...",
  },
  {
    name: "Easy Green Chile Enchiladas",
    ingredients:
      "1 whole Onion, Diced\n2 Tablespoons Butter\n1 can (15 Ounce) Green Enchilada Sauce\n2 cans (4 Ounce) Chopped Green Chilies\n12 whole Corn Tortillas\n2 cups Freshly Grated Cheddar (or Cheddar-jack) Cheese (or Any Cheese You'd Like)\n Sour Cream\n Salsa\n Pico De Gallo (optional)\n Guacamole (optional)\n Cilantro Leaves, Optional",
    url: "http://thepioneerwoman.com/cooking/2012/05/easy-green-chile-enchiladas/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/05/enchilada.jpg",
    cookTime: "PT10M",
    recipeYield: "4",
    datePublished: "2012-05-31",
    prepTime: "PT5M",
    description:
      "When I was in Albuquerque with Marlboro Man and the boys a month ago, I had a really fun book signing. Such incredibly nice a...",
  },
  {
    name: "Krispy Easter Eggs",
    ingredients:
      "4 Tablespoons Butter\n1 package (10 Ounces) Mini Marshmallows\n6 cups Rice Krispies\n Assorted Sprinkles\n Small Chocolate Easter Eggs\n Plastic Easter Eggs",
    url: "http://thepioneerwoman.com/cooking/2013/03/krispy-easter-eggs/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2013/03/DSC_9637.jpg",
    cookTime: "PT5M",
    recipeYield: "12",
    datePublished: "2013-03-25",
    prepTime: "PT20M",
    description:
      "Imagine the Easter Bunny laying an egg.     Wait. That\u2019s not anatomically possible.     And anyway, the Easter Bunny is a b...",
  },
  {
    name: "Patty Melts",
    ingredients:
      "1 stick Butter\n1 whole Large Onion, Halved And Sliced\n1-1/2 pound Ground Beef\n Salt And Pepper, to taste\n5 dashes Worcestershire Sauce\n8 slices Swiss Cheese\n8 slices Rye Bread",
    url: "http://thepioneerwoman.com/cooking/2012/08/patty-melts/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/08/pattymelt.jpg",
    cookTime: "PT25M",
    recipeYield: "4",
    datePublished: "2012-08-06",
    prepTime: "PT10M",
    description:
      "Who doesn't love a patty melt?     Well, besides vegetarians, people who don't like rye bread, people who don't eat onions, o...",
  },
  {
    name: "Yum. Doughnuts!",
    ingredients:
      " Doughnuts\n1-1/8 cup Whole Milk, Warm\n1/4 cup Sugar\n2-1/4 teaspoons (one Package) Instant Or Active Dry Yeast\n2 whole Large Eggs, Beaten\n1-1/4 stick Unsalted Butter, melted\n4 cups All-purpose Flour\n1/4 teaspoon Salt\n Shortening\n GLAZE\n3 cups Powdered Sugar\n1/2 teaspoon Salt\n1/2 teaspoon Vanilla\n1/2 cup Cold Water Or Milk",
    url: "http://thepioneerwoman.com/cooking/2012/08/yum-doughnuts/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/08/doughnut.jpg",
    cookTime: "PT2M",
    recipeYield: "18",
    datePublished: "2012-08-10",
    prepTime: "PT25M",
    description:
      "Note from PW: On tomorrow's Food Network episode, I make homemade glazed doughnuts for Marlboro Man, the kids, Josh, and Pete...",
  },
  {
    name: "Buttery Lemon Parsley Noodles",
    ingredients:
      "1 pound Pasta (fettuccine, Linguine, Angel Hair)\n4 Tablespoons Butter\n1/4 cup Finely Minced Parsley\n1 whole Lemon\n Salt And Pepper, to taste",
    url: "http://thepioneerwoman.com/cooking/2012/08/buttery-lemon-parsley-noodles/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/08/noodles.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2012-08-01",
    prepTime: "PT5M",
    description:
      "This is just a quick, easy side dish that is clean and fresh and knocks my ballet flats off. These noodles were actually part...",
  },
  {
    name: "Roast Chicken",
    ingredients:
      "1 whole Chicken, Rinsed And Patted Dry\n3/4 cups Butter, Softened\n3 whole Lemons\n4 sprigs Rosemary\n Salt And Pepper, to taste",
    url: "http://thepioneerwoman.com/cooking/2012/08/roast-chicken/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/08/roastchicken2.jpg",
    cookTime: "PT1H15M",
    recipeYield: "4",
    datePublished: "2012-08-13",
    prepTime: "PT10M",
    description:
      "There's nothing simpler than roast chicken.     And there are few things more delicious.     You can use this basic recipe an...",
  },
  {
    name: "Baked French Toast",
    ingredients:
      " FRENCH TOAST\n Butter, For Greasing\n1 loaf Crusty Sourdough Or French Bread\n8 whole Eggs\n2 cups Whole Milk\n1/2 cup Heavy Cream\n1/2 cup Sugar\n1/2 cup Brown Sugar\n2 Tablespoons Vanilla Extract\n Topping\n1/2 cup Flour\n1/2 cup Firmly Packed Brown Sugar\n1 teaspoon Cinnamon\n1/4 teaspoon Salt\n Freshly Grated Nutmeg, Optional\n1 stick Cold Butter, Cut Into Pieces\n Warm Syrup, For Serving\n Butter, For Serving\n1 cup Fresh Blueberries, For Serving",
    url: "http://thepioneerwoman.com/cooking/2012/08/baked-french-toast/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/08/bakedfrenchtoast.jpg",
    cookTime: "PT1H",
    recipeYield: "8",
    datePublished: "2012-08-18",
    prepTime: "PT15M",
    description:
      "On this morning's Food Network episode, I make (among other things) this beautiful, simple, glorious, easy, delectable, scrum...",
  },
  {
    name: "Yummy Slice-and-Bake Cookies",
    ingredients:
      "2-1/2 cups All-purpose Flour\n1 teaspoon Instant Coffee Granules\n1 teaspoon Baking Soda\n1 teaspoon Salt\n1 cup (2 Sticks) Salted Butter, Softened\n1-1/4 cup Packed Brown Sugar\n1/4 cup Granulated Sugar\n2 whole Eggs\n1 Tablespoon Vanilla\n2 Tablespoons Creamy Peanut Butter\n2 Tablespoons Nutella\n1/2 cup Very Finely Chopped Pecans\n3/4 cups M&amp;M's, Roughly Chopped",
    url: "http://thepioneerwoman.com/cooking/2012/08/yummy-slice-and-bake-cookies/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/08/slicebake.jpg",
    cookTime: "PT10M",
    recipeYield: "30",
    datePublished: "2012-08-15",
    prepTime: "PT15M",
    description:
      "I love slice-and-bake cookie dough because it reminds me of the times during my freshman year in college that my dorm friends...",
  },
  {
    name: "Yummy Grilled Zucchini",
    ingredients:
      "6 whole Zucchini (medium Sized)\n1/4 cup Olive Oil\n1 teaspoon Kosher Salt\n1 teaspoon Black Pepper\n3 whole Lemons, Zested\n1 teaspoon Kosher Salt (additional)\n Extra Olive Oil If Needed For Brushing",
    url: "http://thepioneerwoman.com/cooking/2012/08/grilled-zucchini-with-yummy-lemon-salt/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/08/zucc.jpg",
    cookTime: "PT20M",
    recipeYield: "8",
    datePublished: "2012-08-20",
    prepTime: "PT30M",
    description:
      "I love grilled vegetables more than anything on earth. Well, except my children. And my husband. And chocolate whipped cream ...",
  },
  {
    name: "Chocolate Covered S\u2019mores",
    ingredients:
      "16 whole Graham Cracker Squares (two Single Rectangular Pieces Still Stuck Together)\n1 container (7 Ounce) Marshmallow Creme\n1 whole Package Chocolate Almond Barn Or Other Melting Chocolate\n Chopped Nuts, Sprinkles, Etc.",
    url: "http://thepioneerwoman.com/cooking/2012/08/chocolate-covered-smores/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/08/smores.jpg",
    cookTime: "PT10M",
    recipeYield: "8",
    datePublished: "2012-08-29",
    prepTime: "PT20M",
    description:
      "When we went to Vail, Colorado to ski last spring, a few things happened:    1. I had the best time of my life.  2. I didn't ...",
  },
  {
    name: "T-Bone Steaks with Hotel Butter",
    ingredients:
      " HOTEL BUTTER\n2 sticks Salted Butter, Softened\n1/3 cup Finely Minced Parsley\n1 whole Lemon, Zested And Halved\n OPTIONAL: Finely Minced Garlic, Salt, Pepper, Any Mix Of Herbs, Crushed Red Pepper, Paprika...anything You Can Come Up With!\n Steaks\n4 whole Steaks (ribeye, T-bone, Filet)\n Salt And Pepper, to taste\n Butter, For Frying",
    url: "http://thepioneerwoman.com/cooking/2012/08/t-bone-steaks-with-hotel-butter/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/08/hotelbutter.jpg",
    cookTime: "PT5M",
    recipeYield: "4",
    datePublished: "2012-08-22",
    prepTime: "PT20M",
    description:
      "I love compound butter. I made some with berries last summer and slapped it on French toast. Lifechanging.     But that's ano...",
  },
  {
    name: "Mango Margaritas!",
    ingredients:
      "2 whole Limes\n2 Tablespoons Coarse Sugar (decorator's Sugar)\n2 jars (20 Ounce) Mango Chunks, Drained\n1-1/2 cup Tequila\n1-1/2 cup Triple Sec\n1/4 cup Sugar",
    url: "http://thepioneerwoman.com/cooking/2012/08/mango-margaritas/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/08/mango.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2012-08-31",
    prepTime: "PT10M",
    description:
      " I've got Mango Margaritas on the brain for three very important reasons:    1. It's one of my favorite recipes in my new coo...",
  },
  {
    name: "Tuscan Bean Soup with Shrimp",
    ingredients:
      "5 cloves Garlic, Minced\n1 whole Medium Onion, Diced\n3 cans (14.5 Ounce) Cans Great Norther Beans, Drained And Rinsed\n2 Tablespoons Olive Oil\n1 teaspoon Red Pepper Flakes\n2 teaspoons Dried Oregano\n1/4 cup Tomato Paste\n3/4 cups Dry White Wine\n1 can (28 Ounces) Whole Or Diced Tomatoes\n6 cups Low Sodium Chicken Broth\n1 bunch Kale (more If Desired)\n Plenty Of Torn Fresh Basil\n4 Tablespoons Butter\n1-1/2 pound Raw Shrimp, Peeled And Deveined\n1/4 cup Chopped Fresh Parsley\n Fresh Parmesan Shavings",
    url: "http://thepioneerwoman.com/cooking/2012/01/tuscan-bean-soup-with-shrimp/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/01/tuscan.jpg",
    cookTime: "PT45M",
    recipeYield: "8",
    datePublished: "2012-01-04",
    prepTime: "PT10M",
    description:
      "I'm Pioneer Woman. And I'm obsessed with soup.     This delicious take on the simple, classic Tuscan Bean Soup has a nice tan...",
  },
  {
    name: "Hoppin\u2019 John",
    ingredients:
      "4 Tablespoons Butter\n1 whole Large Onion, Diced\n4 cloves Garlic, Minced\n1 whole Green Bell Pepper, Diced\n2 stalks Celery, Diced\n4 cups Soaked Black-eyed Peas\n5 cups Low-sodium (or No-sodium) Chicken Broth\n1 whole Ham Hock\n Salt And Pepper, to taste\n Cayenne Pepper To Taste\n2 Tablespoons White Vinegar\n White Or Brown Rice, For Serving",
    url: "http://thepioneerwoman.com/cooking/2011/12/hoppin-john/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/12/hoppin.jpg",
    cookTime: "PT1H",
    recipeYield: "10",
    datePublished: "2011-12-30",
    prepTime: "PT6H",
    description:
      "I'm not a big believer in superstition, but for some reason I've always eaten black-eyed peas on New Year's Day. I figure sta...",
  },
  {
    name: "Turkey Bagel Burger",
    ingredients:
      "8 whole Everything Bagels\n4 Tablespoons Butter\n4 ounces, weight Goat Cheese (chevre) Or Cream Cheese\n2 Tablespoons Pesto (Basil Or Sun-dried Tomato)\n2 pounds Ground Turkey\n1 teaspoon Kosher Salt (more To Taste)\n Plenty Of Black Pepper\n8 dashes Worcestershire Sauce\n4 dashes Hot Sauce (more To Taste)\n1 whole Egg Yolk (optional)\n1 Tablespoon Canola Oil\n1 Tablespoon Butter\n4 whole Roma Tomatoes, Sliced\n3 whole Avocados, Sliced\n16 whole Large Basil Leaves",
    url: "http://thepioneerwoman.com/cooking/2012/01/turkey-bagel-burger/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/01/turkeybagelburger.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2012-01-11",
    prepTime: "PT10M",
    description:
      "I would like to state for the record that I don't go around making turkey burgers very often, because...let's face it. They'r...",
  },
  {
    name: "Perfect French Fries",
    ingredients:
      "5 pounds Russet Potatoes\n Vegetable Or Peanut Oil For Frying\n Sea Salt",
    url: "http://thepioneerwoman.com/cooking/2012/01/perfect-french-fries/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/01/fries.jpg",
    cookTime: "PT30M",
    recipeYield: "8",
    datePublished: "2012-01-13",
    prepTime: "PT3H",
    description:
      "These are the facts of the case and they are undisputed:    1. French fries are delicious.    2. French fries dipped in a mix...",
  },
  {
    name: "Apple, Pecan, and Blue Cheese Salad with Dried Cherries",
    ingredients:
      "12 ounces, weight Salad Greens (spring Mix)\n2 whole Apples, Cored And Sliced Very Thin\n1/2 cup Pecan Halves\n1/4 cup Dried Cherries\n6 ounces, weight Blue Cheese, Cut Into Chunks\n1 Tablespoon (heaping) Dijon Mustard\n1 Tablespoon Maple Syrup (more To Taste)\n1 teaspoon Apple Cider Vinegar (more To Taste)\n1/4 cup Olive Oil\n Salt And Pepper, to taste",
    url: "http://thepioneerwoman.com/cooking/2012/01/apple-pecan-and-blue-cheese-salad-with-dried-cherries/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/01/salad.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2012-01-16",
    prepTime: "PT15M",
    description:
      "I thought I'd follow up the french fry post with something slightly more redeeming. I made this salad a couple of weeks ago, ...",
  },
  {
    name: "Deep Dish Fruit Pizza",
    ingredients:
      "1-1/3 cup Shortening (may Substitute Butter)\n1-1/2 cup Sugar\n1 teaspoon Orange Zest\n1 teaspoon Vanilla\n2 whole Eggs\n8 teaspoons Whole Milk\n4 cups All-purpose Flour\n3 teaspoons Baking Powder\n1/2 teaspoon Salt\n2 jars (13 Ounces Each) Marshmallow Creme\n2 packages (8 Ounces Each) Cream Cheese\n Peaches\n Kiwi Fruit\n Blueberries\n Pears\n Raspberries\n Other Fruit Optional",
    url: "http://thepioneerwoman.com/cooking/2012/01/fruit-pizza/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/01/fruitpizza.jpg",
    cookTime: "PT15M",
    recipeYield: "24",
    datePublished: "2012-01-23",
    prepTime: "PT1H",
    description:
      "My sister-in-law Missy first introduced me to the concept of fruit pizza years and years ago, and here's how: she brought one...",
  },
  {
    name: "Bacon-Wrapped Scallops with Chili Butter",
    ingredients:
      "2 pounds Large Scallops\n1/2 pound Bacon, Cut Into Thirds Or Halves\n1 stick Butter\n2 teaspoons Chili Powder\n Dash Of Cayenne",
    url: "http://thepioneerwoman.com/cooking/2012/01/bacon-wrapped-scallops-with-chili-butter/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/01/scallops.jpg",
    cookTime: "PT20M",
    recipeYield: "8",
    datePublished: "2012-01-19",
    prepTime: "PT15M",
    description:
      "I made these beautiful, tasty little suckers before Christmas and am only just now recovering from the bliss so I can tell yo...",
  },
  {
    name: "Sausage-Kale Breakfast Strata",
    ingredients:
      "12 whole Eggs\n2-1/2 cups Half And Half (or Milk, If You Prefer)\n Salt And Pepper, to taste\n4 Tablespoons Minced Fresh Oregano (or Parsley, Basil, Etc.)\n1 loaf Crusty French Or Italian Bread, Cut Into Cubes\n2 pounds Breakfast Sausage Patties, Cooked And Cut Into Cubes\n1 bunch (large) Regular Kale, Torn Into Pieces\n Olive Oil, For Frying\n16 ounces, weight White Mushrooms, Halved\n2-1/2 cups Grated Monterey Jack Cheese",
    url: "http://thepioneerwoman.com/cooking/2012/01/sausage-kale-strata/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/01/strata.jpg",
    cookTime: "PT45M",
    recipeYield: "12",
    datePublished: "2012-01-25",
    prepTime: "PT30M",
    description:
      "I love make-ahead breakfast casseroles, also known as strata, also known as Breakfast Bread Pudding, also known as I Don't Ca...",
  },
  {
    name: "Spicy Stewed Beef with Creamy Cheddar Grits",
    ingredients:
      "2 Tablespoons Canola Oil\n2 Tablespoons Butter\n3 pounds Stew Meat Or Diced Chuck Roast\n1 can (11 Ounces) Chipotle Peppers In Adobo Sauce\n4 cups Low-sodium Beef Broth, More If Needed\n5 cloves Minced Garlic\n1 Tablespoon Cumin\n2 teaspoons Chili Powder\n1 whole Onion, Diced\n1 whole Red Bell Pepper\n3 whole Chilies (any Variety, Hot Or Mild)\n4 cups Stone Ground Grits\n6 cups Low Sodium Chicken (or Beef) Broth\n3 cups Water\n2 cups Half-and-half\n2 cups Grated Cheddar Cheese",
    url: "http://thepioneerwoman.com/cooking/2012/01/spicy-stewed-beef-with-creamy-cheddar-grits/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/01/stewedbeef.jpg",
    cookTime: "PT3H",
    recipeYield: "12",
    datePublished: "2012-01-30",
    prepTime: "PT20M",
    description:
      "My oh my, was this good. Ultra spicy, seriously tender stewed meat served over unbelievably creamy cheese grits. The spicines...",
  },
  {
    name: "Spicy Spinach-Stuffed Mushrooms",
    ingredients:
      "24 ounces, weight White Mushrooms\n1 Tablespoon Olive Oil\n1 Tablespoon Butter\n1 whole Medium Onion, Diced\n1/2 cup Panko Breadcrumbs\n Salt And Black Pepper To Taste\n8 ounces, weight Cream Cheese, Softened\n1/3 cup Sour Cream\n1/2 cup Grated Sharp Cheddar Cheese\n1/2 cup Grated Monterey Jack Or Farmer's Cheese\n1 package (small) Chopped Spinach, Thawed\n8 dashes Hot Sauce (I Used Choulula)",
    url: "http://thepioneerwoman.com/cooking/2012/02/spicy-spinach-stuffed-mushrooms/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/02/shrooms.jpg",
    cookTime: "PT25M",
    recipeYield: "8",
    datePublished: "2012-02-06",
    prepTime: "PT10M",
    description:
      "Garsh. Were these good. I made them last night on a whim. Amid all the wings and ranch and other Super Bowl food---including ...",
  },
  {
    name: "Pork Chops with Garlic and Wine",
    ingredients:
      "6 whole Pork Chops (medium-to-thin)\n2 Tablespoons Olive Oil\n2 Tablespoons Butter\n Salt And Pepper\n1-1/2 cup Red Wine\n1/2 cup Beef Broth (more If Needed)\n1 whole Bay Leaf\n1 Tablespoon Balsamic Vinegar\n18 whole Peeled Garlic Cloves\n1 Tablespoon Butter (additional)",
    url: "http://thepioneerwoman.com/cooking/2012/02/pork-chops-with-garlic-and-wine/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/02/pork.jpg",
    cookTime: "PT25M",
    recipeYield: "6",
    datePublished: "2012-02-08",
    prepTime: "PT5M",
    description:
      "This was really, really lovely.    I love pan sauces. Years and years ago, when my girls were still little petunias, this coo...",
  },
  {
    name: "Pots de Cr\u00e8me a l\u2019Orange",
    ingredients:
      "12 ounces, weight Semi-Sweet Chocolate Chips\n4 whole Eggs\n1 Tablespoon Grand Marnier, More To Taste\n1 dash Salt\n1 cup Very Hot Strong Coffee\n Fresh Whipped Cream, For Serving\n Thinly Sliced Orange Peel, For Garnish",
    url: "http://thepioneerwoman.com/cooking/2012/02/pots-de-creme-a-lorange/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/02/pots.jpg",
    cookTime: "PT",
    recipeYield: "12",
    datePublished: "2012-02-13",
    prepTime: "PT2H",
    description:
      "Note: It snowed overnight and I've been at the mercy of spotty internet today. Sorry for the chocolate delay!    This is a va...",
  },
  {
    name: "Chocolate Cookies with Toppings",
    ingredients:
      "2 sticks Salted Butter, Slightly Softened\n1 cup Powdered Sugar\n1 whole Egg\n2 teaspoons Vanilla Extract\n2-1/2 cups Flour\n1/2 cup Cocoa Powder\n3/4 teaspoons Salt\n4 ounces, weight White Almond Bark\n4 ounces, weight Chocolate Almond Bark\n DIPPING BAR\n Pistachios, Finely Chopped\n M &amp; M's, Slightly Chopped\n Toffee Bars, Chopped\n Assorted Nuts, Sprinkles, Candies",
    url: "http://thepioneerwoman.com/cooking/2012/02/chocolate-cookies-with-toppings/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/02/cookies.jpg",
    cookTime: "PT10M",
    recipeYield: "16",
    datePublished: "2012-02-16",
    prepTime: "PT2H",
    description:
      "I made these on my Food Network show last weekend, but because we had a lot of family things going on this week, I wasn't abl...",
  },
  {
    name: "Vegetarian Lettuce Wraps",
    ingredients:
      "2 teaspoons Peanut Or Olive Oil\n1 package (about 12-14 Oz. Size) Firm Tofu\n2 ears Corn (or 1 1/2 Cups Frozen Corn Kernels)\n1/4 teaspoon Chili Powder (more To Taste)\n1/4 cup Soy Sauce\n Romaine Lettuce Hearts\n2 whole Avocados, Sliced\n1 teaspoon Balsamic Vinegar (optional)",
    url: "http://thepioneerwoman.com/cooking/2012/02/vegetarian-lettuce-wraps/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/02/wraps.jpg",
    cookTime: "PT15M",
    recipeYield: "6",
    datePublished: "2012-02-22",
    prepTime: "PT5M",
    description:
      "Today is Ash Wednesday, the beginning of Lent, and I'd like to share this exceedingly meatless treat with you that I've been ...",
  },
  {
    name: "Pasta Puttanesca",
    ingredients:
      "8 ounces, weight Bucatini Or Spaghetti\n2 Tablespoons Olive Oil\n1/2 whole Red Onion, Sliced\n1-1/2 cup Grape Tomatoes, Halved\n3/4 cups Chicken Broth Or White Wine\n2 cloves Garlic\n4 whole Anchovy Filets\n1/2 cup (heaping) Assorted Pitted Olives\n12 whole Basil Leaves\n4 ounces, weight Good Parmesan Cheese",
    url: "http://thepioneerwoman.com/cooking/2012/02/pasta-puttanesca/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/02/puttanesca.jpg",
    cookTime: "PT20M",
    recipeYield: "6",
    datePublished: "2012-02-23",
    prepTime: "PT5M",
    description:
      "I love pasta puttanesca. Love it, love it, love it.     So yesterday, I made pasta puttanesca. Made it, made it, made it.    ...",
  },
  {
    name: "Chicken with Mustard Cream Sauce",
    ingredients:
      "4 whole Boneless, Skinless Chicken Breasts\n2 Tablespoons Olive Oil\n2 Tablespoons Butter\n3 whole Garlic Cloves, Minced\n1 cup Brandy (or White Wine If Preferred)\n1 Tablespoon (heaping) Dijon Mustard\n1 Tablespoon (heaping) Grainy Mustard\n1/4 cup (to 1/2) Heavy Cream\n1/4 cup (to 1/2) Chicken Broth\n Salt And Pepper, to taste",
    url: "http://thepioneerwoman.com/cooking/2012/02/chicken-with-mustard-cream-sauce/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/02/chickenmustard.jpg",
    cookTime: "PT20M",
    recipeYield: "8",
    datePublished: "2012-02-27",
    prepTime: "PT5M",
    description:
      "This delectable, tangy, strange, creamy, and bold pan sauce is one of my favorites, and I'm getting ready to tell you why. Ar...",
  },
  {
    name: "Pork Chops with Pineapple Fried Rice",
    ingredients:
      "1/2 whole Pineapple, Cut Into Spears And Skewered\n2 cups White Or Brown Rice, Cooked\n6 whole Pork Chops\n1 Tablespoon Butter\n1 Tablespoon Peanut Oil Or Canola Oil\n1 whole Large Onion, Sliced\n6 Tablespoons Soy Sauce (more To Taste, Or If More Liquid Is Needed)\n1 Tablespoon Rice Wine Vinegar\n2 Tablespoons Honey\n1 Tablespoon Sriracha, Or Other Hot Sauce\n Salt To Taste\n3 cloves Minced Garlic\n2 whole Eggs\n1 jar (small) Drained Pimentos\n1-1/2 cup Frozen Peas\n2 Tablespoons Soy Sauce (additional)",
    url: "http://thepioneerwoman.com/cooking/2012/03/pork-chops-with-pineapple-fried-rice/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/03/pineapple.jpg",
    cookTime: "PT30M",
    recipeYield: "6",
    datePublished: "2012-03-05",
    prepTime: "PT15M",
    description:
      "I cooked and feasted on this a few days before we left on our ski vacation, and because I've been so busy sharing all the res...",
  },
  {
    name: "New York Style Chopped Salad",
    ingredients:
      " Greens\n3 cups Mixed Salad Greens\n3 cups Bibb Lettuce\n8 whole Romaine Leaves\n FIXINS\n Grape Tomatoes, Halved\n Kidney Beans, Drained And Rinsed\n Garbanzo Beans, Drained  And Rinsed\n Pitted Mixed Olives\n Sliced  Or Diced Bell Pepper\n Hard Boiled Eggs, Peeled And Sliced\n Avocado, Sliced\n Mushrooms, Sliced\n Cheese, Grated\n Fresh Mozzarella, Cubed\n Cucumbers, Halved Then Sliced\n Asparagus, Blanched And Sliced Into Pieces\n Sunflower Seeds\n Sliced Almonds\n FOR THE DRESSING:\n Dressings Of Your Choice",
    url: "http://thepioneerwoman.com/cooking/2012/03/new-york-style-chopped-salad/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/03/choppedsalad.jpg",
    cookTime: "PT",
    recipeYield: "12",
    datePublished: "2012-03-12",
    prepTime: "PT45M",
    description:
      "I made a salad last Friday that was inspired by some scrumptious and enjoyable salad bar experiences I've had during recent t...",
  },
  {
    name: "Perfect Sunny-Side Up Eggs",
    ingredients:
      "3 whole Eggs\n4 Tablespoons Canola Oil (more Or Less As Needed For Size Of Skillet)",
    url: "http://thepioneerwoman.com/cooking/2012/03/perfect-sunny-side-up-eggs/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/03/eggs2.jpg",
    cookTime: "PT5M",
    recipeYield: "3",
    datePublished: "2012-03-09",
    prepTime: "PT2M",
    description:
      "On tomorrow's Food Network show, my best friend Hyacinth's boys come over to our house for a sleepover while my girls go to H...",
  },
  {
    name: "Salisbury Steak, Mashed Potatoes, and Peas",
    ingredients:
      " MEAT MIXTURE\n1-1/2 pound Lean Ground Beef\n1/2 cup Seasoned Breadcrumbs\n2 teaspoons Dry Mustard\n1 cube Beef Bouillon, Crumbed (or Powdered Beef Base)\n4 dashes Worcestershire Sauce\n1 Tablespoon Ketchup\n Salt And Pepper\n Gravy\n1 whole Onion, Halved And Thinly Sliced (or Diced If You Prefer)\n2 cups Beef Broth\n4 dashes Worcestershire (additional)\n1 Tablespoon Ketchup (additional)\n1 teaspoon Kitchen Bouquet (optional)\n1 teaspoon Corn Starch Mixed With A Little Beef Broth To Make A Thin Paste\n Salt And Pepper, to taste\n More Broth If Needed For Thinning\n Mashed Potatoes, For Serving\n Buttered Peas, For Serving\n1 Tablespoon Olive Oil, For Frying\n1 Tablespoon Butter, For Frying",
    url: "http://thepioneerwoman.com/cooking/2012/03/salisbury-steak-mashed-potatoes-and-peas/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/03/plate31.jpg",
    cookTime: "PT20M",
    recipeYield: "6",
    datePublished: "2012-10-26",
    prepTime: "PT10M",
    description:
      "I felt like making Salisbury Steak week before last. So guess what? I did! You can find out what sparked the craving here.   ...",
  },
  {
    name: "Seafood Pasta",
    ingredients:
      "2 Tablespoons Olive Oil\n2 Tablespoons Butter\n1 pound Scallops\n1 pound Shrimp\n5 cloves Garlic\n3/4 cups Dry White Wine\n28 ounces, weight Whole Or Diced Tomatoes\n Salt And Pepper, to taste\n1/4 teaspoon Crushed Red Pepper\n1/4 cup Heavy Cream, Warmed\n12 whole Basil Leaves Torn\n Chicken Broth, If Needed For Splashing In A Little Liquid\n12 ounces, weight Pasta (I Used Fusilli Bucati, But Any Kind Will Do!)",
    url: "http://thepioneerwoman.com/cooking/2012/03/seafood-pasta/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/03/seafoodpasta.jpg",
    cookTime: "PT30M",
    recipeYield: "12",
    datePublished: "2012-03-16",
    prepTime: "PT5M",
    description:
      "Since I left the ranch five days ago---first New York, now Baaaahhhhhston---I've been eating seafood as if my life depended o...",
  },
  {
    name: "Petite Vanilla Scones",
    ingredients:
      " SCONES\n3 cups All-purpose Flour\n2/3 cups Sugar\n5 teaspoons Baking Powder\n1/4 teaspoon Salt\n2 sticks (1/2 Pound) UNSALTED Butter, Chilled\n1 whole Large Egg\n3/4 cups Heavy Cream (more If Needed)\n2 whole Vanilla Beans\n GLAZE\n5 cups Powdered Sugar, Sifted\n1/2 cup Whole Milk, More If Needed For Thinning\n1 whole Vanilla Bean\n Dash Of Salt",
    url: "http://thepioneerwoman.com/cooking/2012/03/petite-vanilla-scones/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/03/scone.jpg",
    cookTime: "PT20M",
    recipeYield: "12",
    datePublished: "2010-04-08",
    prepTime: "PT20M",
    description:
      "On today's episode of the Food Network show, I have a breakfast theme going on. One of the things I decided to make were thes...",
  },
  {
    name: "Individual Cherry Almond Crisps",
    ingredients:
      " FOR THE CRUMB MIXTURE:\n1 cup All-purpose Flour\n1/2 cup Sugar\n1/2 cup Packed Brown Sugar\n1/2 teaspoon Cinnamon\n1 dash Nutmeg, Double This Amount If Desired\n1/4 teaspoon Salt\n1-1/2 stick Cold (salted) Butter, Cut Into Pieces\n1/2 cup Slivered Almonds\n FOR THE CHERRIES:\n4 bags (12 Oz. Size) Frozen Tart Cherries\n1/2 cup White Sugar\n1/4 cup Cornstarch\n2 teaspoons Almond Extract\n FOR THE WHIPPED CREAM:\n2 cups Heavy Cream\n2 Tablespoons Sugar",
    url: "http://thepioneerwoman.com/cooking/2012/03/individual-cherry-almond-crisps/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/03/cherrycrisp.jpg",
    cookTime: "PT45M",
    recipeYield: "8",
    datePublished: "2012-03-29",
    prepTime: "PT15M",
    description:
      "I love fruit crisp of any kind (my mom's peach crisp is my favorite) and I come by it honestly: My dad's favorite dessert is ...",
  },
  {
    name: "Scalloped Potatoes and Ham",
    ingredients:
      "3 pounds Russet Or Yukon Gold Potatoes, Washed Thoroughly\n2 Tablespoons Butter\n1 whole Yellow Onion, Diced\n3 cups Diced Ham\n1-1/2 cup Half-and-half\n1-1/2 cup Heavy Cream\n1/4 cup Flour\n Black Pepper To Taste\n1 cup Grated Cheddar Cheese\n1 cup Grated Monterey Jack Cheese\n Chopped Parsley (optional)",
    url: "http://thepioneerwoman.com/cooking/2012/04/scalloped-potatoes-and-ham/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/04/scalloped.jpg",
    cookTime: "PT1H",
    recipeYield: "12",
    datePublished: "2012-04-09",
    prepTime: "PT20M",
    description:
      "Happy Day-After-Easter! How was your weekend? Did you dye Easter eggs? Did you eat chocolate? Did you eat ham? What's your so...",
  },
  {
    name: "Simple Scrumptious Grilled Chicken + Grillin\u2019 Recipe Contest",
    ingredients:
      "6 whole Boneless, Skinless Chicken Breasts\n MARINADE:\n1/2 cup Balsamic Vinegar\n1 cup Olive Oil\n3 Tablespoons Brown Sugar\n2 Tablespoons Steak Seasoning (I Used Montreal)\n Sauce:\n1 cup Honey\n8 pieces Thick Cut Bacon, Diced\n3 Tablespoons Worcestershire Sauce\n1 Tablespoon Hot Sauce\n2 cans Bush\u2019s Sweet Mesquite Grillin\u2019 Beans",
    url: "http://thepioneerwoman.com/cooking/2012/04/simple-scrumptious-grilled-chicken-grillin-recipe-contest/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/04/scrumptious.jpg",
    cookTime: "PT15M",
    recipeYield: "6",
    datePublished: "2012-04-03",
    prepTime: "PT3H",
    description:
      "I said it yesterday: Summer's just around the corner. Time for me to work on my deep bronzy tan, fish my scuba suit out of th...",
  },
  {
    name: "It\u2019s Eggs Benedict Day!",
    ingredients:
      "3 whole English Muffins\n3 slices Canadian Bacon\n3 whole Eggs (plus 3 Egg Yolks)\n2 sticks Butter\n1 whole Lemon, Juiced\n Cayenne Pepper To Taste",
    url: "http://thepioneerwoman.com/cooking/2012/04/its-eggs-benedict-day/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/04/benedict.jpg",
    cookTime: "PT10M",
    recipeYield: "3",
    datePublished: "2012-04-16",
    prepTime: "PT15M",
    description:
      "It's Eggs Benedict Day! My favorite day of the year.    Okay, so it's my 48th favorite day of the year. But who's counting?  ...",
  },
  {
    name: "Oatmeal Whoopie Pies",
    ingredients:
      " Cookies:\n2 cups Brown Sugar\n1/2 cup Butter, Softened\n1/4 cup Shortening (Crisco)\n2 whole Eggs\n1/2 teaspoon Salt\n1 teaspoon Ground Cinnamon\n1 teaspoon Baking Powder\n3 Tablespoons Boiling Water\n1 teaspoon Baking Soda\n2-1/2 cups Flour\n2 cups Quick Oats\n FILLING OPTION #1\n Marshmallow Creme\n FILLING OPTION #2\n5 Tablespoons All-purpose Flour\n1 cup Milk\n1 teaspoon Vanilla\n1 cup Butter\n1 cup Granulated Sugar",
    url: "http://thepioneerwoman.com/cooking/2012/04/oatmeal-whoopie-pies/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/04/oatmealpie.jpg",
    cookTime: "PT10M",
    recipeYield: "18",
    datePublished: "2012-04-11",
    prepTime: "PT1H",
    description:
      "I made these sweet little numbers over the weekend, and they were gone within twenty-four hours. I won't go into detail about...",
  },
  {
    name: "Cuban Pork Chops + Recipe Contest Reminder!",
    ingredients:
      " FOR THE CHOPS:\n6 whole Bone-in Center Cut Pork Chops\n2 cups Orange Juice\n2 whole Limes, Juiced\n5 cloves Garlic, Minced\n2 teaspoons Cumin\n1/2 teaspoon Cayenne Pepper\n1 Tablespoon Dried Oregano\n1 whole Small Yellow Onion, Halved And Sliced Thin\n FOR THE SAUCE:\n1 bunch Cilantro\n1 bunch Parsley\n1 cup Olive Oil\n Salt And Pepper, to taste\n2 cans (15.8 Oz. Size) Bush\u2019s Black Bean Fiesta Grillin\u2019 Beans, To Serve",
    url: "http://thepioneerwoman.com/cooking/2012/04/cuban-pork-chops-recipe-contest-reminder/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/04/porkchops2.jpg",
    cookTime: "PT10M",
    recipeYield: "6",
    datePublished: "2012-04-17",
    prepTime: "PT6H",
    description:
      "The Bush's Grillin' Beans/Pioneer Woman Recipe Contest is well underway, and entries are still coming in! The recipes submitt...",
  },
  {
    name: "Cauliflower Soup",
    ingredients:
      "1 stick Butter, Divided\n1/2 whole Onion, Finely Diced\n1 whole Carrot Finely Diced\n1 stalk Celery, Finely Diced\n1 whole (to 2 Whole) Cauliflower Heads (roughly Chopped)\n2 Tablespoons Fresh Or Dried Parsley, Chopped\n2 quarts Low-sodium Chicken Broth Or Stock\n6 Tablespoons All-purpose Flour\n2 cups Whole Milk\n1 cup Half-and-half\n2 teaspoons To 4 Teaspoons Salt, To Taste\n1 cup (heaping) Sour Cream, Room Temperature",
    url: "http://thepioneerwoman.com/cooking/2012/04/cauliflower-soup-2/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/04/cauliflower.jpg",
    cookTime: "PT30M",
    recipeYield: "6",
    datePublished: "2009-01-05",
    prepTime: "PT30M",
    description:
      "I'm getting ready to spend the weekend cooking, and will have a whole crop of new recipes to post next week. I'm going to try...",
  },
  {
    name: "Bruschetta Chicken",
    ingredients:
      "1 Tablespoon Olive Oil\n5 cloves Garlic, Finely Minced\n1 pint Red Grape Tomatoes, Halved Lengthwise\n1 pint Yellow Grape Tomatoes, Halved Lengthwise\n1 Tablespoon Balsamic Vinegar\n16 whole Basil Leaves (chiffonade)\n Salt And Black Pepper To Taste (don't Oversalt)\n8 whole Boneless, Skinless Chicken Breasts, Cut In Half To Create Two Thin Breasts\n Salt And Pepper, to taste\n Freshly Grated Or Shaved Parmesan",
    url: "http://thepioneerwoman.com/cooking/2012/04/bruschetta-chicken/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/04/brusch.jpg",
    cookTime: "PT10M",
    recipeYield: "8",
    datePublished: "2012-04-25",
    prepTime: "PT1H",
    description:
      "I had a group of people over for dinner last week, and I made an enormous amount of bruschetta for them to munch on when they...",
  },
  {
    name: "Shrimp Tacos",
    ingredients:
      " Shrimp\n2 Tablespoons Canola Oil\n1-1/2 pound Shrimp, Peeled And Deveined, Tails Removed\n1 can (6 Ounces Approx) Mexican Tomato Sauce Or Enchilada Sauce\n1/2 teaspoon Cumin\n Slaw:\n1/2 head Cabbage, Sliced Thin\n1/2 head Purple Cabbage, Sliced Thin\n1 whole Jalapeno, Chopped\n1/2 cup Whole Milk\n1/2 cup Mayonnnaise\n1 teaspoon White Vinegar\n1 Tablespoon Sugar\n1/4 teaspoon Salt\n1/4 teaspoon Cayenne Pepper\n1/2 bunch Cilantro, Roughly Chopped\n EXTRAS:\n16 whole Corn Tortillas, Warmed\n Pico De Gallo\n Avocado Slices\n Lime Wedges",
    url: "http://thepioneerwoman.com/cooking/2012/04/shrimp-tacos/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/04/shrimptacos.jpg",
    cookTime: "PT10M",
    recipeYield: "8",
    datePublished: "2012-04-30",
    prepTime: "PT15M",
    description:
      "I made these a couple of weeks ago because I had a wicked craving for fish tacos and all I had on hand was shrimp. So I made ...",
  },
  {
    name: "Maple Glazed Chicken Kabobs with Sweet Jalapeno Salsa",
    ingredients:
      "6 whole 6-7 Ounce Chicken Breasts\n1/2 cup Maple Syrup\n1/4 cup Soy Sauce\n1/4 cup Pineapple Juice\n1/2 whole Pineapple, Finely Diced\n2 whole Jalapeno, Minced\n1 bunch (small) Cilantro, Roughly Chopped\n1 whole Small Red Onion, Diced\n1 teaspoon Rice Wine Vinegar (or White Vinegar)\n1 Tablespoon Sugar\n1/2 teaspoon Salt\n Black Pepper To Taste\n2 cans Bush's Bourbon And Brown Sugar Grillin' Beans",
    url: "http://thepioneerwoman.com/cooking/2012/05/maple-glazed-chicken-kebabs-with-sweet-jalapeno-salsa/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/05/kabob.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2012-05-02",
    prepTime: "PT15M",
    description:
      "The Bush's Grillin' Beans/Pioneer Woman Recipe Contest is nearly closed. I'm getting tremendously excited for the big cookout...",
  },
  {
    name: "Bruschetta Panini (and More!)",
    ingredients:
      "2 Tablespoons Olive Oil\n5 cloves Garlic, Finely Minced\n1 pint Red Grape Tomatoes, Halved Lengthwise\n1 pint Yellow Grape Tomatoes, Halved Lengthwise\n1 Tablespoon Balsamic Vinegar\n16 whole Basil Leaves (chiffonade)\n Salt And Pepper To Taste (don't Oversalt!)\n1 whole Baguette\n8 Tablespoons Butter",
    url: "http://thepioneerwoman.com/cooking/2012/05/bruschetta-panini-and-more/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/05/bruschettapanini.jpg",
    cookTime: "PT10M",
    recipeYield: "12",
    datePublished: "2012-01-09",
    prepTime: "PT20M",
    description:
      "Here are a couple more things you can do with leftover bruschetta topping, also known as One of the Best Things on Earth.    ...",
  },
  {
    name: "Chocolate Chip Caramel Ice Cream Sundae",
    ingredients:
      "2 sticks Butter, Softened\n1 cup Brown Sugar\n1/2 cup Sugar\n2 whole Eggs\n2 teaspoons Vanilla\n2-1/4 cups Flour\n1 teaspoon (heaping) Instant Coffee Granules\n1 teaspoon Baking Soda\n1-1/2 teaspoon Salt\n8 ounces, weight Chocolate Chips Or Chocolate Chunks (more To Taste!)\n Ice Cream, Flavor Of Your Choice\n Hot Fudge, For Drizzling\n Caramel Sauce, For Drizzling\n Whipped Cream\n Maraschino Cherries",
    url: "http://thepioneerwoman.com/cooking/2012/05/chocolate-chip-caramel-ice-cream-sundae/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/05/zigzag.jpg",
    cookTime: "PT18M",
    recipeYield: "12",
    datePublished: "2012-05-07",
    prepTime: "PT10M",
    description:
      "A few weeks ago, after an away soccer game, my daughter and her best friend, who happens to be my best friend Hyacinth's daug...",
  },
  {
    name: "Monster BLT",
    ingredients:
      "8 slices Thick-cut Bacon, Cooked Till Slightly Crisp\n3 slices Marbled Rye Bread, Toasted\n3 Tablespoons Mayonnaise\n2 teaspoons Adobo Sauce From Chipotle Peppers, More To Taste\n2 whole Roma Tomatoes, Sliced Thick\n4 whole Green Leaf Lettuce Leaves, Washed\n Salt And Pepper\n Optional Ingredients: Cheese Slices, Avocado, Red Onion Slices",
    url: "http://thepioneerwoman.com/cooking/2012/05/monster-blt/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/05/monsterblt.jpg",
    cookTime: "PT20M",
    recipeYield: "2",
    datePublished: "2012-05-09",
    prepTime: "PT5M",
    description:
      "I made this a couple of weeks ago. And suddenly, everything in my life made sense again.    Who doesn't love a BLT?     See? ...",
  },
  {
    name: "Cornmeal Pancakes with Blackberry Syrup",
    ingredients:
      " Pancakes\n1-1/2 cup (scant) All-purpose Flour\n1-1/2 cup Heaping Yellow Cornmeal\n1/2 teaspoon Salt\n3 Tablespoons Baking Powder\n4 Tablespoons Sugar\n2-1/4 cups Whole Milk (more If Needed)\n2 whole Large Eggs\n3 teaspoons Vanilla\n4 Tablespoons Butter, Melted\n Blackberry Syrup\n1 pint Blackberries\n1 cup Sugar\n1/2 cup Water\n2 Tablespoons Cornstarch\n Extra Butter For Serving\n Maple Or Pancake Syrup For Serving (optional)",
    url: "http://thepioneerwoman.com/cooking/2012/05/cornmeal-pancakes-with-blackberry-syrup/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/05/cornmealpancakes2.jpg",
    cookTime: "PT15M",
    recipeYield: "4",
    datePublished: "2012-05-14",
    prepTime: "PT15M",
    description:
      "There's not much in the world that isn't made better by cornmeal. It adds graininess to muffins and breads, it adds flavor an...",
  },
  {
    name: "Barbecue Chicken Sandwiches",
    ingredients:
      "1 whole Cut Up Fryer Chicken\n Salt And Pepper, to taste\n2 Tablespoons Canola Oil\n1 bottle (large) Barbecue Sauce\n1 whole Onion, Sliced\n8 whole Cloves Garlic (more To Taste)\n Slaw:\n1/2 head Cabbage, Sliced Thin\n1/2 head Purple Cabbage, Sliced Thin\n1/2 cup Whole Milk\n1/2 cup Mayonnaise\n1 teaspoon White Vinegar\n1 Tablespoon Sugar\n1/4 teaspoon Salt\n1/4 teaspoon Cayenne Pepper\n1 bunch Cilantro, Roughly Chopped",
    url: "http://thepioneerwoman.com/cooking/2012/05/barbecue-chicken-sandwiches/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/05/bbqchicken.jpg",
    cookTime: "PT2H",
    recipeYield: "8",
    datePublished: "2012-05-17",
    prepTime: "PT10M",
    description:
      "This is an unusual recipe on The Pioneer Woman Cooks, in that the detailed step-by-step photos don't begin until halfway thro...",
  },
  {
    name: "Grillin\u2019 Recipe Contest Winners!",
    ingredients:
      "4 whole Ribeye, Hanger, Flat Iron, Or Strip Steaks\n1/2 teaspoon Ground Nutmeg\n1/2 teaspoon Ground Cumin\n1 teaspoon Ground Cinnamon\n1 teaspoon Ground Ginger\n2 Tablespoons Chili Powder\n1/2 teaspoon Ground Turmeric\n2 Tablespoons Garlic Salt\n1 cup Olive Oil\n2 cans Bush's Grillin Beans Steakhouse Recipe",
    url: "http://thepioneerwoman.com/cooking/2012/05/grillin-recipe-contest-winners/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/05/bushs41.jpg",
    cookTime: "PT5M",
    recipeYield: "4",
    datePublished: "2012-05-17",
    prepTime: "PT10M",
    description:
      "Before I share my fourth and final grilling recipe, I\u2019m busting at the seams to announce the winners of the Bush\u2019s Grilli...",
  },
  {
    name: "Tortilla Rollups (aka \u201cPrairie Sushi\u201d)",
    ingredients:
      "8 ounces, weight Cream Cheese, Softened\n1 Tablespoon Chopped Green Onions Or Chives\n1 Tablespoon Minced Fresh Parsley\n8 whole Basil Leaves, Chopped (or Chiffonade)\n Salt And Pepper, to taste\n1 teaspoon Fresh Lemon Juice\n6 whole Taco Sized Flour Tortillas\n1/2 pound Shaved Turkey\n3 whole Carrots, Peeled And Jullienned\n1 whole Cucumber, Seeds Scraped Out And Julienned\n3 leaves Green Leaf Lettuce, Spine Removed\n2 whole Avocados, Sliced",
    url: "http://thepioneerwoman.com/cooking/2012/05/tortilla-rollups/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/05/rollups.jpg",
    cookTime: "PT",
    recipeYield: "6",
    datePublished: "2012-05-21",
    prepTime: "PT20M",
    description:
      "The first time I ever had a tortilla rollup was in the nineties. My new-friend-at-the-time Hyacinth had made a bunch of the l...",
  },
  {
    name: "Pasta Carbonara",
    ingredients:
      "12 ounces, weight Pasta, Any Variety\n8 pieces Thick Cut Bacon (diced Small)\n1/2 whole Medium Onion, Diced Small\n2 cloves Garlic, Minced\n3 whole Eggs\n3/4 cups Finely Grated Parmesan\n3/4 cups Heavy Cream\n Salt &amp; Plenty Of Black Pepper\n1/2 cup Peas",
    url: "http://thepioneerwoman.com/cooking/2012/05/pasta-carbonara/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/05/carbonara.jpg",
    cookTime: "PT20M",
    recipeYield: "6",
    datePublished: "2012-05-29",
    prepTime: "PT5M",
    description:
      "I can't eat, think about, dream about, or even remotely consider Pasta Carbonara without thinking of Heartburn, the Meryl Str...",
  },
  {
    name: "Creamy Lemon Basil Potato Salad",
    ingredients:
      "1 bag (24-28 Ounce) Small Potatoes (I Used Honey Gold)\n2 whole Lemons, Juiced\n3 Tablespoons Olive Oil\n1/2 cup Mayonnaise\n Salt And Pepper, to taste\n1 Tablespoon Prepared Pesto\n1/4 cup Pine Nuts\n Small Basil Leaves",
    url: "http://thepioneerwoman.com/cooking/2012/06/creamy-lemon-basil-potato-salad/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/06/potatosalad.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2012-06-08",
    prepTime: "PT10M",
    description:
      "I cooked most of the day yesterday, and here's how I started the experience: Pulled approximately forty things out of the fri...",
  },
  {
    name: "The Best Spinach Artichoke Dip Ever",
    ingredients:
      "3 Tablespoons Butter\n4 Tablespoons Garlic, Minced\n1 bag Spinach\n Salt And Pepper, to taste\n2 cans Artichoke Hearts, Rinsed And Drained\n3 Tablespoons Butter (additional)\n3 Tablespoons Flour\n1-1/2 cup Whole Milk (more If Needed)\n1 package (8 Ounce) Softened Cream Cheese\n1/2 cup Crumbled Feta\n1/2 cup Grated Parmesan\n3/4 cups Grated Pepper Jack Cheese\n1/4 teaspoon Cayenne\n Extra Grated Pepper Jack\n Pita Wedges, Tortilla Chips, Crackers",
    url: "http://thepioneerwoman.com/cooking/2012/06/the-best-spinach-artichoke-dip-ever/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/06/spinachartichoke.jpg",
    cookTime: "PT25M",
    recipeYield: "16",
    datePublished: "2012-06-11",
    prepTime: "PT5M",
    description:
      "I made this last week. Boy, was it ever good.     I love spinach artichoke dip. Call me Ms. 1994, okay? But I can't help it. ...",
  },
  {
    name: "Potato Skins",
    ingredients:
      "8 whole Russet Potatoes\n4 Tablespoons Canola Oil\n2 Tablespoons Butter\n Salt To Taste\n1-1/2 cup Grated Cheddar Cheese\n8 slices Thick Cut Peppered Bacon, Fried Until Almost Crisp And Chopped\n2 whole Green Onions, Sliced\n1/2 cup Sour Cream",
    url: "http://thepioneerwoman.com/cooking/2012/06/potato-skins/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/06/potatoskins.jpg",
    cookTime: "PT45M",
    recipeYield: "12",
    datePublished: "2012-06-18",
    prepTime: "PT5M",
    description:
      "I love potato skins because they remind me of 1983. Or was that 1984? Or was that 1982? Or was that 1985? Or was that...    S...",
  },
  {
    name: "The Best Macaroni Salad Ever",
    ingredients:
      "4 cups Elbow Macaroni\n3 whole Roasted Red Peppers, Chopped (more To Taste, Can Also Use Pimentos)\n1/2 cup Black Olives, Chopped Fine\n6 whole Sweet/spicy Pickle Slices, Diced (about 1/2 Cup Diced)\n3 whole Green Onions, Sliced (white And Dark Green Parts)\n1/2 cup Mayonnaise\n1 Tablespoon Red Wine Or Distilled Vinegar\n3 teaspoons Sugar, More Or Less To Taste\n1/4 teaspoon Salt, More To Taste\n Plenty Of Black Pepper\n1/4 cup Milk (more If Needed)\n Splash Of Pickle Juice (spicy Sweet Pickles)\n Extra Pickle Juice To Taste",
    url: "http://thepioneerwoman.com/cooking/2012/06/the-best-macaroni-salad-ever/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/06/macsalad.jpg",
    cookTime: "PT15M",
    recipeYield: "12",
    datePublished: "2012-06-19",
    prepTime: "PT10M",
    description:
      "I love, love, love, adore, and love macaroni salad. I'm also picky, picky, picky, particular, and picky about macaroni salad....",
  },
  {
    name: "Pineapple Fruit Bowls",
    ingredients:
      "1 whole Pineapple, Cut In Half Lengthwise, Juice Reserved\n1/2 cup Honeydew Melon Chunks\n1/2 cup Cantaloupe Chunks\n1/3 cup Blueberries\n1/3 cup Red Grapes\n1/2 cup Pineapple, Chunks\n1 Tablespoon Honey, More Or Less To Taste\n Mint Leaves, For Garnish (optional)",
    url: "http://thepioneerwoman.com/cooking/2012/06/pineapple-fruit-bowl/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/06/fruit.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2012-06-22",
    prepTime: "PT15M",
    description:
      "I just realized something. Several of my recipes over the past month or so have been cold ones.     What does it all mean?   ...",
  },
  {
    name: "Easy Calzones",
    ingredients:
      "16 whole Frozen, Unrisen Dinner Rolls (I Use Rhodes) Note: Can Also Use Frozen Bread Loaves.\n1 Tablespoon Butter\n1 whole Medium Onion, Diced\n1 pound Breakfast Or Italian Sausage\n1/2 teaspoon Italian Seasoning\n1/4 teaspoon Red Pepper Flakes\n15 ounces, fluid Whole Milk Ricotta Cheese\n1/2 cup Grated Parmesan Cheese\n1-1/2 cup Grated Mozzarella Cheese\n2 whole Eggs\n1/2 teaspoon Salt\n Black Pepper To Taste\n2 Tablespoons Chopped Fresh Parsley\n Marinara Sauce, For Serving\n1 whole Egg Beaten",
    url: "http://thepioneerwoman.com/cooking/2012/06/easy-calzones/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/06/calzone21.jpg",
    cookTime: "PT20M",
    recipeYield: "8",
    datePublished: "2012-06-25",
    prepTime: "PT3H",
    description:
      "What's the difference between a calzone and a pizza pocket? This is one of the mysteries of life I hope to one day know the a...",
  },
  {
    name: "Steak Fingers with Gravy",
    ingredients:
      "2 pounds Tenderized Round Steak Or Cube Steak, Cut Into 1-inch Strips\n1 cup Flour\n1 teaspoon Seasoned Salt\n1/2 teaspoon Black Pepper\n1/4 teaspoon Cayenne\n3 whole Eggs\n1 cup Milk\n Canola Oil And Butter For Frying\n2 cups Milk (additional)\n Salt And Pepper, to taste",
    url: "http://thepioneerwoman.com/cooking/2012/07/steak-fingers-with-gravy/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/07/steakfingers.jpg",
    cookTime: "PT20M",
    recipeYield: "6",
    datePublished: "2012-07-09",
    prepTime: "PT20M",
    description:
      "When my nephews Nic and Stu came to the ranch to visit a few weeks ago, they worked cattle, built fence, hauled hay, mowed, w...",
  },
  {
    name: "Strawberry Sparkle Cake",
    ingredients:
      " Angle Food Cake\n15 whole Egg Whites, At Room Temperature\n1 teaspoon Cream Of Tartar\n1-1/2 cup Plus 2 Tablespoons Sugar, Sifted Three Times\n1 cup Cake Flour\n1/4 teaspoon Salt\n1 teaspoon Vanilla\n Filling\n1 package (3 Oz.) Strawberry Jello\n2-1/2 cups Boiling Water\n1 package (1 Pound) Frozen Sliced Strawberries\n Icing\n1-1/2 cup Heavy Cream\n2 Tablespoons Sugar",
    url: "http://thepioneerwoman.com/cooking/2012/07/strawberry-sparkle-cake/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/07/sparkle.jpg",
    cookTime: "PT40M",
    recipeYield: "12",
    datePublished: "2012-07-02",
    prepTime: "PT25M",
    description:
      "Get ready to have some fun!    I made this cake yesterday for the first time, after having flirted with it for weeks. My fath...",
  },
  {
    name: "Chocolate Mint Brownie Bites",
    ingredients:
      "50 whole Andes Mints\n1 stick 1/2 Cup Butter, Softened\n1 cup Sugar\n2 ounces, weight Unsweetened Chocolate\n2 whole Eggs\n3/4 cups All-purpose Flour\n1/4 teaspoon Mint Extract\n1 Tablespoon Butter\n1 ounce, weight Bittersweet Chocolate, Chopped Fine",
    url: "http://thepioneerwoman.com/cooking/2012/07/chocolate-mint-brownie-bites/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/07/browniebites1.jpg",
    cookTime: "PT15M",
    recipeYield: "18",
    datePublished: "2012-07-23",
    prepTime: "PT20M",
    description:
      "I didn't know what to call these things.     Mint Brownie Bites didn't seem descriptive enough.     Chocolate Mint Brownie Bi...",
  },
  {
    name: "Huevo in the Hole",
    ingredients:
      "3 whole Corn Tortillas\n2 Tablespoons Butter\n1 whole Egg\n Salt And Pepper, to taste\n Salsa\n Sour Cream\n Pico De Gallo (optional)\n Avocado Slices (optional)",
    url: "http://thepioneerwoman.com/cooking/2012/07/huevo-in-the-hole/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/07/DSC_2139.jpg",
    cookTime: "PT3M",
    recipeYield: "1",
    datePublished: "2012-07-26",
    prepTime: "PT2M",
    description:
      "I made mini tacos last night. Making mini tacos, at least the way I do it, starts with using a biscuit cutter and cutting cir...",
  },
  {
    name: "Low-Carb Burgers",
    ingredients:
      "2 pounds Ground Chuck\n1 teaspoon Kosher Salt\n1/2 teaspoon Black Pepper\n5 dashes Worcestershire Sauce\n2 Tablespoons Butter\n1/4 cup Mayonnaise\n1 Tablespoon Dijon Mustard\n2 dashes Worcestershire Sauce\n2 whole Avocados, Sliced\n1 whole Tomatoes, Sliced\n1/4 whole Thinly Sliced Red Onion\n1 head Iceberg, Green Leaf, Or Butter Lettuce\n Optional Toppings: Chopped Pickles, Feta Cheese, Cilantro, Pico De Gallo",
    url: "http://thepioneerwoman.com/cooking/2012/07/low-carb-burgers/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/07/lowcarb.jpg",
    cookTime: "PT15M",
    recipeYield: "4",
    datePublished: "2012-07-30",
    prepTime: "PT10M",
    description:
      "A few years ago, I went on a low-carb kick in an attempt to shed some baby weight, some back fat, some jiggle, and some rotun...",
  },
  {
    name: "Hot &amp; Spicy Italian Drip Beef",
    ingredients:
      "2 Tablespoons Olive Oil\n2 whole Chuck Roasts (2 1/2 To 3 Pounds Each)\n Salt And Pepper\n32 ounces, fluid Beef Stock\n1 can 28 Ounce Crushed Tomatoes\n1 jar (16 Ounce) Pepperoncinis, With Juice\n1 jar (16 Ounce) Hot Cherry Peppers, Drained\n2 jars (4 Ounces Each) Pimentos\n1 Buttered, Toasted Rolls (optional)\n1 Provolone OR Mozzarella Cheese",
    url: "http://thepioneerwoman.com/cooking/2012/09/hot-spicy-italian-drip-beef/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/09/dripbeef.jpg",
    cookTime: "PT4H",
    recipeYield: "16",
    datePublished: "2012-09-04",
    prepTime: "PT5M",
    description:
      "This is a yummy play on the old drip beef recipe my friend Hy shared with me years ago, and I made it last week as I was usin...",
  },
  {
    name: "I Love Ya, Tomorrow!",
    ingredients:
      " Cake\n2 cups Sugar\n1 cup Vegetable Oil\n4 whole Eggs\n2 cups All-purpose Flour, Plus More For Dusting\n1 teaspoon Baking Powder\n1 teaspoon Baking Soda\n1 teaspoon Ground Cinnamon\n1/2 teaspoon Salt\n2 cups Grated Carrots\n Butter, For Greasing\n Icing\n1 stick Butter, Softened\n1 package (8 Ounce) Cream Cheese, Softened\n1 pound Powdered Sugar\n2 teaspoons Vanilla\n1 cup Pecans, Chopped Really Finely",
    url: "http://thepioneerwoman.com/cooking/2012/09/i-love-ya-tomorrow/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/09/sloppyjoes.jpg",
    cookTime: "PT45M",
    recipeYield: "12",
    datePublished: "2012-09-14",
    prepTime: "PT20M",
    description:
      "I'm never sure if you would like for me to post the recipes for the upcoming Food Network episode each week.     Oh, wait a m...",
  },
  {
    name: "Surf &amp; Turf Cajun Pasta",
    ingredients:
      "4 whole 6-ounce Beef Filet Steaks 1 1/2 Inches Thick  (or Any Small/petite Steak)\n Cajun Seasoning\n2 Tablespoons Butter\n3 Tablespoons Olive Oil\n1 pound Jumbo Shrimp, Deveined &amp; Shells Removed\n1 whole Small Red Onion, Halved And Sliced\n1 whole Green Bell Pepper, Seeded, Halved, And Sliced\n1 whole Red Bell Pepper, Seeded, Halved, And Sliced\n3 cloves Garlic, Minced\n1/2 cup White Wine\n1-1/2 cup Low-sodium Chicken Broth (more To Taste)\n3/4 cups Heavy Cream\n1/2 cup Parmesan Cheese, Grated\n2 whole Tomatoes, Diced\n Minced Parsley, To Taste\n1 pound Fettuccine, Rigatoni, Or Other Noodle",
    url: "http://thepioneerwoman.com/cooking/2012/09/surf-turf-cajun-pasta/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/09/cajun3.jpg",
    cookTime: "PT25M",
    recipeYield: "4",
    datePublished: "2012-09-10",
    prepTime: "PT20M",
    description:
      "*SPOILER ALERT*    Are you ready?    Here goes. Marlboro Man loved this dish.    And I realize this information likely doesn'...",
  },
  {
    name: "Spaghetti Sauce",
    ingredients:
      "5 pounds Ground Beef (I Used Ground Round)\n3 Tablespoons Olive Oil\n2 whole Large Yellow Onions, Diced\n2 whole Green Bell Pepper, Seeded And Diced\n6 cloves Garlic, Minced\n1 cup White Wine (or Low Sodium Beef Broth If You Prefer)\n2 cans 28 Ounce Crushed Tomatoes\n1 can (14 Ounce) Crushed Tomatoes\n1 can (small, 4-ounce) Tomato Paste\n1 jar Good Storebought Marinara Sauce (can Use Another Jar If You Like The Sauce To Be More Saucy Than Meaty)\n1 teaspoon Ground Oregano\n1 teaspoon Ground Thyme\n4 whole Bay Leaves\n2 Tablespoons Sugar\n2 teaspoons Kosher Salt\n1/2 teaspoon Crushed Red Pepper (optional)\n1/4 cup Finely Minced Fresh Parsley (or 3 Tablespoons Parsley Flakes), More To Taste\n1 whole Rind From One Wedge Parmesan (optional)\n1/2 cup Grated Parmesan Cheese (optional)\n2 pounds Spaghetti, Cooked Al Dente And Tossed With Olive Oil\n Extra Minced Parsley, For Serving\n Extra Parmesan Cheese, For Serving",
    url: "http://thepioneerwoman.com/cooking/2012/09/spaghetti-sauce/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/09/pasghetti.jpg",
    cookTime: "PT1H",
    recipeYield: "18",
    datePublished: "2012-09-19",
    prepTime: "PT20M",
    description:
      "A-spaghetti without a-cheese is like a-kiss without a-squeeze!    An Italian waiter at Sardi's in New York City said that to ...",
  },
  {
    name: "Italian Sloppy Joes",
    ingredients:
      " Leftover Spaghetti Sauce\n Thick Slices Of Garlic Bread (either Storebought Or Homemade)\n Mozzarella Cheese Slices\n Minced Fresh Parsley",
    url: "http://thepioneerwoman.com/cooking/2012/09/italian-sloppy-joes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/09/DSC_2464.jpg",
    cookTime: "PT10M",
    recipeYield: "1",
    datePublished: "2012-09-19",
    prepTime: "PT",
    description:
      "I promise my next cooking post will have nothing to do with spaghetti sauce. But for now, because I presented my spaghetti sa...",
  },
  {
    name: "Granola Bars",
    ingredients:
      "6 cups Rolled Oats (not Quick Oats)\n4 Tablespoons Butter, Melted, Plus More For Greasing\n1/4 cup Vegetable Or Canola Oil\n1 teaspoon Salt\n1 cup Brown Sugar\n1/2 cup Honey\n1/4 cup Apple Juice\n1/4 cup Molasses\n3 teaspoons Vanilla Extract\n1-1/2 cup Rice Krispies\n1 cup Wheat Germ\n1/2 cup Finely Chopped Pecans\n1/4 cup Roughly Chopped Almonds\n8 ounces, weight Milk Chocolate Or Chocolate Almond Bark, Melted (optional)",
    url: "http://thepioneerwoman.com/cooking/2012/09/granola-bars/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/09/granolabars.jpg",
    cookTime: "PT1H",
    recipeYield: "16",
    datePublished: "2012-09-24",
    prepTime: "PT15M",
    description:
      "Granola bars are my life. I never knew that until just now.     It's fun to make granola bars. It's so fun, I made them on on...",
  },
  {
    name: "Pepperoni Pizza Burgers",
    ingredients:
      "1-1/2 pound Ground Beef\n1/2 pound Italian Sausage ( A Little More Is Fine!)\n1/2 teaspoon Italian Seasoning\n8 slices Mozzarella Or Provolone Cheese\n Pepperoni Slices\n8 Tablespoons Jarred Marinara Sauce\n Grated Parmesan Cheese\n4 whole Kaiser Rolls Or Good Hamburger Buns",
    url: "http://thepioneerwoman.com/cooking/2012/10/pepperoni-pizza-burgers/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/09/pizzaburger.jpg",
    cookTime: "PT10M",
    recipeYield: "4",
    datePublished: "2012-10-01",
    prepTime: "PT5M",
    description:
      "I made pizza burgers last week and all I can say is that I've never been more violently struck with the need to go to food-re...",
  },
  {
    name: "Nutella Krispie Treats",
    ingredients:
      "6 Tablespoons Salted Butter\n10 ounces, weight Large Marshmallows\n1/8 teaspoon Salt\n1/3 cup Nutella\n6 cups Rice Krispies\n1-1/2 cup Miniature Marshmallows\n1 cup Pecans, Finely Chopped\n5 ounces, weight Semi Sweet Chocolate Melted",
    url: "http://thepioneerwoman.com/cooking/2012/10/nutella-krispie-treats/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/10/treats.jpg",
    cookTime: "PT7M",
    recipeYield: "12",
    datePublished: "2012-10-04",
    prepTime: "PT3M",
    description:
      "I don't know what happened, but all of a sudden we're on a huge Rice Krispie Treat kick in our house. When I cleaned out my p...",
  },
  {
    name: "Spinach Artichoke Pasta",
    ingredients:
      "6 Tablespoons Butter\n4 cloves Garlic, Finely Minced\n2 bags Baby Spinach\n2 cans Artichoke Hearts, Drained And Halved\n3 Tablespoons Flour\n3 cups Whole Milk\n1/4 teaspoon Cayenne Pepper\n Salt And Pepper, to taste\n1/2 cup Grated Parmesan Cheese\n1-1/2 cup Mozzarella Or Monterey Jack Cheese, Grated\n1/2 cup Low Sodium Chicken Broth (less Or More)\n12 ounces, weight Penne, Cooked Until Al Dente\n1/2 cup Seasoned Panko Breadcrumbs\n Crushed Red Pepper, To Taste",
    url: "http://thepioneerwoman.com/cooking/2012/10/spinach-artichoke-pasta/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/10/artichoke.jpg",
    cookTime: "PT20M",
    recipeYield: "10",
    datePublished: "2012-10-08",
    prepTime: "PT10M",
    description:
      "I love spinach artichoke dip. I've loved it for over half my life. And I'll love it till the day I croak or become allergic t...",
  },
  {
    name: "Supreme Pizza Burgers",
    ingredients:
      "1-1/2 pound Ground Beef\n1/2 pound Italian Sausage ( A Little More Is Fine!)\n1/2 teaspoon Italian Seasoning\n8 slices Mozzarella Or Provolone Cheese\n Pepperoni Slices\n8 Tablespoons Jarred Marinara Sauce, Plus A Little More\n Grated Parmesan Cheese\n4 whole Kaiser Rolls Or Good Hamburger Buns\n Thinly Sliced Red Onion\n1 whole Green Bell Pepper, Sliced Thick\n Sliced Black Olives\n Sliced Mushrooms",
    url: "http://thepioneerwoman.com/cooking/2012/10/supreme-pizza-burgers/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/10/burger.jpg",
    cookTime: "PT15M",
    recipeYield: "4",
    datePublished: "2012-10-11",
    prepTime: "PT5M",
    description:
      "A couple of weeks ago (or was it a couple of years ago? Or a couple of months ago? Or is it next week? I'm confused) I posted...",
  },
  {
    name: "Itty Bitty Nutella Cakes",
    ingredients:
      "1 whole Storebought Angel Food Cake Or Pound Cake\n Nutella\n Cool Whip, Thawed In The Fridge",
    url: "http://thepioneerwoman.com/cooking/2012/10/itty-bitty-nutella-cakes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/10/ittybitty.jpg",
    cookTime: "PT",
    recipeYield: "6",
    datePublished: "2012-10-15",
    prepTime: "PT20M",
    description:
      "These are hilariously, deliciously, unbelievably, shockingly, crazily easy to make.    Emphasis on hilariously and deliciousl...",
  },
  {
    name: "Pork Sandwiches with Cilantro-Jalapeno Slaw",
    ingredients:
      "1 whole Onion, Peeled And Quartered\n1 whole Pork Butt (pork Shoulder Roast)\n Salt And Pepper\n1 can (11 Ounce) Chipotle Peppers In Adobo Sauce\n2 cans Cola (Dr Pepper, Coke, Etc.)\n2 Tablespoons Brown Sugar\n12 whole Good Quality Kaiser Or Deli Rolls\n12 Tablespoons Butter\n1/2 head Cabbage, Sliced Thin\n1/2 head Purple Cabbage, Sliced Thin\n1 whole Jalapeno, Halved Lengthwise And Thinly Sliced\n1/2 cup Whole Milk\n1/2 cup Mayonnaise\n1 teaspoon White Vinegar\n1 Tablespoon Sugar\n1/4 teaspoon Salt\n1/4 teaspoon Cayenne Pepper\n2 cups Cilantro Leaves, Barely Chopped",
    url: "http://thepioneerwoman.com/cooking/2011/06/pork-sandwiches-with-cilantro-jalapeno-slaw/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/06/pulledpork.jpg",
    cookTime: "PT6H",
    recipeYield: "12",
    datePublished: "2011-06-22",
    prepTime: "PT20M",
    description:
      "Today's recipe is more about the slaw than the pork.      \u00a0  I used my Dr Pepper Shredded Pork for this sandwich, which ...",
  },
  {
    name: "Pollo Asado",
    ingredients:
      "1/2 cup Olive Oil\n1/2 cup Orange Juice (freshly Squeezed If Possible; Save Juiced Orange Halves)\n2 whole Lemons, Juiced\n2 whole Limes, Juiced\n4 whole Garlic, Cloves Peeled And Smashed\n2 whole Onions, Peeled And Quartered\n1 teaspoon Salt\n1 teaspoon Black Pepper\n16 whole Chicken Legs\n Flour Tortillas, Warmed\n Corn Tortillas, Warmed\n Pico De Gallo\n Guacamole\n Cooked Beans (pinto, Black, Refried)",
    url: "http://thepioneerwoman.com/cooking/2011/06/pollo-asado/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/06/polloasado.jpg",
    cookTime: "PT25M",
    recipeYield: "8",
    datePublished: "2011-06-27",
    prepTime: "PT2H",
    description:
      "There was an insanely authentic and delicious Mexican food dive in the general vicinity of my college campus. It was basicall...",
  },
  {
    name: "Caprese Salad",
    ingredients:
      "2 cups Balsamic Vinegar\n3 whole Ripe Tomatoes, Sliced Thick\n12 ounces, weight Mozzarella Cheese, Sliced Thick\n Fresh Basil Leaves\n Olive Oil, For Drizzling\n Kosher Salt And Freshly Ground Black Pepper",
    url: "http://thepioneerwoman.com/cooking/2011/06/caprese-salad/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/06/caprese.jpg",
    cookTime: "PT20M",
    recipeYield: "8",
    datePublished: "2011-06-29",
    prepTime: "PT5M",
    description:
      "I love Caprese Salad so much it actually hurts. I love it as a main dish salad, I love it as a side dish with beef, I love it...",
  },
  {
    name: "French Toast with Berry Butter",
    ingredients:
      "1 pound Unsalted Butter, Softened\n1/2 cup Raspberries\n1/2 cup Blackberries\n1 loaf Crusty Bread: Baguette, French Loaf, Etc.\n4 whole Egg Yolks\n2 cups Half-and-half\n1 Tablespoon Sugar\n2 teaspoons Vanilla\n Zest Of One Lemon\n Maple Syrup For Serving\n Sifted Powder Sugar, For Serving (optional)",
    url: "http://thepioneerwoman.com/cooking/2011/07/french-toast-with-berry-butter/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/07/berry.jpg",
    cookTime: "PT20M",
    recipeYield: "8",
    datePublished: "2011-07-01",
    prepTime: "PT2H",
    description:
      "I cooked at the Lodge yesterday, and this was the final dish. It was the final dish because after it was done, I scarfed down...",
  },
  {
    name: "Missy\u2019s Marinated Tomatoes",
    ingredients:
      "1 cup Canola Oil\n1/4 cup Balsamic Vinegar\n4 Tablespoons Sugar\n1 teaspoon Salt\n Freshly Ground Black Pepper\n3 whole Green Onions, Sliced\n1/4 cup Chopped Parsley\n18 whole Basil Leaves (chiffonade)\n1/4 teaspoon Ground Thyme\n2 cloves Garlic, Minced Finely\n2 pounds Tomatoes, Cut Into Quarters (if Big) Or Halves (if Small)\n1 whole Baguette, Sliced\n1 clove Garlic, Peeled",
    url: "http://thepioneerwoman.com/cooking/2011/07/missys-marinated-tomatoes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/07/5910226276_bc9dd0dabb_o.jpg",
    cookTime: "PT",
    recipeYield: "18",
    datePublished: "2011-07-06",
    prepTime: "PT4H",
    description:
      "My sister-in-law Missy brings these marinated tomatoes to our Fourth of July bash every year, and as far as I'm concerned, th...",
  },
  {
    name: "Vanilla Ice Cream with Basil-Peach Topping",
    ingredients:
      "2 whole Peaches, Pitted And Chopped\n2 cups Sugar\n2 cups Water\n18 whole Basil Leaves, Washed\n Vanilla Or Strawberry Ice Cream",
    url: "http://thepioneerwoman.com/cooking/2011/07/vanilla-ice-cream-with-basil-peach-topping/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/07/peachbasil.jpg",
    cookTime: "PT5M",
    recipeYield: "12",
    datePublished: "2011-07-11",
    prepTime: "PT1M",
    description:
      "It's hot. All I want is ice cream. The end.     Okay, I'm back and I have a question: have you ever had fruit jelly or preser...",
  },
  {
    name: "Avocado Egg Salad",
    ingredients:
      "8 whole Hard Boiled Eggs, Peeled\n2 whole Avocados, Pitted\n4 Tablespoons Mayonnaise\n3 teaspoons Red Wine Vinegar\n1/2 teaspoon Kosher Sald\n Black Pepper To Taste\n1 teaspoon Chives, Chopped",
    url: "http://thepioneerwoman.com/cooking/2011/07/avocado-egg-salad/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/07/eggsalad.jpg",
    cookTime: "PT",
    recipeYield: "4",
    datePublished: "2011-07-13",
    prepTime: "PT5M",
    description:
      "Years and years ago, I had lunch with my mom in Tulsa. I'd just been to a hair salon to try to reverse the tragic effects of ...",
  },
  {
    name: "Grilled Corn Guacamole",
    ingredients:
      "3 ears Corn, Shucked\n6 whole Avocados, Diced\n1 whole Large Tomato, Diced\n1/3 cup Onion, Finely Diced\n2 cloves Garlic, Finely Minced\n2 Tablespoons Diced Fresh Jalapeno\n1 whole Lime, Juiced\n1/2 teaspoon Kosher Salt\n1/4 teaspoon Ground Cumin\n1/2 cup Cilantro Leaves",
    url: "http://thepioneerwoman.com/cooking/2011/07/grilled-corn-guacamole/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/07/guacamole.jpg",
    cookTime: "PT10M",
    recipeYield: "10",
    datePublished: "2011-07-15",
    prepTime: "PT10M",
    description:
      "Don't hate me for posting two avocado recipes in a row. If I were a food magazine with a large staff of people who could plan...",
  },
  {
    name: "Watermelon Granita",
    ingredients:
      "1/2 whole Seedless Watermelon, Cut Into Chunks (rind Discarded) (about 8 Cups Of Chunks)\n2 whole Limes, Juiced\n1/3 cup Sugar",
    url: "http://thepioneerwoman.com/cooking/2011/07/watermelon-granita/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/07/granita.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2011-07-18",
    prepTime: "PT15M",
    description:
      "It's so hot. I can hardly say anything beyond that. My back is dripping sweat, my brain is fried, and my garden is crying out...",
  },
  {
    name: "Cuppa Cuppa Cake",
    ingredients:
      "1 cup Self-Rising Flour\n1 cup Sugar\n1 can Fruit Cocktail With Juice\n Softened Butter, For Pan\n Unsweetened Whipped Cream, For Serving",
    url: "http://thepioneerwoman.com/cooking/2011/07/cuppa-cuppa-cake/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/07/TPW_7920.jpg",
    cookTime: "PT45M",
    recipeYield: "12",
    datePublished: "2011-07-19",
    prepTime: "PT2M",
    description:
      "I've always wanted to make Truvy's \"Cuppa Cuppa Cuppa Cake\" from Steel Magnolias. And last night I realized my dream.    I wo...",
  },
  {
    name: "Grilled Vegetable Pizza",
    ingredients:
      " Pizza Crust\n1/2 teaspoon Active Dry Yeast\n3/4 cups Warm Water\n2 cups All-purpose Flour\n1/2 teaspoon Kosher Salt\n3 Tablespoons Olive Oil\n Pesto\n3/4 cups Fresh Basil Leaves\n1/2 cup Grated Parmesan Cheese\n2 Tablespoons Pine Nuts\n2 cloves Garlic, Peeled\n Salt And Pepper, to taste\n1/3 cup Extra Virgin Olive Oil\n TOPPINGS:\n2 whole Zucchini, Cut In Diagonal Slices\n2 whole Summer Squash, Cut In Diagonal Slices\n Olive Oil For Brushing\n1 whole Yellow Bell Pepper\n1 whole Red Bell Pepper\n12 ounces, weight Fresh Mozzarella, Sliced\n4 ounces, weight Goat Cheese\n Extra Basil Leaves, For Garnish\n Grated Or Shaved Parmesan Cheese, For Sprinkling",
    url: "http://thepioneerwoman.com/cooking/2011/07/grilled-vegetable-pizza/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/07/grilledveggie.jpg",
    cookTime: "PT25M",
    recipeYield: "8",
    datePublished: "2011-07-26",
    prepTime: "PT2H",
    description:
      "I've been on a pizza jag, and am including no fewer than five new pizza recipes in my next cookbook. As a matter of fact, one...",
  },
  {
    name: "Chipotle Steak Salad",
    ingredients:
      "30 ounces, weight Mayonnaise\n11 ounces, weight Chipotle Peppers In Adobo Sauce, Reserve 2 Tablespoons Adobo\n1 whole Flank Steak\n3 Tablespoons Olive Oil\n1 Tablespoon Worcestershire Sauce\n1/2 teaspoon Ground Cumin\n1 teaspoon Oregano\n1 Tablespoon Honey\n24 ounces, weight Salad Greens (spring Mix)\n4 whole Roma Tomatoes, Sliced\n1 whole Cucumber, Sliced\n1 whole Red Onion, Halved And Sliced",
    url: "http://thepioneerwoman.com/cooking/2011/08/chipotle-steak-salad/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/07/5993877556_42ba110c20_o.jpg",
    cookTime: "PT5M",
    recipeYield: "4",
    datePublished: "2011-08-01",
    prepTime: "PT2H",
    description:
      "I have a problem with steak salads: I love them, which isn't actually a problem at all, unless you call a complete inability ...",
  },
  {
    name: "David\u2019s Duck Risotto",
    ingredients:
      "1 Tablespoon Olive Oil\n2 whole Duck Legs (about 1 1/4 Pounds) Trimmed Of Excess Fat\n Kosher Salt And Freshly Ground Black Pepper\n8 cups Chicken Stock Or Low-sodium Chicken Broth\n1 whole Boneless Duck Breast Half (about 12 Ounces)\n3 ounces, weight Smoked Spanish Sausage (I Used Chorizo) Cut Into 1/4 Inch Cubes\n1 whole Small Yellow Onion, Minced\n2 cups Arborio Rice\n1/2 cup Dry White Wine\n1/4 cup Serrano Ham Or Prosciutto, Cubed\n2 Tablespoons Fresh Orange Juice\n1 Tablespoon Unsalted Butter\n Minched Flat-leaf Parsley Leaves, For Garnish\n2 Tablespoons Grated Orange Zest",
    url: "http://thepioneerwoman.com/cooking/2011/08/davids-duck-risotto/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/08/duck.jpg",
    cookTime: "PT2H",
    recipeYield: "4",
    datePublished: "2011-08-03",
    prepTime: "PT30M",
    description:
      "A couple of weeks ago, I recreated the menu that David Leite served when he had me and a couple of friends over to his place ...",
  },
  {
    name: "Spicy Beans",
    ingredients:
      "4 cups Dry Pinto Beans\n1 whole Ham Hock\n1 whole Onion, Diced\n2 whole Red Bell Peppers, Diced\n4 cloves Garlic, Minced\n2 whole Jalapenos, Sliced\n2 teaspoons Salt, More To Taste\n2 teaspoons Chili Powder (optional)\n2 teaspoons Black Pepper, More To Taste",
    url: "http://thepioneerwoman.com/cooking/2011/08/spicy-beans/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/08/6005198000_e154cac62e_o.jpg",
    cookTime: "PT4H",
    recipeYield: "12",
    datePublished: "2011-08-04",
    prepTime: "PT5M",
    description:
      "My name is Pioneer Woman and I love beans.     Hi, Pioneer Woman.     Sorry. It's true, though. A big pot of brown beans simm...",
  },
  {
    name: "Pasta with Whiskey, Wine, and Mushrooms",
    ingredients:
      "24 ounces, weight Thickly Sliced Mushrooms (baby Portobellos Are Best)\n2 Tablespoons Olive Oil\n Kosher Salt\n Black Pepper\n2 Tablespoons Olive Oil\n2 Tablespoons Butter\n1 whole Large Onion, Peeled And Sliced\n1 cup Dry White Wine\n3/4 cups Whiskey (Jack Daniels Is Good)\n1/2 cup Chicken Broth\n1 cup Heavy Cream\n Salt And Pepper, to taste\n12 ounces, weight Mostaciolli, Cooked Al Dente",
    url: "http://thepioneerwoman.com/cooking/2011/08/pasta-with-whiskey-wine-and-mushrooms/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/08/TPW_8234.jpg",
    cookTime: "PT30M",
    recipeYield: "8",
    datePublished: "2011-08-08",
    prepTime: "PT5M",
    description:
      "You'll have to bear with me as I share this recipe, which started out as a chicken recipe with wine and pasta and ended as a ...",
  },
  {
    name: "Peach-Whiskey Barbecue Chicken",
    ingredients:
      "12 whole Chicken Thighs, Bone-in, Skin-on\n2 Tablespoons Olive Oil\n2 Tablespoons Butter\n1 whole Yellow Onion, Diced\n1-1/2 cup Whiskey\n12 ounces, fluid Barbecue Sauce\n1 jar Peach Preserves\n1/2 cup Water\n2 Tablespoons Worcestershire Sauce\n4 cloves Garlic, Peeled\n3 whole Green Onions, Sliced Thin",
    url: "http://thepioneerwoman.com/cooking/2011/08/peach-whiskey-barbecue-chicken/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/08/bbq.jpg",
    cookTime: "PT2H",
    recipeYield: "6",
    datePublished: "2011-08-15",
    prepTime: "PT5M",
    description:
      "Boy, oh boy. This was one good Sunday dinner.     In my next cookbook--the one I've been working on and am almost finished wi...",
  },
  {
    name: "Cherry Sherbet",
    ingredients:
      "3 cups Fresh Or Frozen Cherries, Pitted.\n1 cup Sugar\n1-1/2 cup Whole Milk\n1 Tablespoon Heavy Cream\n1 Tablespoon Cherry Booze (such As Kirsch) Or Clear Rum\n Juice Of 1 Lemon",
    url: "http://thepioneerwoman.com/cooking/2011/08/cherry-sherbet/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/08/sherbet.jpg",
    cookTime: "PT",
    recipeYield: "6",
    datePublished: "2011-08-10",
    prepTime: "PT2H",
    description:
      "I have so many things to say today. Please brace yourself.     First of all, what is sherbet, and how is sherbet different fr...",
  },
  {
    name: "Quick-and-Easy Peach Parcels",
    ingredients:
      "8 whole Storebought Crepes (I Used Melissa's Brand)\n1 whole Ripe Peach, Pitted And Cut Into Chunks\n3 Tablespoons Butter, Softened\n1/4 cup Brown Sugar\n1 teaspoon Vanilla Extract\n1 teaspoon Peach Schnaaps (optional)\n Freshly Whipped Cream\n Special Equipment: Clothespins",
    url: "http://thepioneerwoman.com/cooking/2011/08/quick-and-easy-peach-parcels/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/08/peachparcels.jpg",
    cookTime: "PT3M",
    recipeYield: "8",
    datePublished: "2011-08-18",
    prepTime: "PT5M",
    description:
      "These are really fun. Fancy. And they take ten minutes to make.     \u00a0  \u00a0  \u00a0  Warning: I used storebought crepe...",
  },
  {
    name: "Pork Chops with Apples &amp; Creamy Bacon Cheese Grits",
    ingredients:
      "6 whole Boneless Pork Chops, About 1/2-inch Thick\n2 Tablespoons Olive Oil\n2 Tablespoons Butter\n2 whole Gala Apples, Diced\n1/2 cup Dry White Wine\n2 teaspoons Apple Cider Vinegar\n3/4 cups Pure Maple Syrup\n1 dash Salt\n Freshly Ground Black Pepper\n Creamy Bacon-Cheese Grits (see My Tasty Kitchen Recipe)",
    url: "http://thepioneerwoman.com/cooking/2011/08/pork-chops-with-apples-and-creamy-bacon-cheese-grits/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/08/porkchops.jpg",
    cookTime: "PT25M",
    recipeYield: "6",
    datePublished: "2011-08-22",
    prepTime: "PT5M",
    description:
      "In a word: Yum. And that pretty much sums it up.     Honestly. I was trying to figure out what to say at the beginning of thi...",
  },
  {
    name: "Lemon Blueberry Pancakes",
    ingredients:
      "1-1/2 cup Cake Flour\n1 Tablespoon (additional) Cake Flour\n1/4 teaspoon Salt\n1 Tablespoon (heaping) Baking Powder\n3 Tablespoons Sugar\n1-1/2 cup Evaporated Milk (more If Needed)\n1 whole Lemon (more If Needed)\n1 whole Large Egg\n1-1/2 teaspoon Vanilla\n2 Tablespoons Butter, Melted\n Zest From 1 Lemon\n1 cup Heaping Blueberries\n Extra Butter\n Maple Or Pancake Syrup",
    url: "http://thepioneerwoman.com/cooking/2011/09/lemon-blueberry-pancakes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/05/5674546802_cce65d5f07_o.jpg",
    cookTime: "PT10M",
    recipeYield: "4",
    datePublished: "2011-09-03",
    prepTime: "PT10M",
    description:
      "Note from PW: Because this recipe is featured on today's episode of my cooking show, I wanted to bring this to the forefront ...",
  },
  {
    name: "Fig-Prosciutto Pizza with Arugula",
    ingredients:
      " Pizza Crust\n1 teaspoon Active Dry Yeast\n4 cups All-purpose Flour\n1 teaspoon Kosher Salt\n1/3 cup Olive Oil\n FOR THE PIZZA:\n2 Tablespoons Olive Oil\n4 Tablespoons Fig Spread Or Jam\n Kosher Salt To Taste\n12 ounces, weight Fresh Mozzarella, Sliced Thin\n6 ounces, weight Thinly Sliced Prosciutto\n1 bunch Washed And Rinsed Arugula\n Freshly Ground Pepper, to taste\n1/2 cup Shaved Parmesan",
    url: "http://thepioneerwoman.com/cooking/2011/09/fig-prosciutto-pizza-with-arugula/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/12/5278973957_3f9f9a21c2_o.jpg",
    cookTime: "PT12M",
    recipeYield: "12",
    datePublished: "2011-09-09",
    prepTime: "PT1H30M",
    description:
      "Note: Because this pizza is featured on my cooking show Saturday morning, I'm bumping this up to the front for easy reference...",
  },
  {
    name: "Steakhouse Pizza",
    ingredients:
      "1 teaspoon (SCANT) Active Dry Yeast\n3/4 cups Warm Water\n2 cups All-purpose Flour\n3/4 teaspoons Kosher Salt\n3 Tablespoons Olive Oil",
    url: "http://thepioneerwoman.com/cooking/2011/09/steakhouse-pizza/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/09/steakhousepizza.jpg",
    cookTime: "PT",
    recipeYield: "12",
    datePublished: "2011-09-07",
    prepTime: "PT1H",
    description:
      "Earlier this summer, I made a bunch of different pizzas for my new cookbook. In the spirit of impatience, I'm sharing one of ...",
  },
  {
    name: "Roasted Root Vegetable \u201cCandy\u201d",
    ingredients:
      "1 whole Celery Root, Peeled And Diced\n3 whole Parsnips, Peeled And Diced\n6 whole Carrots (varied Colors If You Can Find Them), Peeled And Diced\n Other Root Vegetables, Peeled And Diced\n Olive Oil, For Drizzling\n Salt And Pepper, to taste",
    url: "http://thepioneerwoman.com/cooking/2011/09/roasted-root-vegetable-candy/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/09/root.jpg",
    cookTime: "PT40M",
    recipeYield: "8",
    datePublished: "2011-09-14",
    prepTime: "PT15M",
    description:
      "I'm a lover of root vegetables and will take them however I can get them. This is a simple way to enjoy an assortment of root...",
  },
  {
    name: "Cajun Chicken Pasta",
    ingredients:
      "3 whole Boneless, Skinless Chicken Breasts, Cut Into Cubes\n3 teaspoons Cajun Spice Mix, More To Taste\n1 pound Fettuccine\n2 Tablespoons Olive Oil\n2 Tablespoons Butter\n1 whole Green Bell Pepper, Seeded And Sliced\n1 whole Red Bell Pepper, Seeded And Sliced\n1/2 whole Large Red Onion, Sliced\n3 cloves Garlic, Minced\n4 whole Roma Tomatoes, Diced\n2 cups Low Sodium Chicken Broth\n1/2 cup White Wine\n1 cup Heavy Cream\n Cayenne Pepper To Taste\n Freshly Ground Black Pepper, To Taste\n Salt To Taste\n Chopped Fresh Parsley, To Taste",
    url: "http://thepioneerwoman.com/cooking/2011/09/cajun-chicken-pasta/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/09/cajun.jpg",
    cookTime: "PT15M",
    recipeYield: "6",
    datePublished: "2011-09-17",
    prepTime: "PT10M",
    description:
      "Note: Since this recipe is featured on the Food Network episode this morning, I'm bringing it to the front for easy reference...",
  },
  {
    name: "Ravioli, Three Ways",
    ingredients:
      "12 ounces, weight Whole Milk Ricotta\n1-1/2 cup Freshly Grated Parmesan Or Romano\n1 whole Egg\n Salt And Pepper, to taste\n4 cups Arugula\n1 Tablespoon Olive Oil\n Egg Yolks\n24 whole Wonton Wrappers\n Olive Oil, For Drizzling\n Kosher Salt &amp; Freshly Ground Black Pepper, For Serving\n1 whole Egg (additional)\n3 Tablespoons Water",
    url: "http://thepioneerwoman.com/cooking/2011/09/ravioli-three-ways/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/09/ravioli.jpg",
    cookTime: "PT5M",
    recipeYield: "4",
    datePublished: "2011-09-19",
    prepTime: "PT20M",
    description:
      "I love all kinds of pasta, but there's something about good ravioli that really makes my heart go pitter-pat. I love the flat...",
  },
  {
    name: "Short Ribs with Wine and Cream",
    ingredients:
      "12 whole Shortribs\n Salt And Pepper, to taste\n3 Tablespoons Olive Oil\n1 cup Red Wine\n32 ounces, fluid Beef Broth Or Beef Stock\n2 Tablespoons Minced Fresh Rosemary\n2 Tablespoons Grainy Mustard\n1 cup Heavy Cream\n2 Tablespoons Capers (more If You Want!)\n16 ounces, weight Assorted Mushrooms: Cremini, Oyster, Baby Bellas, Etc.\n Olive Oil, For Drizzling\n Rosemary Sprig, To Be Fancy",
    url: "http://thepioneerwoman.com/cooking/2011/09/short-ribs-with-wine-and-cream/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/09/6171639825_ce7e0b1598_o.jpg",
    cookTime: "PT3H",
    recipeYield: "6",
    datePublished: "2011-09-22",
    prepTime: "PT10M",
    description:
      "I think I've established that I'm obsessed with short ribs. The first time I ever tasted one, I fainted from the sheer, slow-...",
  },
  {
    name: "Frito Chili Pie",
    ingredients:
      "2 pounds Ground Chuck\n3 cloves Garlic, Minced (optional)\n1 can (12 To 14 Ounce) Tomato Sauce\n1 can (10 Ounce) Ro-tel (diced Tomatoes And Chilies)\n1/2 teaspoon Salt\n1 teaspoon Ground Oregano\n1 Tablespoon Ground Cumin\n2 Tablespoons Chili Powder (more To Taste)\n1 can (14-ounce) Kidney Beans, Drained And Rinsed\n1 can (14-ounce) Pinto Beans, Drained And Rinsed\n1/4 cup Masa (corn Flour) Or Regular Corn Meal\n1/2 cup Warm Water\n Individual Bags Of Fritos\n Grated Sharp Cheddar Cheese\n Diced Red Onion (Optional)",
    url: "http://thepioneerwoman.com/cooking/2011/09/frito-chili-pie/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/09/TPW_1850.jpg",
    cookTime: "PT1H",
    recipeYield: "8",
    datePublished: "2011-09-26",
    prepTime: "PT5M",
    description:
      "We're submerged in football right now. There's no other way to put it. Marlboro Man is coaching my two boys' football team, M...",
  },
  {
    name: "Sausage, Potato, and Kale Soup",
    ingredients:
      "2 bunches Kale, Picked Over, Cleaned, And Torn Into Bite Sized Pieces\n12 whole Red Potatos, Sliced Thin\n1 whole Onion, Chopped\n1-1/2 pound Italian Sausage\n1/2 teaspoon Red Pepper Flakes (more To Taste)\n2 cups Low Sodium Chicken Broth\n2 cups Whole Milk\n4 cups Half-and-half\n Splash Of Heavy Cream\n Fresh Or Dried Oregano\n Black Pepper To Taste",
    url: "http://thepioneerwoman.com/cooking/2011/10/sausage-potato-and-kale-soup/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/10/zuppa.jpg",
    cookTime: "PT45M",
    recipeYield: "12",
    datePublished: "2011-10-03",
    prepTime: "PT5M",
    description:
      "Yay. It's soup weather!     This is a make-at-home version of Olive Garden's \"Zuppa Toscana.\" If you have an Olive Garden nea...",
  },
  {
    name: "Penne With Chicken Thighs",
    ingredients:
      "8 whole Chicken Thighs, Bone-in, Skin-on\n Salt And Pepper\n2 Tablespoons Olive Oil\n1 whole Large Onion, Diced\n4 cloves Garlic, Minced\n2 jars (24 Ounces Each) Marinara Sauce\n Fresh Basil - To Taste\n Parmesan Cheese, For Sprinkling\n16 ounces, weight Penne Or Rigatoni",
    url: "http://thepioneerwoman.com/cooking/2011/10/penne-with-chicken-thighs/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/10/6237819167_73558746eb_o.jpg",
    cookTime: "PT1H30M",
    recipeYield: "8",
    datePublished: "2011-10-12",
    prepTime: "PT15M",
    description:
      "Viewer Warning: this recipe may be offensive to some who can not imagine cracking open a jar of ready-made marinara sauce.   ...",
  },
  {
    name: "Citrus Butter Cookies",
    ingredients:
      "2 cups (4 Sticks) Salted Butter, Softened\n1-1/2 cup Sugar\n2 whole Large Eggs, Separated\n4 cups All-purpose Flour\n3 Tablespoons Orange, Lemon, And Lime Zest (approx 1 Tablespoon Each)\n2 Tablespoons Orange, Lemon, And/or Lime Juice (2 Tablespoons Total)\n Icing\n3 cups Powdered Sugar\n2 Tablespoons Whole Milk\n2 Tablespoons Orange, Lemon, And Lime Zest\n Juice Of 1/2 Lime\n Juice Of 1/2 Lemon\n Dash Of Salt\n Extra Zest, For Decorating",
    url: "http://thepioneerwoman.com/cooking/2011/10/citrus-butter-cookies/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/10/6227926423_44bd65236a_o.jpg",
    cookTime: "PT15M",
    recipeYield: "36",
    datePublished: "2011-10-10",
    prepTime: "PT15M",
    description:
      "I made some simple butter cookies yesterday and decided to add some lemon. Then I decided to add some lime because I thought ...",
  },
  {
    name: "Caveman Pops (aka Roasted Turkey Legs)",
    ingredients:
      "10 whole Turkey Legs\n BRINE:\n4 quarts Water\n1 cup Kosher Salt\n1 cup Sugar\n1 cup Brown Sugar\n2 Tablespoons Seasoning Blend (I Used Montreal)\n1 whole Bay Leaf\n Dry Rub\n2 Tablespoons Chili Powder (less If You Don't Like Things Too Spicy!)\n2 teaspoons Seasoning Blend (I Used Montreal)\n2 teaspoons Paprika\n2 teaspoons Onion Salt",
    url: "http://thepioneerwoman.com/cooking/2011/10/caveman-pops-aka-roasted-turkey-legs/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/10/caveman.jpg",
    cookTime: "PT30M",
    recipeYield: "10",
    datePublished: "2011-10-17",
    prepTime: "PT6H",
    description:
      "While a few state fairs are happening right now, the one in my state (as is the case with many others) has drawn to a close. ...",
  },
  {
    name: "Salted (and Other) Caramel Apples",
    ingredients:
      "8 whole Apples (more, If Apples Are Small)\n4 packages (11-ounce Each) Caramel Melts\n2 Tablespoons Heavy Cream (a Little More Is Fine)\n1 teaspoon Vanilla\n Dash Of Salt\n Toppings: Mini M&amp;Ms, Crushed Pretzels, Kosher Salt, Chocolate Chips, Coconut, Crushed Pecans, Crushed Saltines, Etc.\n Chopsticks",
    url: "http://thepioneerwoman.com/cooking/2011/10/salted-and-other-caramel-apples/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/10/saltedcaramel.jpg",
    cookTime: "PT20M",
    recipeYield: "8",
    datePublished: "2011-10-24",
    prepTime: "PT30M",
    description:
      "Happy week-before-Halloween! My girl and I made caramel apples a couple of weeks ago, and we had so much fun, we're doing it ...",
  },
  {
    name: "Classic Corn Dogs and Cheese-on-a-Stick",
    ingredients:
      "6 cups Krusteaz Pancake Mix\n2 cups Yellow Corn Meal\n2 whole Eggs, Slightly Beaten\n6 cups Water, More If Needed To Thin Batter\n Hot Dogs\n Cheese, Cut Into 1/2-inch X 3 Inch Sticks\n Chopsticks\n Canola Oil, For Frying\n Spicy Mustard, For Serving",
    url: "http://thepioneerwoman.com/cooking/2011/10/classic-corn-dogs-and-cheese-on-a-stick/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/10/corndog.jpg",
    cookTime: "PT20M",
    recipeYield: "18",
    datePublished: "2011-10-18",
    prepTime: "PT10M",
    description:
      "For the second State Fair recipe, I whipped up some hot dogs and cheese-on-a-stick reminiscent not just of state fairs and ca...",
  },
  {
    name: "Corn &amp; Cheese Chowder",
    ingredients:
      "4 Tablespoons 1/2 Stick Butter\n1 whole Onion, Chopped\n3 slices Bacon, Cut Into Pieces\n3 whole Bell Peppers, Finely Diced (red, Yellow, Orange)\n5 ears Corn, Kernels Sliced Off\n1/4 cup All-purpose Flour\n3 cups Chicken Stock Or Broth\n2 cups Half-and-half\n1 cup (heaping) Grated Monterey Jack\n1 cup (heaping) Pepper Jack\n1/3 cup Sliced Green Onions\n Bread Bowls",
    url: "http://thepioneerwoman.com/cooking/2011/10/corn-cheese-chowder/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/10/chowder.jpg",
    cookTime: "PT20M",
    recipeYield: "12",
    datePublished: "2011-10-26",
    prepTime: "PT15M",
    description:
      "Last week, I whipped up three yummy soups, all perfect for Halloween night and all guaranteed to:    1. Give your trick-or-tr...",
  },
  {
    name: "Carrot-Thyme Soup with Cream",
    ingredients:
      "3 pounds Baby Carrots\n2 quarts Vegetable Stock Or Chicken Stock\n2 sprigs Fresh Thyme\n1/3 cup Honey\n1/2 cup Heavy Cream\n Dash Of Salt",
    url: "http://thepioneerwoman.com/cooking/2011/10/carrot-thyme-soup-with-cream/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/10/soup.jpg",
    cookTime: "PT45M",
    recipeYield: "8",
    datePublished: "2011-10-27",
    prepTime: "PT5M",
    description:
      "I realize this is a freaky photo. Sorry.     This is the perfect soup for Halloween night, because it's creamy and rich and h...",
  },
  {
    name: "Pumpkin Smoothie",
    ingredients:
      "1 can (15 Ounce) Pumpkin Pie Filling\n3 cups Whole Milk (more If Needed)\n1/2 cup Vanilla Yogurt (up To 1 Cup)\n A Few Dashes Of Cinnamon\n Cinnamon Graham Crackers, Crushed",
    url: "http://thepioneerwoman.com/cooking/2011/10/pumpkin-smoothie/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/10/smoothie.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2011-10-31",
    prepTime: "PT5M",
    description:
      "Leesten. And heer me. You must make these tonight, tomorrow, and next week. As simple and throw-together as they are, I promi...",
  },
  {
    name: "Broccoli-Cheese Soup",
    ingredients:
      "1 whole Onion, Diced\n1 stick 1/2 Cup Butter\n1/3 cup Flour\n4 cups Whole Milk\n2 cups Half-and-half\n4 heads Broccoli Cut Into Florets\n1 pinch Nutmeg\n3 cups Grated Cheese (mild Cheddar, Sharp Cheddar, Jack, Etc.)\n Small Dash Of Salt (more If Needed)\n Freshly Ground Black Pepper\n Chicken Broth If Needed For Thinning",
    url: "http://thepioneerwoman.com/cooking/2011/11/broccoli-cheese-soup/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/11/broccoli.jpg",
    cookTime: "PT30M",
    recipeYield: "10",
    datePublished: "2011-11-01",
    prepTime: "PT10M",
    description:
      "Broccoli-cheese soup is my life. There's something about it that triggers a happy, peaceful memory. I just don't know what th...",
  },
  {
    name: "Blueberry Cornbread Mini-Muffins",
    ingredients:
      " Muffins\n1 cup Yellow Corn Meal\n1/2 cup All-purpose Flour\n1 teaspoon Salt\n1 Tablespoon Baking Powder\n2 Tablespoons Sugar\n1 cup Buttermilk\n1/2 cup Milk\n1/2 teaspoon Baking Soda\n1 whole Egg\n1/4 cup Shortening, Melted\n1/2 teaspoon Vanilla\n8 ounces, weight Dried Blueberries\n VANILLA BUTTER\n1 stick 1/2 Cup Butter, Softened\n1 whole Vanilla Bean\n2 Tablespoons Sugar",
    url: "http://thepioneerwoman.com/cooking/2011/11/blueberry-cornbread-mini-muffins/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/11/blueberrycorn.jpg",
    cookTime: "PT12M",
    recipeYield: "24",
    datePublished: "2011-11-03",
    prepTime: "PT10M",
    description:
      "I made these little corn muffins just before my mom and sister arrived for a weekend visit a couple of weeks ago, and I almos...",
  },
  {
    name: "Pork Roast with Apples and Onions",
    ingredients:
      " Pork\n3 Tablespoons Olive Oil\n1 whole Pork Shoulder Roast (also Called Pork Butt)\n Salt And Pepper, to taste\n4 cups Apple Juice\n1 cup Beef Stock\n3 whole Apples, Cored And Cut Into Wedges\n3 whole Medium Onions, Sliced\n1 whole Bay Leaf\n Wild Rice\n2-1/2 cups Wild Rice\n4 cups Water\n3 cups Chicken Stock\n1/2 stick 4 Tablespoons Butter\n1/2 cup Chopped Pecans",
    url: "http://thepioneerwoman.com/cooking/2011/11/pork-roast-with-apples-and-onions/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/11/porkroastapples.jpg",
    cookTime: "PT2H",
    recipeYield: "8",
    datePublished: "2011-11-07",
    prepTime: "PT15M",
    description:
      "Pork roast. Apples. Onions. Braised to perfection and served with a savory-sweet sauce.     Oh, how I love life. For life inc...",
  },
  {
    name: "Pumpkin Soup",
    ingredients:
      "2 whole Pie Pumpkins\n1 quart Vegetable Or Chicken Stock\n1/2 cup Heavy Cream\n1/3 cup Maple Syrup\n Dash Of Nutmeg\n Salt To Taste\n Extra Cream, For Serving",
    url: "http://thepioneerwoman.com/cooking/2011/11/pumpkin-soup/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/11/punkin.jpg",
    cookTime: "PT1H",
    recipeYield: "8",
    datePublished: "2011-11-09",
    prepTime: "PT5M",
    description:
      "New feature alert: Please note the new Print button at the top of each cooking post! Yippee. It's the little things in life, ...",
  },
  {
    name: "Turkey Tetrazzini",
    ingredients:
      "1-1/2 pound Thin Spaghetti, Broken In Half\n4 Tablespoons Butter\n4 cloves Garlic, Minced\n1 pound White Mushrooms, Quartered\n1/2 teaspoon Salt\n1 cup White Wine\n1/3 cup Flour\n4 cups Turkey (or Chicken) Broth\n1 block 8 Ounce Cream Cheese\n3 cups Cooked (leftover) Turkey, Shredded Or Diced\n1 cup Finely Chopped Black Olives\n1-1/2 cup Frozen Green Peas\n4 slices Bacon, Fried And Cut Into Bits\n1 cup Grated Monterey Jack Cheese\n1 cup Grated Parmesan Cheese\n Salt And Pepper, to taste\n Extra Broth For Thinning\n1 cup Panko Bread Crumbs",
    url: "http://thepioneerwoman.com/cooking/2011/11/turkey-tetrazzini/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/11/tetra.jpg",
    cookTime: "PT20M",
    recipeYield: "12",
    datePublished: "2011-11-17",
    prepTime: "PT30M",
    description:
      "I couldn't wait. I'm sorry.     I had planned to save my turkey leftover recipes for next week (so you'd have time to plan yo...",
  },
  {
    name: "Oyster Dressing",
    ingredients:
      "3 cups Cornbread, Cut Into Cubes\n2 loaves Ciabatta Or Other Crusty Italian Bread, Cut Into Cubes\n2 Tablespoons Bacon Fat Or Butter\n3 cans Oysters, Drained, Liquid Reserved\n4 whole Carrots, Diced\n6 stalks Celery, Diced\n2 whole Small Onions, Diced\n8 cups Turkey (or Chicken) Broth\n1/2 teaspoon Ground Sage\n1 teaspoon Chopped Rosemary\n Salt And Pepper, to taste\n2 whole Eggs\n1/4 cup Chopped Fresh Parsley",
    url: "http://thepioneerwoman.com/cooking/2011/11/oyster-dressing/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/11/oyster2.jpg",
    cookTime: "PT30M",
    recipeYield: "12",
    datePublished: "2011-11-14",
    prepTime: "PT8H",
    description:
      "Oyster Dressing is weird. Who in their right mind would want a fishy-tasting dressing along with their Thanksgiving meal?    ...",
  },
  {
    name: "Broccoli Cheese &amp; Cracker Casserole",
    ingredients:
      "3 pounds Broccoli Cut Into Florets\n2 pounds Velveeta\n1/2 cup Milk\n1/4 cup Heavy Cream\n Salt And Black Pepper To Taste\n1/4 teaspoon Cayenne Pepper (more For More Spice)\n1 Tablespoon Dijon (optional)\n3 whole (sleeves) Ritz Crackers",
    url: "http://thepioneerwoman.com/cooking/2011/11/broccoli-cheese-cracker-casserole/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/11/broccheese.jpg",
    cookTime: "PT20M",
    recipeYield: "12",
    datePublished: "2011-11-21",
    prepTime: "PT15M",
    description:
      "This is a recreation of a common broccoli-cheese dish I've seen on a couple of down-home restaurant menus...and it's a little...",
  },
  {
    name: "Leftover Turkey and Swiss Panini",
    ingredients:
      "1-1/2 cup Leftover Turkey, Shredded\n1/2 cup Leftover Cranberry Sauce\n1/4 cup Chopped Pecans\n2 Tablespoons Fig Or Apricot Jam\n4 Tablespoons Dijon Mustard\n8 slices (thick) Swiss Cheese\n8 slices Sourdough Or Other Bread\n8 Tablespoons Butter",
    url: "http://thepioneerwoman.com/cooking/2011/11/leftover-turkey-and-swiss-panini/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/11/turkeypanini.jpg",
    cookTime: "PT5M",
    recipeYield: "4",
    datePublished: "2011-11-23",
    prepTime: "PT5M",
    description:
      "I can't believe Thanksgiving is tomorrow.     Well, let me back up: I can't believe it's November.    If you're still looking...",
  },
  {
    name: "Mini Corn Loaves with Cranberries and Pecans",
    ingredients:
      "1 cup Yellow Cornmeal\n1/2 cup All-purpose Flour\n1 teaspoon Salt\n1 Tablespoon Baking Powder\n2 Tablespoons Sugar\n1 cup Buttermilk\n1/2 cup Milk\n1/2 teaspoon Baking Soda\n1 whole Egg\n1/4 cup Shortening\n1/2 teaspoon Vanilla\n1 cup Dried Cranberries\n1/2 cup Chopped Pecans\n MAPLE BUTTER\n1 stick Softened Butter\n2 Tablespoons Maple Syrup\n Extra Maple Syrup And Melted Butter, For Brushing",
    url: "http://thepioneerwoman.com/cooking/2011/12/mini-corn-loaves-with-cranberries-and-pecans/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/12/miniloaves.jpg",
    cookTime: "PT15M",
    recipeYield: "12",
    datePublished: "2011-12-02",
    prepTime: "PT15M",
    description:
      "This is a variation of the Blueberry Corn Mini-Muffins I posted a few weeks ago, and proof that you can pretty much use the f...",
  },
  {
    name: "Leftover Turkey Spring Rolls",
    ingredients:
      " (Quantities Depend On How Much Leftover Turkey You Have And How Many Spring Rolls You Want To Make)\n Rice Paper Wrappers\n Chunks Of Turkey\n Soy Sauce\n Rice Wine Vinegar\n Sesame Oil\n Chopped Cilantro\n Finely Diced Carrots\n Strips Of Cucumber\n Leafy Lettuce\n Alralfa Or Bean Sprouts\n Cellophane Noodles",
    url: "http://thepioneerwoman.com/cooking/2011/11/leftover-turkey-spring-rolls/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/11/springrolls.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2011-11-28",
    prepTime: "PT15M",
    description:
      "Ahhh...Thanksgiving. How was it, everyone? While we had a wonderful time, I wasn't the one who did the cooking this year. My ...",
  },
  {
    name: "Sticky Pecan Mini-Buns",
    ingredients:
      "2 cups Whole Milk\n1/2 cup Canola Oil\n1/2 cup Sugar\n2-1/2 teaspoons Active Dry Yeast\n4 cups Flour\n1/2 cup (additional) Flour\n1/2 teaspoon (heaping) Baking Powder\n1/2 teaspoon (scant) Baking Soda\n2-1/2 teaspoons Salt\n2 sticks Butter\n3/4 cups Sugar\n2 Tablespoons Cinnamon\n1 cup Finely Chopped Pecans\n1/2 cup Light Corn Syrup\n2 teaspoons Vanilla Extract",
    url: "http://thepioneerwoman.com/cooking/2011/12/sticky-pecan-mini-buns/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/12/sticky.jpg",
    cookTime: "PT15M",
    recipeYield: "36",
    datePublished: "2011-12-05",
    prepTime: "PT1H30M",
    description:
      "These were good. These were very, very good.     Delicious, in fact!    There's a nice grocery store named Petty's in Tulsa, ...",
  },
  {
    name: "Peppermint Ice Cream",
    ingredients:
      "3 cups Half-and-half\n2 cups Sugar\n1 teaspoon Vanilla\n8 whole Large Egg Yolks\n3 cups Heavy Cream\n1/2 cup Crushed Peppermint Candies OR Chopped Andes Mints",
    url: "http://thepioneerwoman.com/cooking/2011/12/peppermint-ice-cream/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/12/peppermint.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2011-12-09",
    prepTime: "PT24H",
    description:
      "I love making homemade ice cream. It's one of my callings in life. For years and years, though, I used an old wooden ice crea...",
  },
  {
    name: "Chicken Soup",
    ingredients:
      "1 whole Chicken\n1 whole Bay Leaf\n64 ounces, fluid Unsalted (or Low Sodium) Chicken Broth (you May Use Half Broth And Half Water If Desired.)\n1 whole Large Onion, Chopped\n3 whole Ribs Of Celery, Sliced\n3 whole Carrots, Peeled And Chopped\n3 whole Parsnips, Peeled And Chopped\n1/2 teaspoon Salt\n Ground Black Pepper",
    url: "http://thepioneerwoman.com/cooking/2011/12/chunky-chicken-soup/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/12/chickensoup.jpg",
    cookTime: "PT2H",
    recipeYield: "12",
    datePublished: "2011-12-14",
    prepTime: "PT20M",
    description:
      "If you need a break from the heavy food and treats of the holiday season, put a pot of chicken soup on your stove. Serve it w...",
  },
  {
    name: "Decorating Cinnamon Rolls as Gifts",
    ingredients:
      "1 quart Whole Milk\n1 cup Vegetable Oil\n1 cup Sugar\n2 packages Active Dry Yeast, 0.25 Ounce Packets\n8 cups (Plus 1 Cup Extra, Separated) All-purpose Flour\n1 teaspoon (heaping) Baking Powder\n1 teaspoon (scant) Baking Soda\n1 Tablespoon (heaping) Salt\n Plenty Of Melted Butter\n2 cups Sugar\n Generous Sprinkling Of Cinnamon\n _____\n MAPLE FROSTING:\n1 bag Powdered Sugar\n2 teaspoons Maple Flavoring\n1/2 cup Milk\n1/4 cup Melted Butter\n1/4 cup Brewed Coffee\n1/8 teaspoon Salt",
    url: "http://thepioneerwoman.com/cooking/2011/12/decorating-cinnamon-rolls-as-gifts/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/12/charliechristmas.jpg",
    cookTime: "PT30M",
    recipeYield: "8",
    datePublished: "2007-06-01",
    prepTime: "PT2H",
    description:
      "For years, Hyacinth and I have gotten together at Christmastime to make cinnamon rolls for our friends. She takes some, I tak...",
  },
  {
    name: "Prime Rib",
    ingredients:
      "1 whole Rib Eye Roast (I Use Boneless, But You Can Do More Traditional Bone-in Prime Rib) About 14 Pounds\n4 Tablespoons Olive Oil\n1/2 cup Kosher Salt\n4 Tablespoons Tri-color Peppercorns (or Any Peppercorns)\n3 sprigs Rosemary\n3 sprigs Thyme\n1/2 cup Minced Garlic",
    url: "http://thepioneerwoman.com/cooking/2011/12/prime-rib/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/12/prime.jpg",
    cookTime: "PT1H",
    recipeYield: "12",
    datePublished: "2011-12-19",
    prepTime: "PT15M",
    description:
      "I'm not sure there's anything more special and delicious at Christmastime than a beautiful, perfectly cooked piece of roast b...",
  },
  {
    name: "Duchess Potatoes",
    ingredients:
      "5 pounds Russet Potatoes, Peeled And Boiled Until Fork Tender\n8 whole Egg Yolks\n1 stick Butter, Softened\n2 teaspoons Salt, More Or Less To Taste\n Plenty Of Black Pepper\n 1/4 Teaspoon Nutmeg (more To Taste)\n1-1/4 cup Heavy Cream\n1 whole Egg",
    url: "http://thepioneerwoman.com/cooking/2011/12/duchess-potatoes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/12/duchess.jpg",
    cookTime: "PT20M",
    recipeYield: "16",
    datePublished: "2011-12-20",
    prepTime: "PT45M",
    description:
      "I made these duchess potatoes for PW Cooks in early November, but decided to wait to post them at Christmastime once I decide...",
  },
  {
    name: "Delicious Hot Chocolate",
    ingredients:
      "2 cups Milk\n2 cups Half-and-half\n1 cup Good Semi Sweet Chocolate Chips\n1 teaspoon Sugar (optional)\n VARIATIONS: Orange Rind, Orange Syrup, Cinnamon Sticks, Raspberry Syrup, Abuelita Chocolate, Mint Extract, Peppermint Patties, Whipped Cream, Chocolate Shavings",
    url: "http://thepioneerwoman.com/cooking/2011/12/delicious-hot-chocolate/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/12/hotchocolate2.jpg",
    cookTime: "PT15M",
    recipeYield: "6",
    datePublished: "2011-12-26",
    prepTime: "PT5M",
    description:
      "I love hot chocolate and really can't be trusted around it.     Here are a few varieties I whipped up recently.     (If you'd...",
  },
  {
    name: "Brussels Sprouts with Balsamic and Cranberries",
    ingredients:
      "3 pounds Brussels Sprouts\n1/2 cup Olive Oil\n Salt And Pepper\n1 cup Balsamic Vinegar\n1/2 cup Sugar\n1 cup Dried Cranberries",
    url: "http://thepioneerwoman.com/cooking/2011/12/brussels-sprouts-with-balsamic-and-cranberries/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/12/sprouts.jpg",
    cookTime: "PT30M",
    recipeYield: "16",
    datePublished: "2011-12-22",
    prepTime: "PT10M",
    description:
      "This is the third recipe from my Christmas special on Food Network, and as a Christmas side dish, it's absolutely to die for....",
  },
  {
    name: "Spicy Whiskey BBQ Sliders",
    ingredients:
      "2 pounds Ground Meat (beef, Bison, Turkey)\n Salt And Pepper\n4 Tablespoons Butter\n1 whole Large Onion, Diced\n1/2 cup Whiskey\n1 cup Barbecue Sauce\n1/4 cup Jarred Jalapeno Slices (more To Taste)\n12 whole Slider Buns Or Dinner Rolls, Split",
    url: "http://thepioneerwoman.com/cooking/2011/12/spicy-whiskey-bbq-sliders/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/12/sliders.jpg",
    cookTime: "PT15M",
    recipeYield: "6",
    datePublished: "2011-12-28",
    prepTime: "PT15M",
    description:
      "Are you having a New Year's Eve get together at your house? If so, I must urge you to strongly consider making these decadent...",
  },
  {
    name: "Beef with Snow Peas",
    ingredients:
      "1-1/2 pound Flank Steak, Trimmed Of Fat And Sliced Very Thin Against The Grain\n1/2 cup Low Sodium Soy Sauce\n3 Tablespoons Sherry Or Cooking Sherry\n2 Tablespoons Brown Sugar\n2 Tablespoons Cornstarch\n1 Tablespoon Minced Fresh Ginger\n8 ounces, weight Fresh Snow Peas, Ends Trimmed\n5 whole Scallions, Cut Into Haf-inch Pieces On The Diagonal\n Salt As Needed (use Sparingly)\n3 Tablespoons Peanut Or Olive Oil\n Crushed Red Pepper, For Sprinkling\n Jasmine Or Long Grain Rice, Cooked According To Package",
    url: "http://thepioneerwoman.com/cooking/2010/10/beef-with-snow-peas/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/10/5112225022_e4d9aef755_z.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2010-10-25",
    prepTime: "PT5M",
    description:
      "This is not a Thanksgiving recipe. I repeat: This is not a Thanksgiving recipe.     You've probably already figured that out ...",
  },
  {
    name: "Beer-Braised Beef with Onions",
    ingredients:
      "1 whole Chuck Roast, 2 1/2 To 5 Pounds\n Salt And Pepper To Taste (Be Generous!)\n3 Tablespoons Olive Oil\n4 whole Onions, Peeled And Sliced Thick\n5 cloves Garlic, Chopped\n2 cans Beer\n1 teaspoon Ground Thyme\n1/2 teaspoon Rosemary Leaves",
    url: "http://thepioneerwoman.com/cooking/2010/08/beer-braised-beef-with-onions/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/08/4945227978_c1e8296dc2_o.jpg",
    cookTime: "PT3H",
    recipeYield: "6",
    datePublished: "2010-08-31",
    prepTime: "PT5M",
    description:
      "I wasn't even sure what to call this. All I knew was, I made a pot roast and used beer for the liquid instead of broth or win...",
  },
  {
    name: "Beef with Peppers",
    ingredients:
      "1-1/2 pound Flank Steak, Sliced Very Thin Against The Grain\n1/2 cup Low Sodium Soy Sauce\n3 Tablespoons Sherry\n2 Tablespoons Packed Brown Sugar\n2 Tablespoons Cornstarch\n1 Tablespoon Minced Fresh Ginger\n2 cloves Garlic, Minced\n1 teaspoon Red Chile Paste (or A Few Dashes Red Chile Oil)\n2 Tablespoons Canola Oil\n1 whole Medium Yellow Onion, Sliced\n2 whole Red Bell Peppers, Cored And Sliced Into Rings\n1 Tablespoon Diced Fresh Jalapeno (or 1 Teaspoon Dice Hot Pepper)\n Red Pepper Flakes, For Sprinkling\n Cilantro Leaves",
    url: "http://thepioneerwoman.com/cooking/2011/03/beef-with-peppers/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/03/5572969276_8f4385a0e2_o.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2011-03-30",
    prepTime: "PT15M",
    description:
      "I could eat beef stir fry every day of the week. I had a major hankering for it last night, and decided to throw together a v...",
  },
  {
    name: "Beef Stew with Mushrooms",
    ingredients:
      "2 pounds Beef Stew Meat (sirloin Cut Into Cubes)\n2 Tablespoons Flour\n4 Tablespoons Butter\n2 Tablespoons Olive Oil\n2 whole Shallots, Minced\n3 cloves Garlic, Minced\n8 ounces, weight Cremini Or White Button Mushrooms\n1/2 cup Red Wine\n1/2 can Beef Consomme\n Salt And Pepper, to taste\n Pasta - Cooked And Drained\n2 sprigs Fresh Thyme\n2 Tablespoons Flour",
    url: "http://thepioneerwoman.com/cooking/2009/11/beef-stew-with-mushrooms/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4145871052_43b464f07f.jpg",
    cookTime: "PT30M",
    recipeYield: "8",
    datePublished: "2009-11-30",
    prepTime: "PT25M",
    description:
      "Did you hear the one about the mushroom that walked into the bar? Yeah. The bartender looks at him and says, \"We don't serve ...",
  },
  {
    name: "Beef Stew with Beer and Paprika",
    ingredients:
      "3 Tablespoons Olive Oil\n1 Tablespoon Butter\n2 pounds Stew Meat\n1 whole Medium Onion, Diced\n3 cloves Garlic, Minced\n1 can Beer, 12 Ounce Can\n4 cups Beef Stock (or 4 Cups Water + 4 Beef Bouillon Cubes)\n2 cups Water (additional, If Needed)\n1 Tablespoon Worcestershire Sauce\n2 Tablespoons Tomato Paste\n1/2 teaspoon Paprika\n1/2 teaspoon Kosher Salt\n Freshly Ground Black Pepper\n1-1/2 teaspoon Sugar\n4 whole Carrots, Washed, Unpeeled, And Roughly Sliced\n4 whole New Potatoes, Quartered\n Minced Parsley (optional)",
    url: "http://thepioneerwoman.com/cooking/2011/01/beef-stew-with-beer-and-paprika/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/01/5337021451_e35711f343_o.jpg",
    cookTime: "PT2H30M",
    recipeYield: "6",
    datePublished: "2011-01-14",
    prepTime: "PT10M",
    description:
      "(Updated notes/recipe below.)    This is a scrumptious, simple beef stew recipe that's perfect for warming your soul after a ...",
  },
  {
    name: "Beef Noodle Salad Bowls",
    ingredients:
      "1 whole Sirloin Steak, 3/4 To 1 Pound\n Kosher Salt To Taste\n3/4 cups Ponzo Or Regular Soy Sauce\n3 Tablespoons Pure Sesame Oil\n2 Tablespoons Olive Oil\n2 Tablespoons Rice Wine Vinegar\n1 teaspoon Hot Chili Oil (less If You Can't Handle Heat!)\n2 cloves Garlic, Peeled And Minced Finely\n2 teaspoons Minced Fresh Ginger\n2 Tablespoons Packed Brown Sugar\n1/2 cup Sliced Green Onion\n8 ounces, weight Thin Noodles (I Used Thin Spaghetti)\n Cilantro Leaves",
    url: "http://thepioneerwoman.com/cooking/2011/05/beef-noodle-salad-bowls/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/05/5712043212_092a8fe85d_o.jpg",
    cookTime: "PT10M",
    recipeYield: "4",
    datePublished: "2011-05-12",
    prepTime: "PT10M",
    description:
      "At the salad supper I attended a couple of weeks ago--the one that gave birth to this chicken salad I made recently--four sal...",
  },
  {
    name: "Beef and Bean Burritos",
    ingredients:
      "2 pounds Ground Beef\n1/2 whole Medium Onion\n1 can (7 Ounce) Mexican Tomato Sauce Or Enchilada Sauce\n Salt And Pepper, to taste\n Cumin, Oregano, Chili Powder, Garlic To Taste\n1 can (28 Ounce) Refried Beans\n3/4 cups Grated Cheddar Cheese\n12 whole Burrito-sized Flour Tortillas\n Extra Grated Cheese, For Sprinkling\n Extra Sauce, For Drizzling\n Cilantro Leaves, Optional\n Optional Filling Ingredients: Mexican Rice, Sour Cream, Guacamole, Green Chilies, Pico De Gallo",
    url: "http://thepioneerwoman.com/cooking/2010/07/brown-hot-and-plenty-of-it-vol-i/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4784959605_c5713e9e4b_b.jpg",
    cookTime: "PT11M",
    recipeYield: "6",
    datePublished: "2010-07-12",
    prepTime: "PT5M",
    description:
      "First, an important clarification: The Pioneer Woman Cooks is not meant to be an encyclopedia of innovative gourmet recipes. ...",
  },
  {
    name: "Beans and Cornbread",
    ingredients:
      " Bean Ingredients:\n4 cups Pinto Beans\n4 slices Thick Bacon (can Also Use Salt Pork, Or Ham Hock, Or Diced Ham)\n1 teaspoon Salt\n2 teaspoons Ground Black Pepper\n Cornbread Ingredients:\n1/4 cup Plus 2 Tablespoons Shortening\n1 cup Yellow Corn Meal\n1/2 cup All-purpose Flour\n1 teaspoon Salt\n1 cup Buttermilk\n1/2 cup Milk\n1 whole Egg\n1 Tablespoon Baking Powder\n1/2 teaspoon Baking Soda",
    url: "http://thepioneerwoman.com/cooking/2007/08/beans_and_cornb/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/1196981101_8b0c8afd94.jpg",
    cookTime: "PT2H",
    recipeYield: "8",
    datePublished: "2007-08-22",
    prepTime: "PT30M",
    description:
      "    Do you ever allow yourself to experience the wonderful simplicity of a big ol' pot of beans? Honestly, there are few thin...",
  },
  {
    name: "Beef Fajita Nachos",
    ingredients:
      " Flank Steak\n1 whole Flank Steak\n1/3 cup Olive Oil\n2 whole Limes, Juiced\n4 whole Canned Chipotle Peppers, With A Little Sauce\n4 cloves Garlic, Peeled\n1 whole Handful Of Cilantro\n NACHOS\n2 whole Yellow Onion\n2 whole Bell Peppers, Cored And Sliced (can Use Different Colors)\n Olive Oil, For Frying\n Sturdy Tortilla Chips\n8 ounces, weight Cheese, Grated (cheddar, Jack, Pepper Jack, Etc)\n Guacamole\n Salsa\n Sour Cream",
    url: "http://thepioneerwoman.com/cooking/2011/02/beef-fajita-nachos/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/01/5399163424_3893f0580c_o.jpg",
    cookTime: "PT12M",
    recipeYield: "12",
    datePublished: "2011-02-01",
    prepTime: "PT24H",
    description:
      "Oh dear. These are good.     These are very, very good. Flank steak marinated in chipotle, lime, garlic, and cilantro is used...",
  },
  {
    name: "BBQ Comfort Meatballs",
    ingredients:
      " FOR MEATBALLS\n1-1/2 pound Ground Beef\n3/4 cups Oats\n1 cup Milk\n3 Tablespoons Very Finely Minced Onion\n1-1/2 teaspoon Salt\n Plenty Of Ground Black Pepper, to taste\n _____\n FOR COOKING MEATBALLS\n1 cup All-Purpose Flour (coating For Frozen Meatballs)\n Canola Oil\n _____\n FOR SAUCE\n1 cup Ketchup\n2 Tablespoons Sugar\n3 Tablespoons Vinegar\n2 Tablespoons Worcestershire\n4 Tablespoons (to 6 Tablespoons) Onion\n1 dash Tabasco",
    url: "http://thepioneerwoman.com/cooking/2009/03/bbq-meatballs-comfort-food-to-the-max/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3385764631_66b792bc72.jpg",
    cookTime: "PT45M",
    recipeYield: "6",
    datePublished: "2009-03-26",
    prepTime: "PT15M",
    description:
      "Foodies, please cover your eyes! Shield yourself from the deadly rays of prosaic 1960's cuisine!     We're about to dive into...",
  },
  {
    name: "Barbecue Chicken",
    ingredients:
      "18 whole Chicken Legs\n1 Tablespoon Canola Oil\n1/4 whole Onion, Diced\n2 cloves Garlic, Minced\n1 cup Ketchup\n1/4 cup Packed Brown Sugar\n2 Tablespoons (additional) Brown Sugar\n4 Tablespoons Distilled Vinegar (less To Taste)\n1 Tablespoon Worcestershire Sauce\n1/3 cup Molasses\n4 Tablespoons Chipotle Adobo Sauce (the Adobo Sauce Chipotle Peppers Are Packed In)\n Dash Of Salt",
    url: "http://thepioneerwoman.com/cooking/2011/04/barbecue-chicken/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/04/5630304858_69493eccda_z.jpg",
    cookTime: "PT25M",
    recipeYield: "9",
    datePublished: "2011-04-21",
    prepTime: "PT10M",
    description:
      "This is my second this-has-absolutely-nothing-to-do-with-Easter-or-Passover recipe of the week. Welcome to my world!     I ma...",
  },
  {
    name: "Basic Breakfast Potatoes",
    ingredients:
      "4 whole (to 5) Large Red Potatoes\n1 whole Onion\n1 Tablespoon Vegetable Or Canola Oil\n1 Tablespoon Bacon Fat\n Salt And Pepper, to taste\n Red And Green Bell Peppers, Diced (optional)",
    url: "http://thepioneerwoman.com/cooking/2008/04/basic-breakfast-potatoes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/04/Basic-Breakfast-Potatoes.jpg",
    cookTime: "PT30M",
    recipeYield: "6",
    datePublished: "2008-04-27",
    prepTime: "PT20M",
    description:
      "This is one of those basic, unadorned, cowboy-friendly staples of my cooking repertoire that's so utterly versatile, I just c...",
  },
  {
    name: "Chicken and Dumplings",
    ingredients:
      "2 Tablespoons Butter\n2 Tablespoons Olive Oil\n1/2 cup All-purpose Flour\n1 whole Chicken, Cut Into Pieces (cut Up Fryer)\n Salt And Pepper\n1/2 cup Finely Diced Carrots\n1/2 cup Finely Diced Celery\n1 whole Medium Onion, Finely Diced\n1/2 teaspoon Ground Thyme\n1/4 teaspoon Turmeric\n6 cups Low Sodium Chicken Broth\n1/2 cup Apple Cider\n1/2 cup Heavy Cream\n Dumplings:\n1-1/2 cup All-purpose Flour\n1/2 cup Yellow Cornmeal\n1 Tablespoon (heaping) Baking Powder\n1 teaspoon Kosher Salt\n1-1/2 cup Half-and-half\n2 Tablespoons Minced Fresh Parsley (optional)\n Salt As Needed",
    url: "http://thepioneerwoman.com/cooking/2010/12/chicken-and-dumplings/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/12/5258969545_eeb0c35356_o.jpg",
    cookTime: "PT30M",
    recipeYield: "8",
    datePublished: "2010-12-14",
    prepTime: "PT15M",
    description:
      "Chicken and dumplings. Mmmm. Let's just contemplate that for a moment.     I love Chicken and Dumplings. Love it. I love Chic...",
  },
  {
    name: "Spicy Lemon Garlic Shrimp",
    ingredients:
      "2 pounds Raw Shrimp, Deveined, Shells On\n2 sticks Cold Unsalted Butter Cut Into Pieces\n1 teaspoon Kosher Salt\n4 cloves Garlic, Peeled\n1/4 cup Fresh Parsley\n1/2 teaspoon Crushed Red Pepper\n1 whole Lemon, Juiced",
    url: "http://thepioneerwoman.com/cooking/2010/12/spicy-lemon-garlic-shrimp/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/12/5295235490_b46b358620_o.jpg",
    cookTime: "PT25M",
    recipeYield: "8",
    datePublished: "2010-12-27",
    prepTime: "PT5M",
    description:
      "This is an extremely delectable take on the Spicy Shrimp (a standard southern shrimp dish) I posted here in the early days of...",
  },
  {
    name: "Meatballs with Peppers and Pineapple",
    ingredients:
      "1-1/4 pound Ground Beef\n1/2 whole Onion, Diced Very Finely\n1 whole Egg\n1/2 cup Panko Bread Crumbs (or Regular Breadcrumbs)\n1 teaspoon Kosher Salt\n Freshly Ground Black Pepper, To Taste\n1/2 teaspoon Crushed Red Pepper, More To Taste\n1/4 cup All-purpose Flour\n Canola Oil, For Frying\n2 whole Green Bell Peppers, Seeded And Diced Roughly\n1-1/2 cup Fresh Pineapple Chunks\n2 cups Beef Stock Or Broth\n2 Tablespoons Soy Sauce\n1/2 cup Sherry Or White Wine Vinegar\n1/3 cup Sugar\n1 Tablespoon Cornstarch\n Salt To Taste\n Crushed Red Pepper, To Taste\n Extra Beef Stock If Needed",
    url: "http://thepioneerwoman.com/cooking/2010/12/meatballs-with-peppers-and-pineapple/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/12/5301946098_b8bf24c98e_o.jpg",
    cookTime: "PT20M",
    recipeYield: "8",
    datePublished: "2010-12-29",
    prepTime: "PT20M",
    description:
      "This recipe was adapted from an old recipe from a church friend of ours named Mary Friley. Mary had beautiful salt-and-pepper...",
  },
  {
    name: "Zannie\u2019s Black-Eyed Pea Dip",
    ingredients:
      "1 can (14-ounce) Can Black-eyed Peas\n1/4 whole Onion, Chopped Fine\n1/4 cup Sour Cream\n8 slices Jarred Jalapenos\n1 cup Grated Sharp Cheddar Cheese\n3 Tablespoons Salsa\n Hot Sauce, to taste\n Salt And Black Pepper To Taste",
    url: "http://thepioneerwoman.com/cooking/2010/12/zannies-black-eyed-pea-dip/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/12/5309757718_74c9b53dcd_o.jpg",
    cookTime: "PT30M",
    recipeYield: "12",
    datePublished: "2010-12-31",
    prepTime: "PT10M",
    description:
      "Zannie is my sister.     Well, she's not really my sister. But she's the mother of my two sweet nephews---we had our first ba...",
  },
  {
    name: "Pig Cake",
    ingredients:
      " FOR THE CAKE:\n1 box (18.25 Oz. Box) Yellow Cake Mix\n1 stick Margarine, Softened\n1 can (14 Oz. Can) Mandarin Oranges, Drained, 1/2 Cup Juice Reserved\n4 whole Eggs\n1 teaspoon Vanilla Extract\n _____\n FOR THE TOPPING:\n1 package (4 Oz. Box) Vanilla Instant Pudding Mix\n1 can (20 Oz. Can) Crushed Pineapple, Juice Reserved\n1/2 cup Powdered Sugar\n4 ounces, fluid Frozen Whipped Topping (such As Cool Whip)\n Extra Mandarin Orange Slices, For Garnish",
    url: "http://thepioneerwoman.com/cooking/2011/01/pig-cake/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/01/5318534306_21e6675b77_o.jpg",
    cookTime: "PT30M",
    recipeYield: "16",
    datePublished: "2011-01-03",
    prepTime: "PT10M",
    description:
      "I'm in sort of a potluck mood lately. I can't explain it. I don't know whether it's that we haven't had a potluck meal at our...",
  },
  {
    name: "Pistachio Cake",
    ingredients:
      "1 box White Cake Mix\n1 package (4 Ounce) Pistachio Instant Pudding Mix\n1/2 cup Orange Juice\n1/2 cup Water\n1/2 cup Vegetable Oil\n4 whole Eggs\n3/4 cups Chocolate Syrup (such As Hershey's)",
    url: "http://thepioneerwoman.com/cooking/2011/01/pistachio-cake/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/01/5322713956_2a895494ae_o.jpg",
    cookTime: "PT1H",
    recipeYield: "18",
    datePublished: "2011-01-04",
    prepTime: "PT10M",
    description:
      "Warning: This is an extremely complicated recipe.  Enter only if your skill level in the kitchen is very advanced. You have t...",
  },
  {
    name: "Quesadillas de Camarones",
    ingredients:
      " Flour Tortillas\n12 whole Large Shrimp, Peeled And Deveined\n8 ounces, fluid Mexican Red Sauce\n1 whole Large Onion\n1 whole Red Bell Pepper\n1 whole Green Bell Pepper\n2 cups Cheese, Grated (Monterey Jack Is Best)\n2 Tablespoons Olive Oil\n Salt To Taste",
    url: "http://thepioneerwoman.com/cooking/2011/01/quesadillas-de-camarones/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/01/3901585569_9503eb5474_o.jpg",
    cookTime: "PT20M",
    recipeYield: "6",
    datePublished: "2011-01-05",
    prepTime: "PT15M",
    description:
      "Busily editing new recipe photos and juggling 4,000 other balls today, I'm bringing this, one of my absolute favorite dishes ...",
  },
  {
    name: "Chicken Tortilla Soup",
    ingredients:
      "2 whole Boneless, Skinless Chicken Breasts\n1 Tablespoon Olive Oil\n1-1/2 teaspoon Cumin\n1 teaspoon Chili Powder\n1/2 teaspoon Garlic Powder\n1/2 teaspoon Salt\n1 Tablespoon Olive Oil\n1 cup Diced Onion\n1/4 cup Diced Green Bell Pepper\n1/4 cup Red Bell Pepper\n3 cloves Garlic, Minced\n1 can (10 Oz. Can) Rotel Tomatoes And Green Chilies\n32 ounces, fluid Low Sodium Chicken Stock\n3 Tablespoons Tomato Paste\n4 cups Hot Water\n2 cans (15 Oz. Can) Black Beans, Drained\n3 Tablespoons Cornmeal Or Masa\n5 whole Corn Tortillas, Cut Into Uniform Strips Around 2 To 3 Inches\n _____\n FOR THE GARNISHES:\n Sour Cream\n Diced Avocado\n Diced Red Onion\n Salsa Or Pico De Gallo\n Grated Monterey Jack Cheese\n Cilantro",
    url: "http://thepioneerwoman.com/cooking/2011/01/chicken-tortilla-soup/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/01/5337400468_d5892f3a03_o.jpg",
    cookTime: "PT1H30M",
    recipeYield: "8",
    datePublished: "2011-01-10",
    prepTime: "PT10M",
    description:
      "I love, love, love, love Chicken Tortilla Soup. So over the weekend, I made some.     The end.     Wasn't that a beautiful st...",
  },
  {
    name: "Jan\u2019s Dilly Bread",
    ingredients:
      "1 package (2 1/4 Teaspoons) Active Dry Yeast\n1/4 cup Warm Water\n1 cup Cottage Cheese, Heated To Lukewarm\n2 Tablespoons Sugar\n1 Tablespoon Minced Dried Onion\n1 Tablespoon Softened Butter\n2 teaspoons Dill Seed\n1 teaspoon Salt\n1/4 teaspoon Baking Soda\n1 whole Egg\n2-1/4 cups Flour (more If Needed)",
    url: "http://thepioneerwoman.com/cooking/2011/01/jans-dilly-bread/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/01/5339467992_dc29b5ebc9_o.jpg",
    cookTime: "PT45M",
    recipeYield: "12",
    datePublished: "2011-01-12",
    prepTime: "PT2H",
    description:
      "This is a lovely old recipe from Jan, a church friend of ours when I was growing up. Jan and her husband Bob (who happened to...",
  },
  {
    name: "Cherry Cake Pudding",
    ingredients:
      " Cake\n1 cup Sugar\n2 Tablespoons Butter, Softened\n1 whole Egg\n1 cup All-purpose Flour\n1 teaspoon Baking Powder\n1/8 teaspoon Salt\n1/2 cup Whole Milk\n1 can (15 Ounces) Cherries In Syrup (NOT Cherry Pie Filling) Drained, Juice Reserved\n1/2 cup Pecans, Finely Chopped\n Sauce:\n1 cup Juice From Cherries (add Water To Make 1 Cup If Necessary)\n1 cup Sugar\n1 Tablespoon All-purpose Flour\n1 Tablespoon Butter\n1/2 teaspoon Vanilla Extract\n Unsweetened Freshly Whipped Cream",
    url: "http://thepioneerwoman.com/cooking/2011/01/cherry-cake-pudding/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/01/5361588195_2031649a7a_z.jpg",
    cookTime: "PT40M",
    recipeYield: "10",
    datePublished: "2011-01-17",
    prepTime: "PT15M",
    description:
      "This old-time cake recipe reminds me a little of my grandma Iny's prune cake, in that it's a sticky, gooey, sweet delight...a...",
  },
  {
    name: "Sour Cream Enchiladas",
    ingredients:
      "12 whole Corn Tortillas\n Canola Oil, For Frying\n1 can (20 Ounce) Enchilada Sauce\n2 cups Sour Cream\n3 cups Sharp Cheddar Cheese, Grated\n1 cup Sliced/chopped Green Onions\n1/2 teaspoon Ground Cumin\n1/4 teaspoon Cayenne Pepper",
    url: "http://thepioneerwoman.com/cooking/2011/01/sour-cream-enchiladas/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/01/5373533791_25ccb7a0e3_o.jpg",
    cookTime: "PT20M",
    recipeYield: "6",
    datePublished: "2011-01-21",
    prepTime: "PT15M",
    description:
      "This was such an easy throw-together meal last night. Reminded me of the meatless days of yore.     They're cheesy, sour crea...",
  },
  {
    name: "The MM Sandwich, PW Style",
    ingredients:
      "4 Tablespoons Butter\n2 pounds Cube Steak (round Steak That's Been Extra Tenderized)\n Kosher Salt\n Freshly Ground Pepper\n1 whole Large Yellow Onion, Halved And Sliced Thick\n2 whole Green Bell Peppers, Sliced Into Rings\n2 whole Red Bell Peppers, Sliced Into Rings\n3 cloves Garlic, Minced\n16 ounces, weight White Mushrooms, Sliced\n2 Tablespoons (additional) Butter\n1-1/2 cup Sherry (regular Or Cooking Sherry Is Fine)\n4 Tablespoons Worcestershire Sauce\n4 dashes Tabasco (more To Taste)\n8 whole Deli Rolls (the Crustier The Better)\n2 Tablespoons (additional) Butter\n8 slices Cheese (Provolone, Swiss, Pepper Jack)",
    url: "http://thepioneerwoman.com/cooking/2011/01/the-mm-sandwich-pw-style/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/01/5382885596_c476ae7c4a_o.jpg",
    cookTime: "PT30M",
    recipeYield: "8",
    datePublished: "2011-01-24",
    prepTime: "PT15M",
    description:
      "Before I begin, let me state for the record that Marlboro Man would not touch this adulterated version of his beloved favorit...",
  },
  {
    name: "Shrimpo de Gallo",
    ingredients:
      "1 pound Cooked Shrimp (tails Removed), Chopped\n1/2 whole Red Onion, Diced Finely\n1/2 cup Green Or Black Olives, Chopped\n2 whole Tomatoes, Diced\n2 whole Fresh Jalapeno Peppers, Minced\n2 whole Avocados, Chopped\n2 whole Limes, Juiced\n Kosher Salt To Taste\n2 cups Cilantro, Chopped",
    url: "http://thepioneerwoman.com/cooking/2011/01/shrimpo-de-gallo/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/01/5389463004_88a6d41fda_o.jpg",
    cookTime: "PT",
    recipeYield: "12",
    datePublished: "2011-01-26",
    prepTime: "PT15M",
    description:
      "Yes, I made up the name for this recipe. Why do you ask?    I tried my best, okay? My choices were:    Shrimp Pico de Gallo  ...",
  },
  {
    name: "Red Thai Duck Curry",
    ingredients:
      "3 whole Boneless Duck Breasts, Fat On If Desired\n2 Tablespoons Olive Oil\n3 cloves Garlic, Minced\n6 Tablespoons Thai Red Curry Paste (storebought Or Homemade)\n1-1/2 can (14 Ounce) Coconut Milk\n2 cups Hot Water\n4 Tablespoons Fish Sauce\n3 Tablespoons Minced Fresh Ginger\n2 Tablespoons Olive Oil (additional)\n1/2 whole Red Onion, Sliced\n1 whole Green Or Red Bell Pepper, Cored And Sliced\n1 cup Grape Tomatoes\n1/2 whole Pineapple, Cut Into Chunks (can Use Canned Pineapple)\n LOTS Of Fresh Basil, Chopped\n Jasmine Rice Cooked",
    url: "http://thepioneerwoman.com/cooking/2011/01/red-thai-duck-curry/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/01/5399320435_139099bda0_o.jpg",
    cookTime: "PT40M",
    recipeYield: "6",
    datePublished: "2011-01-31",
    prepTime: "PT10M",
    description:
      "I almost can't speak. It really was that delicious.     I think that due to the fact that I live on a cattle ranch in Oklahom...",
  },
  {
    name: "Pasta ai Quattro Formaggi",
    ingredients:
      "1 pound Angel Hair Pasta\n1/2 cup Grated Fontina Cheese\n1/2 cup Grated Parmesan Cheese\n1/2 cup Grated Romano Cheese\n1/2 cup Goat Cheese (chevre)\n2 Tablespoons Butter, Softened\n1 cup Heavy Cream\n1 whole Garlic Clove, Peeled\n1/2 teaspoon Salt, More To Taste\n Freshly Ground Black Pepper\n Minced Fresh Parsley",
    url: "http://thepioneerwoman.com/cooking/2011/02/pasta-ai-quattro-formaggi/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/02/5424207888_f36aff4048_o.jpg",
    cookTime: "PT10M",
    recipeYield: "8",
    datePublished: "2011-02-07",
    prepTime: "PT10M",
    description:
      "I included this recipe in the Black Heels book because it\u2019s one of the first (disastrous) things I cooked for Marlboro Man ...",
  },
  {
    name: "Frozen Cappuccino Cups",
    ingredients:
      "15 whole Chocolate Sandwich Cookies\n2 Tablespoons Melted Butter\n2 ounces, weight Semi Sweet Chocolate, Chopped Into Chunks\n1 pint Coffee Ice Cream, Slightly Softened\n1/2 teaspoon Ground Cinnamon\n1/8 teaspoon Ground Nutmeg\n TOPPINGS:\n Extra Chocolate Cookie Crumbs\n Finely Chopped Pecans\n Chocolate Sauce\n Sweetened Whipped Cream\n Chocolate Curls",
    url: "http://thepioneerwoman.com/cooking/2011/02/frozen-cappuccino-cups/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/02/5437476867_5b1a50dcae_z.jpg",
    cookTime: "PT",
    recipeYield: "12",
    datePublished: "2011-02-16",
    prepTime: "PT15M",
    description:
      "I'm cooking some new recipes today (my kitchen is already a disaster. please send help. thank you.) and will have one up tomo...",
  },
  {
    name: "Spinach and Mushroom Quesadillas",
    ingredients:
      "3 Tablespoons Butter\n16 ounces, weight White Mushrooms, Sliced\n1/3 cup Sherry Or Wine\n3 Tablespoons (additional) Sherry Or Wine\n Kosher Salt And Pepper To Taste\n1 bag Baby Spinach\n12 whole Flour Tortillas (Soft Taco Size)\n8 ounces, weight Fontina (or Monterey Jack) Cheese, Grated\n3 ounces, weight Goat Cheese (chevre)\n Extra Butter, For Tortillas\n Salsa, For Serving",
    url: "http://thepioneerwoman.com/cooking/2011/02/spinach-and-mushroom-quesadillas-with-fontina-and-goat-cheese/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/02/5451861449_5d2442d853_o.jpg",
    cookTime: "PT20M",
    recipeYield: "6",
    datePublished: "2011-02-17",
    prepTime: "PT10M",
    description:
      "First of all, naming recipes cracks me up.     Spinach and Mushroom Quesadillas with Fontina and Goat Cheese.   Fontina and G...",
  },
  {
    name: "Creamy Chicken Spaghetti Casserole",
    ingredients:
      "1 whole Cut Up Fryer Chicken\n1 stick 1/2 Cup Butter\n16 ounces, weight White Mushrooms, Sliced\n1/4 cup Dry White Wine\n Kosher Salt And Pepper\n1/4 cup Flour\n2 cups Chicken Broth (reserved From Chicken Or Canned)\n1-1/2 cup Whole Milk\n1/4 cup (additional) Dry White Wine\n1 cup Freshly Grated Parmesan Cheese\n1 cup Whole Black Olives, Chopped\n1 teaspoon Kosher Salt, Or To Taste\n Freshly Ground Black Pepper\n Extra Cheese, For Sprinkling\n1 pound Thin Spaghetti",
    url: "http://thepioneerwoman.com/cooking/2011/02/creamy-chicken-spaghetti-casserole/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/02/5465969485_ba49f4620b_o.jpg",
    cookTime: "PT30M",
    recipeYield: "8",
    datePublished: "2011-02-22",
    prepTime: "PT45M",
    description:
      "Make this today.     Sorry to be bossy. But this is important.     I whipped up this casserole yesterday and loved it. I had ...",
  },
  {
    name: "Devil Dogs",
    ingredients:
      '1 whole Chocolate Sheet Cake (see "Best Chocolate Sheet Cake Ever" On Tasty Kitchen)\n1 whole Recipe For "That\'s The Best Frosting I\'ve Ever Had" On Tasty Kitchen (or You Can Use Frozen Whipped Topping)\n Maraschino Cherries',
    url: "http://thepioneerwoman.com/cooking/2011/02/devil-dogs/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/02/5471010984_60c9544d59_o.jpg",
    cookTime: "PT20M",
    recipeYield: "12",
    datePublished: "2011-02-24",
    prepTime: "PT45M",
    description:
      "Raise your hand if you know what a Devil Dog is. Well, let me amend that: raise your hand if, to you, a Devil Dog is a chocol...",
  },
  {
    name: "Chicken Fried Steak",
    ingredients:
      "3 pounds Cube Steak (tenderized Round Steak That's Been Extra Tenderized)\n1-1/2 cup Whole Milk, Plus Up To 2 Cups For Gravy\n2 whole Large Eggs\n3 cups All-purpose Flour\n Seasoned Salt\n1/4 teaspoon Cayenne\n LOTS Of Black Pepper. Lots.\n Canola Oil, For Frying\n Salt And Pepper, For Both Meat And Gravy",
    url: "http://thepioneerwoman.com/cooking/2011/02/chicken-fried-steak/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/02/5474444101_0e1db7dfb4_o.jpg",
    cookTime: "PT25M",
    recipeYield: "8",
    datePublished: "2011-02-28",
    prepTime: "PT15M",
    description:
      "There's nothing special about this dish, except that it's a total miracle.     It's Chicken Fried Steak, is what it is. I mad...",
  },
  {
    name: "Grasshopper Pie",
    ingredients:
      "16 whole Chocolate Sandwich Cookies\n2 Tablespoons Butter, Melted\n24 whole Large Marshmallows (or Container Of Marshmallow Fluff)\n2/3 cups Half-and-half\n2 Tablespoons Creme De Menthe Liqueur (more To Taste)\n2 Tablespoons Creme De Cacao Liqueur\n Drop Or Two Of Green Food Coloring\n1 cup Heavy Cream\n Extra Cookie Crumbs, For Sprinkling",
    url: "http://thepioneerwoman.com/cooking/2011/03/grasshopper-pie/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/03/5495723664_3c56a2cf19_o.jpg",
    cookTime: "PT",
    recipeYield: "12",
    datePublished: "2011-03-04",
    prepTime: "PT20M",
    description:
      "I love desserts containing creme de menthe. I'm still not sure what my mom was thinking, but I used to eat creme de menthe pa...",
  },
  {
    name: "Short Ribs in Tomato Sauce",
    ingredients:
      "8 whole Beef Short Ribs\n2 Tablespoons Olive Oil\n Salt And Pepper, to taste\n1 Tablespoon Sugar\n4 cloves Garlic, Crushed\n1 whole Medium Onion, Diced\n1 cup Red Or White Wine\n1 can (28 Ounce) Whole Tomatoes\n1 can (14 Ounce) Tomato Sauce\n1 teaspoon Salt\n1/4 teaspoon Red Pepper Flakes\n1/4 teaspoon Ground Thyme\n1 pound Fettuccine\n Grated Parmesan Cheese\n Minced Fresh Parsley",
    url: "http://thepioneerwoman.com/cooking/2011/03/short-ribs-in-tomato-sauce/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/03/5503914881_003ca8be50_o.jpg",
    cookTime: "PT4H",
    recipeYield: "6",
    datePublished: "2011-03-07",
    prepTime: "PT10M",
    description:
      "I've said it before and I'll say it again: Short ribs are my life. They really, really are. I just can't think of another cut...",
  },
  {
    name: "Happy Pi Day!",
    ingredients:
      " Crust\n18 whole Graham Crackers (the 4-section Large Pieces)\n1/3 cup Sugar\n1/3 cup Butter, Melted\n _____\n Filling\n1 Tablespoon (heaping) Lime Zest\n1/2 cup Lime Juice\n2 whole Egg Yolks\n1 can (14 Oz) Sweetened Condensed Milk",
    url: "http://thepioneerwoman.com/cooking/2011/03/happy-pi-day/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/03/keylime.jpg",
    cookTime: "PT1H",
    recipeYield: "12",
    datePublished: "2011-03-14",
    prepTime: "PT15M",
    description:
      "Did you know today is Pi Day?     Not Pie Day. Pi Day. A day set aside by founder Larry Shaw to commemorate...well, Pi.     N...",
  },
  {
    name: "Two Crab Dips",
    ingredients:
      "2 packages 8 Ounce Cream Cheese\n2 Tablespoons Mayonnaise\n2 cans (7-ounce Each) Crabmeat (or Use Fresh Or Frozen)\n4 whole Green Onions, Sliced\n2 Tablespoons Whole Milk\n2 Tablespoons Horseradish (more To Taste)\n1/2 teaspoon Salt\n Freshly Ground Black Pepper\n5 dashes Tabasco (more Or Less To Taste)\n1/4 cup Slivered Almonds",
    url: "http://thepioneerwoman.com/cooking/2011/03/two-crab-dips/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/03/dip.jpg",
    cookTime: "PT25M",
    recipeYield: "12",
    datePublished: "2011-03-10",
    prepTime: "PT10M",
    description:
      "I'm in Savannah, Georgia as I type this. Marlboro Man and the boys are with me. When I'm finished here (oh my, have we had an...",
  },
  {
    name: "Sweet Cinnamon Scones",
    ingredients:
      "3 cups All-purpose Flour\n1/3 cup Sugar\n5 teaspoons Baking Powder\n1/2 teaspoon Ground Cinnamon\n2 sticks (1 Cup) Unsalted Butter\n3/4 cups Heavy Cream\n1 whole Egg\n1 teaspoon Vanilla Extract\n1 cup Cinnamon Chips\n Topping\n1/2 cup Sugar\n1 teaspoon Ground Cinnamon\n1-1/2 teaspoon Heavy Cream",
    url: "http://thepioneerwoman.com/cooking/2011/03/sweet-cinnamon-scones/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/03/5525020534_a195290297_o1.jpg",
    cookTime: "PT25M",
    recipeYield: "8",
    datePublished: "2011-03-15",
    prepTime: "PT20M",
    description:
      "I made these scones Sunday afternoon. Then I ate them.     I started to post the recipe yesterday morning, but when I saw the...",
  },
  {
    name: "Sour Cream Noodle Bake",
    ingredients:
      "1-1/4 pound Ground Chuck\n1 can 15-ounces Tomato Sauce\n1/2 teaspoon Salt\n Freshly Ground Black Pepper\n8 ounces, weight Egg Noodles\n1/2 cup Sour Cream\n1-1/4 cup Small Curd Cottage Cheese\n1/2 cup Sliced Green Onions (less To Taste)\n1 cup Grated Sharp Cheddar Cheese",
    url: "http://thepioneerwoman.com/cooking/2011/03/sour-cream-noodle-bake/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/03/5533560574_a4480dfc41_o.jpg",
    cookTime: "PT20M",
    recipeYield: "8",
    datePublished: "2011-03-17",
    prepTime: "PT10M",
    description:
      'Raise your hand if you love recipes with the word "Bake" in the title.    This is a classic old recipe shared with my mom by ...',
  },
  {
    name: "Grilled Chicken and Roasted Red Pepper Panini",
    ingredients:
      "2 whole Boneless, Skinless Chicken Breasts\n8 whole Sun-dried Tomatoes, Packed In Oil\n3 Tablespoons Prepared Basil Pesto\n1 Tablespoon Extra Virgin Olive Oil\n1 Tablespoon Lemon Juice\n1/2 teaspoon Kosher Salt\n Freshly Ground Black Pepper\n1/4 cup Mayonnaise\n2 whole Red Bell Peppers\n8 whole Slices Provolone Or Mozzarella Cheese\n8 slices Good Whole Grain Sandwich Bread\n4 Tablespoons Butter, Softened",
    url: "http://thepioneerwoman.com/cooking/2011/03/grilled-chicken-and-roasted-red-pepper-panini/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/03/5545275364_b02f6396a6_z.jpg",
    cookTime: "PT25M",
    recipeYield: "4",
    datePublished: "2011-03-21",
    prepTime: "PT20M",
    description:
      "I love panini.     I love all varieties of panini.     I whipped this one up yesterday. It's nice and basic, and can be adapt...",
  },
  {
    name: "Spicy Dr. Pepper Shredded Pork",
    ingredients:
      '1 whole Large Onion\n1 whole Pork Shoulder ("pork Butt") - 5 To 7 Pounds\n Salt And Freshly Ground Black Pepper\n1 can (11 Ounce) Chipotle Peppers In Adobo Sauce\n2 cans Dr. Pepper\n2 Tablespoons Brown Sugar',
    url: "http://thepioneerwoman.com/cooking/2011/03/spicy-dr-pepper-shredded-pork/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/03/5551711173_dc42f7fc4b_z.jpg",
    cookTime: "PT6H",
    recipeYield: "18",
    datePublished: "2011-03-23",
    prepTime: "PT5M",
    description:
      "It came to me in a vision, this bizarre decision to cook a pork butt in Dr Pepper.     Then again, so did my decision to get ...",
  },
  {
    name: "Pasta Salad with Tomatoes, Zucchini, and Feta",
    ingredients:
      "12 ounces, weight Farfalle (bowtie) Pasta\n2 Tablespoons Extra Virgin Olive Oil\n1 whole Lemons (more To Taste)\n Salt\n Freshly Ground Black Pepper\n2 whole Zucchini, Cut Into Small Wedges Or Diced\n10 ounces, weight Grape Tomatoes, Halved Lengthwise\n1/3 cup Minced Fresh Parsley\n6 ounces, weight Crumbled Feta Cheese",
    url: "http://thepioneerwoman.com/cooking/2011/03/pasta-salad-with-tomatoes-zucchini-and-feta/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/03/5566512470_9e98939ab3_z.jpg",
    cookTime: "PT10M",
    recipeYield: "12",
    datePublished: "2011-03-28",
    prepTime: "PT10M",
    description:
      "Yesterday, after a weekend of brisket, chocolate cake, and innumerable other naughty delights, suddenly all I wanted was a co...",
  },
  {
    name: "My Brother\u2019s Chicken Tacos",
    ingredients:
      "16 whole Corn Tortillas (small Size)\n4 whole Boneless, Skinless Chicken Breasts, Cut Into Pieces\n Salt, Cumin, Chili Powder To Taste (or Use Taco Seasoning)\n2 Tablespoons Canola Oil\n2 cans (4 Ounce) Diced Green Chilies\n1-1/2 cup Finely Grated Cheese (cheddar Or Cheddar/jack Mix)\n Sour Cream\n Hot Sauce (Chulula Or Other Brand)\n2 cups Thinly Sliced Romaine Lettuce (or Any Lettuce)\n4 whole Roma Tomatoes, Diced\n Canola Oil, For Frying Tacos",
    url: "http://thepioneerwoman.com/cooking/2011/03/my-brothers-chicken-tacos/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/03/tacos.jpg",
    cookTime: "PT30M",
    recipeYield: "8",
    datePublished: "2011-03-31",
    prepTime: "PT10M",
    description:
      "Before I share this recipe with you, let me warn you: it's a royal mess. But as is the case with many messy dishes (cinnamon ...",
  },
  {
    name: "Red Velvet Sheet Cake",
    ingredients:
      "1 cup Shortening\n1-3/4 cup Sugar\n2-1/2 cups Cake Flour\n1-1/4 teaspoon Salt\n2 whole Eggs\n1 cup Buttermilk\n1 teaspoon Vanilla Extract\n1 teaspoon Baking Soda\n1-1/2 teaspoon Vinegar\n1-1/2 ounce, fluid Red Food Coloring\n1-1/2 teaspoon Cocoa Powder",
    url: "http://thepioneerwoman.com/cooking/2011/04/red-velvet-sheet-cake/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/04/5587851660_5c7cdce3c0_o.jpg",
    cookTime: "PT20M",
    recipeYield: "24",
    datePublished: "2011-04-04",
    prepTime: "PT20M",
    description:
      "I'm a sheet cake type of girl. I love the simplicity...the ease...the I-don't-have-to-make-layer-cakes-if-I-don't-want-to-dan...",
  },
  {
    name: "Vegetable Lasagna",
    ingredients:
      "10 ounces, weight Lasagna Noodles\n2 Tablespoons Olive Oil\n1 whole Medium Onion\n4 cloves Garlic\n1 whole Red Bell Pepper, Diced\n24 ounces, weight White Mushrooms, Chopped\n4 whole Squash (yellow Or Zucchini), Diced\n1 can (28 Ounce) Whole Tomatoes\n1/2 cup White Wine\n1/4 cup Fresh Parsley, Chopped (more To Taste)\n1/2 teaspoon Kosher Salt (more To Taste)\n Freshly Ground Black Pepper\n 1/2 Teaspoon Red Pepper Flakes\n30 ounces, weight Ricotta Cheese\n2 whole Eggs\n1/2 cup Grated Parmesan\n1/4 teaspoon Kosher Salt\n Freshly Ground Black Pepper\n1 pound Thinly Sliced Mozarella Cheese\n Extra Parmesan Cheese, For Sprinkling",
    url: "http://thepioneerwoman.com/cooking/2011/04/vegetable-lasagna/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/04/lasagna.jpg",
    cookTime: "PT45M",
    recipeYield: "12",
    datePublished: "2011-04-11",
    prepTime: "PT20M",
    description:
      "I woke up yesterday knowing I was going to make vegetable lasagna of some kind. It was meant to be, it was in the cards, it w...",
  },
  {
    name: "Killer Club Sandwich",
    ingredients:
      "12 slices Sandwich Bread\n4 Tablespoons Mayonnaise\n1 Tablespoon Prepared Basil Pesto\n1 Tablespoon Prepared Sun-dried Tomato Pesto (or Just A Couple Of Pureed Sun-dried Tomatoes)\n8 slices Bacon, Cut In Half\n1/2 pound Shaved Ham\n1/2 pound Shaved Turkey\n4 whole Avocados, Peeled And Sliced\n4 slices Cheese (swiss, Mozzarella, Etc.)\n Romaine Or Green Leaf Lettuce",
    url: "http://thepioneerwoman.com/cooking/2011/04/killer-club-sandwich/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/04/club42.jpg",
    cookTime: "PT15M",
    recipeYield: "4",
    datePublished: "2011-04-08",
    prepTime: "PT10M",
    description:
      "Club sandwiches remind me of the seventies. I went through a phase in the seventies when I'd order club sandwiches any time m...",
  },
  {
    name: "Greek Salad",
    ingredients:
      "1 head Romaine Lettuce, Chopped\n4 whole Ripe Tomatoes, Cut Into Six Wedges Each, Then Each Wedge Cut In Half\n1 whole (large) Cucumber, Peeled, Cut Into Fourths Lengthwise, And Diced Into Large Chunks\n1/2 whole Red Onion, Sliced Very Thin\n30 whole Pitted Kalamata Olives, Cut In Half Lengthwise\n6 ounces, weight Crumbled Feta Cheese\n Fresh Parsley, Roughly Chopped\n1/4 cup Olive Oil\n2 Tablespoons Red Wine Vinegar\n1 teaspoon Sugar (more To Taste)\n1 clove Garlic, Minced\n6 whole Kalamata Olives (extra), Chopped Fine\n1/4 teaspoon Salt\n Freshly Ground Black Pepper\n1 whole Lemon, For Squeezing",
    url: "http://thepioneerwoman.com/cooking/2011/04/greek-salad/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/04/greek.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2011-04-18",
    prepTime: "PT20M",
    description:
      "It's Holy Week, and you know what that means: it's Greek Salad time!     Okay, so Greek Salad has absolutely nothing to do wi...",
  },
  {
    name: "Vanilla Cupcakes with Vanilla Cream Cheese Icing",
    ingredients:
      " CUPCAKES\n1 cup Vegetable Shortening\n1-3/4 cup Sugar\n2-1/2 cups Cake Flour\n1-1/4 teaspoon Salt\n2 whole Large Eggs\n1 cup Buttermilk\n2-1/2 teaspoons Vanilla Extract (or The Caviar From 1 Vanilla Bean)\n1 teaspoon Baking Soda\n1-1/2 teaspoon Vinegar\n Icing\n1 stick Butter, Softened\n1 package (8 Ounce) Cream Cheese, Softened\n4 cups Sifted Powdered Sugar (more If Needed)\n1/4 teaspoon Salt\n3 teaspoons Vanilla Extract (or The Caviar From 1 Vanilla Bean)",
    url: "http://thepioneerwoman.com/cooking/2011/04/basic-vanilla-cupcakes-with-vanilla-cream-cheese-icing/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/04/5616296404_5ddbac54de_o.jpg",
    cookTime: "PT20M",
    recipeYield: "18",
    datePublished: "2011-04-13",
    prepTime: "PT20M",
    description:
      "I made cupcakes yesterday, for a very important occasion:     I wanted to.     And today, if you want to, you can make cupcak...",
  },
  {
    name: "Grilled Chicken Salad with Feta, Fresh Corn, and Blueberries",
    ingredients:
      "4 whole Boneless, Skinless Chicken Breasts\n Salt And Pepper, to taste\n Olive Oil, For Drizzling\n3 stalks Celery (inner Light Green Stalks), Finely Diced\n2 ears Fresh Corn\n1/4 whole Medium Red Onion, Finely Diced\n1-1/2 cup Blueberries\n3 Tablespoons Fresh Dill, Minced\n4 Tablespoons Mayonnaise\n4 Tablespoons Sour Cream\n1/4 cup Half-and-half\n1 whole Lemon\n1 teaspoon Sugar (more To Taste)\n Salt And Pepper (additional) To Taste\n3/4 cups Crumbled Feta",
    url: "http://thepioneerwoman.com/cooking/2011/04/grilled-chicken-salad-with-feta-fresh-corn-and-blueberries/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/04/TPW_4112.jpg",
    cookTime: "PT15M",
    recipeYield: "12",
    datePublished: "2011-04-28",
    prepTime: "PT20M",
    description:
      "I had dinner in my hometown the other evening, and it was so much fun to catch up with old friends and acquaintances I hadn't...",
  },
  {
    name: "Knock You Naked Brownies",
    ingredients:
      "1 box (18.5 Ounce) German Chocolate Cake Mix (I Used Duncan Hines)\n1 cup Finely Chopped Pecans\n1/3 cup Evaporated Milk\n1/2 cup Evaporated Milk (additional)\n1/2 cup Butter, Melted\n60 whole Caramels, Unwrapped\n1/3 cup Semi-Sweet Chocolate Chips\n1/4 cup Powdered Sugar",
    url: "http://thepioneerwoman.com/cooking/2011/05/knock-you-naked-brownies/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/05/brownies.jpg",
    cookTime: "PT23M",
    recipeYield: "12",
    datePublished: "2011-05-02",
    prepTime: "PT15M",
    description:
      "Goodness. You have to try these.    Here's how it shakes out. Several weeks ago, I was gifted with a tin of brownies. To be s...",
  },
  {
    name: "Risotto Primavera",
    ingredients:
      "5 cups Low Sodium Chicken Broth\n2 Tablespoons Olive Oil\n2 Tablespoons Butter\n1/2 whole Large Yellow Onion Finely Diced\n3 whole Carrots, Peeled And Finely Diced\n1/2 cup Cauliflower Pieces\n1/2 cup Broccoli Pieces\n1 whole Yellow Squash, Finely Diced\n1/2 teaspoon Kosher Salt\n1 Tablespoon Olive Oil (additional)\n1 Tablespoon Butter (additional)\n1-1/2 cup Arborio Rice\n1-1/2 cup Dry White Wine\n1-1/2 teaspoon Kosher Salt (additional), More To Taste\n4 whole Green Onions, Thinly Sliced\n1/2 cup Frozen Peas\n4 ounces, weight Goat Cheese\n1/2 cup Grated Parmesan Cheese\n Fresh Dill, For Garnish\n Optional Vegetables To Substitute For Any Of The Above: Mushrooms, Red Bell Pepper, Zucchini, Asparagus Pieces",
    url: "http://thepioneerwoman.com/cooking/2011/05/risotto-primavera/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/05/risottoprimavera.jpg",
    cookTime: "PT45M",
    recipeYield: "8",
    datePublished: "2011-05-09",
    prepTime: "PT10M",
    description:
      "I love risotto.     And I love primavera dishes: pasta, pizza, lasagna.    Last night, because it was Mother's Day, because w...",
  },
  {
    name: "Make This Today",
    ingredients:
      "2 whole Medium Onions, Halved And Sliced\n1-1/4 stick Butter\n2 pounds Cube Steak, Cut Into 1/2-inch Strips\n1 teaspoon Kosher Salt\n1 teaspoon Black Pepper\n1/4 cup Worcestershire Sauce\n5 dashes Tabasco Sauce\n4 whole Deli Rolls (crusty), Split\n8 slices (thick) Fresh Mozzarella\n8 slices (thick) Ripe Tomato\n1-1/2 cup Arugula",
    url: "http://thepioneerwoman.com/cooking/2011/05/make-this-today/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/05/sand.jpg",
    cookTime: "PT20M",
    recipeYield: "4",
    datePublished: "2011-05-31",
    prepTime: "PT10M",
    description:
      "There's the Marlboro Man Sandwich. Pure, unadulterated, and unafraid.     Try not to be blown away by my 2007 food photograph...",
  },
  {
    name: "Tuna Melts",
    ingredients:
      "5 ounces, weight Tuna\n1/4 cup Finely Chopped Red Onion\n1/4 cup Finely Chopped Red Bell Pepper\n1 whole Fresh Jalapeno, Finely Chopped\n2 whole Hard Boiled Eggs, Chopped\n6 whole Sweet Gerkins, Sliced\n1/3 cup Mayonnaise\n2 Tablespoons Dijon Mustard\n Splash Of Pickle Juice\n Salt And Pepper, to taste\n6 whole English Muffins Split\n12 slices Cheese (Swiss, Provolone, Muenster)",
    url: "http://thepioneerwoman.com/cooking/2011/06/tuna-melts/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/06/tuna.jpg",
    cookTime: "PT",
    recipeYield: "6",
    datePublished: "2011-06-02",
    prepTime: "PT20M",
    description:
      "When I was a teenager, my mom and I went over to a nice lady's house for reasons I can't remember. Maybe she wanted to visit ...",
  },
  {
    name: "Spicy Pasta Salad with Smoked Gouda, Tomatoes, and Basil",
    ingredients:
      "12 ounces, weight Mostaccioli\n1/2 cup Mayonnaise\n1/4 cup Whole Milk\n4 Tablespoons White Vinegar\n1-1/2 teaspoon Adobo Sauce From Chipotle Peppers (or One Minced Chipotle Pepper)\n1/2 teaspoon Salt\n Ground Black Pepper To Taste\n10 ounces, weight Grape Tomatoes, Halved Lengthwise\n1/2 pound Smoked Gouda Cheese, Cut Into Small Cubes\n24 whole Basil Leaves (chiffonade)",
    url: "http://thepioneerwoman.com/cooking/2011/06/spicy-pasta-salad-with-smoked-gouda-tomatoes-and-basil/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/06/5842229930_73a968f08e_z.jpg",
    cookTime: "PT9M",
    recipeYield: "8",
    datePublished: "2011-06-17",
    prepTime: "PT15M",
    description:
      "I found some smoked Gouda at my lovely little local grocery store yesterday, and I knew immediately what I was going to make....",
  },
  {
    name: "Rhubarb Cobbler",
    ingredients:
      "4 cups Chopped Rhubarb\n1-1/2 cup Sugar\n1/4 teaspoon Salt\n2 Tablespoons Lemon Juice\n1/2 teaspoon Almond Extract (optional)\n2 cups All-purpose Flour\n2 Tablespoons Sugar\n1/4 teaspoon Salt\n1 Tablespoon Baking Powder\n1/4 cup Vegetable Shortening Or Lard\n1/4 cup Butter\n1/2 cup Whole Milk\n1 whole Egg",
    url: "http://thepioneerwoman.com/cooking/2011/06/rhubarb-cobbler/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/06/rhubarb.jpg",
    cookTime: "PT35M",
    recipeYield: "12",
    datePublished: "2011-06-20",
    prepTime: "PT15M",
    description:
      "Oh, do I love rhubarb. It's so tart and strange and beautiful. So weird. So misunderstood.    Rhubarb reminds me of my grandm...",
  },
  {
    name: "Bananas Foster",
    ingredients:
      "1 stick Butter (salted)\n1 cup Packed Dark Brown Sugar\n1/2 cup (to 3/4 Cup) Heavy Cream\n1/2 cup Dark Rum\n2 whole Bananas, Sliced Diagonally Into Thick Slices\n1/2 cup Chopped Walnuts Or Pecans\n Dash Of Cinnamon",
    url: "http://thepioneerwoman.com/cooking/2011/08/bananas-foster/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2011/08/foster31.jpg",
    cookTime: "PT5M",
    recipeYield: "6",
    datePublished: "2011-08-31",
    prepTime: "PT1M",
    description:
      "Those of you who've read my site for any length of time likely know that I hate, abhor, loathe, and recoil at the sight of ba...",
  },
  {
    name: "Baked Lemon Pasta",
    ingredients:
      "1 pound Thin Spaghetti\n4 Tablespoons Salted Butter\n2 Tablespoons Olive Oil\n2 cloves Garlic, Minced\n1 whole Lemon, Juiced And Zested\n2 cups Sour Cream\n1/2 teaspoon Kosher Salt, Or More To Taste\n Plenty Of Grated Parmesan Cheese\n Flat-leaf Parsley, Chopped\n Extra Lemon Juice",
    url: "http://thepioneerwoman.com/cooking/2009/05/baked-lemon-pasta/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3529272690_08cfa6a74d.jpg",
    cookTime: "PT30M",
    recipeYield: "6",
    datePublished: "2009-05-13",
    prepTime: "PT15M",
    description:
      "    I love simple dishes like this. They remind me of my single vegetarian days in L.A. when I'd often come home from work an...",
  },
  {
    name: "Baklava",
    ingredients:
      "1 package Phyllo Dough\n4 cups Chopped Walnuts Or Pecans\n1 teaspoon Cinnamon\n1-1/2 stick Butter, Melted\n2 cups Honey\n1/2 cup Water\n1/2 cup Sugar\n3 teaspoons Vanilla Extract",
    url: "http://thepioneerwoman.com/cooking/2011/12/baklava/",
    image: "http://static.thepioneerwoman.com/cooking/files/2011/12/bak.jpg",
    cookTime: "PT45M",
    recipeYield: "16",
    datePublished: "2011-12-12",
    prepTime: "PT20M",
    description:
      "Baklava is yummy...but it's yummiest when it's homemade. And it doesn't have to be my home that makes it. It can be anyone's ...",
  },
  {
    name: "Corn Dog Muffins",
    ingredients:
      "1/4 cup Shortening\n1 cup Yellow Cornmeal\n1/2 cup All-purpose Flour\n1 teaspoon Salt\n1 cup Buttermilk\n1/2 cup Milk\n1 whole Egg\n1 Tablespoon Baking Powder\n1/2 teaspoon Baking Soda\n6 whole Hot Dogs",
    url: "http://thepioneerwoman.com/cooking/2012/10/corn-dog-muffins/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/10/corndogmuffins.jpg",
    cookTime: "PT15M",
    recipeYield: "6",
    datePublished: "2012-10-18",
    prepTime: "PT15M",
    description:
      "Corn Dog Muffins are sweeping the nation!     Not really, but if you have kids in the house, you're likely to have whipped up...",
  },
  {
    name: "Italian Pot Roast",
    ingredients:
      "2 whole Beef Chuck Roasts\n2 jars Roasted Red Peppers\n2 jars Artichoke Hearts, Drained\n6 whole Sundried Tomatoes (jarred)\n2 whole Yellow Onions, Peeled And Quartered\n28 ounces, fluid Beef Stock Or Beef Broth\n2 Tablespoons Parsley Flakes\n6 cloves Garlic, Peeled\n1 cup Wine (red Or White)\n2 Tablespoons Flour\n Salt And Pepper, to taste\n12 ounces, weight Egg Noodles\n Fresh Parsley, Minced",
    url: "http://thepioneerwoman.com/cooking/2012/10/italian-pot-roast/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/10/italianpotroast.jpg",
    cookTime: "PT4H",
    recipeYield: "12",
    datePublished: "2012-10-22",
    prepTime: "PT1M",
    description:
      "I made this scrumptious pot roast a couple of weeks ago and delivered it to the Lodge the night a couple members of the tv cr...",
  },
  {
    name: "Silver Dollar Pumpkin Pancakes",
    ingredients:
      "3 cups Cake Flour\n1 teaspoon Salt\n2 Tablespoons Baking Powder\n3 Tablespoons Sugar\n2 cups Canned Pumpkin Puree\n2 whole Eggs\n3 teaspoons Vanilla\n2-1/2 cups Milk\n1/4 teaspoon Pumpkin Pie Spice\n1/2 cup Heavy Cream\n3 Tablespoons Maple Syrup\n Butter, For Serving\n Maple Syrup, Warmed, For Serving\n Finely Chopped Pecans, For Serving\n Caramel Sauce, For Drizzling (optional)",
    url: "http://thepioneerwoman.com/cooking/2012/10/silver-dollar-pumpkin-pancakes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/10/pumpkinpancakes.jpg",
    cookTime: "PT10M",
    recipeYield: "6",
    datePublished: "2012-10-29",
    prepTime: "PT10M",
    description:
      "In my hometown when I was growing up, there was, inexplicably, a Dutch pancake restaurant called Pannekoeken Huis. I have no ...",
  },
  {
    name: "Tomorrow\u2019s (Luscious, Scrumptious!) Recipes",
    ingredients:
      "2 sticks Salted Butter, Slightly Softened\n1 cup Powdered Sugar\n1 whole Egg\n2 teaspoons Vanilla Extract\n2-1/2 cups Flour\n1/2 cup Cocoa Powder\n3/4 teaspoons Salt\n4 ounces, weight White Almond Bark\n4 ounces, weight Chocolate Almond Bark\n DIPPING BAR\n Pistachios, Finely Chopped\n M &amp; M's, Slightly Chopped\n Toffee Bars, Chopped\n Assorted Nuts, Sprinkles, Candies",
    url: "http://thepioneerwoman.com/cooking/2012/11/tomorrows-luscious-scrumptious-recipes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/11/cornchowder.jpg",
    cookTime: "PT10M",
    recipeYield: "16",
    datePublished: "2012-02-16",
    prepTime: "PT2H",
    description:
      "The thirteen new episodes of Season 3 have all aired, and the new Thanksgiving episode will air November 17.    Here's a peek...",
  },
  {
    name: "Pull-Apart Bread",
    ingredients:
      " Dough\n2 cups Whole Milk\n1/2 cup Canaola Oil\n1/2 cup Sugar\n2-1/4 teaspoons Active Dry Yeast\n4 cups All-purpose Flour\n1/2 cup (additional) All-purpose Flour\n1/2 teaspoon Baking Powder\n1/2 teaspoon Baking Soda\n2 teaspoons Salt\n1 stick Butter, Melted\n1-1/2 cup Sugar\n3 Tablespoons Ground Cinnamon\n Icing\n3 cups Powdered Sugar\n2 Tablespoons Butter, Melted\n1 Tablespoon Maple Extract\n1/3 cup Whole Milk\n Dash Of Salt",
    url: "http://thepioneerwoman.com/cooking/2012/11/pull-apart-bread/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/11/pullapart.jpg",
    cookTime: "PT30M",
    recipeYield: "12",
    datePublished: "2012-11-12",
    prepTime: "PT1H30M",
    description:
      "I've made no bones about the fact that I've been bitten by the Pinterest bug, and by \"bug\" I mean a gigantic brain-sucking ar...",
  },
  {
    name: "Buffalo Chicken Salad",
    ingredients:
      "1 whole Boneless Skinless Chicken Breast\n Salt And Pepper, to taste\n2 Tablespoons Olive Oil\n2 Tablespoons Butter\n1/2 cup Louisiana Hot Sauce (Frank's, Etc.)\n Salad Greens: Iceberg, Romaine, Mixed Greens\n1/2 cup Blue Cheese Dressing\n Extra Blue Cheese Crumbles\n Celery Hearts, Leaves Intact",
    url: "http://thepioneerwoman.com/cooking/2012/11/buffalo-chicken-salad/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/11/buffalo.jpg",
    cookTime: "PT10M",
    recipeYield: "2",
    datePublished: "2012-11-14",
    prepTime: "PT10M",
    description:
      "The idea for this salad came to me...on an airplane.     Last week I went on a small tour for my new children's book. For the...",
  },
  {
    name: "Wild Rice Pancakes",
    ingredients:
      "1 cup Wild Rice\n3 cups All-purpose OR (if You Have It) Cake Flour\n1/2 teaspoon Salt\n2 Tablespoons Baking Powder\n4 Tablespoons Sugar\n3-1/2 cups Whole Milk\n2 whole Eggs\n1 Tablespoon Vanilla\n2 Tablespoons Butter, Melted\n Butter, For Serving\n Maple Or Pancake Syrup",
    url: "http://thepioneerwoman.com/cooking/2012/11/wild-rice-pancakes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/11/wildrice.jpg",
    cookTime: "PT1H",
    recipeYield: "6",
    datePublished: "2012-11-19",
    prepTime: "PT15M",
    description:
      "Before I begin explaining this luscious deliciousness, I need to state for the record that I love Minnesota. I've now visited...",
  },
  {
    name: "Blueberry Crumb Cake",
    ingredients:
      "1/2 stick Butter\n1 Tablespoon (additional) Butter\n3/4 cups Sugar\n1 whole Egg\n1/2 teaspoon Vanilla Extract\n2 cups All-purpose Flour\n2-1/4 teaspoons Baking Powder\n1/2 teaspoon Salt\n3/4 cups Whole Milk\n2 cups Fresh Blueberries\n _____\n FOR THE TOPPING:\n3/4 sticks Butter\n1/2 cup Sugar\n1/2 teaspoon Cinnamon\n1/2 cup Flour\n1/4 teaspoon Salt",
    url: "http://thepioneerwoman.com/cooking/2010/07/blueberry-crumb-cake/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4833203984_4f06a7268f_b.jpg",
    cookTime: "PT45M",
    recipeYield: "16",
    datePublished: "2010-07-27",
    prepTime: "PT10M",
    description:
      "    I had approximately one million blueberries in my refrigerator yesterday. They were left over from the Fourth of July and...",
  },
  {
    name: "Cajun Meatloaf",
    ingredients:
      "3 whole Bell Peppers (2 If They're Large)\n2 whole Medium Onions\n1 bunch Celery (5-6 Ribs)\n8 cloves (to 10 Cloves) Of Garlic\n6 Tablespoons Butter\n1 teaspoon Salt\n1 Tablespoon Worcestershire\n1 teaspoon Black Pepper\n1 teaspoon Ground Nutmeg\n1 teaspoon Cayenne Pepper\n Optional:  A Few Shakes Of Hot Sauce\n2 cups Ketchup, Divided\n1/2 cup Whole Milk\n1 cup (to 2 Cups) Breadcrumbs\n2 pounds Of Lean Ground Beef (92% Lean)\n1 pound Ground Pork\n3 whole Eggs\n2 Tablespoons Honey",
    url: "http://thepioneerwoman.com/cooking/2009/01/cajun-meatloaf/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3190861863_2664421a5c.jpg",
    cookTime: "PT40M",
    recipeYield: "8",
    datePublished: "2009-01-18",
    prepTime: "PT40M",
    description:
      "By Pastor Ryan.    Note from PW: I was going to post this first thing Monday morning, but it just looks too good to wait and ...",
  },
  {
    name: "Buttery Thyme Bread",
    ingredients:
      "1 loaf French Bread (Storebought Is Fine)\n2 sticks Salted Butter, Softened\n3 sprigs Or More Fresh Thyme, To Taste",
    url: "http://thepioneerwoman.com/cooking/2008/01/buttery_thyme_bread/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/2221035126_562aedc5e7.jpg",
    cookTime: "PT15M",
    recipeYield: "6",
    datePublished: "2008-01-26",
    prepTime: "PT5M",
    description:
      "  Ha! When you heard me tease and tease about the world-famous Buttery Thyme Bread recipe I'd soon post here, I'll bet you pi...",
  },
  {
    name: "Butternut Squash Puree",
    ingredients:
      "1 whole Butternut Squash\n2 Tablespoons (to 4 Tablespoons) Maple Syrup\n1/2 stick Butter\n1 dash Salt",
    url: "http://thepioneerwoman.com/cooking/2007/11/butternut_squash_puree_try_it_or_ill_deck_ya_/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/1896284773_82beacf0b6.jpg",
    cookTime: "PT30M",
    recipeYield: "4",
    datePublished: "2007-11-13",
    prepTime: "PT30M",
    description:
      "    I would never say anything untoward here, as this is a family-friendly site. Especially during this family-oriented holid...",
  },
  {
    name: "Buttered Rosemary Rolls",
    ingredients:
      " Frozen, Unbaked Dinner Rolls\n Melted Butter, Regular, Salted\n Fresh Rosemary, Coarsely Chopped\n Coarse Sea Salt",
    url: "http://thepioneerwoman.com/cooking/2009/10/buttered-rosemary-rolls/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4048054052_8c52775a58.jpg",
    cookTime: "PT20M",
    recipeYield: "7",
    datePublished: "2009-10-29",
    prepTime: "PT3H",
    description:
      "I had some rolls like these in a restaurant once. Just after I placed an order for a ribeye steak and macaroni and cheese (ex...",
  },
  {
    name: "Bronzed Sea Bass with Lemon Shallot Butter",
    ingredients:
      "6 ounces, weight (to 7 Ounces) Piece Of Sea Bass, With Or Without The Skin On\n3 Tablespoons Butter\n1 whole Medium-sized Shallot, Minced\n1 whole Lemon, Zested And Juiced\n3 Tablespoons Canola Oil\n Kosher Salt And Fresh Ground Pepper, to taste",
    url: "http://thepioneerwoman.com/cooking/2009/10/bronzed-sea-bass-with-lemon-shallot-butter/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4030923630_c22bb7d7f4.jpg",
    cookTime: "PT10M",
    recipeYield: "1",
    datePublished: "2009-10-23",
    prepTime: "PT20M",
    description:
      "\u00a0  He's been busy getting to know his new baby boy and making a difference in the world, so I'm happy to be able to shar...",
  },
  {
    name: "Breakfast Burritos to Go",
    ingredients:
      "1 whole Recipe Of  Ree's Basic Breakfast Potatoes\n1 pound Breakfast Sausage\n12 whole Eggs\n Chopped Chives, to taste\n Seasoned Salt And Pepper, to taste\n1 cup Monterey Jack Cheese\n Flour Tortillas",
    url: "http://thepioneerwoman.com/cooking/2008/08/breakfast-burritos-to-go/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/08/Breakfast-Burritos-to-Go.jpg",
    cookTime: "PT30M",
    recipeYield: "4",
    datePublished: "2008-08-19",
    prepTime: "PT15M",
    description:
      "Disclaimer: These breakfast burritos are not fancy. These breakfast burritos are not gourmet. These breakfast burritos are no...",
  },
  {
    name: "Braised Short Ribs",
    ingredients:
      "8 whole Beef Short Ribs\n Kosher Salt and Pepper To Taste\n1/4 cup All-purpose Flour\n6 pieces Pancetta, Diced\n2 Tablespoons Olive Oil\n1 whole Medium Onion, Diced\n3 whole Carrots, Diced\n2 whole Shallots, Peeled And Finely Minced\n2 cups Red Or White Wine\n2 cups Beef Or Chicken Broth (enough To Almost Cover Ribs)\n2 sprigs Thyme\n2 sprigs Rosemary",
    url: "http://thepioneerwoman.com/cooking/2009/11/braised-short-ribs-heaven-on-a-plate/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4101480755_98f352e336.jpg",
    cookTime: "PT2H",
    recipeYield: "4",
    datePublished: "2009-11-16",
    prepTime: "PT20M",
    description:
      'Leesten. And heer me. (West Side Story reference. Sorry. "Leesten. And heer me. You must go and stop eet."    But seriously. ...',
  },
  {
    name: "Braised Beef Brisket",
    ingredients:
      "2 cans Beef Consomme\n1/2 cup Lemon Juice\n1-1/2 cup Soy Sauce\n5 cloves Chopped Garlic\n2 Tablespoons Liquid Smoke\n10 pounds Beef Brisket",
    url: "http://thepioneerwoman.com/cooking/2007/06/brisket_baby/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/634882945_a322432d0c.jpg",
    cookTime: "PT6H",
    recipeYield: "12",
    datePublished: "2007-06-27",
    prepTime: "PT10M",
    description:
      '    Beef Brisket is a cut of meat from the chest of a bovine animal. There are different ways to cook brisket; "The Sout...',
  },
  {
    name: "Blueberry Yogurt Smoothie",
    ingredients:
      "1 cup Plain, Unflavored Yogurt\n1 cup Fruit (your Choice - Blueberries, Peaches, Pineapple, Etc)\n1/4 cup Milk\n1 dash Honey\n Ice",
    url: "http://thepioneerwoman.com/cooking/2008/07/blueberry-yogurt-smoothie-try-it/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/07/Blueberry-Yogurt-Smoothie.jpg",
    cookTime: "PT",
    recipeYield: "1",
    datePublished: "2008-07-09",
    prepTime: "PT5M",
    description:
      "Summer is finally in full swing here, after a late start marked by thunderstorms and cool nights. This did a number on my veg...",
  },
  {
    name: "Blueberry Pie for Betsy",
    ingredients:
      "2 pints (to 3 Pints) Blueberries\n Sugar\n1 dash (to 2 Dashes) Of Nutmeg\n2 Tablespoons (to 3 Tablespoons) Flour (optional)\n2 whole Pie Crusts\n1 stick Butter, Sliced Into Pats",
    url: "http://thepioneerwoman.com/cooking/2008/08/blueberry-pie-for-betsy/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/08/Blueberry-Pie-for-Betsy.jpg",
    cookTime: "PT40M",
    recipeYield: "8",
    datePublished: "2008-08-03",
    prepTime: "PT30M",
    description:
      "My mom left early Saturday morning (like, 4 a.m. early) to drive back to Tennessee after helping my sister, Wetsy, for a few ...",
  },
  {
    name: "Blackberry Ice Cream, Part 1",
    ingredients:
      "2 pints Fresh Blackberries\n1/2 whole Juiced Lemon\n1/4 cup Sugar\n1-1/2 cup Half-and-half\n1 cup Sugar\n5 whole Egg Yolks\n1-1/2 cup Heavy Cream",
    url: "http://thepioneerwoman.com/cooking/2009/07/blackberry-ice-cream-part-1/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3685500018_18a4e89313.jpg",
    cookTime: "PT30M",
    recipeYield: "12",
    datePublished: "2009-07-03",
    prepTime: "PT2H",
    description:
      "I made this delicious delight last summer, lost the photos on my gargantuan (at the time) hard drive, and never got to post i...",
  },
  {
    name: "Blackberry Cobbler #1",
    ingredients:
      "1 stick Butter\n1-1/4 cup Sugar\n1 cup Self-Rising Flour\n1 cup Milk\n2 cups Blackberries (frozen Or Fresh)",
    url: "http://thepioneerwoman.com/cooking/2007/08/the_great_cobbl/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/1051404183_e561793690.jpg",
    cookTime: "PT1H",
    recipeYield: "8",
    datePublished: "2007-08-10",
    prepTime: "PT20M",
    description:
      "    In the coming days and weeks, I'm going to be blowing the lid off the international debate about cobbler. 'Round these pa...",
  },
  {
    name: "Blackberry Cobbler #2",
    ingredients:
      "6 cups Fresh Or Frozen Blackberries\n1/2 cup Plus 4 Tablespoons Sugar\n1 Tablespoon Lemon Juice\n1/2 whole Zest Of Lemon\n2 cups Flour\n1/4 teaspoon Salt\n1 Tablespoon Baking Powder\n1/4 cup Crisco (vegetable Shortening)\n4 Tablespoons Butter\n1 whole Egg\n1/2 cup Milk",
    url: "http://thepioneerwoman.com/cooking/2007/08/the_great_cobbl-2/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/1128893112_1e1f326dcf.jpg",
    cookTime: "PT30M",
    recipeYield: "8",
    datePublished: "2007-08-16",
    prepTime: "PT20M",
    description:
      "    We've already examined one version of blackberry cobbler, which happens to be my favorite. It was more cakey and sweet th...",
  },
  {
    name: "Blackberry Cheesecake",
    ingredients:
      " Crust\n1 box Vanilla Wafers\n1/2 cup Pecans\n1 stick 1/2 Cup Butter, Melted\n1-1/2 teaspoon Vanilla\n Filling\n3 packages 8 Ounce Cream Cheese\n1-1/2 cup Sugar\n4 whole Eggs\n1/2 cup Sour Cream\n Topping\n2 cups Blackberries\n1/2 cup Sugar\n2 Tablespoons Water",
    url: "http://thepioneerwoman.com/cooking/2010/07/blackberry-cheesecake/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4769285063_f8be4e9432_b.jpg",
    cookTime: "PT1H15M",
    recipeYield: "16",
    datePublished: "2010-07-07",
    prepTime: "PT20M",
    description:
      "I wound up with more blackberries than I knew what to do with on the Fourth, and rather than do something healthy with the lu...",
  },
  {
    name: "Blackberries with Sweet Cream",
    ingredients:
      "1 pint Heavy Whipping Cream\n1 cup Sugar, Divided\n10 whole Egg Yolks (save The Whites For Another Use)\n2 teaspoons Good Vanilla Extract (or Vanilla Beans)\n Fresh Berries",
    url: "http://thepioneerwoman.com/cooking/2010/06/blackberries-with-sweet-cream/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4662132524_b2fca5a06f_b.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2010-06-02",
    prepTime: "PT10M",
    description:
      "This recipe is based on a scrumptious recipe my mother-in-law and I shared at a Ruth's Chris steakhouse in Denver shortly bef...",
  },
  {
    name: "Black Eyed Pea Salsa",
    ingredients:
      " FOR THE DRESSING:\n1/2 cup Olive Oil\n1/3 cup White Wine (or Regular) Vinegar\n2 Tablespoons (to 3 Tablespoons) Sugar\n1 teaspoon Celery Seed\n1/2 teaspoon Dry Mustard\n1/2 teaspoon Salt\n Freshly Ground Pepper, to taste\n _____\n VEGGIES:\n3 stalks Celery Finely Chopped\n3 stalks Green Onions, Sliced\n1 whole Red Bell Pepper, chopped\n1 whole Cucumber, Peeled, Seeded, And Chopped\n1 whole Jalapeno (optional), Seeded And Chopped\n1 cup (or More If Desired) Chopped Cilantro\n2 cans Black-eyed Peas, Drained",
    url: "http://thepioneerwoman.com/cooking/2008/12/make-your-own-luck-black-eyed-pea-salsa/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/12/black-eyed-pea-salsa.jpg",
    cookTime: "PT",
    recipeYield: "6",
    datePublished: "2008-12-31",
    prepTime: "PT1H30M",
    description:
      "Did you know you absolutely HAVE to eat black eyed peas on New Year's Day or you'll be doomed to a whole year of not only bad...",
  },
  {
    name: "Billie\u2019s Italian Cream Cake Recipe",
    ingredients:
      " FOR THE CAKE:\n1 stick Butter\n1 cup Vegetable Oil\n1 cup Sugar\n5 whole Eggs, Separated\n3 teaspoons Vanilla\n1 cup Coconut (from PW:  If You Think You Hate Coconut, Trust Me:  I Do Too, And I Love It In This Recipe)\n2 cups All-purpose Flour\n1 teaspoon Baking Soda\n1 teaspoon Baking Powder\n1 cup Buttermilk\n _____\n FOR FROSTING:\n2 packages (8 Oz) Cream Cheese\n1 stick Butter\n2 teaspoons Vanilla\n1 package 2 Lb Powdered Sugar\n1 cup Chopped Walnuts\n1 cup Sweetened, Flaked Coconut",
    url: "http://thepioneerwoman.com/cooking/2009/07/billies-italian-cream-cake-recipe/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3690949239_199170122a.jpg",
    cookTime: "PT25M",
    recipeYield: "12",
    datePublished: "2009-07-06",
    prepTime: "PT30M",
    description:
      "Dear Sweet Billie From My Church kindly shared her Italian Cream Cake recipe with me today.     And now, because you're equal...",
  },
  {
    name: "Biscuits and Gravy",
    ingredients:
      "1 pound Breakfast Sausage\n1 can (16 Oz.) Canned Biscuits\n2 Tablespoons Flour\n1 cup Milk\n Salt\n Pepper",
    url: "http://thepioneerwoman.com/cooking/2007/09/biscuits_and_gr/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/1332735243_930ce14fcf.jpg",
    cookTime: "PT15M",
    recipeYield: "4",
    datePublished: "2007-09-06",
    prepTime: "PT10M",
    description:
      "To those of you who arrived here thinking you were visiting the website for Cooking Light magazine: turn around. Run. Far, fa...",
  },
  {
    name: "Pasta with Pancetta and Leeks",
    ingredients:
      "12 ounces, weight Pasta, Cooked Al Dente\n Reserved Pasta Water, If Needed\n3 ounces, weight Chopped Pancetta\n3 whole Leeks, Sliced Thin\n1 Tablespoon Butter\n1/2 cup Dry White Wine\n1/2 cup Heavy Cream\n Salt And Freshly Ground Pepper, To Taste\n Parmesan Cheese, Shaved",
    url: "http://thepioneerwoman.com/cooking/2010/07/pasta-with-pancetta-and-leeks/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4835843705_abf1ff7779_b.jpg",
    cookTime: "PT10M",
    recipeYield: "4",
    datePublished: "2010-07-28",
    prepTime: "PT5M",
    description:
      "This meal took about fifteen minutes to make. It was so easy.    But more than that, it was absolutely delicious.     And now...",
  },
  {
    name: "Cr\u00e8me Br\u00fbl\u00e9e",
    ingredients:
      "4 cups Heavy Cream\n1 whole Vanilla Bean OR 1 Tablespoon Vanilla Extract OR 1 Tablespoon Vanilla Paste\n10 whole Egg Yolks\n3/4 cups Sugar\n6 Tablespoons Superfine (Baker's) Sugar",
    url: "http://thepioneerwoman.com/cooking/2010/07/creme-brulee/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4842739452_bd1e1a6c95_b.jpg",
    cookTime: "PT30M",
    recipeYield: "6",
    datePublished: "2010-07-30",
    prepTime: "PT20M",
    description:
      "  Today is a very special day.     \u00a0  It's a special day because I'm sharing with you my favorite dessert on earth. Mmm....",
  },
  {
    name: "Raspberry Cream Pie",
    ingredients:
      "25 whole Oreo Chocolate Sandwich Cookies\n4 Tablespoons Butter, Melted\n1 cup (generous) Raspberries\n3 Tablespoons Sugar\n2 containers (6 Ounce Each) Raspberry Yogurt\n1 package (3.4 Ounch) Instant Vanilla Pudding Mix\n1 cup Heavy Whipping Cream\n Extra Raspberries For Garnish",
    url: "http://thepioneerwoman.com/cooking/2010/08/raspberry-cream-pie/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/08/4851779162_7af06c848f_b.jpg",
    cookTime: "PT",
    recipeYield: "12",
    datePublished: "2010-08-02",
    prepTime: "PT10M",
    description:
      "It's so hot here. So horribly, oppressively hot. It's so hot that I was all set to make a warm recipe yesterday afternoon---o...",
  },
  {
    name: "Mushroom-and-Swiss Sliders with Spicy Fry Sauce",
    ingredients:
      "1/3 cup Mayonnaise\n2 Tablespoons Ketchup\n1 teaspoon Cayenne Pepper (less If You're Sensitive To Spice!)\n4 Tablespoons Butter\n1/2 whole Medium Onion, Finely Diced\n8 ounces, weight White Mushrooms, Chopped Finely\n1/2 cup White Or Red Wine (optional)\n4 dashes Worcestershire Sauce\n Kosher Salt And Freshly Ground Black Pepper\n2 pounds Ground Beef\n4 Tablespoons Heavy Whipping Cream\n4 dashes Worcestershire Sauce\n1 teaspoon Kosher Salt\n Freshly Ground Black Pepper\n4 slices Swiss Cheese, Cut Into Four Squares\n8 whole Dinner (or Slider) Rolls, Split",
    url: "http://thepioneerwoman.com/cooking/2010/08/mushroom-and-swiss-sliders-with-spicy-fry-sauce/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/08/TPW_9160.jpg",
    cookTime: "PT30M",
    recipeYield: "4",
    datePublished: "2010-08-04",
    prepTime: "PT15M",
    description:
      "I went berserk the other night, whipping up some scrumptious sliders and topping them with some wine-soaked mushrooms and Swi...",
  },
  {
    name: "SuperSonic Breakfast Burrito",
    ingredients:
      "50 whole Frozen Tater Tots\n8 whole Flour Tortillas, Fajita Size\n1-1/2 cup Grated Cheddar Cheese\n8 whole Eggs, Beaten\n2 Tablespoons Half-and-half\n1 pound Breakfast Sausage\n Salt And Pepper, to taste\n1 whole Medium Onion, Chopped\n1/2 cup Jarred Jalapeno Slices\n3 whole Roma Tomatoes, Sliced\n Salsa, On The Side\n1 Tablespoon Butter",
    url: "http://thepioneerwoman.com/cooking/2010/08/supersonic-breakfast-burrito/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/08/4873503761_2d0a396cfa_z.jpg",
    cookTime: "PT25M",
    recipeYield: "8",
    datePublished: "2010-08-09",
    prepTime: "PT10M",
    description:
      "Raise your hand if you have a Sonic in your life.    *Raising Hand*    For those of you who didn't raise your hand, excuse me...",
  },
  {
    name: "Raspberry Crisp",
    ingredients:
      "2-1/2 cups Raspberries\n1 Tablespoon (Heaping) Cornstarch\n2/3 cups Sugar\n1 teaspoon Vanilla Extract\n1 cup All-purpose Flour\n1/4 cup Sugar\n1/4 cup Brown Sugar\n1/3 cup Oats\n1/4 cup Pecans, Chopped\n Dash Of Salt\n3/4 sticks Butter, Cut Into Small Pieces\n Whipped Cream Or Vanilla Ice Cream, For Serving",
    url: "http://thepioneerwoman.com/cooking/2010/08/raspberry-crisp/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/08/4881171714_69e0f61878_z.jpg",
    cookTime: "PT30M",
    recipeYield: "8",
    datePublished: "2010-08-11",
    prepTime: "PT10M",
    description:
      "This is the time of year when the recipes I make are often determined by the abundance of ingredients in my kitchen or fridge...",
  },
  {
    name: "Simple Sesame Noodles",
    ingredients:
      "12 ounces, fluid Thin Noodles, Cooked And Drained\n1/4 cup Soy Sauce\n2 Tablespoons Sugar\n4 cloves Garlic, Minced\n2 Tablespoons Rice Vinegar\n3 Tablespoons Pure Sesame Oil\n1/2 teaspoon Hot Chili Oil\n4 Tablespoons Canola Oil\n4 whole Green Onions, Sliced Thin",
    url: "http://thepioneerwoman.com/cooking/2010/08/simple-sesame-noodles/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/08/3949394720_c854047191_o1.jpg",
    cookTime: "PT10M",
    recipeYield: "8",
    datePublished: "2010-08-13",
    prepTime: "PT10M",
    description:
      "  I'll be spending the weekend cooking some new recipes and making such a mess of my kitchen I'll want to cry and burn down t...",
  },
  {
    name: "Curried Chicken Pasta Salad",
    ingredients:
      "3 pounds Chicken, Cooked And Diced/shredded\n6 ounces, weight Dry Pasta, Cooked And Drained\n4 whole Ribs Celery, Thinly Sliced - Leaves Included (use Interior Ribs)\n3/4 cups Golden Raisins\n3/4 cups Slivered Almonds\n1/2 cup Mayonnaise\n1/2 cup Sour Cream\n1 cup Heavy Cream\n3 Tablespoons Curry Powder, More Or Less To Taste\n1 Tablespoon Sugar, More Or Less To Taste\n1 teaspoon Kosher Salt\n Freshly Ground Black Pepper",
    url: "http://thepioneerwoman.com/cooking/2010/08/curried-chicken-pasta-salad/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/08/4918119889_40696d9071_o.jpg",
    cookTime: "PT",
    recipeYield: "12",
    datePublished: "2010-08-23",
    prepTime: "PT30M",
    description:
      "I had some visitors on the ranch last week. I made the beds, dusted the furniture, and did what any self-respecting hostess w...",
  },
  {
    name: "Portobello-Prosciutto Burgers",
    ingredients:
      "1/2 cup Mayonnaise\n16 whole Basil Leaves\n8 whole Large Portobello Mushrooms\n1 cup Red Wine (optional)\n Olive Oil For Brushing\n Salt And Pepper, to taste\n4 slices Provolone Cheese\n4 slices Prosciutto\n4 whole Kaiser Rolls, Split\n Extra Basil Leaves",
    url: "http://thepioneerwoman.com/cooking/2010/08/portobello-prosciutto-burgers/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/08/4896232820_f0f8ef5934_o.jpg",
    cookTime: "PT20M",
    recipeYield: "4",
    datePublished: "2010-08-20",
    prepTime: "PT10M",
    description:
      "  Yes, I'm married to a cattle rancher. Why do you ask?    This is definitely one of those recipes that leaves Marlboro Man a...",
  },
  {
    name: "Homemade Cinnamon Bread",
    ingredients:
      "1 cup Milk\n6 Tablespoons Butter\n2-1/2 teaspoons Active Dry Yeast\n2 whole Eggs\n1/3 cup Sugar\n3-1/2 cups All-purpose Flour\n1 teaspoon Salt\n1/3 cup Sugar\n2 Tablespoons Cinnamon\n Egg And Milk, Mixed Together, For Brushing\n Softened Butter, For Smearing And Greasing",
    url: "http://thepioneerwoman.com/cooking/2010/08/homemade-cinnamon-bread/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/08/cinbread.jpg",
    cookTime: "PT40M",
    recipeYield: "12",
    datePublished: "2010-08-24",
    prepTime: "PT4H",
    description:
      "I baked cinnamon bread last night.     I thought of it.    I wanted it.    So I baked it.    And then, this morning...I ate i...",
  },
  {
    name: "Fried Round Steak",
    ingredients:
      "3 pounds Cube Steak (round Steak That's Been Extra Tenderized)\n1 cup All-purpose Flour\n1 teaspoon Seasoned Salt\n3 teaspoons Ground Black Pepper, Or To Taste\n Salt, For Seasoning Meat\n1/2 cup Canola Oil (more If Needed)\n2 Tablespoons Butter",
    url: "http://thepioneerwoman.com/cooking/2010/08/fried-round-steak/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/08/4928543066_775b277fa7_o.jpg",
    cookTime: "PT10M",
    recipeYield: "6",
    datePublished: "2010-08-26",
    prepTime: "PT5M",
    description:
      "You're just going to have to trust me on this one.     I've been living in the country, among picky kids and cowboys, for alm...",
  },
  {
    name: "Layered Salad",
    ingredients:
      " SALAD:\n2 heads Iceberg Lettuce, Chopped\n8 ounces, fluid Baby Spinach, Washed And Dried\n Salt And Pepper, to taste\n8 whole Hard Boiled Eggs, Chopped\n16 ounces, weight Bacon, Cooked And Chopped\n4 whole Tomatoes, Chopped\n1 bunch Green Onions, Thinly Sliced\n8 ounces, weight Cheddar Cheese, Grated\n1 bag (10 Ounce) Frozen Peas, Partially Thawed\n FOR THE DRESSING:\n1/2 cup (Real) Mayonnaise\n1/2 cup Sour Cream\n1 Tablespoon Sugar (more To Taste)\n Fresh Dill, Chopped",
    url: "http://thepioneerwoman.com/cooking/2010/08/layered-salad/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/08/4940301746_c16a4e7edf_o.jpg",
    cookTime: "PT",
    recipeYield: "12",
    datePublished: "2010-08-30",
    prepTime: "PT30M",
    description:
      "This is a simple and beautiful salad, and a staple at potlucks and luncheons in my area of the country. You can vary the ingr...",
  },
  {
    name: "Pasta with Tomato Cream Sauce",
    ingredients:
      "2 Tablespoons Olive Oil\n2 Tablespoons Butter\n1 whole Medium Onion, Finely Diced\n4 cloves Garlic, Minced\n2 cans (15 Ounce Each) Tomato Sauce Or Marinara Sauce\n Salt And Pepper, to taste\n Dash Of Sugar (more To Taste)\n1 cup Heavy Cream\n Grated Parmesan Or Romano Cheese, To Taste\n Fresh Basil, Chopped\n1-1/2 pound Fettuccine",
    url: "http://thepioneerwoman.com/cooking/2010/09/pasta-with-tomato-cream-sauce/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/09/4974016872_6203b622a4_o.jpg",
    cookTime: "PT25M",
    recipeYield: "8",
    datePublished: "2010-09-09",
    prepTime: "PT10M",
    description:
      "I have a bit of a problem. It's an addiction to light orange-red pasta sauces.     \u00a0  There's this one:    Pasta alla Vo...",
  },
  {
    name: "Pretty Little Brownie Bites",
    ingredients:
      " FOR THE BROWNIES:\n4 whole 1-ounce Squares Unsweetened Chocolate\n2 sticks Butter, Softened (but Not Room Temperature)\n2 cups Sugar\n4 whole Large Eggs\n3 teaspoons Vanilla Extract\n1-1/4 cup All-purpose Flour\n1 cup Milk Chocolate Chips\n1 cup Semi-sweet Chocolate Chunks\n FOR THE GLAZE:\n8 whole 1-ounce Squares Semi-sweet Chocolate, Chopped\n1 cup Cream, Heated\n2 Tablespoons Light Corn Syrup\n2 teaspoons Vanilla Extract",
    url: "http://thepioneerwoman.com/cooking/2010/09/pretty-little-brownie-bites/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/09/4966611828_a6ef35083f_o.jpg",
    cookTime: "PT15M",
    recipeYield: "24",
    datePublished: "2010-09-07",
    prepTime: "PT30M",
    description:
      "I made these treats yesterday afternoon.    Why? Because I wanted chocolate.    Where? In my kitchen.    Who? My chocolate-lo...",
  },
  {
    name: "Chocolate Chip Cookie Sweet Rolls",
    ingredients:
      " Rolls\n4 cups Whole Milk\n1 cup Sugar\n1 cup Canola Oil\n9 cups All-purpose Flour\n2 packages (4 1/2 Teaspoons) Active Dry Yeast\n1 Tablespoon (heaping) Salt\n1 teaspoon (scant) Baking Soda\n1 teaspoon (heaping) Baking Powder\n1 stick Butter\n2 teaspoons Vanilla Extract\n1 cup Brown Sugar\n1/2 cup Sugar\n1 teaspoon Salt\n1-1/2 cup Chocolate Chips Or Chocolate Chunks\n1 cup Chopped Pecans (optional)\n Icing\n1 package 8 Ounce Cream Cheese\n3 cups Powdered Sugar\n1 stick Butter, Softened\n1 cup Whole Milk\n2-1/2 teaspoons Vanilla Extract\n3/4 teaspoons Salt",
    url: "http://thepioneerwoman.com/cooking/2010/09/chocolate-chip-cookie-sweet-rolls/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/09/4983866032_304b02a819_o.jpg",
    cookTime: "PT20M",
    recipeYield: "24",
    datePublished: "2010-09-14",
    prepTime: "PT1H30M",
    description:
      "I have a sweet roll problem.       \u00a0  \u00a0  \u00a0  I blame my original cinnamon rolls. For they are evil. And they mu...",
  },
  {
    name: "The Bread",
    ingredients:
      "1 loaf French Bread, Split Lengthwise\n2 sticks Regular (salted) Butter, Softened",
    url: "http://thepioneerwoman.com/cooking/2010/09/the-bread/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/09/4944642923_594e44ab22_o.jpg",
    cookTime: "PT15M",
    recipeYield: "12",
    datePublished: "2010-09-17",
    prepTime: "PT5M",
    description:
      'Whenever I have a friend or family member over for dinner, they will ask the following question:    "Are you making The Bread...',
  },
  {
    name: "My Favorite Meatloaf",
    ingredients:
      " Meatloaf:\n1 cup Whole Milk\n6 slices White Bread\n2 pounds Ground Beef\n1 cup (heaping) Freshly Grated Parmesan Cheese\n1/4 teaspoon Seasoned Salt\n3/4 teaspoons Salt\n Freshly Ground Black Pepper\n1/3 cup Minced Flat-leaf Parsley\n4 whole Eggs, Beaten\n10 slices Thin/regular Bacon\n Sauce:\n1-1/2 cup Ketchup\n1/3 cup Brown Sugar\n1 teaspoon Dry Mustard\n Tabasco To Taste",
    url: "http://thepioneerwoman.com/cooking/2010/09/my-favorite-meatloaf/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/09/5007085748_7400c77973_o.jpg",
    cookTime: "PT45M",
    recipeYield: "8",
    datePublished: "2010-09-20",
    prepTime: "PT15M",
    description:
      "This is a recipe from my cookbook, and I'm sharing it here because I love it.     I'm tired of meatloaf getting a bad rap. Ti...",
  },
  {
    name: "Burgundy Mushrooms",
    ingredients:
      "4 pounds White Button Mushrooms\n2 sticks Butter\n1-1/2 teaspoon Worcestershire Sauce\n1 quarts Burgundy Wine (other Reds Will Work)\n1 teaspoon Freshly Ground Black Pepper\n2 cups Boiling Water\n4 whole Chicken Bouillon Cubes\n4 whole Beef Bouillon Cubes\n1 teaspoon Dill Seed\n5 cloves Garlic, Peeled\n2 teaspoons Salt",
    url: "http://thepioneerwoman.com/cooking/2010/09/burgundy-mushrooms/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/09/mushrooms3.jpg",
    cookTime: "PT9H",
    recipeYield: "8",
    datePublished: "2010-09-27",
    prepTime: "PT5M",
    description:
      "When I'm asked which of the recipes in my repertoire I could not bear to live without, I usually respond with a list of aroun...",
  },
  {
    name: "Roasted Vegetable Minestrone",
    ingredients:
      "2 whole Zucchini, Halved, Cut Into Strips, Then Cubed\n2 whole Summer Squash, Halved, Cut Into Strips, Then Cubed\n8 ounces, weight White Mushrooms, Stems Removed And Quartered\n2 Tablespoons Olive Oil\n Kosher Salt To Taste\n2 Tablespoons (additional) Olive Oil\n2 whole Carrots, Washed And Sliced (not Peeled)\n1 whole Medium Onion, Diced\n3 stalks Celery, Sliced (leaves Included)\n8 cups Low Sodium Chicken Broth\n2 cans Cannelini Beans, Rinsed\n1 cup (heaping) Cut Green Beans, Fresh Or Frozen\n1-1/2 cup Medium Or Small Pasta Shells, Uncooked\n1 can (14.5) Diced Tomatoes With Juice\n Salt And Pepper, to taste\n1/4 teaspoon Turmeric (optional)\n Parmesan Cheese, Shaved",
    url: "http://thepioneerwoman.com/cooking/2010/09/roasted-vegetable-minestrone/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/09/5032009254_c1cbe10c98_z.jpg",
    cookTime: "PT30M",
    recipeYield: "8",
    datePublished: "2010-09-28",
    prepTime: "PT10M",
    description:
      "After a summer of unrelenting Oklahoma heat---I'm talking a month at least of 100-plus degree days---to say I walked around i...",
  },
  {
    name: "Monster Cookies",
    ingredients:
      "2 sticks (1/2 Pound) Butter (salted) Softened\n1/2 cup White Sugar\n1-1/2 cup Brown Sugar, Packed\n2 whole Large Eggs\n1 Tablespoon Vanilla Extract\n1-1/2 cup All-purpose Flour\n1/2 teaspoon Baking Soda\n1 teaspoon Baking Powder\n2 teaspoons Kosher Salt\n1-1/2 cup Oats (either Quick Or Regular)\n1/2 cup M &amp; M's (more To Taste)\n1/2 cup Pecans, Chopped (more To Taste)\n3/4 cups Chocolate Chips (milk Or Semi-sweet)\n1/2 cup Peanut Butter Chips\n2-1/4 cups Rice Krispies",
    url: "http://thepioneerwoman.com/cooking/2010/09/monster-cookies/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/09/5037474223_8b189fb5d2_o.jpg",
    cookTime: "PT12M",
    recipeYield: "36",
    datePublished: "2010-09-30",
    prepTime: "PT15M",
    description:
      "As I lamented on Twitter yesterday afternoon, I was having trouble deciding whether to make a soup, a casserole, or a main di...",
  },
  {
    name: "Skillet Cornbread",
    ingredients:
      "1 cup Yellow Cornmeal\n1/2 cup All-purpose Flour\n1 teaspoon Salt\n1 Tablespoon Baking Powder\n1 cup Buttermilk\n1/2 cup Milk\n1 whole Egg\n1/2 teaspoon Baking Soda\n1/4 cup Shortening\n2 Tablespoons Shortening",
    url: "http://thepioneerwoman.com/cooking/2010/10/skillet-cornbread/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/10/5048581074_2d5434cfa4_o.jpg",
    cookTime: "PT20M",
    recipeYield: "12",
    datePublished: "2011-11-14",
    prepTime: "PT5M",
    description:
      "This is my all-time favorite cornbread recipe, probably because it's the recipe I grew up eating. My mom had a couple of cast...",
  },
  {
    name: "Cornbread Dressing with Sausage and Apples",
    ingredients:
      "32 ounces, weight White Button Or Crimini Mushrooms\n4 Tablespoons Canola Oil\n1/2 teaspoon Kosher Salt\n4 cups Cornbread, Cut Into 1-inch Cubes\n4 cups French Bread, Cut Into 1-inch Cubes\n4 cups Artisan/crusty Bread, Cut Into 1-inch Cubes\n1/2 pound Italian Sausage\n2 cups Diced Onion\n5 whole Granny Smith Apples, Large Dice\n5 Tablespoons Brown Sugar\n1 cup White Wine\n1/2 teaspoon Kosher Salt\n32 ounces, fluid Low (very Low) Sodium Chicken Broth\n1 teaspoon Ground Thyme\n1/2 teaspoon Turmeric (more To Taste)\n2 teaspoons Rosemary, Leaves Minced\n1/2 teaspoon (additional) Kosher Salt\n Black Pepper To Taste\n Fresh Parsley, Minced",
    url: "http://thepioneerwoman.com/cooking/2010/10/cornbread-dressing-with-sausage-and-apples/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/10/5048260755_c9d7032e2d_o.jpg",
    cookTime: "PT30M",
    recipeYield: "16",
    datePublished: "2010-10-04",
    prepTime: "PT30M",
    description:
      "It's October 4, and you know what that means: It's time for Thanksgiving recipes!     Wait...huh?     Already?    So soon?   ...",
  },
  {
    name: "Three Cheese-Stuffed Shells with Meaty Tomato Sauce",
    ingredients:
      "8 ounces, weight Jumbo Pasta Shells\n30 ounces, weight Whole Milk Ricotta Cheese\n8 ounces, weight Parmesan Cheese, Grated, Divided\n1/2 cup Grated Romano Cheese\n1 whole Egg\n12 leaves Basil, Chiffonade\n2 Tablespoons Minced Parsley\n Salt And Pepper, to taste\n2 Tablespoons Olive Oil\n1/2 whole Medium Onion, Chopped\n5 cloves Garlic, Minced\n1/2 pound Italian Sausage\n1/2 cup Red Wine\n1 whole 28 Ounce Can Crushed Tomatoes\n1 whole 15-ounce Can Crushed Tomatoes\n2 Tablespoons Sugar\n1/2 teaspoon Salt\n2 Tablespoons Minced Parsley",
    url: "http://thepioneerwoman.com/cooking/2010/10/three-cheese-stuffed-shells-with-meaty-tomato-sauce/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/10/5053124762_fe7f70b1f1_o.jpg",
    cookTime: "PT1H30M",
    recipeYield: "8",
    datePublished: "2010-10-05",
    prepTime: "PT15M",
    description:
      "This is yummy.     This is simple.     This was dinner last night.    The kids loved it. Marlboro Man loved it. Amen.    Ever...",
  },
  {
    name: "The Pie That\u2019ll Make You Cry",
    ingredients:
      '1 whole Unbaked Pie Crust (I Use "sylvia\'s Perfect Pie Crust" Recipe\n1 cup White Sugar\n3 Tablespoons Brown Sugar\n1/2 teaspoon Salt\n1 cup Corn Syrup\n3/4 teaspoons Vanilla\n1/3 cup Melted Butter (salted)\n3 whole Eggs, Beaten\n1 cup (heaping) Chopped Pecans',
    url: "http://thepioneerwoman.com/cooking/2010/10/the-pie-thatll-make-you-cry/",
    image: "http://static.thepioneerwoman.com/cooking/files/2010/10/pie.jpg",
    cookTime: "PT50M",
    recipeYield: "12",
    datePublished: "2010-10-06",
    prepTime: "PT15M",
    description:
      "NOTE: The baking temperature required seems to vary widely from oven to oven. Mine bakes perfectly in 50 minutes, but some ar...",
  },
  {
    name: "Corn Chowder with Chilies",
    ingredients:
      "2 slices Bacon, Cut Into 1/2-inch Pieces (or Smaller)\n2 Tablespoons Butter\n1-1/2 whole Yellow Onion, Diced\n5 ears Corn, Shucked (about 4 Cups)\n2 whole Chipotle Peppers In Adobo Sauce, Finely Diced\n1 whole 4-ounce Can Diced Green Chilies\n32 ounces, fluid Low Sodium Chicken Broth\n1-1/2 cup Heavy Whipping Cream\n1/2 teaspoon Kosher Salt (more To Taste)\n3 Tablespoons Corn Meal OR Masa\n1/4 cup Water",
    url: "http://thepioneerwoman.com/cooking/2010/10/corn-chowder-with-chilies/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/10/chowder.jpg",
    cookTime: "PT20M",
    recipeYield: "8",
    datePublished: "2010-10-08",
    prepTime: "PT10M",
    description:
      "This is to die for.     It's just a regular corn chowder made with fresh corn shaved off the cob, which is yummy enough as it...",
  },
  {
    name: "Chocolate Almond Frozen Mousse",
    ingredients:
      "1 package Cool Whip\n2 Tablespoons Strong Brewed Coffee, Completely Cooled\n1 whole Hershey Bar With Almonds",
    url: "http://thepioneerwoman.com/cooking/2010/10/chocolate-almond-frozen-mousse/",
    image: "http://static.thepioneerwoman.com/cooking/files/2010/10/mousse.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2010-10-11",
    prepTime: "PT15M",
    description:
      "Before I begin, let me give you a little warning: this is an extremely complicated recipe. I know, I know. I'm usually about ...",
  },
  {
    name: "Chicken Cacciatore",
    ingredients:
      "1 pound Pasta Or Egg Noodles\n8 whole Chicken Thighs, Skin On (can Use Any Whole Piece Chicken)\n Salt And Freshly Ground Black Pepper, To Taste\n1/2 cup All-purpose Flour\n4 Tablespoons Olive Oil\n2 Tablespoons Butter\n1 whole Medium Onion, Halved And Sliced\n2 whole Red Bell Peppers, Cored And Sliced (not Too Thin)\n2 whole Green Bell Peppers, Cored And Sliced (not Too Thin)\n5 cloves Garlic, Diced\n12 ounces, weight Mushrooms (white Or Crimini), Sliced\n1/2 teaspoon Ground Thyme\n1/4 teaspoon Turmeric\n1/2 teaspoon Kosher Salt\n Red Pepper Flakes, Crushed, To Taste (optional)\n3/4 cups Dry White Wine\n1 can (28 Ounce) Whole Or Diced Tomatoes (with Their Juice)\n Chopped Flat Leaf Parsley\n Parmesan Cheese, For Sprinkling",
    url: "http://thepioneerwoman.com/cooking/2010/10/chicken-cacciatore/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/10/5091364415_b1058dec47_o.jpg",
    cookTime: "PT1H15M",
    recipeYield: "6",
    datePublished: "2010-10-18",
    prepTime: "PT10M",
    description:
      "I am a lover of braised meats, whether it be pot roast or short ribs or beef brisket...or the chicken dish I'm sharing with y...",
  },
  {
    name: "Creamy Cheese Grits with Chilies",
    ingredients:
      "4-1/2 cups Water\n1/2 teaspoon Salt\n1 cup Grits (quick Or Regular)\n1/2 can (10 Ounce Can) Rotel (tomatoes And Chilies)\n1 can (4 Ounce Can) Chopped Green Chilies\n8 ounces, weight Monterey Jack Cheese, Grated\n4 ounces, weight Cream Cheese, Cut Into Cubes\n1/4 teaspoon Cayenne Pepper\n1/4 teaspoon Paprika\n Black Pepper To Taste\n1 whole Egg Beaten",
    url: "http://thepioneerwoman.com/cooking/2010/10/creamy-cheese-grits-with-chilies/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/10/5079611293_ff628b6e0c_z.jpg",
    cookTime: "PT45M",
    recipeYield: "8",
    datePublished: "2010-10-14",
    prepTime: "PT5M",
    description:
      "I have a good, basic recipe for cheese grits in my cookbook, but last night I was feeling feisty.     I was cooking steaks. B...",
  },
  {
    name: "Big Steak Salad",
    ingredients:
      "2 whole Rib-eye Or Strip Steaks, Extra Fat Trimmed\n _____\n FOR THE DRESSING/MARINADE:\n3/4 cups Canola Oil\n3 Tablespoons Red Wine Vinegar\n1 Tablespoon Balsamic Vinegar\n1 Tablespoon Worcestershire Sauce\n2 Tablespoons Soy Sauce\n1 teaspoon (additional) Soy Sauce\n2 Tablespoons Lime Juice\n2 Tablespoons Sugar\n3 cloves Garlic, Peeled\n1 Tablespoon Minced Fresh Ginger\n1/2 teaspoon Hot Chili Oil\n1 teaspoon Kosher Salt\n Lots Of Freshly Ground Black Pepper\n _____\n FOR THE ONION STRINGS:\n2 whole Onions, Sliced As Thin As Possible\n2 cups Buttermilk\n2 cups Flour\n1 Tablespoon Salt\n1/2 teaspoon Cayenne Pepper\n1 quart Canola Oil\n Black Pepper To Taste\n _____\n FOR THE CANDIED PECAN BITS:\n1/2 cup Pecans, Chopped\n1 cup Sugar\n2 Tablespoons Water\n _____\n FOR THE SALAD:\n Lettuce Mix: Romaine, Arugula, Watercress, Raddiccio, Etc.\n Small Grape Tomatoes\n3/4 cups Crumbled Blue Cheese",
    url: "http://thepioneerwoman.com/cooking/2010/10/big-steak-salad/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/10/5095710774_9a8833d919_z.jpg",
    cookTime: "PT20M",
    recipeYield: "4",
    datePublished: "2010-10-20",
    prepTime: "PT1M",
    description:
      "There are few things I love more than a big green salad with sliced grilled steak on top. Whenever Marlboro Man and I land at...",
  },
  {
    name: "My Favorite Turkey Brine",
    ingredients:
      "3 cups Apple Juice Or Apple Cider\n2 gallons Cold Water\n4 Tablespoons Fresh Rosemary Leaves\n5 cloves Garlic, Minced\n1-1/2 cup Kosher Salt\n2 cups Brown Sugar\n3 Tablespoons Peppercorns\n5 whole Bay Leaves\n Peel Of Three Large Oranges",
    url: "http://thepioneerwoman.com/cooking/2010/10/my-favorite-turkey-brine/",
    image: "http://static.thepioneerwoman.com/cooking/files/2010/10/brine1.jpg",
    cookTime: "PT15M",
    recipeYield: "18",
    datePublished: "2010-10-26",
    prepTime: "PT10M",
    description:
      "It's time.     It's time for Thanksgiving recipes.    I don't care that it's not even Halloween yet!    Oh, I know how it goe...",
  },
  {
    name: "Spaghetti Squash with Maple Syrup and Shallots",
    ingredients:
      "2 whole Medium Spaghetti Squash\n3 Tablespoons Butter\n2 whole Shallots, Finely Minced\n1/4 cup Maple Syrup\n Dash Of Salt\n Dash Of Nutmeg",
    url: "http://thepioneerwoman.com/cooking/2010/10/spaghetti-squash-with-maple-syrup-and-shallots/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/10/5119078441_97630f857d_z.jpg",
    cookTime: "PT1H",
    recipeYield: "8",
    datePublished: "2010-10-27",
    prepTime: "PT10M",
    description:
      "In the next post, I'll continue the turkey brining discussion, and move on into roasting the sucker.     Meantime, here's a y...",
  },
  {
    name: "Pear Clafouti, Three Ways",
    ingredients:
      "2 whole Pears\n2 teaspoons Minced Or Grated Ginger\n2 Tablespoons Sugar\n2 teaspoons Brandy, Optional\n3/4 cups All-purpose Flour\n1/2 teaspoon Salt\n1/2 cup Sugar\n3 whole Eggs, Beaten With A Fork\n2 cups Whole Milk (substitute Half With Cream If You Desire)\n1 teaspoon Vanilla",
    url: "http://thepioneerwoman.com/cooking/2010/11/pear-clafouti-three-ways/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/10/5133335327_815e9be823_o.jpg",
    cookTime: "PT45M",
    recipeYield: "12",
    datePublished: "2010-11-01",
    prepTime: "PT15M",
    description:
      "I decided to make pear clafouti yesterday for two reasons:     1. I had pears.  2. I love to say the word clafouti.    Clafou...",
  },
  {
    name: "Soul Sweet \u2018Taters (Step-by-Step!)",
    ingredients:
      "4 whole Medium Sweet Potatoes\n1 cup Sugar\n1 cup Milk\n2 whole Eggs\n1 teaspoon Vanilla Extract\n1 teaspoon Salt\n1 cup Brown Sugar\n1 cup Pecans\n1/2 cup Flour\n3/4 sticks Butter",
    url: "http://thepioneerwoman.com/cooking/2010/10/soul-sweet-taters-step-by-step-recipe/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/10/sweettaters.jpg",
    cookTime: "PT30M",
    recipeYield: "10",
    datePublished: "2010-10-29",
    prepTime: "PT45M",
    description:
      "Well, shiver me timbers.     Long ago, I had shared the final photo and printable recipe for my all-time favorite sweet potat...",
  },
  {
    name: "Cranberry-Pomegranate Sauce",
    ingredients:
      "1 bag (about 12 To 16 Oz) Fresh Cranberries\n16 ounces, fluid Pomegranate Juice\n3/4 cups Sugar, More Or Less To Taste",
    url: "http://thepioneerwoman.com/cooking/2010/11/cranberry-pomegranate-sauce/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/11/cranberry-pomegranate-sauce.jpg",
    cookTime: "PT15M",
    recipeYield: "12",
    datePublished: "2010-11-04",
    prepTime: "PT2M",
    description:
      "I love cranberry sauce. Love it, love it, love it.    I'm picky about it, though. I do not, for example, like cranberry relis...",
  },
  {
    name: "Green Bean Casserole",
    ingredients:
      "2 pounds Fresh Green Beans, Ends Cut Off\n4 slices Bacon, Cut Into 1/4 Inch Pieces\n3 cloves Garlic, Minced\n1/2 whole Large Onion, Chopped\n4 Tablespoons Butter\n4 Tablespoons All-purpose Flour\n2-1/2 cups Whole Milk\n1/2 cup Half-and-half\n1-1/2 teaspoon Salt, More To Taste\n Freshly Ground Black Pepper, To Taste\n1/8 teaspoon Cayenne Pepper\n1 cup Grated Sharp Cheddar Cheese\n1 jar (4 Ounce) Sliced Pimentoes, Drained\n Extra Milk For Thinning If Necessary\n1 cup Panko Bread Crumbs",
    url: "http://thepioneerwoman.com/cooking/2010/11/green-bean-casserole/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/11/greenbeans.jpg",
    cookTime: "PT30M",
    recipeYield: "8",
    datePublished: "2010-11-08",
    prepTime: "PT20M",
    description:
      "Thanksgiving is just over two weeks away, and boy is my whisk tired. I've been cooking Thanksgiving dishes to share with you ...",
  },
  {
    name: "Dreamy Apple Pie",
    ingredients:
      "1 whole Unbaked Pie Crust\n Filling\n3 whole Large (4 Or 5 Small) Granny Smith Apples, Peeled, Cored, And Sliced Thin\n1/2 cup Brown Sugar\n1/2 cup Sugar\n1 Tablespoon All-purpose Flour\n1 cup Heavy Cream\n2 teaspoons Vanilla Extract\n1/8 teaspoon Cinnamon\n Topping\n7 Tablespoons Butter\n3/4 cups All-purpose Flour\n1/2 cup Brown Sugar\n1/4 cup Pecans (more To Taste)\n Dash Of Salt",
    url: "http://thepioneerwoman.com/cooking/2010/11/dreamy-apple-pie/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/11/5175380067_3389e85a93_z.jpg",
    cookTime: "PT1H",
    recipeYield: "12",
    datePublished: "2010-11-15",
    prepTime: "PT20M",
    description:
      "It's Pie Week here on PW Cooks, and I'll be posting a new pie recipe every day for the next five days. I'd better make friend...",
  },
  {
    name: "Hard Sauce",
    ingredients:
      "1 stick (1/2 Cup) Softened (not Room Temperature) Butter\n1-1/2 cup Powdered Sugar\n2 Tablespoons Whiskey, More Or Less To Taste",
    url: "http://thepioneerwoman.com/cooking/2010/11/hard-sauce/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/11/TPW_0242.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2010-11-14",
    prepTime: "PT5M",
    description:
      "I'm posting this recipe in preparation for the pie recipe I'll be posting Monday morning--a pie that must go on your Thanksgi...",
  },
  {
    name: "Pumpkin Cream Pie",
    ingredients:
      " FOR THE CRUST:\n1-1/2 package Graham Crackers (about 15 Cookie Sheets)\n1/2 cup Powdered Sugar\n1 stick Butter, Melted\n FOR THE FILLING:\n1 box (3 Oz. Box) Vanilla Pudding (Cook And Serve Variety)\n1 cup Half-and-half\n1/2 cup Heavy Cream\n Pinch Of Cinnamon\n Pinch Of Nutmeg\n Pinch Of Ground Cloves\n2 Tablespoons Whiskey (optional)\n1/2 cup (plus 3 Tablespoons) Pumpkin Puree\n1/2 cup (additional) Heavy Cream\n2 Tablespoons Brown Sugar\n Extra Graham Cracker Crumbs, For Garnish",
    url: "http://thepioneerwoman.com/cooking/2010/11/pumpkin-cream-pie/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/11/5180518698_1855f4bfd6_o.jpg",
    cookTime: "PT20M",
    recipeYield: "8",
    datePublished: "2010-11-16",
    prepTime: "PT2H",
    description:
      "I'm getting ready to tell you something. It might change the way you feel about our relationship. If it does, I understand.  ...",
  },
  {
    name: "Nantucket Cranberry Pie",
    ingredients:
      " Butter, For Greasing\n2 cups (heaping) Cranberries\n3/4 cups Pecans, Chopped (measure, Then Chop)\n2/3 cups Sugar\n1 cup Flour\n1 cup Sugar\n1 stick Unsalted Butter, melted\n2 whole Eggs, Lightly Beaten\n1 teaspoon Pure Almond Extract\n1/4 teaspoon Salt\n1 Tablespoon Sugar For Sprinkling",
    url: "http://thepioneerwoman.com/cooking/2010/11/nantucket-cranberry-pie/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/11/5182853441_c817eab4bd_z.jpg",
    cookTime: "PT45M",
    recipeYield: "10",
    datePublished: "2010-11-17",
    prepTime: "PT10M",
    description:
      '"There once was a pie from Nantucket..."    Never mind. Sorry.     It\'s Day Three of Pie Week! And what a beautiful, sugar-fi...',
  },
  {
    name: "French Onion Soup Stuffed Mushrooms",
    ingredients:
      "2 Tablespoons Butter\n2 whole Large Onions, Halved And Sliced Thin\n1/4 cup Beef Broth\n7 dashes Worcestershire Sauce\n Splash Of Red Or White Wine\n1/2 cup Grated Gruyere Cheese (can Use Swiss)\n Kosher Salt\n24 whole White Or Crimini Mushrooms, Washed And Stems Removed\n Minced Parsley",
    url: "http://thepioneerwoman.com/cooking/2010/11/french-onion-soup-stuffed-mushrooms/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/11/5200405868_e86da8e6e8_o.jpg",
    cookTime: "PT30M",
    recipeYield: "8",
    datePublished: "2010-11-23",
    prepTime: "PT20M",
    description:
      "Important note: this recipe has absolutely nothing to do with Thanksgiving.     I'm so glad I got that out. I feel cleansed! ...",
  },
  {
    name: "Parker House Rolls",
    ingredients:
      "4 cups Whole Milk\n2 sticks 1 Cup Butter\n1 cup Sugar\n4-1/2 teaspoons Active Dry Yeast\n8 cups All-purpose Flour\n1 teaspoon (heaping) Baking Powder\n1 teaspoon (scant) Baking Soda\n1 Tablespoon (heaping) Salt\n1 cup (additional) All-purpose Flour\n2 sticks Melted Butter (additional)",
    url: "http://thepioneerwoman.com/cooking/2010/11/parker-house-rolls/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/11/5196434061_078ec77c90_o.jpg",
    cookTime: "PT15M",
    recipeYield: "36",
    datePublished: "2010-11-22",
    prepTime: "PT3H",
    description:
      "Wanted to thank you for following along during Pie Week last week. Children, ranch, laundry, and life have kept me from finis...",
  },
  {
    name: "Dulce de Leche Coffee",
    ingredients:
      "4 cups Strongly Brewed Good Coffee\n6 ounces, fluid Dulce De Leche (*see Note)\n6 Tablespoons Kahlua, More If Preferred\n1 cup Heavy Cream\n2 Tablespoons Sugar\n6 Tablespoons Chocolate, Grated",
    url: "http://thepioneerwoman.com/cooking/2010/11/dulce-de-leche-coffee/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/11/4251045352_0704c9df5e_o.jpg",
    cookTime: "PT",
    recipeYield: "6",
    datePublished: "2010-11-28",
    prepTime: "PT10M",
    description:
      "Original post: January 2010    It's cold here, and it's about to get colder. Friday is supposed to be zero, which likely does...",
  },
  {
    name: "Whiskey Maple Cream Sauce",
    ingredients:
      "1-1/2 cup Heavy Cream\n5 Tablespoons Pure Maple Syrup\n3 Tablespoons Light Corn Syrup\n1 Tablespoon Whiskey (can Add More If Desired)",
    url: "http://thepioneerwoman.com/cooking/2010/11/whiskey-maple-cream-sauce/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/11/5204084556_5c00a06ebb_o.jpg",
    cookTime: "PT15M",
    recipeYield: "12",
    datePublished: "2010-11-24",
    prepTime: "PT5M",
    description:
      "(Note: I'm running out of time, but here's my old/antiquated Roasted Thanksgiving Turkey method. I still follow this basic re...",
  },
  {
    name: "Brandy Snaps",
    ingredients:
      " COOKIE\n1 stick Butter\n1/2 cup Molasses\n1/4 cup Sugar\n1/4 cup Brown Sugar\n1 Tablespoon Brandy\n3/4 cups Flour\n1/8 teaspoon Salt\n1/4 teaspoon Ground Ginger\n Filling\n2 cups Heavy Cream\n1/3 cup Sugar\n2 Tablespoons Brandy (more To Taste)",
    url: "http://thepioneerwoman.com/cooking/2010/11/brandy-snaps/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/11/5216304898_7d78dd8070_o.jpg",
    cookTime: "PT10M",
    recipeYield: "16",
    datePublished: "2010-11-29",
    prepTime: "PT10M",
    description:
      "These are incredible, lovely, and wonderful.     And beautiful.     And crisp, and textural, and creamy and dreamy.     Convi...",
  },
  {
    name: "Christmas Cherries",
    ingredients:
      "2 sticks Butter, Softened\n1/2 cup Sugar\n2 whole Egg Yolks, Stirred\n1 teaspoon Vanilla Extract\n Zest Of 1 Lemon\n Zest Of 1 Orange\n Juice Of 1 Lemon\n2 cups All-purpose Flour, Sifted Twice\n Candied Green And Red Cherries (sold Around The Holidays)",
    url: "http://thepioneerwoman.com/cooking/2010/11/christmas-cherries/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/11/5219306274_042550932e_o.jpg",
    cookTime: "PT20M",
    recipeYield: "36",
    datePublished: "2010-11-30",
    prepTime: "PT1H15M",
    description:
      "In case you didn't get the memo yesterday: It's...it's...(I'm almost embarrassed to say it...)    It's Cookie Week.     I rea...",
  },
  {
    name: "Cleta Bailey\u2019s Toffee Squares",
    ingredients:
      "2 sticks Butter\n1 cup Packed Brown Sugar\n1 whole Egg\n2 teaspoons Vanilla\n2 cups All-purpose Flour\n2 cups Chocolate Chips (milk Or Semi-sweet)\n3/4 cups Finely Chopped Pecans",
    url: "http://thepioneerwoman.com/cooking/2010/12/cleta-baileys-toffee-squares/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/11/5222530386_1e1b2a5a2b_o.jpg",
    cookTime: "PT15M",
    recipeYield: "24",
    datePublished: "2010-12-01",
    prepTime: "PT10M",
    description:
      "Next up, I'm thinking I need to post a nice, salty soup recipe. All these cookies are definitely filling my sweet quota for t...",
  },
  {
    name: "Easy Mulligatawny",
    ingredients:
      "1 whole Boneless Skinless Chicken Breast, Cut Into Bite-Sized Pieces\n Salt And Black Pepper To Taste\n4 Tablespoons Butter\n1 whole Medium Onion\n3 cloves Garlic, Minced Finely\n1/4 cup All-purpose Flour\n1 Tablespoon Curry Powder\n32 ounces, fluid Chicken Broth\n2 cups Half-and-half\n1 whole Granny Smith Apple, Peeled And Diced\n1 Tablespoon Sugar (white Or Brown) More Or Less To Taste\n2 teaspoons Salt, More To Taste\n Freshly Ground Black Pepper\n Cayenne Pepper (optional, For Spice)",
    url: "http://thepioneerwoman.com/cooking/2010/12/easy-mulligatawny/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/12/5242981268_d68af91765_o.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2010-12-13",
    prepTime: "PT5M",
    description:
      "I can't hear the name \"Mulligatawny\" without thinking of Seinfeld.     I just can't.    Mulligatawny is a traditional curry s...",
  },
  {
    name: "Lia\u2019s Butter Toffee",
    ingredients:
      "16 ounces, weight Butter, Melted\n16 ounces, weight Granulated Sugar\n3 ounces, fluid Water\n1 teaspoon Salt\n1 teaspoon Vanilla Extract\n16 ounces, weight Chopped Topping: Toasted Nuts, Candy Canes, Sea Salt, Etc.\n24 ounces, weight Tempered Dark Chocolate For Coating, Melted",
    url: "http://thepioneerwoman.com/cooking/2010/12/lias-butter-toffee/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/12/5240498317_2cc4daa9f0_o.jpg",
    cookTime: "PT30M",
    recipeYield: "18",
    datePublished: "2010-12-07",
    prepTime: "PT10M",
    description:
      "Note: Starting tomorrow, for the rest of the week I will be posting only salty recipes. I've used all my sugar and my jeans n...",
  },
  {
    name: "Baked Ziti",
    ingredients:
      "2 Tablespoons Olive Oil\n3 cloves Garlic, Minced\n1 whole Large Onion, Diced\n1 pound Italian Sausage\n1 pound Ground Beef\n1 can (28 Ounce Can) Whole Tomatoes, With Juice\n2 cans (14.5 Ounce) Tomato Sauce Or Marinara Sauce\n2 teaspoons Italian Seasoning\n1/2 teaspoon Red Pepper Flakes\n Salt And Pepper, to taste\n16 ounces, weight Ziti Or Mostaciolli, Cooked Until Not Quite Al Dente\n1 tub (15 Ounce) Whole Milk Ricotta Cheese\n1-1/2 pound Mozzarella Cheese, Grated\n1/2 cup Grated Parmesan Cheese\n1 whole Egg\n Fresh Minced Parsley",
    url: "http://thepioneerwoman.com/cooking/2012/11/baked-ziti/",
    image: "http://static.thepioneerwoman.com/cooking/files/2012/11/ziti2.jpg",
    cookTime: "PT45M",
    recipeYield: "12",
    datePublished: "2012-11-26",
    prepTime: "PT15M",
    description:
      "Before I begin with this recipe tutorial, I must make an important disclosure:    I did not use ziti to make this Baked Ziti....",
  },
  {
    name: "Blueberry Lemon Sweet Rolls",
    ingredients:
      " FOR THE DOUGH:\n4 cups Whole Milk\n1 cup Sugar\n1 cup Canola Oil\n2 packages Active Dry Yeast, 0.25 Ounce Packets\n8 cups All-purpose Flour\n1 cup (additional) All-purpose Four\n1 Tablespoon (heaping) Salt\n1 teaspoon (scant) Baking Soda\n1 teaspoon (heaping) Baking Powder\n FOR THE FILLING:\n1 stick Butter\n3/4 cups Sugar\n2 whole Lemons, Zested\n2 cups (Heaping) Fresh Blueberries\n FOR THE GLAZE:\n1 whole Lemon, Juiced\n2 whole Lemons, Zested\n3 cups Powdered Sugar\n2 cups Whole Milk, Or As Needed\n1 dash Salt\n3 Tablespoons Melted Butter",
    url: "http://thepioneerwoman.com/cooking/2012/11/blueberry-lemon-sweet-rolls/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/11/blueberrysweet.jpg",
    cookTime: "PT20M",
    recipeYield: "24",
    datePublished: "2012-11-30",
    prepTime: "PT1H30M",
    description:
      "First of all, I need to state for the record that I'm on a sweet roll jag. I made these over the weekend. I made an orange ma...",
  },
  {
    name: "Bowtie Chicken Alfredo",
    ingredients:
      "12 ounces, weight Bowtie Pasta (farfalle)\n4 Tablespoons Butter\n2 whole Boneless, Skinless Chicken Breasts\n Salt And Pepper, to taste\n2 cloves Garlic, Minced\n3/4 cups Dry White Wine (may Substitute Low-sodium Chicken Broth)\n1/2 cup Half-and-half\n3 Tablespoons Heavy Cream\n Low Sodium Chicken Broth, As Needed For Thinning\n3/4 cups Parmesan Shavings Or Grated Parmesan\n2 Tablespoons Fresh Parsley, Minced",
    url: "http://thepioneerwoman.com/cooking/2012/12/bowtie-chicken-alfredo/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/12/chickenalfredo.jpg",
    cookTime: "PT20M",
    recipeYield: "6",
    datePublished: "2012-12-03",
    prepTime: "PT5M",
    description:
      "I did a whole bunch of cooking yesterday, and boy are my skillets tired!    But seriously, it was one of those days. Big ol' ...",
  },
  {
    name: "Christmas Finger Jello",
    ingredients:
      "3 boxes Cherry Or Strawberry Jello (3 Ounces Each)\n2 boxes Lime Jello (3 Ounces Each)\n2 cans Sweetened Condensed Milk (14 Ounces Each)\n9 envelopes Plain Knox Gelatin\n Nonstick Cooking Spray",
    url: "http://thepioneerwoman.com/cooking/2012/12/christmas-finger-jello/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/12/fingerjello.jpg",
    cookTime: "PT",
    recipeYield: "12",
    datePublished: "2012-12-10",
    prepTime: "PT3H",
    description:
      "First of all, I sure hope these instructions don't confuse the heck out of you.     Second, this is a really fun thing to mak...",
  },
  {
    name: "Marshmallow Pops",
    ingredients:
      " Regular Marshmallows\n1 package Almond Bark (white Or Chocolate) Or Meltable Candy Wafers\n Sprinkles, Chopped Nuts, Chopped Pretzels, Chopped Candy, Etc.\n Equipment: Lolipop Sticks (sold In Craft Stores)",
    url: "http://thepioneerwoman.com/cooking/2012/12/marshmallow-pops/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/12/marshmallowpops.jpg",
    cookTime: "PT10M",
    recipeYield: "12",
    datePublished: "2012-12-17",
    prepTime: "PT15M",
    description:
      "These easy-to-make pops are reminiscent of my good friend Bakerella's famous Cake Pops, and take almost no time to make. They...",
  },
  {
    name: "Black-Eyed Peas!",
    ingredients:
      "1 can (14-ounce) Can Black-eyed Peas\n1/4 whole Onion, Chopped Fine\n1/4 cup Sour Cream\n8 slices Jarred Jalapenos\n1 cup Grated Sharp Cheddar Cheese\n3 Tablespoons Salsa\n Hot Sauce, to taste\n Salt And Black Pepper To Taste",
    url: "http://thepioneerwoman.com/cooking/2012/12/black-eyed-peas/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2012/12/blackeyed1.jpg",
    cookTime: "PT30M",
    recipeYield: "12",
    datePublished: "2010-12-31",
    prepTime: "PT10M",
    description:
      'Happy Almost New Year, everyone! Did you know the "good luck" tradition of eating black-eyed peas dates all the way back to.....',
  },
  {
    name: "Perfect Potato Soup",
    ingredients:
      "6 slices Thin Bacon, Cut Into 1-inch Pieces\n1 whole Medium Onion, Diced\n3 whole Carrots, Scrubbed Clean And Diced\n3 stalks Celery, Diced\n6 whole Small Russet Potatoes, Peeled And Diced\n8 cups Low Sodium Chicken Or Vegetable Broth\n3 Tablespoons All-purpose Flour\n1 cup Milk\n1/2 cup Heavy Cream\n1/2 teaspoon Salt, More To Taste\n Black Pepper To Taste\n1/2 teaspoon Cajun Spice Mix\n1 teaspoon Minced Fresh Parsley\n1 cup Grated Cheese Of Your Choice",
    url: "http://thepioneerwoman.com/cooking/2013/01/perfect-potato-soup/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2013/01/potatosoup.jpg",
    cookTime: "PT20M",
    recipeYield: "12",
    datePublished: "2013-01-02",
    prepTime: "PT10M",
    description:
      "I'm Pioneer Woman and I have a confession to make. Are you ready? Here goes.     *Ahem.* *Clearing my throat.* *Singing a cou...",
  },
  {
    name: "Butternut Squash &amp; Kale Quesadillas",
    ingredients:
      "1/2 whole Butternut Squash, Peeled, Seeded, And Diced.\n2 Tablespoons Butter\n1 Tablespoon Olive Oil\n1/2 teaspoon Kosher Salt\n Black Pepper To Taste\n1/4 teaspoon Chili Powder (more To Taste)\n1 bunch Kale, Leaves Torn, Stalks Discarded\n8 whole Small (fajita Sized) Flour Tortillas\n Extra Butter For Frying\n2-1/2 cups Monterey Jack Cheese, Grated (more If Needed)\n Sour Cream For Serving\n Cilantro, For Serving\n Pico De Gallo, Salsa, Avocado Slices (optional) For Serving",
    url: "http://thepioneerwoman.com/cooking/2013/01/butternut-squash-kale-quesadillas/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2013/01/squashkale.jpg",
    cookTime: "PT20M",
    recipeYield: "4",
    datePublished: "2013-01-07",
    prepTime: "PT15M",
    description:
      "I am a passionate lover of butternut squash. I've written before about how a spoonful of butternut squash puree (spiked with ...",
  },
  {
    name: "Epiphany Cake",
    ingredients:
      " Cake\n1-1/2 stick 3/4 Cup Butter, Softened\n1-3/4 cup Sugar\n3 whole Eggs, Room Temperature\n2-1/2 cups Cake Flour\n2-1/2 teaspoons Baking Powder\n1/2 teaspoon Salt\n1 teaspoon Vanilla\n1-1/4 cup Whole Milk\n Trinkets Or Charms: Baby, Crown, Jewel, Bean, Button, Heart, Dime, Etc. (I Found Mind At Craft Stores.)\n Icing\n2 sticks Butter, Softened\n4 cups Powdered Sugar\n3/4 cups Cocoa Powder\n1/4 teaspoon Salt\n1/3 cup Heavy Cream (more To Taste)",
    url: "http://thepioneerwoman.com/cooking/2013/01/epiphany-cake/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2013/01/epiphany.jpg",
    cookTime: "PT25M",
    recipeYield: "16",
    datePublished: "2013-01-04",
    prepTime: "PT2H",
    description:
      "Epiphany is celebrated on January 6, and celebrates the Magi's visit to the Christ Child. Epiphany always held an added signi...",
  },
  {
    name: "Sunday Night Stew",
    ingredients:
      " STEW\n3 Tablespoons Olive Oil\n1 Tablespoon Butter\n2 pounds Beef Stew Meat (chuck Roast Cut Into Chunks)\n Salt And Pepper\n1 whole Medium Onion, Diced\n3 cloves Garlic, Minced\n4 ounces, weight Tomato Paste\n4 cups Low Sodium Beef Stock Or Broth, More If Needed For Thinning\n Several Dashes Worcestershire\n1/2 teaspoon Sugar\n4 whole Carrots, Peeled And Diced\n2 whole Turnips, Peeled And Diced\n2 Tablespoons Minced Fresh Parsley\n Mashed Potatoes\n5 pounds Russet Potatoes (peeled)\n1 package (8 Ounce) Cream Cheese, Softened\n1 stick Butter, Softened\n1/2 cup Heavy Cream\n1 teaspoon Seasoned Salt\n Salt And Pepper, to taste",
    url: "http://thepioneerwoman.com/cooking/2013/01/sunday-night-stew/",
    image: "http://static.thepioneerwoman.com/cooking/files/2013/01/stew2.jpg",
    cookTime: "PT3H",
    recipeYield: "8",
    datePublished: "2013-01-14",
    prepTime: "PT15M",
    description:
      "Yesterday was cold and windy and shivery and frigid, and to psychologically withstand such things, I made Sunday Night Stew a...",
  },
  {
    name: "Perfect Potatoes au Gratin",
    ingredients:
      "4 whole Russet Potatoes, Scrubbed Clean\n2 Tablespoons Butter, Softened\n1-1/2 cup Heavy Cream\n1/2 cup Whole Milk\n2 Tablespoons Flour\n4 cloves Garlic, Finely Minced\n1 teaspoon Salt\n Freshly Ground Pepper, to taste\n1 cup Sharp Cheddar Cheese, Freshly Grated",
    url: "http://thepioneerwoman.com/cooking/2010/01/perfect-potatoes-au-gratin/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4265362719_bf80aa639c.jpg",
    cookTime: "PT1H",
    recipeYield: "8",
    datePublished: "2010-01-11",
    prepTime: "PT10M",
    description:
      'Is there even such a thing as "bad" potatoes au gratin? I really don\'t think there is. And that makes the title of this recip...',
  },
  {
    name: "Chicken Piccata",
    ingredients:
      "4 whole Boneless, Skinless Chicken Breasts\n Kosher Salt To Taste\n Freshly Ground Black Pepper, To Taste\n4 Tablespoons All-purpose Flour\n5 Tablespoons Butter\n4 Tablespoons Olive Oil\n1 cup Dry White Wine\n3/4 cups Low Sodium Chicken Broth\n2 whole Lemons\n 3/4 Cup Heavy Cream\n Chopped Fresh Parsley\n1 pound Angel Hair Pasta",
    url: "http://thepioneerwoman.com/cooking/2010/03/monday-night-dinner-chicken-piccata/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4415681699_2c72625355.jpg",
    cookTime: "PT15M",
    recipeYield: "4",
    datePublished: "2010-03-08",
    prepTime: "PT15M",
    description:
      "This is how you make Chicken Piccata when you're out of capers and you have a pathological fear of cooking anything without a...",
  },
  {
    name: "Ice Cream Pie with Easy Caramel Sauce",
    ingredients:
      " Caramel Sauce\n4 Tablespoons Butter\n1 cup Brown Sugar, Packed\n1/2 cup Half-and-half\n Pinch Of Salt\n1 Tablespoon Vanilla\n Crust\n1/4 cup Egg Whites\n1/4 teaspoon Salt\n1/4 cup Sugar\n1 cup Pecans, Finely Chopped\n Filling\n2 pints Ice Cream (1 Pint Each Of Different Flavors)",
    url: "http://thepioneerwoman.com/cooking/2010/01/ice-cream-pie-with-easy-caramel-sauce/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4269055702_35124ddfb2.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2010-01-12",
    prepTime: "PT25M",
    description:
      "I can't think of anything more logical than making an ice cream pie in the dead of winter, can you?    Oh...you can?     Shoo...",
  },
  {
    name: "Perfect Pound Cake",
    ingredients:
      "3 sticks Butter\n3 cups Sugar\n5 whole Eggs\n1 teaspoon Butter Flavoring\n2 teaspoons Lemon Flavoring\n3 cups All-purpose Flour\n1 cup Sprite, 7-UP, Or Sierra Mist",
    url: "http://thepioneerwoman.com/cooking/2010/01/perfect-pound-cake/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4269405890_51508ae6bb.jpg",
    cookTime: "PT1H",
    recipeYield: "12",
    datePublished: "2010-01-14",
    prepTime: "PT15M",
    description:
      "This is a beautiful, moist, flavorful, delicious, yummy, happy pound cake...and it contains pop.     Important question: do y...",
  },
  {
    name: "Italian Meatball Soup",
    ingredients:
      " Meatballs:\n3/4 pounds Ground Beef\n1/2 cup Freshly Grated Parmesan Cheese\n3 Tablespoons Fresh Parsley, Minced\n1 whole Egg\n2 cloves Garlic\n1/2 teaspoon Salt\n1/2 teaspoon Black Pepper\n1/4 teaspoon Ground Oregano\n2 teaspoons Lemon Juice\n SOUP\n3 Tablespoons Olive Oil\n7 cups Low Sodium Beef Stock\n2 cups Water\n1/2 teaspoon Salt\n2 Tablespoons Tomato Paste\n3/4 cups Onion, Chopped\n3/4 cups Carrots, Chopped\n3/4 cups Celery, Chopped\n1 cup Russet Potato, Chopped (do Not Peel)\n1/2 pound Cabbage Chopped\n Grated Parmesan Cheese To Serve\n TIED IN A CHEESECLOTH BUNDLE\n4 Tablespoons Fresh Parsley, Minced\n2 whole Bay Leaves\n1 teaspoon Peppercorns",
    url: "http://thepioneerwoman.com/cooking/2010/01/italian-meatball-soup/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4283645292_a28eed5d12.jpg",
    cookTime: "PT45M",
    recipeYield: "8",
    datePublished: "2010-01-18",
    prepTime: "PT30M",
    description:
      "This is a hearty, delicious, make-you-feel-good soup that's equally suited for a weeknight meal or a casual supper with frien...",
  },
  {
    name: "Mocha Silk Pie",
    ingredients:
      " Crust\n1 cup Pecans, Finely Chopped\n1/2 cup Packed Brown Sugar\n2 ounces, weight Semi Sweet Chocolate Grated\n2 Tablespoons Kahlua\n Dash Of Salt\n Filling\n2 sticks Butter (salted)\n1-1/2 cup Sugar\n2 teaspoons Instant Coffee Granules\n1 teaspoon Kahlua\n3 ounces, weight Semi-sweet (or Bittersweet) Chocolate\n1 teaspoon Vanilla Extract\n4 whole Large Eggs",
    url: "http://thepioneerwoman.com/cooking/2010/01/mocha-silk-pie/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4288904167_0f69e95627.jpg",
    cookTime: "PT2H",
    recipeYield: "10",
    datePublished: "2010-01-20",
    prepTime: "PT35M",
    description:
      "Yesterday I experimented.     I experimented with pie.     And the results. Oh, the results. I don't know what to do, say, th...",
  },
  {
    name: "Homemade Chicken and Noodles",
    ingredients:
      '1 whole Cut Up Fryer Chicken\n2 whole Carrots, Diced\n2 stalks Celery, Diced\n1/2 whole Medium Onion, Diced (optional)\n1 teaspoon Salt\n1/2 teaspoon Turmeric\n1/4 teaspoon White Pepper (more To Taste)\n1/4 teaspoon Ground Thyme\n2 teaspoons Parsley Flakes\n16 ounces, weight Frozen "homemade" Egg Noodles\n3 Tablespoons All-purpose Flour',
    url: "http://thepioneerwoman.com/cooking/2010/01/homemade-chicken-and-noodles/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/01/4302390134_8a04478597_o.jpg",
    cookTime: "PT1H",
    recipeYield: "6",
    datePublished: "2010-01-25",
    prepTime: "PT10M",
    description:
      "This is a comfort food from my childhood on the golf course, and something I highly recommend if you've never come across it ...",
  },
  {
    name: "Restaurant Style Salsa",
    ingredients:
      "1 can (28 Ounce) Whole Tomatoes With Juice\n2 cans (10 Ounce) Rotel (diced Tomatoes And Green Chilies)\n1/4 cup Chopped Onion\n1 clove Garlic, Minced\n1 whole Jalapeno, Quartered And Sliced Thin\n1/4 teaspoon Sugar\n1/4 teaspoon Salt\n1/4 teaspoon Ground Cumin\n1/2 cup Cilantro (more To Taste!)\n1/2 whole Lime Juice",
    url: "http://thepioneerwoman.com/cooking/2010/01/restaurant-style-salsa/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4307514771_c089bbd7101.jpg",
    cookTime: "PT",
    recipeYield: "12",
    datePublished: "2010-01-27",
    prepTime: "PT10M",
    description:
      "Okay. Here's the situation:     I am completely high maintenance when it comes to salsa.     Now, I'm not talking about Pico ...",
  },
  {
    name: "Life by Chocolate",
    ingredients:
      " CUPCAKES\n2 cups Sugar\n2 cups All-purpose Flour\n1/4 teaspoon Salt\n1/2 cup Buttermilk\n2 whole Eggs\n1 teaspoon Baking Soda\n1 teaspoon Vanilla\n2 sticks 1 Cup Butter\n4 Tablespoons (heaping) Cocoa Powder\n1 cup Water, Boiling\n18 whole Hershey's Kisses, Unwrapped\n Canned Pitted Cherries (optional)\n GANACHE\n8 ounces, weight Bittersweet Chocolate\n1 cup Heavy Cream\n6 Tablespoons Corn Syrup\n2 teaspoons Vanilla Extract",
    url: "http://thepioneerwoman.com/cooking/2010/01/life-by-chocolate/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4313095885_615dfd428b.jpg",
    cookTime: "PT20M",
    recipeYield: "18",
    datePublished: "2010-01-29",
    prepTime: "PT20M",
    description:
      "Enough of this talk of death. Chocolate is a life-giving elixir! Without it, where would we all be?     Oh...we'd all be skin...",
  },
  {
    name: "Drip Beef, Two Ways",
    ingredients:
      "1 whole Beef Chuck Roast, 2.5 To 4 Pounds\n1 can Beef Consomme Or Beef Broth\n3 Tablespoons (heaping) Italian Seasoning\n1 teaspoon Salt\n1/4 cup Water\n1/2 jar (16 Oz) Pepperoncini Peppers, With Juice\n Buttered, Toasted Deli Rolls",
    url: "http://thepioneerwoman.com/cooking/2010/02/drip-beef-two-ways/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4326411577_414ca9869c.jpg",
    cookTime: "PT6H",
    recipeYield: "10",
    datePublished: "2010-02-03",
    prepTime: "PT5M",
    description:
      "Drip Beef. To me, the name means Scumptious. Hearty.     Drip Beef. To me, the name means Crowd pleasing. Yummy.    Drip Beef...",
  },
  {
    name: "Homemade Glazed Doughnuts",
    ingredients:
      " Doughnuts\n1-1/8 cup Whole Milk, Warm\n1/4 cup Sugar\n2-1/4 teaspoons (one Package) Instant Or Active Dry Yeast\n2 whole Large Eggs, Beaten\n1-1/4 stick Unsalted Butter, melted\n4 cups All-purpose Flour\n1/4 teaspoon Salt\n Shortening\n GLAZE\n3 cups Powdered Sugar\n1/2 teaspoon Salt\n1/2 teaspoon Vanilla\n1/2 cup Cold Water Or Milk",
    url: "http://thepioneerwoman.com/cooking/2010/02/homemade-glazed-doughnuts/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4339242697_4d5978196c.jpg",
    cookTime: "PT2M",
    recipeYield: "18",
    datePublished: "2012-08-10",
    prepTime: "PT25M",
    description:
      "Let me begin this post by saying how excited I am to share this doughnut recipe with you. What can I say? Doughnuts are excit...",
  },
  {
    name: "Spaghetti &amp; Meatballs",
    ingredients:
      " Meatballs:\n3/4 pounds Ground Beef\n3/4 pounds Ground Pork\n3 cloves Garlic, Minced\n3/4 cups Fine Bread Crumbs\n2 whole Eggs\n3/4 cups Freshly Grated Parmesan\n1/4 cup Flat-leaf Parsley, Minced\n1/4 teaspoon Salt\n Freshly Ground Black Pepper\n Splash Of Milk\n1/2 cup Olive Oil\n Sauce:\n1 whole Yellow Onion, Diced\n3 cloves Garlic, Minced\n1 whole (28-ounce) Can Whole Tomatoes\n1 whole 28 Ounce Can Crushed Tomatoes\n1/2 cup White Or Red Wine (optional)\n1/4 teaspoon Salt\n1 teaspoon Sugar\n Freshly Ground Black Pepper\n1/4 cup Flat-leaf Parsley, Minced\n8 whole Fresh Basil Leaves, Chiffonade (optional)\n2 pounds Spaghetti, Cooked To Al Dente",
    url: "http://thepioneerwoman.com/cooking/2010/02/spaghetti-meatballs/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4359366690_51652f9b53.jpg",
    cookTime: "PT1H",
    recipeYield: "8",
    datePublished: "2010-02-15",
    prepTime: "PT25M",
    description:
      "I love---I mean love---making spaghetti and meatballs. Oh, don't get me wrong---I love eating it, too. But if I had to choose...",
  },
  {
    name: "My Favorite Pizza",
    ingredients:
      " FOR THE CRUST (MAKES TWO CRUSTS):\n1 teaspoon Active Dry Or Instant Yeast\n4 cups All-purpose Flour\n1 teaspoon Kosher Salt\n1/3 cup Extra Virgin Olive Oil\n _____\n FOR THE PIZZA:\n1 whole Large Eggplant (or Two Medium Eggplants)\n Kosher Salt, For Sprinkling\n1 pint Grape Tomatoes\n2 cloves Garlic, Minced\n8 ounces, weight Fresh Mozzarella Cheese, Sliced Very Thin\n1/2 cup Freshly Grated Parmesan Cheese\n Extra Virgin Olive Oil For Drizzling\n Freshly Ground Black Pepper",
    url: "http://thepioneerwoman.com/cooking/2010/02/my-favorite-pizza/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4364270576_302751a2a4.jpg",
    cookTime: "PT25M",
    recipeYield: "8",
    datePublished: "2010-02-17",
    prepTime: "PT30M",
    description:
      "Let's face it: I have a list of favorite pizzas so long, it stretches out the front door and well into our north pasture. Thi...",
  },
  {
    name: "Pasta with Bacon and Mushrooms",
    ingredients:
      "2 Tablespoons Olive Oil\n3 slices Thin Bacon, Cut Into 1/2-inch Pieces\n3 cloves Garlic, Minced\n1 package (10 Ounce) White Button Mushrooms, Sliced Thin\n1 cup Low Sodium Chicken Broth (OR Dry White Wine)\n1 cup Half-and-half\n1/4 cup Heavy Whipping Cream\n3 whole Green Onions, White And Light Green Parts Sliced\n1/4 cup Flat-leaf Parsley, Minced\n1/2 cup Freshly Grated Parmesan Cheese\n Salt To Taste\n Freshly Ground Black Pepper, To Taste\n1 pound Thin Spaghetti Or Angel Hair Pasta\n Extra Parmesan, For Sprinkling",
    url: "http://thepioneerwoman.com/cooking/2010/02/monday-night-dinner-pasta-with-bacon-and-mushrooms/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4378328805_fc085ede5f.jpg",
    cookTime: "PT15M",
    recipeYield: "4",
    datePublished: "2010-02-22",
    prepTime: "PT10M",
    description:
      "I'm working on the sushi post from the weekend, as well as a contest that will go along with it. But since it's Monday, I wan...",
  },
  {
    name: "Sundried Tomato Risotto",
    ingredients:
      "4 Tablespoons Butter\n2 Tablespoons Olive Oil\n1/2 whole Large Yellow Onion, Diced\n3 cloves Garlic, Minced\n2 cups Arborio Rice, Uncooked\n8 whole Sun-dried Tomatoes Packed In Oil, Drained And Minced\n1 cup Dry White Wine (optional)\n7 cups Low Sodium Chicken Broth\n Salt As Needed\n Freshly Ground Black Pepper\n1 cup Parmesan, Freshly Grated\n1/4 cup Heavy Whipping Cream\n Fresh Basil, Chiffonade (optional)",
    url: "http://thepioneerwoman.com/cooking/2010/03/sundried-tomato-risotto/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4396332303_abdb37a2df.jpg",
    cookTime: "PT1H",
    recipeYield: "10",
    datePublished: "2010-03-01",
    prepTime: "PT5M",
    description:
      "This is, I do believe, the third risotto recipe on my site, and should not be confused with the Roasted Red Pepper version I ...",
  },
  {
    name: "Apple Fritters",
    ingredients:
      " FRITTERS\n2 cups All-purpose Flour\n1/2 cup Sugar\n3 Tablespoons Sugar\n2-1/4 teaspoons Baking Powder\n1-1/4 teaspoon Salt\n2 teaspoons Ground Cinnamon\n2 whole Large Eggs\n3/4 cups Whole Milk\n2 teaspoons Vanilla Extract\n2 Tablespoons Melted Butter\n2 whole Granny Smith Apples, Peeled And Diced\n Powdered Sugar (optional, For Dusting)\n GLAZE (optional)\n1-1/2 cup Powdered Sugar\n1/4 teaspoon Salt\n1/4 teaspoon Vanilla\n1/4 cup Milk",
    url: "http://thepioneerwoman.com/cooking/2010/03/apple-fritters/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4402493593_31d952d180.jpg",
    cookTime: "PT10M",
    recipeYield: "8",
    datePublished: "2010-03-03",
    prepTime: "PT15M",
    description:
      "I love apple fritters!    I made a batch late yesterday. Evidently, I felt my life had somehow been missing petite fried nugg...",
  },
  {
    name: "Steak with Burgundy Mushroom Sauce",
    ingredients:
      "4 whole Steaks (sirloin, Ribeye, Etc.)\n1/2 cup Butter\n1 pound White Mushrooms, Sliced\n4 cloves Garlic, Minced\n3 whole Green Onions, Sliced\n1-1/2 cup Red Wine: Burgundy, Merlot, Cab, Etc.\n Salt And Pepper, to taste\n1 Tablespoon Butter\n Fresh Parsley, Minced, To Taste",
    url: "http://thepioneerwoman.com/cooking/2010/03/steak-with-burgundy-mushroom-sauce/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4426084170_d2a56074ea.jpg",
    cookTime: "PT15M",
    recipeYield: "4",
    datePublished: "2010-03-12",
    prepTime: "PT5M",
    description:
      "I am in love with heavy, ingredient-rich steak sauces.    Marlboro Man, on the other hand, believes a good steak should stand...",
  },
  {
    name: "CPK\u2019s BBQ Chicken Pizza",
    ingredients:
      "1 whole Recipe For Pizza Crust (mine Makes Two Crusts)\n2 whole Boneless, Skinless Chicken Breasts\n1/2 cup Barbecue Sauce\n Olive Oil, For Drizzling\n Salt For Sprinkling\n16 ounces, weight Fresh Mozzarella Cheese, Sliced Thinly\n1/2 whole Red Onion, Cut In Half And Sliced Very Thin\n Chopped Cilantro, to taste",
    url: "http://thepioneerwoman.com/cooking/2010/03/cpks-bbq-chicken-pizza/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4433733640_8b0a5d19fb.jpg",
    cookTime: "PT15M",
    recipeYield: "12",
    datePublished: "2010-03-15",
    prepTime: "PT2H",
    description:
      "When I was in college, California Pizza Kitchen was the height of awesomeness for my friends and me. A vegetarian at the time...",
  },
  {
    name: "Tom\u2019s Trinidadian Chicken Curry",
    ingredients:
      "4 pounds Chicken Pieces (I Used Legs And Thighs), Rinsed,  Skin And Fat Removed\n2 teaspoons Salt\n Cracked Black Pepper\n1 teaspoon Yellow Mustard\n1 whole Medium Onion, Halved\n1 whole Tomato, Quartered\n8 cloves Garlic\n8 sprigs Cilantro\n2 Tablespoons (rounded) Curry Powder (I Used A Trini Mix)\n2 teaspoons Turmeric\n4 Tablespoons Vegetable Oil\n Jalapeno Pepper, Sliced (optional)\n Potatoes (optional)",
    url: "http://thepioneerwoman.com/cooking/2010/03/toms-trinidadian-chicken-curry/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4451811640_43cf576fe7.jpg",
    cookTime: "PT30M",
    recipeYield: "6",
    datePublished: "2010-03-22",
    prepTime: "PT2H",
    description:
      "I have a friend named Ivory Hut. I love that girl.    Ivory Hut has a husband who is, among many things, Trinidadian.    Rece...",
  },
  {
    name: "A Blast From the Past",
    ingredients:
      "1 whole Pound Cake\n1 gallon Ice Cream\n1 package Oreo Cookies\n1 package Gummy Worms\n Other Things You'll Need:\n Small Clay Flower Pots, Lead-free\n Straws\n Fresh Cut Flowers",
    url: "http://thepioneerwoman.com/cooking/2010/03/a-blast-from-the-past/",
    image: "http://static.thepioneerwoman.com/cooking/files/2010/03/pots2.jpg",
    cookTime: "PT",
    recipeYield: "6",
    datePublished: "2008-04-30",
    prepTime: "PT30M",
    description:
      "I'm just finishing up the photos for my next recipe, but since we're entering into flowery, lovely springtime, I wanted to br...",
  },
  {
    name: "Creamy Lemon Crumb Squares",
    ingredients:
      "1-1/3 cup All-purpose Flour\n1/2 teaspoon Salt\n1 teaspoon Baking Powder\n1 stick (1/2 Cup) Butter, Slightly Softened\n1 cup Brown Sugar (lightly Packed)\n1 cup Oats\n1 can (14 Ounce) Sweetened Condensed Milk\n1/2 cup Lemon Juice\n Zest Of 1 Lemon",
    url: "http://thepioneerwoman.com/cooking/2010/03/creamy-lemon-crumb-squares/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4461676875_5d2679a2be.jpg",
    cookTime: "PT25M",
    recipeYield: "12",
    datePublished: "2010-03-25",
    prepTime: "PT15M",
    description:
      "This recipe came from Marlboro Man's grandmother. When she moved years ago from her home in town to a retirement apartment in...",
  },
  {
    name: "Peach Noodle Kugel",
    ingredients:
      "16 ounces, weight Egg Noodles, Cooked For Half The Cooking Time\n1/4 cup Butter\n Zest Of One Lemon\n3/4 cups Sugar\n1-1/2 teaspoon Cinnamon\n1-1/2 teaspoon Salt\n4 whole Eggs, Beaten\n1-1/2 can (20 To 22 Ounces Total) Peach Halves, Chopped Into Large Chunks\n2 cups Whole Milk\n2 cups Corn Flakes, Slightly Crushed\n1/4 cup Butter, Melted\n1/4 cup Brown Sugar",
    url: "http://thepioneerwoman.com/cooking/2010/03/peach-noodle-kugel/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4471752636_2c50780c4e.jpg",
    cookTime: "PT45M",
    recipeYield: "12",
    datePublished: "2010-03-29",
    prepTime: "PT20M",
    description:
      "Note: As you would probably suspect, I am not an authority on Jewish or kosher cooking. Please see important clarifications r...",
  },
  {
    name: "Passover Brisket",
    ingredients:
      "1 whole Beef Brisket, Trimmed Of All Fat (5 To 8 Pounds)\n1 bottle (24 Ounce) Ketchup Or Chili Sauce (make Sure It's Kosher)\n1 package Onion Soup Mix (make Sure It's Kosher)",
    url: "http://thepioneerwoman.com/cooking/2010/03/passover-brisket-i-think/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4475462524_0903f9b850.jpg",
    cookTime: "PT7H",
    recipeYield: "8",
    datePublished: "2010-03-30",
    prepTime: "PT10M",
    description:
      "Okay. I think we've more than established that when it comes to correct methods for cooking and serving Passover food, I am n...",
  },
  {
    name: "Hot Cross Buns",
    ingredients:
      " Buns\n2 cups Whole Milk\n1/2 cup Canola Oil\n1/2 cup Sugar\n1 package (2 1/4 Teaspoons) Active Dry Yeast\n4 cups All-purpose Flour\n1/2 cup (additional) Flour\n1/2 teaspoon (heaping) Baking Powder\n1/2 teaspoon (scant) Baking Soda\n2 teaspoons Salt\n1/4 cup Sugar\n1 teaspoon Cinnamon\n Spices: Cardamom, Nutmeg, Allspice (optional)\n1/2 cup Raisins\n GLAZE\n1 whole Egg White\n Splash Of Milk\n Icing\n1 whole Egg White\n Powdered Sugar\n Splash Of Milk",
    url: "http://thepioneerwoman.com/cooking/2010/04/hot-cross-buns/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4480756172_de8cb850a6.jpg",
    cookTime: "PT20M",
    recipeYield: "18",
    datePublished: "2010-04-01",
    prepTime: "PT2H",
    description:
      "To me, Hot Cross Buns are as synonymous with Good Friday as scrambling around town to buy Easter Egg dye and synthetic blue g...",
  },
  {
    name: "Petite Vanilla Bean Scones",
    ingredients:
      " SCONES\n3 cups All-purpose Flour\n2/3 cups Sugar\n5 teaspoons Baking Powder\n1/4 teaspoon Salt\n2 sticks (1/2 Pound) UNSALTED Butter, Chilled\n1 whole Large Egg\n3/4 cups Heavy Cream (more If Needed)\n2 whole Vanilla Beans\n GLAZE\n5 cups Powdered Sugar, Sifted\n1/2 cup Whole Milk, More If Needed For Thinning\n1 whole Vanilla Bean\n Dash Of Salt",
    url: "http://thepioneerwoman.com/cooking/2010/04/petite-vanilla-bean-scones/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4494690421_8eafa4e525_o.jpg",
    cookTime: "PT20M",
    recipeYield: "12",
    datePublished: "2010-04-08",
    prepTime: "PT20M",
    description:
      "When I went to the big city last week to attempt to get my hair colored Lucille Ball red, I stopped at Starbucks to buy three...",
  },
  {
    name: "Chicken with Tomatoes and Garlic",
    ingredients:
      "8 pieces Chicken Legs Or Thighs\n Salt And Pepper, to taste\n3 Tablespoons Olive Oil\n1 Tablespoon Butter\n1 can (28 Ounce) Diced Tomatoes\n1 can (14 Ounces) Whole Tomatoes\n2 Tablespoons (Heaping) Tomato Paste\n Fresh Herbs: Basil, Parsley, Sage, Rosemary\n8 cloves Garlic\n16 ounces, weight Pasta (I Used Cavitappi)\n Grated Parmesan Cheese, For Serving\n1/2 cup White Wine (or Red Wine)",
    url: "http://thepioneerwoman.com/cooking/2010/04/chicken-with-tomatoes-and-garlic/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4520759600_e19be76b4c_o.jpg",
    cookTime: "PT1H",
    recipeYield: "6",
    datePublished: "2010-04-15",
    prepTime: "PT10M",
    description:
      "This is a pantry meal! Well, sorta. Yesterday afternoon, after surveying the state of my refrigerator, I realized I had a sle...",
  },
  {
    name: "Sloppy Joes",
    ingredients:
      "2 Tablespoons Butter\n2-1/2 pounds Ground Beef\n1/2 whole Large Onion, Diced\n1 whole Large Green Bell Pepper, Diced\n5 cloves Garlic, Minced\n1-1/2 cup Ketchup\n1 cup Water\n2 Tablespoons Brown Sugar\n2 teaspoons Chili Powder (more To Taste)\n1 teaspoon Dry Mustard\n1/2 teaspoon Red Pepper Flakes (more To Taste)\n Worcestershire Sauce, To Taste\n2 Tablespoons Tomato Paste (optional)\n Tabasco Sauce (optional; To Taste)\n Salt To Taste\n Freshly Ground Black Pepper, To Taste\n Kaiser Rolls\n Butter",
    url: "http://thepioneerwoman.com/cooking/2010/04/sloppy-joes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4512963320_bba26f6a97_o.jpg",
    cookTime: "PT20M",
    recipeYield: "8",
    datePublished: "2010-04-12",
    prepTime: "PT10M",
    description:
      "I used to be terrified of sloppy joes. It's true. When I was a little girl, I got it in my head that sloppy joes were demons,...",
  },
  {
    name: "Cinnamon Toast the Right Way",
    ingredients:
      "16 slices Bread (whole Wheat Is Great!)\n2 sticks Salted Butter, Softened\n1 cup Sugar (more To Taste)\n3 teaspoons Ground Cinnamon\n2 teaspoons Vanilla Extract (more To Taste)\n1/8 teaspoon Ground Nutmeg (optional)",
    url: "http://thepioneerwoman.com/cooking/2010/04/the-right-way-and-the-wrong-way-to-make-cinnamon-toast/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4552411197_9b159bddb7.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2010-04-26",
    prepTime: "PT10M",
    description:
      "Oooooh. You're getting ready to get a taste of Me, Opinionated. Be sure to take a photo! You won't see it very often.    Luck...",
  },
  {
    name: "Chicken with Mushrooms and Artichokes",
    ingredients:
      "8 whole Chicken Legs Or Thighs\n Salt And Pepper, to taste\n 3 Tablespoons Olive Oil\n16 ounces, weight White Mushrooms, Sliced\n5 whole Garlic Cloves, Minced\n1/2 cup White Wine, Or More To Taste\n2 cups Chicken Broth (More As Needed)\n1 whole 14.5 Ounce Can Artichoke Hearts, Drained , Rinsed, And Patted Dry\n1 cup Heavy Cream\n Freshly Chopped Chives To Taste\n Freshly Grated Parmesan\n16 ounces, weight Pasta - Cooked And Drained",
    url: "http://thepioneerwoman.com/cooking/2010/04/chicken-with-mushrooms-and-artichokes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4522037534_b5bf34a91c_o.jpg",
    cookTime: "PT1H",
    recipeYield: "8",
    datePublished: "2010-04-19",
    prepTime: "PT10M",
    description:
      "This is the second of two chicken-centered pantry meals I made last week after discovering a slew of chicken legs that were c...",
  },
  {
    name: "Pasta With Tomato-Blue Cheese Sauce",
    ingredients:
      "1-1/2 pound Pasta (angel Hair Or Thin Spaghetti)\n2 Tablespoons Olive Oil\n3 cloves Garlic, Minced\n1 whole 28-ounce Can Diced Tomatoes, Drained\n Dash Of Sugar\n Salt And Freshly Ground Black Pepper, To Taste\n Crushed Red Pepper Flakes, To Taste\n3/4 cups Crumbled Blue Cheese\n3/4 cups Heavy Cream\n4 cups Baby Spinach\n Half-and-Half, for thinning\n Extra Blue Cheese Crumbles, For Garnish",
    url: "http://thepioneerwoman.com/cooking/2010/04/pasta-with-tomato-blue-cheese-sauce/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4558554015_34f054bf97_o.jpg",
    cookTime: "PT15M",
    recipeYield: "6",
    datePublished: "2010-04-28",
    prepTime: "PT2M",
    description:
      "I'll just say it: I'm on a pasta kick lately. I'd like to believe---and in fact, I'm telling myself daily---that the sudden u...",
  },
  {
    name: "Grilled Chicken Sandwich with Apricot Sauce",
    ingredients:
      "2 whole Boneless, Skinless Chicken Breasts, Pounded To Even Out Thickness\n Sliced Sourdough Or Other Crusty Bread\n Apricot Preserves\n Mayonnaise\n Dijon Mustard\n Cayenne Pepper (Optional)\n Baby Spinach\n Red Onion, Sliced Thinly",
    url: "http://thepioneerwoman.com/cooking/2010/05/grilled-chicken-sandwich-with-apricot-sauce/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4573369284_b1b441a0f7_o.jpg",
    cookTime: "PT15M",
    recipeYield: "2",
    datePublished: "2010-05-03",
    prepTime: "PT5M",
    description:
      "Happy anniversary week! I have lots of fun things planned, including recipes, awesome giveaways, and a Jupiter Jump! Go ahead...",
  },
  {
    name: "Aunt Trish\u2019s Salad Dressing",
    ingredients:
      "3/4 cups Olive Oil Or Canola Oil\n Juice Of 2 Lemons\n4 Tablespoons Grated Parmesan Cheese\n1/4 teaspoon Salt, More To Taste\n Freshly Ground Black Pepper\n1/4 teaspoon Sugar\n Dash Of Paprika\n1 clove Garlic - Peeled And Left Whole",
    url: "http://thepioneerwoman.com/cooking/2010/05/aunt-trishs-salad-dressing/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4572658649_22f73939cb_o.jpg",
    cookTime: "PT",
    recipeYield: "12",
    datePublished: "2010-05-06",
    prepTime: "PT5M",
    description:
      "I had a beautiful Aunt named Trish. She was married to my mother's brother.    Trish and her sisters were all nuns. Then they...",
  },
  {
    name: "Cinnamon Baked French Toast",
    ingredients:
      " FRENCH TOAST\n1 loaf Crusty Sourdough Or French Bread\n8 whole Eggs\n2 cups Whole Milk\n1/2 cup Whipping (heavy) Cream\n3/4 cups Sugar\n2 Tablespoons Vanilla Extract\n Topping\n1/2 cup All-purpose Flour\n1/2 cup Firmly Packed Brown Sugar\n1 teaspoon Cinnamon\n1/4 teaspoon Salt\n1 stick Cold Butter, Cut Into Pieces\n Fresh Fruit (optional)",
    url: "http://thepioneerwoman.com/cooking/2010/05/cinnamon-baked-french-toast/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4573173616_0ed83c1ee1_o.jpg",
    cookTime: "PT1H",
    recipeYield: "12",
    datePublished: "2010-05-10",
    prepTime: "PT15M",
    description:
      "This is a scrumptious make-ahead breakfast casserole that's so easy to prepare, it should be illegal. Leave it plain as the r...",
  },
  {
    name: "Grilled Chicken &amp; Pineapple Quesadillas",
    ingredients:
      "8 whole Flour Tortillas\n Butter Or Margarine\n2 cups Grilled Pineapple, Sliced\n3 whole Boneless, Skinless Chicken Breasts\n Salt And Pepper, to taste\n3 cups Monterey Jack Cheese, Grated\n1 whole Jalapeno, Sliced\n Cilantro\n3 Tablespoons Barbecue Sauce",
    url: "http://thepioneerwoman.com/cooking/2010/05/grilled-chicken-pineapple-quesadillas/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4613295867_09ee730bcf1.jpg",
    cookTime: "PT25M",
    recipeYield: "6",
    datePublished: "2010-05-20",
    prepTime: "PT15M",
    description:
      "We returned from Orlando around noon Sunday, and after a quick stop at the grocery store and the long, desolate drive down ou...",
  },
  {
    name: "Salted Caramel Brownie",
    ingredients:
      " **Slightly Adapted From An Amelie's-provided Recipes In Charlotte Magazine\n FOR THE BROWNIES:\n6 ounces, weight Unsweetened Chocolate, Chopped\n3/4 cups Unsalted Butter, Cut Into Pieces\n2 cups Sugar\n3 whole Eggs\n1 cup All-purpose Flour\n _____\n FOR THE CARAMEL GLAZE:\n1/2 cup Heavy Cream\n2 cups Sugar\n1/2 cup Water\n1/4 cup Unsalted Butter, Cut Into Pieces\n2 teaspoons Kosher Salt\n2 packages (about 1 Tablespoon + 1 Teaspoon) Powdered Gelatin Mixed With 1/4 Cup Water",
    url: "http://thepioneerwoman.com/cooking/2010/05/salted-caramel-brownie/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4628514598_175ae1c976_o.jpg",
    cookTime: "PT40M",
    recipeYield: "20",
    datePublished: "2010-05-24",
    prepTime: "PT25M",
    description:
      "UPDATE: There have been widely varying results with the caramel topping, so I would recommend either leaving out the gelatin ...",
  },
  {
    name: "Restaurant-Style Smashed Potatoes",
    ingredients:
      "5 whole Large Red Potatoes\n1 stick Butter, Softened And Cut Into Pieces\n5 slices Bacon, Cooked And Crumbled\n2 whole Green Onions, Sliced\n3/4 cups Sour Cream\n Salt To Taste (add Plenty!)\n Freshly Ground Black Pepper To Taste (ditto!)\n3/4 cups French Fried Onions, More For Topping",
    url: "http://thepioneerwoman.com/cooking/2010/05/restaurant-style-smashed-potatoes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4628356305_8fe47c696d_o.jpg",
    cookTime: "PT15M",
    recipeYield: "4",
    datePublished: "2010-05-27",
    prepTime: "PT5M",
    description:
      "\u00a0  Sorry. I'm on a restaurant food kick lately. First the Grilled Chicken and Pineapple Quesadillas last week, then the ...",
  },
  {
    name: "Homemade Flour Tortillas",
    ingredients:
      "2-1/2 cups All-purpose Flour\n2-1/2 teaspoons Baking Powder\n1 teaspoon Kosher Salt\n1/2 cup Lard Or Vegetable Shortening\n2 Tablespoons (additional) Lard Or Vegetable Shortening\n1 cup Hot Water",
    url: "http://thepioneerwoman.com/cooking/2010/05/homemade-flour-tortillas/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4656641366_83656923e6_b.jpg",
    cookTime: "PT10M",
    recipeYield: "16",
    datePublished: "2010-05-31",
    prepTime: "PT1H30M",
    description:
      "I don't made flour tortillas from scratch very often because they take a little time, but every time I do (and I did yesterda...",
  },
  {
    name: "Malted Milk Chocolate Chip Cookies",
    ingredients:
      "1 cup (2 Sticks) Unsalted Butter Softened\n3/4 cups Golden Brown Sugar\n3/4 cups Sugar\n2 whole Eggs\n2 teaspoons Vanilla Extract\n2 cups All-purpose Flour\n1-1/4 teaspoon Baking Soda\n1-1/4 teaspoon Salt\n1/2 cup (rounded) Malted Milk Powder\n1 bag (12 Ounce) Milk Chocolate Chips",
    url: "http://thepioneerwoman.com/cooking/2010/06/malted-milk-chocolate-chip-cookies/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4676014935_290fd3b014_b.jpg",
    cookTime: "PT12M",
    recipeYield: "36",
    datePublished: "2010-06-07",
    prepTime: "PT15M",
    description:
      "Is there anything better in the world than a chocolate malt? Notice I didn't say chocolate shake, though goodness knows I wou...",
  },
  {
    name: "Lemon and Grape Granita",
    ingredients: "3 whole Lemons\n1/2 cup Sugar\n3 cups Cold Water",
    url: "http://thepioneerwoman.com/cooking/2010/06/lemon-and-grape-granita/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4680894326_3509932abf_b.jpg",
    cookTime: "PT10M",
    recipeYield: "8",
    datePublished: "2010-06-08",
    prepTime: "PT5M",
    description:
      "It has only just begun to heat up around these parts, and on a 95-plus degree Oklahoma day there's just not much that tastes ...",
  },
  {
    name: "Rosemary Skewers",
    ingredients:
      " Stalks Of Fresh Rosemary\n Fresh Mozzarella Cheese, Cut Into 1-inch Cubes\n Marinated Artichoke Hearts, Drained\n Black Or Kalamata Olives, Drained\n Salami, Sliced Thin And Folded Into Fourths\n 1/2 Cup Olive Oil\n3 Tablespoons Balsamic Vinegar\n Pinch Of Salt\n Fresh Ground Black Pepper (lots!)\n Sprinkle Of Ground Thyme",
    url: "http://thepioneerwoman.com/cooking/2010/06/rosemary-skewers/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/06/4683751549_64dd79d2a2_b1.jpg",
    cookTime: "PT",
    recipeYield: "12",
    datePublished: "2010-06-09",
    prepTime: "PT30M",
    description:
      "\u00a0  We just had a baby shower on the ranch for my beloved old babysitter Brandi, who had the audacity to move away, go to...",
  },
  {
    name: "Olive Focaccia",
    ingredients:
      "1-1/2 teaspoon Active Dry Yeast\n1-1/2 cup Warm Water\n4 cups All-purpose Flour\n1 teaspoon Kosher Salt\n1/3 cup Olive Oil\n1 cup Olives (any Variety Or Combination), Roughly Chopped\n Olive Oil, For Drizzling\n Kosher Salt, For Sprinkling",
    url: "http://thepioneerwoman.com/cooking/2010/06/olive-focaccia/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4701975666_446efcbab7_b.jpg",
    cookTime: "PT30M",
    recipeYield: "16",
    datePublished: "2010-06-15",
    prepTime: "PT15M",
    description:
      "I'm on an olive kick! Olive haters: please bear with me. This soon shall pass.    Olive lovers: this is a great recipe to mak...",
  },
  {
    name: "Chicken With Olives",
    ingredients:
      "4 Tablespoons Butter\n4 Tablespoons Olive Oil\n6 pieces Chicken (I Used Thighs And Legs) With Skin\n1 whole Medium Onion, Diced\n5 cloves Garlic, Minced\n2 whole Green Bell Peppers, Seeded And Chopped Into Large Pieces\n1 whole 28 Ounce Can Whole Tomatoes, Completely Drained And Juice Squeezed Out, Chopped\n1 cup White Wine (or Low Sodium Chicken Broth)\n Salt\n Freshly Ground Black Pepper\n1/4 cup Heavy Cream\n1 cup Whole Green Olives\n12 ounces, weight Linguine, Cooked Al Dente And Drained",
    url: "http://thepioneerwoman.com/cooking/2010/06/chicken-with-olives/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4697631345_6453894bdc_b.jpg",
    cookTime: "PT1H30M",
    recipeYield: "6",
    datePublished: "2010-06-14",
    prepTime: "PT15M",
    description:
      "Man, was this ever good.     I should back up and apologize from the bottom of my heart for loving pasta so much. But you see...",
  },
  {
    name: "The Best Coffee Cake. Ever.",
    ingredients:
      " FOR THE CAKE:\n1-1/2 stick Butter, Softened\n2 cups Scant Sugar\n3 cups Flour, Sifted\n4 teaspoons Baking Powder\n1 teaspoon Salt\n1-1/4 cup Whole Milk\n3 whole Egg Whites, Beaten Until Stiff\n _____\n FOR THE TOPPING:\n1-1/2 stick Butter, Softened\n3/4 cups Flour\n1-1/2 cup Brown Sugar\n2 Tablespoons Cinnamon\n1-1/2 cup Pecans, Chopped",
    url: "http://thepioneerwoman.com/cooking/2010/06/the-best-coffee-cake-ever/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4706096854_ed734b479d_b.jpg",
    cookTime: "PT",
    recipeYield: "16",
    datePublished: "2010-06-17",
    prepTime: "PT",
    description:
      "This is another one of the pirated recipes from my mother's blessed recipe binder, which she accidentally left at my house a ...",
  },
  {
    name: "Pineapple Mango Salsa",
    ingredients:
      "1 whole Pineapple, Peeled And Diced\n1 whole Mango, Diced\n1/2 whole Medium Red Onion, Finely Diced\n1 whole Jalapeno, Seeded And Diced\n Fresh Cilantro, Chopped\n1 whole Lime, Juiced\n Dash Kosher Salt\n Dash Granulated Sugar (optional)",
    url: "http://thepioneerwoman.com/cooking/2010/06/pineapple-mango-salsa/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4720280193_665abb0d9a_b.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2010-06-21",
    prepTime: "PT15M",
    description:
      "It's so hot here, and the bad news is that it's only June. What am I going to do a month from now? I'll be fanning myself and...",
  },
  {
    name: "Summer Stir-Fry",
    ingredients:
      "2 Tablespoons Butter\n2 Tablespoons Olive Oil\n4 cloves Garlic, Minced\n12 whole Jumbo Shrimp, Peeled, Deveined, Tails Left On\n2 whole Zucchini, Sliced On A Slight Diagonal\n2 ears Corn, Kernels Sliced Off\n1/2 cup Grape Tomatoes, Sliced In Half Lengthwise\n Salt And Freshly Ground Pepper, To Taste\n Chopped Fresh Herbs, If Desired",
    url: "http://thepioneerwoman.com/cooking/2010/06/summer-stir-fry/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4726442102_6739483506_b.jpg",
    cookTime: "PT8M",
    recipeYield: "4",
    datePublished: "2010-06-23",
    prepTime: "PT15M",
    description:
      "Everything's relative, isn't it?     \"Ideal weight\" is relative. A person might not be visibly overweight, but according to h...",
  },
  {
    name: "Spinach with Garlic Chips",
    ingredients:
      "5 cloves Garlic, Peeled And Sliced Very Thin\n3 Tablespoons Olive Oil\n2 packages (6 Oz Each Package) Baby Spinach\n1/2 teaspoon Kosher Salt\n Freshly Ground Black Pepper",
    url: "http://thepioneerwoman.com/cooking/2010/06/spinach-with-garlic-chips/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4740148041_1c810615f1_b.jpg",
    cookTime: "PT5M",
    recipeYield: "4",
    datePublished: "2010-06-28",
    prepTime: "PT5M",
    description:
      "I've been a lover of spinach for as long as I can remember, and I'll take it however I can get it: uncooked, in a big salad l...",
  },
  {
    name: "Grilled Ribeye Sandwich Spread",
    ingredients:
      "1 pound Leftover Cooked Meat: Pot Roast, Steaks, Etc.\n3/4 cups Mayonnaise\n1 Tablespoon White Vinegar\n1/2 whole Small Onion, Finely Diced\n4 whole Hard Boiled Eggs, Chopped\n6 whole Pickle Slices, Chopped\n3 Tablespoons Sweet Pickle Relish\n Salt And Pepper, to taste\n Optional Ingredients: Pimentos, Diced Green Pepper, Diced Jalapeno",
    url: "http://thepioneerwoman.com/cooking/2010/07/grilled-ribeye-sandwich-spread/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4773183292_77efe3b4e7_b.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2010-07-08",
    prepTime: "PT15M",
    description:
      "*Viewer warning* If the sight of ground up meat---or meat salads---makes you want to hurl, you might want to check back here ...",
  },
  {
    name: "Make-Ahead Muffin Melts",
    ingredients:
      "12 whole Hard-boiled Eggs, Peeled And Chopped\n2 cups Grated Cheddar Cheese\n1 cup (Real) Mayonnaise\n12 slices Bacon, Fried And Crumbled\n1 Tablespoon (heaping) Dijon Mustard\n1/2 teaspoon Garlic Powder\n3 dashes Worcestershire Sauce\n6 whole English Muffins Split",
    url: "http://thepioneerwoman.com/cooking/2010/07/make-ahead-muffin-melts/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4806066889_64468ae431_b.jpg",
    cookTime: "PT5M",
    recipeYield: "6",
    datePublished: "2010-07-19",
    prepTime: "PT25M",
    description:
      "This is another recipe from my mother's recipe collection. It's a make-ahead concoction meant to be spread on English muffins...",
  },
  {
    name: "Grilled Chicken with Lemon Basil Pasta",
    ingredients:
      "4 whole Grilled Chicken Breasts, Sliced\n1 pound Penne Pasta, Cooked Until Al Dente\n1/2 stick Butter\n3 whole Lemons, Juiced\n3/4 cups Heavy Cream\n1/4 cup Half-and-half\n1-1/2 cup Grated Parmesan Cheese (or Romano)\n Salt And Freshly Ground Black Pepper, To Taste\n20 whole Basil Leaves, Chopped",
    url: "http://thepioneerwoman.com/cooking/2010/07/grilled-chicken-with-lemon-basil-pasta/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4814287904_bb43e024c9_b.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2010-07-21",
    prepTime: "PT10M",
    description:
      "I have another lemon pasta recipe on this site, and it's always been a summertime favorite of mine. If you haven't traveled t...",
  },
  {
    name: "Chicken Parmigiana",
    ingredients:
      "4 whole (up To 6) Boneless, Skinless Chicken Breasts, Trimmed And Pounded Flat\n1/2 cup All-purpose Flour\n Salt And Pepper, to taste\n1/2 cup Olive Oil\n2 Tablespoons Butter\n1 whole Medium Onion, Chopped\n4 cloves Garlic, Minced\n3/4 cups Wine (white Or Red Is Fine)\n3 cans (14.5 Oz.) Crushed Tomatoes\n2 Tablespoons Sugar\n1/4 cube Chopped Fresh Parsley\n1 cup Freshly Grated Parmesan Cheese\n1 pound Thin Linguine",
    url: "http://thepioneerwoman.com/cooking/2009/10/chicken-parmigiana/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4024225151_5f477f16ca.jpg",
    cookTime: "PT45M",
    recipeYield: "6",
    datePublished: "2009-10-19",
    prepTime: "PT15M",
    description:
      "This is one of the go-to dishes I make for my family of six. Rich, flavorful, and totally satisfying, we all love it, includi...",
  },
  {
    name: "Chicken and Rice Soup",
    ingredients:
      "1 cup (before Cooking) White Rice\n2 whole Chicken Breasts\n8 pieces (to 10) Chicken Bouillon Cubes\n2 quarts (plus 2 Cups) Water\n1/4 cup Onion\n1/4 cup Green Bell Pepper\n1/4 cup Pimento (drained)\n1/4 cup Celery\n6 Tablespoons Butter\n4 Tablespoons Flour\n Yellow Food Coloring",
    url: "http://thepioneerwoman.com/cooking/2008/04/simple-hearty-chicken-rice-soup-itll-keep-ya-honest/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/04/Chicken-and-Rice-Soup.jpg",
    cookTime: "PT1H",
    recipeYield: "6",
    datePublished: "2008-04-11",
    prepTime: "PT30M",
    description:
      "This is just one of those soul-feeding soups that's easy to make and totally customizable according to your palate.     Wait ...",
  },
  {
    name: "Cauliflower Soup",
    ingredients:
      "1 stick Butter, Divided\n1/2 whole Onion, Finely Diced\n1 whole Carrot Finely Diced\n1 stalk Celery, Finely Diced\n1 whole (to 2 Whole) Cauliflower Heads (roughly Chopped)\n2 Tablespoons Fresh Or Dried Parsley, Chopped\n2 quarts Low-sodium Chicken Broth Or Stock\n6 Tablespoons All-purpose Flour\n2 cups Whole Milk\n1 cup Half-and-half\n2 teaspoons To 4 Teaspoons Salt, To Taste\n1 cup (heaping) Sour Cream, Room Temperature",
    url: "http://thepioneerwoman.com/cooking/2009/01/cauliflower-soup/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2009/01/cauliflower-soup.jpg",
    cookTime: "PT30M",
    recipeYield: "6",
    datePublished: "2009-01-05",
    prepTime: "PT30M",
    description:
      "I'm going to let you in on a little secret. Come closer now...come closer. Lean in. Are you ready? I'm going to whisper. (I l...",
  },
  {
    name: "Carrot and Squash Curry Soup",
    ingredients:
      "3 Tablespoons Olive Oil\n5 cloves Garlic, Minced\n1 whole Large Onion, Diced\n3 whole Carrots, Washed And Sliced Thin\n4 whole Yellow Squash, Sliced\n Salt To Taste\n1 Tablespoon Curry Powder (more To Taste!)\n1/2 cup Dry White Wine (optional)\n48 ounces, fluid Chicken Broth\n Heavy Cream (optional)",
    url: "http://thepioneerwoman.com/cooking/2009/11/carrot-and-squash-curry-soup/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3998885342_9637d8b573.jpg",
    cookTime: "PT1H",
    recipeYield: "8",
    datePublished: "2009-11-07",
    prepTime: "PT20M",
    description:
      "This is a delicious, satisfying soup that'll improve your vision, win friends and influence people, and make you love curry.....",
  },
  {
    name: "Caramelized Onion &amp; Prosciutto Pizza",
    ingredients:
      "1 whole Pizza Crust\n Olive Oil, For Drizzling\n1 whole Large Red Onion, Halved And Thinly Sliced\n1/4 cup Brown Sugar\n Kosher Salt To Taste\n Parmesan Cheese, Grated\n10 ounces, weight Fresh Mozzarella Cheese, Thinly Sliced\n8 slices Prosciutto (more To Taste)",
    url: "http://thepioneerwoman.com/cooking/2010/03/caramelized-onion-prosciutto-pizza/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4440156362_bd748d2c21.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2010-03-17",
    prepTime: "PT15M",
    description:
      "I had some leftover pizza dough (which is the best kind of pizza dough there is) in the fridge last night, so I whipped up th...",
  },
  {
    name: "Caramel Pumpkin Gingersnap Cheesecake",
    ingredients:
      " FOR CRUST\n12 ounces, weight Storebought Gingersnaps\n1/2 cup Chopped Pecans\n6 Tablespoons Butter, Melted\n2 Tablespoons Brown Sugar\n1 dash Salt\n _____\n Filling\n4 packages (8 0z. Packages) Cream Cheese\n1-1/2 cup Sugar\n1 can 15-ounce Pumpkin Puree (NOT Pumpkin Pie Filling)\n1 teaspoon Ground Cinnamon\n1 teaspoon Allspice\n1/2 teaspoon Nutmeg\n4 whole Eggs\n2 Tablespoons Heavy Cream\n1 jar (about 12 Oz.) Caramel Topping\n Extra Chopped Pecans\n Extra Crushed Gingersnaps",
    url: "http://thepioneerwoman.com/cooking/2008/11/caramel-pumpkin-gingersnap-cheesecake-so-there/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/11/Caramel-Pumpkin-Gingersnap-Cheesecake.jpg",
    cookTime: "PT1H15M",
    recipeYield: "12",
    datePublished: "2008-11-22",
    prepTime: "PT40M",
    description:
      'I totally made up the name of this dessert. I was going to just call it "Pumpkin Cheesecake", because that\'s pretty much what...',
  },
  {
    name: "Caramel Apple Sticky Buns",
    ingredients:
      " FOR THE ROLLS:\n2 cups Whole Milk\n1-1/4 cup Sugar\n1/2 cup Canola Oil\n1 package (2 1/4 Teaspoons) Active Dry Yeast\n4-1/2 cups Flour, Divided\n2 teaspoons Salt\n1/2 teaspoon (scant) Baking Soda\n1/2 teaspoon (heaping) Baking Powder\n3/4 cups Melted Butter\n4 Tablespoons Ground Cinnamon\n _____\n FOR THE CARAMEL TOPPING:\n1 stick Salted Butter\n1-1/2 cup Packed Brown Sugar\n1 Tablespoon Dark Brown Corn Syrup\n2 Tablespoons Cream\n2 Tablespoons Apply Brandy Or Apple Juice (optional)\n1 whole Granny Smith Apple, Peeled And Finely Diced",
    url: "http://thepioneerwoman.com/cooking/2009/08/caramel-apple-sticky-buns/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2009/08/3828323445_e95a51d208.jpg",
    cookTime: "PT35M",
    recipeYield: "18",
    datePublished: "2009-08-17",
    prepTime: "PT2H",
    description:
      "I'll just say it: I'm not a big fan of nuts on or in my cinnamon rolls or sticky buns. To me, big chunks of nuts are a distra...",
  },
  {
    name: "Cake Balls, Halloween-Style",
    ingredients:
      "1 box Cake Mix (red Velvet Or Yellow About 18 Ozs))\n1 can Frosting (store Bought 12 Ozs)\n1 bag Melting Chocolate (12 Ozs. Any Color Or Combination Of Colors)\n1 bag Lollipop Sticks\n Various Tubes Gel Icing (any Colors)",
    url: "http://thepioneerwoman.com/cooking/2008/10/cake-balls-halloween-style/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/10/Cake-Balls-Halloween-Style.jpg",
    cookTime: "PT35M",
    recipeYield: "6",
    datePublished: "2008-10-30",
    prepTime: "PT1H30M",
    description:
      "That's CAKE...not CALF, just to be clear. Mmmm...cake balls. Have you heard of these little delights? They're fun to make, ri...",
  },
  {
    name: "Sugar Biscuits",
    ingredients:
      "3 cups All-purpose Flour\n2/3 cups Sugar\n5 teaspoons Baking Powder\n1/4 teaspoon Salt\n2 sticks Butter, Cold &amp; Cut Into Pieces\n1-1/4 cup Heavy Cream (more If Needed)\n5 cups Powdered Sugar, Sifted\n1/2 cup Whole Milk\n1 teaspoon Vanilla Extract\n Dash Of Salt",
    url: "http://thepioneerwoman.com/cooking/2013/01/sugar-biscuits/",
    image: "http://static.thepioneerwoman.com/cooking/files/2013/01/sugar.jpg",
    cookTime: "PT18M",
    recipeYield: "18",
    datePublished: "2013-01-16",
    prepTime: "PT15M",
    description:
      "These are one ingredient away from my basic scone recipe, which I use to make these Petite Vanilla Scones or pretty much any ...",
  },
  {
    name: "Butternut Squash Risotto",
    ingredients:
      "1/2 whole Butternut Squash, Peeled, Seeded, And Diced.\n3 Tablespoons Butter\n1 Tablespoon Olive Oil\n1/2 teaspoon Kosher Salt\n Black Pepper To Taste\n1/4 teaspoon Chili Powder\n1/2 whole Diced Onion\n1-1/2 cup Arborio Rice\n6 cups (approximately) Vegetable Or Chicken Broth (low Sodium)\n Salt And Pepper, to taste\n1/8 teaspoon Turmeric\n1/4 cup Heavy Cream (less If Desired)\n1/2 cup Parmesan Shavings (more For Serving)\n Finely Minced Parsley, For Serving",
    url: "http://thepioneerwoman.com/cooking/2013/01/butternut-squash-risotto/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2013/01/risotto.jpg",
    cookTime: "PT1H",
    recipeYield: "8",
    datePublished: "2013-01-21",
    prepTime: "PT10M",
    description:
      "A couple of weeks ago, I cooked Butternut Squash &amp; Kale Quesadillas. The same day, because I had hacked into a whole butternu...",
  },
  {
    name: "Springy Shells",
    ingredients:
      "16 ounces, weight Pasta Shells (medium) Or Other Short Pasta\n1 pound Asparagus, Cut Into 1 1/2 Inch Pieces, Discard Tough Pieces\n1/2 pound Broccoli, Cut Into Small Florets\n1/2 pound Zucchini (about 1 Medium Zucchini) Diced\n1/2 cup Frozen Peas\n3 whole Green Onions Sliced (white &amp; Light Green Parts)\n3 cloves Garlic, Minced\n4 Tablespoons Butter\n2 Tablespoons Olive Oil\n20 ounces, weight Ricotta Cheese (20 - 22 Ozs.)\n1/2 teaspoon Salt\n2 whole Eggs\n1-1/2 cup Parmesan Cheese\n Black Pepper, Freshly Ground\n Extra Olive Oil For Drizzling",
    url: "http://thepioneerwoman.com/cooking/2009/06/springy-shells/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2009/06/Springy-Shells.jpg",
    cookTime: "PT30M",
    recipeYield: "6",
    datePublished: "2009-06-22",
    prepTime: "PT30M",
    description:
      "\u00a0  I know it's bathing suit season and we all need to be more conscious of every bite that enters our yappers so we can ...",
  },
  {
    name: "Hot Olive &amp; Artichoke Dip",
    ingredients:
      "1 can Artichoke Hearts (14 Oz. Can)\n10 whole Black Olives\n8 ounces, weight Cream Cheese (1 Pack)\n1 cup (Real) Mayonnaise\n1 whole Egg\n1/4 cup Red Onion, Diced\n1/4 cup Grated Parmesan Cheese\n3 dashes Worcestershire Sauce\n Salt and Pepper, to taste\n Cayenne Pepper (for Spice)",
    url: "http://thepioneerwoman.com/cooking/2009/06/hot-olive-artichoke-dip-yummy/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2009/06/hot-artichoke-dip.jpg",
    cookTime: "PT25M",
    recipeYield: "6",
    datePublished: "2009-06-26",
    prepTime: "PT10M",
    description:
      "\u00a0  Get ready. Oh dear.    This is a simple hot dip recipe you can change up and modify according to your heart's desire....",
  },
  {
    name: "Perfect Potato Salad",
    ingredients:
      "5 pounds Russet Potatoes (about 8 Medium Russets)\n1-1/2 cup Real Mayonnaise (NOT Miracle Whip)\n4 Tablespoons Prepared Mustard (regular, Dijon Or A Mixture Of Both)\n5 whole Green Onions, Sliced Up To The Darkest Green Part\n8 whole Small Sweet Pickles (may Use Dill If That's More Up Your Alley)\n1 teaspoon Kosher Salt (more To Taste)\n1/2 teaspoon Paprika\n1/2 teaspoon Black Pepper\n4 whole Hard Boiled Eggs",
    url: "http://thepioneerwoman.com/cooking/2009/06/fourth-of-july-week-perfect-potato-salad/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3671556380_cd068cd052.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2009-06-29",
    prepTime: "PT45M",
    description:
      "\u00a0  I'll be posting a new Fourth of July dish every day this week. And I can't promise there won't be bacon involved at s...",
  },
  {
    name: "Sundried Tomato Pasta Salad",
    ingredients:
      " DRESSING INGREDIENTS\n1 jar Sun-dried Tomatoes (7 Oz.)\n4 cloves Garlic\n3 Tablespoons Red Wine Vinegar\n1 cup Extra Virgin Olive Oil\n Salt And Pepper, to taste\n _____\n SALAD:\n16 ounces, weight Corkscrew Pasta\n1 jar Kalamata Or Assorted Olives\n1 pint Ripe Cherry Tomatoes (cut In Halves)\n10 leaves Basil (10-15 Leaves), Chopped Or Julienne\n1-1/2 cup Parmesan Cheese, Freshly Grated",
    url: "http://thepioneerwoman.com/cooking/2009/06/fourth-of-july-week-sundried-tomato-pasta-salad/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3673433059_6b22c28871.jpg",
    cookTime: "PT30M",
    recipeYield: "8",
    datePublished: "2009-06-30",
    prepTime: "PT30M",
    description:
      "    Mmmmm.     Mmm.    Mmmmmmmmmm.    Mmmmm.     Okay, now that that's over with, let me show you my favorite chick food past...",
  },
  {
    name: "Edna Mae\u2019s Escalloped Cabbage",
    ingredients:
      "1 head Cabbage\n1 jar (15 Oz.) Original Cheez Whiz (yes, I Said Cheez Whiz)\n1 can (10 Oz) Cream Of Chicken Soup\n1 whole (or 2) Fresh Jalapenos, Seeded And Finely Diced (1 Is Pretty Spicy; 2 Is Very Spicy)\n1/4 cup Milk\n Paprika To Taste",
    url: "http://thepioneerwoman.com/cooking/2009/07/edna-maes-escalloped-cabbage-recipe/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3690946725_0202bac95a.jpg",
    cookTime: "PT30M",
    recipeYield: "12",
    datePublished: "2009-07-07",
    prepTime: "PT15M",
    description:
      "Food snobs: park your prejudice at the door!     Please?     Pretty please?    Because if you don't, you may well miss out on...",
  },
  {
    name: "Vanilla Bean Ice Cream",
    ingredients:
      "1 whole Vanilla Bean, Split And Scraped\n3 cups Half-and-half\n2 cups Sugar\n8 whole (up To 9) Large Egg Yolks\n3 cups Heavy Cream",
    url: "http://thepioneerwoman.com/cooking/2009/07/vanilla-bean-ice-cream/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/vanilla.jpg",
    cookTime: "PT30M",
    recipeYield: "12",
    datePublished: "2009-07-08",
    prepTime: "PT2H",
    description:
      "Yum!    Let's make vanilla ice cream! It's the right thing to do.    \u00a0  THE MILK/SUGAR:    In a large pan, combine 3 cup...",
  },
  {
    name: "Individual Raspberry Cobblers",
    ingredients:
      "2 cups Self-rising Flour (You Must Use Self-rising)\n2 cups Sugar\n2 cups Milk\n2 sticks Butter, Melted\n1 teaspoon Vanilla Extract\n2 cups Fresh Raspberries\n Extra Sugar For Sprinkling",
    url: "http://thepioneerwoman.com/cooking/2009/07/individual-raspberry-cobblers/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2009/07/3715195422_6fe13a2c11.jpg",
    cookTime: "PT45M",
    recipeYield: "24",
    datePublished: "2009-07-13",
    prepTime: "PT15M",
    description:
      "Technically, I could also call these Cobbler Cupcakes. That's kind of what they are.    Or, if I wanted to go gourmand: Clafo...",
  },
  {
    name: "Fettuccine Alfredo",
    ingredients:
      "1 pound Fettuccine Noodles\n1 stick Butter\n1 cup Heavy Cream\n Salt and Pepper, to taste\n2 cups Freshly Grated Parmesan Cheese",
    url: "http://thepioneerwoman.com/cooking/2009/07/fettuccine-alfredo/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3725062993_d202187bef.jpg",
    cookTime: "PT20M",
    recipeYield: "6",
    datePublished: "2009-07-16",
    prepTime: "PT10M",
    description:
      "I made this for my daughter yesterday because she'd requested it for her twelfth birthday back in June and I'd told her \"No! ...",
  },
  {
    name: "Stuffed Mushrooms",
    ingredients:
      "24 ounces, weight White Button Mushrooms\n1/3 pound Hot Pork Sausage\n1/2 whole Medium Onion, Finely Diced\n4 cloves Garlic, Finely Minced\n1/3 cup Dry White Wine\n8 ounces, weight Cream Cheese\n1 whole Egg Yolk\n3/4 cups Parmesan Cheese, Grated\n Salt And Pepper, to taste",
    url: "http://thepioneerwoman.com/cooking/2009/08/stuffed-mushrooms-baby/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3782488201_a63245a765.jpg",
    cookTime: "PT25M",
    recipeYield: "8",
    datePublished: "2009-08-03",
    prepTime: "PT30M",
    description:
      "Few things in life give me more joy than this. A mushroom cap stuffed with a glorious mixture and baked until golden brown an...",
  },
  {
    name: "Shortbread Cookies",
    ingredients:
      "2 sticks Plus 2 Tablespoons Salted Butter, Softened\n1 cup Sugar\n2 cups All-purpose Flour\n1 cup (Scant) Cornstarch",
    url: "http://thepioneerwoman.com/cooking/2009/08/shortbread-cookies/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2009/08/Shortbread-Cookies.jpg",
    cookTime: "PT20M",
    recipeYield: "36",
    datePublished: "2009-08-04",
    prepTime: "PT30M",
    description:
      "\u00a0  This is the basis---a Part One, if you will---of so many delectable dessert recipes, some of which we'll discuss in t...",
  },
  {
    name: "Coq au Vin",
    ingredients:
      "4 slices Bacon, Cut Into Small Pieces\n1 whole Fryer Chicken\n1/2 whole Medium Onion, Diced\n1/2 cup Carrots, Washed, Peeled, And Roughly Chopped\n5 cloves Garlic, Minced\n2 Tablespoons Butter\n1 pound White Mushrooms, Sliced\n2 cups Burgundy Wine\n1 pound Pasta (egg Noodles Or Fettucini)\n2 Tablespoons Butter\n Parsley, Fresh, Minced\n Salt And Pepper, to taste",
    url: "http://thepioneerwoman.com/cooking/2009/08/coq-au-vin/",
    image: "http://static.thepioneerwoman.com/cooking/files/2009/08/coq.jpg",
    cookTime: "PT1H",
    recipeYield: "6",
    datePublished: "2009-08-10",
    prepTime: "PT25M",
    description:
      "I had a whole fryer chicken I needed to cook last night, and I didn't have the heart to     a) Fry it, though I'm not usually...",
  },
  {
    name: "Chocolate Peanut Butter Pie",
    ingredients:
      " FOR CRUST\n25 whole Oreos\n4 Tablespoons Butter, Melted\n _____\n PEANUT BUTTER FILLING:\n1 cup Creamy Peanut Butter\n1 package (8 Ounce) Softened Cream Cheese\n1-1/4 cup Powdered Sugar\n1 package (8 Ounce) Cool Whip, Thawed",
    url: "http://thepioneerwoman.com/cooking/2009/06/another-pie/",
    image: "http://static.thepioneerwoman.com/cooking/files/2010/07/pb3.jpg",
    cookTime: "PT7M",
    recipeYield: "8",
    datePublished: "2012-10-26",
    prepTime: "PT15M",
    description:
      "    If you don't like peanut butter, step away from this recipe.  I'm serious, man. You're in the wrong place at the wrong ti...",
  },
  {
    name: "Chocolate Chip Cookies",
    ingredients:
      "1/2 cup Margarine\n1/2 cup Butter, Softened\n1 cup Firmly Packed Brown Sugar\n1/2 cup White Sugar\n2 whole Eggs\n2 teaspoons Vanilla Extract\n2-1/4 cups Plus 2 Tablespoons, All-purpose Flour\n1 teaspoon (heaping) Instant Coffee Granules\n1 teaspoon Baking Soda\n1-1/2 teaspoon Salt\n2 Tablespoons Flax Seed, Slightly Crushed With Rolling Pin\n3/4 cups Semi-Sweet Chocolate Chips\n1 cup (heaping) Milk Chocolate Chips",
    url: "http://thepioneerwoman.com/cooking/2008/09/good-ol-basic-chocolate-chip-cookies/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/09/Chocolate-Chip-Cookies.jpg",
    cookTime: "PT15M",
    recipeYield: "36",
    datePublished: "2008-09-24",
    prepTime: "PT20M",
    description:
      "I work with about three different variations of chocolate chip cookies, all of which I'll share with you, my friends, so that...",
  },
  {
    name: "Chocolate Candy Cane Cookies",
    ingredients:
      "2 sticks Salted Butter, Slightly Softened\n1 cup Powdered (Confectioners) Sugar\n1 whole Egg\n2 teaspoons Vanilla\n2-1/2 cups Flour\n1/2 cup Unsweetened Cocoa Powder\n1 teaspoon Salt\n4 ounces, weight (4 Squares) Almond Bark Or White Baking Chocolate (almond Bark Works Best And Is Cheaper)\n Large Handful Of Red Or Green Peppermints",
    url: "http://thepioneerwoman.com/cooking/2008/12/chocolate-candy-cane-cookies/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/12/chocolate-candy-cane-cookies.jpg",
    cookTime: "PT9M",
    recipeYield: "36",
    datePublished: "2008-12-17",
    prepTime: "PT3H",
    description:
      "Cliche as these Christmas babies might appear, they are truly, truly delicious and very fun to make with children, as long as...",
  },
  {
    name: "Chicken Spaghetti",
    ingredients:
      "2 cups Cooked Chicken\n3 cups Dry Spaghetti, Broken Into Two Inch Pieces\n2 cans Cream Of Mushroom Soup\n2 cups Grated Sharp Cheddar Cheese\n1/4 cup Finely Diced Green Pepper\n1/4 cup Finely Diced Onion\n1 jar (4 Ounce) Diced Pimentos, Drained\n2 cups Reserved Chicken Broth From Pot\n1 teaspoon Lawry's Seasoned Salt\n1/8 teaspoon (to 1/4 Teaspoon) Cayenne Pepper\n Salt And Pepper, to taste\n1 cup Additional Grated Sharp Cheddar Cheese",
    url: "http://thepioneerwoman.com/cooking/2007/06/chicken_spaghet/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/496652595_50b3c3e3b9.jpg",
    cookTime: "PT45M",
    recipeYield: "8",
    datePublished: "2007-06-02",
    prepTime: "PT30M",
    description:
      "    This really is a fabulous casserole, and the only one in existence that Marlboro Man, our cowboys, and my children will e...",
  },
  {
    name: "Chicken Tikka Masala, by Pastor Ryan",
    ingredients:
      "3 whole (to 4) Chicken Breasts\n Kosher Salt\n Ground Coriander\n Cumin, To Taste\n1/2 cup Plain Yogurt\n6 Tablespoons Butter\n1 whole Large Onion\n4 cloves Garlic\n1 piece (approximately 2 Inches) Chunk Fresh Ginger\n Garam Masala\n1 can (28 Ounce) Diced Tomatoes\n Sugar\n1-1/2 cup Heavy Cream\n2 cups Basmati Rice\n _____\n OPTIONAL:\n Fresh Cilantro\n Chili Peppers\n Turmeric\n Frozen Peas",
    url: "http://thepioneerwoman.com/cooking/2009/06/chicken-tikka-masala-by-pastor-ryan/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2009/06/chicken-tikka-masala.jpg",
    cookTime: "PT1H",
    recipeYield: "6",
    datePublished: "2009-06-04",
    prepTime: "PT30M",
    description:
      "Whether you love Chicken Tikka Masala or you've never tried it in your life, you're in for a treat. Ryan comes through once a...",
  },
  {
    name: "Chicken Salad",
    ingredients:
      "1 whole Cut Up Fryer Chicken\n2 stalks (to 3 Stalks) Celery, Chopped\n3 whole Green Onions, Chopped\n2 cups (to 3 Cups) Grapes, Halved\n1/2 cup Mayonnaise\n1/2 cup Plain Yogurt Or Sour Cream\n1/2 cup Half-and-half\n A Small Handful Of Fresh Dill, Minced\n1/2 cup Slivered Almonds\n1 Tablespoon (to 2 Tablespoons) Brown Sugar\n Juice Of One Lemon\n Kosher Salt To Taste\n Fresh Ground Black Pepper To Taste",
    url: "http://thepioneerwoman.com/cooking/2008/05/chicken-salad-the-way-i-like-it/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/05/Chicken-Salad.jpg",
    cookTime: "PT1H",
    recipeYield: "6",
    datePublished: "2008-05-29",
    prepTime: "PT20M",
    description:
      "Chicken Salad is like a box of chocolates. You never know what you're gonna git. Everyone likes chicken salad different ways:...",
  },
  {
    name: "Chicken Scallopine",
    ingredients:
      "1 pound Linguine\n6 whole Boneless, Skinless, Trimmed Chicken Breasts\n Salt And Pepper, to taste\n Flour\n2 Tablespoons Olive Oil\n4 Tablespoons Butter\n12 ounces, weight White Mushrooms, Sliced Thin\n1 cup Dry White Wine\n Chicken Broth (optional)\n1 whole Lemon\n1/2 cup Heavy Cream (can Use Half-and-Half)\n1 teaspoon (heaping) Capers\n Chopped Fresh Italian Parsley\n Parmesan Cheese, For Topping",
    url: "http://thepioneerwoman.com/cooking/2009/03/chicken-scallopine/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3397255096_821c006e5f.jpg",
    cookTime: "PT15M",
    recipeYield: "6",
    datePublished: "2009-03-30",
    prepTime: "PT15M",
    description:
      "    If you're looking for a classic, no modifications, authentic recipe for Chicken Scallopine/Scallopini, this probably isn'...",
  },
  {
    name: "Fresh Corn and Avocado Salsa",
    ingredients:
      "4 ears Sweet Corn\n2 whole Very Firm Avocados, Diced\n 1/2 Red Onion, Diced\n 1/2 Jalapeno, Seeded And Finely Diced\n 1/2 Hot Chili Pepper, Seeded And Finely Diced\n1 whole Juice Of Lime\n Plenty Of Chopped Cilantro\n Salt To Taste\n1 Tablespoon Vinegar\n1 teaspoon Sugar (optional)",
    url: "http://thepioneerwoman.com/cooking/2009/08/fresh-corn-avocado-salsa/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2009/08/ree_66701.jpg",
    cookTime: "PT",
    recipeYield: "10",
    datePublished: "2009-08-13",
    prepTime: "PT25M",
    description:
      "I dropped by the Lodge yesterday afternoon and discovered, to both my horror and excitement, that our friend Dave from Indian...",
  },
  {
    name: "Just a Recipe: Banana Bread!",
    ingredients:
      "2 sticks Butter\n1-1/2 cup + 2 TBLS Sugar\n3 whole Eggs\n1-1/2 cup Mashed Ripe Bananas\n4 cups + 2 TBLS Flour\n1 teaspoon Baking Soda\n1-1/2 teaspoon Baking Powder\n1-1/2 cup Sour Cream",
    url: "http://thepioneerwoman.com/cooking/2009/08/just-a-recipe-banana-bread/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2009/08/bananabread2.jpg",
    cookTime: "PT1H10M",
    recipeYield: "12",
    datePublished: "2009-08-18",
    prepTime: "PT20M",
    description:
      "I have a yummy chicken recipe to share next but while I get those photos together, here's the recipe for the banana bread my ...",
  },
  {
    name: "Coffee Cake. Literally.",
    ingredients:
      " FOR THE CAKE:\n2 cups Flour\n2 cups Sugar\n1/4 teaspoon Salt\n2 sticks Butter\n3 Tablespoons Instant Coffee Crystals\n1/2 cup Buttermilk\n2 whole Eggs\n1 teaspoon Baking Soda\n2 teaspoons Vanilla\n _____\n FOR THE ICING:\n1-1/2 stick Butter\n1 pound Powdered Sugar\n2 Tablespoons Instant Coffee Crystals\n1/4 teaspoon Salt\n4 Tablespoons Heavy Cream",
    url: "http://thepioneerwoman.com/cooking/2009/08/coffee-cake-literally/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2009/08/3851565629_02499b845f.jpg",
    cookTime: "PT20M",
    recipeYield: "12",
    datePublished: "2009-08-24",
    prepTime: "PT15M",
    description:
      "This is a yummy cake for coffee lovers ONLY, man. Just read the title.    It's not cake you eat with your morning coffee. It'...",
  },
  {
    name: "Red Pepper Risotto",
    ingredients:
      "8 cups Chicken Broth, Low-Sodium\n3 Tablespoons Olive Oil\n1/2 whole Medium Onion, Diced\n2 whole Red Bell Peppers, Diced\n1-3/4 cup Arborio Rice\n3/4 cups Dry White Wine\n Salt To Taste\n5 ounces, fluid Goat Cheese\n1/2 cup Grated Parmesan\n1/2 teaspoon Turmeric (optional)",
    url: "http://thepioneerwoman.com/cooking/2009/08/red-pepper-risotto/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3837942939_b9a8865024.jpg",
    cookTime: "PT30M",
    recipeYield: "8",
    datePublished: "2009-08-20",
    prepTime: "PT10M",
    description:
      "I won't tell you about the first time I ever tried risotto. I won't tell you that it was in Los Angeles in the early nineties...",
  },
  {
    name: "Grilled Ribeye Steak with Onion-Blue Cheese Sauce",
    ingredients:
      "2 whole Ribeye Steaks\n2 Tablespoons Butter\n Salt\n Pepper\n4 Tablespoons Butter\n1 whole Very Large Yellow Onion, Sliced\n1 cup Heavy Cream\n1/2 cup Crumbled Blue Cheese",
    url: "http://thepioneerwoman.com/cooking/2009/09/grilled-ribeye-steak-with-onion-blue-cheese-sauce/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3883382922_161fa35504.jpg",
    cookTime: "PT15M",
    recipeYield: "2",
    datePublished: "2009-09-05",
    prepTime: "PT5M",
    description:
      "Good grief.    Help me.    Help me now.     This was delicious.    Good steaks do not need sauce. But they're every bit as de...",
  },
  {
    name: "Bacon Onion Cheddar Biscuits",
    ingredients:
      "2 cups All-purpose Flour\n1 teaspoon Baking Powder\n3/4 teaspoons Salt\n1/4 cup Vegetable Shortening (crisco, Etc)\n10 Tablespoons Milk (whole Milk Is Best)\n4 Tablespoons Vegetable Oil\n1 whole Egg\n10 slices Thick Cut Bacon, Fried And Crumbled\n1 cup Finely Diced Onion\n1 cup Grated Sharp Cheddar Cheese",
    url: "http://thepioneerwoman.com/cooking/2009/09/bacon-onion-cheddar-biscuits/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3894838010_b4ee0bbf37.jpg",
    cookTime: "PT20M",
    recipeYield: "12",
    datePublished: "2009-09-07",
    prepTime: "PT30M",
    description:
      "These biscuits are hearty, sticky, substantial, and packed with all the goodness of life. You can serve them with eggs in the...",
  },
  {
    name: "Tres Leches Cake",
    ingredients:
      "1 cup All-purpose Flour\n1-1/2 teaspoon Baking Powder\n1/4 teaspoon Salt\n5 whole Eggs\n1 cup Sugar, Divided\n1 teaspoon Vanilla\n1/3 cup Milk\n1 can Evaporated Milk\n1 can Sweetened, Condensed Milk\n1/4 cup Heavy Cream\n _____\n FOR THE ICING:\n1 pint Heavy Cream, For Whipping\n3 Tablespoons Sugar",
    url: "http://thepioneerwoman.com/cooking/2009/09/tres-leches-cake/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3908649506_1e7d4b1eb7.jpg",
    cookTime: "PT1H",
    recipeYield: "12",
    datePublished: "2009-09-11",
    prepTime: "PT45M",
    description:
      "I first made Tres Leches cake about five years ago, when my baby was still a baby and I was trying to find something yummy to...",
  },
  {
    name: "Apple Cake in an Iron Skillet",
    ingredients:
      "1-3/4 stick Butter\n3/4 cups Sugar\n4 whole To 5 Whole Granny Smith Apples, Peeled, Cored, And Cut Into Six Equal Pieces\n FOR THE CAKE:\n1 stick Butter\n2/3 cups Sugar\n1-1/2 teaspoon Vanilla\n2 whole Large Eggs\n1/2 cup Sour Cream\n1-1/2 cup All-purpose Flour\n1-1/2 teaspoon Baking Powder\n1 teaspoon Salt\n1/2 teaspoon Cinnamon\n1 whole Small Granny Smith Apple, Peeled, Cored, And Chopped Finely",
    url: "http://thepioneerwoman.com/cooking/2009/09/apple-cake-in-an-iron-skillet/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3921653516_ba3717ceff.jpg",
    cookTime: "PT25M",
    recipeYield: "8",
    datePublished: "2009-09-18",
    prepTime: "PT25M",
    description:
      "I found this recipe in the depths of a closet last night, and it was like finding a buried box of sparkly, flawless diamonds....",
  },
  {
    name: "Welsh Rarebit",
    ingredients:
      " Slices Of Crusty Bread, Buttered And Browned Under The Broiler\n2 Tablespoons Butter\n2 Tablespoons Flour\n1/3 cup Whole Milk\n1/2 cup Beer\n1 teaspoon (heaping) Dry Mustard\n1/2 teaspoon Paprika\n1/4 teaspoon Cayenne\n2 dashes Worcestershire\n1-1/2 cup Sharp Cheddar Cheese, Grated\n1 whole Egg Yolk\n Fresh Chives, Chopped",
    url: "http://thepioneerwoman.com/cooking/2009/09/welsh-rarebit/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3946466226_f2e6ebbfc8.jpg",
    cookTime: "PT5M",
    recipeYield: "4",
    datePublished: "2009-09-25",
    prepTime: "PT10M",
    description:
      "Helen Corbitt would be so proud. Welsh Rarebit, also known as Welsh Rabbit, but I didn't want to call it Welsh Rabbit because...",
  },
  {
    name: "Rosemary-Onion Bread with Blue Cheese Topping",
    ingredients:
      "1 Tablespoon Butter\n1 whole Large Yellow Onion, Sliced\n3 cloves Garlic, Minced\n1-1/2 cup Warm Water\n3 teaspoons Active Dry Yeast\n1 Tablespoon Sugar\n3 Tablespoons Olive Oil\n3 cups Bread Flour\n2 teaspoons Kosher Salt (more To Taste)\n Freshly Chopped Rosemary To Taste (Be Generous!)\n1/2 cup Crumbled Blue Cheese",
    url: "http://thepioneerwoman.com/cooking/2009/09/rosemary-onion-bread-with-blue-cheese-topping/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3968974862_e98b4488ab.jpg",
    cookTime: "PT20M",
    recipeYield: "12",
    datePublished: "2009-09-30",
    prepTime: "PT2H",
    description:
      "Mmmm. I love rosemary bread. I especially love rosemary bread with onions. I especially love rosemary bread with onions and a...",
  },
  {
    name: "Baba Ghanoush!",
    ingredients:
      "3 whole Medium Eggplants\n4 Tablespoons Tahini\n4 cloves Garlic, Finely Minced\n1/4 cup Lemon Juice\n3 Tablespoons Extra Virgin Olive Oil (good Quality)\n1/3 cup Fresh Parsley, Minced",
    url: "http://thepioneerwoman.com/cooking/2009/10/baba-ghanoush/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3972912137_97c10152dc.jpg",
    cookTime: "PT30M",
    recipeYield: "8",
    datePublished: "2009-10-02",
    prepTime: "PT10M",
    description:
      "Baba Ghanoush. Don't tell the cowboys, but this is one of those things in my recipe repertoire that falls under the category ...",
  },
  {
    name: "Pan-Fried Pork Chops",
    ingredients:
      "7 pieces Or 8 Pieces Breakfast Chops (very Thin Bone-in Pork Chops)\n1 cup All-purpose Flour\n1 teaspoon Seasoned Salt\n1 teaspoon Black Pepper\n Cayenne Pepper To Taste\n1/2 cup Canola Oil\n1 Tablespoon Butter\n Extra Salt And Pepper, To Taste",
    url: "http://thepioneerwoman.com/cooking/2009/10/simple-pan-fried-pork-chops/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3981696877_a807240bf2.jpg",
    cookTime: "PT5M",
    recipeYield: "8",
    datePublished: "2009-10-06",
    prepTime: "PT10M",
    description:
      "Okay, people. Let's get down to business here. Let's get down to basics, let's get down to brass tacks, let's get down to the...",
  },
  {
    name: "Moist Pumpkin Spice Muffins (With Cream Cheese Frosting)",
    ingredients:
      " Muffin Ingredients:\n1 cup All-purpose Flour\n1/2 cup Sugar\n2 teaspoons Baking Powder\n1-1/2 teaspoon Cinnamon\n1/4 teaspoon Ground Ginger\n1/2 teaspoon Nutmeg\n1/2 teaspoon Salt\n4 Tablespoons Butter, cut into pieces\n1 cup (heaping) Pumpkin Puree\n1/2 cup Evaporated Milk\n1 whole Egg\n1-1/2 teaspoon Vanilla\n1/2 cup Golden Raisins (optional!)\n _____\n Topping\n2 Tablespoons Sugar\n1 teaspoon Cinnamon\n1/4 teaspoon Nutmeg\n _____\n FOR FROSTING:\n1/4 cup Softened Butter\n4 ounces, weight Cream Cheese\n1/2 pound Powdered Sugar\n1/2 teaspoon Vanilla",
    url: "http://thepioneerwoman.com/cooking/2009/10/moist-pumpkin-spice-muffins-with-cream-cheese-frosting/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3981628811_088e669ab6.jpg",
    cookTime: "PT25M",
    recipeYield: "12",
    datePublished: "2009-10-12",
    prepTime: "PT20M",
    description:
      "I don't know about you, but after both the pork chop recipe and the roasted new potato/garlic recipe, I need something sweet....",
  },
  {
    name: "Spaghetti with Artichoke Hearts and Tomatoes",
    ingredients:
      "2 Tablespoons Olive Oil\n2 Tablespoons Butter\n3 cloves Garlic, Minced\n1/2 whole Medium Onion, Finely Diced\n1 can Artichoke Hearts (14.5 Oz. Quartered Or Whole)  Drained\n1 can Diced Tomatoes With Juice (14.5 Oz.)\n1 cup Heavy Cream\n1/2 cup Chicken Broth (More As Needed)\n1/2 teaspoon Nutmeg\n Salt And Pepper, to taste\n1 pound Thin Spaghetti\n1 cup Parmesan Cheese, Freshly Grated\n2 Tablespoons Fresh Chives (or Other Herbs) Chopped",
    url: "http://thepioneerwoman.com/cooking/2009/10/wednesday-night-dinner-spaghetti-with-artichoke-hearts-and-tomatoes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4009785487_32dbb4aefa.jpg",
    cookTime: "PT30M",
    recipeYield: "6",
    datePublished: "2009-10-14",
    prepTime: "PT15M",
    description:
      "This is such an easy throw-together dinner, I'm almost embarrassed to share it with you. It's made almost entirely of pantry ...",
  },
  {
    name: "Chocolate Truffles with Sea Salt",
    ingredients:
      "8 ounces, weight (up To 9 Oz.) Good Semisweet Chocolate\n8 ounces, weight (up To 9 Oz.) Good Bittersweet Chocolate\n1 can (14 Oz) Sweetened Condensed Milk\n1 Tablespoon Vanilla Extract\n8 ounces, weight Meltable Milk Chocolate\n Sea Salt",
    url: "http://thepioneerwoman.com/cooking/2009/10/chocolate-truffles-with-sea-salt/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4014045850_963b0c51f5.jpg",
    cookTime: "PT15M",
    recipeYield: "36",
    datePublished: "2012-11-02",
    prepTime: "PT2H",
    description:
      "These are delicious and very easy-to-make chocolate truffles with an unlikely surprise: a sprinkling of light, fluffly sea sa...",
  },
  {
    name: "Sweet-Roasted Rosemary Acorn Squash Wedges",
    ingredients:
      "2 whole Acorn Squash, Cut Into 8 Wedges Each\n4 dashes Olive Oil\n Salt To Taste\n1 stick Butter\n1/2 cup Brown Sugar (lightly Packed)\n2 Tablespoons Rosemary (minced)",
    url: "http://thepioneerwoman.com/cooking/2009/10/sweet-roasted-rosemary-acorn-squash-wedges/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4019983085_d76956433d.jpg",
    cookTime: "PT20M",
    recipeYield: "6",
    datePublished: "2009-10-21",
    prepTime: "PT15M",
    description:
      "I love this time of year.    I love acorn squash.     I also love it when I try to cram as many items into a recipe title as ...",
  },
  {
    name: "Pear Crisp with Vanilla Ice Cream",
    ingredients:
      " FILLING INGREDIENTS:\n4 whole (to 5) Large Pears (Bosc Work Well)\n2/3 cups Sugar\n1/4 teaspoon Salt\n _____\n Topping Ingredients\n1-1/2 cup All-purpose Flour\n1/3 cup Sugar\n1/3 cup Firmly Packed Brown Sugar\n1/2 teaspoon Cinnamon\n1/2 cup Pecans, Very Finely Chopped\n1 stick Butter, Melted",
    url: "http://thepioneerwoman.com/cooking/2009/10/pear-crisp-with-vanilla-ice-cream/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4021058264_c9382eb9ae.jpg",
    cookTime: "PT40M",
    recipeYield: "4",
    datePublished: "2009-10-27",
    prepTime: "PT15M",
    description:
      "This, my darling friends, Romans, and countrymen, is an absolute treat.    I had pears. I wanted to use them for a dessert. I...",
  },
  {
    name: "Mushrooms Stuffed with Brie",
    ingredients:
      "1 package White Button Mushrooms, Washed And Stems Removed\n4 cloves Garlic, Minced\n1/4 cup Flat-leaf Parsley, Chopped\n4 whole (to 5) Green Onions, Sliced (up To Middle Of Dark Green Part)\n Splash Of White Wine (optional)\n1 slice (wedge) Of Brie Cheese",
    url: "http://thepioneerwoman.com/cooking/2009/11/mushrooms-stuffed-with-brie/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4047953781_6ee077f2d3.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2009-11-02",
    prepTime: "PT15M",
    description:
      "You want to make these.     Oh, do you want to make these.     I have a problem these days. I'm experiencing an unnatural obs...",
  },
  {
    name: "White Chicken Enchiladas",
    ingredients:
      "2-1/2 cups Cooked, Shredded Chicken\n2 cups Reserved Broth From Chicken\n3 Tablespoons Canola Oil\n12 whole Corn Tortillas\n1 whole Large Onion, Diced\n3 whole 4 Oz Cans Whole Green Chilies, Diced\n1 whole Jalapeno, Seeded And Finely Diced\n1 teaspoon Paprika\n1/2 cup Heavy Cream\n2 Tablespoons Butter\n2 Tablespoons Flour\n1 cup Sour Cream\n2-1/2 cups Monterey Jack Cheese, Grated\n Salt And Pepper, to taste\n Picante Sauce (optional)\n Cilantro, Chopped",
    url: "http://thepioneerwoman.com/cooking/2009/11/white-chicken-enchiladas/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4060528829_67db52b435.jpg",
    cookTime: "PT30M",
    recipeYield: "6",
    datePublished: "2009-11-09",
    prepTime: "PT45M",
    description:
      "I'm happy to share my method for making creamy, dreamy, delicious, nutritious, yummy, nummy white chicken enchiladas.    They...",
  },
  {
    name: "Good Ol\u2019 Basic Mexican Rice",
    ingredients:
      "2 Tablespoons Canola Oil\n1/2 whole Large Onion, Chopped\n2 cups Long Grain Rice\n3 cloves Garlic, Minced\n1 can Rotel Diced Green Chilies And Tomatoes (10 Ounce Can)\n1 can Whole Tomatoes (14.5 Ounce Can)\n2 cups Low Sodium Chicken Broth (more If Needed)\n1 teaspoon Cumin (more To Taste)\n1 teaspoon Kosher Salt\n Fresh Cilantro, Chopped",
    url: "http://thepioneerwoman.com/cooking/2009/11/good-ol-basic-mexican-rice/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4021656171_abe77dc608.jpg",
    cookTime: "PT15M",
    recipeYield: "6",
    datePublished: "2009-11-11",
    prepTime: "PT10M",
    description:
      "I serve this rice with my White Chicken Enchiladas and they really are the perfect complement. It's a very basic Mexican rice...",
  },
  {
    name: "Lazy Chiles Rellenos",
    ingredients:
      "8 whole Roasted, Peeled, And Seeded Green Chiles\n1-1/2 cup Monterey Jack Cheese, Grated\n5 whole Large Eggs\n2 cups Whole Milk\n Salt And Black Pepper To Taste\n1/2 teaspoon Paprika\n1/4 teaspoon Cayenne Pepper",
    url: "http://thepioneerwoman.com/cooking/2009/11/lazy-chiles-rellenos/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4098250665_65310ab692.jpg",
    cookTime: "PT45M",
    recipeYield: "9",
    datePublished: "2009-11-12",
    prepTime: "PT5M",
    description:
      "This dish ain't fancy.     This dish ain't difficult to make. (Huh. Understatement of the modern era.)    This dish...ain't n...",
  },
  {
    name: "Creamy Goat Cheese Polenta",
    ingredients:
      "1 cup Yellow Cornmeal\n1 teaspoon Salt\n2 Tablespoons Butter\n4 ounces, weight Goat Cheese",
    url: "http://thepioneerwoman.com/cooking/2009/11/creamy-polenta-with-goat-cheese-heaven-on-a-plate-part-2/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4102243292_3f9b75e5b2.jpg",
    cookTime: "PT15M",
    recipeYield: "4",
    datePublished: "2009-11-17",
    prepTime: "PT",
    description:
      "Making polenta is the easiest thing in the world, and can be a nice complement to many meat dishes. I stirred a secret ingred...",
  },
  {
    name: "Creamy Herbed Potatoes",
    ingredients:
      " 4 To 5 Whole Russet Potatoes\n1 stick Butter\n1 whole Medium Onion, Finely Diced\n8 ounces, weight Cream Cheese\n3/4 cups Heavy Cream\n1 cup Whole Milk (Half-and-Half Works, Too)\n1 teaspoon Finely Chopped Rosemary\n1 teaspoon Finely Chopped Parsley\n1 teaspoon Finely Chopped Chives\n1/2 teaspoon Finely Chopped Sage",
    url: "http://thepioneerwoman.com/cooking/2008/10/creamy-herbed-potatoes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/10/creamy-herbed-potatoes.jpg",
    cookTime: "PT1H",
    recipeYield: "10",
    datePublished: "2008-10-16",
    prepTime: "PT15M",
    description:
      "Okay. If you're trying to eat healthily and eliminate fat and calories from your diet, I wouldn't be a friend if I didn't tel...",
  },
  {
    name: "Creamed Spinach",
    ingredients:
      "1 stick Butter\n8 Tablespoons Flour\n1/2 whole Medium Onion, Finely Diced\n3 cloves Garlic, Finely Minced\n2 cups Milk\n Salt And Pepper, to taste\n1 pinch Ground Nutmeg\n3 Tablespoons Butter\n24 ounces, weight Baby Spinach",
    url: "http://thepioneerwoman.com/cooking/2009/04/creamed-spinach-to-die-for/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2009/04/creamed-spinach-pot.jpg",
    cookTime: "PT20M",
    recipeYield: "8",
    datePublished: "2009-04-23",
    prepTime: "PT10M",
    description:
      "    Okay, there are two ways I make creamed spinach.     The first: I saute spinach, then pour in cream. It's what I make whe...",
  },
  {
    name: "Creamy Carrot Soup",
    ingredients:
      "8 whole Large Carrots, Peeled And Sliced\n1-1/2 cup Low Sodium Chicken Broth\n2 cloves Garlic, Pressed\n1 whole Lemon, Zested\n1-1/2 cup Half-and-half\n Lemon Juice To Taste\n1/4 teaspoon Nutmeg\n1/2 teaspoon Kosher Salt (or Regular Salt To Taste)\n Ground Black Pepper To Taste\n Fresh Herbs",
    url: "http://thepioneerwoman.com/cooking/2008/09/cooking-with-kids-creamy-carrot-soup/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/09/Creamy-Carrot-Soup.jpg",
    cookTime: "PT30M",
    recipeYield: "6",
    datePublished: "2008-09-08",
    prepTime: "PT20M",
    description:
      "There's not a parent or grandparent alive who hasn't at least once felt that feeling in his gut---that \"ugh\", that dread, whe...",
  },
  {
    name: "Creamed Spinach",
    ingredients:
      "1 whole Onion, Finely Diced\n2 cloves Garlic\n2 Tablespoons Butter\n1 bag (large Bag) Fresh Spinach\n1 cup Heavy Cream\n Salt And Pepper, to taste",
    url: "http://thepioneerwoman.com/cooking/2008/04/creamed-spinach-be-still-my-heart/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/04/creamed-spinach-serious-eats.jpg",
    cookTime: "PT15M",
    recipeYield: "4",
    datePublished: "2008-04-01",
    prepTime: "PT15M",
    description:
      "I have an unnatural love for creamed spinach, and could seriously eat the stuff daily for breakfast (cold, out of the fridge)...",
  },
  {
    name: "Crash Hot Potatoes",
    ingredients:
      "12 whole New Potatoes (or Other Small Round Potatoes)\n3 Tablespoons Olive Oil\n Kosher Salt To Taste\n Black Pepper To Taste\n Rosemary (or Other Herbs Of Choice) To Taste",
    url: "http://thepioneerwoman.com/cooking/2008/06/crash-hot-potatoes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/06/Crash-Hot-Potatoes.jpg",
    cookTime: "PT25M",
    recipeYield: "6",
    datePublished: "2008-06-02",
    prepTime: "PT30M",
    description:
      "Man, do I love Australia. First, my oldest daughter was conceived there on our honeymoon...and while we're on the subject, ha...",
  },
  {
    name: "Cowboy Nachos",
    ingredients:
      '2 cups Pioneer Woman\'s Pinto Beans From "beans And Cornbread" Recipe On Tasty Kitchen\n Ground Black Pepper To Taste\n Tabasco Sauce, To Taste\n Minced Garlic (to Desired Flavor)\n Jarred Or Fresh Jalapenos (optional)\n Canola Oil\n2 cups Pioneer Woman\'s Beef Brisket From "beef Brisket" Recipe\n Pan Drippings From Brisket Or Beef Broth (optional)\n1 can Mexican Red Sauce Or Enchilada Sauce (Enough To Moisten Beef)\n2 cups Pioneer Woman\'s Pico De Gallo From "pico De Gallo And Guacamole" Recipe\n Tortilla Chips\n2 cups Grated Monterey Jack Cheese (or To Taste)\n Guacamole And Sour Cream (optional)',
    url: "http://thepioneerwoman.com/cooking/2008/06/cowboy-nachos/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/06/Cowboy-Nachos.jpg",
    cookTime: "PT5M",
    recipeYield: "4",
    datePublished: "2008-06-13",
    prepTime: "PT15M",
    description:
      "I love finding inventive ways to use leftovers, and since my brisket recipe makes so much dadgum meat, I'm always looking for...",
  },
  {
    name: "Cowboy Breakfast Sandwiches",
    ingredients:
      " Breakfast Sausage\n Eggs\n1/4 cup Half-and-half\n Salt And Pepper, to taste\n1 jar Jalapenos\n Butter\n Texas Toast\n Sandwich Spread Of Your Choice (mayo, Miracle Whip, Spicy Mustard)\n Cheese Slices (your Choice)",
    url: "http://thepioneerwoman.com/cooking/2008/10/cowboy-breakfast-sandwiches/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/10/Cowboy-Breakfast-Sandwiches.jpg",
    cookTime: "PT20M",
    recipeYield: "4",
    datePublished: "2008-10-21",
    prepTime: "PT15M",
    description:
      'I\'ve got a new poll up in the sidebar, and just in case the winning option turns out to be "Every Day" (Lord help my saddleba...',
  },
  {
    name: "Corn Fritters",
    ingredients:
      "3/4 cups All-purpose Flour\n1 Tablespoon Sugar\n1 teaspoon Baking Powder\n2 whole Eggs\n1/2 cup Milk, More To Thin If Necessary\n1 teaspoon Kosher Salt\n1/2 teaspoon Cayenne Pepper\n4 cups (generous) Corn Kernels:  Fresh, Frozen, Or Canned\n3 teaspoons Chopped Fresh Chives\n Canola Oil, For Frying\n Powdered Sugar (optional)\n Maple Syrup (optional)",
    url: "http://thepioneerwoman.com/cooking/2009/06/corn-fritters/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3598610065_45fe665ce5.jpg",
    cookTime: "PT10M",
    recipeYield: "6",
    datePublished: "2009-06-05",
    prepTime: "PT15M",
    description:
      "    I usually never set out to make corn fritters---it's almost always an afterthought following an overzealous session of co...",
  },
  {
    name: "Pumpkin Leche Flan",
    ingredients:
      " FOR THE CARAMEL SAUCE:\n1 cup Sugar\n1/4 teaspoon Lemon Or Lime Juice\n2 Tablespoons Light Corn Syrup\n1/3 cup Water\n _____\n FOR THE FLAN:\n1 can (12 Fl Oz) Evaporated Milk, Or Half Milk And Half Cream\n1 can (14 Oz) Sweetened Condensed Milk\n1 teaspoon Vanilla Extract\n1/3 cup Pumpkin Puree, Or More To Taste\n1 dash Cinnamon, Or More To Taste (optional)\n1 dash Ground Cloves, Or More To Taste (optional)\n1/2 teaspoon Ground Ginger Or Grated Fresh Ginger, To Taste (optional)\n1 dash Allspice (optional)\n3 whole Eggs\n2 whole Egg Yolks",
    url: "http://thepioneerwoman.com/cooking/2009/11/pumpkin-leche-flan/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4129348706_9201b63da4.jpg",
    cookTime: "PT35M",
    recipeYield: "6",
    datePublished: "2009-11-24",
    prepTime: "PT30M",
    description:
      "Please welcome my good friend Ivoryhut, occasional contributor to PW Photography and all-around perfect person in my eyes. I ...",
  },
  {
    name: "Monkey Muffins",
    ingredients:
      " Leftover Bread Dough (or Refrigerated Biscuit Dough, Cut Into Thirds)\n Butter\n Sugar\n Ground Cinnamon\n Sweetened, Condensed Milk",
    url: "http://thepioneerwoman.com/cooking/2009/12/monkey-muffins/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4153560534_340c0db9db.jpg",
    cookTime: "PT15M",
    recipeYield: "12",
    datePublished: "2009-12-03",
    prepTime: "PT10M",
    description:
      "I made cinnamon rolls and dinner rolls over Thanksgiving weekend, and was left with a medium-sized bowl of extra dough. I don...",
  },
  {
    name: "Shrimp Pasta in a Foil Package",
    ingredients:
      "1/2 cup Olive Oil\n4 cloves Garlic, Minced\n3 whole 14.5 Ounce Cans Diced (or Whole) Tomatoes\n1/2 cup White Wine\n2 pounds Jumbo Or Large Shrimp, Peeled And Deveined\n Salt And Pepper, to taste\n Fresh Parsley, Minced\n1 pound Linguine, Uncooked\n Red Pepper Flakes, to taste",
    url: "http://thepioneerwoman.com/cooking/2009/12/linguine-with-shrimp/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4162214219_be34dc9e44.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2009-12-08",
    prepTime: "PT20M",
    description:
      "Now, this is a fun meal to cook. Yummy, delicious, scrumptious...and fun, fun, fun for a big group. The point here is, you ju...",
  },
  {
    name: "The Bar",
    ingredients:
      "1-1/2 cup Butter, Melted And Then Cooled\n8 ounces, weight Pitted Dates, Chopped Coarsely (around 1 1/2 Cups)\n1-1/2 cup Walnuts, Chopped\n1 cup Pecans, Chopped (optional)\n2 cups All-purpose Flour\n1/2 teaspoon Salt\n1/4 teaspoon Baking Powder\n3/4 cups Packed Brown Sugar\n3/4 cups White Sugar\n4 whole Eggs At Room Temperature\n1 teaspoon Vanilla",
    url: "http://thepioneerwoman.com/cooking/2009/12/the-bar/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4182876280_bbf730b4f9.jpg",
    cookTime: "PT30M",
    recipeYield: "16",
    datePublished: "2009-12-14",
    prepTime: "PT20M",
    description:
      "\u00a0  As I travel home today, my friend Ivoryhut shares with us a delectable Filipino holiday treat that (through happy tea...",
  },
  {
    name: "Pork Loin with Cranberry Sauce",
    ingredients:
      "1 whole Pork Tenderloin, Trimmed Of Fat\n Salt And Pepper, to taste\n3 Tablespoons Olive Oil, Divided\n3 Tablespoons Butter, Divided\n1/2 whole Medium Onion\n1/2 cup Red Wine (optional)\n3/4 cups Low Sodium Chicken Broth\n1/2 cup (generous) Cranberry Sauce (homemade Or Canned Is Fine!)",
    url: "http://thepioneerwoman.com/cooking/2009/12/pork-loin-with-cranberry-sauce/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4176765548_c46ca0f4a0.jpg",
    cookTime: "PT20M",
    recipeYield: "6",
    datePublished: "2009-12-11",
    prepTime: "PT15M",
    description:
      "This was yummy!    I made it just after Thanksgiving, thinking I had plenty of leftover cranberry sauce from our Thanksgiving...",
  },
  {
    name: "The Eggberts Sunriser",
    ingredients:
      "8 cups Frozen Hash Browns\n20 whole Frozen Mini Potato Wedges\n Canola Oil, For Frying\n Salt And Pepper, to taste\n1 whole Medium Onion, Diced\n1 whole Green Bell Pepper, Diced\n1/2 whole Red Bell Pepper, Diced\n1 whole Jalapeno, Seeded And Diced (optional)\n1-1/2 cup Diced Ham\n1-1/2 cup Sharp Cheddar Cheese, Grated\n4 Tablespoons Butter\n8 whole Eggs",
    url: "http://thepioneerwoman.com/cooking/2009/12/the-eggberts-sunriser/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2009/12/4194245541_f5271f5ce8_o.jpg",
    cookTime: "PT10M",
    recipeYield: "4",
    datePublished: "2009-12-18",
    prepTime: "PT20M",
    description:
      "There was (and is, still) a restaurant in my hometown called Eggberts.     Eggberts opened when I was a pre-teen, I think, wi...",
  },
  {
    name: "Delicious, Nutritious \u201cPumpkin Butter\u201d",
    ingredients:
      "1 cup Pumpkin Puree\n1 cup Plain, Nonfat Yogurt (vanilla Works Just As Well)\n1 teaspoon (more If Desired) Pumpkin Pie Spice\n1 cup (heaping) Powdered Sugar",
    url: "http://thepioneerwoman.com/cooking/2008/10/delicious-nutritious-pumpkin-butter/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/10/Delicious-Nutritious-\u201cPumpkin-Butter\u201d.jpg",
    cookTime: "PT",
    recipeYield: "4",
    datePublished: "2008-10-06",
    prepTime: "PT10M",
    description:
      "With all the pureed pumpkin I have in the freezer, I'm always looking for new and easy ways to use it. My goal is that by the...",
  },
  {
    name: "Delicious, Creamy Mashed Potatoes",
    ingredients:
      "5 pounds Russet Or Yukon Gold Potatoes\n3/4 cups Butter\n1 package (8 Oz.) Cream Cheese, Softened\n1/2 cup (to 3/4 Cups) Half-and-Half\n1/2 teaspoon (to 1 Teaspoon) Lawry's Seasoned Salt\n1/2 teaspoon (to 1 Teaspoon) Black Pepper",
    url: "http://thepioneerwoman.com/cooking/2007/11/delicious_creamy_mashed_potatoes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/1835461914_68b432b24c.jpg",
    cookTime: "PT30M",
    recipeYield: "10",
    datePublished: "2007-11-03",
    prepTime: "PT1H",
    description:
      "Sigh. Mashed potatoes. They're as much a part of Thanksgiving dinner as pecan pie and Uncle Festus.     But mashed potatoes a...",
  },
  {
    name: "Crispy Yogurt Chicken",
    ingredients:
      "2 cups Plain, Unflavored Yogurt\n2 cloves (to 3 Cloves) Garlic\n Parsley, To Taste\n1 whole (juice Of) Lemon\n Chicken Legs (or Thighs, Etc.)\n Salt To Taste\n2 cups Panko Bread Crumbs\n Butter (1 Pat For Each Piece Of Chicken)",
    url: "http://thepioneerwoman.com/cooking/2008/08/crispy-yogurt-chicken/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/08/Crispy-Yogurt-Chicken.jpg",
    cookTime: "PT1H15M",
    recipeYield: "6",
    datePublished: "2008-08-11",
    prepTime: "PT20M",
    description:
      "I love chicken legs. So does Marlboro Man. So do the punks. This means I'm always looking for new and interesting ways to coo...",
  },
  {
    name: "Fancy Macaroni",
    ingredients:
      "4 cups Macaroni\n8 Tablespoons Butter (Salted Butter)\n2 whole Medium Onions, Cut In Half And Sliced Thin\n10 slices Regular Bacon\n1 Tablespoon Bacon Grease (reserved From Bacon Slices)\n1/4 cup All-purpose Flour\n2 cups Whole Or 2% Milk\n1/2 cup Half-and-half\n2 whole Egg Yolks, Beaten\n Salt And Pepper, to taste\n1/2 cup Grated Gruyere Cheese\n1/2 cup Grated Fontina Cheese\n1/2 cup Grated Parmigiano Reggiano Cheese\n4 ounces, weight Chevre (soft Goat Cheese)",
    url: "http://thepioneerwoman.com/cooking/2009/12/fancy-macaroni/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4204711663_3b0de36aae.jpg",
    cookTime: "PT15M",
    recipeYield: "12",
    datePublished: "2009-12-22",
    prepTime: "PT20M",
    description:
      "I'm not going to say much.     Just this:    Make this sometime over the holidays. Serve it on Christmas Eve with your roast ...",
  },
  {
    name: "Delicious Cheddar Puffs",
    ingredients:
      "1 loaf Crusty French Bread, Cut Into 1-inch Cubes\n1/2 stick Butter\n3 cloves Garlic, Minced\n1 whole Shallot, Minced\n1-1/2 teaspoon Dijon Mustard\n8 ounces, weight Cream Cheese, Sliced\n1-1/2 cup Grated Cheddar Cheese\n Salt And Freshly Ground Black Pepper, To Taste\n2 whole Egg Whites, Beaten",
    url: "http://thepioneerwoman.com/cooking/2009/12/cheese-puffs/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4021391571_7264bb7b00.jpg",
    cookTime: "PT10M",
    recipeYield: "8",
    datePublished: "2009-12-29",
    prepTime: "PT15M",
    description:
      "My mom made these puffs for a cocktail party she threw back in the seventies. Back when Danskin trousers and brown leather cl...",
  },
  {
    name: "Phyllo Mushroom Bundles",
    ingredients:
      "1 package (1 Roll) Phyllo Dough\n1 stick Unsalted Butter\n4 cups Chopped Mushrooms\n4 cloves Garlic, Minced\n1/2 cup Dry White Wine\n Salt To Taste\n1/3 cup Grated Parmesan Cheese",
    url: "http://thepioneerwoman.com/cooking/2009/12/phyllo-mushroom-bundles/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4230478431_e9c45ff51a.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2009-12-31",
    prepTime: "PT20M",
    description:
      "I first made these when I was living alone in Los Angeles.    I can't believe I ever lived alone. In Los Angeles. By myself. ...",
  },
  {
    name: "White Chili",
    ingredients:
      "1 whole Fryer Chicken, Cut Up (or 3 Cups Cooked Chicken)\n1 whole Medium Onion, Diced\n4 cloves Garlic, Minced\n2 whole Cans Green Chilies, Chopped\n1 pound Dried Great Northern Beans, Rinsed\n8 cups Chicken Broth\n1 whole Jalapeno, Sliced\n1-1/2 Tablespoon Ground Cumin\n1/2 teaspoon Paprika\n1/2 teaspoon Cayenne Pepper\n Salt To Taste\n White Pepper, To Taste\n1 cup Whole Milk\n2 Tablespoons Masa (corn Flour) OR Cornmeal\n Grated Monterey Jack, To Taste\n Sour Cream For Garnish\n Cilantro For Garnish\n Guacamole (optional)\n Pico De Gallo (optional)\n Corn Tortillas, Warmed",
    url: "http://thepioneerwoman.com/cooking/2010/01/simple-hearty-white-chili/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/4243109382_1a797f44d2.jpg",
    cookTime: "PT2H",
    recipeYield: "8",
    datePublished: "2010-01-04",
    prepTime: "PT25M",
    description:
      "I love white chili. And just like regular chili, there are as many incarnations as there are grains of sand in all the beache...",
  },
  {
    name: "Fatty\u2019s Grandma\u2019s Cheez Eggs",
    ingredients:
      "3 whole Eggs\n1 Tablespoon Evaporated Milk\n1 pinch Salt\n1 Tablespoon (to 2 Tablespoons) Butter\n1 slice Extra Thick Velveeta Cheese",
    url: "http://thepioneerwoman.com/cooking/2009/01/fattys-grandmas-cheez-eggs/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2009/01/Fatty\u2019s-Grandma\u2019s-Cheez-Eggs.jpg",
    cookTime: "PT5M",
    recipeYield: "1",
    datePublished: "2009-01-28",
    prepTime: "PT5M",
    description:
      '    Fat Cyclist and I became "innernet" friends around two years ago, and I remain a big fan of his rabid passion for cycling...',
  },
  {
    name: "Farfalle with Zucchini",
    ingredients:
      "4 whole (to 5) Regular-sized Zucchini\n1 whole Medium Onion\n Grape Or Cherry Tomatoes\n3 cloves Garlic\n Farfalle (bowtie) Pasta\n2 Tablespoons Olive Oil\n2/3 cups White Wine (or Chicken Broth)\n1 Tablespoon Arrowroot\n1/2 cup (to 3/4 Cup) Cream\n Parmesan Cheese\n Fresh Herbs (lemon Thyme, Fresh Basil, Chives, Etc.)\n Salt And Pepper, to taste",
    url: "http://thepioneerwoman.com/cooking/2008/07/farfalle-with-zucchini-a-yummy-summer-meal/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/07/Farfalle-with-Zucchini.jpg",
    cookTime: "PT30M",
    recipeYield: "8",
    datePublished: "2008-07-14",
    prepTime: "PT30M",
    description:
      "All pastas are not created equal. Did you know this? I'm a real noodle aficionado, and while I'd never turn down any type of ...",
  },
  {
    name: "Enchiladas",
    ingredients:
      " FOR THE SAUCE:\n1 Tablespoon Canola Oil\n1 Tablespoon All-purpose Flour\n1 can (28 Ounce) Enchilada Or Red Sauce\n2 cups Chicken Broth\n1/2 teaspoon Salt\n1/2 teaspoon Ground Black Pepper\n2 Tablespoons Chopped Cilantro\n _____\n FOR THE MEAT:\n1-1/2 pound Ground Beef\n1 whole Medium Onion, Finely Diced\n2 cans (4 Ounce) Diced Green Chilies\n1/2 teaspoon Salt\n _____\n FOR THE TORTILLAS:\n10 whole (to 14) Corn Tortillas\n1/2 cup Canola Oil\n _____\n TO ASSEMBLE:\n3 cups Grated Sharp Cheddar Cheese\n1/2 cup Chopped Black Olives\n1 cup Chopped Green Onions\n1/2 cup Chopped Cilantro",
    url: "http://thepioneerwoman.com/cooking/2008/09/simple-perfect-enchiladas/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/09/Enchiladas.jpg",
    cookTime: "PT20M",
    recipeYield: "6",
    datePublished: "2008-09-15",
    prepTime: "PT1H30M",
    description:
      "Okay, people. Let's get down to business here. Let's make enchiladas!     Did you know that in addition to having an imaginar...",
  },
  {
    name: "Eggs Benedict",
    ingredients:
      "3 whole English Muffins\n3 slices Canadian Bacon\n3 whole Eggs (plus 3 Egg Yolks)\n2 sticks Butter\n1 whole Lemon, Juiced\n Cayenne Pepper To Taste",
    url: "http://thepioneerwoman.com/cooking/2007/10/eggs_benedict/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/1546875357_506daa8f1c1.jpg",
    cookTime: "PT10M",
    recipeYield: "3",
    datePublished: "2007-10-12",
    prepTime: "PT15M",
    description:
      "    If you've never tried it, you must. If you've always considered it the kind of dish only Thurston Howell the Third-types ...",
  },
  {
    name: "Dump Cake",
    ingredients:
      "1 can (21 Oz.) Cherry Pie Filling\n1 can (15 Oz.) Crushed Pineapple\n1 box (about 18 Oz.) Yellow Or White Cake Mix\n1 stick Margarine\n1/2 stick Butter\n Whipped Cream",
    url: "http://thepioneerwoman.com/cooking/2008/04/dump-cake-a-potluckers-paradise/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/04/Dump-Cake.jpg",
    cookTime: "PT1H",
    recipeYield: "12",
    datePublished: "2008-04-17",
    prepTime: "PT15M",
    description:
      "Please don't hate me. Because I'm here to tell you one thing: there is nothing---nothing---good about this dessert. It's load...",
  },
  {
    name: "Egg-in-a-Hole",
    ingredients:
      "1 slice Of Your Favorite Kind Of Bread\n1 Tablespoon Butter\n1 whole Egg\n Salt To Taste\n Pepper To Taste",
    url: "http://thepioneerwoman.com/cooking/2008/07/egg-in-a-hole-see-alternate-names-below/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/07/Egg-in-a-Hole.jpg",
    cookTime: "PT5M",
    recipeYield: "1",
    datePublished: "2008-07-24",
    prepTime: "PT5M",
    description:
      "Sometimes it's the simplest things that taste the best. Before I married Marlboro Man, I had to learn to make these delicious...",
  },
  {
    name: "Grilled Chicken Bacon Sliders",
    ingredients:
      "4 whole Boneless, Skinless Chicken Breasts (breast Halves, Not The Whole Breast)\n16 slices Thin Bacon\n Cajun Spice\n Salt And Pepper, to taste\n16 whole Small Dinner Rolls\n16 slices Cheese Of Your Choice (cheddar, Monterey Jack, Pepper Jack, American, Swiss)\n Bottled Sauces Of Your Choice: BBQ, Louisiana Hot Sauce, Teriyaki, Etc.\n Toppings Of Your Choice: Tomato Slices, Grilled Onions, Lettuce, Celery Leaves, Etc.\n Spread Of Your Choice: Mayo, Mustards, Mayo Mixed With Chipotle Pepper, Etc.",
    url: "http://thepioneerwoman.com/cooking/2013/01/grilled-chicken-bacon-sliders/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2013/01/sliders.jpg",
    cookTime: "PT15M",
    recipeYield: "16",
    datePublished: "2013-01-28",
    prepTime: "PT15M",
    description:
      "This is a cute, diminutive play on Marlboro Man's Second Favorite Sandwich. (Please enjoy that vintage post of mine! My finge...",
  },
  {
    name: "Cooking With Ryan: Zucchini Cakes!",
    ingredients:
      "1 whole Large Zucchini\n1 Tablespoon Minced Garlic\n1/2 cup (to 3/4 Cup) Breadcrumbs\n1/2 cup 4-cheese Italian Blend (or Parmesan Or Romano)\n2 whole Eggs\n Kosher Salt To Taste\n Freshly Ground Black Pepper, To Taste\n Olive Oil",
    url: "http://thepioneerwoman.com/cooking/2008/07/cooking-with-ryan-zucchini-cakes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/07/Zucchini-Cakes.jpg",
    cookTime: "PT5M",
    recipeYield: "2",
    datePublished: "2008-07-21",
    prepTime: "PT15M",
    description:
      "Happy Monday, dear friends! Today's rip-roarin' recipe is from Ryan Detzel, a twenty-something punk pastor from Cincinnati wh...",
  },
  {
    name: "Pecan Pie",
    ingredients:
      '1 whole Unbaked Pie Crust (I Use "sylvia\'s Perfect Pie Crust" Recipe\n1 cup White Sugar\n3 Tablespoons Brown Sugar\n1/2 teaspoon Salt\n1 cup Corn Syrup\n3/4 teaspoons Vanilla\n1/3 cup Melted Butter (salted)\n3 whole Eggs, Beaten\n1 cup (heaping) Chopped Pecans',
    url: "http://thepioneerwoman.com/cooking/2008/11/pecan-pie/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/11/Pecan-Pie.jpg",
    cookTime: "PT50M",
    recipeYield: "12",
    datePublished: "2010-10-06",
    prepTime: "PT15M",
    description:
      "I used to be scared of Pecan Pie when I was a little girl. Seriously. It was in the long list of dishes and ingredients that ...",
  },
  {
    name: "Oven-Roasted Asparagus",
    ingredients:
      "1 bunch Asparagus\n4 Tablespoons (up To 5 Tablespoons) Olive Oil\n Kosher Salt To Taste\n Freshly Ground Black Pepper, To Taste",
    url: "http://thepioneerwoman.com/cooking/2008/11/oven-roasted-asparagus/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/11/oven-roasted-asparagus.jpg",
    cookTime: "PT15M",
    recipeYield: "4",
    datePublished: "2008-11-24",
    prepTime: "PT5M",
    description:
      "We need more GREEN in our Thanksgiving arsenal, and this is one of the most ridiculously simple vegetable dishes in existence...",
  },
  {
    name: "Homemade Cranberry Sauce",
    ingredients:
      "1 bag (12 Oz. Bag) Cranberries\n1 cup Cranberry Juice (or Orange, Apple Or Any Ot\u00acher Juice Combination)\n1 cup Pure Maple Syrup (not Pancake Syrup!)\n3 Tablespoons Juice (you Could Also Do Orange Zest, Lemon Zest, Lemon Juice \u2013 Anything Citrusy)",
    url: "http://thepioneerwoman.com/cooking/2008/11/homemade-cranberry-sauce/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/11/homemade-cranberry-sauce.jpg",
    cookTime: "PT15M",
    recipeYield: "4",
    datePublished: "2009-12-11",
    prepTime: "PT5M",
    description:
      "There's nothing like posting just one more Thanksgiving recipe at the very last minute! Hey, it could be worse---I could have...",
  },
  {
    name: "Fresh Green Beans",
    ingredients:
      "1 pound Green Beans\n2 Tablespoons Bacon Grease (can Substitute 1 Tablespoon Butter And 1 Tablespoon Olive Oil)\n2 cloves Garlic\n1 cup Chopped Onion\n1 cup Chicken Broth\n1/2 cup Chopped Red Bell Pepper\n1/2 teaspoon (to 1 Teaspoon) Kosher Salt (can Substitute Regular Table Salt; Use 1/4 To 1/2 Teaspoon)\n Ground Black Pepper To Taste",
    url: "http://thepioneerwoman.com/cooking/2008/06/fresh-green-beans-one-way/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/06/Fresh-Green-Beans.jpg",
    cookTime: "PT30M",
    recipeYield: "6",
    datePublished: "2008-06-09",
    prepTime: "PT15M",
    description:
      "PW's Fresh Green Beans Printable Recipe    Okay, I have to get something off my chest. YUM. YUM YUM YUM. YUM. *Groan* *Ugh* Y...",
  },
  {
    name: "Fresh Corn with Wild Rice",
    ingredients:
      "2 cups Cooked Wild Rice (cooked In The Below 4 Cups Chicken Broth)\n4 cups Chicken Broth\n3 cups (to 4 Cups) Fresh Corn Kernels (scraped Off The Cob)\n1 cup Heavy Cream\n6 Tablespoons Butter\n2 whole Eggs, Beaten\n1 teaspoon (to 2 Teaspoons) Kosher Salt (or Table Salt To Taste)\n Cayenne Pepper To Taste\n1/2 cup (to 1 Cup) Milk, For Thinning",
    url: "http://thepioneerwoman.com/cooking/2008/10/fresh-corn-with-wild-rice-a-delicious-holiday-sidedish/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/10/fresh-corn-with-wild-rice.jpg",
    cookTime: "PT45M",
    recipeYield: "6",
    datePublished: "2008-10-09",
    prepTime: "PT25M",
    description:
      "Mmmmm. This is one of those Thanksgiving side dishes. Textural. Flavorful. Set apart from the fray. I've been making it for y...",
  },
  {
    name: "Fresh Corn Casserole",
    ingredients:
      "8 ears Of Corn (Still In The Husk)\n2/3 cups Heavy Cream\n3 Tablespoons Butter (salted)\n1/2 teaspoon Salt To Taste\n Ground Pepper To Taste",
    url: "http://thepioneerwoman.com/cooking/2007/07/fresh_corn_cass/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2007/07/Fresh-Corn-Casserole.jpg",
    cookTime: "PT45M",
    recipeYield: "6",
    datePublished: "2007-07-20",
    prepTime: "PT15M",
    description:
      "This isn't technically corn pudding, as it doesn't use any eggs, but that's what folks 'round these parts sometimes call it. ...",
  },
  {
    name: "French Silk Pie",
    ingredients:
      "4 ounces, weight Unsweetened Baking Chocolate\n1 cup Salted Butter, Softened\n1-1/2 cup Sugar\n1 teaspoon Vanilla Extract\n4 whole Eggs\n1 package Baked Pie Shell",
    url: "http://thepioneerwoman.com/cooking/2008/02/the_meal_of_love_part_iv_de-licious_chocolate_pie/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/2262074186_2f7abc0554_o.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2008-02-13",
    prepTime: "PT30M",
    description:
      "    But I have some bad news first. And what I'm about to tell you almost prevented me from posting this recipe altogether, b...",
  },
  {
    name: "French Breakfast Puffs",
    ingredients:
      "3 cups Flour\n3 teaspoons Baking Powder\n1 teaspoon Salt\n1/2 teaspoon Ground Nutmeg\n1 cup Sugar\n2/3 cups Shortening (Crisco)\n2 whole Eggs\n1 cup Milk\n1-1/2 cup Sugar\n3 teaspoons Cinnamon\n2 sticks Butter",
    url: "http://thepioneerwoman.com/cooking/2007/12/french_breakfast_puffs/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/2110061094_30b1545cb5.jpg",
    cookTime: "PT25M",
    recipeYield: "12",
    datePublished: "2007-12-14",
    prepTime: "PT30M",
    description:
      "    Bonjour! Como cavasldfkjwaoiet sdfnsd;lfj;sdlfj dsfjklsfjs. Whatever that means. I can't speak French. Spanish, yes. Fren...",
  },
  {
    name: "Pasta alla Vodka",
    ingredients:
      "1 pound Pasta\n2 Tablespoons Olive Oil\n2 Tablespoons Butter\n1 whole Medium Onion, Chopped Finely\n2 cloves (to 3 Cloves) Garlic, Chopped\n3/4 cups (to 1 Cup) Vodka\n1 can (About 14 Oz.) Tomato Puree\n1 cup Heavy Cream\n1 pinch Red Pepper Flakes\n1/4 teaspoon (to 1/2 Teaspoon) Salt\n Freshly Ground Black Pepper, To Taste\n1 cup Grated Parmesan Cheese",
    url: "http://thepioneerwoman.com/cooking/2008/12/friday-night-dinner-pasta-alla-vodka/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/12/pasta-alla-vodka.jpg",
    cookTime: "PT25M",
    recipeYield: "6",
    datePublished: "2008-12-12",
    prepTime: "PT15M",
    description:
      "No, I'm not spiraling downward into a pit of sin and booze, despite what you may think. I mean, just because I've shared the ...",
  },
  {
    name: "Fourth of July Cake",
    ingredients:
      " FOR THE CAKE:\n2-1/4 sticks Unsalted Butter\n3 cups Sugar\n6 whole Eggs\n1 cup Sour Cream (Not Low Fat)\n1-1/2 teaspoon Vanilla\n3 cups Flour, Sifted\n1/3 cup Cornstarch\n1 teaspoon Kosher Salt (Use 3/4 Teaspoon Regular Salt If Kosher Salt Is Not Available)\n1 teaspoon Baking Soda\n _____\n FROSTING\n1-1/2 pound Cream Cheese (3 -  8oz. Packages, Not Low Fat)\n1 pound Unsalted Butter (4 Sticks)\n1 pound Powdered Sugar\n1-1/2 teaspoon Vanilla\n1/2 pint Blueberries\n2 pints Raspberries (Wash And Pat Dry)",
    url: "http://thepioneerwoman.com/cooking/2007/06/fourth_of_july_/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/666024641_7e9d76b99b.jpg",
    cookTime: "PT30M",
    recipeYield: "36",
    datePublished: "2007-06-30",
    prepTime: "PT1H",
    description:
      "    Stop right there. Don't you dare run out of the room. This is the most delicious and splash-making cake you could possibl...",
  },
  {
    name: "Spicy Molasses Cookies",
    ingredients:
      "1 cup Sugar\n3/4 cups Crisco (vegetable Shortening)\n1/4 cup Molasses\n1 whole Egg\n2 cups Flour\n2-1/2 teaspoons Baking Soda\n1 teaspoon Cinnamon\n1 teaspoon Ground Ginger\n1/2 teaspoon Ground Cloves\n1/4 teaspoon Ground Cardamom\n1/4 teaspoon Salt",
    url: "http://thepioneerwoman.com/cooking/2008/12/spicy-molasses-cookies-seriously-delicious/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/12/3111458485_0ae4979fca_o.jpg",
    cookTime: "PT11M",
    recipeYield: "36",
    datePublished: "2008-12-15",
    prepTime: "PT15M",
    description:
      "It's Cookie Week here on The Pioneer Woman Cooks, and you know what that means! Or not, since I've never had Cookie Week befo...",
  },
  {
    name: "Iny\u2019s Prune Cake",
    ingredients:
      " FOR THE CAKE:\n1 cup Prunes\n1 cup Sugar\n3 whole Eggs\n1 cup Canola Oil\n1-1/2 cup Flour, Sifted\n1 teaspoon Baking Soda\n1 teaspoon Nutmeg\n1 teaspoon Allspice\n1 teaspoon Cinnamon\n1 cup Buttermilk\n1 teaspoon Vanilla Extract\n _____\n FOR THE ICING:\n1 cup Sugar\n1/2 cup Buttermilk\n1/2 teaspoon Baking Soda\n1 Tablespoon White Corn Syrup\n1/4 cup Butter\n1/2 teaspoon Vanilla",
    url: "http://thepioneerwoman.com/cooking/2008/12/make-this-cake-today-trust-me/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/12/inys-prune-cake.jpg",
    cookTime: "PT40M",
    recipeYield: "12",
    datePublished: "2008-12-22",
    prepTime: "PT25M",
    description:
      "I was fortunate enough to happen upon this recipe for my great-grandmother Iny's Prune Cake a few years ago. Written by her f...",
  },
  {
    name: "Monday Night Stir Fry",
    ingredients:
      "3 whole Chicken Breasts (or Other Meat), Cut Into Pieces\n1/2 teaspoon Sesame Oil (plus Extra To Drizzle Over Meat)\n1/2 cup Soy Sauce (plus Extra To Drizzle Over Meat)\n3 Tablespoons Sugar\n1/2 cup Chicken Broth, Divided\n2 teaspoons (rounded) Arrowroot\n3 Tablespoons Peanut Oil, Divided\n1 whole Medium Onion\n1 whole Red (or Other Color) Bell Pepper, Cut Into Chunks\n2 cloves Garlic\n2 Tablespoons (to 3 Tablespoons) Fresh Ginger, Minced\n10 whole White Mushrooms, Sliced (can Use Any Mushroom You Like)\n1 jar (small Jar) Baby Corn, Cut Into Pieces\n1 teaspoon Rice Vinegar\n1/4 cup (to 1/2 Cup) Roughly Chopped Cilantro",
    url: "http://thepioneerwoman.com/cooking/2008/12/monday-night-stir-fry/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/12/monday-night-stir-fry.jpg",
    cookTime: "PT10M",
    recipeYield: "4",
    datePublished: "2008-12-29",
    prepTime: "PT20M",
    description:
      "I don't think I've ever been more glad to see Monday in my life. I loved Christmas 'round these parts and had a wonderful tim...",
  },
  {
    name: "Goat Cheese with Fresh Dill and Paprika",
    ingredients:
      "2 packages (11 Ounce) Fresh Goat Cheese\n6 Tablespoons Fresh Dill (or More If Needed)\n6 Tablespoons Paprika (or More If Needed)",
    url: "http://thepioneerwoman.com/cooking/2008/04/goat-cheese-with-fresh-dill-and-paprika-my-heart-sings/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/04/Goat-Cheese-with-Fresh-Dill-and-Paprika.jpg",
    cookTime: "PT",
    recipeYield: "12",
    datePublished: "2008-04-14",
    prepTime: "PT20M",
    description:
      "Mmmm. Yum. Groooan. Yum again. Mmmm. Yum.    Okay, I had to get that out. Thank you for listening.    Oh, how I've fallen in ...",
  },
  {
    name: "Marinated Flank Steak, Part One",
    ingredients:
      "1/2 cup Soy Sauce\n1/2 cup Cooking Sherry\n3 Tablespoons Honey\n2 Tablespoons Sesame Oil\n2 Tablespoons (heaping) Minced Ginger\n3 cloves (to 5 Cloves) Minced Garlic\n1/2 teaspoon Crushed Red Pepper Flakes\n1 whole Flank Steak",
    url: "http://thepioneerwoman.com/cooking/2009/01/marinated-flank-steak-part-one/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2009/01/marinated-flank-steak-1.jpg",
    cookTime: "PT10M",
    recipeYield: "6",
    datePublished: "2009-01-07",
    prepTime: "PT3H",
    description:
      "I love this recipe for marinated flank steak. It arose from an old marinated flank steak recipe my mom used to make. Hers is ...",
  },
  {
    name: "Marinated Flank Steak, Part 2",
    ingredients:
      "1/2 cup Soy Sauce\n1/2 cup Cooking Sherry\n3 Tablespoons Honey\n2 Tablespoons Sesame Oil\n2 Tablespoons (heaping) Minced Ginger\n3 cloves (to 5 Cloves) Minced Garlic\n1/2 teaspoon Crushed Red Pepper Flakes\n1 whole Flank Steak",
    url: "http://thepioneerwoman.com/cooking/2009/01/marinated-flank-steak-part-2-come-to-mama/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3178201446_59d95dfaf4.jpg",
    cookTime: "PT10M",
    recipeYield: "6",
    datePublished: "2009-01-07",
    prepTime: "PT3H",
    description:
      "I marinated the flank steak for a good six hours today, and I couldn't wait to grill it!    I put the meat on a plate (for re...",
  },
  {
    name: "Steak Bites",
    ingredients:
      "1 pound Sirloin Steak (without Much Gristle) Or Pre-cut Beef Tips\n Kosher Salt To Taste\n Fresh Ground Black Pepper To Taste\n2 Tablespoons Butter",
    url: "http://thepioneerwoman.com/cooking/2009/01/steak-bites/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3190843697_88ceb2c27f.jpg",
    cookTime: "PT10M",
    recipeYield: "2",
    datePublished: "2012-03-09",
    prepTime: "PT5M",
    description:
      "    Today I'll show you how to make my gourmet Steak Bites, which are actually about as UN-gourmet as it gets. But they're fu...",
  },
  {
    name: "Ranch Style Chicken",
    ingredients:
      "1/2 cup Dijon Mustard\n1/2 cup Honey\n1/2 whole (juice Of) Lemon\n1/2 teaspoon Paprika\n1/2 teaspoon Salt\n Crushed Red Pepper (optional To Taste)\n6 whole Boneless, Skinless Chicken Breasts\n1 pound Thick Cut Bacon\n Bacon Grease\n Sharp Cheddar Cheese, to taste\n Canola Oil",
    url: "http://thepioneerwoman.com/cooking/2009/01/ranch-style-chicken/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3214830317_3470607769.jpg",
    cookTime: "PT15M",
    recipeYield: "6",
    datePublished: "2009-01-21",
    prepTime: "PT2H",
    description:
      '  "Ranch Chicken"---ha! What a recipe name. The truth is, this dish doesn\'t even have an official name. I just make it. Then ...',
  },
  {
    name: "Fluffy New Potatoes",
    ingredients:
      "9 whole (to 10) Medium To Large New Potatoes\n2 Tablespoons Olive Oil\n1/2 cup Sour Cream\n4 ounces, weight Cream Cheese, Softened\n1-1/2 cup Grated Monterey Jack Cheese\n1 Tablespoon Chopped Chives\n1 clove Garlic, Pressed\n Salt And Pepper, to taste",
    url: "http://thepioneerwoman.com/cooking/2009/01/fluffy-new-potatoes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3217299158_91723b7086.jpg",
    cookTime: "PT1H",
    recipeYield: "8",
    datePublished: "2009-01-22",
    prepTime: "PT20M",
    description:
      "Simple, easy, simple, easy, simple, easy, YUM.    Hey, that was fun! Let's do it again:    Simple, easy, simple, easy, simple...",
  },
  {
    name: "My Favorite Burger",
    ingredients:
      "2 pounds 80/20 Ground Beef\n1 teaspoon Salt\n1/2 teaspoon Black Pepper\n Tabasco Sauce, To Taste\n2 Tablespoons Butter\n1 whole Red Onion, Sliced\n2 Tablespoons Brown Sugar\n1/4 cup Real Mayonnaise\n Kaiser Rolls\n1 cup Crumbled Blue Cheese\n Your Favorite Lettuce",
    url: "http://thepioneerwoman.com/cooking/2009/01/my-most-favorite-burger-ever-for-now/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3223744161_d55e408d0e.jpg",
    cookTime: "PT6M",
    recipeYield: "4",
    datePublished: "2009-01-25",
    prepTime: "PT20M",
    description:
      "I'm just going to say it: when it comes to burgers, I'm high maintenance.    First of all, I love a good burger.     Second o...",
  },
  {
    name: "Sushi 101: Perfect Sushi Rice",
    ingredients:
      "1 cup Rice Wine Vinegar\n1/2 cup Sugar\n1/4 cup Sake Or Mirin (a Japanese Rice Wine)\n4 cups Short Grain/sushi Rice",
    url: "http://thepioneerwoman.com/cooking/2009/01/perfect-sushi-rice/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3229808915_df39808588.jpg",
    cookTime: "PT20M",
    recipeYield: "4",
    datePublished: "2009-01-27",
    prepTime: "PT30M",
    description:
      "This is the first of several sushi lessons brought to you by me, displaced sushi lover, and Cody, a half-Japanese sushi chef ...",
  },
  {
    name: "Mexican Layer Dip",
    ingredients:
      "1 can Refried Beans\n Tabasco Sauce, To Taste\n1 can Diced Green Chilies\n Ground Cumin, to taste\n3/4 cups Grated Sharp Cheddar Cheese\n1 cup Sour Cream\n1 cup Guacamole\n3/4 cups Monterey Jack Cheese\n1 can Black Olives\n1 cup Pico De Gallo",
    url: "http://thepioneerwoman.com/cooking/2009/01/mexican-layer-dip/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3240212440_df1959a301.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2009-01-30",
    prepTime: "PT15M",
    description:
      "    It's the exact same Mexican Layer Dip I grew up eating in the eighties, with the exception of these modifications:    1. ...",
  },
  {
    name: "Sushi 101: How to Make Sushi Rolls",
    ingredients:
      "1 piece Makisu (bamboo Rolling Mat)\n Dark Green Nori (dried Seaweed)\n Sushi Rice\n Imitation Crab\n Avocado, Thinly Sliced\n Cucumber (Japanese, If Available), Thinly Sliced\n Toasted Sesame Seeds",
    url: "http://thepioneerwoman.com/cooking/2009/02/sushi-101-how-to-make-sushi-rolls/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3246758043_5729c00e7b.jpg",
    cookTime: "PT",
    recipeYield: "2",
    datePublished: "2009-02-02",
    prepTime: "PT40M",
    description:
      "Note: If you missed Class 1, click here.    Printable Recipe - California Rolls    Sushi rolls are all I ever want in a sushi...",
  },
  {
    name: "Baked Fudge",
    ingredients:
      "2 whole Eggs\n1 cup Sugar\n2 Tablespoons (heaping) Cocoa\n2 Tablespoons Flour\n1/2 cup Butter, Melted\n1 teaspoon Vanilla Extract",
    url: "http://thepioneerwoman.com/cooking/2009/02/sweets-for-your-sweetie-1-delicious-baked-fudge/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3254705670_9171b55059.jpg",
    cookTime: "PT50M",
    recipeYield: "4",
    datePublished: "2009-02-04",
    prepTime: "PT10M",
    description:
      "    Valentine's Day will be here before you know it, and you know what that means: It means...well...it means you can bake a ...",
  },
  {
    name: "Spreads",
    ingredients:
      "1 cup Brown Sugar\n1 cup Margarine\n1 whole Egg\n2 cups Flour\n1/2 teaspoon Salt\n1 teaspoon Vanilla\n6 ounces, weight ( To 8 Ounces) Chocolate Chips",
    url: "http://thepioneerwoman.com/cooking/2009/02/spreads-my-brothers-favorite-cookie/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3261425473_d1f8805776.jpg",
    cookTime: "PT20M",
    recipeYield: "12",
    datePublished: "2009-02-07",
    prepTime: "PT15M",
    description:
      "Note: The winners for the KitchenAid contest will be announced at the end of this post.    My oldest brother WDS was a demand...",
  },
  {
    name: "Homemade Ranch Dressing",
    ingredients:
      "1 clove (to 2 Cloves) Garlic\n Salt To Taste\n1/4 cup Italian Flat-leaf Parsley\n2 Tablespoons Fresh Chives\n1 cup (Real) Mayonnaise\n1/2 cup Sour Cream\n Buttermilk (as Needed To Desired Consistency)\n White Vinegar (optional, To Taste)\n Worcestershire Sauce, To Taste (optional)\n Fresh Dill (optional, To Taste)\n Cayenne Pepper (optional, To Taste)\n Paprika (optional, To Taste)\n Fresh Oregano (optional, To Taste)\n Tabasco (optional, To Taste)",
    url: "http://thepioneerwoman.com/cooking/2008/06/homemade-ranch-dressing/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/06/Homemade-Ranch-Dressing.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2008-06-06",
    prepTime: "PT2H",
    description:
      "Necessity is the mother of invention. Before I moved to the country and started raising a family, I hadn't a clue what that a...",
  },
  {
    name: "Homemade Pumpkin Puree",
    ingredients: "2 whole Small Pumpkins",
    url: "http://thepioneerwoman.com/cooking/2008/10/make-your-own-pumpkin-puree/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/10/pumpkin.jpg",
    cookTime: "PT45M",
    recipeYield: "6",
    datePublished: "2008-10-06",
    prepTime: "PT45M",
    description:
      "Several years ago, when my two girls were babies, my mother-in-law and I decided we had nothing better to do with our lives t...",
  },
  {
    name: "Holiday Bacon Appetizers",
    ingredients:
      "1 package Club Crackers\n1 pound Thin Sliced Bacon (or More Depending On Number Of Crackers)\n Grated Parmesan Cheese\n Optional Alternative:  Brown Sugar Instead Of Parmesan Cheese",
    url: "http://thepioneerwoman.com/cooking/2007/12/flashback_1981_-_holiday_bacon_appetizers/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/2103577050_86a171d9e0.jpg",
    cookTime: "PT2H",
    recipeYield: "36",
    datePublished: "2007-12-11",
    prepTime: "PT30M",
    description:
      "    Does anyone remember these lovely little numbers? Back in the early eighties, they were all the rage at suburban holiday ...",
  },
  {
    name: "French Onion Soup",
    ingredients:
      "1 stick Butter\n4 whole Large (or 6 Medium) Yellow Onions, Halved Root To Tip, And Sliced Thin\n1 cup (generous) Dry White Wine\n4 cups Low Sodium Chicken Broth\n4 cups Beef Broth\n2 cloves Minced Garlic\n Worcestershire Sauce\n Several Thick Slices Of French Bread Or Baguette\n5 ounces, weight (to 7 Ounces) Gruyere Cheese, Grated",
    url: "http://thepioneerwoman.com/cooking/2009/02/french-onion-soup/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2009/02/my-french-onion-soup.jpg",
    cookTime: "PT2H",
    recipeYield: "6",
    datePublished: "2009-02-12",
    prepTime: "PT20M",
    description:
      "    It may be slightly unusual to suggest French Onion Soup for a Valentine's Day dinner---just as unusual, probably, as my p...",
  },
  {
    name: "My Caesar Salad. Part 1.",
    ingredients:
      " FOR SALAD DRESSING:\n2 cloves Fresh Garlic (peeled)\n4 whole Anchovy Fillets\n2 Tablespoons (up To 3 Tablespoons) Dijon Mustard\n1 Tablespoon Balsamic (or Red Wine) Vinegar\n1/2 whole Lemon, Juiced\n1/2 cup Olive Oil\n1 teaspoon Worcestershire Sauce\n1 dash Salt\n Generous Black Pepper, to taste\n1/4 cup Freshly Grated Parmesan Cheese\n _____\n FOR CROUTONS:\n1/2 loaf Crusty French Bread\n1/4 cup Olive Oil\n2 cloves Fresh Garlic (peeled)\n Salt To Taste\n _____\n For Salad\n Dry Hearts Of Romaine Lettuce\n Fresh Parmesan Cheese",
    url: "http://thepioneerwoman.com/cooking/2009/02/my-caesar-salad-part-1/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3294969125_73e4657472.jpg",
    cookTime: "PT",
    recipeYield: "4",
    datePublished: "2009-02-20",
    prepTime: "PT1H30M",
    description:
      "This is turning into a Real Time Cooking sort of post, as febrile children and burned croutons have slowed down my momentum t...",
  },
  {
    name: "My Caesar Salad. Part 2.",
    ingredients:
      " FOR SALAD DRESSING:\n2 cloves Fresh Garlic (peeled)\n4 whole Anchovy Fillets\n2 Tablespoons (up To 3 Tablespoons) Dijon Mustard\n1 Tablespoon Balsamic (or Red Wine) Vinegar\n1/2 whole Lemon, Juiced\n1/2 cup Olive Oil\n1 teaspoon Worcestershire Sauce\n1 dash Salt\n Generous Black Pepper, to taste\n1/4 cup Freshly Grated Parmesan Cheese\n _____\n FOR CROUTONS:\n1/2 loaf Crusty French Bread\n1/4 cup Olive Oil\n2 cloves Fresh Garlic (peeled)\n Salt To Taste\n _____\n For Salad\n Dry Hearts Of Romaine Lettuce\n Fresh Parmesan Cheese",
    url: "http://thepioneerwoman.com/cooking/2009/02/my-caesar-salad-part-2/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3303593380_a4c07e0196.jpg",
    cookTime: "PT",
    recipeYield: "4",
    datePublished: "2009-02-20",
    prepTime: "PT1H30M",
    description:
      "(For Part 1 of the recipe, click here.)    Wow. If I'd known how difficult it would be for me to successfully whip up a batch...",
  },
  {
    name: "Garlic Cheese Bread",
    ingredients:
      "3-1/2 cups Grated Cheddar Cheese\n3/4 cups Monterey Jack Cheese, Grated\n1/2 cup Grated Parmesan Cheese\n1/2 cup (Real) Mayonnaise\n4 whole Green Onions, White And Light Green Parts Minced\n1 dash Salt\n1 loaf Crusty French Bread\n1 stick Butter\n4 cloves Garlic, Finely Minced",
    url: "http://thepioneerwoman.com/cooking/2009/03/garlic-cheese-bread/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3321945944_b6bcb68809.jpg",
    cookTime: "PT10M",
    recipeYield: "4",
    datePublished: "2009-03-02",
    prepTime: "PT15M",
    description:
      "    If you don't love the bubbly wonderfulness of piping hot garlic cheese bread, write this date on your calendar. Because t...",
  },
  {
    name: "A Quick, Easy Salad",
    ingredients:
      " Lettuce, Shredded Or Chopped\n Wonton Strips\n Shredded White Meat Chicken\n Red Wine Vinaigrette\n Fresh Ginger, Minced",
    url: "http://thepioneerwoman.com/cooking/2009/02/a-quick-easy-salad/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3308504979_34b60c8c8b.jpg",
    cookTime: "PT15M",
    recipeYield: "4",
    datePublished: "2009-02-25",
    prepTime: "PT15M",
    description:
      "Here's a delicious salad Cody the Sushi Chef likes to serve to sushi eaters before they start digging into the good stuff.   ...",
  },
  {
    name: "Pasta alla Marlboro Man",
    ingredients:
      "2 Tablespoons Olive Oil\n1/2 whole Large Onion, Diced\n2 cloves Garlic, Minced\n2 pounds Ground Beef\n Salt To Taste\n Freshly Ground Black Pepper, To Taste\n1 teaspoon (generous) Ground Thyme\n2 cans (14 Ounce) Whole Tomatoes\n1/4 cup Freshly Grated Parmesan Cheese\n1-1/2 pound (to 2 Pounds) Rigatoni",
    url: "http://thepioneerwoman.com/cooking/2009/03/monday-night-dinner-pasta-alla-marlboro-man/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3321931516_5475e22404.jpg",
    cookTime: "PT1H",
    recipeYield: "6",
    datePublished: "2009-03-02",
    prepTime: "PT10M",
    description:
      "    Marlboro Man loves this pasta because, well, it's mostly meat. I started making it for him years ago because he's not cra...",
  },
  {
    name: "Ginger Steak Salad",
    ingredients:
      " MARINADE INGREDIENTS:\n2 Tablespoons Soy Sauce\n1 Tablespoon Sherry\n2 cloves Garlic, Minced\n2 teaspoons Brown Sugar\n1 whole Rib-eye, Strip, Or Sirloin Steak\n2 Tablespoons Olive Oil\n _____\n FOR SALAD DRESSING:\n2 Tablespoons Olive Oil\n2 Tablespoons Soy Sauce\n2 Tablespoons White Sugar\n1 Tablespoon Lime Juice\n2 cloves Garlic, Finely Diced\n1 Tablespoon Fresh Ginger, Minced\n1/2 whole Jalapeno, Seeded And Diced\n _____\n SALAD INGREDIENTS:\n2 whole Green Onions\n8 ounces, weight Salad Greens (baby Lettuce, Endive, Radiccio, Etc.)",
    url: "http://thepioneerwoman.com/cooking/2009/03/ginger-steak-salad/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3327439142_56c49630a6.jpg",
    cookTime: "PT5M",
    recipeYield: "1",
    datePublished: "2009-03-04",
    prepTime: "PT45M",
    description:
      "    I absolutely love steak salads, pretty much in any form. Here's an Asian-inspired creation I whipped up yesterday while M...",
  },
  {
    name: "Pasta with Roasted Red Pepper Sauce",
    ingredients:
      "3 whole Red Bell Peppers\n2 Tablespoons Pine Nuts (optional)\n2 Tablespoons Olive Oil\n1/2 whole Medium Onion, Finely Diced\n2 cloves Garlic, Minced\n1/2 cup Heavy Cream\n Flat Leaf Parsley, Finely Minced\n Fresh Parmesan, Shaved Or Grated\n1/2 pound (to 1 Pound) Pasta:  Orecchiette, Penne, Fusilli, Etc.",
    url: "http://thepioneerwoman.com/cooking/2009/03/pasta-with-roasted-red-pepper-sauce-groan/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3381261890_6e85ff6eec.jpg",
    cookTime: "PT30M",
    recipeYield: "4",
    datePublished: "2009-03-24",
    prepTime: "PT15M",
    description:
      "    I love pasta. Always have. Always will. And I prefer pasta sauce without meat---a throwback to my vegetarian days in sunn...",
  },
  {
    name: "Macaroni &amp; Cheese",
    ingredients:
      "4 cups Dried Macaroni\n1 whole Egg Beaten\n1/4 cup (1/2 Stick Or 4 Tablespoons) Butter\n1/4 cup All-purpose Flour\n2-1/2 cups Whole Milk\n2 teaspoons (heaping) Dry Mustard, More If Desired\n1 pound Cheese, Grated\n1/2 teaspoon Salt, More To Taste\n1/2 teaspoon Seasoned Salt, More To Taste\n1/2 teaspoon Ground Black Pepper\n Optional Spices: Cayenne Pepper, Paprika, Thyme",
    url: "http://thepioneerwoman.com/cooking/2009/04/macaroni-cheese/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3420436668_f56c6724c41.jpg",
    cookTime: "PT15M",
    recipeYield: "6",
    datePublished: "2009-04-07",
    prepTime: "PT15M",
    description:
      "    There's nothing that can be said.     But there is much to be eaten.     Come, my child...come. I shall take you by the h...",
  },
  {
    name: "Hyacinth\u2019s Everything Cookies",
    ingredients:
      "1-1/2 cup Butter\n1-1/2 cup Sugar\n2 cups Brown Sugar\n4 whole Eggs\n2 teaspoons Vanilla\n4-1/4 cups Flour\n4 teaspoons Baking Soda\n1 teaspoon Salt\n1-1/3 cup Quick Oats\n3 cups Quaker Granola (oats And Honey, Yellow Box)\n1-1/2 cup Chopped Pecans\n1-1/2 cup Cran-raisins\n1-1/2 cup Apricots",
    url: "http://thepioneerwoman.com/cooking/2007/12/hyacinths_everything_cookies/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/2095801146_c625ca3f77.jpg",
    cookTime: "PT10M",
    recipeYield: "36",
    datePublished: "2007-12-08",
    prepTime: "PT20M",
    description:
      "  Hyacinth came over with her brood and her ingredients and her dadgum Bosch Mixer the other day, and we spent the afternoon ...",
  },
  {
    name: "How To\u2026Make Blender Hollandaise Sauce",
    ingredients:
      "2 sticks Butter\n3 whole Eggs, Separated\n1 whole (juice Of) Lemon\n Cayenne Pepper To Taste",
    url: "http://thepioneerwoman.com/cooking/2008/09/how-tomake-blender-hollandaise-sauce/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/09/Make-Blender-Hollandaise-Sauce.jpg",
    cookTime: "PT",
    recipeYield: "4",
    datePublished: "2008-09-04",
    prepTime: "PT15M",
    description:
      "Here's another brief \"How-To,\" excerpted from my Eggs Benedict recipe from last summer. The How-To's are rapidly building str...",
  },
  {
    name: "Good Morning Muffins",
    ingredients:
      " Muffin Batter\n4 cups Flour\n1/2 cup Sugar\n2 Tablespoons Baking Powder\n1/2 cup Shortening (can Use 1/4 Cup Shortening With 1/4 Cup Butter)\n2 cups Orange Marmalade\n1 cup Orange Juice\n1 teaspoon Vanilla\n2 whole Eggs, Beaten\n _____\n Topping Ingredients\n3/4 cups Sugar\n1 teaspoon Cinnamon\n1 teaspoon Nutmeg\n1 Tablespoon (plus 1 Teaspoon) Melted Butter\n1/4 teaspoon Salt\n Wheat Germ (optional)",
    url: "http://thepioneerwoman.com/cooking/2009/04/good-morning-muffins/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3442628948_7960ef5058.jpg",
    cookTime: "PT22M",
    recipeYield: "12",
    datePublished: "2009-04-14",
    prepTime: "PT20M",
    description:
      "\u00a0      Yummy muffins. Yum.    I've made these several times---usually using all shortening, but a couple of times (today...",
  },
  {
    name: "Quiche",
    ingredients:
      '3/4 pounds Thick Cut, Peppered Bacon\n1 stick Butter\n1 whole Large (or 2 Medium) Onions, Very Thinly Sliced\n2 boxes (5 Oz. Each) White Mushrooms, Washed And Sliced\n1 can (14 Oz.) Quartered Artichoke Hearts\n1 whole Pie Crust, Or Half A Recipe Of "Sylvia\'s Perfect Pie Crust"\n7 whole Eggs\n1-1/2 cup Heavy Cream\n2 cups Grated Swiss Cheese\n Salt And Pepper, to taste\n Optional:  Fresh Parsley, Fresh Chives',
    url: "http://thepioneerwoman.com/cooking/2009/04/quiche/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3459342012_c55937eb23.jpg",
    cookTime: "PT1H",
    recipeYield: "8",
    datePublished: "2009-04-20",
    prepTime: "PT45M",
    description:
      "    Fact: Real cowboys don't eat quiche.    But that just leaves more for me!    I've been making this deep-dish quiche---and...",
  },
  {
    name: "Roasted Potato Wedges",
    ingredients:
      " Potatoes (number And Variety Of Your Choosing:  Russets Work Well)\n1/4 cup (approximately) Olive Oil\n Salt To Taste\n Fresh Herbs, to taste\n Optional Ingredients\n2 Tablespoons Melted Butter\n Garlic, Minced\n2 Tablespoons (to 3 Tablespoons) Balsamic Vinegar\n Cayenne Pepper\n Paprika",
    url: "http://thepioneerwoman.com/cooking/2009/04/roasted-potato-wedges/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3444352661_5b05aebd98.jpg",
    cookTime: "PT35M",
    recipeYield: "6",
    datePublished: "2009-04-15",
    prepTime: "PT15M",
    description:
      "    Look. Not everything you cook has to be a long, precise recipe. Sometimes when you're cooking steak or brisket or roasted...",
  },
  {
    name: "Orange-Marmalade Rolls",
    ingredients:
      ' FOR THE ROLLS:\n1/2 whole Recipe Of "Cinnamon Roll Dough"\n8 Tablespoons Orange Marmalade\n1/2 cup Melted Butter\n1 cup Brown Sugar\n1/2 teaspoon Kosher Salt\n _____\n ORANGE GLAZE:\n2 pounds Powdered Sugar\n6 Tablespoons Melted Butter\n1/2 cup Milk\n1/2 cup Orange Juice\n1 dash Salt',
    url: "http://thepioneerwoman.com/cooking/2009/04/orange-marmalade-rolls/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3484056677_17c369a245.jpg",
    cookTime: "PT18M",
    recipeYield: "4",
    datePublished: "2009-04-29",
    prepTime: "PT1H",
    description:
      "    I'm still glowing from the memories of a weekend of delicious baking with Smitten Kitchen, the ultra sophisticated, pregn...",
  },
  {
    name: "What I Made for Lunch on Saturday",
    ingredients:
      "1-1/2 pound Linguine\n1 bunch Cilantro, Roughly Chopped\n4 whole Green Onions, Thinly Sliced\n _____\n PEANUT DRESSING:\n5 cloves Garlic, Peeled\n1 cup Chunky Peanut Butter\n3/4 cups Low Sodium Soy Sauce\n4 Tablespoons (to 5 Tablespoons) Red Wine Vinegar\n6 Tablespoons Brown Sugar\n3 Tablespoons (to 4 Tablespoons) Red Chile Oil\n1/4 cup Olive Oil\n1/4 cup Sesame Oil (can Also Use 1/2 Cup Olive Oil)\n1 Tablespoon (to 2 Tablespoons) Toasted Sesame Oil (sold In The Asian Aisle)",
    url: "http://thepioneerwoman.com/cooking/2009/04/what-i-made-for-lunch-on-saturday/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2009/04/what-i-made-for-lunch-on-saturday.jpg",
    cookTime: "PT10M",
    recipeYield: "4",
    datePublished: "2009-04-27",
    prepTime: "PT20M",
    description:
      "It's a long and lengthy process to explain why I cooked what I cooked for the Smitten Kitchen get together at the Lodge on Sa...",
  },
  {
    name: "Perfect Pancakes",
    ingredients:
      "3 cups Plus 2 Tablespoons Cake Flour\n1/2 teaspoon Salt\n3 Tablespoons Baking Powder\n2 Tablespoons Sugar\n2 cups Milk\n2 whole Large Eggs\n3 teaspoons Vanilla\n4 Tablespoons Butter\n Extra Butter\n Maple Or Pancake Syrup",
    url: "http://thepioneerwoman.com/cooking/2009/05/perfect-pancakes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3498323787_4f66d4a477.jpg",
    cookTime: "PT15M",
    recipeYield: "6",
    datePublished: "2009-05-04",
    prepTime: "PT15M",
    description:
      "  I have SUCH a love-hate relationship with pancakes on so many levels.    1. I LOVE the way good pancakes taste.  2. I HATE ...",
  },
  {
    name: "Strawberry Shortcake Cake",
    ingredients:
      " Cake\n1-1/2 cup Flour\n3 Tablespoons Cornstarch\n1/2 teaspoon Salt\n1 teaspoon Baking Soda\n9 Tablespoons Unsalted Butter, Softened\n1-1/2 cup Sugar\n3 whole Large Eggs\n1/2 cup Sour Cream, Room Temperature\n1 teaspoon Vanilla\n _____\n Icing\n1/2 pound Cream Cheese, Room Temperature\n2 sticks Unsalted Butter\n1-1/2 pound Powdered Sugar, Sifted\n1 teaspoon Vanilla\n1 pound Strawberries",
    url: "http://thepioneerwoman.com/cooking/2009/05/strawberry-shortcakecake/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3520747438_7b4a71997e.jpg",
    cookTime: "PT45M",
    recipeYield: "10",
    datePublished: "2009-05-11",
    prepTime: "PT1M",
    description:
      "      IMPORTANT: Be sure to use a cake pan that's at least 2 inches deep! Before baking, the batter should not fill the pan m...",
  },
  {
    name: "Monkey Bread",
    ingredients:
      "3 cans Buttermilk Biscuits (the Non-flaky Ones)\n1 cup Sugar\n2 teaspoons (to 3 Teaspoons) Cinnamon\n2 sticks Butter\n1/2 cup Brown Sugar",
    url: "http://thepioneerwoman.com/cooking/2009/05/monkey-bread/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3525856182_55e8673405_o.jpg",
    cookTime: "PT40M",
    recipeYield: "8",
    datePublished: "2009-05-12",
    prepTime: "PT20M",
    description:
      '    Hi, guys. It\'s PW. My friend Ryan, whom I affectionately call "Pastor Ryan" because I know it makes him mad (even though ...',
  },
  {
    name: "Ryan\u2019s Bolognese Sauce",
    ingredients:
      "1/2 cup Olive Oil\n1-1/2 cup Grated Carrots\n1 whole Large Red Onion, Diced\n2 pounds Ground Beef\n2 Tablespoons Dried Oregano\n2 Tablespoons Dried Basil Flakes\n1 can (6 Ounce) Tomato Paste\n5 cloves Garlic, Minced\n1 cup (to 2 Cups) Red Wine\n2 Tablespoons Worcestershire\n2 cans (28 Ounce) Whole Tomatoes\n1 cup Milk\n Salt And Pepper, to taste\n Fresh Parmesan Cheese",
    url: "http://thepioneerwoman.com/cooking/2009/05/ryans-bolognese-sauce/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3544277679_04bcd3011b.jpg",
    cookTime: "PT2H",
    recipeYield: "8",
    datePublished: "2009-05-20",
    prepTime: "PT30M",
    description:
      "    The thing about my recent houseguest Ryan is that he's an exceptional cook. Bottom line: the guy just flat knows what he'...",
  },
  {
    name: "Linguine with Chicken Thighs",
    ingredients:
      "1 package Linguine (or Your Favorite Pasta)\n Olive Oil\n8 whole Boneless, Skinless Chicken Thighs\n1 whole Small To Medium Sized Onion, Chopped\n3 whole (to 4 Whole) Garlic Cloves, Minced\n1/2 cup White Wine (or Chicken Broth)\n2 cans (15 Oz. Can) Crushed Tomatoes\n Salt To Taste\n Pepper To Taste\n1 pinch Sugar\n Fresh Parsley, Chopped, to taste\n Fresh Basil, Chopped, to taste\n Parmesan Cheese To Taste",
    url: "http://thepioneerwoman.com/cooking/2008/06/linguine-with-chicken-thighs/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/06/Linguine-with-Chicken-Thighs.jpg",
    cookTime: "PT45M",
    recipeYield: "6",
    datePublished: "2008-06-16",
    prepTime: "PT15M",
    description:
      "Stand back, because I have to get something off my chest: I LOVE BONELESS, SKINLESS CHICKEN THIGHS!    Okay, I'm back and I f...",
  },
  {
    name: "Leftover Brisket Tostadas",
    ingredients:
      " Beef Brisket Leftovers\n1 package Small Corn Tortillas\n1 can (about 16 Oz.) Refried Beans\n1 can (about 8 Oz.) Hot Tomato Sauce Or Chili Sauce (optional)\n Pico De Gallo\n Shredded Cheese\n Lettuce\n Sour Cream\n1 whole Avocado\n Vegetable Oil",
    url: "http://thepioneerwoman.com/cooking/2008/01/leftover_brisket_make_tostadas/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/2189916287_31398ea690.jpg",
    cookTime: "PT5M",
    recipeYield: "6",
    datePublished: "2008-01-15",
    prepTime: "PT15M",
    description:
      "    There are few things more exciting, culinarily speaking, than slaving away over a dish for hours, then finding a way to u...",
  },
  {
    name: "Homemade Pasta",
    ingredients: "6 whole Eggs\n3 cups All-purpose Flour",
    url: "http://thepioneerwoman.com/cooking/2009/05/homemade-pasta/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3554264376_c89c28af44.jpg",
    cookTime: "PT2M",
    recipeYield: "6",
    datePublished: "2009-05-22",
    prepTime: "PT30M",
    description:
      "    Make Ryan's homemade pasta this weekend! It's the right thing to do.     First, I must say this: there is NOTHING like ho...",
  },
  {
    name: "The Bread, In His Words",
    ingredients:
      "20 ounces, weight Bread Flour (all Purpose Is Okay, Too) - About 4 Cups\n8 ounces, fluid Water\n4 ounces, fluid Melted Butter With Chopped Herbs Of Choice.  We Like Chives, Rosemary Or Thyme.\n2 teaspoons Salt\n1 teaspoon Active Or Instant Yeast (if Active, It Would Be Best To Sprinkle Yeast Over The Water To Let It Start To Work Before Mixing It In)",
    url: "http://thepioneerwoman.com/cooking/2009/05/the-bread-in-his-words/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2009/05/the-bread-in-his-words.jpg",
    cookTime: "PT1H",
    recipeYield: "8",
    datePublished: "2009-05-20",
    prepTime: "PT2H",
    description:
      "The night Ryan arrived on the ranch---actually, probably less than an hour after he walked through the door---he whipped up s...",
  },
  {
    name: "Quick &amp; Easy (and Yummy) Apple Tart",
    ingredients:
      "1 whole Sheet Puffed Pastry, Cut Into Half Or Thirds\n4 whole Apples, Cored, Halved, And Sliced, But Not Peeled\n1 cup Brown Sugar\n1/4 teaspoon Salt",
    url: "http://thepioneerwoman.com/cooking/2009/05/quick-easy-and-yummy-apple-tart/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3572299089_13b117c14c.jpg",
    cookTime: "PT20M",
    recipeYield: "4",
    datePublished: "2009-05-28",
    prepTime: "PT20M",
    description:
      "    If you want to make a very quick, very easy dessert that also happens to yield impressive results, look no farther than t...",
  },
  {
    name: "Homemade Chicken Strips",
    ingredients:
      '1 package Chicken Breasts, Cut Into Strips (sometimes Called "tenders" Or "strips")\n Buttermilk\n1-1/2 cup Flour\n2 teaspoons (to 3 Teaspoons) Lawry\'s Seasoning Salt (or Spices Of Your Choosing)\n Vegetable Oil',
    url: "http://thepioneerwoman.com/cooking/2009/05/quickie-homemade-chicken-strips/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3562866750_b547b599db.jpg",
    cookTime: "PT3M",
    recipeYield: "6",
    datePublished: "2009-05-25",
    prepTime: "PT30M",
    description:
      "    Question: What happens when Pioneer Woman and Marlboro Man's four kids leave the house for the weekend to stay at their g...",
  },
  {
    name: "Key Lime Pie",
    ingredients:
      " Crust\n18 whole Graham Crackers (the 4-section Large Pieces)\n1/3 cup Sugar\n1/3 cup Butter, Melted\n _____\n Filling\n1 Tablespoon (heaping) Lime Zest\n1/2 cup Lime Juice\n2 whole Egg Yolks\n1 can (14 Oz) Sweetened Condensed Milk",
    url: "http://thepioneerwoman.com/cooking/2009/06/key-lime-pie-sorta/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3605504608_1a9d7b5c9a.jpg",
    cookTime: "PT1H",
    recipeYield: "12",
    datePublished: "2011-03-14",
    prepTime: "PT15M",
    description:
      "    Strict Key Lime Adherents: Please look away. I haven't got time for the pain.    Everyone else: Let's make Key Lime Pie! ...",
  },
  {
    name: "My Spinach Salad",
    ingredients:
      "3 whole Eggs\n7 slices Thick Cut, Peppered Bacon\n1 whole Red Onion, Small\n1 package Mushrooms, White Button\n8 ounces, weight Baby Spinach, Washed Dried And Stems Removed\n3 Tablespoons Reserved Bacon Grease\n3 Tablespoons Red Wine Vinegar\n2 teaspoons Sugar\n1/2 teaspoon Dijon Mustard\n1 dash Salt",
    url: "http://thepioneerwoman.com/cooking/2009/06/the-best-spinach-salad-ever/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3611769621_e169fe9fbb.jpg",
    cookTime: "PT",
    recipeYield: "6",
    datePublished: "2009-06-10",
    prepTime: "PT30M",
    description:
      "    Okay, look. I don't say that very often.     I've said it about this Lasagna. And I mean it there. And I said it about my...",
  },
  {
    name: "Gazpacho",
    ingredients:
      "2 cloves Garlic, Minced\n1/2 whole Red Onion, Diced\n1 whole Large Cucumber, Diced\n5 whole Roma Tomatoes, Diced\n1 whole Zucchini, Diced\n2 stalks Celery, Diced\n1 dash Salt To Taste\n1/4 gallon Tomato Juice\n1/4 cup Extra Virgin Olive Oil\n1/8 cup Red Wine Vinegar\n2 Tablespoons White Sugar\n6 dashes Tabasco\n1 dash Black Pepper To Taste",
    url: "http://thepioneerwoman.com/cooking/2009/06/gazpacho/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3627414812_435420c1ed.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2009-06-15",
    prepTime: "PT15M",
    description:
      '    I\'ve had a love affair with Gazpacho since I saw the movie "Violets are Blue" with Kevin Kline and Sissy Spacek in 1986. ...',
  },
  {
    name: "Huevos Ree-os",
    ingredients:
      "3 whole Eggs\n3 slices Cheese (provolone, Swiss, Cheddar, Jack, Etc.)\n1 cup Picante Sauce\n1 Tablespoon Butter\n Salt To Taste\n2 whole Flour Tortillas\n2 Tablespoons Fresh Cilantro (optional)",
    url: "http://thepioneerwoman.com/cooking/2009/06/huevos-ree-os/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3630714366_2677ce34c8.jpg",
    cookTime: "PT5M",
    recipeYield: "1",
    datePublished: "2009-06-16",
    prepTime: "PT5M",
    description:
      "I wanted to call them Huevos Rancheros, but...they aren't Huevos Rancheros. Oh, I guess they could pass for Huevos Rancheros ...",
  },
  {
    name: "Cooking With Ryan: Pasta Carbonara",
    ingredients:
      "1 pound Bacon Or Pancetta\n1 pound Linguine Pasta\n1 whole Large Onion\n8 cloves (to 12 Cloves) Garlic\n1 cup White Wine (or Substitute Another Cup Of Stock)\n1 cup Chicken Stock\n4 whole Eggs\n1-1/2 cup Parmesan Cheese\n1 bunch Parsley\n1/2 stick Butter\n1 Tablespoon (to 2 Tablespoons) Black Pepper",
    url: "http://thepioneerwoman.com/cooking/2008/09/cooking-with-ryan-pasta-carbonara/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/09/Pasta-Carbonara.jpg",
    cookTime: "PT40M",
    recipeYield: "6",
    datePublished: "2008-09-22",
    prepTime: "PT30M",
    description:
      "Pastor Ryan's nice. He didn't want you guys to miss a brand spankin' new recipe this morning just because I spent an entire w...",
  },
  {
    name: "Migas",
    ingredients:
      "4 whole Corn Tortillas\n1 whole Jalapeno, Seeds And Membranes Removed, Finely Diced\n4 whole Plum Tomatoes, Roughly Chopped\n1 whole Green Pepper, Roughly Chopped\n1 whole Red Bell Pepper, Roughly Chopped\n1 whole Medium Onion, Chopped\n12 whole Large Eggs\n1 cups Cotija Cheese, Grated (may Use Cheddar, Monterey Jack, Etc.)\n1/3 cup Cilantro, Chopped\n1 Tablespoon Butter\n1 Tablespoon Olive Oil\n1/4 cup Half-and-half",
    url: "http://thepioneerwoman.com/cooking/2008/09/ree-drummond-migas/",
    image: "http://static.thepioneerwoman.com/cooking/files/2008/09/Migas.jpg",
    cookTime: "PT15M",
    recipeYield: "6",
    datePublished: "2008-09-29",
    prepTime: "PT15M",
    description:
      "I first had Migas in Austin, Texas, when I was visiting my sister, Betsy, and her techie-nerd husband, Matt. Because I woke u...",
  },
  {
    name: "Marguerites",
    ingredients:
      " Ritz Crackers\n Peanut Butter, to taste\n Large Marshmallows (one Per Cracker)",
    url: "http://thepioneerwoman.com/cooking/2008/06/tres-gourmet-quick-sticky-delicious-marguerites/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/06/Marguerites.jpg",
    cookTime: "PT5M",
    recipeYield: "12",
    datePublished: "2008-06-20",
    prepTime: "PT15M",
    description:
      "This is a quickie, folks, but a yummy quickie, which, as you all know, is the best kind of quickie there is. When my friend, ...",
  },
  {
    name: "Cooking With Pastor Ryan: Delicious Mexican Lasagna",
    ingredients:
      "4 cups Unprepared Rice\n6 cups (to 8 Cups) Low Sodium Chicken Broth/stock\n4 whole (to 8) Tomatoes (up To You)\n2 whole (to 3) Onions (up To You)\n8 cloves (to 14 Cloves) Of Garlic (up To You)\n Butter\n Taco Seasoning (or Chili Powder, Paprika, And Cumin) To Taste\n1 can (to 2 Cans) Black Or Pinto Beans (up To You)\n3 pounds Lean Ground Beef\n2 jars (16 Ounce) Salsa Verde\n Flour Tortillas\n3 packages (16 Ounces) Mexican Cheese Blend\n1 jar (16 Ounce) Enchilada Sauce\n3 cans Corn, Drained\n Sour Cream, to taste\n Cilantro, to taste",
    url: "http://thepioneerwoman.com/cooking/2008/08/cooking-with-pastor-ryan-delicious-mexican-lasagna/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/08/Delicious-Mexican-Lasagna.jpg",
    cookTime: "PT35M",
    recipeYield: "8",
    datePublished: "2008-08-14",
    prepTime: "PT45M",
    description:
      "Hello PW peeps. It's Ryan, and I'm so excited to share this recipe with you because this has truly been the go-to meal of the...",
  },
  {
    name: "Cookie Dough and Candy",
    ingredients: " Refrigerator Cookie Dough\n Miniature Chocolate Candies",
    url: "http://thepioneerwoman.com/cooking/2008/01/cookie_dough_and_candy_/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/2185333452_95dae87640.jpg",
    cookTime: "PT8M",
    recipeYield: "24",
    datePublished: "2008-01-11",
    prepTime: "PT10M",
    description:
      "    Before I post my next nutritious, delicious, real-food recipe, let's have a little fun! Remembering an easy, after-school...",
  },
  {
    name: "Classic Hummus",
    ingredients:
      "3 cans (14.5 Oz.) Garbanzo Beans, Rinsed And Drained\n1/3 cup Plus 1 Tablespoon Tahini\n3 cloves Garlic, Chopped, Or More To Taste\n1/2 whole Lemon, Juiced\n1/2 teaspoon Ground Cumin, Or More To Taste\n Salt To Taste\n Fresh Basil Or Italian Parsley\n3 Tablespoons To 5 Tablespoons Cold Water\n1 Tablespoon Olive Oil",
    url: "http://thepioneerwoman.com/cooking/2009/05/classic-hummus/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/3466470722_5210d8450b.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2009-05-07",
    prepTime: "PT15M",
    description:
      "    I am positively in love with Hummus, a classic Middle Eastern puree of chickpeas and sesame paste, and for me it\u2019s one ...",
  },
  {
    name: "Cinnamon Rolls 101",
    ingredients:
      "1 quart Whole Milk\n1 cup Vegetable Oil\n1 cup Sugar\n2 packages Active Dry Yeast, 0.25 Ounce Packets\n8 cups (Plus 1 Cup Extra, Separated) All-purpose Flour\n1 teaspoon (heaping) Baking Powder\n1 teaspoon (scant) Baking Soda\n1 Tablespoon (heaping) Salt\n Plenty Of Melted Butter\n2 cups Sugar\n Generous Sprinkling Of Cinnamon\n _____\n MAPLE FROSTING:\n1 bag Powdered Sugar\n2 teaspoons Maple Flavoring\n1/2 cup Milk\n1/4 cup Melted Butter\n1/4 cup Brewed Coffee\n1/8 teaspoon Salt",
    url: "http://thepioneerwoman.com/cooking/2007/06/cinammon_rolls_/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/333323997_04bd8d6c53.jpg",
    cookTime: "PT30M",
    recipeYield: "8",
    datePublished: "2007-06-01",
    prepTime: "PT2H",
    description:
      "Hey! I have a great idea. Why not start a holiday tradition of delivering these delicious cinnamon rolls to your friends and ...",
  },
  {
    name: "Sherried Tomato Soup",
    ingredients:
      "6 Tablespoons Melted Butter\n1 whole Medium Onion, Diced\n1 bottle (46 Oz.) Tomato Juice\n2 cans (14 Oz. Cans) Diced Tomatoes\n1 Tablespoon (up To 3 Tablespoons) Chicken Base\n3 Tablespoons (up To 6 Tablespoons) Sugar\n1 pinch Salt\n Black Pepper To Taste\n1 cup Cooking Sherry\n1-1/2 cup Heavy Cream\n Chopped Fresh Parsley\n Chopped Fresh Basil",
    url: "http://thepioneerwoman.com/cooking/2008/02/sherried_tomato_soup/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/2280706626_f92e7d7707_o.jpg",
    cookTime: "PT20M",
    recipeYield: "6",
    datePublished: "2008-02-20",
    prepTime: "PT10M",
    description:
      "    My friend, Cathy, makes a version of this soup and any time I've eaten it, my eyes have closed and I've sighed with a dee...",
  },
  {
    name: "Christmas Rum Cake",
    ingredients:
      " FOR THE CAKE:\n1 box (about 18 Oz.) Yellow Cake Mix\n1 package (3.5 Oz.) INSTANT Vanilla Pudding Mix\n4 whole Eggs\n1/2 cup Cold Water\n1/2 cup Canola Oil\n1/2 cup Rum (dark Or Light Is Fine)\n1 cup Chopped Pecans\n Brown Sugar (optional)\n _____\n GLAZE\n1-1/2 stick Butter\n1/4 cup Water\n1-1/2 cup Sugar\n3/4 cups Rum",
    url: "http://thepioneerwoman.com/cooking/2008/12/christmas-rum-cake/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/12/3091271500_7c54a3064f_o1.jpg",
    cookTime: "PT1H",
    recipeYield: "12",
    datePublished: "2008-12-08",
    prepTime: "PT30M",
    description:
      "This is my mother-in-law's recipe, one she prepares every Christmas, and while it contains some ingredients some might find p...",
  },
  {
    name: "Apple Dumplings",
    ingredients:
      "2 whole Granny Smith Apples\n2 cans (8 Oz. Cans) Crescent Rolls\n2 sticks Butter\n1-1/2 cup Sugar\n1 teaspoon Vanilla\n Cinnamon, To Taste\n1 can (12 Oz.) Mountain Dew Soda",
    url: "http://thepioneerwoman.com/cooking/2008/02/apple_dumplings/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/2295946365_d753a3a686_o.jpg",
    cookTime: "PT40M",
    recipeYield: "6",
    datePublished: "2008-02-28",
    prepTime: "PT10M",
    description:
      '    My mom visited a month ago, and just before she left I called her and said, "Mom?" The End.    No, that wasn\'t really the...',
  },
  {
    name: "My Favorite Christmas Cookies",
    ingredients:
      " Cookies:\n2/3 cups Shortening\n3/4 cups Sugar\n1/2 teaspoon Grated Orange Or Lemon Zest\n1/2 teaspoon Vanilla\n1 whole Egg\n4 teaspoons Milk\n2 cups Flour\n1-1/2 teaspoon Baking Powder\n1/4 teaspoon Salt\n _____\n EGG YOLK GLAZE:\n1 whole Egg Yolk\n1 teaspoon Water\n2 drops (to 3) Food Coloring\n _____\n WHITE DECORATIVE ICING:\n1 bag 2 Lb Powdered Sugar\n1/4 cup Milk\n2 Tablespoons Egg White (optional)",
    url: "http://thepioneerwoman.com/cooking/2007/12/my_favorite_christmas_cookies_from_childhood_and_beyond/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/2092514328_a16b1a5263.jpg",
    cookTime: "PT6M",
    recipeYield: "36",
    datePublished: "2007-12-07",
    prepTime: "PT2H",
    description:
      "    I don't even know what that title means. These things just pour out of me sometimes. What I want to do now is share with ...",
  },
  {
    name: "Asian Noodle Salad",
    ingredients:
      " SALAD INGREDIENTS:\n1 package Linguine Noodles, Cooked, Rinsed, And Cooled\n1/2 head Sliced Napa Cabbage, Or More To Taste\n1/2 head Sliced Purple Cabbage, Or More To Taste\n1/2 bag Baby Spinach, Or More To Taste\n1 whole Red Bell Pepper, Sliced Thin\n1 whole Yellow Bell Pepper, Sliced Thin\n1 whole Orange Bell Pepper, Thinly Sliced\n1 bag Bean Sprouts (also Called Mung Bean Sprouts)\n Chopped Cilantro, Up To 1 Bunch, To Taste\n3 whole Scallions, Sliced\n3 whole Cucumbers Peeled And Sliced\n1 can (about 10 Oz.) Whole Cashews, Lightly Toasted In Skillet\n _____\n FOR THE DRESSING:\n1 whole Lime, Juiced\n8 Tablespoons Olive Oil\n8 Tablespoons Soy Sauce\n2 Tablespoons (up To 3 Tablespoons) Sesame Oil\n1/3 cup Brown Sugar\n3 Tablespoons Fresh Ginger Chopped\n2 cloves Garlic, Chopped\n2 whole Hot Peppers Or Jalapenos, Chopped\n Chopped Cilantro",
    url: "http://thepioneerwoman.com/cooking/2008/03/my_most_favorite_salad_ever_ever_ever_ever/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/03/Asian-Noodle-Salad.jpg",
    cookTime: "PT10M",
    recipeYield: "6",
    datePublished: "2008-03-09",
    prepTime: "PT30M",
    description:
      "In the spring of 2004, I planted myself a mean garden. And boy howdy was I ever ambitious. Aside from over thirty tomato plan...",
  },
  {
    name: "Sigrid\u2019s Carrot Cake",
    ingredients:
      " FOR CAKE:\n2 cups Sugar\n1 cup Vegetable Oil\n4 whole Eggs\n2 cups All-purpose Flour\n1/2 teaspoon Salt\n1 teaspoon Baking Soda\n1 teaspoon Baking Powder\n1 teaspoon Ground Cinnamon\n2 cups Grated Carrots\n _____\n For Icing\n1 stick Regular Butter, Softened\n1 package (8 Oz) Cream Cheese\n1 pound Powdered Sugar\n2 teaspoons Vanilla\n1 cup Pecans, Chopped Finely",
    url: "http://thepioneerwoman.com/cooking/2008/03/sigrids-carrot-cake-perfect-for-easter/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/2347442719_194336baaf_o1.jpg",
    cookTime: "PT50M",
    recipeYield: "12",
    datePublished: "2008-03-20",
    prepTime: "PT20M",
    description:
      "    I'm so sorry I've been away so long, my friends. I have 497 reasons I could give you, not the least of which is the fact ...",
  },
  {
    name: "Onion Strings",
    ingredients:
      "1 whole Large Onion\n2 cups Buttermilk\n2 cups All-purpose Flour\n1 Tablespoon (scant) Salt\n1/4 teaspoon (to 1/2 Teaspoon) Cayenne Pepper\n1 quart (to 2 Quarts) Canola Oil\n Black Pepper To Taste",
    url: "http://thepioneerwoman.com/cooking/2008/03/onion-strings-oh-yeah-baby/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/03/Onion-Strings.jpg",
    cookTime: "PT15M",
    recipeYield: "2",
    datePublished: "2008-03-30",
    prepTime: "PT1H",
    description:
      "Please note: This is one of my all-time favorite recipes. Thank you for listening.    But lawsy mercy, ladies and gentlemen. ...",
  },
  {
    name: "Apple Brown Betty",
    ingredients:
      "3 whole Apples, Preferably Granny Smith\n7 slices Wheat Bread\n3/4 cups Regular Salted Butter\n1-1/2 cup Packed Brown Sugar\n3 Tablespoons (to 4 Tablespoons) Water",
    url: "http://thepioneerwoman.com/cooking/2008/04/apple-brown-betty-sweet-light-yummy/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/04/Apple-Brown-Betty.jpg",
    cookTime: "PT45M",
    recipeYield: "8",
    datePublished: "2008-04-05",
    prepTime: "PT20M",
    description:
      "This is one of those \"I don't have anything in my fridge or pantry\" recipes that's easy to throw together at the last minute....",
  },
  {
    name: "Risotto",
    ingredients:
      "2 cups Parmesan, Romano, Or Asiago Cheese (or A Mixture Of All Three)\n3 cloves (to 4 Cloves) Garlic\n1/2 whole Large Onion\n1 Tablespoon Olive Oil\n1 Tablespoon Butter\n1 pound Arborio Rice\n7 cups (to 8 Cups) Chicken Broth\n1 cup (to 1 1/2 Cups) Heavy Cream\n1 Tablespoon (to 2 Tablespoons) Chives, Chopped\n Salt And Pepper, to taste",
    url: "http://thepioneerwoman.com/cooking/2008/04/risotto-one-of-lifes-great-triumphs/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/04/Risotto.jpg",
    cookTime: "PT45M",
    recipeYield: "8",
    datePublished: "2008-04-21",
    prepTime: "PT15M",
    description:
      "The first time I ever tasted Risotto, I was living and working in Los Angeles, which means black pumps only left my feet for ...",
  },
  {
    name: "Springy Flower Pot Desserts: A Blast From My Past",
    ingredients:
      "1 whole Pound Cake\n1 gallon Ice Cream\n1 package Oreo Cookies\n1 package Gummy Worms\n Other Things You'll Need:\n Small Clay Flower Pots, Lead-free\n Straws\n Fresh Cut Flowers",
    url: "http://thepioneerwoman.com/cooking/2008/04/springy-flower-pot-desserts-a-blast-from-my-past/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/04/Springy-Flower-Pot-Desserts.jpg",
    cookTime: "PT",
    recipeYield: "6",
    datePublished: "2008-04-30",
    prepTime: "PT30M",
    description:
      "Back on the golf course, I used to have a traditional back-to-school party for my friends and me every year. Because I appare...",
  },
  {
    name: "Pineapple Skewered Shrimp",
    ingredients:
      "1 pound (to 2 Pounds) Peeled, De-veined Jumbo Shrimp\n1 can (about 20 Oz.) Pineapple Chunks (or 1 Whole Fresh Pineapple)\n _____\n MARINADE:\n1/2 cup (to 1 Cup) Teriyaki Sauce\n2 whole (to 3 Whole) Green Onions, Sliced\n3 Tablespoons Garlic, Chopped, to taste\n1 Tablespoon (to 2 Tablespoons) Sugar (optional)\n Pineapple Juice (reserved From Can If Using Canned Pineapple)\n1 dash Lemon Juice\n1 dash Kosher Salt\n _____\n Optional Ingredients\n Lime Zest\n Crushed Red Pepper Flakes\n Minced Fresh Ginger\n Jalapenos Seeded And Chopped",
    url: "http://thepioneerwoman.com/cooking/2008/05/yummy-easy-pineapple-skewered-shrimp-or-is-it-skewered-pineapple-shrimp/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/05/Pineapple-Skewered-Shrimp.jpg",
    cookTime: "PT5M",
    recipeYield: "4",
    datePublished: "2008-05-08",
    prepTime: "PT2H",
    description:
      "That very question will keep me up tonight.    Who loves shrimp, raise your hand? (I'm raising my hand.) Summer's on its way,...",
  },
  {
    name: "Apricot Bars",
    ingredients:
      "1-1/2 cup Flour\n1-1/2 cup Oats\n1 cup Packed Brown Sugar\n1 teaspoon Baking Powder\n1/2 teaspoon Salt\n1-3/4 stick Salted Butter, Cut Into Pieces\n1 jar (10-12 Ounce) Apricot Preserves",
    url: "http://thepioneerwoman.com/cooking/2008/05/apricot-bars-are-they-for-breakfastor-dessert/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/05/Apricot-Bars.jpg",
    cookTime: "PT40M",
    recipeYield: "24",
    datePublished: "2008-05-12",
    prepTime: "PT15M",
    description:
      "You know, I'd prefer to think of the food I gobble not in terms of the neat, tidy roles they fit into. I don't like to slap l...",
  },
  {
    name: "Pots de Creme",
    ingredients:
      "12 ounces, weight Semi-Sweet Chocolate Chips\n4 whole Eggs, Room Temperature\n2 teaspoons Vanilla Extract (or Cognac, Grand Marnier, Etc.)\n1 pinch Salt\n8 ounces, fluid Strong Hot Coffee",
    url: "http://thepioneerwoman.com/cooking/2008/05/easy-delicious-and-yes-elegant-pots-de-creme/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/05/Pots-de-Creme.jpg",
    cookTime: "PT",
    recipeYield: "2",
    datePublished: "2008-05-19",
    prepTime: "PT4H",
    description:
      "Okay, first of all, here's how you do NOT pronounce Pots de Creme: \"Pawts deh Creem.\"    Here's how you DO pronounce Pots de ...",
  },
  {
    name: "Pan-Fried Ribeye Steak",
    ingredients:
      "2 pieces (about 8 Oz. Each) Ribeye Steak\n1 Tablespoon Lawry's Seasoning Salt\n3 Tablespoons Lemon And Pepper Seasoning\n1 teaspoon Kosher Salt\n Freshly Ground Black Pepper, To Taste\n1 Tablespoon Olive Oil\n1 Tablespoon Butter",
    url: "http://thepioneerwoman.com/cooking/2008/02/pan-fried_ribeye_steak_heaven_in_a_skillet/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/02/Pan-Fried-Ribeye-Steak.jpg",
    cookTime: "PT5M",
    recipeYield: "2",
    datePublished: "2008-02-12",
    prepTime: "PT10M",
    description:
      "We've roasted the garlic. We've made Roasted Garlic Mashed Potatoes. Now it's time to answer the question of the day: Where's...",
  },
  {
    name: "Olive Cheese Bread.",
    ingredients:
      "1 loaf French Bread\n6 ounces, weight Pimiento-stuffed Green Olives\n6 ounces, weight Black Olives\n2 stalks Green Onions (scallions)\n1 stick Butter, Room Temperature\n1/2 cup Mayonnaise\n3/4 pounds Monterey Jack Cheese, Grated",
    url: "http://thepioneerwoman.com/cooking/2007/06/olive_cheese_br/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/549578972_8f563494d5.jpg",
    cookTime: "PT25M",
    recipeYield: "12",
    datePublished: "2007-06-15",
    prepTime: "PT10M",
    description:
      "    Mmmmm, this is yummy. Three or four years ago, I prepared roasted beef tenderloin, tomato-basil pasta salad, roasted aspa...",
  },
  {
    name: "Orange Mini-Muffins with Brown Sugar Glaze",
    ingredients:
      "2 sticks Salted Butter, Softened\n1 cup White Sugar\n2 cups Flour\n2 whole Eggs\n1 cup Buttermilk\n1 teaspoon Baking Soda\n2 whole Oranges, Juiced And Zested\n1 cup Brown Sugar (lightly Packed)",
    url: "http://thepioneerwoman.com/cooking/2007/06/orange_mini-muf/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/583483362_260a1e0ed4.jpg",
    cookTime: "PT15M",
    recipeYield: "36",
    datePublished: "2007-06-22",
    prepTime: "PT20M",
    description:
      "    Dang, these are good. My mom originally got the recipe for these strangely delightful orange muffins from an old Helen Co...",
  },
  {
    name: "Oatmeal Crispies",
    ingredients:
      "1 cup Shortening (Crisco)\n1 cup Packed Brown Sugar\n1 cup Sugar\n2 whole Eggs\n1 teaspoon Vanilla\n1-1/2 cup All-purpose Flour\n1 teaspoon Salt\n1 teaspoon Baking Soda\n3 cups Quick Oats\n1/2 cup Finely Chopped Pecans",
    url: "http://thepioneerwoman.com/cooking/2007/09/marlboro_mans_favorite_cookies_oatmeal_crispies/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/1400288230_2008657c55.jpg",
    cookTime: "PT10M",
    recipeYield: "24",
    datePublished: "2007-09-18",
    prepTime: "PT20M",
    description:
      '    "Oatmeal Crispies"---such a nice, wholesome ring to it. I swear, if you\'d told me fifteen years ago, as I was traipsing a...',
  },
  {
    name: "Sleepin\u2019 in Omelette",
    ingredients:
      "6 whole Onion Rolls\n1 cup Grated Cheddar Cheese\n8 ounces, weight Cream Cheese\n1-1/2 stick Butter\n10 whole Eggs\n2 cups Milk\n1 teaspoon Chopped Chives\n1/2 teaspoon Dry Mustard\n1/2 teaspoon Salt\n1 dash Cayenne Pepper",
    url: "http://thepioneerwoman.com/cooking/2008/05/sleepin-in-omlette/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/05/Sleepin\u2019-in-Omelette.jpg",
    cookTime: "PT1H",
    recipeYield: "8",
    datePublished: "2008-05-21",
    prepTime: "PT20M",
    description:
      '*Real-time update below!* This is another one of those "Cookin\' in Real Time with P-Dub" recipes...you know, the kind where I...',
  },
  {
    name: "Tomato-Basil Pizza, Two Ways",
    ingredients:
      "1 whole Recipe Of Your Favorite Pizza Dough (homemade Or Store-bought Is Just Fine, Too)\n1 jar Prepared Pesto\n Kosher Salt To Taste\n Fresh Mozzarella\n Roma Tomatoes\n Olive Oil\n Fresh Basil Leaves\n Fresh Parmesan Cheese",
    url: "http://thepioneerwoman.com/cooking/2008/06/tomato-basil-pizza-two-ways-an-experiment/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/06/Tomato-Basil-Pizza-Two-Ways.jpg",
    cookTime: "PT13M",
    recipeYield: "8",
    datePublished: "2008-06-25",
    prepTime: "PT30M",
    description:
      "Because I'm a bored, desperate housewife living in the middle of nowhere, I like to conduct frequent experiements and side-by...",
  },
  {
    name: "Yogurt Cream and Berries",
    ingredients:
      "1-1/2 cup Plain, Unflavored Yogurt\n1-1/4 cup Heavy Cream\n1/2 cup (to 3/4 Cup) Brown Sugar\n Blueberries (or Other Fruit Of Your Choice)",
    url: "http://thepioneerwoman.com/cooking/2008/06/yogurt-cream-and-berries/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/06/Yogurt-Cream-and-Berries.jpg",
    cookTime: "PT",
    recipeYield: "4",
    datePublished: "2008-06-30",
    prepTime: "PT3H",
    description:
      "My mom visited a few years ago during a time when my baby was actually a baby and not a four-year-old like he is now, when I ...",
  },
  {
    name: "Yogurt-Marmalade Cake",
    ingredients:
      "1-1/2 cup All-purpose Flour\n1/2 teaspoon Salt\n2 teaspoons Baking Powder\n1 cup (heaping) Plain, Lowfat Yogurt\n1 cup Sugar\n3 whole Eggs\n1 teaspoon Vanilla\n1 whole Zest Of Lemon\n1/2 cup Canola Oil\n _____\n ORANGE GLAZE:\n1/2 cup Prepared Orange Marmelade\n1/4 cup Yogurt",
    url: "http://thepioneerwoman.com/cooking/2008/07/yogurt-marmalade-cake-to-die-for/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/07/Yogurt-Marmalade-Cake.jpg",
    cookTime: "PT45M",
    recipeYield: "12",
    datePublished: "2008-07-17",
    prepTime: "PT15M",
    description:
      "When I was a child, I was scared of orange marmalade. Unlike the super sweet grape and strawberry jam to which my tastebuds h...",
  },
  {
    name: "Veggie &amp; Cheese Bagel",
    ingredients:
      "1/2 block Of  Cream Cheese\n2 whole (to 3) Green Onions\n Tomatoes\n Cucumbers\n Avocado\n Red Onion\n1 whole Everything Bagel (or Any Kind Of Bagel)\n Alfalfa Sprouts\n 1 Or 2 Slices Of Muenster Cheese\n Slice Of Cheddar Cheese\n Lettuce",
    url: "http://thepioneerwoman.com/cooking/2008/07/cool-crisp-and-delicious-veggie-cheese-bagel/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/2708738404_9a0c279d99_o.jpg",
    cookTime: "PT",
    recipeYield: "1",
    datePublished: "2012-07-16",
    prepTime: "PT15M",
    description:
      "It...is...SO hot here. I mean, HOT. It's hot, too. Have I mentioned it's hot? And I'll tell you one other thing: it's HOT! I'...",
  },
  {
    name: "Spicy Shredded Pork",
    ingredients:
      "4 pounds (up To 7 Pounds) Pork Shoulder\n1 teaspoon Dried Oregano\n1 teaspoon Ground Cumin\n1 teaspoon Chili Powder\n1 Tablespoon (to 2 Tablespoons) Salt\n Pepper To Taste\n3 cloves (to 4 Cloves) Garlic\n1 Tablespoon (to 2 Tablespoons) Olive Oil\n2 Tablespoons (to 3 Tablespoons) White Wine Vinegar\n1/4 cup Brown Sugar\n1 whole Onion\n Lime Wedges",
    url: "http://thepioneerwoman.com/cooking/2008/08/spicy-shredded-pork/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/08/Spicy-Shredded-Pork.jpg",
    cookTime: "PT4H",
    recipeYield: "8",
    datePublished: "2008-08-06",
    prepTime: "PT20M",
    description:
      "\u00a0  Oh my goodness, am I ever in love with pork shoulder. Wait a minute...did I just say that? That I'm in love with pork...",
  },
  {
    name: "Roasted Ricotta Roma Tomatoes",
    ingredients:
      "8 whole Roma Tomatoes, Halved\n1 bunch Fresh Italian Parsley\n1 bunch Fresh Basil\n2 cloves To 3 Cloves Garlic, Minced\n1-1/2 cup Ricotta Cheese\n Ritz Crackers Or Bread Crumbs\n Kosher Salt To Taste\n Olive Oil",
    url: "http://thepioneerwoman.com/cooking/2008/07/roasted-ricotta-roma-tomatoes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/07/Roasted-Ricotta-Roma-Tomatoes.jpg",
    cookTime: "PT30M",
    recipeYield: "6",
    datePublished: "2008-07-31",
    prepTime: "PT30M",
    description:
      "Hi, guys. It's P-Dub. In Austin. And because he knew I was nine hours away from my kitchen on the ranch so that I may care fo...",
  },
  {
    name: "Pepitas!",
    ingredients:
      "1 whole Pumpkin, Gutted\n Olive Oil\n Table Salt\n Any Seasonings You Want, Such As Cayenne, Curry Powder, Etc. (optional)",
    url: "http://thepioneerwoman.com/cooking/2008/10/pepitos/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/10/Pepitas.jpg",
    cookTime: "PT1H",
    recipeYield: "12",
    datePublished: "2008-10-07",
    prepTime: "PT30M",
    description:
      "We've gutted the pumpkin, roasted and pureed it, and we've even made some delicious, creamy \"pumpkin butter\". But we don't wa...",
  },
  {
    name: "Peach Crisp with Maple Cream Sauce",
    ingredients:
      "5 whole To 6 Whole Fresh Peaches (best When Not Overly Ripe Or Soft)\n1 cup Flour\n1/2 cup Sugar\n1/2 cup Light Brown Sugar, Firmly Packed\n1/2 teaspoon Ground Cinnamon\n1/2 teaspoon Ground Nutmeg\n1/4 teaspoon Salt\n1 stick Butter (1/2 Cup)\n1/2 whole Lemon\n7 Tablespoons Real Maple Syrup, Divided\n1-1/2 cup Whipping Cream\n3 Tablespoons Light Corn Syrup",
    url: "http://thepioneerwoman.com/cooking/2007/07/peach_crisp_wit/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2007/07/Peach-Crisp-with-Maple-Cream-Sauce.jpg",
    cookTime: "PT45M",
    recipeYield: "8",
    datePublished: "2007-07-09",
    prepTime: "PT20M",
    description:
      "I don't know what to say. This is Gee's recipe, and it's so good, I...I...I feel like crying. Hold on, I'm going to go have a...",
  },
  {
    name: "Pasta Primavera",
    ingredients:
      "1 cup Bite-sized Broccoli Pieces (up To 1 1/2 Cups)\n1/2 whole Onion, Diced Finely\n3 cloves To 4 Cloves Garlic, Chopped Finely\n2 whole Medium To Large Carrots, Sliced On The Bias (diagonally)\n2 whole Medium Zucchini, Sliced On The Bias (diagonally)\n1 whole Medium Yellow Squash (optional)\n1 container (about 5 Oz.) White Button Or Baby Porcini Mushrooms, Roughly Sliced\n1 whole Red Bell Pepper, Sliced Into Strips\n4 Tablespoons Butter\n2 Tablespoons Olive Oil\n1 pound Pasta (I Like Penne)\n FOR THE SAUCE:\n1/4 cup Dry White Wine (up To 1/2 Cup), Optional (replace With Additional Broth If Not Using)\n1/2 cup Low Sodium Chicken Broth\n1 cup Whipping (heavy) Cream\n1 cup Half-and-half\n1/2 cup Grated Parmesan Cheese\n5 leaves Basil (or More To Taste), Plus Extra For Garnish\n1/2 cup Frozen Peas",
    url: "http://thepioneerwoman.com/cooking/2007/08/pioneer_womans_/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/1022172587_a3014f6a9b.jpg",
    cookTime: "PT20M",
    recipeYield: "4",
    datePublished: "2007-08-06",
    prepTime: "PT30M",
    description:
      "    Chick Food Alert: This one's for the ladies, gentlemen. I say that because, well, there's no meat in it. And I know there...",
  },
  {
    name: "Whiskey-Glazed Carrots",
    ingredients:
      "1 stick Butter, Divided\n2 pounds (to 3 Pounds) Carrots, Peeled And Cut Into Thick Circles\n1/2 cup Jack Daniels Or Other Whiskey\n3/4 cups (to 1 Cup) Brown Sugar\n1/2 teaspoon (to 1 Teaspoon) Salt\n Freshly Ground Pepper, to taste",
    url: "http://thepioneerwoman.com/cooking/2008/10/whiskey-glazed-carrots-major-league-yum/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/10/Whiskey-Glazed-Carrots.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2008-10-13",
    prepTime: "PT10M",
    description:
      "Oh, how I love Glazed Carrots---they're so easy to make and yield such a delightful and impressive result. Bright, colorful, ...",
  },
  {
    name: "Pumpkin Cake with Whiskey Whipped Cream",
    ingredients:
      "1 cup Golden Raisins\n1 cup Whiskey (optional)\n2-1/2 cups Flour\n1 teaspoon Salt\n1 teaspoon Baking Powder\n1/2 teaspoon Baking Soda\n2 teaspoons Cinnamon\n1/8 teaspoon Ground Nutmeg\n1 stick Softened Butter\n1-1/2 cup Sugar\n3 whole Eggs\n1-1/4 cup Plain, Unflavored Yogurt\n1 cup Canned Or Fresh Pumpkin Puree\n _____\n WHISKEY WHIPPED CREAM:\n1 cup Heavy Cream, Very Cold\n2 Tablespoons (to 3 Tablespoons) Sugar\n2 Tablespoons Whiskey",
    url: "http://thepioneerwoman.com/cooking/2008/10/pumpkin-cake-with-whiskey-whipped-cream/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/10/Pumpkin-Cake-with-Whiskey-Whipped-Cream.jpg",
    cookTime: "PT45M",
    recipeYield: "12",
    datePublished: "2008-10-20",
    prepTime: "PT1H",
    description:
      "I did something terrible. I went and used all my frozen pumpkin puree. I didn't mean to, but I've been making pumpkin recipes...",
  },
  {
    name: "Baked Acorn Squash",
    ingredients:
      "2 whole Acorn Squash\n Kosher Salt To Taste\n2 Tablespoons Butter\n2 Tablespoons (to 3 Tablespoons) Brown Sugar\n Pure Maple Syrup",
    url: "http://thepioneerwoman.com/cooking/2008/10/delicious-baked-acorn-squash/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/10/baked-acorn-squash.jpg",
    cookTime: "PT1H15M",
    recipeYield: "6",
    datePublished: "2008-10-27",
    prepTime: "PT15M",
    description:
      "And...the holiday dishes continue here on P-Dub Cooks. I wanted to begin cooking Thanksgiving food early this year so you'd h...",
  },
  {
    name: "Spicy Orange Garlic Shrimp",
    ingredients:
      "24 pieces (26-30 Per Pound) Deveined Shrimp\n2 cloves (to 4 Cloves) Garlic\n3/4 cups Orange Juice\n1/2 teaspoon Ground Cayenne Pepper\n1 teaspoon Old Bay Seasoning\n3 Tablespoons Salted Butter, Divided",
    url: "http://thepioneerwoman.com/cooking/2008/11/spicy-orange-garlic-shrimp/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/11/Spicy-Orange-Garlic-Shrimp.jpg",
    cookTime: "PT10M",
    recipeYield: "4",
    datePublished: "2008-11-01",
    prepTime: "PT20M",
    description:
      "By Pastor Ryan.    Often times, when it comes to cooking, simple is best. This is simple and it's the best.    For the longes...",
  },
  {
    name: "Turnip Gratin",
    ingredients:
      "4 whole Turnips\n3 cloves (to 4 Cloves) Garlic\n2 cups Gruyere Cheese\n4 Tablespoons (to 6 Tablespoons) Butter\n Chicken Broth\n Heavy Cream\n Salt And Pepper, to taste\n Fresh Herbs, to taste",
    url: "http://thepioneerwoman.com/cooking/2008/11/turnip-gratin/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/11/turnip-gratin.jpg",
    cookTime: "PT20M",
    recipeYield: "6",
    datePublished: "2008-11-10",
    prepTime: "PT20M",
    description:
      "To check out all my archived Thanksgiving recipes, flip through the PW Thanksgiving Recipe File. I have all the basics there:...",
  },
  {
    name: "Pasta with Eggplant",
    ingredients:
      "1 pound Fusilli\n3 whole Medium Eggplants\n Olive Oil\n1 whole Medium Onion, Diced\n4 cloves Garlic, Finely Chopped\n28 ounces, weight Diced Tomatoes\n Fresh Basil\n Salt And Pepper, to taste\n Parmesan Cheese To Taste",
    url: "http://thepioneerwoman.com/cooking/2008/11/when-marlboro-man-leaves-town-pasta-with-eggplant/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/11/pasta-with-eggplant.jpg",
    cookTime: "PT30M",
    recipeYield: "6",
    datePublished: "2008-11-06",
    prepTime: "PT15M",
    description:
      "I really miss Marlboro Man and the girls. They're on their fifth day of being out of the country, and while I've been keeping...",
  },
  {
    name: "Salad Tacos",
    ingredients:
      "16 whole Taco Shells\n2 pounds Ground Beef\n3 Tablespoons Taco Seasoning\n1 can (4 Ounce) Tomato Paste\n Salt To Taste\n1 can (14.5 Ounce) Beans (kidney, Pinto, Chili), Undrained\n1/2 cup Hot Water\n1 head Green Leaf Lettuce, Sliced Very Thin\n1 cup Grape Tomatoes, Halved (or Diced Regular Tomatoes)\n1 cup Grated Cheese (cheddar, Jack, Or Cheddar/jack)\n FOR THE DRESSING:\n1/4 cup Mayonnaise\n1/4 cup Sour Cream\n1/4 cup Salsa\n1 Tablespoon Ranch Dressing Mix (optional)\n Extra Hot Sauce (optional)\n Crushed Tortilla Chips (optional)",
    url: "http://thepioneerwoman.com/cooking/2013/01/salad-tacos/",
    image: "http://static.thepioneerwoman.com/cooking/files/2013/01/tacos.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2013-01-31",
    prepTime: "PT10M",
    description:
      "I made these tacos before my family and I left for our trip to Colorado, and we devoured every bite. They're pretty much the ...",
  },
  {
    name: "Chocolate Valentines",
    ingredients:
      "2-1/4 cups All-purpose Flour\n1 teaspoon Baking Powder\n1/4 teaspoon Salt\n1/2 teaspoon Ground Cinnamon\n1/4 cup Unsweetened Cocoa Powder\n1 cup Firmly Packed Brown Sugar\n1 whole Large Egg\n1-1/2 teaspoon Vanilla Extract\n Powdered Sugar, For Sifting\n Alphabet Stencils\n2 sticks (1 Cup) Unsalted Butter, Softened",
    url: "http://thepioneerwoman.com/cooking/2013/02/chocolate-valentines/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2013/02/cookies2.jpg",
    cookTime: "PT12M",
    recipeYield: "16",
    datePublished: "2013-02-04",
    prepTime: "PT2H",
    description:
      "Note from PW: Since Valentine's Day is next week, I wanted to bring this cookie recipe up from the archives so you'd have ple...",
  },
  {
    name: "Perfect Pie Crust",
    ingredients:
      "1-1/2 cup Crisco (vegetable Shortening)\n3 cups All-purpose Flour\n1 whole Egg\n5 Tablespoons Cold Water\n1 Tablespoon White Vinegar\n1 teaspoon Salt",
    url: "http://thepioneerwoman.com/cooking/2007/12/p-p-p-pie_crust_and_its_p-p-p-perfect/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/2129488793_8b0bde6c2d.jpg",
    cookTime: "PT",
    recipeYield: "1",
    datePublished: "2007-12-22",
    prepTime: "PT45M",
    description:
      "    I receive recipes from readers quite frequently, and I read each and every one. I figure if someone's going to take the t...",
  },
  {
    name: "Penne a la Betsy!",
    ingredients:
      "3/4 pounds Penne Pasta\n1 pound Shrimp\n3 Tablespoons Butter\n3 Tablespoons Olive Oil\n1 whole Onion (small)\n2 cloves Garlic\n1/2 cup White Wine, Or To Taste\n1 can Tomato Sauce (8 Oz)\n1 cup Heavy Cream\n Fresh Parsley, to taste\n Fresh Basil - To Taste\n Salt To Taste\n Pepper To Taste",
    url: "http://thepioneerwoman.com/cooking/2007/09/cooking_with_my_punk-ass_little_sister_penne_a_la_betsy/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2007/09/Penne-a-la-Betsy.jpg",
    cookTime: "PT25M",
    recipeYield: "6",
    datePublished: "2007-09-27",
    prepTime: "PT25M",
    description:
      "    Ah, is there anything sweeter on earth than having your punk-ass little sister visit? Mine's visiting this week, which me...",
  },
  {
    name: "Fancy Mac and Cheese",
    ingredients:
      "16 ounces, weight White Button Or Cremini Mushrooms, Quartered\n Olive Oil, For Drizzling\n Kosher Salt And Black Pepper To Taste\n8 slices Thick Cut Bacon\n2 whole Yellow Onions, Peeled, Halved, And Thinly Sliced\n5 Tablespoons Butter, Plus More For Buttering The Pan\n1/2 cup Grated Parmesan Cheese\n1/2 cup Grated Gruyere Cheese\n1/2 cup Grated Fontina Cheese\n4 ounces, weight Goat Cheese (chevre)\n1-1/2 pound Macaroni\n1/4 cup All-purpose Flour\n2 cups Whole Milk\n1/2 cup Half-and-half\n2 whole Eggs, Beaten\n4 ounces, weight Crumbled Gorgonzola Or Other Blue Cheese",
    url: "http://thepioneerwoman.com/cooking/2013/02/fancy-mac-and-cheese/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2013/02/fancymac.jpg",
    cookTime: "PT40M",
    recipeYield: "12",
    datePublished: "2013-02-08",
    prepTime: "PT20M",
    description:
      "This is one of my all-time favorite recipes, and I make it on tomorrow's episode of my Food Network show. It also appears in ...",
  },
  {
    name: "Thai Chicken Wraps",
    ingredients:
      "2 whole Boneless, Skinless Chicken Breasts (breast Halves)\n OPTION 1 MARINADE/SAUCE\n1 Tablespoon Rice Wine Vinegar\n1/4 cup Soy Sauce\n1 teaspoon Pure Sesame Oil\n1 teaspoon Hot Chili Oil\n Juice Of 2 Limes\n1 Tablespoon Minced Fresh Ginger\n2 Tablespoons Brown Sugar (optional)\n1 teaspoon Cornstarch\n2 Tablespoons Honey (or Brown Sugar)\n Peanut Or Canola Oil For Frying\n Peanut Sauce\n1/2 cup Peanut Butter (crunch/chunky Is Good!)\n3 Tablespoons Soy Sauce\n3 Tablespoons Honey\n1/2 teaspoon Hot Chili Oil\n1 teaspoon Crushed Red Pepper\n Juice Of 2 Limes\n Water, As Needed For Thinning\n Wraps\n2 whole Whole-wheat Tortillas\n Green Leaf Or Other Lettuce, Leaves Left Whole Or Shredded\n1 whole Large Carrot, Cut Into Thin Strips Or Julienne\n1/2 whole Cucumber, Seeds Scraped Out, Cut Into Strips\n Cilantro Leaves\n Shelled Peanuts\n Optional Additions:\n Bean Sprouts\n Alfalfa Sprouts\n Baby Spinach Leaves\n Thinly Sliced Red Onion\n Sliced Green Onion\n Blanched Asparagus\n Salt And Pepper, to taste\n Sriracha",
    url: "http://thepioneerwoman.com/cooking/2013/02/thai-chicken-wraps/",
    image: "http://static.thepioneerwoman.com/cooking/files/2013/02/wraps.jpg",
    cookTime: "PT10M",
    recipeYield: "2",
    datePublished: "2013-02-12",
    prepTime: "PT20M",
    description:
      "I made these yummy, crunchy, flavorful wraps after church last Sunday for the following reasons:    1. I was alone in the hou...",
  },
  {
    name: "Strawberry Oatmeal Bars",
    ingredients:
      "1-3/4 stick Cold Butter, Cut Into Pieces\n1-1/2 cup All-purpose Flour\n1-1/2 cup Oats (quick Or Regular)\n1 cup Packed Brown Sugar\n1 teaspoon Baking Powder\n1/4 teaspoon Salt\n1 jar (10 To 12 Ounce) Strawberry Preserves",
    url: "http://thepioneerwoman.com/cooking/2013/02/strawberry-oatmeal-bars/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2013/02/strawberryoatmeal.jpg",
    cookTime: "PT40M",
    recipeYield: "12",
    datePublished: "2013-02-20",
    prepTime: "PT10M",
    description:
      "These are a very simple variation of these snacks that I posted back in the very early days of The Pioneer Woman Cooks. I mad...",
  },
  {
    name: "Fried Fruit Pies",
    ingredients:
      "3 cups All-purpose Flour\n1/4 teaspoon Salt\n3 Tablespoons Sugar\n1/2 cup Vegetable Shortening\n2 whole Eggs, Beaten In Separate Dishes\n1 cup Buttermilk\n Canned Pie Filling Of Your Choice\n Shortening Or Vegetable Oil For Frying\n Powdered Sugar (for Sprinkling)",
    url: "http://thepioneerwoman.com/cooking/2013/02/fried-fruit-pies/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2013/02/fruitpies.jpg",
    cookTime: "PT30M",
    recipeYield: "8",
    datePublished: "2013-02-18",
    prepTime: "PT1H30M",
    description:
      "I made fried pies on my Food Network show Saturday morning.     The aforementioned statement is extremely confusing, consider...",
  },
  {
    name: "Lemon Rosemary Scones",
    ingredients:
      " SCONES\n3 cups All-purpose Flour\n2/3 cups Sugar\n5 teaspoons Baking Powder\n1/4 teaspoon Salt\n2 sticks (1/2 Pound) Unsalted Butter, Chilled And Cut Into Pieces\n1 whole Large Egg\n1 cup Heavy Cream\n1 Tablespoon Finely Minced Fresh Rosemary\n Zest Of 1 Lemon\n GLAZE\n5 cups Powdered Sugar, Sifted\n1/2 cup Whole Milk, More If Needed For Thinning\n Zest And Juice From 1 Lemon\n1 teaspoon Finely Minced Fresh Rosemary\n Dash Of Salt",
    url: "http://thepioneerwoman.com/cooking/2013/02/lemon-rosemary-scones/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2013/02/lrscones.jpg",
    cookTime: "PT18M",
    recipeYield: "24",
    datePublished: "2013-02-25",
    prepTime: "PT20M",
    description:
      "I made these wonderfully delightful scones for my holiday cookbook as part of a big Mother's Day spread, but I knew the day I...",
  },
  {
    name: "Beef Fajitas",
    ingredients:
      "1 whole Beef Flank Steak\n1/2 cup Olive Oil\n3 Tablespoons Worcestershire Sauce\n1/3 cup Lime Juice, Fresh Squeezed\n3 cloves Garlic, Minced\n1 Tablespoon Cumin\n1 Tablespoon Chili Powder\n1/2 teaspoon Red Pepper Flakes\n1 teaspoon Salt\n1/2 teaspoon Black Pepper\n1 Tablespoon Sugar\n2 whole Medium Onions, Halved And Sliced\n1 whole Red Bell Pepper, Sliced\n1 whole Orange Bell Pepper, Sliced\n1 whole Green Bell Pepper, Sliced\n1 whole Yellow Bell Pepper, Sliced\n Oil, For Frying\n Flour Tortillas, Warmed\n Cheese (grated Cheddar/jack Or Crumbled Queso Fresco)\n Salsa\n Sour Cream\n Cilantro Leaves",
    url: "http://thepioneerwoman.com/cooking/2013/03/beef-fajitas/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2013/03/fajitas1.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2013-03-04",
    prepTime: "PT2H",
    description:
      "When I get a hankering for beef fajitas, I pretty much can think of nothing else until I eat them. I made them over the weeke...",
  },
  {
    name: "Recipes from Tomorrow\u2019s Show!",
    ingredients:
      "1 pint Red Grape Tomatoes, Halved\n1 pint Yellow Grape Tomatoes, Halved\n1/2 whole Red Onions, Sliced Very Thin\n1/4 cup Olive Oil\n3 Tablespoons Balsamic Vinegar\n3 Tablespoons Minced Fresh Parsley\n1 Tablespoon (heaping) Jarred Pesto\n1/4 teaspoon Sugar\n1 clove Garlic, Pressed\n Salt And Black Pepper\n2 heads Iceberg Lettuce, Cut Into Chunks",
    url: "http://thepioneerwoman.com/cooking/2013/03/recipes-from-tomorrows-show-2/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2013/02/beattheclock.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2013-03-01",
    prepTime: "PT10M",
    description:
      "Tomorrow's Food Network episode is one of my favorite to date, as our good friends Butch and Julie come over for dinner and t...",
  },
  {
    name: "Peppermint Patty Cake",
    ingredients:
      " Cake\n2 sticks 1 Cup Butter\n4 Tablespoons (heaping) Cocoa Powder\n1 cup Water, Boiling\n10 whole Miniature Peppermint Patties, Unwrapped\n2 cups All-purpose Flour\n2 cups Sugar\n1/4 teaspoon Salt\n1/2 cup Buttermilk\n1 teaspoon Baking Soda\n2 whole Eggs\n1/2 teaspoon Vanilla Extract\n1/4 teaspoon Mint Extract\n FROSTING\n2 sticks 1 Cup Butter\n4 Tablespoons (heaping) Cocoa Powder\n Dash Of Salt\n1/3 cup Whole Milk\n8 whole Miniature Peppermint Patties, Unwrapped\n1 pound Powdered Sugar, Sifted\n Extra Miniature Peppermint Patties, For Decorating (optional)\n1/4 teaspoon Mint Extract",
    url: "http://thepioneerwoman.com/cooking/2013/03/peppermint-patty-cake/",
    image: "http://static.thepioneerwoman.com/cooking/files/2013/03/patty.jpg",
    cookTime: "PT20M",
    recipeYield: "16",
    datePublished: "2013-03-08",
    prepTime: "PT15M",
    description:
      "I apologize in advance for the length of this post. But you're going to get two cake recipes out of the deal! So please conti...",
  },
  {
    name: "Drop Biscuits and Sausage Gravy",
    ingredients:
      " Biscuits\n3 cups All-purpose Flour\n2 Tablespoons Baking Powder\n1/2 teaspoon Salt\n1-1/2 stick (3/4 Cup) Cold Butter, Cut Into Pieces\n1-1/4 cup Butermilk\n SAUSAGE GRAVY\n1 pound Breakfast Sausage, Hot Or Mild\n1/3 cup All-purpose Flour\n4 cups Whole Milk\n1/2 teaspoon Seasoned Salt\n2 teaspoons Black Pepper, More To Taste",
    url: "http://thepioneerwoman.com/cooking/2013/03/drop-biscuits-and-sausage-gravy/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2013/03/bisgrav.jpg",
    cookTime: "PT30M",
    recipeYield: "12",
    datePublished: "2013-03-11",
    prepTime: "PT10M",
    description:
      "Late Saturday afternoon, after Marlboro Man had returned home with the soccer-playing girls, and I had returned home with the...",
  },
  {
    name: "The Best Lasagna. Ever.",
    ingredients:
      "1-1/2 pound Ground Beef\n1 pound Hot Breakfast Sausage\n2 cloves Garlic, Minced\n2 cans (14.5 Ounce) Whole Tomatoes\n2 cans (6 Ounce) Tomato Paste\n2 Tablespoons Dried Parsley\n2 Tablespoons Dried Basil\n1 teaspoon Salt\n3 cups Lowfat Cottage Cheese\n2 whole Beaten Eggs\n1/2 cup Grated (not Shredded) Parmesan Cheese\n2 Tablespoons Dried Parsley\n1 teaspoon Salt\n1 pound Sliced Mozzarella Cheese\n1 package (10 Ounce) Lasagna Noodles\n (add 1/2 Teaspoon Salt And 1 Tablespoon Olive Oil To Pasta Water)",
    url: "http://thepioneerwoman.com/cooking/2007/06/the_best_lasagn/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/387114468_aafd1be340.jpg",
    cookTime: "PT30M",
    recipeYield: "12",
    datePublished: "2007-06-01",
    prepTime: "PT30M",
    description:
      " I'm sure everyone has his own favorite go-to lasagna recipe, but I'd just like to offer that this really is The Best Lasagna...",
  },
  {
    name: "Pico de Gallo and Guacamole",
    ingredients:
      " FOR THE PICO DE GALLO:\n5 whole Plum (roma) Tomatoes\n1/2 whole Large (or 1 Small) Onion\n3 whole Jalapeno Peppers\n Cilantro\n Lime Juice\n Salt To Taste\n _____\n FOR THE GUACAMOLE:\n3 whole Avocados\n Pico De Gallo\n Lime Juice\n Salt To Taste",
    url: "http://thepioneerwoman.com/cooking/2007/06/pico_de_gallo_a/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/460395800_7e2653ea4a2.jpg",
    cookTime: "PT",
    recipeYield: "8",
    datePublished: "2007-06-02",
    prepTime: "PT30M",
    description:
      "This isn't a meal, but it's yummy. Oh, I absolutely love Pico de Gallo---the freshness of tomatoes, the clean flavor of cilan...",
  },
  {
    name: "The Marlboro Man Sandwich",
    ingredients:
      "1 whole Large (or 2 Small) Onions\n2 sticks Butter (lots And Lots Of Butter)\n2 pounds (to 3 Pounds) Cube Steak (tenderized Round Steak That's Been Extra Tenderized)\n Lawry's Seasoned Salt (or Similar Seasoned Salt)\n1/2 cup (approximately) Worcestershire Sauce\n Tabasco Sauce, To Taste\n4 whole French/deli Rolls (earthgrains Are Best!)",
    url: "http://thepioneerwoman.com/cooking/2007/06/marlboro_mans_f/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/445199228_8f4145eedc.jpg",
    cookTime: "PT15M",
    recipeYield: "4",
    datePublished: "2007-06-02",
    prepTime: "PT15M",
    description:
      "  Marlboro Man loves this sandwich. It uses very simple ingredients and is so rich and satisfying, he'll forego food for week...",
  },
  {
    name: "The Best Chocolate Sheet Cake. Ever.",
    ingredients:
      " FOR THE CAKE:\n2 cups Flour\n2 cups Sugar\n1/4 teaspoon Salt\n4 Tablespoons (heaping) Cocoa\n2 sticks Butter\n1 cup Boiling Water\n1/2 cup Buttermilk\n2 whole Beaten Eggs\n1 teaspoon Baking Soda\n1 teaspoon Vanilla\n _____\n FOR FROSTING:\n1/2 cup Finely Chopped Pecans\n1-3/4 stick Butter\n4 Tablespoons (heaping) Cocoa\n6 Tablespoons Milk\n1 teaspoon Vanilla\n1 pound (minus 1/2 Cup) Powdered Sugar",
    url: "http://thepioneerwoman.com/cooking/2007/06/the_best_chocol/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/388604527_5e6812454f.jpg",
    cookTime: "PT20M",
    recipeYield: "24",
    datePublished: "2007-06-02",
    prepTime: "PT20M",
    description:
      "When I posted my recipe for \"The Best Lasagna Ever\" yesterday, I couldn't have anticipated that I'd wind up hearing...",
  },
  {
    name: "Bacon-Wrapped Jalapeno Thingies",
    ingredients:
      "20 whole Fresh Jalapenos, 2-3 Inches In Size\n2 cubes Cream Cheese, Softened\n1 pound Thin(regular) Bacon, Sliced Into Thirds",
    url: "http://thepioneerwoman.com/cooking/2007/07/bacon-wrapped_j/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/732616088_cad001b64e.jpg",
    cookTime: "PT25M",
    recipeYield: "10",
    datePublished: "2007-07-06",
    prepTime: "PT30M",
    description:
      "    These are evil. And they must be destroyed. My lovely sister-in-law, Missy, brings these little wonders to my house each ...",
  },
  {
    name: "Roasted Beef Tenderloin",
    ingredients:
      "1 whole (4 To 5 Lbs.) Beef Tenderloin (butt)\n4 Tablespoons Salted Butter, or more to taste\n1/3 cup Whole Peppercorns, More Or Less To Taste\n Lawry's Seasoned Salt (Or Your Favorite Salt Blend)\n Lemon Pepper Seasoning\n Olive Oil",
    url: "http://thepioneerwoman.com/cooking/2007/07/roasted_beef_te/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/781576334_bcdfccc72f.jpg",
    cookTime: "PT25M",
    recipeYield: "8",
    datePublished: "2007-07-12",
    prepTime: "PT25M",
    description:
      "Sigh. Beef Tenderloin. You've tasted it, right? Oh, believe me, if you have, you'd remember it. If you haven't, this is the f...",
  },
  {
    name: "Tiramisu",
    ingredients:
      "5 whole Egg Yolks\n1/4 cup Plus 4 Tablespoons Sugar, Divided\n3/4 cups Marsala Wine, Divided\n1 cup Whipping (heavy) Cream\n1 pound Mascarpone Cheese, Softened (Room Temperature)\n1-1/2 cup Brewed Espresso Or VERY Strong Coffee\n1 Tablespoon Vanilla\n1 package (7 Oz.) Savoiardi Or Ladyfingers\n Cocoa Powder, For Dusting",
    url: "http://thepioneerwoman.com/cooking/2007/07/tiramisu_yo/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/879263705_5ee2060b01.jpg",
    cookTime: "PT4H",
    recipeYield: "8",
    datePublished: "2007-07-24",
    prepTime: "PT1H",
    description:
      "    Sigh. Tiramisu. The first time I tried it was back when I lived in L.A., and it happened to also be the first time I trie...",
  },
  {
    name: "Spicy Shrimp",
    ingredients:
      "3 pounds (more Or Less) Unpeeled Shrimp (21-26 Count Or Larger)\n1/2 cup Olive Oil\n Salt And Pepper, to taste\n3 whole Lemons (juice Of)\n1/4 cup (to 1/2 Cup) Worcestershire Sauce\n Tabasco\n1 stick Butter",
    url: "http://thepioneerwoman.com/cooking/2007/08/spicy_shrimp_yu/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/976404342_30fb887f79.jpg",
    cookTime: "PT10M",
    recipeYield: "6",
    datePublished: "2007-08-02",
    prepTime: "PT16M",
    description:
      "    Its official name is \"Barbeque Shrimp,\" but that's actually a little misleading since this dish doesn't require...",
  },
  {
    name: "Wings",
    ingredients:
      "2 pounds (to 3 Pounds) Chicken Wing Drummettes\n Canola Oil\n2 sticks Butter\n1 bottle Frank's Red Hot (12 Oz Bottle)\n Tabasco Sauce, To Taste",
    url: "http://thepioneerwoman.com/cooking/2007/09/wings/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/1300247252_5923bc24f8.jpg",
    cookTime: "PT25M",
    recipeYield: "8",
    datePublished: "2007-09-02",
    prepTime: "PT20M",
    description:
      '    It\'s football season. Do you know where your wings are?    "Wings." When that one-syllable word is uttered in m...',
  },
  {
    name: "Pioneer Woman\u2019s Favorite Sandwich",
    ingredients:
      "1 Tablespoon Dijon Mustard, to taste\n1 Tablespoon Mayonnaise, to taste\n1 whole Tomato\n1 whole Red Onion, Small\n2 slices Mild Cheddar\n1 can (4 Oz.) Whole Green Chilies\n2 slices Provolone\n2 slices Rye Bread\n Butter",
    url: "http://thepioneerwoman.com/cooking/2007/10/pioneer_womans_favorite_sandwich/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/1470622409_212bb118bd.jpg",
    cookTime: "PT5M",
    recipeYield: "1",
    datePublished: "2007-10-02",
    prepTime: "PT10M",
    description:
      "    Mmmmm...this is it, folks: The Sandwich That Brings Me the Most Happiness in Life. Granted, it's no Marlboro Man's Favori...",
  },
  {
    name: "Roasted Thanksgiving Turkey",
    ingredients:
      "1 whole Brining Bag\n1 whole Fresh Turkey (I Use A 20-lb. Turkey)\n1 jar (about 1 Pound Of Spices) Williams Sonoma Turkey Brine (See Note Below)\n1 stick Butter",
    url: "http://thepioneerwoman.com/cooking/2007/10/roasted_thanksgiving_turkey/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2007/10/Roasted-Thanksgiving-Turkey.jpg",
    cookTime: "PT3H",
    recipeYield: "12",
    datePublished: "2007-10-25",
    prepTime: "PT18H",
    description:
      "Okay, my delightful friends and co-food-lovers! We've learned how to brine the turkey. Now let's tackle the intimidating-if-y...",
  },
  {
    name: "Spanish Green Beans",
    ingredients:
      "5 slices Bacon\n1 whole Onion (medium)\n4 cans (14.5 Oz. Cans) Whole Green Beans (or 1 To 2 Poounds Fresh)\n2 cans (14.5 Oz.) Whole Tomatoes\n Cayenne Pepper To Taste",
    url: "http://thepioneerwoman.com/cooking/2007/11/spanish_green_beans_a_yummy_thanksgiving_side_dish/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/1895773939_bd064e1506.jpg",
    cookTime: "PT45M",
    recipeYield: "10",
    datePublished: "2007-11-09",
    prepTime: "PT20M",
    description:
      "    Sometimes it's the most simple ingredients that, when combined, make the most delightful dishes. Such is the case with th...",
  },
  {
    name: "Soul Sweet Taters",
    ingredients:
      "4 whole Medium Sweet Potatoes\n1 cup Sugar\n1 cup Milk\n2 whole Eggs\n1 teaspoon Vanilla Extract\n1 teaspoon Salt\n1 cup Brown Sugar\n1 cup Pecans\n1/2 cup Flour\n3/4 sticks Butter",
    url: "http://thepioneerwoman.com/cooking/2007/11/if_you_think_you_dont_like_sweet_potatoesthink_again/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2007/11/soul-sweet-taters-serious-eats.jpg",
    cookTime: "PT30M",
    recipeYield: "10",
    datePublished: "2010-10-29",
    prepTime: "PT45M",
    description:
      "    I put one of my all-time favorite Thanksgiving side dishes on Serious Eats today. If you think you don't like sweet potat...",
  },
  {
    name: "Thanksgiving Stuffing",
    ingredients:
      "1 whole Pan Of Cornbread (I Use My Cornbread Recipe)\n1 loaf French Bread, Somewhat Crusty\n1 stick Butter\n1 whole Medium Onion, Diced\n2 cups Celery, Chopped\n4 cups Low Sodium Chicken Broth\n1/2 teaspoon Dried Basil\n1/2 teaspoon Thyme\n2 teaspoons (to 3 Teaspoons) Fresh Rosemary, Chopped\n1/4 cup Fresh Parsley, Chopped\n Salt To Taste",
    url: "http://thepioneerwoman.com/cooking/2007/11/stuffing_dressing_my_favorite_thanksgiving_food/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2007/11/thanksgiving-stuffing.jpg",
    cookTime: "PT25M",
    recipeYield: "10",
    datePublished: "2007-11-16",
    prepTime: "PT24H",
    description:
      "    Yes, I absolutely love the stuff, but oooh, is this dangerous ground. Stuffing/Dressing is such a personal thing and can ...",
  },
  {
    name: "PW Dinner Rolls \u2013 No Kneading Required!",
    ingredients:
      "4 cups Milk\n1 cup Sugar\n1 cup Vegetable Oil\n9 cups Flour\n2 packages (4 1/2 Tsp.) Active Dry Yeast\n1 teaspoon (heaping) Baking Powder\n1 teaspoon (scant) Baking Soda\n2 Tablespoons Salt",
    url: "http://thepioneerwoman.com/cooking/2007/11/pw_dinner_rolls_-_no_kneading_required/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/2035567395_95d5d714db.jpg",
    cookTime: "PT20M",
    recipeYield: "24",
    datePublished: "2007-11-21",
    prepTime: "PT4H",
    description:
      "    Since I've kept you all waiting, I'm not going to do my usual ten-minute monologue waxing rhapsodic on the recipe I'm abo...",
  },
  {
    name: "PW\u2019s Chex Party Mix",
    ingredients:
      "3 cups Corn Chex\n3 cups Wheat Chex\n3 cups Rice Chex\n2 cups Pretzel Sticks\n2 cups Mixed Nuts\n1 stick (to 1 1/2 Sticks) Butter)\n3 Tablespoons Worcestershire Sauce\n6 dashes (to 12 Dashes) Tabasco Sauce\n3 cloves (to 5) Garlic, Mashed\n1 teaspoon Lawry's Seasoned Salt\n1/4 teaspoon Onion Powder",
    url: "http://thepioneerwoman.com/cooking/2007/12/pws_chex_party_mix/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/2110048156_5ee607e56a.jpg",
    cookTime: "PT1H15M",
    recipeYield: "24",
    datePublished: "2007-12-18",
    prepTime: "PT15M",
    description:
      '    I know what you\'re thinking: "Chex Party Mix? But I can just buy that in bags from the supermarket!" But the truth is, my...',
  },
  {
    name: "Scrumptious Apple Pie",
    ingredients:
      "1 whole Pie Crust\n6 cups (to 7 Cups) Peeled And Sliced Granny Smith Apples\n1/2 whole (juice Of) Lemon\n1/2 cup Sugar\n4 Tablespoons Flour\n1/4 teaspoon Salt\n1/2 cup Flour\n1-1/2 stick Butter\n1 cup Brown Sugar\n1/2 cup Quick Oats\n1/4 teaspoon Salt\n1/2 cup Pecans, Chopped\n1/2 jar (or More) Caramel Topping",
    url: "http://thepioneerwoman.com/cooking/2007/12/scrumptous-and_i_do_mean_scrumptous-apple_pie/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/2130279680_e0382a8891.jpg",
    cookTime: "PT55M",
    recipeYield: "8",
    datePublished: "2007-12-23",
    prepTime: "PT45M",
    description:
      "    Okay, we've made the crust and finished our Christmas shopping, and now it's time to make the pie! I have lots of pies to...",
  },
  {
    name: "Spicy Roasted Chicken Legs",
    ingredients:
      "24 whole Chicken Legs\n2 sticks Butter\n1 Tablespoon Hot Salt (or You Favorite Seasonings)\n1/2 cup Lemon Juice (or To Taste)",
    url: "http://thepioneerwoman.com/cooking/2008/01/spicy_roasted_chicken_legs_-_tasty_and_easy_too/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/2212788939_6cc7302852.jpg",
    cookTime: "PT30M",
    recipeYield: "12",
    datePublished: "2008-01-22",
    prepTime: "PT20M",
    description:
      '    Well, I don\'t know about the whole "fun" business, but I do know that I like this recipe. Living out in the country, I ha...',
  },
  {
    name: "Quesadilla Party",
    ingredients:
      "2 whole Red Onions\n1 whole To 2 Whole Green And Red Bell Peppers\n3 whole Zucchini\n10 whole White Mushrooms\n1 dash Red Wine\n5 Tablespoons Or More Of Butter\n2 cups (more Or Less) Shredded Monterey Jack Cheese\n1 package Flour Tortillas",
    url: "http://thepioneerwoman.com/cooking/2008/01/superbowl_sunday_idea_have_a_quesadilla_party/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2010/07/2224986496_6335e9b62d.jpg",
    cookTime: "PT10M",
    recipeYield: "6",
    datePublished: "2008-01-28",
    prepTime: "PT30M",
    description:
      "    Hey---the Superbowl is coming up! And if you're looking for something to serve other than the standard fare (wings, wings...",
  },
  {
    name: "Hot Roast Beef Sandwiches",
    ingredients:
      "12 whole Dinner Rolls Or Small Sandwich Buns (I Used Whole Wheat)\n1 pound Thinly Shaved Roast Beef Or Ham (or Both!)\n1 pound Cheese (Provolone, Swiss, Mozzarella, Even Cheez Whiz!)\n1/4 cup Mayonnaise\n3 Tablespoons Grated Onion (or 1 Tbsp Dried Onion Flakes))\n1 Tablespoon Poppy Seeds\n1 Tablespoon Spicy Mustard\n1 Tablespoon Horseradish Mayo Or Straight Prepared Horseradish\n Dash Of Worcestershire\n Optional Dressing Ingredients: Sriracha, Hot Sauce, Dried Onion Flakes Instead Of Fresh, Garlic Powder, Pepper, Etc.)",
    url: "http://thepioneerwoman.com/cooking/2013/03/hot-roast-beef-sandwiches/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2013/03/sandwiches.jpg",
    cookTime: "PT20M",
    recipeYield: "12",
    datePublished: "2013-03-13",
    prepTime: "PT20M",
    description:
      "When I was growing up, I participated in my Episcopal church's youth group, and I have lots of memories of weekly meetings wh...",
  },
  {
    name: "Roasted Garlic Mashed Potatoes",
    ingredients:
      "5 pounds Russet Or Yukon Gold Potatoes, Peeled And Rinsed\n3 heads To 5 Heads Roasted Garlic\n1-1/2 stick Regular Salted Butter (3/4 Cup)\n8 ounces, weight Softened Cream Cheese\n1/2 cup Or So Half-and-half (Or Heavy Cream, If You're Feeling Naughty)\n Salt To Taste\n Black Pepper To Taste",
    url: "http://thepioneerwoman.com/cooking/2008/02/the_meal_of_love_part_2_roasted_garlic_mashed_potatoes/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2008/02/Roasted-Garlic-Mashed-Potatoes.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2008-02-11",
    prepTime: "PT1H",
    description:
      "  Okay, we've just roasted the garlic. Now we're going to use it to make Roasted Garlic Mashed Potatoes, which is sheer perfe...",
  },
  {
    name: "Mixed Berry Shortcake",
    ingredients:
      " Biscuits\n3 cups All-purpose Flour\n2 Tablespoons Baking Powder\n3 Tablespoons Sugar\n1/2 teaspoon Salt\n1-1/2 stick (3/4 Cup) Cold Butter, Cut Into Pieces\n1-1/4 cup Buttermilk\n1/2 teaspoon Almond Extract (optional)\n Berries\n2 pints Mixed Berries And/or Sliced Strawberries\n1/3 cup Sugar\n Zest And Juice Of 1 Small Orange\n SWEET YOGURT CREAM\n1 package (7 Ounces) Plain Greek Yogurt\n1 cup Cold Heavy Cream\n1/2 cup Sugar\n2 Tablespoons Brown Sugar",
    url: "http://thepioneerwoman.com/cooking/2013/03/mixed-berry-shortcake/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2013/03/shortcake.jpg",
    cookTime: "PT15M",
    recipeYield: "8",
    datePublished: "2013-03-18",
    prepTime: "PT15M",
    description:
      "It's Monday! It's a brand new week! The birds are chirping! The coffee's brewing! Everything has such hope and promise!     A...",
  },
  {
    name: "Eggs in Hash Brown Nests",
    ingredients:
      "6 whole Medium Russet Potatoes (6 To 8)\n Salt And Pepper, to taste\n24 whole Large Eggs\n Non-stick Cooking Spray",
    url: "http://thepioneerwoman.com/cooking/2013/03/eggs-in-hash-brown-nests/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2013/03/DSC_7863.jpg",
    cookTime: "PT1H30M",
    recipeYield: "12",
    datePublished: "2013-03-26",
    prepTime: "PT15M",
    description:
      "These are the perfect little side dish for Easter Brunch: Tender-but-crispy potato nests with a luscious baked egg in the mid...",
  },
  {
    name: "Glazed Easter Ham",
    ingredients:
      "1 whole Fully Cooked Bone-in Ham (15-18 Pounds)\n Whole Cloves\n3 cups Brown Sugar\n1/2 cup Spicy Brown Mustard\n1 can Dr Pepper Or Coke\n3 Tablespoons Apple Cider Vinegar",
    url: "http://thepioneerwoman.com/cooking/2013/03/glazed-easter-ham/",
    image: "http://static.thepioneerwoman.com/cooking/files/2013/03/ham.jpg",
    cookTime: "PT3H",
    recipeYield: "18",
    datePublished: "2013-03-27",
    prepTime: "PT20M",
    description:
      "Easter is coming, the goose is getting fat!    Wait. That's Christmas.     And Christmas isn't coming. At least not for 272 m...",
  },
  {
    name: "Pretty, Yummy Fruit Salad",
    ingredients:
      "1 cup Sugar\n1 cup Water\n Juice Of 1 Orange\n Zest Of 1 Orange\n2 whole Vanilla Beans, Caviar Scraped Out (or 2 Teaspoons Vanilla Extract)\n4 pints Strawberries, Hulled And Halved\n2 pints Blueberries\n2 cups Red Grapes, Halved\n2 cups Green Grapes, Havled\n Mint Leaves",
    url: "http://thepioneerwoman.com/cooking/2013/03/pretty-fruit-salad/",
    image:
      "http://static.thepioneerwoman.com/cooking/files/2013/03/fruitsalad.jpg",
    cookTime: "PT20M",
    recipeYield: "12",
    datePublished: "2013-03-28",
    prepTime: "PT20M",
    description:
      "I think you'll love this colorful, pretty fruit salad, which is drizzled with a lovely orange-vanilla syrup, which glosses it...",
  },
  {
    name: "Big Sur Bakery Hide Bread Recipe",
    ingredients:
      "5 cups all-purpose flour, plus extra flour for dusting\n1/2 cup flax seeds\n1/2 cup sesame seeds\n2 cups oat bran\n1/4 cup sunflower seeds\n1/2 cup amaranth, quinoa, millet, or poppy seeds (or any combo of these)\n2 tablespoons dulse flakes, or 1 teaspoon kosher salt\n1 teaspoon baking soda\n1/4 cup plus 2 tablespoons beer\n2 1/2 cups buttermilk, half-and-half, milk, or water\nunsalted butter, softened for serving",
    url: "http://www.101cookbooks.com/archives/big-sur-bakery-hide-bread-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/big_sur_bakery_hide_bread.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2009-07-06",
    prepTime: "",
    description:
      "From the Big Sur Bakery cookbook, a seed-packed pocket bread recipe contributed by a good friend of the bakery. Sesame, sunflower, flax and poppy seeds, millet, oat bran, and a bit of beer impressively cram themselves into these delicious, hearty rolls.",
  },
  {
    name: "Old-Fashioned Blueberry Cake Recipe",
    ingredients:
      "1 cup plus 2 tablespoons unbleached all-purpose flour\n1 teaspoon baking powder\n1/2 teaspoon baking soda\n3/4 teaspoon fine grain sea salt\n1/2 teaspoon cider vinegar\n5 tablespoons milk (divided)\n1/2 cup unsulphered molasses\n2 large eggs, lightly beaten\n3 tablespoons unsalted butter, barely melted\n1 1/2 cups blueberries, frozen (I freeze fresh berries)\n1 teaspoon flour\nServe with a sprinkling of powdered sugar (optional), or a big dollop of sweetened freshly whipped cream",
    url: "http://www.101cookbooks.com/archives/oldfashioned-blueberry-cake-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/blueberry_cake_recipe.jpg",
    cookTime: "PT30M",
    recipeYield: "Serves  8 - 10.",
    datePublished: "2009-08-27",
    prepTime: "PT10M",
    description:
      "An old-fashioned blueberry cake sweetened with molasses adapted from a reader submitted recipe to the July 1974 issue of Gourmet Magazine - rustic, dark as chocolate, tender, and punctuated with lots of tiny pockets of oozy, magenta berry flesh.",
  },
  {
    name: "Apple and Carrot Shortbread Recipe",
    ingredients:
      "1/4 cup / 2 ounces / 50g  semolina flour\n1 1/2 cups / 6 ounces whole wheat pastry flour\n1/4 teaspoon baking powder\n1/4 teaspoon fine grain sea salt\n5 ounces (150g) unsalted butter, room temperature\n2/3 cup / 3 1/2 ounces (100g)  light Muscovado sugar (or brown sugar)\n2 ounces (50g) carrot, grated (about 1/4 cup)\n1 ounce (25g) apple, grated (about 1/6 of a med. apple)\nzest of one lemon\nmilk",
    url: "http://www.101cookbooks.com/archives/apple-and-carrot-shortbread-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/apple_carrot_shortbread.jpg",
    cookTime: "PT60M",
    recipeYield: "",
    datePublished: "2009-10-25",
    prepTime: "PT10M",
    description:
      "An apple and carrot-flecked shortbread recipe inspired by a recipe I came across in Good Tempered Food by Tamasin Day-Lewis.",
  },
  {
    name: "Orange and Oat Scone Recipe",
    ingredients:
      "3 cups whole wheat pastry flour\n1/2  cup turbinado sugar\n2 teaspoons baking powder\n1 teaspoon baking soda\n1 cup (2 sticks) cold butter, cut into small pieces\n2 cups rolled oats\nzest of 1 orange\n1 cup buttermilk\n1/4 cup coarse turbinado or Demerara sugar, for sprinkling\n2/3 cup dried currants",
    url: "http://www.101cookbooks.com/archives/orange-and-oat-scones-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/nepenthe_scone_recipe.jpg",
    cookTime: "PT15M",
    recipeYield: "",
    datePublished: "2009-11-15",
    prepTime: "PT10M",
    description:
      "Rustic orange-scented oat scones peppered with currants inspired by a recipe in Romney Steele's new Big Sur-based My Nepenthe cookbook.",
  },
  {
    name: "Sparkling Ginger Chip Cookies",
    ingredients:
      "1/2 cup / 3.5 oz / 90 g turbinado sugar\n6 ounces / 170 g  bittersweet chocolate\n2 cups / 8.5 oz / 245 g whole wheat pastry flour\n1 teaspoon baking soda\n4 1/2 teaspoons ground ginger\n1/2 teaspoon fine grain sea salt\n1/2 cup / 4 oz / 113 g unsalted butter\n1/4 cup / 2 oz / 60 ml unsulphured molasses\n2/3 cup / 3.75 oz / 100 g fine grain natural cane sugar, sifted\n1 1/2 tablespoons grated fresh ginger, peeled \n1 large egg, well beaten",
    url: "http://www.101cookbooks.com/archives/sparkling-ginger-chip-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/ginger_chip_cookies.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2009-12-04",
    prepTime: "PT30M",
    description:
      "I made these for Lottie &amp; Doof's 12 DAYS OF COOKIES. They are tiny, bite-sized holiday cookies made with two kinds of ginger and lots of shaved chocolate. The turbinado sugar crust gives them a bit of crunch which is a nice contrast to the ooey-goey chocolate.",
  },
  {
    name: "Seeded Flatbread Recipe",
    ingredients:
      "4 1/2 cups / 1 lb. 6.5 oz / 640 g White Whole Wheat Flour\u2028\n1 3/4 teaspoons salt\u2028\n1 teaspoon instant yeast / active dry yeast\n1 cup / 5 oz / 140g seeds (I use equal parts chopped pepitas, sunflower &amp; poppy seeds)\n1 1/2 tablespoons mustard seeds, toasted and crushed\u2028\n1/4 cup / 60ml extra-virgin olive oil\u2028\n2 cups / 475 ml water, ice cold\nsemolina flour or cornmeal for dusting baking sheet",
    url: "http://www.101cookbooks.com/archives/seeded-flatbread-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/seeded_flatbread.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2009-12-09",
    prepTime: "",
    description:
      "This olive oil flatbread is made from white whole wheat flour along with pepitas, sunflower, poppy, and mustard seeds. You can pull the dough out paper thin or leave it a bit thicker, serve it straight or bake it with toppings. Whatever you like, really.",
  },
  {
    name: "Figgy Buckwheat SconesFig Butter Recipe",
    ingredients:
      "Dry mix:\n1 cup / 4.75 oz / 135 g buckwheat flour\n1 1/4 cups / 5.5 oz / 160g all-purpose flour\n1/2 cup / 2.5 oz / 70 g sugar\n2 teaspoons baking powder\n1/2 teaspoon kosher salt\nWet mix:\n4 ounces / 113 g cold unsalted butter, cut into 1/4-inch pieces\n1 1/4 cups / 10 fl. oz / 300ml heavy cream\n1 cup / 8 oz Fig Butter (see recipe below)\n1/2 cup / 2.5 oz / 70 g sugar\n2 whole cloves\n1 star anise\n1 cup / 240 ml red wine\n1/2 cup / 120 ml port\n12 ounces / 340 g dried Black Mission figs, stems removed\n1/4 teaspoon cinnamon\n4 ounces / 113g unsalted butter, softened\nsalt to taste (hs: suggestion)",
    url: "http://www.101cookbooks.com/archives/figgy-buckwheat-scones-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/buckwheat_fig_scones.jpg",
    cookTime: "PT45M",
    recipeYield: "",
    datePublished: "2010-03-10",
    prepTime: "PT100M",
    description:
      "These jammy, fig-swirled buckwheat scones are from Kim Boyce's inspiring new book, Good to the Grain, about baking with whole-grain flours.",
  },
  {
    name: "Lucia Muffins",
    ingredients:
      "butter to grease muffin tins\n3 tablespoons unsalted butter\n1 loose teaspoon saffron threads\n3 tablespoons natural cane sugar\n1 cup / 240 ml buttermilk\n2 egg whites\n2 tablespoons water\n1 cup / 4.5 oz / 125 g whole wheat pastry flour\n3/4 cup / 3.5 oz / 100g unbleached all-purpose flour\n1 teaspoon baking powder\n1/2 teaspoon baking soda\n1/2 teaspoon fine grain sea salt\n2 tablespoons finely chopped almonds\n1/2 cup / 2 oz / 60 g golden raisins, chopped",
    url: "http://www.101cookbooks.com/archives/lucia-muffins-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/lucia_muffin_recipe.jpg",
    cookTime: "PT25M",
    recipeYield:
      "Makes 10 - 12 muffins (12 in the Lodge cast iron muffin pans)...",
    datePublished: "2010-03-30",
    prepTime: "PT20M",
    description:
      "These muffins are saffron-smacked and riddled with golden raisins, buttermilk battered and barely sweet. Said another way, Lucia buns reinterpreted as muffins. If you love saffron give them a try.",
  },
  {
    name: "Chocolate Cherry Brownies",
    ingredients:
      "butter for greasing pan\n2 cups / 10.5 oz / 300 g dried cherries\nscant cup / 200 ml / 7 fl oz port wine\n1/2 cup / 2 oz / 55g / whole wheat pastry flour\n1/3 cup / 1.5 oz / 40 g unsweetened cocoa powder\n1/2 teaspoon fine grain sea salt\n2 teaspoons baking powder\n10.5 oz / 300g 55% dark chocolate chips/chunks\n5 1/2 tablespoons /  2 3/4 oz / 80g unsalted butter\n2 cups / 10.5 oz / sifted muscovado sugar\n4 large eggs\nscant 1/2 cup / 3.5 oz / 100 g creme fraiche or sour cream\n1 cup / 5 oz / 145 g chocolate chips/ chunks\nmore cocoa powder, for dusting",
    url: "http://www.101cookbooks.com/archives/chocolate-cherry-brownies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/choco_cherry_brownies.jpg",
    cookTime: "PT60M",
    recipeYield: "",
    datePublished: "2010-04-10",
    prepTime: "PT900M",
    description:
      "Dense, gooey chocolate brownies packed with boozy, port-soaked dried cherries. Made with Muscovado sugar, chocolate chunks, and cr\u00e8me fraiche.",
  },
  {
    name: "Quinoa Skillet Bread",
    ingredients:
      "butter to grease pan, about 1 tablespoon\n1 cup / 4 oz / 115g whole wheat pastry flour\n3/4 cup / 4 oz / 115 g yellow cornmeal (coarse)\n1 teaspoon baking powder\n1/2 teaspoon baking soda\n1/2 teaspoon dried mixed herbs (optional)\n2 large eggs\n1 1/2 cups / 7 oz / 200 g cooked quinoa, room temperature*\n3 tablespoons unsalted butter, barely melted and cooled a bit\n3 tablespoons natural cane sugar (or brown sugar)\n3/4 teaspoon fine grain sea salt\n2 cups / 475 ml milk\n1 1/2 tablespoons white or white wine vinegar\n1 cup / 240 ml heavy cream",
    url: "http://www.101cookbooks.com/archives/quinoa-skillet-bread-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/quinoa_skillet_bread_recipe.jpg",
    cookTime: "PT60M",
    recipeYield: "Makes one 10 1/2 skillet.",
    datePublished: "2010-04-24",
    prepTime: "PT10M",
    description:
      "A rustic, minimally structured, custard-topped, crusty-edged, herb-scented corn-quinoa skillet bread. ",
  },
  {
    name: "Strawberry Rhubarb Crumble",
    ingredients:
      "butter for greasing skillet/pan (about 1 tablespoon)\n3/4 cup  / 3 oz / 85 g spelt flour\n2/3 cup / 3 oz / 85 pine nuts, lightly toasted\n1/2 cup / 1.5 oz  / 45 g rolled oats\n1/2 cup / 2 oz / 60 g natural cane sugar\n1/2 teaspoon fine grain sea salt\n1/8 teaspoon freshly ground black pepper\n1/3 cup / 2.5 oz /  75 g unsalted butter, melted\n1 tablespoon cornstarch\n1/2 cup / 2 oz / 60 g natural cane sugar (or Muscovado sugar)\n1/2 lb. / 8 ounces / 225 g hulled medium strawberries, cut into quarters\n12 ounces trimmed rhubarb, sliced into 3/4-inch pieces\n1/4 cup / 60 ml port wine (optional)",
    url: "http://www.101cookbooks.com/archives/strawberry-rhubarb-crumble-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/strawberry_rhubarb_crumble_recipe.jpg",
    cookTime: "PT40M",
    recipeYield: "",
    datePublished: "2010-05-04",
    prepTime: "PT20M",
    description:
      "A simple spring crumble - rhubarb, strawberry, and a splash of port wine with a buttery black pepper, pine nut and oat crumble top. Sounds a bit fancy, but really, it couldn't be easier to make. ",
  },
  {
    name: "Quinoa Cloud Cookies",
    ingredients:
      "3/4 cup / 3.5 oz / 100g quinoa flour\n1 cup / 5 oz / 145 g all-purpose flour\n1/2 teaspoon fine grain sea salt\n1 cup / 8 oz / 225g unsalted butter, room temperature\n1 cup / 5 oz / 140 g sifted fine-grain natural cane sugar (or light brown sugar)\n1/2 cup / 2.5 oz / 70 g shaved chocolate\n3 tablespoons large-grain sugar flakes (or turbinado)",
    url: "http://www.101cookbooks.com/archives/quinoa-cloud-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/quinoa_cloud_cookies.jpg",
    cookTime: "PT15M",
    recipeYield: "",
    datePublished: "2010-05-14",
    prepTime: "PT60M",
    description:
      "Cookies made from toasted quinoa and wheat flours, flecked with chocolate shavings, rolled and stamped into cloud shapes.",
  },
  {
    name: "Rosemary Olive Oil Cake",
    ingredients:
      "Olive oil for the pan\nDry ingredients:\n3/4 cup / 3 oz / 80g spelt flour\n1 1/2 cups / 7.5 oz /  210 g all-purpose flour\n3/4 cup / 4 oz / 115g sugar\n1 1/2 teaspoons baking powder\n3/4 teaspoon kosher salt\nWet ingredients:\n3 eggs\n1 cup / 240 ml olive oil\n3/4 cup / 180 ml whole milk\n1 1/2 tablespoons fresh rosemary, finely chopped\n5 ounces / 140 g bittersweet chocolate (70% cacao), chopped into 1/2-inch pieces\n2 tablespoons sugar for top crunch",
    url: "http://www.101cookbooks.com/archives/rosemary-olive-oil-cake-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/olive_oil_cake_recipe.jpg",
    cookTime: "PT45M",
    recipeYield: "",
    datePublished: "2010-05-23",
    prepTime: "PT15M",
    description:
      "A cake I made for the Kim Boyce potluck at 18 Reasons - Incredibly moist, golden-crumbed, flecked with rosemary, and dotted with big and small chocolate chunks, I'd make this again in a heartbeat.",
  },
  {
    name: "Chocolate Loaf Cake",
    ingredients:
      "zest of one lemon\n1 1/4 cups / 5 oz / 145 g spelt flour\n1 teaspoon baking soda\n1/2 teaspoon fine grain sea salt\n1 cup / 8 oz / 225g unsalted butter\n1 2/3 cups / 7.5 oz / 215 g v. loosely packed dark Muscovado sugar\n2 large eggs, beaten\n2 teaspoons vanilla extract\n4 oz / 115 g bittersweet chocolate, barely melted\n1 cup plus 2 tablespoons boiling water\nanother 1/3 cup / 1.5 oz / 45 g Muscovado sugar (optional)",
    url: "http://www.101cookbooks.com/archives/chocolate-loaf-cake-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/chocolate_loaf_cake_recipe.jpg",
    cookTime: "PT50M",
    recipeYield: "Makes 8 - 10 slices.",
    datePublished: "2010-06-27",
    prepTime: "PT15M",
    description:
      "Certainly not the most attractive cake I've ever baked - but right in so many other ways. Deep chocolate flavor, barely set center, indiscernible crumb, thin Muscovado crust...if you can get over how it looks, you'll love it.",
  },
  {
    name: "Six-seed Soda Bread Recipe",
    ingredients:
      "2 1/2 tablespoons EACH sunflower seeds, pumpkin seeds, sesame seeds,\npoppy seeds, flax seeds\n1 teaspoon fennel seeds\n1 3/4 cup / 9 oz / 250 g spelt flour\n2 cups / 9 oz / 250 g unbleached all-purpose flour\n2 teaspoons baking soda\n1 teaspoon fine grain sea salt\n1 3/4 cup / 14 oz / 400 ml buttermilk\na bit of extra buttermilk/milk",
    url: "http://www.101cookbooks.com/archives/sixseed-soda-bread-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/six_seed_soda_bread_recipe.jpg",
    cookTime: "PT40M",
    recipeYield: "",
    datePublished: "2010-05-31",
    prepTime: "PT10M",
    description:
      "Inspired by Hugh Fearnley-Whittingstall's soda bread recipe, this version is made with a blend of spelt flour and all-purpose flour. The dough is littered with seeds - sunflower seeds, pumpkin seeds, sesame seeds, poppy seeds, flax seeds, and fennel seeds. It bakes into a perfect, rustic, crusty loaf of bread with relatively little effort.",
  },
  {
    name: "",
    ingredients:
      "Salt\nOne 35-ounce can Italian plum tomatoes (preferably San Marzano) with their liquid\n1 pound penne\n1/4 cup extra-virgin olive oil\n10 cloves garlic, peeled\nCrushed hot red pepper\n1/4 cup vodka\n1/2 cup heavy cream\n2 tablespoons unsalted butter or olive oil for finishing the sauce, if you like\n2 to 3 tablespoons chopped fresh Italian parsley\n3/4 cup freshly grated Parmigiano-Reggiano, plus more for passing if you like",
    url: "http://www.101cookbooks.com/archives/000054.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2003-05-27",
    prepTime: "",
    description: "101 Cookbooks: Penne alla Vodka Recipe",
  },
  {
    name: "Scharffen Berger 70% Fudgy Brownies",
    ingredients:
      "6 ounces Scharffen Berger 70% Bittersweet chocolate\n3/4 cup butter\n1 1/2 cups sugar\n3 eggs\n1 teaspoon vanilla\n1 cup flour\n1 cup chopped nuts (optional)",
    url: "http://www.101cookbooks.com/archives/000041.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2003-06-29",
    prepTime: "",
    description: "101 Cookbooks: Scharffen Berger 70% Fudgy Brownies Recipe",
  },
  {
    name: "Chocolate Calypso Beans (remix)",
    ingredients:
      "1 lb. Jacob's Cattle beans\n2 T. olive oil\n1 large onion, chopped\n1 red bell pepper, chopped\n5 cloves garlic, minced\n2T. ground, dried red chilies (I used med-hot Chimayo)\n1 1/2 T ground cumin\n2+ t.  ground cinnamon \n1 t. ground allspice\n4 1/2 cups water or vegetable stock\n1 12 oz. bottle Negro Modelo Mexican beer\n1 1/2 discs Ibarra Mexican chocolate",
    url: "http://www.101cookbooks.com/archives/000116.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/ranchogordobeans.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2004-09-06",
    prepTime: "",
    description: "101 Cookbooks: Chocolate Calypso Beans Recipe",
  },
  {
    name: "Apple Pie Recipe",
    ingredients:
      "3 tablespoons all-purpose flour\n1 teaspoon finely grated lemon zest\n1/2 teaspoon ground cinnamon\n1/4 teaspoon ground allspice\n1/8 teaspoon salt\n2/3 cup plus 1 tablespoon sugar\n2 1/2 pounds apples, peeled, cored, and each cut into 10 wedges\n1 tablespoon fresh lemon juice\nBasic Pastry Dough for a double-crust pie (see recipe below)\n1 large egg, lightly beaten, for egg wash\n1 1/4 cups all-purpose flour\n3/4 stick (6 tablespoons) cold unsalted butter, cut into 1/2-inch cubes\n2 tablespoons cold vegetable shortening\n1/4 teaspoon salt\n3-4 tablespoons ice water\n2 1/2 cups all-purpose flour\n1 1/2 sticks (12 tablespoons) cold unsalted butter, cut into 1/2-inch cubes\n1/4 cup cold vegetable shortening\n1/2 teaspoon salt\n4-6 tablespoons ice water",
    url: "http://www.101cookbooks.com/archives/000122.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/.jpg",
    cookTime: "",
    recipeYield:
      "Serves 6 to 8\nActive time: 40 minutes\nStart to finish: 5 1/2 hours (includes making dough and cooling)Put a large baking sheet on middle oven rack and preheat oven to 425F.Whisk together flour, zest, cinnamon, allspice, salt, and 2/3 cup sugar in a large bowl. Gently toss with apples and lemon juice.Roll out 1 piece of dough (keep remaining piece chilled) on a lightly floured surface with a lightly floured rolling pin into a 13-inch round. Fit it into a 9-inch pie plate. Trim edge, leaving a 1/2-inch overhang. Refrigerate while you roll out dough for top crust.Roll out remaining piece of dough on lightly floured surface into an 11-inch round.Spoon filling into shell. Cover pie with pastry round and trim with kitchen shears, leaving 1/2-inch overhang. Press edges together, then crimp decoratively. Lightly brush top of pie with egg and sprinkle all over with remaining 1 tablespoon sugar.  With a small sharp knife, cut 3 vents in top crust.Bake Pie on hot baking sheet for 20 minutes. Reduce oven temperature to 375F and continue to bake until crust is golden and filling is bubbling, about 40 minutes more. Cool pie on a rack to warm or room temperature, 2 to 3 hours.Makes enough for a single crust 9-inch pie or a 9- to 11-inch tart, or for a double crust 9-inch pie.\nActive time: 10 minutes\nStart to finish: 1 1/4 hours (includes chilling)For a single crust pie or a tartFor a double-crust pieBlend together flour, butter, shortening, and salt in a bowl with your fingers or a pastry blender (or pulse in a food processor) just until mixture resembles coarse meal with some small (roughly pea sized) lumps of butter. For a single crust pie or tart, drizzle 3 tablespoons ice water evenly over mixture and gently stir with a fork (or pulse) until incorporated.Squeeze a small handful of dough: if it doesn't hold together, ad more ice water 1/2 tablespoon at a time, stirring or pulsing until incorporated. Do not overwork dough or pastry will be tough.Turn dough out onto a work surface. For a single-crust pie or tart, divide into 4 portions; for a double-crust pie, divide into 8 portions. With heel of your hand, smear each portion once or twice in a forward motion to help distribute fat. Gather all dough together, with a pastry scraper if you have one. For single-crust pie or tart, press into a ball, then flatten into a 5-inch disk. For a double-crust pie, divide in half, and then flatten each into a 5-inch disk. If dough is sticky, dust lightly with additional flour. Wrap each disk in plastic wrap and refrigerate until firm, at least one hour.Cook's note: \nThe dough can be refrigerated for up to 1 day.From The Gourmet Cookbook edited by Ruth Reichl (Houghton Mifflin Company, 2004)Print Recipe",
    datePublished: "2004-10-20",
    prepTime: "",
    description: "101 Cookbooks: Apple Pie Recipe",
  },
  {
    name: "Graham Cracker Recipe",
    ingredients:
      "2 1/2 cups plus 2 tablespoons unbleached pastry flour or unbleached all-purpose flour\n1 cup dark brown sugar, lightly packed\n1 teaspoon baking soda\n3/4 teaspoon kosher salt\n7 tablespoons (3 1/2 ounces) unsalted butter, cut into 1-inch cubes and frozen\n1/3 cup mild-flavored honey, such as clover\n5 tablespoons whole milk\n2 tablespoons pure vanilla extract\n3 tablespoons granulated sugar\n1 teaspoon ground cinnamon\n1 8-ounce package of cream cheese\n2 tablespoons butter, softened\n1 teaspoon pure vanilla extract\n3 cups of powdered sugar, sifted",
    url: "http://www.101cookbooks.com/archives/000126.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2004-11-10",
    prepTime: "",
    description:
      "Nancy Silverton's graham cracker recipe - flawless. Made with flour, brown sugar, honey, and butter.",
  },
  {
    name: "Green Curry with Tofu",
    ingredients:
      "Ingredients for chili paste:\n2 green hot chilies (Thai chilies)\n1 tablespoon chopped shallots\n1 teaspoon chopped galangal \n1/2 teaspoon chopped kaffir lime rind\n1 tablespoon chopped garlic\n1 tablespoon chopped lemongrass\n1 tablespoon chopped krachai\n1/4 teaspoon roasted cumin seeds\n1/4 teaspoon roasted coriander seeds\n1/2 teaspoon salt\nOther ingredients:\n1 cup sliced eggplants\n1/4 cup smaller pea-like eggplants (makheau phuang)\n1/3 cup sliced onion\n70 grams sliced chicken (or firm tofu)\n1 teaspoon sugar\n1 tablespoon fish sauce (or soy sauce for vegetarians)\n3 kaffir lime leaves\n2 stems sweet basil (horapaa)\n1 cup coconut milk\n1 cup water\n(Again, chicken can be replaced tofu)",
    url: "http://www.101cookbooks.com/archives/000130.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2004-12-01",
    prepTime: "",
    description: "101 Cookbooks: Green Curry with Tofu Recipe",
  },
  {
    name: "Full Moon Brownie Recipe",
    ingredients:
      "7 ounces Black Pearl bar (about 2 bars) or Black Pearl chips (1 3/4 bags)\n1 stick unsalted butter {4 oz.}\n3 tablespoons cocoa powder\n3 large eggs\n1 1/4 cup sugar\n1 tablespoon vanilla extract\n1 teaspoon salt\n1 tablespoon fresh ginger, peeled and minced\n3/4 cup mini marshmallows\n1 cup all purpose flour",
    url: "http://www.101cookbooks.com/archives/000137.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/moonbrownies.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-01-17",
    prepTime: "",
    description: "101 Cookbooks: Full Moon Brownies Recipe",
  },
  {
    name: "Wild Mushroom Salad Recips",
    ingredients:
      "150 g (5 oz) assorted wild mushrooms\n2 tablespoons stock\npinch of salt\npinch of white sugar - optional\n3 tablespoons lime juice (you might use less)\n2 tablespoons fish sauce (for veg: substitute a splash of soy sauce)\nlarge pinch of roasted chili powder\n4 shallots, sliced\nhandful of mixed mint and coriander leaves\n2 tablespoons shredded pak chii farang (long-leaf coriander)\n1 tablespoon chopped spring (green) onion\n1 tablespoon ground roasted rice\n-a few sprigs of Thai basil\n-sliced cabbage and cucumber",
    url: "http://www.101cookbooks.com/archives/000140.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/thaiwildmush.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-02-01",
    prepTime: "",
    description: "101 Cookbooks: Wild Mushroom Salad Recipe",
  },
  {
    name: "Canneles de Bordeaux",
    ingredients:
      "2 cups whole milk\n9 ounces sugar\n1 vanilla pod, split\n2 ounces butter\n6 ounces flour\n2 egg yolks\n3 teaspoon dark rum\nButter for the molds",
    url: "http://www.101cookbooks.com/archives/000149.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/canneles.jpg",
    cookTime: "",
    recipeYield: "Makes 12 canneles.",
    datePublished: "2005-03-08",
    prepTime: "",
    description: "101 Cookbooks: Canneles de Bordeaux Recipe",
  },
  {
    name: "Goat Cheese and Chive Tea Sandwiches",
    ingredients:
      "8 ounces fresh goat cheese\n24 very thin slices of white sandwich bread, crusts removed\n1 medium bunch watercress leaves, enough to make about 2 lightly packed cups\n2 bunches of fresh chives, finely snipped to make 1/2 cup\n2 tablespoons homemade or prepared mayonnaise\n1 1/2 pounds of thick-sliced hickory-smoked peppered bacon (heidi: I used Smart Bacon - vegetarian option)\n24 (4 ounces) sun-dried tomatoes\n1 cup homemade or prepared mayonnaise\nKosher salt and freshly ground pepper\n24 1/4-inch-thick slices of rye bread\n6 ounces lamb's lettuce (mache) or other baby lettuce leaves, enough to make about 2 loosely packed cups",
    url: "http://www.101cookbooks.com/archives/000154.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/teasands.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-03-29",
    prepTime: "",
    description: "101 Cookbooks: Goat Cheese and Chive Tea Sandwiches Recipe",
  },
  {
    name: "Spiced Caramel Corn",
    ingredients:
      "4 ounces whole macadamia nuts (about 1 cup), optional \n1/2 teaspoon vegetable oil\n1/3 cup unpopped popcorn\n1/4 cup water\n2 cups sugar\n2 tablespoons light corn syrup\n1 vanilla bean, split lengthwise and scraped\n3/4 teaspoon ground cinnamon\n1 1/2 teaspoons freshly grated nutmeg\n1/8 teaspoon ground cloves\n1/4 teaspoon ground cardamom\n1 1/2 teaspoons coarse salt",
    url: "http://www.101cookbooks.com/archives/000169.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/caramelcorn.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-05-24",
    prepTime: "",
    description: "101 Cookbooks: From the Archives: Spiced Caramel Corn Recipe",
  },
  {
    name: "Fresh Apple Salsa",
    ingredients:
      "2 tart apples, locally grown if possible\n4 tablespoons lime juice\n1 fresh jalapeno chile\n1 fresh Anaheim chile\n1/2 medium onion, finely chopped\nHandful of cilantro, roughly chopped\n1/2 cup (2 ounces) walnuts, coarsely chopped and lightly toasted\n2 tablespoons peeled and finely slivered fresh ginger\n1/4 teaspoon salt",
    url: "http://www.101cookbooks.com/archives/000170.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/applesalsa.jpg",
    cookTime: "",
    recipeYield: "Serves 4 to 6.",
    datePublished: "2005-05-28",
    prepTime: "",
    description: "101 Cookbooks: From the Archives: Fresh Apple Salsa Recipe",
  },
  {
    name: "Broccoli Pesto &amp; Fusilli Pasta Recipe",
    ingredients:
      "1 medium head of broccoli (about 3 cups), cut into very small florets\n1/2 cup walnuts, toasted\n1/3 cup Parmesan, freshly grated\n1 clove of garlic\njuice of 1/2 a lemon\n1/4 teaspoon + fine grain sea salt\n1/3 cup extra-virgin olive oil\n1/2 pound (8 ounces) dried whole wheat pasta (bite-sized - fusilli, penne, etc)\n3 handfuls of spinach or chard, well chopped\nhandful of oily black olives, pitted\nmore Parmesan for serving",
    url: "http://www.101cookbooks.com/archives/broccoli-pesto-fusilli-pasta-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/fusilli_pasta_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes about 6 side servings.",
    datePublished: "2008-05-29",
    prepTime: "",
    description:
      "A simple pasta bowl made by tossing a whole wheat fusilli pasta, shredded spinach, and with a delicious walnut &amp; broccoli pesto sauce.",
  },
  {
    name: "Summer Vegetable Cianfotta Recipe",
    ingredients:
      "1 globe eggplant, trimmed and diced (about 4 cups)\n4 summer zucchini or squashes, trimmed and diced (about 4 cups)\nKosher salt\n1 fennel bulb\n2 cups extra virgin olive oil\n5 cloves garlic, smashed with the side of a knife\n4 sprigs (fresh) marjoram\n1 bay leaf\n3 Yukon Gold potatoes, cubed (about 2 cups)\n2 cups water\n1 cup fiorelli or thinly sliced squash blossoms\n1 cup cherry tomatoes, stemmed and halved\nBlock of aged pecorino for shaving",
    url: "http://www.101cookbooks.com/archives/summer-vegetable-cianfotta-recipe.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/a16_cookbook.jpg",
    cookTime: "",
    recipeYield: "Serves 8 as a first course, or 4 to 6 as a main course.",
    datePublished: "2008-09-07",
    prepTime: "",
    description:
      "A vibrant, colorful Campagnian summer stew from the new A16: Food + Wine cookbook. It features zucchini, eggplant, cherry tomatoes, fennel, and other ingredients braised in olive oil.",
  },
  {
    name: "Roasted Tomato Soup Recipe",
    ingredients:
      "5 tomatoes, cored (if necessary) and quartered\n1 large red bell pepper, seeded and quartered\n3 medium yellow onions, peeled, quartered\nextra-virgin olive oil\n5 plump cloves of garlic, unpeeled\nfine-grain sea salt\n2 - 3 cups light vegetable stock or water\n1/4 teaspoon smoked paprika ",
    url: "http://www.101cookbooks.com/archives/roasted-tomato-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/tomato_soup_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4.",
    datePublished: "2008-09-25",
    prepTime: "",
    description:
      "A roasted tomato soup recipe I featured in my last cookbook. Roast tomatoes, onions, garlic, and a red pepper then puree and season with a touch of smoky paprika. Couldn't be simpler or more flavorful.",
  },
  {
    name: "Maple Syrup Scones Recipe",
    ingredients:
      "1/4 cup real, good quality maple syrup\n6 tablespoons milk or cream\n2 1/4 cups whole wheat pastry flour\n1/2 cup quinoa flakes (or rolled oats)\n1 1/2 tablespoons baking powder\n1/2 teaspoon fine grain sea salt\n11 tablespoons unsalted butter, cold, cut into cubes\n1 egg, lightly beaten\nlarge-grain sugar (for example: turbinado)",
    url: "http://www.101cookbooks.com/archives/maple-syrup-scones-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/maplesyrup_scone_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes 9 scones. ",
    datePublished: "2009-03-15",
    prepTime: "",
    description:
      "Maple syrup scones sweetened with a hint of maple syrup. Big flakes of sugar meld into a sweet, crackly top crust, and the whole wheat pastry flour makes them beautifully tender.",
  },
  {
    name: "Pierce Street Vegetarian Chili Recipe",
    ingredients:
      "2 tablespoons olive oil\n1 large yellow onion, chopped\n2 shallots, chopped\n8 small/med garlic cloves, finely chopped\n1 tablespoon ginger, peeled and grated\n3 tablespoons chili powder\n1 teaspoon ground cumin\n1 serrano pepper, seeded and finely chopped\n1 chipotle pepper (from can or rehydrate), minced\n1 28-ounce can of crushed tomatoes\n10  cups vegetable broth\n1 1/2 cups cooked chickpeas (canned is fine)\n2 1/4 cups black, brown, or green lentils (or combo), rinsed and picked over\n2/3 cup pearled barley or pearled farro\n2/3 cup bulgur wheat\n1 teaspoon fine grain sea salt (or to taste)\ntoppings (opt): a bit of chopped serranos, a bit of feta or dollop of thinned out salted yogurt, a drizzle of equal parts chopped fresh oregano and olive oil, chopped onion",
    url: "http://www.101cookbooks.com/archives/pierce-street-vegetarian-chili-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/vegetarian_chili_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2009-05-13",
    prepTime: "",
    description:
      "The best pot of chili I've made in years. A vegetarian chili recipe Inspired by a bunch of those little bags of remnant grains and pulses that collect in my cupboards - bulgur, farro, and lentils, join chile peppers, crushed tomatoes, some chickpeas, and a secret ingredient.",
  },
  {
    name: "Buttermilk Summer Squash Soup Recipe",
    ingredients:
      "a generous splash of olive oil or (3T.) knob of butter\n3 large shallots, chopped\na couple pinches of fine-grain sea salt\npinch of crushed red pepper flakes\n3-inch sprig of rosemary\n1 1/2 pounds yellow or green summer squash, cut into 1/2-inch thick slices/chunks\n3/4 pound potatoes, un-peeled, cut into 1/4-inch thick pieces\n3 medium cloves garlic, chopped\n3 cups lightly flavored vegetable stock or water\n2/3 cup buttermilk\ngarnish with: fresh herbs, toasted almonds, a generous drizzle of olive oil/ melted butter, and/or some crumbled feta",
    url: "http://www.101cookbooks.com/archives/buttermilk-summer-squash-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/buttermilk_squash_soup.jpg",
    cookTime: "",
    recipeYield: "Serves  6 - 8.",
    datePublished: "2009-06-15",
    prepTime: "",
    description:
      "A pureed summer squash soup with a buttermilk twist. I used a hint of red pepper, a bit of rosemary for depth, some potato for body, garlic, shallots - and aside from the buttermilk, nothing too far beyond the usual suspects.",
  },
  {
    name: "Sesame Almond Brown Rice Balls",
    ingredients:
      "2 cups / 14 oz / 400 g brown sushi rice (stubby, short grains)\n3 cups / 710 ml water\n1/2 teaspoon fine grain sea salt\n1/4 cup / 1.5 oz / 45 g sesame seeds (white/black mix)\n3 tablespoons toasted almond slices/slivers, chopped\n1/4 cup / 4 tablespoons minced green onions\nOptional: things to tuck in the middle: avocado cubes (toss in lemon juice first), tofu, etc.",
    url: "http://www.101cookbooks.com/archives/sesame-almond-brown-rice-balls-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/brown_rice_balls.jpg",
    cookTime: "PT60M",
    recipeYield: "Makes about 2 dozen small rice balls.",
    datePublished: "2012-03-21",
    prepTime: "PT20M",
    description:
      "Perfectly portable sesame almond brown rice balls. I packed these for a road trip from SF to Portland last week. They're flecked with green onion, and you can tuck edible surprises (i.e. avocado) in the centers if you like.",
  },
  {
    name: "Wild Fried Rice Recipe",
    ingredients:
      "1 scant tablespoon toasted sesame oil\n1 scant tablespoon olive oil\n3 - 4 good quality eggs, well beaten with a big pinch of salt\n1 small red onion, finely chopped\n1 1/2 cups cooked wild rice\n6 ounces extra-firm nigari tofu, cut into 1/2-inch cubes, raw or browned in a skillet ahead of time\n2 big handfuls of pea sprouts, chopped green beans or peas\n1+ tablespoon tamari or soy sauce",
    url: "http://www.101cookbooks.com/archives/wild-fried-rice-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/wild_fried_rice_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 2-3 as a main.",
    datePublished: "2009-02-25",
    prepTime: "",
    description:
      "Fried rice made with wild rice, a thin omelette cut into strips, a splash of soy sauce, tofu, and whatever seasonal greens you have on hand - peas, asparagus, pea shoots, spinach.",
  },
  {
    name: "Apple Butter with Carolina B.",
    ingredients:
      "4 pounds of apples, peeled and cut into bite sized chunks (we used a mix of empire, gala, and Fuji apples - but any type of flavorful apple will do)\nRoughly 1/2 gallon of apple cider\n2 cups of sugar (use roughly 1/2 cup per pound of fruit)\n1 1/2 t. cinnamon\n1/2 t. cloves\nJuice of one lemon",
    url: "http://www.101cookbooks.com/archives/000125.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/applebutter1.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2004-11-03",
    prepTime: "",
    description: "101 Cookbooks: Apple Butter with Carolina B. Recipe",
  },
  {
    name: "Sweet Pistachio Butter",
    ingredients:
      "1 cup pistachios, shelled, blanched and skinned (instructions below)\n1 cup almonds, blanched and skinned \nroughly 3/4 cup granulated sugar (next time I will prob. sweeten with a mild honey or light agave nectar)\n1/2 cup or so hot water\ncouple pinches of salt",
    url: "http://www.101cookbooks.com/archives/000750.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/pistachiobutter.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-11-10",
    prepTime: "",
    description:
      "My fingers are a little raw from shelling pistachios for what felt like two hours at the crack of dawn this morning. Note to self, recipes that require shelling, blanching, and skinning usually take a long time...",
  },
  {
    name: "Herb Salad Recipe",
    ingredients:
      "2 ears sweet corn, husked\n1 big handful lettuce, torn into bite-sized pieces\n3 big handfuls green beans or haricots vert, blanched for 20 seconds in boiling salted water, cooled completely under cold water\n1/2 red onion, thinly sliced\n1 bunch of chives, finely chopped\n1 handful cilantro, loosely chopped\n1 small handful of small/medium basil leaves\n1 handful of pepitas, toasted\nfine-grain sea salt\n1 clove garlic, peeled\n1/3 cup Greek yogurt\n1 tablespoon lemon juice\n1 medium avocado",
    url: "http://www.101cookbooks.com/archives/herb-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/herb_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves about 6-8. ",
    datePublished: "2008-07-27",
    prepTime: "",
    description:
      "A lovely herb salad recipe made from lots of summertime herbs, green beans, and corn.",
  },
  {
    name: "Grilled Potato Salad Recipe",
    ingredients:
      "10 medium-sized new potatoes, unpeeled and quartered\n3-4 small yellow summer pattypan squash, cut in half\n1 bunch of green onions or spring onions\na big splash of olive oil\n2 lemons, cut in half\n1/4 cup rice vinegar\n1/4 cup olive oil\nclove of garlic, mashed and chopped\na couple drops of toasted sesame oil\nsalt \n1/2 a head of lettuce, washed and cut into bite-sized pieces",
    url: "http://www.101cookbooks.com/archives/grilled-potato-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/potato_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 6 (or so) as a side.",
    datePublished: "2008-06-29",
    prepTime: "",
    description:
      "This potato salad recipe is what happens when potato salad meets the grill. Grilled potato wedges are tossed with a vinaigrette finished with barely a hint of toasted sesame oil.",
  },
  {
    name: "Grilled Fava Beans",
    ingredients:
      "1 pound of fresh fava beans, still in their pods\na couple glugs of olive oil\na few pinches of salt\noptional: crushed red pepper flakes, lemon zest, and or chopped fresh herbs.",
    url: "http://www.101cookbooks.com/archives/grilled-fava-beans-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/grilled_fava_beans.jpg",
    cookTime: "",
    recipeYield: "Serves 2 - 4",
    datePublished: "2009-05-10",
    prepTime: "",
    description:
      "If you haven't tried grilled fava beans, you must! You can make them on the grill or in a grill pan. Toss them out onto a newspaper where people can dive in and make a bit of a mess with the pods and skins.",
  },
  {
    name: "Butterscotch Calypso Bean Soup",
    ingredients:
      "Paprika oil:\n1/2 cup extra virgin olive oil\n1 large clove of garlic, crushed\n1 Tablespoon bittersweet paprika\n1 teaspoon sweet smoked paprika\nCumin oil:\nToast 1 T. cumin seeds in a dry skillet until fragrant, a couple minutes over medium heat. Crush the toasted cumin with a mortar and pestle - or a spice grinder, knife or whatever you've got. Back to the skillet: add 1/4 cup extra-virgin olive oil to the skillet, let it heat up and add the crushed cumin seeds along with a few pinches of salt. Remove from heat and let sit for 10 or 15 minutes. \nCumin croutons:\nPreheat the oven to 400 degrees. Cut a small loaf of rye bread into crouton-sized cubes. In a medium bowl toss a couple handfuls of the rye cubes with the cumin oil until they are nicely coated. Place on a baking sheet in the oven for 15 minutes or so - until the croutons are crisp and starting to brown.",
    url: "http://www.101cookbooks.com/archives/000163.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/souppaprika.jpg",
    cookTime: "",
    recipeYield: "Makes 4-6 servings.",
    datePublished: "2005-05-03",
    prepTime: "",
    description: "A soup inspired by a visit to Delfina restaurant.",
  },
  {
    name: "",
    ingredients:
      "onions - 4 medium \nbutter - 1 - 2 tablespoons\na glass of white wine\nvegetable stock 6+ cups\na small french loaf\ngrated Gruyere, Emmental or other good melting cheese - a few generous handfuls",
    url: "http://www.101cookbooks.com/archives/001076.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/onion_soup_recipe1.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2006-01-07",
    prepTime: "",
    description:
      "A twist on a classic onion soup recipe adapted for cry-babies (like me). Caramelized onions, white wine, butter, vegetable stock, and grated cheese.",
  },
  {
    name: "Vegetarian Tortilla Soup Recipe",
    ingredients:
      "6-8 corn tortillas, cut in half and then into  matchstick-thin strips\na big splash of extra virgin olive oil\nfine grain sea salt\n20 small yellow or red cherry tomatoes\nanother splash of extra virgin olive oil\n3 cloves garlic, chopped\n1 large white onion, chopped\n1 teaspoon ground cumin\n2 teaspoons ground coriander\n1 teaspoon cayenne or other spicy red chili powder\n1 14-ounce can crushed tomatoes\n6 cups vegetable broth (or water)\na few sun-dried tomatoes, chopped\n1/4 cup of goat cheese, crumbled",
    url: "http://www.101cookbooks.com/archives/vegetarian-tortilla-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/tortilla_soup_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes about 6 servings.",
    datePublished: "2008-06-19",
    prepTime: "",
    description:
      "My tortilla soup recipe - a full-bodied, spicy vegetarian broth envelops a nest of baked tortilla matchsticks. Tiny roasted tomatoes along with a bit of goat cheese lend tang and texture, and flecks of sun-dried tomatoes bring depth and richness to each bowl.",
  },
  {
    name: "Carrot and Fennel Soup",
    ingredients:
      "3 tablespoons extra virgin olive oil\n2 medium fennel bulbs, trimmed fronds reserved, thinly sliced\n2 1/4 pounds / 36 ounces farmer market carrots, thickly sliced\n2 large cloves garlic, thinly sliced\n10 cups good-tasting vegetable broth or water\nsalt to taste\n3 cups / 12 oz cooked wild rice\n2 tablespoons blood orange olive oil or 5 tablespoons fresh orange juice\nlots of freshly grated Parmesan cheese",
    url: "http://www.101cookbooks.com/archives/carrot-and-fennel-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/carrot_fennel_soup_recipe.jpg",
    cookTime: "PT30M",
    recipeYield: "",
    datePublished: "2010-11-28",
    prepTime: "PT10M",
    description:
      "A clean, simple carrot and shaved fennel soup. The vegetables are rounded out with wild rice, and the finished soup is dusted generously with Parmesan cheese.",
  },
  {
    name: "Bourbon Baked Sweet Potatoes",
    ingredients:
      "5-6 chubby, red-fleshed sweet potatoes\nSplash of extra-virgin olive oil\nSalt and pepper\n1-inch square of ginger, peeled and grated\n2 generous pinches of ground cinnamon or canela\n1 generous pinch of ground cloves\nZest of one lemon (orange zest would be good too)\n3T unsalted butter, melted and cooled a bit\n1/4 cup maple syrup\nSplash of milk (2T. or so)\nSplash of bourbon (2T. or so)\n1/4 freshly grated Parmesan (not from the plastic container!)\nSpicy Pecans (recipe below)\n1 tablespoon unsalted butter\n2 cups pecans\n1/3 cup brown sugar\n1 teaspoon paprika\n1 teaspoon red chile powder\n3 tablespoons cider vinegar",
    url: "http://www.101cookbooks.com/archives/000129.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/bourbonsweet2.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2004-11-26",
    prepTime: "",
    description: "101 Cookbooks: Bourbon Baked Sweet Potatoes Recipe",
  },
  {
    name: "Braised Celery with Crunchy Bread Crumb Topping",
    ingredients:
      "2 tablespoons unsalted butter, at room temperature \n1 head celery (about 1 3/4 pounds) \n1 large shallot or 1 small yellow onion, finely minced (about 1/4 cup) \n1 1/2 teaspoons finely chopped fresh thyme or 1/2 teaspoon dried \nCoarse salt and freshly ground black pepper \n1/4 cup dry white wine or dry white vermouth \n1 cup chicken stock, homemade (page 448) or store-bought (hs note: I used a veg. stock)\n1/3 cup freshly grated Gruyere, or half Gruyere and half Parmigiano-Reggiano \n3 to 4 tablespoons fresh bread crumbs made from day-old rustic white bread",
    url: "http://www.101cookbooks.com/archives/000946.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/braisedcel.jpg",
    cookTime: "",
    recipeYield: "Serves 4 I Braising Time: about 1 1/2 hours.",
    datePublished: "2005-12-18",
    prepTime: "",
    description:
      "Molly Stevens' Braised Celery recipe -  take a dish of celery segments topped with a dose of sauteed aromatics (celery hearts, shallots, and thyme), and a bit of broth. Slowly cook it all down under a roof of tinfoil until it is nice, moist, and tender - then finish it off gratin-style with crunchy bread crumbs and a bit of nutty gruyere.",
  },
  {
    name: "Berry Beer Baked Beans Recipe",
    ingredients:
      "2 cups dried cranberry, borlotti,or pinto beans, soaked over night \na splash of extra virgin olive oil\n1 medium red onion, chopped\n1/4 cup molasses\n1 tablespoon Dijon-style mustard\n1 teaspoon crushed red pepper flakes\n3 cups berry beer\n1/2 cup dried berries and/or cherries, loosely chopped\n2 cups light vegetable broth\n1/2 teaspoon smoked paprika (or more to taste)\nfine-grain sea salt",
    url: "http://www.101cookbooks.com/archives/berry-beer-baked-beans-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/baked_beans_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2008-10-23",
    prepTime: "",
    description:
      "A simple yet over-the-top flavorful baked bean recipe dedicated to my dad. Beans are immersed in a decadent swamp of berry beer, dried berries, molasses, broth, and a few other flavorful accents. ",
  },
  {
    name: "Green Rice with Smoked Paprika",
    ingredients:
      "2 cups / 14 oz / 400 g brown rice\n3 cups / 710 ml water\n1/2 teaspoon fine grain sea salt\n1 big handful peas (fresh or frozen)\n3+ tablespoons arugula-shallot butter*\n1 big handful chopped arugula\n12 mint leaves, torn\na big handful grated melty cheese (i.e. Gruyere)\na generous dusting of smoked paprika\nbig handful well-toasted pine nuts (or almonds)\nlemon wedges",
    url: "http://www.101cookbooks.com/archives/green-rice-with-smoked-paprika-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/green_rice_recipe.jpg",
    cookTime: "PT40M",
    recipeYield: "",
    datePublished: "2012-05-15",
    prepTime: "PT5M",
    description:
      "The green rice recipe that got away from me - lots of spring produce, finished with smoked paprika and toasted pine nuts.",
  },
  {
    name: "Roasted Beet and Blood Orange Salad with Spicy Greens",
    ingredients:
      "1 1/2 pounds medium gold beets\n1 1/2 pounds medium red beets\nExtra virgin olive oil\nSalt\nFreshly ground black pepper\n6 small blood oranges\nBlood Orange Sherry Vinaigrette (recipe follows)\n1/4 pound baby arugula\n1/4 pound baby spinach\n1/4 cup sherry vinegar\n1/4 cup finely chopped chives\n2 small blood oranges\n1 medium shallot, peeled, trimmed, and minced\n2 tablespoons sherry vinegar\nSalt\nFreshly ground black pepper\n1/4 to 1/2 cup extra virgin olive oil",
    url: "http://www.101cookbooks.com/archives/000135.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/beetsalad.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-01-07",
    prepTime: "",
    description:
      "A beautiful beet salad, it can be done without the greens, or with just a bit of greens as a side dish. The vinaigrette is delicious, and the salad looks stunning as part of a larger spread. It would make a great addition to any winter buffet.",
  },
  {
    name: "Spring Roll Salad Recipe with Roasted Shallot Peanut Sauce and Tamarind Dipping Sauce",
    ingredients:
      "3/4 pound fresh shiitake mushrooms \n2 tablespoons extra virgin olive oil\n2 tablespoons shoyu\n4 ounces (4 cups loosely packed) fettucine-style rice noodles \n2 carrots, sliced into matchsticks (1 cup) \n2 tablespoons chopped fresh mint \n2 tablespoons chopped fresh cilantro\n2 tablespoons chopped fresh chives \nRoasted Shallot Peanut Sauce (recipe follows) \nTamarind Dipping sauce (recipe follows) \n1/2 cup dry-roasted peanuts, chopped, for garnish \n3 medium shallots, unpeeled \n1 cup unsweetened coconut milk\n1/2 cup smooth peanut butter\n3 tablespoons natural sugar, preferably maple sugar or evaporated cane sugar\n1/2 teaspoon cayenne pepper \n1 tablespoon shoyu \n2 tablespoons plus 1 teaspoon fresh lime juice",
    url: "http://www.101cookbooks.com/archives/000468.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/springrollsalad.jpg",
    cookTime: "",
    recipeYield: "Serves 8.Makes 2 cups.Makes 1/2 cup.",
    datePublished: "2005-09-14",
    prepTime: "",
    description:
      "Imagine a spring roll without the wrapper and you've got this Myra Kornfeld salad.  A familiar chorus of flavors - sweet, sour, tangy, hot, and nutty all projected onto a mound of serpentine rice noodles and crispy mushrooms. ",
  },
  {
    name: "Red Rice Salad with Boiled Eggs and Macadamias",
    ingredients:
      "1 3/4 cups to 2 cups water\n1 cup red rice\n2 tablespoons oil \n4 large shallots, chopped\n3 cloves garlic, chopped\n1 large red chile, seeded and chopped\n1-inch piece ginger root, chopped (hs note: I grated it)\n1 teaspoon ground coriander\n1 large carrot, thinly sliced\n8 ounces green beans, trimmed and chopped\n1/2 cup coconut milk (hs note: lite is fine)\n1/4 cup soy sauce\n1/2 teaspoon molasses\n4 large eggs, boiled and peeled\n1 large lime, quartered\n1/2 cup julienned fresh basil\n1/4 cup macadamia nuts, toasted and chopped",
    url: "http://www.101cookbooks.com/archives/red-rice-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/redricesaladrecipe_07.jpg",
    cookTime: "",
    recipeYield: "Serves 8.",
    datePublished: "2007-09-19",
    prepTime: "",
    description:
      "Indonesian red rice salad with boiled eggs and macadamias. Riveting to look at, with a wonderfully complex array of flavors and textures to enjoy.\n",
  },
  {
    name: "Citrus Parmesan Farro Salad Recipe",
    ingredients:
      "4 to 6 big handfuls of mixed salad greens, washed and dried\n2 cups farro, rinsed and drained\n5 cups water (or stock)\n2 teaspoons fine-grain sea salt\n1 medium orange, zest and juice\n1 shallot, chopped\n1/3 cup Parmesan, freshly shredded\n1 tablespoon white wine vinegar\n1/2 cup good quality olive oil\na couple big pinches of salt\n1/2 cup Spanish almonds, or toasted regular almonds\n1/2 cup goat cheese, crumbled",
    url: "http://www.101cookbooks.com/archives/video-citrus-parmesan-farro-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/farro_salad_recipe_08.jpg",
    cookTime: "",
    recipeYield: "Serves 12 as a side. ",
    datePublished: "2008-03-20",
    prepTime: "",
    description:
      "This is the farro salad I took to Jack's first birthday party. My favorite citrus Parmesan vinaigrette dressed a bowl of healthy salad greens, plump farro grains, crumbled goat cheese and almonds.",
  },
  {
    name: "Vegan Caesar Salad Recipe",
    ingredients:
      "Caesar dressing:\n1/3 cup slivered or sliced almonds\n3-4 cloves garlic, peeled and crushed\n3/4 cup silken tofu\n1/4 cup olive oil\n3 tablespoons fresh lemon juice\n1 heaping tablespoon capers\n4 teaspoons caper brine\n1 teaspoon sugar\n1/2 teaspoon mustard powder\nSalt\nCroutons:\n1/4 cup olive oil\n4 cloves roasted garlic\n1 tablespoon fresh lemon juice\n1 medium size loaf French or Italian bread (little less than 1 pound), stale and torn or sliced into bite-sized pieces \n1/4 teaspoon salt\nSalad:\n1 large head romaing lettuce, chopped\nFreshly cracked black pepper\nHandful or two of spinach and/or arugula, torn into bite-sized pieces (optional)",
    url: "http://www.101cookbooks.com/archives/vegan-caesar-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/vegan_caesar_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4 to 6 as a side, 2 to 3 as a main.",
    datePublished: "2008-01-09",
    prepTime: "",
    description:
      "Vegan Caesar salad recipe from best-selling authors Isa Chandra Moskowitz and Terry Hope Romero - no eggs, no dairy. Delicious, creamy lemon-caper dressing and garlic croutons.",
  },
  {
    name: "Whiskey &amp; Wheat Berry Salad Recipe",
    ingredients:
      "1 pound wheat berries, cooked*\n3/4 cup golden raisins\n1/2 cup whiskey\n1 tablespoon natural cane sugar (or brown sugar)\n5 ounces goat cheese\n1 1/2 teaspoon adobo sauce (from a can of chipotle peppers)\n1/3 cup olive oil\n1 tablespoon lemon juice \nzest of one lemon\nfine grain sea salt\n1 cup pinenuts, toasted\n3 big handfuls of lettuce, spinach, or arugula\nscant 1 tablespoon fresh oregano leaves (or other chopped herbs)",
    url: "http://www.101cookbooks.com/archives/whiskey-wheat-berry-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/whiskey_wheatberry_salad.jpg",
    cookTime: "",
    recipeYield: "Makes a party or potluck-sized salad.",
    datePublished: "2009-04-12",
    prepTime: "",
    description:
      "A wheat berry salad recipe inspired by a crostini I tasted in Denver, Colorado made by chef Jennifer Jasinski of Rioja. It features whiskey-soaked golden raisins, adobo-kissed goat cheese, herbs, and toasted pine nuts are tossed with a bit of lettuce.",
  },
  {
    name: "Cilantro Noodle Bowl Recipe",
    ingredients:
      "8 ounces dried soba noodles\n2 - 3 cups baby Romanesco or broccoli florets\nzest of one lemon\n2 cups fresh cilantro, chopped\n2 large cloves garlic\n1/4 teaspoon cayenne powder\n1/2 teaspoon fine grain sea salt\nscant 1/2 cup extra-virgin olive oil\n12 ounces extra-firm nigari tofu",
    url: "http://www.101cookbooks.com/archives/cilantro-noodle-bowl-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cilantro_noodles.jpg",
    cookTime: "",
    recipeYield: "Serves about 4 - 6. ",
    datePublished: "2008-08-24",
    prepTime: "",
    description:
      "This zesty, cilantro-centric soba noodle bowl features a hefty dose of the green stuff, pan-toasted tofu, and plenty of vegetables. ",
  },
  {
    name: "Macaroni Salad",
    ingredients:
      "1 pound elbow macaroni\n1/4 cup / 60 ml extra virgin olive oil\n4 cups thinly sliced green onions {~3-4 bunches}\n3 medium cloves garlic, chopped\nfine grain sea salt \nlots of freshly ground black pepper\nzest and juice of one lemon\n1/3 cup / 2 oz grated Parmesan\n4 big handfuls arugula\n1 large apple, diced",
    url: "http://www.101cookbooks.com/archives/macaroni-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/macaroni_salad_recipe.jpg",
    cookTime: "PT10M",
    recipeYield: "Makes enough for a crowd or potluck.",
    datePublished: "2011-06-28",
    prepTime: "PT10M",
    description:
      "A twist on classic macaroni salad - I toss the pasta with a creamy sauce made from sauteed green onions, then add lots of black pepper, arugula, diced apple, and lemon juice to the bowl.",
  },
  {
    name: "Rajasthani Buttermilk Curry Recipe",
    ingredients:
      "1 tablespoon vegetable oil (hs note: I used clarified butter)\n1 1/2 teaspoons black mustard seeds\n1/2 teaspoon cumin seeds\n1/2 teaspoon turmeric\n1 large or 2 medium scallions, trimmed, sliced lengthwise in half and then crosswise into 1-inch lengths\n1 green cayenne chile, minced (hs note: the serrano I had on hand was a reasonable substitute)\n1/4 water, if using yogurt\n1 cup plain (full-or-reduced fat) yogurt OR 1 1/4 cups buttermilk\n1/2 teaspoon salt, or to taste\n2/3 tablespoons chopped coriander leaves (hs note: also known as cilantro)",
    url: "http://www.101cookbooks.com/archives/001407.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/buttermilk_curry_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 2 to 3.",
    datePublished: "2006-05-18",
    prepTime: "",
    description:
      "Rajasthani buttermilk curry recipe from the award-winning cookbook Mangoes &amp; Curry Leaves, by Jeffrey Alford and Naomi Duguid.",
  },
  {
    name: "Curried Apple Couscous Recipe",
    ingredients:
      "4 tablespoons unsalted butter\n1 tablespoon curry powder\n1 medium apple, cored and chopped\n3 green onions, washed, trimmed, and thinly sliced\n1 cup whole wheat couscous (or regular)\n1 3/4 cup water\n1 teaspoon sea salt\n1/2 cup pine nuts, toasted\nSmall handful of mint, chopped",
    url: "http://www.101cookbooks.com/archives/001509.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/curriedcouscousrecipe.jpg",
    cookTime: "",
    recipeYield: "Serves 6.",
    datePublished: "2006-10-03",
    prepTime: "",
    description:
      "Couscous, apples, curry powder, butter, mint, toasted pine nuts and green onions are highlighted in this dynamic, colorful couscous recipe.",
  },
  {
    name: "Roasted Cauliflower Recipe",
    ingredients:
      "4-inch segment of a thin day-old baguette\n1 medium head of cauliflower, washed\nextra-virgin olive oil\nscant 1/2 teaspoon salt\n2 cloves garlic, minced\n1 fresh red chile pepper, minced",
    url: "http://www.101cookbooks.com/archives/001533.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/roastedcauliflower.jpg",
    cookTime: "",
    recipeYield: "Serves 4. ",
    datePublished: "2006-11-29",
    prepTime: "",
    description:
      "Oven-roasted cauliflower florets with breadcrumbs, garlic, red chile pepper, salt and olive oil.",
  },
  {
    name: "Simple Butternut Squash Tart",
    ingredients:
      "1 package of puff pastry dough\nzest of one lemon\n1 cup ricotta cheese\n1 egg plus one egg yolk\n1/2 cup caramelized onions \n1/4 teaspoon sea salt\n10 very thin (1/8-inch) slices of butternut squash (I cut rounds from the neck of the squash), pre-cook them in a bit of olive oil in a covered pan for 2-3 minutes before using them on the tart\n6 - 10 very thin slices of goat cheese\npepper",
    url: "http://www.101cookbooks.com/archives/001546.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/butternutsquashtart.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2007-01-10",
    prepTime: "",
    description:
      "Puff pastry serves as the foundation for this simple yet eye-popping butternut squash tart. The golden crust supports a ricotta cheese slather, caramelized onions, thin slices of bright orange squash, and goat cheese.",
  },
  {
    name: "Cauliflower Soup with Gorgonzola",
    ingredients:
      "1 medium cauliflower\n1 tablespoon unsalted butter\n2 smallish yellow onions, peeled and finely sliced\n4 thyme sprigs\n2 bay leaves\nsea salt and freshly ground pepper\n4 cups chicken stock (hs note: I used vegetable stock)\n1 cup Gorgonzola cheese (hs note: I used 1/3 cup)\n1/3 cup creme fraiche\nparsley for garnish ",
    url: "http://www.101cookbooks.com/archives/001549.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cauliflowersoup.jpg",
    cookTime: "",
    recipeYield: "Serves four.",
    datePublished: "2007-01-15",
    prepTime: "",
    description:
      "From Skye Gyngell's cookbook A Year in my Kitchen this simple, satisfying cauliflower soup recipe is perfect served up with a bit of cold winter weather.",
  },
  {
    name: "Curried Noodle Patties",
    ingredients:
      "1-2 teaspoons (red) Thai curry paste\n4 eggs\n6 ounces tofu, diced (roughly 2/3 cup)\n1/2 cup cilantro, chopped\n6 green onions, chopped\n1/2 teaspoon sea salt\n4 cups noodles, cold\n2 tablespoons sesame or olive oil\npeanuts, green onions and cilantro for garnish",
    url: "http://www.101cookbooks.com/archives/001552.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/currynoodlepatty.jpg",
    cookTime: "",
    recipeYield: "Makes 8 -12.",
    datePublished: "2007-01-24",
    prepTime: "",
    description:
      "A great way to use up leftover noodles. These savory noodle cakes make a great lunch and are easily adaptable a hundred different ways.",
  },
  {
    name: "Ravioli Pasta Salad Recipe",
    ingredients:
      "1/2 pound ricotta-stuffed ravioli\n1 bunch thin asparagus, cut on deep bias (angle)\n10 ounce bag organic peas, thawed overnight in refrigerator\n3 - 4 big handfuls baby spinach, washed (any stems removed - optional)\na couple splashes of extra-virgin olive oil\n1/2 cup pine nuts, toasted\nfine grain sea salt\nParmesan cheese, for garnish",
    url: "http://www.101cookbooks.com/archives/001568.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/pastasalad0307.jpg",
    cookTime: "",
    recipeYield: "Serves 4 to 6.",
    datePublished: "2007-03-19",
    prepTime: "",
    description:
      "Trying to improve on typical pasta salads, this ravioli salad recipe features ricotta-stuffed raviolis, asparagus, peas, spinach, and toasted pine nuts.",
  },
  {
    name: "A Twist on Guacamole Recipe",
    ingredients:
      "1 small white onion\n1 clove garlic, minced\n4 avocados\n1/2 lime\n1/2 teaspoon salt, or to taste\na few big pinches of cumin powder\na few big pinches of Indian curry powder\nGarlic or plain naan bread, cut into wedges (not gluten free)",
    url: "http://www.101cookbooks.com/archives/a-twist-on-guacamole-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/guacamole_recipe_07.jpg",
    cookTime: "",
    recipeYield: "Makes one party platter.",
    datePublished: "2008-01-30",
    prepTime: "",
    description:
      "A favorite guacamole recipe. Served with toasted naan bread (or chips!), I've added a couple pinches of cumin and curry powder for to incorporate a slightly unexpected flavor profile.",
  },
  {
    name: "Chickpea Hot Pot Recipe",
    ingredients:
      "1 large yellow onion, chopped\na splash of olive oil\na couple pinches of salt\n2/3 cup uncooked bulgur\n1 14-ounce can of chickpeas, drained and rinsed\n4 1/2 cups vegetable stock\n1/2 cup orange juice\n1 1/2 cup cauliflower, trimmed into small trees\n2 cup kale or chard, destemmed and cut into thin ribbons\nolive oil for finishing drizzle\nred onion, chopped for garnish",
    url: "http://www.101cookbooks.com/archives/chickpea-hot-pot-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/chickpea_hotpot_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4 - 6.",
    datePublished: "2008-02-21",
    prepTime: "",
    description:
      "Not a traditional hotpot recipe, instead...a fast-cooking bulgur cooks in a light orange-juice accented broth. Plenty of chickpeas, tiny cauliflower pieces, onions, and greens add texture and substance to the hearty pot.",
  },
  {
    name: "Spring Tabbouleh Recipe",
    ingredients:
      "1 cup fine bulgur\n1 bunch of asparagus, cut into 1/2-inch segments\n1 cup peas, freshly shelled or frozen\n1 garlic clove, crushed to a paste with 2 big pinches of salt\n1 lemon, juice only\n1/3 cup extra-virgin olive oil\n1 bunch chives, finely chopped\n1 cup walnuts, toasted and chopped\n2 hard-boiled eggs, chopped*",
    url: "http://www.101cookbooks.com/archives/spring-tabbouleh-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/tabbouleh_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4 - 6.",
    datePublished: "2008-04-14",
    prepTime: "",
    description:
      "A springtime twist on a traditional tabbouleh recipe featuring peas, asparagus, chives and farm-fresh hard-boiled eggs.",
  },
  {
    name: "Spring Ragout Recipe",
    ingredients:
      "20-30 fava bean pods, removed from puffy shells\nextra virgin olive oil\nfine grain sea salt\n1 bunch thin asparagus, cut into 1/2-inch segments\n1 1/2 cups peas, freshly shelled or frozen\nzest of one lemon\nsplash of cream\npecorino cheese (Parmesan would be a fine alt.)\nedible flowers for garnish (totally optional)",
    url: "http://www.101cookbooks.com/archives/spring-ragout-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/spring_ragout_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2008-04-24",
    prepTime: "",
    description:
      "This spring ragout recipe delivers a stunning pan of fava beans, green peas, and asparagus finished off with a tiny touch of cream, lemon zest, and grated cheese.\n",
  },
  {
    name: "Simple Spring Salad Recipe",
    ingredients:
      "1 and 1/2 orange, juice only\n1/2 lemon, juice only\n1/2 small red onion, chopped\n1/4 cup extra virgin olive oil\n1/8 teaspoon fine grain salt\n4 big handfuls of salad greens, washed and dried\n1/2 cup walnut halves, toasted\n1/3 cup black olives, (the wrinkly, oily ones), pitted",
    url: "http://www.101cookbooks.com/archives/a-simple-spring-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/spring_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4.",
    datePublished: "2008-04-28",
    prepTime: "",
    description: "101 Cookbooks: A Simple Spring Salad Recipe",
  },
  {
    name: "Orzo Soup Recipe",
    ingredients:
      "7 cups vegetable broth\n1 1/2 cups whole wheat orzo (or other small pasta i.e. pastina)\n2 cups chard or spinach, chopped\n1 14-ounce can of  fire-roasted diced tomatoes, well drained\n1 teaspoon red pepper flakes.\ngood quality extra virgin olive oil\n3 egg whites\nfine grain sea salt\nsome grated Parmesan cheese (to finish)",
    url: "http://www.101cookbooks.com/archives/orzo-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/orzo_soup_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes 4-6 servings.",
    datePublished: "2008-06-02",
    prepTime: "",
    description:
      "Itty-bitty pasta plays the lead role in this simple orzo soup recipe with an egg drop soup style broth that has been boosted with flecks of chard and topped with vibrant, fire-roasted tomatoes. It's finished with an all-important thread of golden olive oil and a flurry of grated cheese. ",
  },
  {
    name: "Ten Minute Couscous Soup Recipe",
    ingredients:
      "7 cups great-tasting vegetable broth\n2 or 3 pinches crushed red pepper flakes\n3 tablespoons extra virgin olive oil\n1 cup whole wheat, barley, or regular couscous\n1 1/2 cups broccoli florets, cut into tiny pieces smaller than your thumb\n1 1/2 cups cauliflower florets, cut into tiny pieces smaller than your thumb\n4 oil-packed sun-dried tomatoes, chopped (opt)\n4 green onions, trimmed and thinly sliced\nan ounce or two of goat cheese",
    url: "http://www.101cookbooks.com/archives/ten-minute-couscous-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/couscous_soup_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4-6. ",
    datePublished: "2008-10-26",
    prepTime: "",
    description:
      "a pot of quick-cooking, beautiful, brothy couscous soup topped with a bit of melted goat cheese and bright broccoli and cauliflower florets. It is all punctuated with a spoonful of finely chopped sun-dried tomatoes.",
  },
  {
    name: "Chunky Celery Soup Recipe",
    ingredients:
      "1 large onion\n1 large russet potato\n3-4 small -medium carrots\n10 medium-length stalks of celery, washed well\n3 tablespoons extra-virgin olive oil\n2 cloves garlic, chopped\n5 cups of lightly-flavored, great tasting, vegetable broth (or water)\n2 cups cooked wild rice, brown rice, barley, or wheat berries\n1/3 cup celery leaf pesto (optional, but see head notes)\nParmesan cheese, freshly grated (optional)",
    url: "http://www.101cookbooks.com/archives/chunky-celery-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/chunky_celery_soup_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves about 6.",
    datePublished: "2008-12-14",
    prepTime: "",
    description:
      "A chunky celery soup perfect for a winter day - celery, carrots, a potato, an onion, a bit of garlic, and some leftover wild rice. ",
  },
  {
    name: "Cherry Tomato Couscous Recipe",
    ingredients:
      "3 cups cooked couscous* \n1/2 a basket of cherry tomatoes, halved\n1 medium cucumber, peeled and cut into 1/4-inch pieces\n1 cup cooked chickpeas\n1 lemon, cut in half\n1 lime, cut in half\nabout 1/4 cup extra virgin olive oil\nfine grain sea salt\nfreshly ground pepper\n1/3 cup basil or cilantro, chopped\n1/3 cup feta cheese, crumbled",
    url: "http://www.101cookbooks.com/archives/cherry-tomato-couscous-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cherry_tomato_couscous_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2009-08-12",
    prepTime: "PT10M",
    description:
      "I spent the weekend at my friend Lori's Northern California cabin and she made this tasty cherry tomato couscous for us - cherry tomatoes, cucumber, chopped basil, and chickpeas tossed with couscous, olive oil and freshly squeezed lemon and lime juice. Finished with a bit of feta.",
  },
  {
    name: "Green Soup with Ginger Recipe",
    ingredients:
      "1 large yellow onion (250g)\n2 tablespoons (30 ml.) olive oil \n1 1/2 teaspoons sea salt, plus more to taste\n1 large sweet potato (12 ounces; 350 g)\n1 large leek, white and light green parts (5 ounces; 140 g)\n1 bunch spinach (8 ounces; 225 g) \n1 large bunch green chard (12 ounces; 350 g)\n3 tablespoons (30 g) chopped fresh ginger, plus more to taste\n2 cups (500 ml) good-tasting vegetable broth\n2-4 teaspoons fresh lemon juice\nfreshly ground black pepper",
    url: "http://www.101cookbooks.com/archives/green-soup-with-ginger-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/green_ginger_soup_recipe.jpg",
    cookTime: "PT30M",
    recipeYield: "",
    datePublished: "2009-09-30",
    prepTime: "PT10M",
    description:
      "From the new Anna Thomas cookbook, Love Soup - a soup cramming more spinach, leeks, sweet potatoes and chard into each bowl than I ever thought possible. ",
  },
  {
    name: "Sweet Potato Pot Pie Recipe",
    ingredients:
      "3 tablespoons extra-virgin olive oil  \n1 medium white or yellow onion, chopped  \n3 cloves garlic, chopped  \n2 1/2 to 3 cups sweet potatoes, peeled and diced into  1/4-inch pieces  \n1/2 teaspoon salt (plus more to taste)  \n1 tablespoon adobo sauce from a can of chipotle chilies (or more to taste)  \n1 cup corn kernels, fresh or frozen  \n2 cups cold whole or low-fat milk  \n2 tablespoons cornstarch  \n1 box puff pastry dough (allow 20 to 30 minutes to thaw)  \n1 egg white",
    url: "http://www.101cookbooks.com/archives/000127.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/potpies1.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2004-11-15",
    prepTime: "",
    description:
      "A recipe from my first book that was featured in the Washington post - sweet potatoes, chipotle, corn, onions, and puff pastry.",
  },
  {
    name: "Sicilian Broccoli and Cauliflower Pasta Recipe",
    ingredients:
      "1 bunch broccoli, trimmed of tough ends\n1 head cauliflower, quartered, core removed\n2 medium yellow onions, sliced 1/4 inch, lengthwise\n4 cloves garlic, finely chopped\nA generous pinch of saffron threads\nA generous pinch of red pepper flakes, more to taste\n1 teaspoon fresh rosemary, finely chopped\nolive oil as needed\n2 tablespoons golden raisins, plumped in warm water, drained\n1/2 cup lightly toasted pine nuts\n1/4 cup fresh chopped parsley for garnish\nFreshly grated Parmesan, to taste, about 1 cup\nkosher salt, to taste\n1 pound dried pasta, sturdy variety such as Penne Rigate (cooked al dente, according to package directions)\n1 cup pasta water, reserved from cooking (may or may not get used, but very  handy to have when putting the pasta together).",
    url: "http://www.101cookbooks.com/archives/000146.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/oxbowpasta.jpg",
    cookTime: "",
    recipeYield: "Serves 8-10.",
    datePublished: "2005-02-21",
    prepTime: "",
    description:
      "This healthy, colorful Sicilian broccoli and cauliflower pasta recipe comes from chef Tracy Bates at The Oxbow School in Napa - the students there love it.",
  },
  {
    name: "Corn Quiche Recipe in a Tef Crust",
    ingredients:
      "1 cup tef flour\n1 cup whole wheat pastry or unbleached all-purpose flour\n1/4 teaspoon sea salt\n4 tablespoons (1/2 stick) unsalted butter\n1/4 cup water\nTabasco Sauce, to taste\n2 cups fresh corn kernels\n1 cup milk or soy milk\n4 large eggs\n1/4 teaspoon sea salt\n1/2 cup shredded Swiss cheese\n2 scallions, chopped\n1/2 cup minced green bell pepper\n2 cherry tomatoes",
    url: "http://www.101cookbooks.com/archives/000278.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/tefrecipe_05.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-07-14",
    prepTime: "",
    description:
      "Rebecca Wood's perfect summertime quiche - creamy corn flavor hits your tongue first, the summer tomatoes burst next, and then you are hit with accents of slivered basil and scallions. Made in a tef flour crust.",
  },
  {
    name: "Thousand Layer Lasagne Recipe",
    ingredients:
      "1 pound fresh egg pasta sheets (or make some from scratch)\nbutter to prep baking dish\n3 tablespoons extra-virgin olive oil\n1 teaspoon fine grain sea salt\n1 teaspoon crushed red pepper flakes\n1 clove garlic, chopped\n1 28-ounce can crushed organic tomatoes\nzest of one lemon\n3 4-ounce balls of fresh mozzarella, torn up into little pieces\na handful of slivered basil (optional)\nfreshly grated Parmesan (optional)",
    url: "http://www.101cookbooks.com/archives/thousand-layer-lasagna-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/lasagnerecipe_07.jpg",
    cookTime: "",
    recipeYield: "Serves many.",
    datePublished: "2007-05-10",
    prepTime: "",
    description:
      "My favorite lasagna recipe. Dozens and dozens of whisper-thin sheets of fresh pasta brushed with the most vibrant red tomato sauce imaginable all intersecting layer after layer of warm, oozy, fresh mozzarella.",
  },
  {
    name: "Beautiful Bulgar and Spinach Pilaf with Labneh and Chili Roast Tomatoes",
    ingredients:
      "1 onion, finely chopped\n4 tablespoons olive oil\n2 garlic cloves\n6 ounces bulgar wheat\n1 1/4 cups (10 fluid ounces) vegetable or chicken stock\nsalt and pepper\n10 1/2 ounces spinach\nleaves torn from a small bunch of mint, torn\nextra-virgin olive oil\nFor the labneh:\n1 1/8 cups (9 fluid ounces Greek yogurt)\n1 fat garlic clove, crushed\npinch of salt\nFor the tomatoes:\n12 plum tomatoes\n4 tablespoons olive oil\n2 tablespoons balsamic vinegar\n1 - 1 1/2 teaspoon harissa\n2 teaspoons soft dark-brown sugar\nFor the onions:\n2 onions, very finely sliced\n2 tablespoons olive oil\n1/2 teaspoon ground cinnamon\n1 1/2 teaspoon soft brown sugar\njuice of 1/2 small lemon",
    url: "http://www.101cookbooks.com/archives/a-beautiful-bulgar-and-spinach-pilaf-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/pilafrecipe_07.jpg",
    cookTime: "",
    recipeYield: "Serves 4 to 8 (main / side).",
    datePublished: "2007-06-03",
    prepTime: "",
    description:
      "A bejeweled platter of bulgur wheat,chili roasted tomatoes, caramelized onions, spinach, and yogurt cheese. A perfect companion for grilled kabobs.",
  },
  {
    name: "Gnocchi Recipe",
    ingredients:
      "Scant 2 pounds of starchy potatoes (2 large russets)\n1/4 cup egg, lightly beaten\nscant 1 cup of unbleached all-purpose flour\nfine grain sea salt",
    url: "http://www.101cookbooks.com/archives/how-to-make-gnocchi-like-an-italian-grandmother-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/gnocchirecipe_07.jpg",
    cookTime: "",
    recipeYield: "Serves six.",
    datePublished: "2007-06-18",
    prepTime: "",
    description:
      "A platter of petite, potato pillows coated with glistening flecks of basil pesto. The gnocchi recipe taught to me by Francesca's mother.",
  },
  {
    name: "Porcini Mushroom Fettuccine",
    ingredients:
      "1/4 cup extra-virgin olive oil\n2-3 fresh porcini mushrooms, chopped (1-2 cups)\nfine grain sea salt\n5 cloves garlic, chopped\n1 pound fresh egg fettuccine noodles\nscant 1/2 teaspoon black pepper, freshly ground\n1/4 cup pecorino cheese, grated\nzest of one lemon",
    url: "http://www.101cookbooks.com/archives/porcini-mushroom-fettuccine-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/fettuccinerecipe_07.jpg",
    cookTime: "",
    recipeYield: "Serves 4 to 6.",
    datePublished: "2007-10-04",
    prepTime: "",
    description:
      "This fettuccine recipe was inspired one of the many trips I made to the Testaccio Market while in Rome. Fresh ribbons of pasta with olive oil, porcini mushrooms, garlic, black pepper, and pecorino cheese.",
  },
  {
    name: "Garlic Soba Noodle Recipe",
    ingredients:
      "8 ounces dried soba noodles\n3/4 cup bread crumbs\n1/4 cup Parmesan freshly grated\nbig pinch of salt\n12 ounces extra firm organic tofu, cut into 6 rectangular slabs\n2 eggs, lightly beaten\na generous splash of olive oil\n1 bunch green onions, greens trimmed, thinly sliced\n4 big handfuls of chard, spinach or kale - destemmed and cut into bite-sized pieces\n1 teaspoon garlic powder\n1/2 cup Parmesan, freshly grated\na few baby radishes, sliced paper thin",
    url: "http://www.101cookbooks.com/archives/garlic-soba-noodles-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/soba_noodles_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4-6.",
    datePublished: "2008-03-03",
    prepTime: "",
    description:
      "Delicious garlic soba noodle recipe made with soba noodles, Parmesan, greens, and garlic powder topped with golden Parmesan-crusted tofu.",
  },
  {
    name: "Baked Pasta Casserole Recipe",
    ingredients:
      "extra-virgin olive oil\n3/4 pound whole wheat pasta shells \nsea salt\n1 large yellow onion, chopped\n2 cloves garlic, chopped\n4 cups well-chopped fresh spinach\n1 1/2 cups sliced almonds, lightly toasted\nzest of 2 lemons\n8 ounces mozzerella, shredded or torn into small pieces",
    url: "http://www.101cookbooks.com/archives/baked-pasta-casserole-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/baked_pasta_casserole_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 8.",
    datePublished: "2008-03-13",
    prepTime: "",
    description:
      "This baked pasta recipe features vibrant flecks of chopped spinach and lemon zest, toasted almond slices and oozy, bubbly cheese all enveloping sturdy little pasta shells.",
  },
  {
    name: "Lazy Day Peanut Noodle Salad Recipe",
    ingredients:
      "1 8 ounce package soba noodles\n1 bunch asparagus spears, ends trimmed then cut into 1/2-inch segements\n3/4 cup creamy peanut butter\n1/4 cup (brown) rice vinegar\n2 cloves garlic, crushed and chopped\ndrizzle of toasted sesame oil\nbig pinch of crushed red pepper flakes\n1/4-1/2 cup hot water\n1 small bunch of spring onions or scallions, thinly sliced\n1/2 cup peanuts\n12 ounces extra-firm (organic) tofu, cut into small cubes (feel free to heat the tofu in a skillet if you like, but cold is good too)",
    url: "http://www.101cookbooks.com/archives/lazy-day-peanut-noodle-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/peanut_noodle_salad_recipe_08.jpg",
    cookTime: "",
    recipeYield: "Serves 6 - 8.",
    datePublished: "2008-03-30",
    prepTime: "",
    description:
      "A peanut noodle salad recipe featuring soba noodles punctuated with spring onions, tofu, peanuts, and asparagus. Serve it up family-style on a platter at a potluck, party, or buffet - it holds up perfectly at room temp.\n",
  },
  {
    name: "Cracker Lasagna Recipe",
    ingredients:
      "1 1/2 cups cottage cheese\n1 cup milk\n2 large eggs\nscant 1/2 teaspoon fine grain sea salt\nsplash of olive oil\n1 medium onion, chopped\n1 shallot, chopped (optional)\n1/4 pound brown mushrooms (about 12 medium), brushed clean and chopped\npinch of fresh thyme (optional)\n2 big handfuls of spinach, washed and chopped\n18 2 x 4 - inch crispy crackers (see head notes)\n9 - inch round baking dish, or an 8x8 baking pan will work as well",
    url: "http://www.101cookbooks.com/archives/cracker-lasagna-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cracker_lasagna_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes about 8 - 10 servings.",
    datePublished: "2008-06-09",
    prepTime: "",
    description:
      "Not a traditional lasagna recipe by any account - a healthier version that is still quite decadent. Imagine a lasagna, but instead of using pasta noodles, I used crispy, whole-grain crackers. Most people use pound after pound of beef and/or sausage, and then more beef. Instead, I pureed cottage cheese (which gets silky smooth), and thinned it out with a bit of milk and a couple eggs - some chopped mushrooms and spinach are included as well.",
  },
  {
    name: "Peach Gnocchi Recipe",
    ingredients:
      "Scant 2 pounds of starchy potatoes (2 large russets, or 3-4 smaller ones)\n1/4 cup egg, lightly beaten\n4 peaches, extra ripe, cut in half, pitted and peeled and pureed with the juice of half a lemon (you should end up with about 1 cup of puree)\n1/2 teaspoon fine grain sea salt\n1 cup of whole wheat pastry flour OR unbleached all-purpose flour\n1/2 cup shallots, minced\n1 tablespoon unsalted butter\n2 cups Champagne\ncream\nsalt\na bit of fresh thyme",
    url: "http://www.101cookbooks.com/archives/peach-gnocchi-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/peach_gnocchi.jpg",
    cookTime: "",
    recipeYield: "Serves six to eight.",
    datePublished: "2008-09-19",
    prepTime: "",
    description:
      "A savory peach gnocchi in a champagne shallot sauce inspired by a trip to Valparaiso, Chile.",
  },
  {
    name: "Slurp-tastic Herb Noodles Recipe",
    ingredients:
      "4 ounces thin, dried spinach pasta  (thin)\n1 cup coconut milk (light is fine)\nscant 1 tablespoon green or yellow curry paste\n1 1/2 cups lightly flavored vegetable broth\n~1/4 teaspoon salt (more or less depending on the saltiness of your broth)\n6 ounces tofu, cut into small cubes or pieces\n1/4 cup chives, minced\n1/3 cup cilantro, chopped\n1/4 cup basil, chopped just before using\npinch of crushed red chile peppers",
    url: "http://www.101cookbooks.com/archives/slurptastic-herb-noodles-recipe.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/herb_noodles.jpg",
    cookTime: "",
    recipeYield: "Serves 2 to 4.",
    datePublished: "2008-09-30",
    prepTime: "",
    description:
      "A big, slurpy bowl of whisper-thin spinach noodles draped in a spicy curry and herb broth - inspired by a beautiful box of noodles I picked up in Mill Valley, Ca.",
  },
  {
    name: "Borlotti Bean Mole with Roast Winter Squash",
    ingredients:
      "~1 1/2 cups (7 ounces) fresh borlotti beans\n~1 1/2 cups (7 ounces) winter squash\nolive oil\n4 - 5  big leaves of kale (3 1/2 ounces)\n2 tablespoons butter\n1 medium onion, chopped\n2 - 4 red jalapeno chiles, halved, seeded, and chopped\n2 garlic cloves, chopped\n1 pound of fresh plum tomatoes, chopped or 14-ounce can\n2 teaspoons paprika\n1 ounce of almonds, dark roasted and finely ground\n2 ounces dark 70% dark chocolate, broken into pieces\nsalt",
    url: "http://www.101cookbooks.com/archives/borlotti-bean-mole-with-roast-winter-squash-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/pumpkin_mole_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4.",
    datePublished: "2008-10-11",
    prepTime: "",
    description:
      "A rich, hearty vegetarian mole recipe from Denis Cotter's new book. Seasonal beans, squash, and kale are baked in a rich, hearty chocolate and paprika-spiked mole. ",
  },
  {
    name: "Miso Soup Recipe",
    ingredients:
      "3 ounces dried soba noodles\n2 - 4 tablespoons miso paste (to taste) \n2 - 3 ounces firm tofu (2 handfuls), chopped into 1/3-inch cubes\na handful of watercress or spinach, well washed and stems trimmed\n2 green onions, tops removed thinly sliced\na small handful of cilantro\na pinch of red pepper flakes",
    url: "http://www.101cookbooks.com/archives/miso-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/miso_soup_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 2 - 3.",
    datePublished: "2009-01-25",
    prepTime: "",
    description:
      "A simple, everyday approach to miso soup - it yields me a bowl of soup in five or ten minutes. You can keep it simple if you like, but in this version I add soba noodles and tofu, and a few garnishes.",
  },
  {
    name: "Seaweed Risotto Recipe",
    ingredients:
      "3 tablespoons extra-virgin olive oil\n1 large yellow onion, chopped\n2 medium shallots, chopped\n3 cloves garlic, chopped\n3/4 teaspoon fine-grain sea salt\n2 cups lightly pearled barley or pearled farro\n1 cup good-quality dry white wine\n6 cups water or lightly-flavored vegetable broth\n1 lemon, zest and some juice\n1/3 cup mascarpone cheese\n1/2 cup freshly grated Parmesan cheese\n1/4 ounce dried nori seaweed, toasted\n1 1/2 cups finely chopped spinach\n1 cup walnuts, toasted",
    url: "http://www.101cookbooks.com/archives/seaweed-risotto-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/seaweed_risotto_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2009-01-28",
    prepTime: "",
    description:
      "A seaweed risotto recipe inspired by a trip to Chile. This version calls for dried nori seaweed, pearled barley, lots of finely chopped spinach, and a blend of cheeses. ",
  },
  {
    name: "Almost Cheeseless Pasta Casserole Recipe",
    ingredients:
      "zest of one large lemon\n8 ounces dried whole wheat pasta (penne or something comparable in size)\n1 1/2 cups butternut squash, peeled and sliced into quarter sized pieces\n3 handfuls kale, chard, and/or spinach, loosely chopped\n2 cups plain Greek yogurt (I use 2% here)\n2 egg yolks\n3 cloves garlic, chopped\n1/2 teaspoon fine grain sea salt\n2/3 cup sliced almonds, toasted\n1/4 cup Kalamata olives, pitted and torn into pieces\nscant 1/4 cup feta cheese, crumbled\n1/4 cup fresh mint, chopped",
    url: "http://www.101cookbooks.com/archives/almost-cheeseless-pasta-casserole-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cheeseless_pasta_casserole.jpg",
    cookTime: "",
    recipeYield: "Serves 6 -8 as a side.",
    datePublished: "2009-02-18",
    prepTime: "",
    description:
      "Trying to keep this pasta casserole recipe on the lighter side, I tossed a rustic farro pasta in yogurt that had been beaten with a bit of egg along with garlic, toasted almonds, chard, butternut squash, and olives. Baked until golden.",
  },
  {
    name: "Walnut Miso Noodle Recipe",
    ingredients:
      "4 ounces whole wheat spaghetti or linguini (or soba)\n1 small bunch of asparagus, sliced thinly (1/4-inch thick)\n1/2 cup walnuts, toasted\n1/4 cup extra virgin olive oil\n1 medium clove garlic, peeled\n2 tablespoons mellow white miso paste\n2 tablespoons white wine vinegar\n1 teaspoon honey\n2 big pinches salt (or to taste)\n1/4 cup+ warm water\nTopping ideas: sliced green onions, chopped chard stems and leaves that have been cooked for a minute or two in a skillet with a bit of olive oil and salt (see photo), chopped fresh chives, toasted walnuts",
    url: "http://www.101cookbooks.com/archives/walnut-miso-noodles-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/walnut_miso_noodles.jpg",
    cookTime: "",
    recipeYield: "Serves 1 - 2.",
    datePublished: "2009-04-01",
    prepTime: "",
    description:
      "A hearty noodle bowl recipe - whole wheat noodles, plenty of sliced asparagus and other seasonal produce are tossed with a creamy, walnut-miso dressing.",
  },
  {
    name: "Ginger-Poached Noodles Recipe",
    ingredients:
      "4 cups vegetable broth\n2 ounces fresh ginger, peeled and thinly sliced\n8 ounces firm tofu, cut into small cubes\n1-2 cups (half a bunch) of broccolini, broccoli, or baby broccoli - trimmed\n4 ounces dried spinach noodles, soba, or noodles of your choice\n1 - 2 tablespoons shoyu or soy sauce\n1/4 cup fresh basil, shredded\nscant 1/4 cup fresh mint, shredded\na squeeze of lime juice\ncrushed red pepper flakes (opt)\ntoasted sesame oil (opt)",
    url: "http://www.101cookbooks.com/archives/gingerpoached-noodles-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/ginger_poached_noodles.jpg",
    cookTime: "",
    recipeYield: "Serves 2-3.",
    datePublished: "2009-04-19",
    prepTime: "",
    description:
      "Poached spinach noodles, tofu, and baby broccoli in ginger broth. Finished with a splash of soy sauce, mint, basil, lime juice and red pepper flakes. Quick, simple, and invigorating.",
  },
  {
    name: "Summer Squash Gratin Recipe",
    ingredients:
      "zest of one lemon\n1 1/2 pounds summer squash or zucchini, cut into 1/6th-inch slices\n1/2 teaspoon fine grain sea salt\n1/4 cup fresh oregano leaves\n1/4 cup fresh Italian parsley\n1 large garlic clove, chopped\n1/4 teaspoon fine grain sea salt\npinch of red pepper flakes\n1/2 cup extra-virgin olive oil\n1/4 cup unsalted butter\n2 cups fresh whole wheat bread crumbs*\n1/2 pound waxy potatoes, sliced transparently thin \n3/4 cup grated Gruyere cheese, grated on a box grater (or feta might be good!)",
    url: "http://www.101cookbooks.com/archives/summer-squash-gratin-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/summer_squash_gratin.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2009-06-11",
    prepTime: "",
    description:
      "A decadent, crunchy-topped summer squash gratin made from thinly sliced summer squash, potatoes, oregano pesto, and brown-buttered breadcrumbs- all baked at high-temperature until the squash is tender and the top is crunchy.",
  },
  {
    name: "Lasagna Tart Recipe",
    ingredients:
      "2 medium zucchini, sliced into very very thin coins\nscant 1 teaspoon fine grain sea salt\nTart Crust\n2 cups whole wheat pastry flour (or spelt flour)\n1 teaspoon fine grain sea salt\nzest of one lemon\n1/4 cup olive oil\nscant 1/2 cup cold water\nTomato Sauce\n3 cloves garlic, minced\n2 tablespoons extra-virgin olive oil\nscant 1 teaspoon red pepper flakes\npinch of salt\n1 14-ounce can crushed tomatoes\n1 1/2 cups ricotta cheese",
    url: "http://www.101cookbooks.com/archives/lasagna-tart-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/lasagna_tart_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 8.",
    datePublished: "2009-06-28",
    prepTime: "",
    description:
      "My mom's friends hosted a shower for my sister and served something similar to this. A noodle-free lasagna baked in a pie crust - layers of zucchini, ricotta, and tomato sauce.",
  },
  {
    name: "Arugula Pesto Wheat Berries Recipe",
    ingredients:
      "3 cups cooked wheat berries*\n3 medium garlic cloves\n2/3 cup pine nuts (or sliced almonds), toasted (divided)\n3 cups loosely packed arugula leaves\n1/2 cup freshly grated Parmesan \n2 big pinches salt\n1 tablespoon fresh lemon juice\n1/3 cup olive oil\n1/3 cup black Kalamata olives, chopped\n4 - 6 ounces seitan,  (optional), chopped and pan-fried into crispy bits in a bit of oil\na bit of shaved Parmesan as garnish",
    url: "http://www.101cookbooks.com/archives/arugula-pesto-wheat-berries-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/wheatberry_arugula_pesto.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2009-08-03",
    prepTime: "PT15M",
    description:
      "A peppery arugula pesto tossed with a bowl of plump, chewy wheat berries. The bite of the arugula is tamed by the creaminess of the pine nuts in the pesto, and the saltiness of the grated Parmesan and chopped Kalamata olive offsets the wheat berries nicely.",
  },
  {
    name: "Pounded Walnut Strozzapreti",
    ingredients:
      "3/4 cup / 3.5 oz / 100g walnuts\n1 clove garlic, peeled, germ removed if garlic sprouted\n1/4 teaspoon fine grain sea salt\n2/3 cup / 5oz / 150ml extra-virgin olive oil\n3 tablespoons marjoram, chopped\n3 tablespoons parsley, chopped\n1/2 cup / 1 oz / 30 g pecorino Romano, grated\nsalt &amp; pepper\n1 pound / 16 oz / 460g short farro pasta",
    url: "http://www.101cookbooks.com/archives/pounded-walnut-strozzapreti-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/walnut_pasta_recipe.jpg",
    cookTime: "PT20M",
    recipeYield: "",
    datePublished: "2009-12-20",
    prepTime: "PT10M",
    description:
      "Inspired by Mona Talbott's recipe in the new Coco cookbook, a pounded walnut pesto with marjoram and parsley, tossedwith farro pasta and Pecorino cheese.",
  },
  {
    name: "Ribollita",
    ingredients:
      "3 tablespoons extra-virgin olive oil, plus more for drizzling\n4 celery stalks, chopped\n3 medium cloves garlic, chopped\n2 medium carrots or equiv. winter squash, chopped\n1 medium red onion, chopped\n1 14-ounce / 400 ml can crushed tomatoes\n1/2 teaspoon crushed red pepper flakes\n1 pound / 16 ounces / 450g cavolo nero (lacinato kale, Tuscan kale), stems trimmed off and leaves well chopped\n4 cups / 22 oz / 620g cooked white beans\n1/2 pound / 8 oz / 225g crustless loaf of bread\n1 1/2+ teaspoons fine grain sea salt\nzest of one lemon\nlots of well-chopped oily black olives",
    url: "http://www.101cookbooks.com/archives/ribollita-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/ribollita_recipe.jpg",
    cookTime: "PT60M",
    recipeYield: "",
    datePublished: "2010-01-10",
    prepTime: "PT20M",
    description:
      "An impromptu freezer cleaning inspired this huge pot of ribollita. It's a thick Tuscan stew - dark greens, lots of beans, vegetables, olive oil, thickened with day-old bread. ",
  },
  {
    name: "Saffron Pasta Salad",
    ingredients:
      "Saffron vinaigrette:\n1/4 cup red wine vinegar\n1/2 teaspoon saffron threads\n1 medium garlic clove, smashed\n1/2 teaspoon salt\n2 tablespoons lemon juice\n2 teaspoons Dijon mustard\n1/2 cup / 120 ml olive oil\nbit of sugar/honey or splash of cream (if needed)\n12 ounces / 340 g dried pasta (see head notes)\n1 pound / 16 oz / 453g  thin asparagus, ends trimmed,  cut into 1/2-inch segments\n3 ounces / 85g goat cheese, crumbled\nfresh chopped chive and toasted pine nuts  (optional)",
    url: "http://www.101cookbooks.com/archives/saffron-pasta-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/saffron_pasta_salad_recipe.jpg",
    cookTime: "PT35M",
    recipeYield: "",
    datePublished: "2010-03-20",
    prepTime: "PT20M",
    description:
      "A spring pasta salad made with a vibrant red-wine and saffron vinaigrette, asparagus, and toasted whole wheat orecchiette pasta from Puglia.",
  },
  {
    name: "Pappardelle with Spiced Butter",
    ingredients:
      "1/4 teaspoon saffron threads\npinch of salt\n1 stick / 4 oz / 100 g butter\n2 tablespoons extra virgin olive oil\n6 medium shallots, chopped\n1/2 teaspoon ground ginger\n1/2 teaspoon sweet paprika\n1/2 teaspoon ground coriander\n1/2 teaspoon ground cinnamon\nscant 1/2 teaspoon cayenne pepper\n1/4 teaspoon red chile flakes\n1/4 teaspoon ground turmeric\n1/4 teaspoon+ fine grain sea salt\nblack pepper\n1/2 pound / 8 oz / 225 g dried pappardelle egg pasta \n1/2 pound / 8 oz / 225 g asparagus, sliced into 1/4-inch rounds\nsplash of cream\n1/2 cup / 2 oz / 60 g pine nuts, toasted and chopped\n2 tablespoons roughly chopped mint\n2 tablespoons roughly chopped parsley",
    url: "http://www.101cookbooks.com/archives/pappardelle-with-spiced-butter-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/spiced_pappardelle_recipe.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2010-05-18",
    prepTime: "PT20M",
    description:
      "A recap of my Sunday, including a few portraits I shot, plus a top-notch pasta with spiced butter and asparagus inspired by a recipe from Yotam Ottolenghi's new book.",
  },
  {
    name: "Farro &amp; Herbs Recipe",
    ingredients:
      "2 cups / 13 oz / 370 g uncooked semi-pearled farro\n2 teaspoons fine grain sea salt\n5 cups water\n1/3 cup creme fraiche (see head note)\n2 teaspoons freshly squeeze lemon juice (plus zest)\n2 teaspoons good-quality white wine vinegar\n2 bunches / 1 oz fresh chives, minced\n3 tablespoons chopped fresh dill\nscant teaspoon fresh thyme leaves\nmore salt and freshly ground black pepper, to taste\n6 oz / 170g (good) mozzarella or bocconcini, cut or torn into chunks",
    url: "http://www.101cookbooks.com/archives/farro-herbs-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/farro_herb_recipe.jpg",
    cookTime: "PT30M",
    recipeYield: "",
    datePublished: "2010-06-06",
    prepTime: "PT5M",
    description:
      "Because I can't seem to get enough farro lately- a lunch made from farro, bocconcini, a bit of homemade creme fraiche, and herbs from last weeks farmers' market. And a couple pics from Golden Gate Park.",
  },
  {
    name: "Spring Pasta Recipe",
    ingredients:
      "8 ounces / 225 g cooked, leftover pasta\n2 eggs\nfine grain sea salt\n1 tablespoon olive oil\n1 tablespoon unsalted butter\n3 big handfuls of sliced asparagus, and/or pea shoots, or tiny broccoli trees, or shredded greens - anything quick cooking and fresh\nchopped avocado\nchopped herbs",
    url: "http://www.101cookbooks.com/archives/spring-pasta-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/spring_pasta_recipe.jpg",
    cookTime: "PT5M",
    recipeYield: "Serves 2.",
    datePublished: "2011-04-17",
    prepTime: "PT5M",
    description:
      "A quick spring pasta made with leftover noodles, market vegetables, egg, and a bit of avocado. ",
  },
  {
    name: "Farro &amp; Millet Risotto",
    ingredients:
      "3/4 cup / / 5 oz / 150 g  uncooked millet\n4 tablespoons extra virgin olive oil\nfine grain sea salt\n1/4 cup / 2 oz / 55 g unsalted butter\n2 medium yellow onions, thinly sliced\n1 garlic clove, smashed and chopped\n2 cups / 14 oz / 400 g semi-pearled farro\nroughly 7 cups / 1.6 l good-tasting vegetable broth\n2 big handfuls of freshly grated Parmesan\nAdd-ins: When delicata squash as still in season - I cube and roast it to top this risotto. In the photo above you'll also see I used some chopped chives and a generous drizzle of curried brown butter made from simply adding a bit of curry powder to a skillet of butter I'd browned over medium heat. But now that we are smack in the middle of spring, I've been trading out the squash for chopped asparagus and whole peas - adding them to the pot in the last few minutes.",
    url: "http://www.101cookbooks.com/archives/farro-and-millet-risotto-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/millet_risotto_recipe.jpg",
    cookTime: "PT30M",
    recipeYield: "Serves 6-8.",
    datePublished: "2011-04-27",
    prepTime: "PT5M",
    description:
      "A few behind-the-scenes shots from the Whole Living magazine photo shoot. And a simple Farro &amp; Millet Risotto that is easily adaptable based on what is in season.",
  },
  {
    name: "Sesame Yogurt Pasta Salad",
    ingredients:
      "Sauce:\n2 tablespoons extra virgin olive oil\n1 medium garlic clove, minced\n1/2 teaspoon ground cumin\n1/2 teaspoon ground coriander\n1/4 teaspoon cayenne pepper\n1/2 teaspoon turmeric\n1/2 cup / 120 ml warm water\n1/2 cup / 120 ml tahini (sesame paste)\n1/2 cup / 120 ml plain or Greek yogurt\n3 tablespoons fresh lemon juice\nfine grain sea salt\nSalad:\na big handful of broccoli florets\na big handful of cauliflower florets\na big handful of green beans, cut into 1 1/2-inch segments\n1/2 pound / 8 oz / 225 g stuffed pasta (ravioli, etc)\na big handful/scoop of cherry tomatoes, raw or roasted\na small handful torn basil and/or cilantro\nGet a big pot of water started - you are going to want to bring it to a boil. \nWhile the water is heating, make the sauce. Heat the oil in a small saucepan over medium heat. Add the garlic, cumin, coriander, cayenne, and turmeric. Stir well, and saute for just 15-30 seconds, or until the spices are toasted and fragrant. Transfer this mixture to a medium mixing bowl and stir in the water, tahini, yogurt, lemon juice, and 1/4 teaspoon of salt. Taste and adjust to your liking - you most likely will need a bit more salt. Set aside.\nSalt the pot of water generously, and boil the broccoli, cauliflower, and green beans. Boil just 30 seconds, and quickly fish out with a slotted spoon. Run the vegetables under cold water to stop cooking. Drain well and set aside in a large mixing bowl.\nReturn the water to a boil and add the pasta. Cook until al dente, then drain and run under cold water. Really try to shake off any extra water, then add to the vegetables. Add the tomatoes, and toss gently. You can toss with half of the sauce at this point, or serve the salad with dollops of the sauce on top - to be tossed at the table. It's prettier this way. Sprinkle with the basil/cilantro (and basil flowers if you have them) and serve. Serve the extra sauce on the side - any leftover makes a good dip later in the week.\nAdapted from the Pasta Salad with Tangy Sesame-Yogurt Sauce in Peter Berley's The Modern Vegetarian Kitchen.\nPrep time: 10 min  - \n   Cook time: 10 min   \n  \nPrint Recipe",
    url: "http://www.101cookbooks.com/archives/sesame-yogurt-pasta-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/sesame_yogurt_pasta_salad.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2011-08-09",
    prepTime: "PT10M",
    description:
      "An off-beat pasta salad made with stuffed pasta, seasonal vegetables, and a spice-forward, golden sesame yogurt sauce.",
  },
  {
    name: "Nettle Pasta",
    ingredients:
      "6 - 8 ounces stinging nettles*\n8 ounces small dried pasta (orecchiette, orzo, etc)\nextra virgin olive oil\n1 large clove garlic, minced\na big handful of toasted almond slices\n3 tablespoons toasted sesame seeds\na handful of onion sprouts\nfeta cheese, crumbled - as much or as little as you like\nfine grain sea salt",
    url: "http://www.101cookbooks.com/archives/nettle-pasta-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/nettle_pasta_recipe.jpg",
    cookTime: "PT15M",
    recipeYield: "Serves 4.",
    datePublished: "2012-06-05",
    prepTime: "PT5M",
    description:
      "Nettles in a pasta with feta, sesame, almonds, and onion sprouts &amp; a few pics from the Golden Gate bridge birthday fireworks.",
  },
  {
    name: "Millet Croquettes",
    ingredients:
      "1 cup / 240 ml milk\n3 tablespoons clarified butter or olive oil\n1 small shallot, minced\n1 1/2 teaspoons fine grain sea salt\n3/4 cup / 5 oz / 145 g semolina flour\n1 1/2 cup / 2 oz finely chopped kale (remove stems first)\n1/3 cup / 20 g grated Gruyere cheese\n1 1/3 cups / 150 g cooked millet*\n30 basil leaves, chopped\n3 large eggs\n2 cups / 140 g whole wheat panko (or dried bread crumbs)",
    url: "http://www.101cookbooks.com/archives/millet-croquettes-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/savory_millet_croquettes.jpg",
    cookTime: "PT20M",
    recipeYield: "Makes about 2 dozen croquettes.",
    datePublished: "2012-10-17",
    prepTime: "PT180M",
    description:
      "Millet croquettes - crunchy crusted, basil and kale flecked for the flight to Delhi, along with a snapshot of how I packed.",
  },
  {
    name: "Kabocha French Lentil Soup",
    ingredients:
      "1 kabocha or other dark orange winter squash, 1 1/2 lb. / 24 ounces / 680 g\n1/2 cup / 120 ml water\n1 tablespoon olive oil\nsea salt\n1 cup / 7 oz / 200 g green lentils, rinsed\n5 coins ginger, 1/8-inch thick\n1 whole star anise\n6 cups / 1.5 liters water\n1 teaspoon sea salt, plus more to taste\n1/4 cup / 60 ml olive oil\n1 yellow onion, medium dice\n1 leek, sliced into 1/4 moons\n1 fennel bulb, medium dice\nred pepper flakes",
    url: "http://www.101cookbooks.com/archives/kabocha-french-lentil-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/french_lentil_soup_recipe.jpg",
    cookTime: "PT60M",
    recipeYield: "",
    datePublished: "2010-02-14",
    prepTime: "PT20M",
    description:
      "An anise and ginger-spiked French lentil soup, from a charming little cookbook I stumbled on titled SoupLove. The broth is thickened by lots of roasted winter squash, and it's great with lots of garlicky croutons.",
  },
  {
    name: "Green Bean Slaw Recipe",
    ingredients:
      "2 small handfuls (about 1/2 cup) golden raisins\n1 cup / 240 ml Moscato / sweet white wine\nDressing:\nyolk of one hard-boiled egg\n3 tablespoons creme fraiche or heavy cream\n1/3 cup / 80ml extra virgin olive oil\n1 1/2 tablespoons white wine vinegar\n1/4 teaspoon fine grain sea salt\n-------------------------\n1/2 a small cabbage, cored and shredded very finely\n2 tablespoons white wine vinegar\n2 big handfuls green beans or haricot verts, very thinly sliced and cooked in a pot of boiling salted water for 20 seconds, drained (well) immediately, and cooled under cold running water. \nA big handful of arugula, roughly chopped\n2 handfuls (about 3/4 cup) toasted walnut halves\n2 handfuls of torn rustic bread, pan-toasted until golden in a big splash of olive oil\nA bit of shaved pecorino cheese",
    url: "http://www.101cookbooks.com/archives/green-bean-slaw-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/green_bean_slaw_recipe.jpg",
    cookTime: "PT20M",
    recipeYield: "Serves 6-8.",
    datePublished: "2010-09-27",
    prepTime: "PT180M",
    description:
      "A nut-studded, slaw-like green bean salad I made for lunch yesterday from a few things I picked up in the nearby shops and stalls here in the Testaccio neighborhood of Rome - moscato-soaked raisins, arugula, perorino cheese, croutons. Plus a few travel photos.",
  },
  {
    name: "Bulgur, Celery and Pomegranate Salad",
    ingredients:
      "2/3 cup (100g) medium or coarse bulgur\n1 pound (400g) celery (a small head), cut in thin slices on a slight bias\nseeds of 1/2 large pomegranate\n3/4 cup (75g) walnuts, roughly chopped\n1 small bunch of flat-leaf parsley\n1 scant tablespoon fresh mint, finely chopped \nPomegranate Dressing:\njuice of 1/2 large pomegranate\n1/2 garlic clove, crushed to a paste with 1/2 teaspoon of salt\n6 tablespoons extra-virgin olive oil",
    url: "http://www.101cookbooks.com/archives/bulgur-celery-and-pomegranate-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/pomegranatesaladrecipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4.",
    datePublished: "2008-12-23",
    prepTime: "",
    description:
      "This lovely, jeweled pomegranate salad recipe is from Samuel and Samantha Clark's book Moro East - toasted walnuts, celery, mint, parsley, and garlic. An easy, delicious, and a pretty addition to any table.",
  },
  {
    name: "A Good Soup for the Sick",
    ingredients:
      "1 pound cranberry beans (like Borlotti)\n8 cups of water\n15 medium cloves of garlic, peeled and trimmed\n2 big shallots (I might have used a white onion but didn't have one), sliced on the axis into thin crescents\n2-3 dried smoked chiles (I used smoked serranos) but I suspect dried chipotles or even one or two chipotles from the can (in adobo sauce) would work nicely\n2 teaspoons+  fine sea salt for seasoning\na drizzle of flavorful extra-virgin olive oil\na small handful of cilantro, chopped\na couple (optional) handfuls of a salty hard cheese, Parmesan, grated (I think my mystery cheese was actually Three Sisters Serena)",
    url: "http://www.101cookbooks.com/archives/001397.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/soup_for_when_sick.jpg",
    cookTime: "",
    recipeYield: "Serves 4 to 6",
    datePublished: "2006-04-21",
    prepTime: "",
    description:
      "Turn to this miraculously delicious soup when you are feeling sick - beans, water, garlic, shallots, chiles. Total active prep time was under five minutes, the rest is just waiting and anticipating.\n",
  },
  {
    name: "Egg Salad Sandwich (the only one I'll eat)",
    ingredients:
      "6 large eggs\n1-2 tablespoons mayonnaise (or Greek yogurt)\nSalt and pepper\nA tiny squeeze of lemon juice\n2 stalks celery, washed and chopped\n1/2 bunch chives, chopped\n2 small handfuls of lettuce\n8 slices of whole grain bread, toasted",
    url: "http://www.101cookbooks.com/archives/001575.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/eggsaladsandwich.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2007-04-08",
    prepTime: "",
    description:
      "The egg salad sandwich recipe I turn to multiple times a week. Light on the mayo, with good quality eggs, chopped celery, and a sprinkling of chives on thinly sliced whole grain bread.",
  },
  {
    name: "Quinoa and Grilled Zucchini Recipe",
    ingredients:
      "1 large avocado, ripe\njuice of 1 lime\n1/4 cup lightly packed cilantro\n1 clove garlic\n1/4 cup plain yogurt\n3/4 cup water\n1/2 teaspoon fine grain sea salt\n3 large eggs\n1 large zucchini, cut into 3/4-inch thick coins\n1/4 cup extra-virgin olive oil\ncouple pinches of fine grain sea salt\n2 cups quinoa, cooked, room temperature\n1/4 cup pine nuts, toasted\n1/4 cup goat cheese, crumbled\n a bit of chopped cilantro for garnish",
    url: "http://www.101cookbooks.com/archives/quinoa-and-grilled-zucchini-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/quinoagrilledzucchinirecipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4 to 6.",
    datePublished: "2007-07-30",
    prepTime: "",
    description:
      "A great way to use nutritious quinoa. This quinoa and grilled zucchini recipe is tossed with a pretty, pale green cilantro-flecked avocado dressing. ",
  },
  {
    name: "Vegetarian Lentil Burger Recipe",
    ingredients:
      "3 cups cooked black lentils\n4 large eggs\n1/2 teaspoon fine-grain sea salt\n1 onion, finely chopped\n1 cup toasted fine (whole-grain) bread crumbs\n 1 tablespoon extra-virgin olive oil (or clarified butter)",
    url: "http://www.101cookbooks.com/archives/vegetarian-lentil-burgers-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/lentilburgerrecipe_07.jpg",
    cookTime: "",
    recipeYield: "Makes 12 mini burgers.",
    datePublished: "2007-09-09",
    prepTime: "",
    description:
      "Tasty, hearty vegetarian lentil burger recipe. Slathered with saffron yogurt and stuffed with avocado, lettuce, and onions. ",
  },
  {
    name: "Lively Up Yourself Lentil Soup Recipe",
    ingredients:
      "2 cups black beluga lentils (or green French lentils), picked over and rinsed\n1 tablespoon extra virgin olive oil\n1 large onion, chopped\n1 teaspoon fine-grain sea salt\n1 28-ounce can crushed tomatoes\n2 cups water \n3 cups of a big leafy green (chard, kale, etc), rinsed well, deveined, finely chopped\nSaffron Yogurt\na pinch of saffron (30-40 threads)\n1 tablespoon boiling water\ntwo pinches of salt\n1/2 cup 2% Greek Yogurt \nVariations:\n- You can serve it with a poached egg on top,\n- or crunchy, fried shallots,\n- with a drizzle of chive infused cream,\n- or with chunks of tiny pan-fried butternut squash cubes.\n- Make a thicker version by using just a bit of water, and then spoon it over an omelette in the morning.\n- Have some cooked farro or wheat berries around? Toss some in. Millet might be good too.\n- You can finish the soup by adding your favorite spices or spice blends. Smoked paprika, crushed chiles, toasted cumin, would all work nicely.",
    url: "http://www.101cookbooks.com/archives/lively-up-yourself-lentil-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/lentil_soup_recipe_07.jpg",
    cookTime: "",
    recipeYield: "Serves 6 to 8. ",
    datePublished: "2008-01-03",
    prepTime: "",
    description:
      "Healthy, quick, and satisfying this lentil soup recipe delivers layer after layer of flavor. The tang of the tomatoes plays off the earthiness of the lentils, and the fragrant bolt of saffron yogurt brightens each bowl.",
  },
  {
    name: "Big Slurp Dumpling Soup Recipe",
    ingredients:
      "a splash of extra virgin olive oil, plus more to finish\n1 large onion, chopped\n1 vegetable bouillon cube, crushed\n4 cups water\nfine grain sea salt, to taste\n4 cups cooked yellow split peas*\n1/4 cup fresh herbs (chives or dill), see headnotes\n16 dumplings (or stuffed fresh pasta equivalent)\n1/4 cup freshly grated Parmesan cheese",
    url: "http://www.101cookbooks.com/archives/big-slurp-dumpling-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/dumpling_soup_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves four.",
    datePublished: "2008-05-08",
    prepTime: "",
    description:
      "A quick and delicious dumpling soup - tender, translucent pasta pillows, pale green from their pea-stuffed bellies, are buoyed by yellow lentils in a simple clear broth. Golden puddles of olive oil are suspended across the surface, pooling in various cracks and crevices.",
  },
  {
    name: "TLT Sandwich Recipe",
    ingredients:
      "3 tablespoons olive oil\n1/4 cup shoyu sauce (or soy sauce)\n2 tablespoons balsamic vinegar\n2 tablespoons brown sugar (or maple syrup)\n3 tablespoons adobo sauce from a can of chipotle peppers\n8 ounces of tempeh, cut into 1/3-inch thick strips\n1 small basket of cherry tomatoes (2 cups)\n1/4 cup extra-virgin olive oil olive oil\n1 tablespoon brown sugar (or maple syrup)\nscant 1/2 teaspoon of salt\n1 small head of romaine lettuce, cored, then cut into 1/4-inch ribbons\n1-2 large avocados, mashed with a pinch of salt just before assembling\n4 or 8 extra-thin slices of hearty whole grain bread, well toasted",
    url: "http://www.101cookbooks.com/archives/tlt-sandwich-recipe.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/tlt_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes four sandwiches.",
    datePublished: "2008-09-17",
    prepTime: "",
    description:
      "A vegetarian TLT sandwich inspired by the classic BLT sandwich. This version includes chipotle-marinated tempeh alongside oven-roasted cherry tomatoes, a bit of shredded lettuce, and a generous avocado slather on a thin slice (or two) of great bread. ",
  },
  {
    name: "Orange Pan-glazed Tempeh Recipe",
    ingredients:
      "1 cup freshly squeezed orange juice (3-4 large juicy oranges)\n1 tablespoon freshly grated ginger\n2 teaspoons tamari (or soy sauce)\n1 1/2 tablespoons mirin\n2 teaspoons maple syrup\n1/2 teaspoon ground coriander\n2 small garlic cloves, crushed\n roughly 10 ounces of tempeh (or extra-firm tofu)\n2 tablespoons olive oil\n1/2 lime\na handful of cilantro (coriander) leaves",
    url: "http://www.101cookbooks.com/archives/orange-panglazed-tempeh-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/orange_glazed_tempeh.jpg",
    cookTime: "",
    recipeYield: "Serves 4. (or two if you love it as much as we did -h)",
    datePublished: "2009-01-21",
    prepTime: "",
    description:
      "The best tempeh recipe I've highlighted to date - it features a simple ginger and garlic-spiked orange glaze that plays of the nutty earthiness of the pan-fried tempeh beautifully.",
  },
  {
    name: "Palak Daal",
    ingredients:
      "1 cup / 6.5 oz / 185 g white urid or urad daal, picked over and rinsed\n6 cups / 1.5 liters water, plus more if necessary\n1/2 pound spinach, washed and finely chopped\n1 tablespoon ginger, peeled and finely chopped\n1/2 teaspoon turmeric\n2 medium green chile peppers, minced\n2 tomatoes, chopped\n1/2 teaspoon salt\n2 tablespoons butter\n1/2 teaspoon cumin seeds\n1 teaspoon pure red chile powder\na pinch of asafetida, optional\nmore salt to taste\njuice of 1/2 a lemon\n1/4 cup cilantro, chopped",
    url: "http://www.101cookbooks.com/archives/palak-daal-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/palak_daal_recipe.jpg",
    cookTime: "PT120M",
    recipeYield: "",
    datePublished: "2010-01-30",
    prepTime: "PT20M",
    description:
      "A palak daal recipe from Kasa's Anamika Khanna - a hearty pot of spinach, lentils, and spices. Kasa is a favorite Indian restaurant of mine here in San Francisco.",
  },
  {
    name: "Quesadillas",
    ingredients:
      "zest of one small lemon\na generous dollop of  creme fraiche, sour cream or Greek yogurt\nfine grain sea salt\n2 heaping tablespoons capers\nsmall splash of olive oil\n1 small egg\n1 corn tortilla, room temperature\na bit of freshly shaved Parmesan\nchopped fresh chives or marjoram",
    url: "http://www.101cookbooks.com/archives/quesadillas-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/quesadilla_recipe.jpg",
    cookTime: "PT3M",
    recipeYield: "Serves 1.",
    datePublished: "2011-03-26",
    prepTime: "PT2M",
    description:
      "A favorite five-minute lunch quesadilla - corn tortilla, egg, a bit of cheese, fresh herbs, and a dollop lemon-zested Greek yogurt or creme fraiche. The egg helps make it more substantial and extra good.",
  },
  {
    name: "Stuffed Shells Recipe",
    ingredients:
      "zest of one lemon\nSauce:\n1/3 cup / 80 ml extra virgin olive oil, plus more for the pan\n1 1/2 teaspoons crushed red pepper flakes\nscant 3/4 teaspoon fine grain sea salt\n4 medium cloves of garlic, finely chopped\n1 28-ounce can crushed red tomatoes\n1 14-ounce can crushed red tomatoes\nFilling:\n1 15-ounce container ricotta cheese\n1 egg, beaten\n1/4 teaspoon fine grain sea salt\n1 cup / ~5 oz grated mozzarella\n1 bunch of chives, minced\n25-30 jumbo dried pasta shells",
    url: "http://www.101cookbooks.com/archives/stuffed-shells-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/stuffed_shells_recipe.jpg",
    cookTime: "PT45M",
    recipeYield: "Serves 4 - 6.",
    datePublished: "2011-06-16",
    prepTime: "PT30M",
    description:
      "A stuffed shells recipe made with lemon zest and bright tomato sauce, and a couple apartment pics.",
  },
  {
    name: "Otsu",
    ingredients:
      "Grated zest of 1 lemon\nFresh ginger, cut into a 1-inch cube, peeled, and grated\n1 tablespoon honey\n3/4 teaspoon cayenne\n3/4 teaspoon fine-grain sea salt\n1 tablespoon freshly squeezed lemon juice\n1/4 cup unseasoned brown-rice vinegar\n1/3 cup shoyu sauce (wheat-free soy sauce)\n2 tablespoons extra-virgin olive oil\n2 tablespoons toasted sesame oil\n12 ounces dried soba noodles\n12 ounces extra-firm nigari tofu\n1/4 cup chopped fresh cilantro\n3 green onions, thinly sliced\n1/2 cucumber, peeled, cut in half lengthwise, seeded, and thinly sliced\n1 small handful of cilantro sprigs, for garnish\n1/4 cup toasted sesame seeds, for garnish",
    url: "http://www.101cookbooks.com/archives/000110.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/otsu.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2004-07-19",
    prepTime: "",
    description:
      "Soba noodles are tossed with a fiery ginger-sesame dressing and a generous dose of cucumbers, scallions, and pan-seared tofu - it's the sort of recipe you could serve anytime...",
  },
  {
    name: "Spinach Mushroom Quiche Recipe",
    ingredients:
      "For the crust: \n1/2 cup rolled oats\n3 tablespoons sesame seeds \n1 cup whole wheat pastry flour or whole spelt flour \n1/2 teaspoon baking powder \n3/4 teaspoon sea salt \n1/2 teaspoon freshly milled black pepper \n1/3 cup unflavored soy milk or water \n1/3 cup light sesame oil or pure olive oil plus more for brushing the pan\nFor the filling: \n7 tablespoons extra-virgin olive oil\n1 cup finely diced onion\n10 ounces white button mushrooms, thinly sliced\n2 tablespoons dry white wine or water \n1 1/2 teaspoons coarse sea salt\n3 garlic cloves, slice crosswise into 1/8-inch rounds \n10 to 12 fresh basil leaves, chopped \n1/2 teaspoon finely chopped fresh thyme leaves \nPinch hot red pepper flakes \n1 pound firm tofu, rinsed and patted dry \n2 tablespoons freshly squeezed lemon juice \n1 tablespoon rice vinegar \n2 pounds fresh spinach \nPaprika for dusting",
    url: "http://www.101cookbooks.com/archives/000148.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/spinach_mushroom_quiche_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-03-03",
    prepTime: "",
    description:
      "This is a spinach mushroom quiche recipe that features no dairy, no eggs, and no butter. Sounds like it would lack something in the taste department, right? Wrong. It was delicious.",
  },
  {
    name: "Cheesy Potato Spoon Bread",
    ingredients:
      "4 cups leftover mashed potatoes\n1 cup all-purpose flour\n3T soy margarine (I used butter)\n1/2 teaspoon onion powder\nsalt to taste\n1/2 teaspoon ground white pepper\n1/2 teaspoon cayenne pepper\n4 large eggs, beaten, or 1 cup egg substitute\n1/4 cup minced parsley\n6 oz. Pepper Jack Cheese, shredded (I used a sharp white cheddar)\n10 ounces fat-free cream cheese, softened",
    url: "http://www.101cookbooks.com/archives/000150.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/spoonbread.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-03-11",
    prepTime: "",
    description:
      "Outrageously good cheesy potato spoon bread recipe. Warm, tasty, cheesy, crusty, cayenne-kissed, oven-baked goodness. If you are a fan of comfort food - look no further.",
  },
  {
    name: "Spring Sunshine Salad Recipe",
    ingredients:
      "6 to 8 handfuls mixed salad greens or butter lettuce, washed and dried well (I used baby romaine this morning)\n1 or 2 medium oranges, torn into pieces, pith removed (I used cara cara oranges this morning)\n1 avocado, thinly sliced\n1/2 cup or so toasted nuts (sliced almonds, pine nuts, etc)\n1/2 cup sliced spring onions\nAbout 1/3 cup Citrus Parmesan Dressing (below)\n1/3 cup freshly grated Parmesan cheese\nZest and juice of 2 oranges\n2 tablespoons chopped shallots\n2T white wine vinegar\n1 cup extra-virgin olive oil (or half reg. + half lemon oil)\n2 pinches of both salt + pepper\n-Gently heat the dressing and toss with spinach, for a warm, slightly wilted dinner salad.\n-Use the vinaigrette as a marinade.\n-Use it to toss with pasta (stuffed cheese filled pasta is an especially good choice).",
    url: "http://www.101cookbooks.com/archives/000152.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/cuesasalad.jpg",
    cookTime: "",
    recipeYield: "Serves 4 to 6.Makes about 1 1/2 cups.",
    datePublished: "2005-03-19",
    prepTime: "",
    description:
      "A lovely salad recipe utilizing a vibrant citrus and Parmesan vinaigrette. I did a demo of this salad at the San Francisco Ferry Building Farmers Market.",
  },
  {
    name: "Salsa of the Year",
    ingredients:
      "3 T. vegetable oil \n1 ounce dried mirasol (milder) or smoked serrano (more heat) chilies\ngarlic, 12 small to medium cloves - peeled\nAnother 3 T. vegetable oil\n1 1/4 cups vegetable broth\n- Stir in 1/3 cup cream (or to taste) - for a slightly creamy sauce that will add a bit of kick to a wide range of recipes. (this is the sauce you see in the pictures on this post). Drizzle on savory crepes, egg dishes, casseroles, etc.\n- Stir a couple tablespoons into light or vegan mayo for a spicy sandwich spread.\n- Spread on panini: with all sorts of fixings.",
    url: "http://www.101cookbooks.com/archives/000325.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/soty1.jpg",
    cookTime: "",
    recipeYield: "Makes about 1 cup.",
    datePublished: "2005-08-21",
    prepTime: "",
    description:
      "Smoky and creamy, this salsa recipe is best drizzled over eggs, quesadilla, and crepes.",
  },
  {
    name: "Thousand Layer Lasagne",
    ingredients:
      "1 pound fresh egg pasta sheets (or make some from scratch)\nbutter to prep baking dish\n3 tablespoons extra-virgin olive oil\n1 teaspoon fine grain sea salt\n1 teaspoon crushed red pepper flakes\n1 clove garlic, chopped\n1 28-ounce can crushed organic tomatoes\nzest of one lemon\n3 4-ounce balls of fresh mozzarella, torn up into little pieces\na handful of slivered basil (optional)\nfreshly grated Parmesan (optional)",
    url: "http://www.101cookbooks.com/archives/001386.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/bestlasagne.jpg",
    cookTime: "",
    recipeYield: "Serves many.",
    datePublished: "2006-04-05",
    prepTime: "",
    description:
      "I'll never make lasagna any other way. Impossibly thin layers of feathery-light pasta with just enough sauce and cheese between each layer to keep it moist and flavorful.",
  },
  {
    name: "A Quartet of Compound Butters",
    ingredients:
      "4 tablespoons unsalted organic butter, room temperature\n1 or 2 Numi Desert Lime tea bags (depending on how strong you want it), cut open and the contents ground in a mortar and pestle\n1/4 teaspoon fine grain sea salt\n4 tablespoons unsalted organic butter, room temperature\n1 tablespoon organic cane sugar (I used Florida Crystals)\n1/3 cup dehydrated organic strawberries, minced\n4 tablespoons unsalted organic butter, room temperature\n2 serrano chiles, deveined and  seeded, loosely chopped\n1/4 teaspoon fine grain sea salt\n4 tablespoons unsalted organic butter, room temperature\n1 - 1 1/2 teaspoons smoked paprika\n1/4 teaspoon fine grain sea salt",
    url: "http://www.101cookbooks.com/archives/001470.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/compoundbutter.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2006-08-08",
    prepTime: "",
    description:
      "A quartet of vibrant, colorful, and unique compound butter recipes - Smoked Paprika, Dry Desert Lime, Raw Serrano, and Dehydrated Strawberry.  ",
  },
  {
    name: "Golden, Crispy Gnocchi with Summer Shell Beans",
    ingredients:
      "fresh shell beans (try a mix of fava, cranberry beans, butter beans), shelled, roughly three cups of beans\n1 pound fresh gnocchi\n1/2 pound chanterelle mushrooms (optional - if you can't get chanterelles, skip the mushrooms)\na few sprigs of fresh thyme, leaves only\n3 medium shallots, thinly sliced\na big handful of small cherry tomatoes, halved\nclarified butter or extra virgin olive oil\nsplash of cream (optional)\nfreshly grated parmesan (optional)",
    url: "http://www.101cookbooks.com/archives/001490.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/gnocchirecipe1.jpg",
    cookTime: "",
    recipeYield: "Serves 4-6.",
    datePublished: "2006-08-28",
    prepTime: "",
    description:
      "My favorite new way to make gnocchi in a flash - no boil. Cook them in a skillet until they are golden and crusted, and in this case serve with summer shell beans and shredded cheese.  ",
  },
  {
    name: "Ultimate Chickpea Noodle Soup",
    ingredients:
      "4 cups water or a mild vegetable stock \n2 cups pre-soaked ceci beans (also known as chickpeas or garbanzo beans)\n6 ounces fresh or dried pappardelle\n1/3 cup extra virgin olive oil\nsea salt",
    url: "http://www.101cookbooks.com/archives/001540.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/chicknoodlesoup.jpg",
    cookTime: "",
    recipeYield: "Serves 4.",
    datePublished: "2007-01-01",
    prepTime: "",
    description:
      "The ultimate noodle soup recipe - imagine garbanzo beans bobbing about in a rich broth with thick ribbons of pasta noodles weaving in between them, droplets of olive oil suspended on the surface of the broth, and the whole thing punctuated with crisped fresh pasta that had been fried in olive oil.",
  },
  {
    name: "Meyer Lemon Risotto",
    ingredients:
      "3 tablespoons extra-virgin olive oil\n1 yellow onion, chopped\n2 shallots, chopped\n3 cloves garlic, chopped\n1 teaspoon fine-grain sea salt\n2 cups lightly pearled barley or pearled farro\n1 cup good quality dry white wine\n6 cups light vegetable stock (or water) \nGrated zest of 4 Meyer lemons (more to taste if you like)\n1/2 cup Parmesan cheese\n1/2 cup cr\u00e8me fraiche (or sour cream)\n3 big handfuls of greens, chopped\nHandful of toasted pine nuts, for garnish",
    url: "http://www.101cookbooks.com/archives/001560.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/meyerlemonrisotto.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2007-02-07",
    prepTime: "",
    description:
      "I prefer this barley-based risotto recipe to many other rice based versions - and it is more nutritious. A pearl barley base is accented with white wine, creme fraiche,  lots of meyer lemon zest, chopped greens, and Parmesan cheese.",
  },
  {
    name: "Kale and Olive Oil Mashed Potato Recipe",
    ingredients:
      "3 pounds potatoes, peeled and cut into large chunks\nsea salt\n4 tablespoons extra virgin olive oil\n4 cloves garlic, minced\n1 bunch kale, large stems stripped and discarded, leaves chopped\n1/2+ cup warm milk or cream\nfreshly ground black pepper\n5 scallions, white and tender green parts, chopped\n1/4 cup freshly grated Parmesan, for garnish (opt)\nfried shallots, for garnish (optional)",
    url: "http://www.101cookbooks.com/archives/001566.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/kalemashedpotatorecipe.jpg",
    cookTime: "",
    recipeYield: "Serves 6.",
    datePublished: "2007-03-08",
    prepTime: "",
    description:
      "My favorite mashed potato recipe - creamy mashed potatoes flecked with finely chopped greens and garlic. Adding a green like kale, and golden threads of drizzled olive oil is a great way to add color and nutritional umph to America's favorite starch-packed side dish.\n",
  },
  {
    name: "Ultimate Veggie Burger Recipe",
    ingredients:
      "2 1/2 cups sprouted garbanzo beans (chickpeas) OR canned garbanzos, drained and rinsed\n4 large eggs\n1/2 teaspoon fine-grain sea salt\n1/3 cup chopped fresh cilantro\n1 onion, chopped\nGrated zest of one large lemon\n1 cup micro sprouts, chopped (try brocolli, onion, or alfalfa sprouts - optional)\n1 cup toasted (whole-grain) bread crumbs\n1 tablespoon extra-virgin olive oil (or clarified butter)",
    url: "http://www.101cookbooks.com/archives/001567.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/ultimateveggieburger.jpg",
    cookTime: "",
    recipeYield: "Makes 12 mini burgers.",
    datePublished: "2007-03-14",
    prepTime: "",
    description:
      "One of my favorite recipes from Super Natural Cooking - this hearty veggie burger recipe is made with garbanzo beans, cilantro, onions, lemon zest, eggs, bread crumbs, and sprouts.",
  },
  {
    name: "My Favorite Grilled Kabob Recipe",
    ingredients:
      "Muhammara Slather:\n1 tablespoon crushed red pepper\nflakes or 1 small red chile\n1/2 teaspoon ground cumin\n3/4 cup walnuts, toasted\n1/4 cup whole-grain  bread crumbs\n1/4 cup extra-virgin olive oil\n2 tablespoons pomegranate molasses\n1/4 cup tomato paste\n2 to 3 roasted red peppers\n1/2 to 1 cup warm water\n1/2 teaspoon fine-grain sea salt\nKabobs\n2 red onions, each cut into 6 wedges\n3 lemons, each cut into 4 lengthwise wedges\n12 ounces extra-firm tofu, cut into 12 equal-sized cubes\n12 mushrooms\nextra-virgin olive oil, for brushing\nfine-grain sea salt\nSpecial equipment: 6 wooden skewers",
    url: "http://www.101cookbooks.com/archives/my-favorite-grilled-kabob-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/grilledkabobsrecipe.jpg",
    cookTime: "",
    recipeYield: "Makes 6 kabobs.",
    datePublished: "2007-06-27",
    prepTime: "",
    description:
      "A kabob recipe featuring grilled mushrooms, lemons, tofu red onions and a delicious red pepper walnut slather.",
  },
  {
    name: "Farro and Roasted Butternut Squash",
    ingredients:
      "2 cups farro, rinsed and drained\n2 teaspoons fine-grain sea salt\n5 cups water (or stock)\n3 cups butternut squash, cut into 1/2-inch dice\n1 large red onion cut into 1/8ths\n1 tablespoon fresh thyme, minced\n3 tablespoons olive oil\n1  tablespoon balsamic vinegar\n1 cup walnuts, deeply toasted\n3 tablespoons toasted walnut oil (or more olive oil)\n1/4 cup goat cheese, crumbled",
    url: "http://www.101cookbooks.com/archives/farro-and-roasted-butternut-squash-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/butternutsquashrecipe_07.jpg",
    cookTime: "",
    recipeYield: "Serves 6 - 8 as a side, less as a main.",
    datePublished: "2007-10-16",
    prepTime: "",
    description:
      "A wonderful farro and roasted butternut squash recipe. Balsamic roasted butternut squash, deeply toasted walnuts, and nutty farro come together in this delicious recipe.\n",
  },
  {
    name: "Hazelnut &amp; Chard Ravioli Salad Recipe",
    ingredients:
      '3/4 lb. raviolis (see headnotes)\n2-3 tablespoons extra virgin olive oil, divided\nfine grain sea salt\n2 yellow onions, thinly sliced\n1 bunch swiss chard, deveined and cut into 1/2-inch ribbons\n1/4 cup Parmesan cheese, freshly grated\n1/2 cup hazelnuts, toasted and chopped\n1 cup butternut squash "croutons"\nzest of one lemon\n1/4 cup chives, minced ',
    url: "http://www.101cookbooks.com/archives/hazelnut-chard-ravioli-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/raviolisalad_winter.jpg",
    cookTime: "",
    recipeYield: "Serves 6.",
    datePublished: "2007-11-25",
    prepTime: "",
    description:
      "Plump raviolis tossed with toasted hazelnuts, sauteed ribbons of chard, and caramelized onions are at the heart of this ravioli salad recipe. The colorful platter is finished off with a dusting of cheese, snipped chives, and lemon zest. You can prepare most of the components ahead of time.",
  },
  {
    name: "Sushi Bowl Recipe",
    ingredients:
      "2 cups short-grain brown rice\n3 1/2 cups water\n2 teaspoons fine grain sea salt\n2 (4-inch) square sheets nori seaweed\n6 ounces extra-firm tofu\ngrated zest and juice of one orange\ngrated zest and juice of 1/2 lemon\n2 tablespoons (raw) brown sugar (reg. sugar is ok too)\n2 tablespoons shoyu sauce (or soy sauce)\n2 tablespoons (brown) rice vinegar\n4 green onions, chopped\n1 avocado, peeled, pitted, and thinly sliced\n3 tablespoons sesame seeds, toasted",
    url: "http://www.101cookbooks.com/archives/sushi-bowl-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/sushi_bowl_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes 4-6 servings.",
    datePublished: "2008-06-05",
    prepTime: "",
    description:
      "This sushi bowl recipe is simply a de-constructed sushi roll - brown rice, tofu, avocado, toasted nori and green onions served with a citrus-soy dressing. Simple and delicious.\n",
  },
  {
    name: "Heather's Farro Recipe",
    ingredients:
      "6 cups cooked farro*\n2 cups cooked yellow split peas**\n1 1/2 cups peas, fresh if possible boiled for 30 seconds in salted water and drained\na big splash of Citrus Parmesan Vinaigrette***\n4 handfuls of mixed salad greens\n10 spring onions, trimmed, cut in half length-wise, tossed in a bit of olive, sprinkled with a bit of salt and roasted on a baking sheet in a 350F degree oven for about 35 minutes or until browned (toss once midway)\n1/4 cup goat cheese, crumbled\n1/4 cup chopped chives\n ",
    url: "http://www.101cookbooks.com/archives/heathers-farro-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/heathers_farro_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes one generous, family-style platter.",
    datePublished: "2008-05-22",
    prepTime: "",
    description:
      "A farro recipe I did for my sister's baby shower. Farro, a citrus dressing, roasted spring onions, yellow split peas, fresh peas, a bit of mixed salad greens, and a touch of goat cheese and chives.",
  },
  {
    name: "Spring Panzanella Recipe",
    ingredients:
      "1 lb loaf of hearty, day-old, whole wheat bread into 1-inch cubes\n4 cloves garlic, chopped\n1 shallot, chopped\n1 tablespoon fresh thyme - just pluck leaves from the sprig\na couple pinches of salt\n1/4 cup extra-virgin olive oil\n1 bunch asparagus, cut into segments\n2 cups peas, fresh or frozen\n4 handfuls spinach\n1/4 cup small basil leaves",
    url: "http://www.101cookbooks.com/archives/spring-panzanella-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/spring_panzanella_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes about 6 - 8 servings.",
    datePublished: "2008-06-12",
    prepTime: "",
    description:
      "A spring twist on a panzanella recipe. This panzanella features asparagus, spinach, and peas with hearty, garlic and time toasted bread cubes.",
  },
  {
    name: "Harissa Spaghettini Recipe",
    ingredients:
      "3 medium cloves garlic, peeled\na big pinch of fine grain sea salt\n1/4 cup extra virgin olive oil\n2 tablespoons harissa (paste)\n8 ounces (1/2 pound) whole wheat spaghettini\n1 small bunch kale, well-washed and deveined\n1/2 cup oil-cured black olives, pitted\n1/2 cup pine nuts, toasted\nzest of 1 lemon",
    url: "http://www.101cookbooks.com/archives/harissa-spaghettini-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/harissa_spaghettini_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves about 4 - 6. ",
    datePublished: "2008-08-03",
    prepTime: "",
    description:
      "A unique and flavor-packed pasta recipe. Whole wheat pasta noodles, olives, kale, pine nuts tossed in a pan for a tangle with a garlic-charged harissa and olive oil sauce.",
  },
  {
    name: "Vegetarian Gumbo",
    ingredients:
      "1 cup clarified butter (or ghee)\n1 cup unbleached all-purpose flour \n5 cups yellow onion, chopped into 1/3-inch dice\n3/4 cup green bell pepper, chopped into 1/3-inch dice\nscant 1/2 teaspoon fine-grain sea salt\n1/4 cup garlic, chopped\n1/2 teaspoon crushed red pepper flakes\n2 dried bay leaves\n3-4 quarts of a great tasting vegetable broth (see head notes!)\nGumbo file'\n1 bunch green onions, chopped green ends only\n6-8 eggs\n5- 6 cups cooked long grain white or brown basmati rice",
    url: "http://www.101cookbooks.com/archives/vegetarian-gumbo-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/vegetarian_gumbo.jpg",
    cookTime: "",
    recipeYield: "Serves 6 - 8.",
    datePublished: "2008-11-02",
    prepTime: "",
    description:
      "A vegetarian gumbo recipe taught to me by my friend and neighbor Kim. A rich and delicious gumbo served over rice, and just before serving, eggs are poached in the simmering gravy. ",
  },
  {
    name: "Matchstick Pasta Recipe",
    ingredients:
      "8 ounces whole grain linguine or spaghetti\n2/3 cup pistachios, toasted\n1 medium clove garlic, smashed and chopped\n1/4 teaspoon fine grain sea salt\n1/4 cup extra virgin olive oil\n1 large bunch of kale, washed, de-stemmed and chopped into bite-sized pieces\n1 pomegranate, just the seeds*",
    url: "http://www.101cookbooks.com/archives/matchstick-pasta-recipe.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/pasta.jpg",
    cookTime: "",
    recipeYield: "Serves 4.",
    datePublished: "2008-11-11",
    prepTime: "",
    description:
      "A great pasta dish using just six ingredients. Whole grain linguine matchsticks and barely cooked red kale are tossed with golden pistachio dressing. Pomegranate seeds provide ruby-colored accents and little pops of sweetness.",
  },
  {
    name: "Giant Chipotle White Beans Recipe",
    ingredients:
      "1 pound of large, dried white beans (corona, giant limas, gigantes, or any giant white beans you can find), rinsed, picked over and soaked overnight - or up to 24 hours.\nChipotle-tomato sauce:\n2 tablespoons extra-virgin olive oil\n2 big pinches of red pepper flakes\n2 pinches of salt\n1 large clove garlic, chopped\n1 14-ounce can crushed tomatoes\n1 tablespoon fresh oregano leaves\n1 1/2 tablespoons adobo sauce from a can of chipotle peppers\nCilantro Pesto:\n1 medium clove of garlic\n1/3 cup fresh cilantro\n1/3 cup extra-virgin olive oil\nbig pinch of salt\n2/3 cup kale or chard, washed, de-stemmed, and very finely chopped\n1 cup queso fresco or feta cheese (see head notes)\n1 1/2 cup whole-grain breadcrumbs, toasted in a skillet with a tablespoon of olive oil",
    url: "http://www.101cookbooks.com/archives/giant-chipotle-white-beans-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/giant_chipotle_baked_beans.jpg",
    cookTime: "",
    recipeYield: "Serves about 6.",
    datePublished: "2009-01-07",
    prepTime: "",
    description:
      "A riff on Laurence Jossel's fantastic NOPA beans - plump, creamy beans baked in a bright, chunky chipotle tomato sauce, topped with crunchy breadcrumbs, plenty of oozy queso fresco, and an emerald drizzle of cilantro pesto.",
  },
  {
    name: "Jamaican Veggie Patties Recipe",
    ingredients:
      "1 tablespoon coconut oil\n1/2 cup 1/4-inch-diced yellow onion\n1/8 teaspoon ground cinnamon\n1/4 teaspoon allspice\n1/2 teaspoon ground cumin\n1/4 teaspoon red pepper flakes\n1/8 teaspoon cayenne\nCoarse sea salt\n2 larges cloves garlic, minced\n3/4 cup coconut milk\n1/4 cup 1/4-inch-diced carrots\n1/4 cup 1/4-inch-diced yellow potatoes\n1/2 cup fresh green peas (or frozen)\n1/2 cup sweet fresh corn (or frozen)\n1/2 cup shredded cabbage\n1 tablespoon minced fresh thyme\n1 tablespoon freshly squeezed lemon juice\n1/2 teaspoon freshly ground white pepper\nPastry:\n1 3/4 cups unbleached flour\n1  cup whole wheat pastry flour\n2 teaspoons turmeric\n1/2 teaspoon fine sea salt\n3/4 cup chilled coconut oil\n2 teaspoons apple cider vinegar\n1/2 cup plus 2 tablespoons ice water",
    url: "http://www.101cookbooks.com/archives/jamaican-veggie-patties-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/jamaican_veggie_patties.jpg",
    cookTime: "",
    recipeYield: "Makes six big patties, or a couple dozen smaller ones.",
    datePublished: "2009-03-17",
    prepTime: "",
    description:
      "A favorite recipe from chef Bryant Terry's newest book, Vegan Soul Kitchen. A richly spiced potato, pea, corn, carrot, and cabbage filling is wrapped with a turmeric-hued pastry crust made with coconut oil. ",
  },
  {
    name: "Okonomiyaki (Japanese Pizza) Recipe",
    ingredients:
      "2 cups cabbage, finely shredded\n1 cup leeks, well washed and chopped (see head notes)\n2/3 cup whole wheat pastry flour (or apf flour)\na couple pinches of fine grain sea salt\n2 eggs, beaten\n1+ tablespoon olive oil\nGarnish: toasted slivered almonds, chives/ herbs",
    url: "http://www.101cookbooks.com/archives/japanese-pizza-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/japanese_pizza_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 1 - 2.",
    datePublished: "2009-03-21",
    prepTime: "",
    description:
      "Known in some circles as Japanese pizza, this is my take on okonomiyaki. Plenty of egg-battered cabbage is pressed into a skillet and cooked until deeply golden on both sides. It is served cut into wedges and sprinkled with toasted almonds and chives.",
  },
  {
    name: "Simple Cauliflower Recipe",
    ingredients:
      "2 - 3 heads of small cauliflower (or 1/2 head large)\n2 tablespoons of olive oil\na couple pinches of sea salt\n1 clove garlic, minced\n1 small bunch of chives, chopped\nzest of one lemon\nfreshly grated Parmesan\na bit of flaky sea salt",
    url: "http://www.101cookbooks.com/archives/simple-cauliflower-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/simple_cauliflower_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2009-05-25",
    prepTime: "",
    description:
      "A favorite week-night cauliflower recipe. Tiny florets of pan-fried cauliflower are tossed with garlic, chives, lemon, Parmesan, and flaky sea salt.",
  },
  {
    name: "Orzo Super Salad Recipe",
    ingredients:
      "1 cup dried (whole wheat) orzo pasta\n8 - 10 medium asparagus, trimmed and cut into 1-inch segments\n1/2 a medium head of broccoli (or broccolini), cut into small trees\nsmall handful of cilantro(or mint if you prefer), chopped\n1 small clove of garlic, mashed with a big pinch of salt and chopped\n2 tablespoons fresh lemon juice\n1/4 cup extra virgin olive oil\na small handful of sprouts\n1/3 cup almonds, toasted\n1/2 small cucumber, cut into 1/4-inch pieces\n1 medium avocado, sliced into small pieces\n1/4 cup feta, crumbled",
    url: "http://www.101cookbooks.com/archives/orzo-super-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/orzo_super_salad_recipe.jpg",
    cookTime: "PT10M",
    recipeYield: "Serves 4.",
    datePublished: "2009-06-03",
    prepTime: "PT10M",
    description:
      "And orzo salad packed with nutritious ingredients - asparagus, almonds, feta, sprouts, broccoli, cucumber, and a zesty lemon dressing.",
  },
  {
    name: "Almond Soba Noodles Recipe",
    ingredients:
      "2 teaspoons red curry paste\n1/3 cup unsalted almond butter\n2 tablespoons fresh lemon juice\nvery scant 1/2 teaspoon salt\n6 - 8 tablespoons hot water\n12 ounces dried soba noodles\n12 ounces extra-firm nigari tofu\n4 ounces pea shoots (or other greens, or tiny pieces of broccoli)\n12 leaves fresh basil, slivered\n1/4 cup sliced almonds, toasted",
    url: "http://www.101cookbooks.com/archives/almond-soba-noodles-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/almond_soba_noodles.jpg",
    cookTime: "PT20M",
    recipeYield: "Serves 6-8 as a side, less as a main.",
    datePublished: "2009-07-10",
    prepTime: "PT10M",
    description:
      "A bit of a twist on the peanut noodle salad - this version features soba noodles with a spicy Thai-curry and almond butter sauce, topped with some sauteed tofu and pea shoots.",
  },
  {
    name: "Red Pesto Ravioli Recipe",
    ingredients:
      "1 pound fresh cheese raviolis\n12 plump, chewy sun-dried tomatoes (about 2 ounces)\n2 medium cloves garlic\na couple big pinches of red pepper flakes\n1/3 cup extra-virgin olive oil\n1 teaspoon fresh thyme\n1/8 teaspoon salt\n1/4 cup walnuts or pine nuts, lightly toasted\n3 handfuls of baby spinach tossed with a glug of olive oil and a big pinch of salt.\n2/3 cup oven-roasted cherry tomatoes (optional)*\na bit of crumbled goat cheese",
    url: "http://www.101cookbooks.com/archives/red-pesto-ravioli-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/red_pesto_ravioli.jpg",
    cookTime: "PT15M",
    recipeYield: "",
    datePublished: "2009-07-20",
    prepTime: "PT5M",
    description:
      "For the sun-dried tomato lovers out there. Goat-cheese raviolis tossed in a sun-dried tomato red pesto sauce, served over baby spinach.",
  },
  {
    name: "Pineapple Rice Recipe",
    ingredients:
      "1/3 cup macadamia oil, olive oil, or sunflower oil\n2 teaspoons toasted sesame oil\n1/4 cup (fresh or canned) all-natural 100% pineapple juice\n1 garlic clove\n1/4 teaspoon red pepper flakes\n2 tablespoons soy sauce (or shoyu)\n1 cup pineapple, cut into chunks\n2 teaspoons freshly grated ginger\n1/4 teaspoon fine grain sea salt\n4 handfuls of mizuna, watercress, or arugula\n2 1/2 cups cooked brown rice, room temperature\n4 green onions, thinly sliced\n3 shallots, peeled and thinly sliced\n1 cup cashews, roasted/toasted and chopped\n1/2 small serrano chile, seeded and deveined, and minced (optional)\n4 ounces seitan, cut into little bits and pan-fried (optional)",
    url: "http://www.101cookbooks.com/archives/pineapple-rice-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/pineapple_rice_recipe.jpg",
    cookTime: "PT5M",
    recipeYield: "",
    datePublished: "2009-09-15",
    prepTime: "PT15M",
    description:
      "A nice platter of greens and brown rice doused in a spicy-salty-sweet pineapple dressing flecked with seitan. It's good hot or at room temperature.",
  },
  {
    name: "",
    ingredients:
      "1 quart (4 cups) water\n1 bay leaf\n2 sage leaves\n3/4 teaspoon fresh thyme\na dozen medium cloves of garlic, smashed peeled, and chopped\n1 teaspoon fine grain sea salt\nBinding pommade:\n1 whole egg\n2 egg yolks\n1 1/2 ounces freshly grated Parmesan cheese\nfreshly ground black pepper\n1/4 cup extra virgin olive oil\nday-old crusty bread &amp; more olive oil to drizzle",
    url: "http://www.101cookbooks.com/archives/richard-olneys-garlic-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/garlic_soup_recipe.jpg",
    cookTime: "PT45M",
    recipeYield: "",
    datePublished: "2009-10-05",
    prepTime: "PT10M",
    description:
      "In the realm of garlic soup recipes, this is a favorite of mine. From Richard Olney's The French Menu Cookbook, it is made by simmering a dozen or so cloves of garlic in water with a few herbs, then thickening it with a mixture of egg and shredded cheese. It's hard to beat a ladleful poured over some crusty day-old chunks of walnut baguette.",
  },
  {
    name: "Tempeh Curry Recipe",
    ingredients:
      "1 1/2 pounds small waxy potatoes no bigger than a small lime, halved\n2 teaspoons fine-grain sea salt\n1 tablespoon unsalted butter\n2 tablespoons extra virgin olive oil\n1 medium yellow onion, peeled and chopped\n1 teaspoon whole cumin seeds\n1 teaspoon curry powder\n1/4 teaspoon turmeric\nscant 1/2 teaspoon cayenne pepper\n1 cup canned diced tomatoes\n3/4 cup water\nsplash of cream or a dollop of creme fraiche\n8 ounces tempeh, cut into 3/4-inch pieces\na small handful of cilantro, loosely chopped",
    url: "http://www.101cookbooks.com/archives/tempeh-curry-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/tempeh_curry_recipe.jpg",
    cookTime: "PT30M",
    recipeYield: "",
    datePublished: "2009-11-20",
    prepTime: "PT15M",
    description:
      "A vibrant tempeh curry recipe loosely inspired by a recipe from Lora Zarubin's cookbook, I am Almost Always Hungry.",
  },
  {
    name: "Heirloom Beans &amp; Seitan Recipe",
    ingredients:
      "1 small-medium head of broccoli or broccolini, cut into bite-sized pieces\n1 tablespoon extra virgin olive oil\nfine grain sea salt\n4 ounces seitan, sliced into smallish bite-sized pieces\n2 shallots, thinly sliced\n1 tablespoon clarified butter or extra virgin olive oil\n2 cups of your favorite cooked beans (see head notes)\n3 tablespoons freshly grated Parmesan or Grana Padano",
    url: "http://www.101cookbooks.com/archives/heirloom-beans-seitan-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/beans_with_seitan.jpg",
    cookTime: "PT20M",
    recipeYield: "",
    datePublished: "2009-11-30",
    prepTime: "PT10M",
    description:
      "This is simply heirloom beans and roasted broccoli with shallots and pan-fried seitan. Something I threw together one night after getting home from the airport. It's filling and hearty, and quick to make - particularly if you have cooked beans stashed in the freezer...but canned beans will work too.",
  },
  {
    name: "Red Posole Recipe",
    ingredients:
      "1 pound / 16 oz / 453g dried ready-to-cook posole / hominy (see head notes)\n1 small white onion, diced\n3 medium garlic cloves, peeled and smashed\n3 dried red New Mexican chile peppers, stems removed (see head notes)\n1 teaspoon dried Mexican oregano\nRed Sauce:\n2 tablespoons extra-virgin olive oil\n2 tablespoons finely diced white onion\n2 medium cloves garlic, finely chopped\n1 teaspoon dried oregano\n2 tablespoons flour\n1/2 teaspoon ground cumin\n1/2 cup / 2 oz / 50g ground red chile (see head notes)\n1/2 teaspoon fine grain sea salt\na quarter of one lime",
    url: "http://www.101cookbooks.com/archives/red-posole-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/red_posole_recipe.jpg",
    cookTime: "PT20M",
    recipeYield: "",
    datePublished: "2009-12-24",
    prepTime: "PT240M",
    description:
      "A big pot of red posole made on a stormy day. A brick-red brothy sauce surrounds the posole, and individual bowls are topped with thin wisps of pan-fried tortillas, a pinch of toasted Mexican oregano, and a bit of crumbled feta.",
  },
  {
    name: "Feisty Green Beans",
    ingredients:
      "1 pound green beans, thinly sliced (see photo)\n1/2 cup / 2.5 oz  / 70g golden raisins\n1 tablespoon extra virgin olive oil\n2 garlic cloves, thinly sliced\n1/2 medium yellow onion, finely diced\n3 bay leaves\n1/3 cup / 80 ml white wine\n1/2 teaspoon hot paprika\n1 teaspoon ground cumin\n1 teaspoon ground coriander\n1/2 teaspoon curry powder\n1/2 teaspoon salt\nscant 1/2 teaspoon crushed red pepper flakes\n6 ounces extra-firm tofu, cut into 1/2-inch cubes\n2 tablespoons unsalted butter\n1/3 cup / 120 ml cr\u00e8me fra\u00eeche or sour cream\n1/4 cup / 3/4 oz / 20g sliced almonds, toasted\n1/3 cup / one handful of finely chopped fresh cilantro\nsalt and pepper to taste",
    url: "http://www.101cookbooks.com/archives/feisty-green-beans-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/five_spice_green_beans.jpg",
    cookTime: "PT15M",
    recipeYield: "",
    datePublished: "2010-01-25",
    prepTime: "PT30M",
    description:
      "A riff on a recipe from Anna Getty's Easy Green Organic - green beans, creme fraiche, garlic, golden raisins, almonds, a range of spices. They caught my attention when Anna said...the ingredient list is long, but these are the best green beans you'll ever make.",
  },
  {
    name: "Simple Farro &amp; Bean Stew",
    ingredients:
      "1 pound / 16 oz / 453g  red beans, soaked for at least 4 hours preferably overnight, then drained\n10 cups / 2.5 liters water\n1/4 cup extra-virgin olive oil\n1 medium onion, chopped\n28 ounce / 800g can whole, peeled tomatoes, drained and chopped\n1 medium carrot, chopped\n3 small-med (1/2 pound / 8 oz) new potatoes, chopped \n2 stalks celery\n2 cups / 13 oz / 370 g pearled farro\n1 - 2 cups water or vegetable broth\nfine grain sea salt to taste\n1/2 head / 9 oz savoy cabbage, chopped\n1/2 bunch / 4 oz kale, de-stemmed and chopped\nParmesan and olive oil to serve. Or do what I did with this bowl - whisk together a bit of leftover harissa and some olive oil for a spicier drizzle.",
    url: "http://www.101cookbooks.com/archives/simple-farro-bean-stew-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/farro_bean_stew.jpg",
    cookTime: "PT90M",
    recipeYield: "",
    datePublished: "2010-02-23",
    prepTime: "PT240M",
    description:
      "I made a big pot of farro &amp; bean stew for my mom and dad the other night - simple, hearty, and straightforward. The stew has farro, beans, lots of vegetables, and a generous dusting of cheese to top each bowl.",
  },
  {
    name: "Turnip Green Tart",
    ingredients:
      "Cornmeal Tart Shell:\n2 1/4 cups / 9 oz / 255 g all-purpose flour\n1 cup / 4.5 oz / 125 g spelt flour\nscant 1 cup / 4.5 oz medium coarse corn meal \n3/4 teaspoon fine grain salt\n1 1/4 cups / 10 ounces / 280 g unsalted butter, cut in cubes\n1 large egg yolk\n1/4 cup / 60 ml - 3/4 cup / 180 ml cold water\nTurnip Green Filling:\n1/4 lb. / 4 oz turnip greens, or spinach greens, de-stemmed\n1 small clove of garlic\n2 large eggs + 1 yolk\n3/4 cup veg. broth\n1/4 cup / 60 ml heavy cream\nscant 1/4 teaspoon salt (more if broth unsalted)\n2 teaspoons Dijon-style mustard\n1 1/2 teaspoons herbs de Provence (opt.)\ngruyere cheese &amp; a bit of crushed red pepper flakes, for topping\nspecial equipment: tart pans - 9-inch (23 cm) round, 8 x 11 inch (20 x 28) rectangle, or equivalent",
    url: "http://www.101cookbooks.com/archives/turnip-green-tart-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/turnipgreen_tart_recipe.jpg",
    cookTime: "PT60M",
    recipeYield: "",
    datePublished: "2010-05-09",
    prepTime: "PT950M",
    description:
      "I'm back from Portland. This recipe was inspired by a bag of chervil, turnip greens, and beautiful heirloom red celery given to me by June Taylor just before leaving. The tart is made with a buttery cornmeal crust, and a mustard-kissed, garlicky, turnip green filling.",
  },
  {
    name: "Grilled Tofu and Soba Noodles",
    ingredients:
      "12 ounces / 340g dried soba noodles\n2 teaspoons extra-virgin olive oil, plus a bit more for the tofu\n16 oz / 450g extra-firm tofu, drained and patted dry\n3 medium cloves garlic\nscant 3/4 teaspoon fine grain sea salt\n3 small/medium shallots\n3 small serrano peppers, minced\n1 bunch (about 4 handfuls) of cilantro, stems trimmed\n1 teaspoon natural cane sugar (or brown sugar)\n2 teaspoons fresh lime juice\n3/4 cup / 180 ml extra-virgin olive oil",
    url: "http://www.101cookbooks.com/archives/grilled-tofu-soba-noodles-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/grilledtofu_soba_recipe.jpg",
    cookTime: "PT20M",
    recipeYield: "Serves 4 - 6.",
    datePublished: "2010-06-17",
    prepTime: "PT20M",
    description:
      "Soba noodles and grilled tofu tossed with a garlic-cilantro dressing. I prepped all the components for this ahead of a camping trip, but you could take the same approach for a quick, mid-week lunch if camping isn't your thing.",
  },
  {
    name: "Buttermilk Squash Soup Recipe",
    ingredients:
      "1 teaspoon cumin seeds\n1/4 cup / 2 oz / 55g unsalted butter\nfine grain sea salt\n3 tablespoons unsalted butter\n2 medium yellow onions, chopped\n2 medium garlic cloves\n1 pound / 16 oz / 450 g potatoes, cut into 1/4-inch cubes\n2 1/2 pounds / 40 oz / 1+kg yellow summer squash, cut into 1/2-inch slices\n4 cups / 950 ml good tasting vegetable stock\n1 cup / 240 ml buttermilk\n1 bunch of chives, chopped",
    url: "http://www.101cookbooks.com/archives/buttermilk-squash-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/buttermilk_squash_soup_recipe.jpg",
    cookTime: "PT40M",
    recipeYield: "",
    datePublished: "2010-07-06",
    prepTime: "PT15M",
    description:
      "A nice way to use up a good amount of summer squash. This soup is a soft, pastel shade of yellow, and aside from a hint of tang from the buttermilk, is quite mild in flavor. I finish it with a cumin brown butter drizzle that punches right through the creaminess, and plenty of chopped chives.",
  },
  {
    name: "Black-eyed Peas &amp; Leeks",
    ingredients:
      "1 tablespoon extra virgin olive oil\n3 tablespoons+ unsalted butter\nfine grain sea salt\n4 good-sized leeks, dark green parts trimmed, quartered lengthwise, then sliced every 1/2-inch\n3 cups cooked black-eyed peas*\nheaping 1/4 teaspoon dried marjoram\n1 teaspoon dried tarragon",
    url: "http://www.101cookbooks.com/archives/blackeyed-peas-leeks-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/black_eyed_pea_recipe.jpg",
    cookTime: "PT15M",
    recipeYield: "",
    datePublished: "2010-08-06",
    prepTime: "PT5M",
    description:
      "From a recipe in Put A Egg On It magazine, issue #2 - Black-eyed peas with lots of caramelized leeks, melted butter, marjoram, and tarragon. ",
  },
  {
    name: "Tofu Burger Recipe",
    ingredients:
      "1 pound / 16 oz / 450 g extra-firm tofu, drained and patted dry, then sliced\n2 large eggs\n1/2 cup / 2 oz / 55 g fine dried bread crumbs\n1/2 cup / 2 oz / 55 g cashew nuts\n1/2 cup / 2 oz /55g sunflower seeds\n1/2 cup / 2 oz / 55g sliced mushrooms\n1 tablespoon Dijon mustard\n1 tablespoon shoyu or soy sauce\n1 teaspoon ground cumin\n1/2 teaspoon ground cayenne\n1/4 teaspoon fine grain sea salt\n1 tablespoon extra virgin olive oil\nextras: whatever buns &amp; condiments you like. I did a combination of goat cheese and homemade pickles. You could also do a lettuce wrap in place of buns. And I couldn't resist the mini brioche buns from La Boulange.",
    url: "http://www.101cookbooks.com/archives/tofu-burgers-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/tofu_burger_recipe.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2010-07-22",
    prepTime: "PT10M",
    description:
      "Seasoned with a good amount of cumin, cayenne and mustard, these are hearty, filling, easy to make, dump-everything-in-the-food processor tofu burgers. ",
  },
  {
    name: "Buttermilk Farro Salad Recipe",
    ingredients:
      "2 medium cloves garlic, minced\n1 teaspoon fine grain sea salt\n1 cup / 240 ml buttermilk\n1/4 cup / 60 ml good-quality white wine vinegar\n1/4 cup / 60 ml extra virgin olive oil\n1/4 cup chopped dill\n1/2 cup chopped chives\n1 tablespoon chopped thyme\n7 small radishes, sliced paper thin\n3 small zucchini, sliced paper thin\n1 medium head of fennel, trimmed and sliced paper thin\n4 cups cooked farro, cooled to room temp\nchopped chives for garnish",
    url: "http://www.101cookbooks.com/archives/buttermilk-farro-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/buttermilk_farro_recipe.jpg",
    cookTime: "PT10M",
    recipeYield: "Serves 8.",
    datePublished: "2010-08-12",
    prepTime: "PT20M",
    description:
      "A buttermilk farro salad inspired by one I had at Clyde Common in Portland, Oregon - farro with shaved radishes, zucchini, and fennel tossed with a tangy herbed buttermilk vinaigrette.",
  },
  {
    name: "Dried Fava Soup with Mint and Guajillo Chiles",
    ingredients:
      "1 pound / 16 oz / 450g hulled dry fava beans, rinsed (see photo for reference if needed)\n8 cups / 2 liters good vegetable broth or water\n6 garlic cloves, unpeeled\n1 large white onion, sliced 1/2-inch / 1 cm thick\n1 1/2 pounds / 24 oz / 680g ripe tomatoes\n6 medium dried guajillo or pasilla chiles, stemmed &amp; seeded\n2 tablespoons extra virgin olive oil\n2 tablespoons cider vinegar\n3/4 teaspoon dried Mexican oregano\n1 1/2 teaspoon fine-grain sea salt, plus more to taste\n1/2 cup / .25 oz / 10g loosely packed chopped cilantro\n2 tablespoons chopped fresh mint, pref. spearmint\n1/2 cup / 2 oz / 55g crumbled Mexican queso anejo or feta",
    url: "http://www.101cookbooks.com/archives/dried-fava-soup-with-mint-and-guajillo-chiles-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/fava_soup_recipe.jpg",
    cookTime: "PT100M",
    recipeYield: "",
    datePublished: "2010-09-15",
    prepTime: "PT10M",
    description:
      "Easily one of the best, most interesting soups I've cooked in years. Adapted from a recipe in Rick Bayless's Mexican Kitchen - a dried fava bean and roasted tomato base topped with a fascinating cider-kissed tangy/sweet quick-pickled chile topping.",
  },
  {
    name: "Brown Butter Tortelli",
    ingredients:
      "one dozen fresh tortelli pasta\n4 tablespoons unsalted butter\n1 tablespoons aged balsamic vinegar\nfine grain sea salt\ngrated zest of one lemon\n2 - 3 big handfuls of torn arugula or other bitter/spicy greens\nplenty of grated fresh pecorino or Parmesan cheese",
    url: "http://www.101cookbooks.com/archives/brown-butter-tortelli-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/brown_butter_tortelli_recipe.jpg",
    cookTime: "PT10M",
    recipeYield:
      "Serves 2. You can easily double or triple the recipe to feed more.",
    datePublished: "2010-10-03",
    prepTime: "PT5M",
    description:
      "A few more Rome pics &amp; a simple pasta dish made from ricotta-stuffed tortelli tossed with brown butter balsamic sauce, arugula, pecorino cheese, and lemon zest. ",
  },
  {
    name: "Raw Tuscan Kale Salad",
    ingredients:
      "1 bunch Tuscan kale (for ex: black or lacinato)\n2 thin slices country bread, or two handfuls good, homemade coarse breadcrumbs\n1/2 garlic clove\n1/4 teaspoon kosher salt, plus a pinch\n1/4 cup (or small handful) grated pecorino cheese, plus adiitional for garnish\n3 tablespoons extra-virgin olive oil, plus additional for garnish\nFreshly squeezed juice of one lemon (scant 1/4 cup or ~50ml)\n1/8 teaspoon red pepper flakes\nFreshly ground black pepper to taste",
    url: "http://www.101cookbooks.com/archives/raw-tuscan-kale-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/raw_kale_salad_recipe.jpg",
    cookTime: "PT5M",
    recipeYield: "",
    datePublished: "2010-10-14",
    prepTime: "PT10M",
    description:
      "The first thing I made after getting back from Rome. A red chile spiked, shredded raw kale salad tossed in a vibrant, lemony-pecorino dressing. From Melissa Clark's new cookbook, In the Kitchen with A Good Appetite.",
  },
  {
    name: "Ottolenghi Soba Noodles",
    ingredients:
      "1/2 cup / 120 ml brown rice vinegar\nscant 1/3 cup / 1.5 oz / 40 g fine-grain natural cane sugar or brown sugar\n1/2 teaspoon fine grain sea salt\n2 garlic cloves, peeled and crushed\n1/4 teaspoon red pepper flakes or 1/2 fresh red chile, minced\n1 teaspoon toasted sesame oil\ngrated zest and juice of one lime\n1/3 cup / 80 ml sunflower oil or olive oil\n1 medium eggplant/aubergine 3/4 lb / 12 oz, cut into 1/2-inch / 1cm chunks\n8 ounces / 225g dried soba noodles\n1 large ripe mango, cut into small chunks\n8 ounces grilled or pan-fried tofu, cut into tiny cubes\n1/2 medium red onion, very thinly sliced\na handful of basil leaves, slivered\na handful of fresh cilantro / coriander, chopped",
    url: "http://www.101cookbooks.com/archives/ottolenghi-soba-noodles-with-aubergine-and-mango-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/ottolenghi_soba_noodles.jpg",
    cookTime: "PT30M",
    recipeYield: "",
    datePublished: "2010-10-26",
    prepTime: "PT15M",
    description:
      "Spicy brown sugar and lime-sauced soba noodles with tofu, eggplant, mango and lots of herbs. Inspired by a rare mango find, and a recipe in Yotam Ottolenghi's cookbook, Plenty.",
  },
  {
    name: "Winter Pasta",
    ingredients:
      "4 cloves of garlic, peeled\n4 small shallots, peeled\n1 small bunch of kale - 1/2 lb / 8 oz, stalks removed, washed well\n1/3 cup / 80 ml extra virgin olive oil\n1/3 cup / 2 oz goat cheese, plus more for topping\n2 tablespoons + hot pasta water\nfine grain sea salt &amp; freshly ground black pepper\nfresh lemon juice - optional\n12 oz / 340 g dried penne pasta\nfresh thyme - and thyme flowers",
    url: "http://www.101cookbooks.com/archives/winter-pasta-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/winter_pasta_recipe.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2010-11-04",
    prepTime: "PT10M",
    description:
      "I inherited a CSA box packed with greens the other night, inspiring this simple one-pot winter pasta with a sauce made from a full bunch of kale, shallots, garlic, and goat cheese.",
  },
  {
    name: "Mixed Mushroom Chowder",
    ingredients:
      "3 tablespoons extra virgin olive oil or clarified butter\n1 pound assorted fresh mushrooms, cut into bite-sized pieces\nfine grain sea salt &amp; freshly ground pepper\n1 medium yellow onion, finely chopped\n1 medium red onion, finely chopped\n2-3 tablespoons shoyu or soy sauce\n1 1/2 cups cooked pearled barley\n6 cups / 1.5 l good-tasting vegetable broth\n1/4 teaspoon toasted sesame oil\nfinely chopped chives, to serve",
    url: "http://www.101cookbooks.com/archives/mixed-mushroom-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/mixed_mushroom_soup_recipe.jpg",
    cookTime: "PT20M",
    recipeYield: "Serves about six.",
    datePublished: "2010-11-16",
    prepTime: "PT15M",
    description:
      "A big, hearty mushroom soup made with a mish-mash of market mushrooms, pearled barley, toasted sesame oil, and onions. ",
  },
  {
    name: "Green Olive Gnocchi Recipe",
    ingredients:
      "3 cloves garlic, finely chopped\n1 large yellow onion, finely chopped\n3 tablespoons extra-virgin olive oil or clarified butter\nscant 3/4 cup / 180 ml vegetable broth\n1/3 cup / 80 ml heavy cream\n1 2/3 cup / 200 g green olives, pitted and chopped\nfresh lemon juice\n1 pound store-bought gnocchi, either fresh or packaged\ntop with: fried capers, bread crumbs, toasted almonds, and/or chives",
    url: "http://www.101cookbooks.com/archives/green-olive-gnocchi-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/green_olive_gnocchi_recipe.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2010-12-04",
    prepTime: "PT10M",
    description:
      "At the heart of this recipe is a completely quirky and off-beat sauce made from pureed green olives. Served with golden, pan-fried gnocchi, capers, toasted almonds and chives. You can easily tweak it to work with pasta or grains as well.",
  },
  {
    name: "Christmas Lima Bean Stew",
    ingredients:
      "1 pound / 450g dried Christmas Lima beans \nOR equivalent cooked beans ~ 2.5 pounds / 1.2 kg*\n16 tablespoons extra virgin olive oil\n2 large heads of celery, preferably with leaves, trimmed then sliced into 2 cm / 3/4-inch chunks\n3 bunches of scallions, green parts included \nOR if spring onions are in season, I use about 12 of those, either way slice into 1/3-inch / 1cm rounds\n8 garlic cloves, very thinly sliced\nscant 2 teaspoons caraway seeds, lightly crushed\nfine grain sea salt\n1 28-ounce can whole plum tomatoes, drained, rinsed, cored and roughly chopped\n2 - 4 teaspoons celery salt **\n5 1/2 cups water or broth -or combination)\noily black olives, seeded and roughly chopped\n1 lemon, cut into 1/8ths",
    url: "http://www.101cookbooks.com/archives/christmas-lima-bean-stew-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/christmas_lima_bean_stew.jpg",
    cookTime: "PT25M",
    recipeYield: "",
    datePublished: "2010-12-14",
    prepTime: "PT25M",
    description:
      "The soup I've cooked most this year. There is so much going on here despite a modest list of ingredients. Celery, crushed caraway, and garlic are cooked together alongside big hearty beans and chopped tomatoes in what becomes an olive-oil dappled broth. You serve each bowl with chopped oily, black olives and fresh lemon wedges. This is a version made with Christmas Lima beans, but you can substitute cannellini or giant corona beans. ",
  },
  {
    name: "Black Sesame Otsu Recipe",
    ingredients:
      "1 teaspoon pine nuts\n1 teaspoon sunflower seeds\n1/2 cup / 2 oz / 60 g black sesame seeds\n1 1/2 tablespoons natural cane sugar \n1 1/2 tablespoons shoyu, tamari, or soy sauce  \n1 1/2 teaspoons mirin\nScant 1 tablespoon toasted sesame oil\n2 tablespoons brown rice vinegar\n1/8 teaspoon cayenne pepper\nFine-grain sea salt\n12 ounces / 340 g soba noodles\n12 ounces / 340 g extra-firm tofu  \nExtra-virgin olive oil\n1 bunch green onions, white and light green parts, thinly sliced",
    url: "http://www.101cookbooks.com/archives/black-sesame-otsu-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/black_sesame_otsu_recipe.jpg",
    cookTime: "PT15M",
    recipeYield: "",
    datePublished: "2011-02-20",
    prepTime: "PT15M",
    description:
      "The Black Sesame Otsu recipe from Super Natural Every Day - soba noodles and tofu slathered in a thinned-out, salty-sweet black sesame paste, then topped with lots of sliced green onions. ",
  },
  {
    name: "Cucumber Peanut Salad",
    ingredients:
      "3 medium cucumbers, partially peeled\n1-2 green serrano chiles, stemmed and minced\n1/2 cup / 2.5 ounces / 70 g peanuts, toasted\n1/3 cup / 1.5 ounces / 45 g dried large-flake coconut, toasted\n2 tablespoons fresh lemon juice\n1 teaspoon natural cane sugar\n1 tablespoon, ghee, clarified butter, or sunflower oil\n1/2 teaspoon black mustard seeds\n1/4 teaspoon cumin seeds\nscant 1/2 teaspoon fine grain sea salt\na handful cilantro, chopped",
    url: "http://www.101cookbooks.com/archives/cucumber-peanut-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cucumber_peanut_salad_recipe.jpg",
    cookTime: "PT3M",
    recipeYield: "",
    datePublished: "2011-05-03",
    prepTime: "PT10M",
    description:
      "We picked two new cookbooks to focus on in the 101 Cookbooks Library, and this recipe is inspired by a recipe from one of them. A refreshing chopped cucumber salad loaded with peanuts, spices, coconut, and chiles.",
  },
  {
    name: "Avocado Asparagus Tartine",
    ingredients:
      "4 toasted slabs of whole grain bread, rubbed with olive oil and a bit of garlic\n1/2 tablespoon olive oil\n1/2 lb of asparagus stalks, trimmed roughly the length of your bread\n1 clove garlic, thinly sliced\n1/2 teaspoon caraway seeds\n1 avocado, pitted and smashed\na couple handfuls of arugula, tossed in a bit of olive oil\na handful of toasted pepitas, or almonds, or sunflower seeds",
    url: "http://www.101cookbooks.com/archives/avocado-asparagus-tartine-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/avocado_asparagus_tartine.jpg",
    cookTime: "PT5M",
    recipeYield: "Serves 2-4",
    datePublished: "2012-04-11",
    prepTime: "PT5M",
    description:
      "An excellent impromptu springtime lunch tartine: avocado smeared across toasted day-old slabs of sesame bread, layered with arugula and garlicky caraway asparagus + toasted pepitas. ",
  },
  {
    name: "Sprout Salad",
    ingredients:
      "3/4 cup / 6 oz / 170 g plain Greek yogurt\n1/4 teaspoon salt, plus more to taste\n1 handful arugula, chopped\n1 small bunch chives, minced\n8 oz mung bean sprouts (or equiv. cooked mung beans), about 2 cups\na big handful of well-toasted, sliced almonds\n1 ripe avocado, chopped\ngood extra virgin olive oil\nto finish: chive flowers (optional)",
    url: "http://www.101cookbooks.com/archives/sprout-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/sprout_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 2 - 4.",
    datePublished: "2012-05-24",
    prepTime: "PT5M",
    description:
      "One of the best salads I've made in a long time (mung bean sprouts, avocado, arugula, yogurt, almonds) &amp; a look at the QUITOKEETO packaging.",
  },
  {
    name: "Sunchoke and Cashew Stir-fry",
    ingredients:
      "1 teaspoon peanut or sunflower oil\n1 egg, beaten\n1 tablespoon peanut or sunflower oil, plus more if needed\n1 tablespoon minced ginger\n2 cloves minced garlic\n3 medium shallots, chopped\n1/2 serrano chile pepper, deveined and minced\n1 cup very thinly sliced sunchokes, well scrubbed\nKernels from 2 ears of corn\n1 1/2 - 2 cups day-old, cooked brown rice\n1 egg, beaten (optional)\n1 tablespoon soy sauce, plus more to taste\n1/3 cup toasted almond slices\n1/2 cup toasted cashews\nfine grain sea salt and pepper, to taste\nplenty of chopped fresh basil",
    url: "http://www.101cookbooks.com/archives/sunchoke-and-cashew-stirfry-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/sunchoke_cashew_stirfry_recipe.jpg",
    cookTime: "PT3M",
    recipeYield:
      "Serves 2-3 as a main course, more as part of a larger multi-course meal.",
    datePublished: "2012-07-12",
    prepTime: "PT10M",
    description:
      "A beautiful fried rice made with brown rice, egg, sunchokes, cashews, and basil when Grace Young came over for lunch last week.",
  },
  {
    name: "Lemon-scented Quinoa Salad Recipe",
    ingredients:
      "1 cup quinoa\n2 cups water\n1/2 teaspoon fine grain sea salt\n1 can garbanzo beans, or dried equivalent\n1/2 cup cilantro, chopped\n1/2 red onion, chopped\nTahini Dressing:\n1 garlic clove, smashed and chopped\n1/4 cup tahini\nZest of one lemon\nscant 1/4 cup fresh lemon juice\n2 tablespoons olive oil\n2 tablespoons hot water\nscant 1/2 teaspoon fine grain sea salt",
    url: "http://www.101cookbooks.com/archives/001493.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/quinoa_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4.",
    datePublished: "2006-09-08",
    prepTime: "",
    description:
      "An impromptu quinoa salad recipe made by tossing a quick tahini dressing with chickpeas, red onion, and cilantro.",
  },
  {
    name: "Purple Jasmine Coconut Rice Recipe",
    ingredients:
      "2 cups purple jasmine rice (or substitute white jasmine rice)\n1 cup unsweetened coconut milk (don't use lite)\n1 1/2 cups water\n1 teaspoon fine grain sea salt\n4 medium shallots, thinly sliced\n1/4 cup unsalted butter\nA handful of cashews, chopped and toasted",
    url: "http://www.101cookbooks.com/archives/001507.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/coconutricerecipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4 to 6.",
    datePublished: "2006-09-26",
    prepTime: "",
    description:
      "My favorite coconut rice recipe - rich, fragrant, and just sticky enough. ",
  },
  {
    name: "Thai-spiced Pumpkin Soup Recipe",
    ingredients:
      "2 acorn squash, pumpkins, or other smallish winter squash\n3 tablespoons unsalted butter, room temperature\n1 14-ounce can coconut milk\n1 teaspoon (or more) red Thai curry paste\nwater\n2 teaspoons fine grain sea salt (or to taste)",
    url: "http://www.101cookbooks.com/archives/001525.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/pumpkinsouprecipe.jpg",
    cookTime: "",
    recipeYield: "Serves six.",
    datePublished: "2006-11-02",
    prepTime: "",
    description:
      "This Thai-spiced Pumpkin Soup couldn't be easier to make - roasted winter squash, coconut milk, Thai red curry paste, and sea salt come together in a pot of vibrant, rich, flavorful soup. A total crowd pleaser. ",
  },
  {
    name: "Vanilla Mashed Sweet Potato Recipe",
    ingredients:
      "1 1/2 pounds sweet potatoes, cleaned and left a bit damp\n1/2 cup plus 3 tablespoons heavy cream\n1/3 vanilla bean, split lengthwise and seeds scraped\n1 teaspoon grated orange zest (optional)\n2 tablespoons unsalted butter, at room temperature\nkosher salt\nwhite pepper in a mill\n4 star anise\n1/2 tablespoon juniper berries\n1 tablespoon plus 1 teaspoon cardamom\n1 teaspoon allspice\n1 medium cinnamon stick, crushed, or 1 teaspoon ground cinnamon\n1 teaspoon whole cloves\n1/3 vanilla bean, split lengthwise, seeds scraped\n2 pieces dried orange peel, optional\n1 cup oil (heidi note: I used olive oil - a mild tasting one) - He uses canola in some of his other recipes.",
    url: "http://www.101cookbooks.com/archives/000589.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/mashedsweetpotatorecipe.jpg",
    cookTime: "",
    recipeYield: "Serves four.Makes 1 cup.",
    datePublished: "2006-11-08",
    prepTime: "",
    description:
      "This mashed sweet potato recipe is an all-time favorite, perfect for Thanksgiving. Plump vanilla beans, cream, orange zest, and butter are combined with sweet potatoes that have been roasted in the oven. A quick whirl in the food processor produces a smooth, creamy, subtly sweet puree haunted by the delicious vanilla and citrus undertones. The consistency is that of a thick frosting.",
  },
  {
    name: "Baked Carrot Oven Fries",
    ingredients:
      "a big bunch of farmers' market carrots, washed, trimmed\nextra virgin olive oil\nsea salt\n4 ounces organic tofu\n1/4 cup orange juice\nquick squeeze of lime\nscant 1 teaspoon adobo sauce from a can of chipotle chiles\n1/2 teaspoon fine grain sea salt",
    url: "http://www.101cookbooks.com/archives/001529.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/bakedcarrotfries1.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2006-11-20",
    prepTime: "",
    description:
      "Made from carrots, this is a healthy, simple and delicious alternative to deep-fried potatoes. These baked oven fries (made from carrots) are simply roasted with olive oil and a sprinkling of sea salt. \n",
  },
  {
    name: "Lingonberry or Cranberry Jam Recipe",
    ingredients:
      "1 lb. 2 ounces (500 g) frozen or fresh lingonberries or cranberries\nA scant cup (7 oz/200g) of caster (superfine) sugar (hs note: I just gave my regular granulated sugar a whirl in the food processor for 15-20 seconds)\nFinely grated rind and juice of 1 lemon\n1 small apple, peeled and cored",
    url: "http://www.101cookbooks.com/archives/000932.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cranberryjamrecipe_07.jpg",
    cookTime: "",
    recipeYield: "Makes about 2 cups.",
    datePublished: "2006-12-19",
    prepTime: "",
    description:
      "A delicious cranberry jam recipe, the most riveting shade of ruby red you've ever seen. Would be perfect with toasted walnut bread and an antique gruyere cheese.",
  },
  {
    name: "Black Pepper and Lime Oven Fries",
    ingredients:
      "1 1/2 pounds small potatoes, cut into wedges\n3 tablespoons extra virgin olive oil\nsea salt\nfreshly ground pepper\n1 lime\n1/3 cup Parmesan cheese, grated",
    url: "http://www.101cookbooks.com/archives/001545.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/ovenfries07.jpg",
    cookTime: "",
    recipeYield: "Serves 4 - 6.",
    datePublished: "2007-01-06",
    prepTime: "",
    description:
      "A healthy, simple and delicious alternative to deep-fried potatoes. These baked oven fries are finished with salt, pepper, a spritz of lime juice, and a dusting of Parmesan cheese.",
  },
  {
    name: "Delicious Big Bowl - Quinoa Recipe",
    ingredients:
      "2 cups white quinoa, rinsed well\n4 scant cups water\n1 teaspoon salt\na few splashes of extra virgin olive oil\n3 - 4 medium/large potatoes, cut into 1/2-inch dice\n1 large yellow onions, chopped\n1 clove garlic, chopped\n1 cup toasted nuts (walnuts, pine nuts, etc)\n1-2 cups lightly cooked asparagus, cut into 1/2-inch segments\nanother splash or two of good olive oil or citrus dressing",
    url: "http://www.101cookbooks.com/archives/001564.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/quinoarecipe_spring.jpg",
    cookTime: "",
    recipeYield: "Serves 4 - 6.",
    datePublished: "2007-02-26",
    prepTime: "",
    description:
      "This quinoa recipe shows you how I might clean out my fridge - white quinoa, potatoes, onions, toasted nuts, and asparagus.",
  },
  {
    name: "Ten Minute Tasty Asparagus and Brown Rice",
    ingredients:
      "3 tablespoons extra-virgin olive oil\n1 or 2 14-ounce cans of chickpeas, drained\n2 cloves garlic, minced\n1 medium yellow onion, chopped\n1 bunch asparagus, cut into 1-inch segments\n3 cups pre-cooked brown rice \n1 cup almond slivers, toasted\nfine grain sea salt\nTahini Dressing:\n1 garlic clove, smashed and chopped\n1/4 cup tahini\nzest of one lemon\nscant 1/4 cup freshly squeezed lemon juice\n2 tablespoons extra-virgin olive oil\n2 tablespoons hot water\nscant 1/2 teaspoon fine grain sea salt",
    url: "http://www.101cookbooks.com/archives/ten-minute-tasty-asparagus-and-brown-rice-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/aspbrownricerecipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4-6.",
    datePublished: "2007-04-28",
    prepTime: "",
    description:
      "A big bowl of asparagus, sauteed garbanzos, chopped onions, toasted almonds, tossed with brown rice and drizzled with a bit of garlic-tahini dressing.",
  },
  {
    name: "Baked Peas with Tarragon, Yogurt, and Pistachios",
    ingredients:
      "1 pound frozen baby peas\n1/2 cup loosely packed fresh tarragon leaves\n2 scallions, white and green parts, chopped\n2 tablespoons extra virgin olive oil\n1/4 cup Greek yogurt\n1/2 cup chopped pistachios\nsea salt to taste ",
    url: "http://www.101cookbooks.com/archives/baked-peas-with-tarragon-yogurt-and-pistachios-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/bakedpearecipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4 or 5.",
    datePublished: "2007-05-14",
    prepTime: "",
    description:
      "Creamy tarragon spiked yogurt pistachio sauce combined with sweet green peas.",
  },
  {
    name: "Moroccan Baby Carrot Salad Recipe",
    ingredients:
      "2 teaspoons cumin seeds\n1/4 cup olive oil\n1 pound baby carrots (or spring carrots), washed and cut into halves and/or quarters lengthwise\nsea salt to taste\n1 tablespoon honey\nlemon juice from one lemon\n1/2 cup  black olives (Moroccan, Kalamata, etc), each torn in half\n1/2 cup  orange syrup (1 cup orange juice reduced by half over medium heat)\n1 tablespoon cilantro, chopped\n1 tablespoon mint, chopped\n1/3 cup pine nuts, toasted",
    url: "http://www.101cookbooks.com/archives/moroccan-baby-carrot-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/carrotsaladrecipe_07.jpg",
    cookTime: "",
    recipeYield: "Serves 4 to 6.",
    datePublished: "2007-05-25",
    prepTime: "",
    description:
      "Carrots tossed in a honey-kissed orange dressing, punctuated by toasted pine nuts, black olives and a hint of cumin.",
  },
  {
    name: "White Bean Salad",
    ingredients:
      "2 big handfuls baby spinach, washed and dried\n2 cans white cannellini beans (or freshly cooked equivalent)\n2 handfuls walnuts, toasted\na couple glugs of citrus-flavored olive oil \na small splash of champagne vinegar\na few pinches fine-grained sea salt\na bit of crumbled cheese (manouri, goat cheese work nicely)",
    url: "http://www.101cookbooks.com/archives/white-bean-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/whitebeansalad_07.jpg",
    cookTime: "",
    recipeYield: "Serves 4.",
    datePublished: "2007-06-08",
    prepTime: "",
    description:
      "A tasty white bean salad topped with toasted walnuts, crumbled cheese, and a hint of citrus. Makes a good side dish, a satisfying lunch, or light dinner. ",
  },
  {
    name: "Fourth of July Roasted Tomato Salsa Recipe",
    ingredients:
      "2 pounds Roma tomatoes, cut in half lengthwise\n1 medium white onion, cut into six wedges\n1 large garlic clove, halved\na couple pinches of finely ground sea salt\n2-3 tablespoons of extra-virgin olive oil\n1 medium dried guajillo chile pepper, soaked in boiling water until softened, and then drained\n1 -2 chipotles in adobo sauce (canned)\n1/2 cup cilantro, roughly chopped",
    url: "http://www.101cookbooks.com/archives/fourth-of-july-roasted-tomato-salsa-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/salsarecipe_07.jpg",
    cookTime: "",
    recipeYield: "Makes about 2 1/2 cups.",
    datePublished: "2007-07-01",
    prepTime: "",
    description:
      "A deliciously vibrant, earthy, and slightly smoky-tasting salsa recipe. Different from salsa fresca, the deep, caramelized flavors of the roasted tomatoes and onions alongside the smokiness of the chipotles make for a richly beautiful and balanced salsa. ",
  },
  {
    name: "Rosewater Plum Compote Recipe",
    ingredients:
      "5 pounds plums\n1/3 cup fresh lemon juice\n1 pound sugar (I used fine-grain organic cane sugar)\n3 tablespoons rose water",
    url: "http://www.101cookbooks.com/archives/rosewater-plum-compote-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/plumcompoterecipe_07.jpg",
    cookTime: "",
    recipeYield: "Makes about eight 1/2-pint jars of compote.",
    datePublished: "2007-07-08",
    prepTime: "",
    description:
      "A stunning jewel-colored rosewater plum compote. It  can make ordinary french toast, waffles, pancakes, and crepes, and vanilla ice cream extra special.",
  },
  {
    name: "Spinach and Zucchini Soup Recipe",
    ingredients:
      "3 tablespoons extra-virgin olive oil\n2 cloves garlic, chopped\n2 medium onions, roughly chopped\nbig pinch of salt\n2 1/2 cups potatoes (2 medium)  cut into 1/2-inch cubes\n2 1/2 cups zucchini (2 medium), loosely chopped\n4 cups vegetable stock\n4 cups fresh spinach leaves, loosely packed\n1 cup cilantro, loosely chopped\none lemon",
    url: "http://www.101cookbooks.com/archives/spinach-and-zucchini-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/zucchinisouprecipe_07.jpg",
    cookTime: "",
    recipeYield: "Serves about 6.",
    datePublished: "2007-08-30",
    prepTime: "",
    description:
      "Simple and delicious, vibrant green spinach and zucchini soup recipe. Light-and-healthy, but still creamy textured and plenty tasty.",
  },
  {
    name: "Espresso Caramels Recipe",
    ingredients:
      "2 1/2 cups walnuts, toasted and chopped\n1 cup heavy cream\n1 tablespoon espresso powder / finely ground espresso beans\n1/2 teaspoon sea salt\n1 cup honey\nSpecial equipment: candy thermometer",
    url: "http://www.101cookbooks.com/archives/espresso-caramels-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/caramelrecipe_07.jpg",
    cookTime: "",
    recipeYield:
      "Makes 1 1/2 dozen nut caramels, or a couple dozen individual caramels (depending on the size).",
    datePublished: "2007-09-13",
    prepTime: "",
    description:
      "A favorite caramel recipe yielding dozens of generously espresso-flecked caramels that you can individually wrap. They have a deliciously subtle undercurrent of sea salt and are great for the holidays.",
  },
  {
    name: "Golden-Crusted Brussels Sprouts Recipe",
    ingredients:
      "24 small brussels sprouts\n1 tablespoon extra-virgin olive oil, plus more for rubbing\nfine-grain sea salt and freshly ground black pepper\n1/4 cup grated cheese of your choice",
    url: "http://www.101cookbooks.com/archives/goldencrusted-brussels-sprouts-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/brusselssproutsrecipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4. ",
    datePublished: "2007-11-11",
    prepTime: "",
    description:
      "A quick and easy brussels sprouts recipe that will convert the biggest skeptics. Vibrant green, tender brussels sprouts that become deeply golden and crusty where they touch the pan, dusted with cheese.",
  },
  {
    name: "Butter-toasted Hazelnut Recipe",
    ingredients:
      "3 cups unskinned hazelnuts\n1 tablespoon unsalted butter\n1/4 teaspoon fine ground sea salt\n1 tablespoon thyme leaves, fresh\nzest of 1/2 orange\nzest of one lemon",
    url: "http://www.101cookbooks.com/archives/buttertoasted-hazelnuts-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/hazelnut_recipe_07.jpg",
    cookTime: "",
    recipeYield: "Makes three cups.",
    datePublished: "2008-01-01",
    prepTime: "",
    description:
      "One of my favorite party-friendly ways to use hazelnuts. This butter-toasted hazelnut recipe uses toasted butter, fresh tyme and lemon and orange zest to add a simple yet sophisticated twist to a nut bowl.",
  },
  {
    name: "Poached Eggs Over Rice",
    ingredients:
      "1 tablespoon olive oil\n1/2 onion, chopped\n2 pinches of salt\npinch of crushed red pepper flakes (optional)\n3/4 cup organic extra-firm tofu (optional), 1/4 inch dice\n1 small clove garlic, chopped\n2 - 3 cups dark leafy green, deveined and finely chopped\n2 - 3 cups pre-cooked whole grain rice (brown is fine)\n4 good quality eggs",
    url: "http://www.101cookbooks.com/archives/poached-eggs-over-rice-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/eggs_over_rice_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes four servings.",
    datePublished: "2008-01-07",
    prepTime: "",
    description:
      "An unassuming yet satisfying little rice bowl recipe - simply a reasonable serving of chard-flecked whole grain rice topped with a poached egg.",
  },
  {
    name: "Rustic Cabbage Soup Recipe",
    ingredients:
      "1 tablespoon extra virgin olive oil\na big pinch of salt\n1/2 pound potatoes, skin on, cut 1/4-inch pieces\n4 cloves garlic, chopped\n1/2 large yellow onion, thinly sliced\n5 cups stock (see head notes)\n1 1/2 cups white beans, precooked or canned (drained &amp; rinsed well)\n1/2 medium cabbage, cored and sliced into 1/4-inch ribbons\nmore good-quality extra-virgin olive oil for drizzling\n1/2 cup Parmesan cheese, freshly grated",
    url: "http://www.101cookbooks.com/archives/rustic-cabbage-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cabbage_soup_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4.",
    datePublished: "2008-01-14",
    prepTime: "",
    description:
      "Hearty, healthy, and satistfying - this cabbage soup recipe is super simple to make. Slice a cabbage into thin ribbons and cook it down in a simple pot of sauteed potatoes, onions, beans, garlic and flavorful broth. Finished each bowl with a generous drizzle of great olive oil and a dusting of shredded cheese. ",
  },
  {
    name: "Caramelized Tofu Recipe",
    ingredients:
      "7 - 8 ounces extra-firm tofu cut into thin 1-inch segments (see photo)\na couple pinches of fine-grain sea salt\na couple splashes of olive or peanut oil\n2 medium cloves garlic, minced\n1/3 cup pecans, toasted and chopped\n3 tablespoons fine-grain natural cane sugar or brown sugar\n1/4 cup cilantro, chopped\n1/2 lb. brussels sprouts, washed and cut into 1/8-inch wide ribbons",
    url: "http://www.101cookbooks.com/archives/caramelized-tofu-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/caramelized_tofu_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 2 - 3 as a main, 4 as a side",
    datePublished: "2008-01-28",
    prepTime: "",
    description:
      "One of my favorite tofu recipes, caramelized strips of tofu served over sauteed shredded brussels sprouts. It come together quickly and uses just one pan.",
  },
  {
    name: "Vegetarian Split Pea Soup Recipe",
    ingredients:
      "1 tablespoon extra virgin olive oil\n2 large onions, chopped\n1/2 teaspoon fine-grain sea salt\n2 cups dried split green peas, picked over and rinsed\n5 cups water\njuice of 1/2 lemon (reserve the zest)\na few pinches of smoked paprika\nmore olive oil to drizzle",
    url: "http://www.101cookbooks.com/archives/vegetarian-split-pea-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/split_pea_soup_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4 to 6.",
    datePublished: "2008-02-05",
    prepTime: "",
    description:
      "A delicious, healthy, textured split pea soup recipe made from an impossibly short list of ingredients. Vegetarian, no ham hocks in this version.",
  },
  {
    name: "Garam Masala Tofu Scramble Recipe",
    ingredients:
      "a splash of olive oil\ncouple pinches of salt\n1 1/2 teaspoons garam masala spice blend\n1 medium onion, halved and cut into thin slices\n1/2 medium bulb fennel, cut into very thin slices\n1/4 cup dried cranberries, chopped\n12 ounces extra firm orgnic tofu, crumbled\n1/4 cup chopped cilantro\n1/3 cup pistachios, chopped",
    url: "http://www.101cookbooks.com/archives/garam-masala-tofu-scramble-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/tofu_scramble_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4.",
    datePublished: "2008-02-11",
    prepTime: "",
    description:
      "A favorite (and quick) tofu scramble recipe using shaved fennel, caramelized onions spices and dried fruit, and then counter-balancing those flavors with cilantro and chopped nuts.",
  },
  {
    name: "Yellow Split Pea Soup Recipe",
    ingredients:
      "2 cups dried split yellow peas, picked over and rinsed\n6 cups water\n1 tablespoon extra virgin olive oil\n2 large onions, chopped\n1/2 teaspoon fine-grain sea salt\n3 cups water\n1 7-ounce container of greek yogurt\n1/2 cup shredded unpeeled cucumber, (deseed before shredding)\n1 clove garlic, mashed and minced\nscant 1/4 cup fresh mint, chopped\nbig pinch of salt\nchopped olives\nmore olive oil to drizzle",
    url: "http://www.101cookbooks.com/archives/yellow-split-pea-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/yellow_split_pea_soup_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves about 4.",
    datePublished: "2008-03-06",
    prepTime: "",
    description:
      "Healthy, beautifully textured, and colorful this split yellow pea soup makes for a terrific lunch. The yellow split pea soup base is topped with a tzatziki-inspired yogurt dollop, a touch of mint, a spoonful of finely chopped black olives, and a drizzle of olive oil.",
  },
  {
    name: "Spring Wild Rice Salad Recipe",
    ingredients:
      "Almond Dressing: \n1 garlic clove, smashed and chopped\n1/4 cup almond butter\nzest of one lemon\nscant 1/4 cup fresh lemon juice\n2 tablespoons olive oil\nscant 1/4 cup hot water\nscant 1/2 teaspoon fine grain sea salt\n1 bunch asparagus, trimmed and cut into 1-inch segments\n4 cups cooked wild rice*\n1 cup cooked yellow split peas**\n1 bunch chives, chopped\n1/4 cup goat cheese, crumbled (optional)",
    url: "http://www.101cookbooks.com/archives/spring-wild-rice-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/wild_rice_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 8.",
    datePublished: "2008-03-24",
    prepTime: "",
    description:
      "A spring-inspired wild rice salad - vibrant asparagus, yellow split peas, and wild rice tossed in an almond butter dressing and finished off with a bit of goat cheese and chives.",
  },
  {
    name: "Sunburst Carrot Salad Recipe",
    ingredients:
      "2 bunches carrots, preferably spring carrots\nextra virgin olive oil\nfine grain sea salt\n1 green chile (serrano), deveined and minced\n1 lemon, zest and juice\n1 cup cilantro, chopped\n1 cup green pumpkin seeds (pepitas), toasted",
    url: "http://www.101cookbooks.com/archives/sunburst-carrot-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/carrot_salad_recipe_08.jpg",
    cookTime: "",
    recipeYield: "Serves 4 to 6.",
    datePublished: "2008-04-03",
    prepTime: "",
    description:
      "A favorite carrot salad recipe - carrot ribbons sauteed in a bit of salt and olive oil and finished off with lemon zest, finely chopped serrano chiles, a quick squeeze of lemon juice, and lots of cilantro.  ",
  },
  {
    name: "Cumin-spiked Tofu Recipe",
    ingredients:
      "12 ounces extra-firm organic tofu\n1 teaspoon ground cumin\n1 tablespoon garam masala spice blend\n6 medium cloves garlic, crushed then chopped\n3 tablespoons olive oil\n1/4 teaspoon fine grain sea salt\n1 tablespoon lemon juice, freshly squeezed\n1 7 or 8-ounce container of Greek yogurt",
    url: "http://www.101cookbooks.com/archives/cuminspiked-tofu-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/tofu_recipe_08.jpg",
    cookTime: "",
    recipeYield: "Serves about 4.",
    datePublished: "2008-04-07",
    prepTime: "",
    description:
      "Slabs of tofu marinated in a cumin, garlic, yogurt slather and cooked on a grill or in a grill pan or skillet.",
  },
  {
    name: "Ottolenghi Red Rice and Quinoa Recipe",
    ingredients:
      "1/4 cup shelled pistachios\n1 cup quinoa\n1 cup red rice (see headnotes)\n1 medium white onion, sliced\n2/3 cup olive oil\ngrated zest and juice of one orange\n2 teaspoons lemon juice\n1 garlic clove, crushed\n4 spring onions, thinly sliced\n1/2 cup dried apricots, roughly chopped\n2 handfuls of rocket (arugula)\nsalt and black pepper",
    url: "http://www.101cookbooks.com/archives/ottolenghi-red-rice-and-quinoa-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/ottolenghi_rice_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes a large platter.",
    datePublished: "2008-05-12",
    prepTime: "",
    description:
      "Ottolenghi's beautiful red rice and quinoa recipe - a substantial, color-flecked platter showcasing citrus-dressed grains punctuated by pistachios, dried apricots, and arugula. ",
  },
  {
    name: "In a Hurry Green Curry Recipe",
    ingredients:
      "2 teaspoons green curry paste*\nscant 1/2  teaspoon salt\n1 14-ounce can coconut milk (light ok)\n1 large onion, sliced\n14 ounces water or light vegetable broth\n6 ounces of firm tofu cut into 1/2 inch cubes\n1 cup peas, fresh or frozen\n2 cups asparagus, cut into 1/2-inch segments\nsqueeze of fresh lime juice\n1/4 cup small basil leaves\n2 green hot chilies (Thai chilies)\n1 tablespoon chopped garlic\n1 tablespoon chopped shallots\n1 teaspoon chopped galangal\n1/2 teaspoon chopped kaffir lime rind\n1 tablespoon chopped lemongrass\n1 tablespoon chopped krachai\n1/4 teaspoon roasted cumin seeds\n1/4 teaspoon roasted coriander seeds\n1/2 teaspoon salt",
    url: "http://www.101cookbooks.com/archives/in-a-hurry-green-curry-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/light_greencurry_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4.",
    datePublished: "2008-05-15",
    prepTime: "",
    description:
      "A quick and delicious green curry recipe - peas, asparagus, and tofu swimming in a fragrant, not-overly-rich Thai green chile broth.",
  },
  {
    name: "Lime &amp; Peanut Coleslaw Recipe",
    ingredients:
      "1 1/2 cups unsalted raw peanuts\n1/2 of a medium-large cabbage\n1 basket of tiny cherry tomatoes, washed and quartered\n1 jalapeno chile, seeded and diced\n3/4 cup cilantro, chopped\n1/4 cup freshly squeezed lime juice\n2 tablespoons olive oil\n1/4 teaspoon + fine-grain sea salt",
    url: "http://www.101cookbooks.com/archives/lime-peanut-coleslaw-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/coleslaw_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 6 as a side.",
    datePublished: "2008-07-02",
    prepTime: "",
    description:
      "This feather-light, mayo-free, coleslaw recipe uses toasted peanuts, cherry tomatoes, and lime vinaigrette and is perfect alongside fajitas, or whatever you have coming off the grill. Keep in mind - great coleslaw is rooted in great knife skills. ",
  },
  {
    name: "Spinach Rice Gratin Recipe",
    ingredients:
      "2 1/2 cups leftover/pre-cooked brown rice, room temp\n1 1/2 cups cups well finely chopped spinach\n4 ounces firm organic tofu, crumbled\n10 black olives, chopped\n1/2 medium red onion, diced\n1/3 cup pine nuts or almonds, toasted\n2 tablespoons olive oil\n1/2 cup shredded Manchego cheese (or Parm, or Gruyere)\n3 large eggs\n1/2 teaspoon fine grain sea salt",
    url: "http://www.101cookbooks.com/archives/spinach-rice-gratin-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/rice_gratin_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 8 - 12.",
    datePublished: "2008-07-13",
    prepTime: "",
    description:
      "A delicious rice gratin recipe - a hearty casserole of baked rice flecked with spinach. The top bakes into a golden cheese crust made even better with a generous sprinkling of black olives, red onions, and toasted pine nuts.\n",
  },
  {
    name: "Edamame Soup Recipe",
    ingredients:
      "1 teaspoon olive oil\n1 medium onion, finely chopped\n1 potato, peeled and cut into small cubes, \n750 g (1 1/2 lb) frozen edamame beans, defrosted\n1 quart (1.2 litres or 2 pints) vegetable stock\n2 tablespoons creme fraiche\nsalt and freshly ground pepper\n- see headnotes for garnish you see in photo",
    url: "http://www.101cookbooks.com/archives/edamame-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/edamame_soup_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4. ",
    datePublished: "2008-07-20",
    prepTime: "",
    description:
      "Charlotte's edamame soup  recipe was a big hit with Wayne - a bit of olive oil, potato, frozen edamame beans, and vegetable stock come together to make a satisfying, protein packed bowl, of pale green tastiness.\n",
  },
  {
    name: "Lemon Achiote Grilled Tofu Recipe",
    ingredients:
      "2 tablespoons achiote powder\n1/4 teaspoon cayenne pepper\n1 tablespoon raw cane sugar (or brown sugar)\n3 medium cloves garlic, peeled\n2 big pinches of salt\n1/3 cup fresh squeezed lemon juice\n12 ounce package of extra firm tofu, cut into 4 slabs",
    url: "http://www.101cookbooks.com/archives/lemon-achiote-grilled-tofu-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/achiote_grilled_tofu.jpg",
    cookTime: "",
    recipeYield: "Serves 4. ",
    datePublished: "2008-08-06",
    prepTime: "",
    description:
      "Simple to make, this lemon achiote grilled tofu recipe gets a nice tangy backbone from and achiote and cayenne-spiked marinade made with freshly squeezed lemon juice and a bit of brown sugar.",
  },
  {
    name: "Curried Bean Salad Recipe",
    ingredients:
      "3 cups cooked beans - I used equal amounts Pebble beans and Mayacoba beans, but you could certainly use white beans, black beans, black eyed beans, whatever - I bet edamame would be great in this salad. And while I like to cook my beans from their dried state, this is a forgiving salad and canned beans that have been well rinsed will work too. You can serve this salad hot or at room temperature, whatever your preference.\n1 cup cooked black lentils*\n1/2 medium red onion, thinly sliced into crescents\n3/4 cup celery, chopped\n1 clove garlic\n1/2 teaspoon of fine-grain sea salt\n1 1/2 teaspoons of your favorite curry powder\n1-2  teaspoons freshly grated ginger (from 1-inch cube of fresh ginger, peeled)\njuice of 1/2 a lemon\n1/3 cup olive oil\n2 tablespoons cilantro, chopped",
    url: "http://www.101cookbooks.com/archives/curried-bean-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/curried_bean_salad.jpg",
    cookTime: "",
    recipeYield: "Serves about 4 - 6 as a side. ",
    datePublished: "2008-08-20",
    prepTime: "",
    description:
      "This bean salad recipe salad features pretty heirloom beans along with a few black lentils, splashed with a brightly-flavored ginger-curry vinaigrette. ",
  },
  {
    name: "Lemony Chickpea Stir-fry Recipe",
    ingredients:
      "2 tablespoon ghee or extra-virgin olive oil\nfine grain sea salt\n1 small onion or a couple shallots, sliced\n1 cup cooked chickpeas (canned is fine, if you don't want to cook up a pot of dried chickpeas)\n8 ounces extra-firm tofu \n1 cup of chopped kale\n2 small zucchini, chopped\nzest and juice of 1/2 a lemon",
    url: "http://www.101cookbooks.com/archives/lemony-chickpea-stirfry-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/chickpea_stirfry_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 2 - 4.",
    datePublished: "2008-09-04",
    prepTime: "",
    description:
      "A tasty, quick, and easy stir-fry recipe featuring golden crusted, pan-fried chickpeas, chopped kale, summer squash, tofu, and a bit of lemon zest.",
  },
  {
    name: "Heather's Quinoa Recipe",
    ingredients:
      "a splash of extra-virgin olive oil\na pinch of fine grain sea salt\n1 shallot, minced\n3 cups cooked quinoa* (or brown rice, or other grain)\n1 cup corn, fresh or frozen\n1 1/2 cups kale, spinach or other hearty green, finely chopped\n2 cups extra-firm nigari tofu, browned in a skillet a bit\n1/3 cup pesto\n1/3 cup pumpkin seeds, toasted\n1/4 cup roasted cherry tomatoes**  (or chopped sun-dried tomatoes)",
    url: "http://www.101cookbooks.com/archives/heathers-quinoa-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/heathers_quinoa.jpg",
    cookTime: "",
    recipeYield: "Serves 4 - 6.",
    datePublished: "2008-09-27",
    prepTime: "",
    description:
      "A one-skillet quinoa recipe - quinoa, corn, chopped kale and pan-toasted tofu tossed with a big dollop of pesto and finished off with a few roasted cherry tomatoes.",
  },
  {
    name: "Pepita Salad Recipe",
    ingredients:
      "1 cup pepitas, toasted (divided)\n1 cup cilantro leaves and stems, well washed and lightly packed\n1/3 cup Parmesan cheese, freshly grated\n3 medium cloves garlic, peeled\njuice of 1 medium lemon\n1 serrano chile pepper, minced\n2/3 cup extra-virgin olive oil\n4 cups cooked yellow split peas*\n2 handfuls lettuce, torn into bite-sized pieces",
    url: "http://www.101cookbooks.com/archives/pepita-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/pepita_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 6 or so.",
    datePublished: "2008-10-20",
    prepTime: "",
    description:
      "A great pepita salad that can brighten up any table. Made from a simple combination of yellow split peas, toasted pepitas, and cilantro pesto.",
  },
  {
    name: "Cornmeal Crunch Recipe",
    ingredients:
      "1 1/2 cups (medium grind) cornmeal\nfine grain sea salt\n4 cups yellow onion, chopped (about 3 medium)\n1/4 cup olive oil\n1/2 cup Parmesan cheese, freshly grated\n3 cups water or vegetable broth",
    url: "http://www.101cookbooks.com/archives/cornmeal-crunch-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cornmeal_crunch_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes about 16 pieces.",
    datePublished: "2008-11-08",
    prepTime: "",
    description:
      "This is what happens when you cook a pot of cornmeal until it is thick and creamy. Add a bit off cheese, some deeply caramelized onions, spread it in a pan, drizzle generously with olive oil and bake until the bottom and sides are deeply golden and crunchy. ",
  },
  {
    name: "Baby Lima Soup with Chipotle Broth",
    ingredients:
      "1 pound dried baby lima beans, picked over and rinsed\n10 cups water\n1 head garlic, top lobbed off to expose the cloves and loose skins removed\n2 tablespoons olive oil or clarified butter\n1 onion, halved top to bottom and sliced into thin crescents\n1 to 2 chipotles in adobo sauce\n2 teaspoons fine-grain sea salt\nSqueeze of lime juice (optional)",
    url: "http://www.101cookbooks.com/archives/baby-lima-soup-with-chipotle-broth-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/baby_lima_soup_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 6. ",
    datePublished: "2008-11-13",
    prepTime: "",
    description:
      "Made from just five ingredients, this is a vibrant, chipotle-spiked, brothy soup that requires minimal babysitting. The dainty baby lima beans soften up in about an hour without any pre-soaking or fuss. ",
  },
  {
    name: "Vibrant Tasty Green Bean Recipe",
    ingredients:
      "4 leeks, well washed, root end and tops trimmed, sliced lengthwise into quarters and then chopped into 1/2-inch segments (see photo in main post)\n1/3 cup fresh dill, well chopped\n3/4 pound green beans, tops and tails trimmed and cut into 1-inch segments\nextra-virgin olive oil\nfine-grain sea salt",
    url: "http://www.101cookbooks.com/archives/vibrant-tasty-green-beans-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/tasty_greenbeans.jpg",
    cookTime: "",
    recipeYield: "Serves about 6.",
    datePublished: "2008-11-16",
    prepTime: "",
    description:
      "A favorite green bean recipe - dill, green beans, leeks, salt and olive oil. That's it - five ingredients, one skillet - tasty green beans.",
  },
  {
    name: "Nikki's Sweet Potato Recipe",
    ingredients:
      "2 1/2 pounds orange-fleshed sweet potatoes\n1/3 cup coconut milk\n1 tablespoon fresh ginger, grated\n1 tablespoon maple syrup\n1/2 teaspoon fine-grain sea salt\n1/3 cup raw, unsweetened grated coconut\n2 tablespoons olive oil or melted butter\n1/3 cup toasted macadamia nuts, chopped",
    url: "http://www.101cookbooks.com/archives/nikkis-sweet-potatoes-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/nikkis_sweet_potato_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves about 6.",
    datePublished: "2008-11-23",
    prepTime: "",
    description:
      "Decadent, delicious baked sweet potato recipe made from seven ingredients - sweet potatoes, ginger, coconut milk, shredded coconut, maple syrup, macadamia nuts and a bit of butter or olive oil. Shared with my by my friend Nikki.",
  },
  {
    name: "Ginger Jeweled Salad Recipe",
    ingredients:
      "1 tablespoon fresh ginger juice, made by grating a 4-5-inch piece of ginger into a pile and then pressing it against a strainer to extract the ginger juice\n2 tablespoons white wine or Champagne vinegar\nfine grain sea salt\n1/2 teaspoon jalapeno, very finely chopped\n1/3 cup extra virgin olive oil\n2/3 cup dried figs, stems trimmed, quartered\n1/3 cup dried pluots, chopped\n1/2 cup toasted hazelnuts, loosely chopped\n1 1/3 cup cooked wild rice, room temperature\n5 big handfuls of leafy salad greens (see headnotes), washed and dried",
    url: "http://www.101cookbooks.com/archives/ginger-jeweled-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/ginger_holiday_salad.jpg",
    cookTime: "",
    recipeYield: "Serves about 6.",
    datePublished: "2008-12-03",
    prepTime: "",
    description:
      "A jewel-inspired holiday salad recipe - mixed leafy salad greens, wild rice, toasted hazelnuts, dried figs and pluots, tossed with a simple ginger juice vinaigrette that I spiked with just a hint of jalapeno.\n",
  },
  {
    name: "Wild Seaweed Salad Recipe",
    ingredients:
      "1 cup of loosely packed (wild) nori seaweed\n12 ounces extra-firm nigari tofu\nGrated zest of 1 lemon\nFresh ginger, cut into a 1-inch cube, peeled, and grated\n2 tablespoons honey\nscant 1/2 teaspoon cayenne\n3/4 teaspoon fine-grain sea salt\n1 tablespoon freshly squeezed lemon juice\n1/4 cup unseasoned brown-rice vinegar\n1/3 cup shoyu sauce (wheat-free soy sauce)\n2 tablespoons extra-virgin olive oil\n2 tablespoons toasted sesame oil\n2 medium shallots, finely chopped\n2 cups pecans, toasted\n1 cup loosely packed cilantro leaves/stems, chopped\n6 cups cooked wild rice",
    url: "http://www.101cookbooks.com/archives/wild-seaweed-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/seaweed_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 10-12.",
    datePublished: "2008-12-28",
    prepTime: "",
    description:
      "Toasted wild nori alongside cilantro, tofu, and plenty of wild rice. The dressing for this salad isn't shy - assertive notes of sesame, ginger, cayenne pepper and soy sauce work their way into the wild rice and tofu. Lots of flavor.",
  },
  {
    name: "Lentil Almond Stir-Fry Recipe",
    ingredients:
      "Mint sauce (optional)\n1 cup fresh mint leaves\n1/2 serrano chile pepper, de-veined and seeded\n2 tablespoons olive oil\npinch of salt\na touch of sugar, or honey, or agave nectar\n1 tablespoon lemon juice\nextra-virgin olive oil\n6 to 8 very small new potatoes, cut into 1/2 pieces\n2 cups cooked brown or black lentils\n12 brussels sprouts, trimmed and quartered\n1/4 cup sliced almonds, toasted\n1/3 cup plain Greek yogurt, thinned out with a bit of water, and salted with a pinch of salt\n2 dates, pitted and chopped",
    url: "http://www.101cookbooks.com/archives/lentil-almond-stirfry-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/lentil_almond_stirfry.jpg",
    cookTime: "",
    recipeYield: "Serves 2-3.",
    datePublished: "2009-01-03",
    prepTime: "",
    description:
      "A good cold-weather stir-fry recipe. Tiny potatoes, brussels sprout wedges, toasted almonds and lentils are served with a drizzle of mint and a bit of thinned-out, salted plain yogurt, and a sprinkling of chopped dates.",
  },
  {
    name: "Porcini Mushroom Soup",
    ingredients:
      "2 ounces of dried porcini mushrooms\n1/3 cup extra virgin olive oil\n3 shallots, chopped\n1 tablespoon fresh rosemary, finely chopped\n1 1/2 pounds small new potatoes, cut into 1/3-inch pieces\n3 large cloves garlic, finely chopped\n4 cups water\n1 1/2 - 2 teaspoons salt\nExtra toppings (optional) freshly grated Parmesan, chopped sun-dried tomatoes, fresh chives or fresh thyme.",
    url: "http://www.101cookbooks.com/archives/porcini-mushroom-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/porcini_mushroom_soup_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4-6.",
    datePublished: "2009-01-11",
    prepTime: "",
    description:
      "A porcini mushroom soup recipe made from seven ingredients including potatoes and porcini mushrooms in an intensely flavorful broth peppered with rosemary and tiny pools of golden olive oil. Great with a big chunk of garlic bread.",
  },
  {
    name: "Cashew Curry Recipe",
    ingredients:
      "1 cup whole coconut milk\n1 - 2 tablespoons curry powder*\nscant 1/2 teaspoon fine grain sea salt\n1/2 large red onion, chopped\n1 medium garlic clove, chopped\n1/3 cup water\n4 ounces firm tofu, cut into small cubes (optional)\n1 cup green beans, cut into 1-inch segments\n1 1/2 cups cauliflower, cut into tiny florets\n1/3 cup cashews, toasted\na handful of cilantro, loosely chopped",
    url: "http://www.101cookbooks.com/archives/cashew-curry-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cashew_curry_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves Serves 2-3.",
    datePublished: "2009-01-29",
    prepTime: "",
    description:
      "A simple, last-minute curry recipe - curry powder in coconut milk, deeply toasted cashew nuts, a handful of green beans, two handfuls of tiny cauliflower florets, and a bit of tofu for good measure.",
  },
  {
    name: "Adzuki Butternut Squash Soup Recipe",
    ingredients:
      "2 tablespoons olive oil\n1 teaspoon cinnamon\n1 teaspoon (dried) coriander\n2 teaspoons finely chopped chipotle pepper (from can, or rehydrated from dried chile)\n2 teaspoons fine grain sea salt\n2 medium-large onions\n6 cloves garlic, minced\n4 cups butternut squash, peeled and cut into 1/4-inch dice\n5 - 6 cups water\n5 whole canned tomatoes, chopped\n4 cups cooked or canned adzuki beans\ncilantro drizzle (optional)*",
    url: "http://www.101cookbooks.com/archives/adzuki-butternut-squash-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/adzuki_butternut_squash_soup.jpg",
    cookTime: "",
    recipeYield: "Serves about 8.",
    datePublished: "2009-02-11",
    prepTime: "",
    description:
      "A hearty adzuki and butternut squash soup recipe adapted from Jae Steele's Get It Ripe cookbook. The soup has a bit of chipotle flavor and is made even better with a drizzle of cilantro olive oil prior to serving.",
  },
  {
    name: "Chile Lime Tequila Popcorn Recipe",
    ingredients:
      "4 quarts freshly popped popcorn*\n1/3 cup butter, melted\n2 teaspoons freshly squeezed lime juice\n1/2 teaspoon lime zest\n1 teaspoon tequila\n1/2 small jalapeno, seeds and membrane removes, minced\n1/2 teaspoon freshly ground black pepper\n1 1/2 teaspoons salt\n1 teaspoon red pepper flakes\n1 teaspoon ground cumin",
    url: "http://www.101cookbooks.com/archives/chile-lime-tequila-popcorn-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/chile_lime_popcorn_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2009-02-22",
    prepTime: "",
    description:
      "Fresh popcorn is tossed with melted butter, lime juice, jalapeno peppers, red pepper flakes, cumin and a splash of tequila.",
  },
  {
    name: "Pan-fried Chickpea Salad Recipe",
    ingredients:
      "1 tablespoon clarified butter, olive oil, or coconut oil\n2 cups cooked chickpeas (garbanzo beans), pat them completely dry with clean dish towel\n1 cup of chopped leeks\n1 medium clove of garlic, minced\nzest of one lemon\n1/3 cup plain yogurt (I typically use low-fat Greek)\n1 1/2 teaspoons Indian-style curry powder (or to taste)\nscant 1/4 teaspoon fine grain sea salt\n1 or 2 tablespoons warm water\n1/2 cup of loosely packed fresh cilantro, chopped\n1/2 cup red onion or red spring onions, chopped",
    url: "http://www.101cookbooks.com/archives/panfried-chickpea-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/chickpea_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4 as a side.",
    datePublished: "2009-03-11",
    prepTime: "",
    description:
      "A salad made by pan-frying chickpeas with leeks and a bit of garlic. The creamy dressing is made with plain yogurt and curry powder, and the salad is finished off with plenty of chopped cilantro and chopped red onion.",
  },
  {
    name: "Tokyo Five Grain Recipe",
    ingredients:
      "1 cup short or medium grain brown rice\n1 cup red Bhutanese rice\n1 cup millet\n1/3 cup quinoa\n1/4 cup amaranth\n2 teaspoons salt",
    url: "http://www.101cookbooks.com/archives/tokyo-five-grain-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/five_grain_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2009-03-29",
    prepTime: "",
    description:
      "A colorful grain blend inspired by a recent trip to Japan. It features equal parts brown rice, red rice, and millet, plus some quinoa and amaranth.",
  },
  {
    name: "Carrot Soup Recipe",
    ingredients:
      "1 1/4 pounds carrots\n1 tablespoon extra-virgin olive oil (or clarified butter)\n2 medium cloves garlic, minced\n1 large yellow onion, chopped\n3 cups+ vegetable stock or water\njuice of 1/2 a lemon\nfine grain sea salt (as much as you need)\n- olive oil, toasted sesame oil, or red chile oil for a finishing drizzle - if you use toasted sesame oil (sometimes labeled pure sesame oil) it is very strong. I typically dilute it with olive oil. I use one part sesame oil to four parts olive oil.",
    url: "http://www.101cookbooks.com/archives/carrot-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/carrot_soup_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves about 4.",
    datePublished: "2009-04-08",
    prepTime: "",
    description:
      "A simple, weeknight carrot soup recipe finished with a thread of toasted sesame oil. You can leave it slightly chunky, or puree it until smooth - whatever your preference.",
  },
  {
    name: "Asparagus Stir-Fry Recipe",
    ingredients:
      "toasted sesame oil \n8 ounces extra-firm tofu, cut into slices thick as a pencil\n4 green onions, thinly sliced\nscant 1 tablespoon freshly grated ginger (peeled)\n1/2 teaspoon crushed red pepper flakes\n1/2 a bunch of asparagus, trimmed and cut into 1-inch pieces\na couple big pinches of fine-grain sea salt\n3 cloves garlic, chopped\n1 big handful of toasted cashews, chopped up a bit\na few handfuls of spinach, or chopped kale, or chopped chard\nzest and juice of one lime\n2 tablespoons hoisin sauce\n1 small handful fresh mint, slivered\n1 small handful fresh basil, slivered",
    url: "http://www.101cookbooks.com/archives/asparagus-stirfry-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/asparagus_stirfry_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 2-4 (main/side)",
    datePublished: "2009-04-15",
    prepTime: "",
    description:
      "A favorite stir-fry recipe. Asparagus and tofu form the base, but it has quite a lot going on beyond that. You get a bite of tang from the lime, heat from the red chiles and fresh ginger, mint and basil cool things down, and a touch hoisin sauce gives you just enough sweetness to balance it all out.",
  },
  {
    name: "Fresh Pea Salad Recipe",
    ingredients:
      "1 cup fresh mint leaves\n2 dried dates, pitted\n1/2 of a small serrano chile, stem removed\na squeeze of fresh lemon juice and zest from that lemon\n1 1/2 cups fresh peas\n1 small head of romaine lettuce, cut into shreds\n1/2 cup toasted pumpkin seeds\nfine grain sea salt",
    url: "http://www.101cookbooks.com/archives/fresh-pea-salad--recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/fresh_pea_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 2 - 4.",
    datePublished: "2009-04-22",
    prepTime: "",
    description:
      "A pea salad jazzed up with spicy mint-date dressing and tossed with shredded romaine and toasted pumpkin seeds for crunch and texture. A tasty, off-beat, almost burner-free recipe.",
  },
  {
    name: "Asparagus Salad Recipe",
    ingredients:
      "12 spears of thick asparagus, sliced into 1/4-inch thick coins\n5 - 6 broccolini (or broccoli) florets, trimmed and cut into bite-sized pieces\n1 1/2 tablespoons fresh lemon juice \nbig pinch of salt\n1 small shallot, chopped\n3 tablespoons extra virgin olive oil\n1/4 cup pine nuts, toasted, and coarsely chopped\n7 tiny radishes, washed trimmed and very thinly sliced\nzest of one lemon\na bit of shaved parmesan",
    url: "http://www.101cookbooks.com/archives/asparagus-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/asparagus_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 2 - 3.",
    datePublished: "2009-05-24",
    prepTime: "",
    description:
      "Inspired by the new farmers market up the street from my house, I made this sauteed asparagus and broccolini salad. Finished with slivered radishes, a chunky lemon-pinenut dressing, and a bit of shaved Parmesan it works alongside pasta, topped with poached eggs, or, on its own.",
  },
  {
    name: "Giant Black Bean Salad Recipe",
    ingredients:
      "2 tablespoons fresh lime juice\n1 tablespoon white wine vinegar\n1 tablespoon honey\n1/2 small jalape\u00f1o, seeded, deveined and chopped\n1/2 teaspoon fine grain sea salt\n1 small garlic clove\n1/2 teaspoon mustard\n1/4 cup extra virgin olive oil\n2 -3 big handfuls baby arugula (or other salad greens), well washed and dried\n3 cups cooked black beans\n1/4 cup feta, crumbled\n1/3 cup sliced almonds, toasted",
    url: "http://www.101cookbooks.com/archives/giant-black-bean-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/black_bean_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2009-06-07",
    prepTime: "",
    description:
      "A twist on the ubiquitous black bean salad - giant black beans and toasted almonds are tossed with a honey-jalapeno-lime dressing and served with a bit of crumbled feta over a bed of baby arugula.",
  },
  {
    name: "Lemon Cucumber Tofu Salad Recipe",
    ingredients:
      "2 lemon cucumbers, quartered then sliced into 1/4 inch thick slices\n1 handful of fresh dill (about 2/3 cup loosely packed)\n1/4 cup extra virgin olive oil\n1/4 cup fresh lemon juice\n2 big pinches of salt\n8 ounces nigari extra firm tofu\n1/4 cup pine nuts\n1/2 of a large, ripe avocado",
    url: "http://www.101cookbooks.com/archives/lemon-cucumber-tofu-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/tofu_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2009-06-22",
    prepTime: "",
    description:
      "A simple tofu salad recipe made by marinating cucumbers and chopped dill in lemon juice and olive oil, then tossing with tofu, pine nuts, and avocado. ",
  },
  {
    name: "Carrot, Dill &amp; White Bean Salad Recipe",
    ingredients:
      "1/4 cup extra-virgin olive oil\n3 tablespoons fresh lemon juice\n1/4 teaspoon fine grain salt\n1/2 cup thinly sliced shallots\nmore olive oil (or ghee) for cooking\n2 cups sliced carrots, cut 1/4-inch thick on deep bias\n3 cups cooked white beans\nscant 1/4 cup chopped fresh dill\n2 tablespoons brown sugar (or honey)\n1/3 cup sliced almonds, toasted",
    url: "http://www.101cookbooks.com/archives/carrot-dill-white-bean-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/carrot_white_bean_salad.jpg",
    cookTime: "PT20M",
    recipeYield: "",
    datePublished: "2009-07-15",
    prepTime: "PT10M",
    description:
      "Warm, coin-shaped slices of pan-fried carrots, white alubia beans, and chopped dill tossed with a tangy-sweet lemon shallot dressing. It tastes good the day you make it, even better the day after.",
  },
  {
    name: "Summer Green Bean Salad Recipe",
    ingredients:
      "3/4 pound green beans, stems pinched off\n1 teaspoon finely chopped chives\n1/4 teaspoon finely chopped fresh thyme\n1 tablespoon minced shallots\n2 tablespoons lemon juice\n2 tablespoons heavy cream\nscant 1/4 teaspoon salt\ntiny pinch of freshly ground pepper\n1/3 cup olive oil\n1 teaspoon honey (optional)\na handful of frisee or little gem hearts\na handful of small cherry tomatoes, each cut in half\n1/2 cup hazelnuts, smashed and toasted",
    url: "http://www.101cookbooks.com/archives/summer-green-bean-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/contigo_greenbean_salad.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2009-08-17",
    prepTime: "PT10M",
    description:
      "The perfect summer salad inspired by a memorable meal at Contigo - green beans, cherry tomatoes, roasted hazelnuts, and a bit of frisee tossed with a creamy herb vinegreta.",
  },
  {
    name: "Double Broccoli Quinoa",
    ingredients:
      "3 cups cooked quinoa* \n5 cups raw broccoli, cut into small florets and stems\n3 medium garlic cloves\n2/3 cup sliced or slivered almonds, toasted \n1/3 cup freshly grated Parmesan\n2 big pinches salt\n2 tablespoons fresh lemon juice\n1/4 cup olive oil\n1/4 cup heavy cream\nOptional toppings: slivered basil, fire oil (optional)**, sliced avocado\ncrumbled feta or goat cheese",
    url: "http://www.101cookbooks.com/archives/double-broccoli-quinoa-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/broccoli_pesto_quinoa.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2009-09-01",
    prepTime: "PT10M",
    description:
      "This is another favorite - I cook up lots of broccoli, then puree half of it into a pesto. The other half is cut into little florets. Toss the broccoli with some quinoa, sliced avocado and a drizzle of feisty chile pepper oil, and you've got a nice meal on your hands. ",
  },
  {
    name: "Roasted Corn Pudding in Acorn Squash",
    ingredients:
      "1 small (2 lb.) acorn squash, cut in half lengthwise and seeded\n1 tablespoon clarified butter or olive oil\n1 cup milk\n1 egg plus 2 egg whites\n1/2 cup fresh corn kernels (or more if you like)\n1/4 teaspoon anise seed, chopped\n1/2 cup chopped scallions\na tiny pinch of freshly grated nutmeg\n1/4 teaspoon fine grain sea salt\n1/3 cup grated white cheddar cheese",
    url: "http://www.101cookbooks.com/archives/roasted-corn-pudding-in-acorn-squash-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/roasted_squash_recipe.jpg",
    cookTime: "PT45M",
    recipeYield: "",
    datePublished: "2009-09-20",
    prepTime: "PT10M",
    description:
      "Inspired by a recipe in The Vegetarian Compass written by Karen Hubert Allison, published in 1998. A roasted acorn squash is filled with corn, milk, anise seed, and chopped scallions. You then bake it until the filling sets, and finish with white cheddar cheese left under the broiler until golden and bubbly.",
  },
  {
    name: "Red Lentil Soup Recipe",
    ingredients:
      "2 tablespoons extra virgin olive oil\n1 onion, chopped\n3 shallots, chopped\n1/2 teaspoon red-pepper flakes\n6 cups good-tasting vegetable stock (or water)\n1 1/3 cup red lentils, picked over and rinsed\n1/2 cup brown rice, picked over and rinsed\nas much fine grain sea salt as you need\nslivered almonds, toasted\nblack oil cured olives, chopped\nfeta, crumbled",
    url: "http://www.101cookbooks.com/archives/red-lentil-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/red_lentil_soup_recipe.jpg",
    cookTime: "PT30M",
    recipeYield: "",
    datePublished: "2009-10-15",
    prepTime: "PT10M",
    description:
      "A single-pot lentil soup with brown rice. Made by browning some onions, adding the rest of the ingredients, and simmering until the whole lot until its done.",
  },
  {
    name: "Broccoli Cheddar Soup Recipe",
    ingredients:
      "croutons\n5-6 ounce chunk of artisan whole wheat bread, torn into little pieces (less than 1-inch), roughly 3 cups total\n1/4 cup butter or olive oil (I like 1/2 and 1/2)\n1 1/2 tablespoons whole grain mustard\n1/4 teaspoon fine grain sea salt\nsoup:\n2 tablespoons unsalted butter or olive oil\n1 shallot, chopped\n1 medium onion, chopped\n1 large potato, peeled and cut into 1/4-inch cubes (1 1/2 cups)\n2 cloves garlic, finely chopped\n3 1/2 cups light, good-tasting vegetable broth\n1 large head of broccoli (12 ounces or  3/4 lb.), cut into small florets\n2/3 cup freshly grated aged Cheddar, plus more for topping\n1 - 3 teaspoons whole grain mustard, to taste\nsmoked paprika, more olive oil, creme fraiche (optional)",
    url: "http://www.101cookbooks.com/archives/broccoli-cheddar-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/broccoli_cheddar_soup.jpg",
    cookTime: "PT20M",
    recipeYield: "",
    datePublished: "2009-11-01",
    prepTime: "PT15M",
    description:
      "A simple, everyday broccoli soup made special with crusty, mustardy croutons. Perfect for those days when I need some extra nutritional punch.",
  },
  {
    name: "Autumn Potato Salad Recipe",
    ingredients:
      "1 1/2 pounds small, waxy potatoes, well scrubbed and halved or quartered\n1/2 pound baby carrots, well scrubbed and halved or quartered\n1/2 pound parsnips, well scrubbed, and halved\n6 medium shallots, peeled\n1/4 cup extra virgin olive oil\n2 big pinches of sea salt\n2 bunches of scallions (green onions), greens topped off, and halved lengthwise\nvinaigrette:\n2 tablespoons red wine vinegar\n1 small shallot, minced\n2 teaspoons whole grain mustard\n1/4 teaspoon fine grain sea salt\n1/3 cup of olive oil\n1 tablespoon heavy cream or creme fraiche (optional)\n2 cups cooked wild rice (opt)",
    url: "http://www.101cookbooks.com/archives/autumn-potato-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/autumn_potato_salad.jpg",
    cookTime: "PT45M",
    recipeYield: "",
    datePublished: "2009-11-06",
    prepTime: "PT15M",
    description:
      "A simple roasted potato salad incorporating a couple other seasonal root vegetables like parsnips and carrots. I served it on a bed of wild rice with a simple mustard vinaigrette.",
  },
  {
    name: "Pan-fried Corona Beans &amp; Kale",
    ingredients:
      "1/2 bunch / 6 oz / 170 g dino kale or lacinato kale, remove stems\n2 tablespoons extra virgin olive oil\n2 - 3 big handfuls of cooked large white beans (see head notes)\n1/4 teaspoon fine grain sea salt\n1/3 cup / 1 1/2 oz / 45 g walnuts, lightly toasted\n1 clove garlic, minced\n1/8 teaspoon freshly grated nutmeg\nscant 1 tablespoon fresh lemon juice\nzest of 1 lemon\n1/3 cup / 1/2 oz / 15 g freshly grated Parmesan cheese",
    url: "http://www.101cookbooks.com/archives/panfried-corona-beans-kale-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/panfried_beans_kale_recipe.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2010-02-28",
    prepTime: "PT10M",
    description:
      "Love these - white beans pan-fried until they're golden, with kale, Parmesan, lemon, walnuts, and nutmeg.",
  },
  {
    name: "Coconut Red Lentil Soup",
    ingredients:
      "1 cup / 7 oz / 200g yellow split peas\n1 cup 7 oz / 200g red split lentils (masoor dal)\n7 cups / 1.6 liters water\n1 medium carrot, cut into 1/2-inch dice\n2 tablespoons fresh peeled and minced ginger\n2 tablespoons curry powder\n2 tablespoons butter or ghee\n8 green onions (scallions), thinly sliced\n1/3 cup / 1.5 oz  / 45g golden raisins\n1/3 / 80 ml cup tomato paste\n1 14-ounce can coconut milk\n2 teaspoons fine grain sea salt\none small handful cilantro, chopped\ncooked brown rice or farro, for serving (optional)",
    url: "http://www.101cookbooks.com/archives/coconut-red-lentil-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/esalen_dal_recipe.jpg",
    cookTime: "PT35M",
    recipeYield: "",
    datePublished: "2010-03-15",
    prepTime: "PT10M",
    description:
      "Inspired by an Ayurvedic dal recipe in the Esalen Cookbook, this is a light-bodied, curry-spiced coconut broth thickened with cooked red lentils and structured with yellow split peas. The back notes of ginger, slivered green onions sauteed in butter, and curry-plumped raisins make this a new favorite of mine.",
  },
  {
    name: "Hummus with Green Goo",
    ingredients:
      "Hummus:\n1 pound / 453 g dried chickpeas, soaked in water for at least 4 hours, drained\n1 teaspoon baking soda\n1 cup water\nscant 1/2 cup freshly squeezed lemon juice\n1 1/2 teaspoons fine grain sea salt\n1/3 cup / 80ml tahini\nGreen Goo\n1/4 cup Italian parsley\n1 jalape\u00f1o, destemmed \n1 large clove garlic\nscant 1/2 teaspoon fine grain sea salt\n2/3 cup / 160 ml extra virgin olive oil",
    url: "http://www.101cookbooks.com/archives/hummus-with-green-goo-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/green_hummus_recipe.jpg",
    cookTime: "PT60M",
    recipeYield: "Makes 4 cups of hummus.",
    datePublished: "2010-03-25",
    prepTime: "PT240M",
    description: "A light, almost billowy, hummus topped with ",
  },
  {
    name: "Tabasco &amp; Asparagus Quinoa",
    ingredients:
      "1/2 cup / 4 oz / 113g unsalted butter, room temperature\n2 teaspoons Dijon mustard\n25 drops Tabasco sauce\n2 teaspoons fresh lemon juice\n1/4 teaspoon fine grain sea salt\n1 pound / 16 oz / 453 g asparagus, cut into 1-inch segments\n4 cups cooked quinoa*\n1/3 cup / 2 oz / 60 g pine nuts, toasted\nscant 1/4 cup creme fraiche - optional\nmore Tabasco sauce to taste",
    url: "http://www.101cookbooks.com/archives/tabasco-asparagus-quinoa-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/tabasco_quinoa_recipe.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2010-04-04",
    prepTime: "PT30M",
    description:
      "Some San Francisco photos along with a recipe for asparagus &amp; quinoa, tossed in a bit of Tabasco butter, with toasted pine nuts and a touch of cr\u00e8me fra\u00eeche.",
  },
  {
    name: "Miso Vegetables &amp; Tofu",
    ingredients:
      "6 oz awase miso (or blend or equal parts white &amp; red miso)\n1/4 cup sake\n1/2 cup mirin\n3 tablespoons sifted natural cane sugar\nred pepper flakes or shichimi t\u014dgarashi, a big pinch or two\n4 cups / 12 oz / 340 g bite-sized veggies (see headnotes)\n12 ounces / 340 g baked or grilled (or lightly pan-fried) firm tofu, cut into bite-sized pieces",
    url: "http://www.101cookbooks.com/archives/miso-vegetables-tofu-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/miso_vegetables_recipe.jpg",
    cookTime: "PT20M",
    recipeYield: "",
    datePublished: "2010-04-19",
    prepTime: "PT10M",
    description:
      "A one-dish meal, inspired by a recipe in Harumi Kurihara's Everyday Harumi - asparagus, broccoli, and tofu tossed with a salty-sweet miso dressing.",
  },
  {
    name: "Carrot Almond Salad",
    ingredients:
      "extra virgin olive oil\n1 cup /  3 oz / 85g sliced almonds\na small handful cilantro, about 1/2 cup\n1 medium clove garlic, peeled\n1/2 jalapeno pepper, seeded and de-veined\n1/4+ teaspoon fine grain sea salt\n1/3 cup / 80 ml extra virgin olive oil\n1 bunch / 8 oz / 225 g baby carrots, scrubbed and sliced in half lengthwise\n1 bunch / 16 oz / 450 g pencil-thin asparagus, stalks trimmed, cut into 2-inch segments\nsqueeze of lemon, optional",
    url: "http://www.101cookbooks.com/archives/carrot-almond-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/carrot_almond_salad.jpg",
    cookTime: "PT5M",
    recipeYield: "",
    datePublished: "2010-04-29",
    prepTime: "PT25M",
    description:
      "This particular salad came together on a whim - slender, barely-cooked asparagus and carrots alongside lots of deeply toasted almond slices, tossed with a jalapeno-cilantro drizzle. ",
  },
  {
    name: "Soup au Pistou Recipe",
    ingredients:
      "1 pound / 16 oz / 450 g dried flageolet beans, soaked for at least 4 hours, preferably overnight, then drained\n1/4 cup / 60 ml olive oil\n4 medium onions, chopped\n2 medium leeks, trimmed and chopped\n4 stalks celery, chopped\n12 cups / 3 liters water\n1 28-ounce can, whole tomatoes, well drained, chopped\n4 medium yellow potatoes, chopped\n1 bouillon cube, optional\n1/4 pound / 4 oz. stellette (tiny star) pasta, or other small pasta\n3 small zucchini, chopped\n1/2 cup (a big handful) chard stems, finely chopped\n2 teaspoons salt, or to taste\nPistou\n1 tablespoon crushed garlic\nscant 3/4 teaspoon fine grain sea salt\n4 1/2 cups / 2 oz / 60 g basil leaves, torn into small pieces\n1 tomato (from above), well chopped\n1/4 cup / 60 ml extra-virgin olive oil\n1 cup / 2 oz / 60 g grated aged Gruyere cheese",
    url: "http://www.101cookbooks.com/archives/soup-au-pistou-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/soupaupistou_recipe.jpg",
    cookTime: "PT60M",
    recipeYield: "Serves 8 - 12.",
    datePublished: "2010-06-12",
    prepTime: "PT240M",
    description:
      "A soup I made for a camping trip to the Sonoma coast -  lots of beans, vegetables, and stellette pasta. Tiny stars under the stars, with a good dollop of pistou for each bowl.",
  },
  {
    name: "Honey-Balsamic Bean Salad",
    ingredients:
      "8 oz / 225 g (about 1 1/2 cups) EACH cooked chickpeas, pinto beans, black beans\n1 small head of romaine lettuce, washed, dried, shredded\n1/3 cup  / 1 oz / 30g sliced almonds, toasted\n2 teaspoons extra-virgin olive oil\n1 1/2 tablespoons runny honey\n2 tablespoons balsamic vinegar\n1 1/2 tablespoons fresh lemon juice\n1/4+ teaspoon fine grain sea salt\n10 sprigs fresh thyme",
    url: "http://www.101cookbooks.com/archives/honey-balsamic-bean-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/honey_balsamic_bean_salad.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2010-06-22",
    prepTime: "PT10M",
    description:
      "Inspired by a recipe in Miranda Gardiner's Teaching Dad to Cook Flapjack - a simple bean salad tossed with lots of toasted almonds, fresh thyme, and an assertive honey-balsamic dressing.",
  },
  {
    name: "Saut\u00e9ed Zucchini",
    ingredients:
      "2 tablespoons extra virgin olive oil\n5 medium garlic cloves, thinly sliced\n3 medium shallots or new red onions, thinly sliced\nfine grain sea salt\n2 medium zucchini, sliced into 1/4-inch thick coins\na good handful of dill, chopped\n1/4 cup Marcona almonds or toasted almond slices",
    url: "http://www.101cookbooks.com/archives/sautaed-zucchini-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/sauteed_zucchini_recipe.jpg",
    cookTime: "PT15M",
    recipeYield: "Serves 2 - 4.",
    datePublished: "2010-07-27",
    prepTime: "PT5M",
    description:
      "Coins of zucchini are browned in a pan, but the thing that makes it special is the toasted gold slivers of garlic combined with lots of fresh dill, plus a sprinkling of almonds for a bit of crunch.",
  },
  {
    name: "Green Curry Broth",
    ingredients:
      "1 tablespoon coriander seeds\n1 1/2 teaspoon whole cumin seeds\n2 tablespoons coconut oil, clarified butter, or olive oil\n4 shallots, thinly sliced\n4 medium garlic cloves, finely chopped\n4 small serrano chile peppers, thinly sliced (see head notes)\n3 lemongrass stalks, minced (see head notes!)\na 1 1/2-inch piece of ginger, peeled then grated\n8 green onions, trimmed, thinly sliced\n1/8 teaspoon turmeric powder\n1/4 cup / 60 ml freshly squeezed lime juice &amp; a bit of zest\n6 - 7 cups / 1.5 liters / 1.5 quarts good-tasting vegetable broth\n12 ounces / 340 g tofu, cut into tiny cubes \nOR \n6 oz tofu cubes + 6 oz yuba skins, cut into thin strips\nkernels from 2 ears of corn\n4 handfuls of torn spinach, stems trimmed\na small handful of each of the following: fresh mint, fresh cilantro, fresh basil, all chopped just before serving and combined in a small bowl",
    url: "http://www.101cookbooks.com/archives/green-curry-broth-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/green_curry_broth_recipe.jpg",
    cookTime: "PT15M",
    recipeYield: "Serves 4.",
    datePublished: "2010-08-24",
    prepTime: "PT20M",
    description:
      "A beautiful, thin green curry broth, fragrant with garlic, lemongrass, and ginger. It gets heat from serrano chiles, and zings of tanginess from fresh lime juice. Cumin and coriander seeds keep things grounded, and a flurry of freshly chopped herbs make the sky open up.",
  },
  {
    name: "Zucchini Pickles",
    ingredients:
      "3 medium zucchini (1 pound / 16 oz / 450 g), thinly sliced\u2028\n1 medium white onion, thinly sliced\u2028\n3 shallots, thinly sliced\n\u20281 1/2 tablespoons fine grain sea salt\n\u20281/4 cup (small handful) fresh dill sprigs\n1 small fresh red chile pepper, very thinly sliced\n1/2 tablespoon yellow mustard seeds\n\u20283/4 cup / 180 ml cider vinegar\u2028\n3/4 cup / 180 ml white wine vinegar\u2028\n1/3 cup / 1.75 oz / 50g natural cane sugar",
    url: "http://www.101cookbooks.com/archives/quick-pickled-zucchini-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/pickled_zucchini_recipe.jpg",
    cookTime: "PT5M",
    recipeYield: "Makes one large jar.",
    datePublished: "2010-09-08",
    prepTime: "PT120M",
    description:
      "I've been making these coin-shaped zucchini pickles all summer. They're quick to make, great to have on hand, and I don't bother canning them. Delicious on crusty, goat-cheese slathered grilled bread (or just about anything cheesy or crunchy) and simple salads.",
  },
  {
    name: "Spiced Cauliflower with Sesame Seeds",
    ingredients:
      "1 1/2 tablespoons extra-virgin olive oil or clarified butter\n1 teaspoon cumin seeds\n2 medium yellow onions, finely sliced\na pinch of turmeric\nfine grain sea salt\n1 medium / 12 oz cauliflower, thinly sliced \n4 dried red chiles, stemmed and halved\n1-2 teaspoon sesame seeds, lightly toasted\n1 garlic clove, grated\n4 cm / 1 1/2-inch piece of fresh ginger, peeled and finely grated\n1-2 green jalapeno chiles, seeds removed, finely chopped\n2-3 tablespoons chopped fresh cilantro / coriander",
    url: "http://www.101cookbooks.com/archives/spicy-cauliflower-with-sesame-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/spicy_cauliflower_recipe.jpg",
    cookTime: "PT15M",
    recipeYield: "",
    datePublished: "2010-11-10",
    prepTime: "PT20M",
    description:
      "Cauliflower tastes great like this. Imagine a skillet of caramelized onions cooked down with fragrant cumin, ginger, garlic, sesame seeds and chiles. Add cauliflower and cook until tender. Vibrant, spicy, sweet earthiness, all on one plate.",
  },
  {
    name: "Mushroom Shichimi Rice Bowl",
    ingredients:
      "2 cups cooked brown rice*\n2 tablespoons extra-virgin olive oil\n2 tablespoons unsalted butter\n2 cloves garlic, very thinly sliced\nFine-grain sea salt\n12 ounces / 340 g chanterelles or mushrooms of your choice, sliced ~1/4-inch thick\n8 ounces / 225 g firm tofu, cut into tiny cubes\n1 small bunch kale / 3 oz / 85 g, well chopped\nShichimi Togarashi or red pepper flakes, to taste",
    url: "http://www.101cookbooks.com/archives/shichimi-mushroom-rice-bowl-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/mushroom_rice_bowl.jpg",
    cookTime: "PT5M",
    recipeYield: "Serves 3-4.",
    datePublished: "2011-01-23",
    prepTime: "PT15M",
    description:
      "I made this mushroom topped brown rice bowl the other night when I returned from Yosemite - chanterelles, garlic, kale, tofu, and lots of Shichimi Togarashi, the Japanese spice blend.",
  },
  {
    name: "Sea Salt Baked Potato Recipe",
    ingredients:
      "2 large baking potatoes\nflaky sea salt\nbutter or olive oil\n2 large handfuls of arugula\ndressing:\n1 tablespoon Champagne or tarragon vinegar\n1 teaspoon Dijon mustard\na egg yolk\na scant 1/2 cup / 100 ml olive oil\n2 tablespoons grated Parmesan\n2 teaspoons freshly squeezed lemon juice",
    url: "http://www.101cookbooks.com/archives/sea-salt-baked-potatoes-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/baked_potato_recipe.jpg",
    cookTime: "PT60M",
    recipeYield: "",
    datePublished: "2011-05-19",
    prepTime: "PT5M",
    description:
      "I love this baked potato recipe, topped with well-dressed arugula - that, plus a few pics from a road trip to Marfa, Texas.",
  },
  {
    name: "Quinoa with Currants, Dill, and Zucchini",
    ingredients:
      "1 tablespoon extra-virgin olive oil\n1 bunch green onions, chopped\n3/4 teaspoons fine-grain sea salt\n1 cup / 6.5 oz / 185 g quinoa, well rinsed and drained\n2 cups water\n1/4 cup / 1 oz / 30g dried currants\n1 lemon\n2 sm-med zucchini, grated on box grater\n4 tablespoons toasted sesame seeds\n4 tablespoons chopped fresh dill\nfeta cheese, crumbled - as much or as little as you like",
    url: "http://www.101cookbooks.com/archives/quinoa-with-currants-dill-and-zucchini-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/summer_quinoa_recipe.jpg",
    cookTime: "PT20M",
    recipeYield: "",
    datePublished: "2011-05-25",
    prepTime: "PT10M",
    description:
      "Made from a quirky combination of quinoa, dill, shredded zucchini, and currants - a quinoa salad from Maria Speck's new book, Ancient Grains for Modern Meals.",
  },
  {
    name: "Green Pea Soup Recipe",
    ingredients:
      "3 tablespoons fresh ginger, well chopped\n10 sm-med cloves garlic, smashed and peeled\n2 serrano chiles, stemmed and chopped\n1/4 teaspoon ground cumin, plus more to serve\n3 tablespoons ghee or sunflower oil\n2 bay leaves\n1 medium onion, chopped\n4 1/2 cups good-tasting vegetable stock or water\n3 1/2 cups / 500 g / 18 oz shelled fresh or frozen peas\n1 teaspoon sea salt, or to taste\na squeeze of fresh lemon juice\n8 fresh mint leaves, slivered\npan-fried paneed, queso fresco, or haloumi, cut into tiny cubes - optional",
    url: "http://www.101cookbooks.com/archives/green-pea-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/pea_soup_recipe.jpg",
    cookTime: "PT10M",
    recipeYield: "Serves 4 - 6.",
    datePublished: "2011-05-31",
    prepTime: "PT7M",
    description:
      "A simple Indian-spiced green pea soup, and a few snapshots of things I'm bringing with me in a move up the street.",
  },
  {
    name: "Shaved Fennel Salad",
    ingredients:
      "1 medium-large zucchini, sliced into paper thin coins\n2 small fennel bulbs, trimmed and shaved paper-thin\n2/3 cup / .5oz/ 15g loosely chopped fresh dill\n1/3 cup / 80ml fresh lemon juice, plus more if needed\n1/3 cup / 80ml extra virgin olive oil, plus more if needed\nfine grain sea salt\n4 or 5 generous handfuls arugula\nHoney, if needed\n1/2 cup / 2 oz/ 60g pine nuts, toasted (I used almonds)\n1/3 cup / 2 oz / 60g / feta cheese, crumbled",
    url: "http://www.101cookbooks.com/archives/shaved-fennel-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/shaved_fennel_salad.jpg",
    cookTime: "",
    recipeYield: "Serves 4 to 6.",
    datePublished: "2011-06-22",
    prepTime: "PT10M",
    description:
      "This could very well be my favorite salad recipe from Super Natural Every Day - shaved fennel, arugula, zucchini coins, feta, toasted almonds.",
  },
  {
    name: "Corn Soup with Harissa Yogurt",
    ingredients:
      "6 ears corn, husks removed\n7 cups / 1.65 liters water\n2 tablespoons olive oil\n1 tablespoon unsalted butter\n1 pound potatoes, cut into 1/4-inch dice\n4 medium shallots, chopped\n3 medium cloves garlic, chopped\n2 teaspoons fine grain sea salt\nfreshly ground pepper\nplain yogurt, harissa, and fresh dill, to serve",
    url: "http://www.101cookbooks.com/archives/corn-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/corn_soup_recipe.jpg",
    cookTime: "PT10M",
    recipeYield: "Serves 4.",
    datePublished: "2011-07-06",
    prepTime: "PT15M",
    description:
      "A simple corn soup topped with an electric harissa-yogurt swirl + photos from a walk around North Beach on the Fourth of July.",
  },
  {
    name: "Summer Corn Salad",
    ingredients:
      "6 ears of corn\n1 large shallot, minced\n1/3 cup fresh lemon juice\nv. scant 1/2 teaspoon fine grain sea salt\n2 tablespoons brown sugar\n3 tablespoons sunflower oil\n3/4 cup / 4 oz / 115g toasted pepitas\n3/4 cup / 4 oz / 115g toasted sunflower seeds\n1 teaspoon Mexican oregano",
    url: "http://www.101cookbooks.com/archives/summer-corn-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/summer_corn_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 6 or more.",
    datePublished: "2011-07-28",
    prepTime: "PT10M",
    description:
      "A crunchy, sweet no-cook summer corn salad &amp; a few snapshots from the nearby dahlia garden in bloom right now. The salad is a breeze, has a ton of toasted pepitas &amp; sunflower seeds, tossed with a brown sugar lemonade vinaigrette.",
  },
  {
    name: "Magic Sauce",
    ingredients:
      "1/2 cup extra-virgin olive oil\n1 teaspoon fresh rosemary leaves\n1 teaspoon fresh thyme leaves\n1 teaspoon fresh oregano leaves\n2 teaspoons sweet paprika\n2 medium cloves of garlic, smashed into a paste\n1 well-crumbled bay leaf\npinch of red pepper flakes\n1/4 teaspoon + fine grain sea salt\n1 tablespoon fresh lemon juice",
    url: "http://www.101cookbooks.com/archives/magic-sauce-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/magic_sauce_recipe.jpg",
    cookTime: "PT5M",
    recipeYield: "Makes ~2/3 cup.",
    datePublished: "2011-09-01",
    prepTime: "PT5M",
    description:
      "I call this magic sauce. In part, because it makes everything it touches shimmy with deliciousness. It's magic like that. Technically, it's a riff on a chimichurri sauce - one that has veered off the rails in a big way. ",
  },
  {
    name: "Brown Sugar Rosemary Walnuts",
    ingredients:
      "1 cup / 5 oz / 140 g  brown sugar or natural cane sugar\n2 teaspoons fine grain sea salt\n1 teaspoon chopped rosemary leaves\n1/4 cup / 1 oz / 30g sesame seeds\n2 large egg whites\n1 lb / ~4 cups shelled walnut halves\n1/3 cup / 1 1/2 oz / 45 g  chopped dried figs, stems trimmed",
    url: "http://www.101cookbooks.com/archives/brown-sugar-rosemary-walnuts-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/brown_sugar_walnuts.jpg",
    cookTime: "PT25M",
    recipeYield: "Makes 1 pound of nuts, or 4 medium bags.",
    datePublished: "2011-09-19",
    prepTime: "PT5M",
    description:
      "I made these Brown Sugar Rosemary Walnuts as a snack to take for my long travel day to The Greenbrier for the annual Symposium for Professional Food Writers. Recipe &amp; photos from my visit.",
  },
  {
    name: "Roasted Lemon Chutney",
    ingredients:
      "1/4 cup / 1 oz / 30g finely chopped shallots\n3 small lemons (4 to 5 oz each)\n1/4 cup / 60 ml extra-virgin olive oil, plus more for brushing\n1 tablespoon honey, plus more to taste\nkosher or sea salt and freshly ground black pepper\n2 tablespoons chopped basil or mint",
    url: "http://www.101cookbooks.com/archives/roasted-lemon-chutney-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/lemon_chutney_recipe.jpg",
    cookTime: "PT30M",
    recipeYield: "",
    datePublished: "2011-10-27",
    prepTime: "PT5M",
    description:
      "A beautiful roasted lemon chutney from Molly Steven's new book &amp; some Mendocino coast photos.",
  },
  {
    name: "Oregano Brussels Sprouts",
    ingredients:
      "24 small brussels sprouts (less if you can only find larger sprouts)\nextra virgin olive oil\nfine grain sea salt\nOregano Drizzle\n3/4 cup extra-virgin olive oil\u2028\n1/4 cup fresh oregano, chopped\n\u20281/4 cup fresh parsley, chopped\n\u20281 large garlic clove\n\u20281/4 teaspoon fine grain sea salt, plus more to taste.\n1 tablespoon extra-virgin olive oil, plus more for rubbing\na big handful of toasted almond slices",
    url: "http://www.101cookbooks.com/archives/oregano-brussels-sprouts-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/brussels_sprouts_2012.jpg",
    cookTime: "PT8M",
    recipeYield: "Serves 4 as a side.",
    datePublished: "2012-01-03",
    prepTime: "PT5M",
    description:
      "New year, new brussels sprouts recipe. This one pan-fried and then finished with a drizzle or oregano deliciousness, and toasted almond slices.",
  },
  {
    name: "Wintery Spring Rolls",
    ingredients:
      "2 spring onions, finely sliced\n2 red spring onions, finely sliced (or equiv. red onion / shallots)\n3 tablespoons grated, peeled ginger\n1/2 teaspoon fine grain sea salt\n6 tablespoons sunflower oil\n12 ounces extra firm tofu\n3 medium cloves garlic\n1/2 teaspoon fine grain sea salt\n4 teaspoons natural cane sugar (or brown sugar)\n2 tablespoons sunflower oil\n8 ounces mushrooms, brushed clean, sliced 1/4-inch thick\nGinger Onion Paste (above)\nBrown Sugar Tofu &amp; Mushrooms (above)\ncrisp, crunchy lettuce (baby gems / romaine)\n1 small bunch fresh cilantro or other herbs, well washed / dried\n~1 dozen rice paper wrappers",
    url: "http://www.101cookbooks.com/archives/wintery-spring-rolls-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/wintery_spring_rolls.jpg",
    cookTime: "PT15M",
    recipeYield: "Makes about a dozen rolls.",
    datePublished: "2012-02-16",
    prepTime: "PT15M",
    description:
      "The spring rolls I packed for a flight from San Francisco to Paris - ginger-onion paste, brown sugar tofu, mushrooms, and herbs.",
  },
  {
    name: "Spicy Lemon Coconut Sauce",
    ingredients:
      "1 clove garlic, peeled\n1 medium jalapeno (or serrano) chile, deseeded and chopped\n1/2 teaspoon fine grain sea salt, plus more to taste\n1 tablespoons sunflower oil\n1 small bunch of scallions, thinly sliced (~8 scallions)\n1/2 cup finely chopped cilantro\n1 14-ounce can of coconut milk (full fat)\n3 tablespoons freshly squeezed lemon juice, plus more to taste",
    url: "http://www.101cookbooks.com/archives/spicy-lemon-coconut-sauce-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/spicy_lemon_coconut_sauce.jpg",
    cookTime: "",
    recipeYield: "Makes about 2 1/2 cups.",
    datePublished: "2012-04-27",
    prepTime: "PT5M",
    description:
      "A spicy lemon coconut sauce that is good on just about everything - noodles, frittatas, soups. Keep a jar in the refrigerator, and you can use it to make things a little special throughout the week.",
  },
  {
    name: "Kale Market Salad",
    ingredients:
      "Green Garlic Dressing:\n2 stalks green garlic (or scallions), rinsed and chopped (~1/4 cup)\n1/4 teaspoon fine grain sea salt, plus more to taste\n2 tablespoons fresh lemon juice\n1/3 cup / 80 ml extra virgin olive oil\n2 tablespoons ripe avocado\n1 teaspoon honey, or to taste\nfresh pepper to taste\n1/2 bunch kale, destemmed, torn into pieces\n1 cup / 5.5 oz cooked farro or wheat berries (semi-pearled or whole)\n4-5 farmers' market carrots, very thinly sliced\n1 small bulb of fennel, transparently sliced\n1 avocado, cut into small cubes\na big handful of almond slices, toasted",
    url: "http://www.101cookbooks.com/archives/kale-market-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/kale_market_salad.jpg",
    cookTime: "",
    recipeYield: "Serves 2-4.",
    datePublished: "2012-06-14",
    prepTime: "PT10M",
    description:
      "There's a pizza restaurant in my neighborhood that makes amazing salads. This one, for example, had farro, kale, avocado, carrots, fennel and a creamy green garlic dressing.",
  },
  {
    name: "Yellow Bean Salad",
    ingredients:
      "1 pound / 16 oz yellow runner beans\n1 serrano chile, stemmed and seeded\n5 green onions, green parts trimmed &amp; reserved\na big handful of cilantro\n1 clove garlic, peeled and smashed\n3/4 teaspoon fine grain sea salt\n1 tablespoon sunflower oil\n1 cup coconut milk, well mixed\n1- 2 tablespoons freshly squeezed lemon juice, or to taste\n2 big handfuls / 1/2 cup toasted pepitas\n1 1/2 cups tiny pan-fried tofu cubes, optional\nbasil flower garnish, optional",
    url: "http://www.101cookbooks.com/archives/yellow-bean-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/yellow_bean_salad_recipe.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2012-08-19",
    prepTime: "PT10M",
    description:
      "A summer yellow bean salad with a green chile-spiked, cilantro-flecked, and coconut milk dressing, toasted pepitas, and (if you want to make a meal of it) pan-fried tofu.",
  },
  {
    name: "Coconut Corn Salad Recipe",
    ingredients:
      "3 tablespoons unsalted butter\n5 ears of corn, shucked\nfine grain sea salt\n3 tablespoons fresh thyme leaves\n1 cup / 1 1/2 oz / 40 g big coconut flakes, well toasted\n1 cup / 3 oz / 85 g sliced almonds, well toasted\n3 tablespoons chopped red onions\nbig squeeze of fresh lemon or lime juice",
    url: "http://www.101cookbooks.com/archives/coconut-corn-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/coconut_corn_salad_recipe.jpg",
    cookTime: "PT5M",
    recipeYield: "Serves 4.",
    datePublished: "2012-08-28",
    prepTime: "PT5M",
    description:
      "Butter a skillet add corn, fresh thyme, red onions, toasted almonds and coconut, and finish with a squeeze of lemon or lime juice...",
  },
  {
    name: "An Ideal Lunch Salad",
    ingredients:
      "3 celery stalks, very thinly sliced\n1 cup chickpeas (equivalent 14-ounce can), drained/rinsed\n3 handfuls arugula or shredded romaine lettuce\n1/3 cup toasted pepitas or almonds\n15 black olives, chopped\n1/2 small red onion, finely diced\n1 small head of broccoli florets, blanched\nCreamy Miso Dressing:\n1 medium clove garlic, smashed\n1 tablespoon white miso\n1 tablespoon mirin\n1 tablespoon brown rice vinegar\nbig pinch of ground cumin\n1/3 cup / 80 ml plain yogurt\n1-2 tablespoons heavy cream, or to taste\n1 small ripe avocado, sliced",
    url: "http://www.101cookbooks.com/archives/an-ideal-lunch-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/an_ideal_lunch_salad.jpg",
    cookTime: "",
    recipeYield: "Serves 2-4, depending on what else is served.",
    datePublished: "2013-02-25",
    prepTime: "PT10M",
    description:
      "There's all sorts of good stuff in this salad - chickpeas, celery, black olives, pepitas, avocado, blanched broccoli. Full of crunch &amp; substance, it's a salad that can stand up to a few hours in a container without collapsing. ",
  },
  {
    name: "Parmesan Celery Salad Recipe",
    ingredients:
      "8 large celery stalks, stripped of strings\n3 tablespoons extra-virgin olive oil\n2 tablespoons freshly squeezed lemon juice\n4 tablespoons freshly grated Parmesan, plus more for topping\n1 1/2 cups / 10 oz / 285 cooked cannellini or garbanzo beans, heated\n3 tablespoons currants (or golden raisins)\n1/2 cup / 1 1/2 oz / 40 g sliced almonds, deeply toasted\nsea salt or homemade celery salt\nfreshly chopped herbs (or herb flowers), or reserved celery leaves",
    url: "http://www.101cookbooks.com/archives/parmesan-celery-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/celery_salad_recipe.jpg",
    cookTime: "PT5M",
    recipeYield: "Serves 4-6.",
    datePublished: "2012-08-07",
    prepTime: "PT10M",
    description:
      "A breezy summer-spirited lunch salad made with celery, beans, and Parmesan. And a glance at my attempt at organizing some of my pictures into albums.",
  },
  {
    name: "Broccoli Crunch Recipe",
    ingredients:
      "4 -5 cups tiny broccoli florets (and chopped stalks if you like)\n1 garlic clove, smashed and chopped\nscant 1/2 teaspoon fine grain sea salt\n1/4 cup almond butter\n3 tablespoons freshly squeezed lemon juice\n1 teaspoon honey\n2 tablespoons extra-virgin olive oil\n2 tablespoons hot water\n2 small crisp apples, cut into bit-sized pieces (if you aren't going to use the apples immediately, let them sit in a bowl of water with the juice of 1/2 a lemon)\n1/2 small red onion, thinly sliced\n1/2 cup toasted or candied walnuts or almonds\n1/3 cup pan-fried crunchy shallots*\nchives (optional)",
    url: "http://www.101cookbooks.com/archives/broccoli-crunch-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/broccoli_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4.",
    datePublished: "2008-10-05",
    prepTime: "",
    description:
      "A great broccoli recipe, one of my favorites! Tiny green florets, crisp apples, crunchy shallots, candied nuts and slivered red onions are tossed in a barely sweet, creamy almond vinaigrette. Add baked tofu or pan-fried tempeh and you can easily turn this side into a main course. ",
  },
  {
    name: "Roasted Pumpkin Salad Recipe",
    ingredients:
      "3 cups of pumpkin (or other winter squash), peeled and cut into 1-inch cubes\nextra-virgin olive oi\nfine grain sea salt\n12 tiny red onions or shallots, peeled (OR 3 medium red onions peeled and quartered)\n2 cups cooked wild rice*\n1/3 cup sunflower seeds\n1/3 cup olive oil\n2 tablespoons lemon juice\n1/4 teaspoon salt\n1 tablespoon honey\n2 tablespoons warm water\n1/2 cup cilantro, finely chopped",
    url: "http://www.101cookbooks.com/archives/roasted-pumpkin-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/pumpkin_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4.",
    datePublished: "2008-10-14",
    prepTime: "",
    description:
      "A roasted pumpkin salad made with wild rice, tiny, caramelized red onions drizzled with a simple, honey-kissed, creamy sunflower seed dressing. A colorful harvest salad perfect for Fall festivities.",
  },
  {
    name: "Shredded Brussels Sprouts &amp; Apples",
    ingredients:
      "1 large, crisp apple, cut into bite-sized wedges\n1 lemon, juice only\n4 ounces extra-firm tofu cut into tiny-inch cubes (see photo)\na couple pinches of fine-grain sea salt\na couple splashes of olive oil\n2 medium cloves garlic, minced\na scant tablespoon of maple syrup\n1/3 cup pine nuts, toasted and chopped\n12 ounces (3/4 pound). brussels sprouts, washed and cut into 1/8-inch wide ribbons",
    url: "http://www.101cookbooks.com/archives/shredded-brussels-sprouts-apples-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/shredded_brussels_sprouts.jpg",
    cookTime: "",
    recipeYield: "Serves 2 - 3 as a main, 4 as a side.",
    datePublished: "2008-10-29",
    prepTime: "",
    description:
      "Shredded brussels sprout ribbons, apples, garlic, pine nuts, and tofu in a skillet with a hint of maple syrup.",
  },
  {
    name: "Mushroom Casserole Recipe",
    ingredients:
      "1/2 pound (8 ounces) brown mushrooms, cleaned and chopped\n1 large onion, well chopped\n3 cloves garlic, finely chopped\n3 cups cooked brown rice, room temperature\n2 large eggs\n1 cup cottage cheese\n1/2 cup sour cream\n1/2 teaspoon fine grain sea salt\n1/3 cup freshly grated Parmesan cheese\na bit of fresh tarragon, chopped ",
    url: "http://www.101cookbooks.com/archives/mushroom-casserole-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/mushroom_casserole_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves about 8.",
    datePublished: "2008-11-30",
    prepTime: "",
    description:
      "A remix of the mushroom casserole I loved as a kid. Brown rice, mushrooms, garlic, onions along side a bit of cottage cheese and sour cream and Parmesan for texture and creaminess.",
  },
  {
    name: "Brussels Sprout Salad Recipe",
    ingredients:
      "1 1/2 pound brussels sprouts, freshest you can find\n3 tablespoons extra-virgin olive oil\n2 - 3 tablespoons fresh lemon juice\n1 teaspoon fresh thyme leaves\n1/3 cup fresh chives, minced\n2-3 big pinches of salt \n1 1/3 cups hazelnuts, smashed just a bit and toasted\n2 ounces hard, salty, aged cheese, shaved (pecorino, dry aged jack, Parmesan, etc)",
    url: "http://www.101cookbooks.com/archives/brussels-sprout-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/brussels_sprout_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4 - 6.",
    datePublished: "2009-02-14",
    prepTime: "",
    description:
      "A shredded brussels sprout salad recipe, slaw-like in spirit, accompanied by lots of toasted hazelnuts, and shard after shard of aged cheese. The sprouts are tossed with a few glugs of olive oil and a big squeeze of fresh, fragrant lemon juice.",
  },
  {
    name: "Tassajara Warm Red Cabbage Salad",
    ingredients:
      "1/2 cup sunflower seeds\n1 teaspoon natural cane sugar (or brown sugar)\nfine grain sea salt\n2 tablespoons extra-virgin olive oil\n1 red onion, diced\n3 medium cloves garlic, minced\n1 pound head of red cabbage or radicchio, quartered and cut into thin ribbons\n1 teaspoon fresh rosemary, minced\n2 ounces golden raisins (or other plump, chopped dried fruit)\n1 1/2 tablespoons balsamic vinegar\n2 ounces feta cheese, crumbled\na bit of freshly grated Parmesan cheese, to garnish",
    url: "http://www.101cookbooks.com/archives/tassajara-warm-red-cabbage-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/warm_cabbage_salad.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2009-10-20",
    prepTime: "PT10M",
    description:
      "Inspired by a recipe in The Complete Tassajara Cookbook, a warm winter salad made from sauteed shredded red cabbage. Feta, balsamic vinegar, and golden raisins make it sweet and salty, rich with color, texture and flavor.",
  },
  {
    name: "Miso Harissa Delicata Squash",
    ingredients:
      "1/2 pound /  8 oz / 230 g  small fingerling potatoes, washed and dried\n3/4 pound / 12 oz / 340 g delicata squash\n1/4 cup / 60 ml extra virgin olive oil\nscant 1/4 cup / 50 ml white miso\nscant 1 tablespoon harissa paste\n3 tablespoons freshly squeezed lemon juice\n1 1/2 ounce / 45 g kale, de-stemmed and finely chopped\n4 radishes, very thinly sliced\n1 1/2  ounces / 45g Marcona almonds, toasted pepitas, or other toasted nuts",
    url: "http://www.101cookbooks.com/archives/roasted-delicata-squash-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/roasted_delicata_salad_recipe.jpg",
    cookTime: "PT30M",
    recipeYield: "",
    datePublished: "2010-02-18",
    prepTime: "PT10M",
    description:
      "I used my friend Molly Watson's recipe as a jumping off point here, and ended up with a roasted squash salad of sorts. It uses the pretty, scalloped-edged cross-cuts of the delicata squash, a few small potatoes, chopped kale, radishes, Marcona almonds - and a bold miso harissa dressing.",
  },
  {
    name: "Spiced Tomato Gratin",
    ingredients:
      "1 teaspoon whole cumin seeds\n2 teaspoons curry powder\n1/2 teaspoon red pepper flakes\n1/4 cup extra-virgin olive oil\n6 cups thinly sliced yellow onions (about 2 pounds / 32 oz / 910 g)\n1 tablespoon unsalted butter\n1 1/4 pounds / 20 ounces / 570 g Yukon Gold potatoes\n1/2 cup / 120 ml heavy cream\n2 pounds / 32 oz / 910 g ripe tomatoes\na small handful of basil leaves, slivered\nsea salt and freshly ground pepper",
    url: "http://www.101cookbooks.com/archives/spiced-tomato-gratin-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/spiced_tomato_gratin_recipe.jpg",
    cookTime: "PT180M",
    recipeYield: "Serves 10 as a side.",
    datePublished: "2010-08-01",
    prepTime: "PT30M",
    description:
      "In a Indian spiced departure from a favorite Suzanne Goin recipe - this is a rustic, deeply flavorful summer gratin made with sliced tomatoes, potatoes, caramelized onions, curry powder, and a kick of red chile flakes. ",
  },
  {
    name: "Baked Farro Pasta Recipe",
    ingredients:
      "1 pound small waxy potatoes, for example Yukon gold, fingerling, Yellow Finn\nfine grain sea salt\n1 1/2 tablespoons unsalted butter, plus more for the baking dish\n2 medium leeks, trimmed, thinly sliced, well washed\n3 garlic gloves, minced\n1/2 medium head of cabbage (about 1 lb / 16 oz / 450g), cored and shredded\n1/2 cup / 120 ml vegetable broth or water\n1 1/2 tablespoons whole grain mustard\n1 1/2 cups freshly grated Parmesan cheese\n16 fresh sage leaves\n12 ounces / 340 g dried farro tagliatelle, broken into 3-inch segments\n4 ounces soft-rind, creamy cheese, cut into tiny cubes (for example, I used this Ardrahan farmhouse cheese, but Stracchino, fontina, or tallegio could all work too)",
    url: "http://www.101cookbooks.com/archives/baked-farro-pasta-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/baked_farro_pasta.jpg",
    cookTime: "PT60M",
    recipeYield: "",
    datePublished: "2010-12-27",
    prepTime: "PT60M",
    description:
      "A cold-weather crowd-pleaser made of alternating layers of broken farro pasta, sliced potatoes, two cheeses, and mustardy shredded cabbage. The sort of thing you can prep a day or two ahead of time, and then bake when convenient.",
  },
  {
    name: "New Year Noodle Soup",
    ingredients:
      "2 tablespoons olive oil\n1 onion, thinly sliced\n1 long red chili OR green serrano, finely chopped\n1/2 teaspoon ground turmeric\n1 teaspoon ground cumin\n1/4 teaspoon freshly ground black pepper\n8 1/2 cups / 2 liters good-tasting vegetable stock/broth\n100g / 3.5 oz yellow split peas or brown lentils\n1 1/2 cups cooked chickpeas, rinsed if using canned\n2 cups / 350g cooked borlotti beans\nfine grain sea salt\n120 g thin egg noodles, fresh or dried\n3 1/2 oz / 100g fresh spinach leaves, finely shredded\n1/2 cup finely shredded cilantro leaves\n2 tablespoons chopped fresh dill\njuice of one lime\nToppings:\n1 tablespoon olive oil\n1 tablespoon unsalted butter\n1 large onion, thinly sliced\n100 ml sour cream or creme fraiche\n50g / scant 2 ounces of toasted, chopped walnuts",
    url: "http://www.101cookbooks.com/archives/new-year-noodle-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/newyear_noodle_soup_recipe_xl.jpg",
    cookTime: "PT40M",
    recipeYield: "",
    datePublished: "2011-01-01",
    prepTime: "PT20M",
    description:
      "An amazing New Year Noodle Soup from Greg &amp; Lucy Malouf's beautiful book, Saraban. It's a bean and noodle soup at its core featuring thin egg noodles swimming in a fragrant broth spiced with turmeric, cumin, chiles, and black pepper. You use a medley of lentils, chickpeas, and borlotti beans which makes the soup heart and filling without being heavy. You add spinach, dill, and cilantro. You add lime juice for a bit of sour at the end. And then you've got a number of toppings to add when you serve the soup - chopped walnuts, caramelized onions, and sour cream. Amazing.",
  },
  {
    name: "Leek Soup with Dill Oil",
    ingredients:
      "1 small bunch of fresh dill ~ .5 oz / 15 g\n9 tablespoons extra virgin olive oil\n3.5 pounds / 56 oz / 1.5 kg leeks\n6 tablespoons unsalted butter\nfine grain sea salt\n2 large, thin-skinned potatoes, thinly sliced\n3 medium garlic cloves, thinly sliced\n6.5+ cups / 1.5+ liters good-tasting vegetable broth, preferably hot\ntoasted almond slices, for topping\ngrated gruyere cheese, for topping",
    url: "http://www.101cookbooks.com/archives/leek-soup-with-dill-oil-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/leek_soup_recipe.jpg",
    cookTime: "PT25M",
    recipeYield: "Makes a big pot - enough for 8 -10 servings.",
    datePublished: "2011-01-29",
    prepTime: "PT10M",
    description:
      "A rustic leek soup topped with an electric green drizzle of dill oil and crunchy toasted almonds.",
  },
  {
    name: "Baked Farro Risotto Recipe",
    ingredients:
      "2 tablespoons extra virgin olive oil, plus more for the baking pan &amp; drizzling\nzest of one lemon\n1 medium onion\nfine grain sea salt\n1 1/2 cups / 10.5 oz / 300 g uncooked semi-pearled farro\n1 cup / 8 oz / 225 g tomato sauce*\n2 1/2 cups / 600 ml good-tasting vegetable broth or water\n1 1/4 cups / 2 oz / 60g  freshly grated Parmesan\n1 tablespoons fresh oregano, chopped",
    url: "http://www.101cookbooks.com/archives/baked-farro-risotto-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/baked_farro_risotto_recipe.jpg",
    cookTime: "PT45M",
    recipeYield: "Serves 6.",
    datePublished: "2011-02-14",
    prepTime: "PT10M",
    description:
      "A baked farro risotto recipe - lemon-kissed, bright tomato sauce, lots of Parmesan, and chopped fresh oregano.",
  },
  {
    name: "Winter Vegetable &amp; Tofu Korma",
    ingredients:
      "1/4 teaspoon ground cardamom\n1 1/2 teaspoons turmeric\n1 1/2 teaspoons crushed red pepper flakes\n1 1/2 teaspoons ground cumin\n1 3/4 teaspoons ground coriander\n1/4 teaspoon cinnamon\n2 tablespoons clarified butter, ghee, or sunflower oil\n2 medium yellow onions, very finely chopped \n1 tablespoon freshly grated ginger, peeled first\n4 medium cloves garlic, peeled and chopped\n1 1/2 pounds waxy potatoes, cut into 1/4-inch cubes\n12 ounces / 340 g cauliflower, cut into tiny trees\n2/3 cup / 65g sliced almonds, toasted\n3/4 teaspoon fine sea salt, plus more to taste\n12 ounces / 340 g firm tofu, cut into 1/4-inch cubes or matchsticks\n1/2 cup / 4.5 oz / 130 g greek yogurt\n1/2 cup / 120 ml heavy cream\na small bunch of fresh cilantro, chopped",
    url: "http://www.101cookbooks.com/archives/winter-vegetable-tofu-korma-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/winter_korma_recipe.jpg",
    cookTime: "PT20M",
    recipeYield: "Serves 6+",
    datePublished: "2011-03-01",
    prepTime: "PT40M",
    description:
      "A thick, cumin and coriander-spiced root vegetable stew. It's a free-wheeling one-pot dinner that attempts to use up whatever winter vegetables I have lingering about.",
  },
  {
    name: "Spiced Coconut Spinach",
    ingredients:
      "1 shallot\n1 large clove of garlic\n1/4 teaspoon fine-grain sea salt\n1 tablespoon ghee, clarified butter, or sunflower oil\n1/4 teaspoon yellow mustard seeds\n1/4 teaspoon whole cumin seeds\n1/4 teaspoon red pepper flakes\n1 cup finely sliced asparagus - optional\n7 oz / 200g spinach, well washed, and chopped\nsqueeze of lemon\n1 1/2  tablespoons unsweetened coconut, lightly toasted",
    url: "http://www.101cookbooks.com/archives/spiced-coconut-spinach-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/spiced_spinach_recipe.jpg",
    cookTime: "PT5M",
    recipeYield: "",
    datePublished: "2011-05-09",
    prepTime: "PT5M",
    description:
      "The perfect simple, spinach side dish - toast a few spices, add a pile of shredded spinach to the skillet, and finish things off with a burst of lemon juice and some shredded coconut.",
  },
  {
    name: "Tortilla Salad Recipe",
    ingredients:
      "3 cups / ~1 lb / 16 oz cooked beans, room temperature or warm\n1/3 cup / 1.5 ounces / 45 g toasted sunflower seeds (or pepitas)\n1/4 cup / 60ml this dressing (or other favorite vinaigrette), or to taste\n2 cups / big handfuls of chopped cauliflower (stems, leaves, florets), boiled in a bit of salted water for just 20 seconds, then drained under cold water\n2-3 big handfuls of tortilla chips\n1/4 cup / 1.5 oz / 45 g crumbled feta\n1 small (watermelon) radish, sliced paper thin\n1/2 avocado, sliced",
    url: "http://www.101cookbooks.com/archives/tortilla-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/tortilla_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2011-09-13",
    prepTime: "PT5M",
    description:
      "A tortilla salad made from all sorts of good stuff - heirloom beans, avocado, watermelon radish, and cauliflower. Electric colors, punchy dressing, fresh and filling. ",
  },
  {
    name: "Broccoli-Basil Mac and Cheese",
    ingredients:
      "1 small butternut, acorn, or other winter squash, peeled, seeded and cut into tiny chunks \nolive oil\n1 bunch of basil, stems removed\n2 slices good brown bread, stale or dried out in the oven\n1/2 a small head of broccoli (100 g / 3.5 oz), roughly chopped\n4 tablespoons creme fraiche or sour cream\n~ 1 3/4 cups / 3.5 oz / 100 g grated white cheddar cheese\n~ 1 3/4 cups / 3.5 oz / 100 g grated gruyere cheese\na large handful of (yellow) cherry tomatoes\n3 cups / 300 g dried (whole wheat) macaroni elbows",
    url: "http://www.101cookbooks.com/archives/broccolibasil-mac-and-cheese-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/green_mac_and_cheese_recipe.jpg",
    cookTime: "PT25M",
    recipeYield: "",
    datePublished: "2011-10-17",
    prepTime: "PT35M",
    description:
      "While in London my friend Anna Jones gave me a copy of the terrific new book she worked on - this broccoli-basil crusted mac and cheese immediately caught my attention. ",
  },
  {
    name: "Red Lentil Soup with Lemon",
    ingredients:
      "2 cups / 14 oz / 400 g split red lentils, picked over and rinsed well\n1 tablespoon turmeric\n4 tablespoons unsalted butter\nfine grain sea salt\n1 large onion / ~ 2 cups, diced\n2 teaspoons ground cumin\n1 1/2 teaspoons yellow mustard seeds\n1 cup chopped cilantro\nJuice of three lemons, or to taste\n1 large bunch of spinach leaves, chopped\nplenty of cooked (warm) brown rice, to serve\nplenty of plain Greek yogurt, to serve",
    url: "http://www.101cookbooks.com/archives/red-lentil-soup-with-lemon-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/red_lentil_soup_2011.jpg",
    cookTime: "PT30M",
    recipeYield: "Serves 6.",
    datePublished: "2011-11-08",
    prepTime: "PT5M",
    description:
      "An earthy, turmeric and mustard-spiked lentil soup served over brown rice with spinach and thick yogurt.",
  },
  {
    name: "Ginger Soba Noodles",
    ingredients:
      "12 oz /  340 g dried soba noodles\nGinger Dressing:\n1 tablespoon freshly grated fresh ginger\n1 teaspoon toasted sesame oil\nzest and juice of 1/2 a lemon\n1/2 cup / 2.5 oz / 70 g chopped white onion\n1 teaspoon mirin (optional)\n 2 teaspoons brown sugar or honey\n1/2 teaspoon salt, plus more to taste\n3 tablespoons brown rice vinegar\n1 celery stalk, strings removed, then chopped\n1/3 cup / 80 sunflower oil or untoasted sesame oil\n3 tablespoons of chopped tarragon, plus more to taste\na few big handfuls of cubed tofu, pan-fried or baked until golden\n1/3 cup + toasted squash seeds, pumpkin seeds, walnuts, or sesame seeds",
    url: "http://www.101cookbooks.com/archives/ginger-soba-noodles-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/ginger_soba_noodles.jpg",
    cookTime: "PT20M",
    recipeYield: "Serves 4 - 6.",
    datePublished: "2011-11-14",
    prepTime: "PT10M",
    description:
      "Soba noodles tossed with a creamy-ginger dressing and topped with crispy tofu, tarragon, and toasted delicata squash seeds.",
  },
  {
    name: "Roasted Winter Squash Salad",
    ingredients:
      "1 pound / 450 g roasted winter squash*, cut into 1-inch / 2.5-cm chunks, skin removed\n4 celery stalks (with leaves if possible), diced\n1/ 2 medium red onion, finely chopped\n2 big handfuls toasted walnuts, chopped\n1/4 cup dried currants / dried figs\n2/3 cup / 160 ml beer (something along the lines of Anchor Steam)\n2 teaspoons Dijon-style mustard\n2 tablespoons cider vinegar\n3 tablespoons olive oil\n1 1/2 teaspoon honey or brown sugar\n1/4 teaspoon fine grain sea salt",
    url: "http://www.101cookbooks.com/archives/roasted-winter-squash-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/winter_squash.jpg",
    cookTime: "PT20M",
    recipeYield: "Serves 6.",
    datePublished: "2011-12-01",
    prepTime: "PT10M",
    description:
      "A wintertime riff on potato salad. No potatoes though, just winter squash, a beer-based dressing, rosemary, walnuts, currants, and celery.",
  },
  {
    name: "Green Lentil Soup with Curried Brown Butter",
    ingredients:
      "2 tablespoons unsalted butter, ghee, or extra-virgin coconut oil\u2028\n1 large yellow onion, chopped\n\u20283 cloves garlic, chopped\u2028\n1/2 teaspoon red pepper flakes\n\u20285 1/2 cups / 1.3 liters good-tasting vegetable broth or water\n1 1/2 cups / 10.5 oz / 300 g green lentils or green split peas, picked over and rinsed\n3 tablespoons unsalted butter\u2028\n1 tablespoon Indian curry powder\n\u20281/2 cup / 125 ml coconut milk\n\u2028Fine-grain sea salt\u2028\n1 bunch fresh chives, minced\nsmall cubes of pan-fried paneer (optional)",
    url: "http://www.101cookbooks.com/archives/green-lentil-soup-with-curried-brown-butter-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/kinfolk_feature.jpg",
    cookTime: "PT45M",
    recipeYield: "",
    datePublished: "2011-12-28",
    prepTime: "PT5M",
    description:
      "A few outtakes from the winter Kinfolk magazine shoot/article I worked on with Wayne. Plus the Green Lentil Soup with Curried Brown Butter featured in the photos.",
  },
  {
    name: "Miso Sesame Winter Squash",
    ingredients:
      "2 pounds delicata squash (~3), halved, seeded, and cut into 1/2-inch inch thick pieces\n2 tablespoons toasted sesame oil \n2 tablespoons molasses \n1 teaspoon tamari or shoyu\n2 tablespoons pure maple syrup\n1 heaping tablespoon white or yellow miso \n1/4 cup freshly squeezed orange juice\n1 tablespoon freshly squeezed lemon juice \n1/4 teaspoon grated lemon zest\n5 tablespoons water \n8 ounces organic extra-firm tofu, pressed, cut into 1/2-inch cubes\nVarious toppings: toasted sesame seeds, chopped arugula, basil, basil flowers, lemon wedges",
    url: "http://www.101cookbooks.com/archives/miso-sesame-winter-squash-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/miso_winter_squash.jpg",
    cookTime: "PT70M",
    recipeYield: "",
    datePublished: "2012-01-24",
    prepTime: "PT10M",
    description:
      "Inspired by a recipe in Bryant Terry's new cookbook, The Inspired Vegan. Roasted winter squash (and tofu) with a miso, maple, sesame, citrus sauce.",
  },
  {
    name: "Moroccan Mint Roasted Vegetables",
    ingredients:
      "1 lb / 16 oz / 450 g mix of potatoes, cauliflower, and a few radishes (save the tops)\n1 1/2 teaspoons dried mint\n1/2 teaspoon red chile pepper flakes\n1/2 teaspoon cumin seeds\n1/2 teaspoon fine grain sea salt\n1 teaspoon ground cumin\n1/2 teaspoon cinnamon\n1 teaspoon ground ginger\n4 tablespoons extra virgin olive oil\na squeeze of fresh lemon juice\ntoppings: fresh mint, toasted sesame and/or pumpkin seeds, plain yogurt (seasoned with a bit of salt)",
    url: "http://www.101cookbooks.com/archives/moroccan-mint-roasted-vegetables-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/moroccan_vegetables.jpg",
    cookTime: "PT15M",
    recipeYield: "Serves 4.",
    datePublished: "2012-02-22",
    prepTime: "PT5M",
    description:
      "A few snapshots from my week in Marrakesh, Morocco + the recipe for a platter of roasted vegetables spiced with dried mint, cumin, ginger, cinnamon, and a kiss of chile. So good with a dollop of salted yogurt and a sprinkle of toasted sesame seeds.",
  },
  {
    name: "A Simple Tomato Soup",
    ingredients:
      "4 tablespoons unsalted butter, olive oil, or coconut oil\n2 medium yellow onions, thinly sliced\n1 teaspoon fine grain sea salt, plus more to taste\n3 teaspoons curry powder\n1 teaspoon ground coriander\n1 teaspoon ground cumin\n1/2 teaspoon chile flakes\n2 (28-ounce) cans whole tomatoes (pref. fire-roasted)\n1 14-ounce can coconut milk\nto serve: any of the following that sound good to you - cooked brown rice, lemon wedges, toasted almond slices, pan-fried paneer, fresh thyme or oregano, oregano drizzle, a poached egg",
    url: "http://www.101cookbooks.com/archives/a-simple-tomato-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/brothy_tomato_soup_recipe.jpg",
    cookTime: "PT25M",
    recipeYield: "",
    datePublished: "2012-03-06",
    prepTime: "PT5M",
    description:
      "A simple tomato soup recipe inspired by a Melissa Clark recipe - pureed, warmly spiced, and perfect topped with everything from toasted almonds and herbs, to coconut cream or a poached egg.",
  },
  {
    name: "Saag Paneer",
    ingredients:
      "1 1/2 pounds fresh (baby) spinach, well washed and dried\n2 tablespoons ghee, clarified butter, or unsalted butter\n8 - 12 oz paneer cheese, cut into 1/2-inch cubes\n2 medium onions, finely chopped\nscant 1/2 teaspoon fine grain sea salt\n3 medium garlic cloves, finely chopped\n1 tablespoon grated fresh ginger\n1 tablespoon spice mixture* (see below)\n1/4 teaspoon turmeric\n1 cup buttermilk\nsplash of cream or dollop of plain yogurt (optional)\nfresh lemon to finish, and toasted sesame seeds to sprinkle",
    url: "http://www.101cookbooks.com/archives/saag-paneer-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/saag_paneer_recipe.jpg",
    cookTime: "PT15M",
    recipeYield: "Serves 4-6.",
    datePublished: "2012-03-27",
    prepTime: "PT15M",
    description:
      "This is how I like to cook saag paneer - chopped spinach, golden-crusted paneer cheese, assertively spices, and finished with toasted sesame seeds and fresh lemon juice.",
  },
  {
    name: "Broccolini Salad",
    ingredients:
      "1 lb / 16 oz / 450 g  baby broccoli / broccolini, trimmed, and each stalk halved if you like\n3 bunches scallions, trimmed and thinly sliced\n1 small serrano chile pepper, deveined, seeded and minced (opt)\n1/2 cup / 120 ml extra virgin olive oil\nfine grain sea salt\n3 big handfuls of big, rustic croutons\na squeeze of fresh lemon juice.\n1 cup / 4 oz / 115 g sliced almonds, toasted\n4 - 6 oz fresh mozzarella cheese, torn into big chunks",
    url: "http://www.101cookbooks.com/archives/broccolini-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/broccolini_salad_recipe.jpg",
    cookTime: "PT10M",
    recipeYield: "Serves 4 - 6.",
    datePublished: "2012-04-05",
    prepTime: "PT10M",
    description:
      "Big bowl of green - broccolini tossed with big croutons, tons of scallion slices, mozzarella, toasted almonds, and a hit of serrano pepper.",
  },
  {
    name: "Heirloom Tomato Salad",
    ingredients:
      "2 pounds / 1 kg tomatoes ( a mix of small heirlooms &amp; cherry tomatoes), halved\n1/4 cup / 60 ml extra virgin olive oil\n1 tablespoon brown sugar or maple syrup\ncouple pinches of fine grain sea salt\n1/3 cup toasted almond slices\n2 tablespoons capers, fried in a bit of oil\n6 oz good mozzarella, torn into chunks\na handful of torn lettuce leaves\ngenerous drizzle of lemon olive oil or chive oil*\nchive (or herb) flowers or minced chives, to serve",
    url: "http://www.101cookbooks.com/archives/heirloom-tomato-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/tomato_salad_recipe.jpg",
    cookTime: "PT60M",
    recipeYield: "Serves 4 - 6 as a side.",
    datePublished: "2012-07-24",
    prepTime: "PT10M",
    description:
      "My favorite tomato salad this year - made with roasted and ripe tomatoes, capers, mozzarella, almonds, and chives.",
  },
  {
    name: "Na'ama's Fattoush Recipe",
    ingredients:
      "scant 1 cup / 200 g Greek yogurt \n3/4 cup plus 2 tbsp / 200 ml whole milk\n2 large stale Turkish flatbread or naan (9 oz /250 g in total)\n3 large tomatoes (13 oz /380 g in total), cut into 2/3-inch / 1.5cm dice\n3 oz / 100 g radishes, thinly sliced\n3 Lebanese or mini cucumbers (9 oz / 250 g in total), peeled and\nchopped into 2/3-inch / 1.5cm dice\n2 green onions, thinly sliced\n1/2 oz / 15 g fresh mint\nscant 1 oz / 25 g flat-leaf parsley, coarsely chopped\n1 tbsp dried mint\n2 cloves garlic, crushed\n3 tbsp freshly squeezed lemon juice\n1/4 cup / 60 ml olive oil, plus extra to drizzle\n2 tbsp cider or white wine vinegar\n1/2 teaspoon freshly ground black pepper, plus more to taste\n1 teaspoon fine grain sea salt, plus more to taste\n1 tbsp sumac or more to taste, to garnish",
    url: "http://www.101cookbooks.com/archives/naamas-fattoush-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/fattoush_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2012-10-08",
    prepTime: "PT180M",
    description:
      "A beautiful fattoush recipe and a preview of Yotam Ottolenghi and Sami Tamimi's new book, Jerusalem.",
  },
  {
    name: "Pumpkin and Rice Soup",
    ingredients:
      "2 tablespoons unsalted butter\n1 medium onion, chopped\n1 large shallot, chopped\n1/2 serrano chile, seeds and all, chopped\nfine grain sea salt\n1 1/2 pounds pumpkin/squash flesh, seeded, peeled, and cut into 3/4-inch chunks\n1 teaspoon fresh ginger juice, pressed from grated ginger\ncooked brown rice, warm\nother toppings: plain yogurt, toasted pepitas, lemon ginger rosemary butter* (and pulp)",
    url: "http://www.101cookbooks.com/archives/pumpkin-and-rice-soup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/pumpkin_rice_soup.jpg",
    cookTime: "PT25M",
    recipeYield: "Serves 4-6.",
    datePublished: "2012-10-27",
    prepTime: "PT10M",
    description:
      "The pumpkin soup I made as soon as I got home from India - with an herby butter drizzle and lemon ginger pulp. And some pictures of a photo session on the street in Jaipur.",
  },
  {
    name: "The Greenest Salad",
    ingredients:
      "1 medium head / 6 oz  romaine or baby romaine lettuce\n1 medium head of broccoli / 8 oz / TK g or equivalent broccolini, florets and stalks cut into small bite-sized pieces\n1 small avocado, sliced\n1/3 cup toasted pistachios\na bit of crumbled feta\nbig splash of balsamic tarragon vinaigrette*",
    url: "http://www.101cookbooks.com/archives/the-greenest-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/greenest_salad.jpg",
    cookTime: "",
    recipeYield: "Serves 4.",
    datePublished: "2012-11-03",
    prepTime: "PT10M",
    description:
      "A shredded green salad bulked out with blanched broccoli, avocado, pistachios, a bit of feta, and tossed with a tarragon balsamic vinaigrette &amp; pics from a special visit to Anokhi  cafe and HQ in Jaipur.",
  },
  {
    name: "Braised Broccoli with Orange and Parmesan",
    ingredients:
      "1/4 cup / 60 ml freshly squeezed orange juice\n1 14-ounce can crushed tomatoes\n1 head of broccoli, florets and stalks trimmed and cut into bite-sized pieces\n1/4 teaspoon chopped fresh oregano\n1/4 teaspoon red pepper flakes\n1/4 teaspoon fine grain sea salt\n1/8 teaspoon freshly ground black pepper\n1 tablespoon extra virgin olive oil\n1/4 cup Parmesan cheese shavings\n2 tablespoons toasted sliced almonds",
    url: "http://www.101cookbooks.com/archives/braised-broccoli-with-orange-and-parmesan-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/true_food_dr_weil.jpg",
    cookTime: "PT5M",
    recipeYield: "",
    datePublished: "2012-11-26",
    prepTime: "PT5M",
    description:
      "A simple one-pan broccoli recipe I've made no less than three times in the past ten days - Parmesan cheese, tomatoes, orange juice, and oregano.",
  },
  {
    name: "Heirloom Apple Salad",
    ingredients:
      "1/4 teaspoon fine grain sea salt\n12 rosemary leaves, minced (the spiky needles)\n1 medium garlic clove, peeled\n1 teaspoon sugar\n1/2 cup /120 ml cr\u00e8me fra\u00eeche (or sour cream)\n2 1/2 teaspoons white wine vinegar\nfreshly ground black pepper to taste\n3 large celery stalks, sliced see-though thin (reserve any celery leaves)\n2 crisp, flavorful heirloom apples, cut into sixths, and then thinly sliced*\n4 handfuls arugula, baby gems, or baby romaine\n1/3 cup toasted hazelnuts, walnuts, almonds, or pine nuts",
    url: "http://www.101cookbooks.com/archives/heirloom-apple-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/heirloom_apple_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4-6.",
    datePublished: "2012-12-02",
    prepTime: "PT7M",
    description:
      "The sort of winter salad I love - heirloom apples, shaved celery, and toasted nuts of your choosing. The dressing is cr\u00e8me fra\u00eeche spiked with rosemary, garlic and champagne vinegar",
  },
  {
    name: "Roasted Vegetable Orzo",
    ingredients:
      "1 medium delicata squash, seeded &amp; sliced 1/3-inch thick\n3 shallots, peeled\n2 tablespoons olive oil or melted clarified butter\nfine grain sea salt\n4 medium cloves garlic, peel on\n12 kale leaves, washed &amp; dried well, de-stemmed &amp; cut into 3-inch strips\n1 1/2 cups / 9 ounces uncooked orzo pasta\n1/2 cup / 120 ml plain yogurt\nFor serving: slivered scallions, fresh oregano, toasted nuts or seeds",
    url: "http://www.101cookbooks.com/archives/roasted-vegetable-orzo-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/roasted_vegetable_orzo.jpg",
    cookTime: "PT30M",
    recipeYield: "Serves 4-6.",
    datePublished: "2012-12-08",
    prepTime: "PT10M",
    description:
      "Roasted delicata squash and kale tossed w/ orzo pasta &amp; salted yogurt dressing &amp; I try to answer a few questions about living with marble kitchen counter tops.",
  },
  {
    name: "Posole in Broth",
    ingredients:
      "1 lb / 2 1/2 cups dried posole / hominy\n1 medium white or yellow onion\n5 cups great-tasting broth (see head note)\n1 serrano chile, seeded and minced\n2 cups / 12 ounces cooked mung beans, optional**\n1 bunch of scallions, trimmed and shredded\nTo serve: chopped olives, sliced avocado, sprouts or micro greens, toasted sliced almonds, and/or a drizzle of olive or lemon oil.",
    url: "http://www.101cookbooks.com/archives/posole-in-broth-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/posole_in_broth_recipe.jpg",
    cookTime: "PT70M",
    recipeYield: "Serves 6-8.",
    datePublished: "2013-01-01",
    prepTime: "PT10M",
    description:
      "Posole for the new year - it has a vegetable broth base, lots of blossoming corn kernels, avocado and mung beans. Topped with chopped olives and toasted almonds it's A+...",
  },
  {
    name: "Morrocan Carrot and Chickpea Salad",
    ingredients:
      "Dressing:\n1 tablespoon cumin seeds\n1/3 cup / 80 ml extra virgin olive oil\n2 tablespoons fresh lemon juice\n1 tablespoon honey\n1/2 teaspoon fine sea salt, plus more to taste\n1/8 teaspoon cayenne pepper\n10 ounces carrots, shredded on a box grater or sliced whisper thin on a mandolin\n2 cups cooked chickpeas (or one 15- ounce can, drained and rinsed)\n2/3 cup / 100 g  dried pluots, plums, or dates cut into chickpea-sized pieces\n1/3 cup / 30 g fresh mint, torn\nFor serving: lots of toasted almond slices, dried or fresh rose petals - all optional (but great additions!)",
    url: "http://www.101cookbooks.com/archives/moroccan-carrot-and-chickpea-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/moroccan_carrot_salad_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2013-01-07",
    prepTime: "PT15M",
    description:
      "A beauty of a carrot salad - tricked out with chickpeas, chunks of dried pluots, sliced almonds, and a toasted cumin dressing. Thank you Diane Morgan.",
  },
  {
    name: "Kale Rice Bowl",
    ingredients:
      "olive oil or clarified butter\n1 bunch of kale, destemmed, chopped/shredded\n~3 cups cooked brown rice\nTo serve: \n- capers, rinsed, dried, and pan-fried until blistered in butter\n- a poached egg\n- a dollop of salted greek yogurt\n- a big drizzle of good extra-virgin olive oil\n- lot's of za'atar\n- toasted sesame seeds",
    url: "http://www.101cookbooks.com/archives/kale-rice-bowl-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/kale_rice_bowl_recipe.jpg",
    cookTime: "PT5M",
    recipeYield: "Serves 2-3.",
    datePublished: "2013-02-11",
    prepTime: "PT5M",
    description:
      "A quick lunchtime brown rice bowl with kale, capers, salted yogurt, za'atar, toasted sesame seeds - and a poached egg for good measure.",
  },
  {
    name: "Marjoram Sauce with Capers &amp; Green Olives",
    ingredients:
      "1 thick slice country bread, crust removed\n2 tablespoons aged red vine vinegar\n1 clove garlic, coarsely chopped\n1/2 teaspoon fine grain sea salt\n1/3 cup / 1/4 oz / 8 g marjoram leaves\n3 tablespoons capers, rinsed\n1/2 cups / 1 1/2 oz / 45 g pine nuts or walnuts\n1 cup / 1 1/4 oz / 35 g finely chopped parsley\n10 pitted green olives\n1/2 cup / 120 ml olive oil",
    url: "http://www.101cookbooks.com/archives/marjoram-sauce-with-capers-green-olives-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/marjoram_sauce.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2013-02-18",
    prepTime: "PT10M",
    description:
      "Pungent, herby, and assertive, this is an incredibly versatile sauce. From Deborah Madison's new book, Vegetable Literacy, it's made with pounded capers, walnuts, green olives, and a load of herbs - the perfect slather for everything from sandwiches and pasta to egg salad and vegetables.",
  },
  {
    name: "Cold Soba Noodles",
    ingredients:
      "4 scallions, thinly sliced\n5 medium shallots, peeled and finely sliced\n2 tablespoons grated, peeled ginger\nscant 1 teaspoon fine grain sea salt\n7 tablespoons good sunflower or olive oil\n12 ounces extra-firm tofu\n12 ounces dried soba noodles\n1 radish, peeled, cut into matchsticks\n1/3 cup toasted pine nuts\n1 bunch of chives, minced",
    url: "http://www.101cookbooks.com/archives/cold-soba-noodles-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cold_soba_noodles.jpg",
    cookTime: "PT10M",
    recipeYield: "Serves 3-4.",
    datePublished: "2013-03-24",
    prepTime: "PT25M",
    description:
      "Cold soba noodles with a big dollop of ginger-scallion paste for the flight to Tokyo, plus pics from Japan, and a link to a few favorite spots in Tokyo.",
  },
  {
    name: "Elderflower Soda Recipe",
    ingredients:
      "1 ounce Elderberry Flower Syrup (IKEA or brew your own) \n1 cup sparkling water (plain)\nLots of ice",
    url: "http://www.101cookbooks.com/archives/000136.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/elderflower_soda_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-01-01",
    prepTime: "",
    description:
      "Elderflower soda is delicious! Not too sweet, just a touch tart, beautifully floral, it's like one of those Italian sodas you get, but with a refreshing, uplifting, fresh flavor",
  },
  {
    name: "Jamaica Flower Iced Tea Recipe\n(Agua de Jamaica)",
    ingredients:
      "4 cups water\n1/2 cup dried jamaica flowers\n1/2 cup sugar (I used natural cane sugar this time around)\nAnother 3 cups of cold water\nMore sugar to taste\n1 lime, thinly sliced",
    url: "http://www.101cookbooks.com/archives/000172.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/jamaica_iced_tea_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-06-06",
    prepTime: "",
    description:
      "Making this beautiful jamaica iced tea is easy, easy, easy. It is a must for your next BBQ or pool party.",
  },
  {
    name: "Lemon Verbena Drop Recipe",
    ingredients:
      "2 oz. lemon verbena infused vodka (instructions below)\nsplash of Limoncello\nsweeten to taste with superfine sugar or simple syrup (less grainy) - start with 1/4 teaspoon or so, and sweeten from there to taste.",
    url: "http://www.101cookbooks.com/archives/000538.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/lemon_verbena_drop_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-09-29",
    prepTime: "",
    description:
      "An amazing lemon verbena drop recipe courtesy of the Eatwell Farm newsletter.",
  },
  {
    name: "Blackberry Limeade Recipe",
    ingredients:
      "4 cups fresh blackberries, or unsweetened frozen blackberries, thawed, plus extra for garnish\n1 cup turbinado sugar, natural cane sugar, or grated palm sugar\n1 kaffir lime leaf, crushed, or 1 tablespoon grated lime zest\n1 green cardamom pod, lightly crushed\n1/2 cup fresh Key lime juice (about 8 -12 limes)\nThin lime slices, for garnish\n2 cups ginger ale (hs note: or sparkling water)\nIce cubes",
    url: "http://www.101cookbooks.com/archives/blackberry-limeade-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/blackberry_limeade_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 8.",
    datePublished: "2008-06-22",
    prepTime: "",
    description:
      "This blackberry limeade is a stunning jeweled-toned refresher, perfect for summer, from the cookbook Screen Doors and Sweet Tea by Martha Hall Foose.",
  },
  {
    name: "Chile Blackberry Syrup Recipe",
    ingredients:
      "4 dried guajillo peppers (1 oz - see head notes)\n1 cup / 6 oz / 170g dark Muscovado sugar or dark brown sugar\n1 cup / 7 oz / 200 g organic sugar\n1 1/2 cups / 355 ml water\n1/4 cups fresh lemon juice\n3/4 cups / 3.5 oz blackberries",
    url: "http://www.101cookbooks.com/archives/chile-blackberry-syrup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/blackberry_syrup_recipe.jpg",
    cookTime: "PT30M",
    recipeYield: "",
    datePublished: "2010-07-02",
    prepTime: "PT10M",
    description:
      "Inspired by a recipe in the September 2007 issue of Gourmet Magazine - a slow-burning, sweet and spicy, chile-infused blackberry syrup. It's great in spritzers, cocktails, on toast, in oatmeal, and on and on.",
  },
  {
    name: "Lime, Grapefruit and Ginger Juice",
    ingredients:
      "3 tablespoons natural cane sugar\n2 tablespoons ginger, peeled then grated\n1 cup / 240 ml water\nvery scant 1/2 cup / 95 ml fresh lime juice - 2 juicy limes\n1 1/3 cups / 310 ml fresh grapefruit juice - 2 juicy grapefruits",
    url: "http://www.101cookbooks.com/archives/lime-grapefruit-and-ginger-juice-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/grapefruit_juice.jpg",
    cookTime: "PT5M",
    recipeYield: "",
    datePublished: "2011-03-08",
    prepTime: "PT5M",
    description:
      "If you're looking for a jolt something bright, invigorating, spicy and citrusy - this is just the thing. You steep grated ginger in a bit of sugared water, and then strain it into a lime &amp; grapefruit juice blend. It's from the Rose Bakery inspired cookbook, which a number of us are cooking from in the coming weeks.",
  },
  {
    name: "Yuzu Maple Leaf Cocktail",
    ingredients:
      "2 ounces / 1/4 cup bourbon (I used Michter's)\n3/4 ounce / 1 1/2 tablespoon good maple syrup\n1/2  ounce / 1 tablespoon well-strained, fresh yuzu juice\n1/2  ounce / 1 tablespoon well-strained, fresh Meyer lemon juice\nextra small pinch of fine grain sea salt\nice",
    url: "http://www.101cookbooks.com/archives/yuzu-maple-leaf-cocktail-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/yuzu_maple_leaf_cocktail_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes 2-3 small drinks, or one larger cocktail.",
    datePublished: "2012-12-26",
    prepTime: "PT2M",
    description:
      "Winter citrus juice + bourbon + a bit of maple syrup, chilled, and served a tiny glass, is good.",
  },
  {
    name: "Rombauer Jam Cake Recipe",
    ingredients:
      "1 1/2 cups sifted all-purpose flour\n1 teaspoon baking powder\n1/2 teaspoon baking soda\n1/2 taspoon ground cloves\n1 teaspoon cinnamon\n1 teaspoon nutmeg\n6 tablespoons butter or shortening\n1 cup packed (hs note: dark!) brown sugar\n2 eggs\n3 tablespoons sour cream\n1 cup raspberry or blackberry jam\n1/2 cup chopped toasted walnuts\nFor the quick brown-sugar icing:\n1 1/2 cups (hs note: dark!) brown sugar\n5 tablespoons heavy cream\n2 teaspoons butter\n1/8 teaspoon salt\n1/2 teaspoon vanilla",
    url: "http://www.101cookbooks.com/archives/000025.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/.jpg",
    cookTime: "",
    recipeYield: "Makes one 7-inch cake.",
    datePublished: "2003-08-30",
    prepTime: "",
    description:
      "A moist and delicious jam cake recipe with berry undertones and sugary crispness from the brown sugar icing. A favorite.",
  },
  {
    name: "Lemon Anise Slush",
    ingredients:
      "1/2 cup fresh lemon juice, plus more to taste\n1/3 cup sugar or honey, plus more to taste\n3/4 teaspoon anise seeds\n1 cup water or yogurt (vodka or pilsner for adult version)\nice cubes, to fill blender\nwater\n2 tablespoons limoncello, optional but excellent!",
    url: "http://www.101cookbooks.com/archives/lemon-anise-slush-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/lemon_anise_slushy_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4-6.",
    datePublished: "2011-07-12",
    prepTime: "PT5M",
    description:
      "This lemon anise slush is one way I use up the fresh lemon juice I have leftover from all those lemons I zest. Adapted from a recipe in a 2004 issue of Gourmet magazine.",
  },
  {
    name: "Maison du Miel's Heather Honey Ice Cream Recipe",
    ingredients:
      "2 plump, moist vanilla beans\n2 cups heavy cream\n1 cup whole milk\n1/2 cup heather honey (or substitute another aromatic honey such as chestnut or eucalyptus)",
    url: "http://www.101cookbooks.com/archives/000139.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/honeyicecream.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-01-27",
    prepTime: "",
    description:
      "This honey ice cream recipe makes a creamy bowl of goodness that tastes as good as it looks. Four ingredients; plump vanilla beans, heavy cream, whole milk, and honey. That's it.\n",
  },
  {
    name: "Mini Buttermilk Berry Milkshake Recipe",
    ingredients:
      "3 big scoops of top shelf vanilla ice cream\n1/3c.-1/2c. buttermilk\nA cup or so of berries\nA splash of Creme de Cassis",
    url: "http://www.101cookbooks.com/archives/000147.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/milkshake_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes enough for about 4-6, depending on serving glass size.",
    datePublished: "2005-02-26",
    prepTime: "",
    description:
      "A tasty, no-fuss dessert - these might be the best tasting milkshakes ever.",
  },
  {
    name: "Cherry-Almond Gratin Recipe",
    ingredients:
      "2 pounds fresh cherries, rinsed, stemmed, and pitted\n1 tablespoon kirsch (cherry eau-de-vie)\n2 tablespoons sugar\nThe Almond Cream:\n1 cup finely ground almonds\n8 tablespoons unsalted butter, softened\n2 large eggs\n2 tablespoons heavy cream\n1 cup confectioners' sugar\nSeveral drops of kirsch (optional)\nSeveral drops of almond extract\nConfectioners' sugar for dusting the gratin\n10 1/2-inch round porcelain baking dish",
    url: "http://www.101cookbooks.com/archives/000167.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cherry_gratin_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-05-14",
    prepTime: "",
    description:
      "The flavor in this gratin recipe stops time. The almond top melds perfectly with the sweet spiked juice of the cherries. It is a perfect recipe to welcome in cherry season.",
  },
  {
    name: "Broiled Stone Fruit with Sweet Cream ",
    ingredients:
      "3 to 4 cups of seasonal stone fruit - I like to use cherries early in the summer, and move onto peaches, nectarines, plums, and berries as the season progresses. You can use a single type of fruit or play around with different combinations Try punctuating peaches with a sprinkling of raspberries and a splash of creme de framboise. You will need to pit your fruit, and peel it in the case of fuzzy peaches or apricots. Cut the fruit into bite-sized pieces.\n1 cup organic heavy whipping cream, well chilled\n2 egg yolks\n3 T. maple sugar\nA splash of fruit liqueur (for example: if I am using peachs, I add peach brandy)\nPreheat the oven to 400\u02daF.",
    url: "http://www.101cookbooks.com/archives/000178.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/broiledfruit.jpg",
    cookTime: "",
    recipeYield: "Makes 6 individual servings, or a dozen or so mini servings.",
    datePublished: "2005-06-29",
    prepTime: "",
    description:
      "A great way to use up stone fruits. Simple, fast, and decadent using just five ingredients - cream, egg yolks, maple sugar, seasonal stone fruit, and a splash of liquer.",
  },
  {
    name: "Tip Top Melon Sherbet Recipe",
    ingredients:
      "1 pound of juicy, extra-ripe, orange-fleshed melon\n1/4 cup mild flavored honey (needs to be fluid, and you might use a bit less depending on the sweetness of the melon)\n1/2 cup organic whole milk\ngenerous pinch of salt",
    url: "http://www.101cookbooks.com/archives/000365.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/tiptopmelon1.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-08-29",
    prepTime: "",
    description:
      "This melon sherbet recipe is all-natural, and refreshing. The addition of honey gives it a richness and depth of flavor that you don't normally get when you use refined white sugar.",
  },
  {
    name: "Peppermint Semifreddo",
    ingredients:
      "1/2 cup peppermint candies (divided), I like the vintage looking ones, and buy the ones made with natural dyes when I can find them.\n1 1/2 cups heavy cream, chilled\n3 large organic eggs, separated\n1/2 cup granulated sugar (divided)\n1/3 cup peppermint liquor",
    url: "http://www.101cookbooks.com/archives/000902.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/peppermintsemifreddorecipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-12-11",
    prepTime: "",
    description:
      "Served in shot glasses this peppermint semifreddo recipe makes a fluffy, dreamy, cloud-like, winter wonderland dessert.",
  },
  {
    name: "Liquid Nitrogen Ice Cream Recipe",
    ingredients:
      "4 cups whole organic milk\n1 vanilla bean, split\n1 cup sugar\n3 tablespoons plus 2 teaspoons cornstarch\n1 teaspoon vanilla extract",
    url: "http://www.101cookbooks.com/archives/001366.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/liquid_nitrogen_icecream_recipe2.jpg",
    cookTime: "",
    recipeYield: "Serves 6.",
    datePublished: "2006-03-07",
    prepTime: "",
    description:
      "A liquid nitrogen ice cream recipe - it uses a vanilla base, and makes a wonderfully creamy ice cream.",
  },
  {
    name: "Brazil Nut Butter Cups Recipe",
    ingredients:
      "1 1/2 cups Brazil nuts, loosely chopped\n1 teaspoon macadamia nut oil (optional)\n2/3 cup organic powdered sugar (I use Wholesome Sweeteners brand)\n~1/2 teaspoon finely ground sea salt\na couple pinches of chile powder (opt)\n1 9.7-ounce bar of Scharffen Berger bittersweet chocolate, finely chopped\nSpecial equipment: chocolate molds, piping bag.",
    url: "http://www.101cookbooks.com/archives/001371.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/brazilnutbuttercups1.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2006-03-18",
    prepTime: "",
    description:
      "A twist on the traditional peanut butter cup. It uses all-natural ingredients and instead of peanut butterthe chocolate shell envelopes Brazil nut butter.",
  },
  {
    name: "Champagne Summer Shortcake Recipe",
    ingredients:
      "Shortcakes:\n2 cups flour (all-purpose, whole wheat pastry, or white whole wheat)\n3/4 teaspoon fine grain sea salt\n1 tablespoon baking powder\n1 stick of organic, unsalted butter, cut into 1/4-inch chunks\n1/4 cup granulated sugar\na scant 1 cup organic milk\n1 egg white\nA bit of coarse sea salt\nHoney-champagne syrup:\n1/3 cup honey\n1/3 cup granulated sugar\n1/3 cup champagne (alternately, sparkling water or just water)\nSummer fruit:\n- I used a mix of tiny black mission figs, black pluots, and yellow nectarines. Sliced into tiny wedges. Figure on about 1/2 cup of fruit per shortcake.\na pint of top notch vanilla ice cream (I used Laloo's goat milk ice cream)",
    url: "http://www.101cookbooks.com/archives/001481.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/shortcake_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes about 12 medium-sized shortcakes.",
    datePublished: "2006-08-18",
    prepTime: "",
    description:
      "A fantastic summer shortcake recipe crowned with perfect little gems of summer fruit, glistening with a honey-and-champagne syrupy glaze.",
  },
  {
    name: "Vanilla Frozen Yogurt Recipe",
    ingredients:
      "3 cups (720g) strained yogurt (see below) or Greek-style yogurt\n3/4 cup (150g) sugar\n1 teaspoon vanilla extract (optional)",
    url: "http://www.101cookbooks.com/archives/a-frozen-yogurt-recipe-to-rival-pinkberrys-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/vanillafrozenyogurtrecipe.jpg",
    cookTime: "",
    recipeYield: "Makes about 1 quart.",
    datePublished: "2007-05-03",
    prepTime: "",
    description:
      "An easy wonderfully tangy, not-too-sweet, creamy white cloud of perfect frozen yogurt deliciousness. ",
  },
  {
    name: "Tapioca Pudding Recipe",
    ingredients:
      "3 cups organic milk, divided\n1/3 cup small pearl tapioca\n2 extra-large egg yolks, lightly beaten\n1/4 teaspoon fine-grain sea salt\n1/3 cup sugar\n1 vanilla bean, split  along the length (or 1 teaspoon vanilla extract)",
    url: "http://www.101cookbooks.com/archives/tapioca-pudding-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/tapiocapuddingrecipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2007-11-04",
    prepTime: "",
    description:
      "Ultimate tapioca - a creamy, classic, delicious, vanilla-spiked tapioca pudding recipe.",
  },
  {
    name: "Macaroon Cherry Tart Recipe",
    ingredients:
      "1/2 pound cherries, washed\n1 1/2 cups white whole wheat flour (regular apf flour will work)\n2 3/4 cup unsweetened finely shredded coconut (divided)\n1 1/4 cup raw cane (or brown) sugar, lightly packed (divided)\nscant 1/2 teaspoon fine grain sea salt\n10 tablespoons unsalted butter, melted\n4 large egg whites",
    url: "http://www.101cookbooks.com/archives/macaroon-cherry-tart-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/macaroon_cherry_tart.jpg",
    cookTime: "",
    recipeYield: "Makes about 48 petite bites.",
    datePublished: "2008-05-20",
    prepTime: "",
    description:
      "My go-to cherry tart recipe - unfussy, and quick to make with a moist, coconut macarooned top.\n",
  },
  {
    name: "Salt-kissed Buttermilk Cake Recipe",
    ingredients:
      "2 1/2 cups whole wheat pastry flour\n1 tablespoon baking powder\n1/2 cup fine-grain natural cane sugar (or brown sugar)\n1/2 teaspoon salt\n2 eggs\n1 cup buttermilk\n1/4 cup butter, melted and cooled a bit\nzest of 2 lemons\n1 cup of raspberries (more if you like)\n3 tablespoons large grain raw sugar\n1 teaspoon large grain salt",
    url: "http://www.101cookbooks.com/archives/saltkissed-buttermilk-cake-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/buttermilk_cake_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves about 12.",
    datePublished: "2008-07-08",
    prepTime: "",
    description:
      "A favorite buttermilk cake recipe, I love the way smashed berries bleed into the sugar-crusted top of this cake. Swap in whatever fruit is in season.",
  },
  {
    name: "Caramel Apple Recipe",
    ingredients:
      "6 - 8 small apples, unwaxed, cold\n1 cup heavy cream\n1/2 teaspoon sea salt\n1 cup honey\nSpecial equipment: candy thermometer, and lollipop sticks",
    url: "http://www.101cookbooks.com/archives/caramel-apples-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/caramel_apple_recipe_08.jpg",
    cookTime: "",
    recipeYield: "Makes 6 - 8 caramel apples.",
    datePublished: "2008-10-15",
    prepTime: "",
    description:
      "A caramel apple recipe made from apples, honey, cream, and salt - all-natural, with no processed corn syrup or other funky ingredients.",
  },
  {
    name: "Peanut Butter Krispy Treats",
    ingredients:
      "3/4 cup unsalted peanut butter\n3/4 cup maple syrup\n1 teaspoon fine-grain sea salt\u2028\n2 1/2 teaspoons agar agar flakes (available at a health foods stores)\u2028\n4 cups unsweetened (or lightly sweetened) crisp brown rice cereal\u2028\u2028\n3/4 cup pistachios, toasted and chopped",
    url: "http://www.101cookbooks.com/archives/peanut-butter-krispy-treats-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/pb_rice_crispy_treats.jpg",
    cookTime: "PT5M",
    recipeYield: "",
    datePublished: "2009-09-06",
    prepTime: "PT10M",
    description:
      "A twist on the classic, I use crisp brown rice cereal slathered in a decadent peanut butter maple syrup sludge. This version of treats has bits of chopped, toasted pistachios throughout - also vegan (no marshmallows) and gluten-free.",
  },
  {
    name: "Sparkling Cranberries",
    ingredients:
      "2 cups cranberries, picked over\n2 cups water\n2 cups sugar (see head notes)\nMore sugar for coating: I do a mix of medium-grained organic sugar for the first coating, and then a second toss with regular granulated white sugar. You don't want a huge grain for that first toss, just something larger than standard sugar, smaller than most turbinado sugars. You can sort of see the different grain sizes in the third photo in the main write-up.",
    url: "http://www.101cookbooks.com/archives/sparkling-cranberries-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/sparkling_cranberries.jpg",
    cookTime: "PT60M",
    recipeYield: "",
    datePublished: "2009-12-14",
    prepTime: "PT5M",
    description:
      "Around the holidays these pretty, sparkling sugared cranberries are perfect. Tart and sweet, they glint and wink in the surrounding holiday lights, and lend a striking dash of red to the table.",
  },
  {
    name: "Brown Butter Spice Bread",
    ingredients:
      "1/2 cup / 4 oz / 115g unsalted butter, plus more for the pan\n1 tablespoon toasted hazelnut oil - or almond oil, or more melted butter)\n1 1/2 cups / 6 oz / 170 g whole wheat pastry flour, plus more for the pan\n1 teaspoon baking soda\n3/4 teaspoon ground cinnamon\n1 teaspoon garam masala\n1/2 teaspoon fine grain sea salt\n1 cup / 5 oz / 140 g fine grain natural cane sugar or muscovado sugar, sifted plus another 1 1/2 tablespoons for topping\n2 large eggs\n1/2 cup / 4.5 oz / 130 g  well-pureed roasted winter squash*\n1/4 cup / 60 ml milk\n1/3 cup / 1 oz / 30g lightly toasted sliced almonds",
    url: "http://www.101cookbooks.com/archives/brown-butter-spice-cake-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/brown_butter_spice_cake_recipe.jpg",
    cookTime: "PT60M",
    recipeYield: "",
    datePublished: "2011-01-17",
    prepTime: "PT25M",
    description:
      "A cardamom-kissed, brown sugar crusted, squash-battered spice cake. Made with brown butter and a bit of leftover winter squash.",
  },
  {
    name: "Lillet Buttermilk Shake",
    ingredients:
      "2 cups / 1 pint vanilla ice cream (or, creme fraiche ice cream)\n1/3 cup / 80 ml Lillet\n1/3 cup / 80 ml buttermilk\nbasil flowers, optional",
    url: "http://www.101cookbooks.com/archives/lillet-buttermilk-shakes-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/lillet_buttermilk_shakes.jpg",
    cookTime: "",
    recipeYield: "Makes a bunch of little shakes, or 4 larger shakes.",
    datePublished: "2011-08-21",
    prepTime: "PT5M",
    description:
      "Lillet-spiked buttermilk shakes. Just a quick grown-up twist on the classic vanilla milkshake.",
  },
  {
    name: "Ginger Grapefruit Curd",
    ingredients:
      "1 cup / 240 ml freshly squeezed grapefruit juice, strained\n5 tablespoons unsalted butter, room temp / soft\n1/2 cup / 3.5 oz / 100 g granulated sugar OR 1/4 cup / 60 ml honey\n2 large egg yolks, preferably room temp\n2 large eggs , preferably room temp\n1/8 teaspoon fine grain sea salt\n1 tablespoon freshly squeezed lemon juice, strained\n1 tablespoon fresh ginger juice (made by pressing grated ginger through a strainer)\n",
    url: "http://www.101cookbooks.com/archives/ginger-grapefruit-curd-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/grapefruit_curd_recipe.jpg",
    cookTime: "PT10M",
    recipeYield: "Makes about 2 cups.",
    datePublished: "2012-03-01",
    prepTime: "PT5M",
    description:
      "A vibrant ginger grapefruit curd recipe &amp; scans from my Marrakesh photographs.",
  },
  {
    name: "Rhubarb Rosewater Syrup",
    ingredients:
      "4 large / 500 g / 1 pound  rhubarb stalks, chopped\n2 cups / 400 g granulated sugar\n2 cups / 475 ml water\n2-3 tablespoons freshly squeezed lime juice, or to taste\nscant 2 teaspoons rosewater, or to taste\nrose petals, optional",
    url: "http://www.101cookbooks.com/archives/rhubarb-rosewater-syrup-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/rhubarb_rosewater_syrup_recipe.jpg",
    cookTime: "PT30M",
    recipeYield: "Makes one medium jar of syrup.",
    datePublished: "2012-05-03",
    prepTime: "PT45M",
    description:
      "A beautiful ruby-hued rhubarb rosewater syrup. Perfect on (or in) everything from yogurt, spritzers, waffles, or oatmeal.",
  },
  {
    name: "Sprouted Kitchen Fresh Mint Chip Frozen Yogurt",
    ingredients:
      "1 cup fresh mint leaves\n1 cup / 240 ml heavy cream\n1/2 cup plus 2 tablespoons / 130 ml brown rice syrup\nScant 1/2 teaspoon peppermint extract\n2 cups / 480 ml whole-milk Greek yogurt\n2 ounces good quality dark chocolate, finely chopped",
    url: "http://www.101cookbooks.com/archives/fresh-mint-chip-frozen-yogurt-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/mint_frozen_yogurt_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2012-08-01",
    prepTime: "PT60M",
    description:
      "A luscious fresh mint frozen yogurt recipe from the soon-to-be-released(!) Sprouted Kitchen cookbook.",
  },
  {
    name: "Gingerbread Cookies Recipe",
    ingredients:
      "4  cups white whole wheat flour\n3/4   teaspoon baking soda\n1  teaspoon salt\n4  teaspoons ground ginger\n1 teaspoon ground cloves\n1 tablespoon ground cinnamon\n1/2 teaspoon finely ground black pepper\n11 tablespoons unsalted butter, room temperature\n2/3 cup dark natural cane sugar (i.e. muscavado), or alternately use a dark brown sugar, packed\n3 large eggs\n2/3 cup organic unsulfured molasses (blackstrap)\nlarge grain sugar (turbinado) for decoration\npopsicle sticks (optional)",
    url: "http://www.101cookbooks.com/archives/001536.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/gingerbreadcookiesrecipe.jpg",
    cookTime: "",
    recipeYield: "Makes about 3 dozen four-inch gingerbread men.",
    datePublished: "2006-12-07",
    prepTime: "",
    description:
      "A delicious, traditional tasting, yet healthier gingerbread cookie recipe that includes white whole wheat flour, more assertive spices, and less refined sweeteners. You wont miss the traditional version. They are very cute on popsicle sticks.",
  },
  {
    name: "Hearst Castle Shortbread Cookie Recipe",
    ingredients:
      "4 cups all-purpose flour\n1/2 teaspoon baking powder\n3/4 teaspoon fine grain sea salt\n1 pound unsalted butter\n1 cup powdered sugar\n1/2 teaspoon vanilla extract\n1 vanilla bean (optional)",
    url: "http://www.101cookbooks.com/archives/hearst-castle-shortbread-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/shortbreadcookierecipe_07.jpg",
    cookTime: "",
    recipeYield:
      "Makes 3 or 4 dozen tiny cookies - more or less depending on the size of your cutters.",
    datePublished: "2007-07-25",
    prepTime: "",
    description:
      "A beautiful, buttery shortbread cookie recipe straight from the Hearst Castle kitchen.",
  },
  {
    name: "Swedish Rye Cookie Recipe",
    ingredients:
      "1 cup rye flour\n1 cup whole wheat pastry flour\n1/2 teaspoon fine grain sea salt\n1/2 cup cream cheese, room temperature\n1/2 cup unsalted butter, room temperature\n1/2 cup fine grain natural cane sugar, sifted\nlarge grain sugar (for sprinkling)\norganic powdered sugar (for snow)",
    url: "http://www.101cookbooks.com/archives/swedish-rye-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/swedish_rye_cookie_recipe.jpg",
    cookTime: "",
    recipeYield:
      "Makes dozens of tiny cookies, less if you are cutting them larger.",
    datePublished: "2008-12-11",
    prepTime: "",
    description:
      "Powder-kissed and pretty, these Swedish Rye cookies are perfect for holiday cookie enthusiasts who are after a not-too-sweet, shortbread-style butter cookie.",
  },
  {
    name: "Marathon Cookies",
    ingredients:
      "2 cups rolled oats (not instant oats)\n1 cup whole wheat pastry flour\n1 tablespoon aniseed, crushed in mortar and pestle (or spice grinder)\n1 teaspoon baking powder\n1 teaspoon baking soda\nzest of one lemon\n1/2 teaspoon fine grain sea salt\none 15-ounce can white kidney, great northern, or navy beans, rinsed &amp; drained\n1/4 cup olive oil\n1 cup natural cane sugar (or brown sugar)\n1 large egg\n1 teaspoon vanilla extract\n1/3 cup chopped dates\n1/3 cup sesame seeds",
    url: "http://www.101cookbooks.com/archives/marathon-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/marathon_cookies.jpg",
    cookTime: "PT25M",
    recipeYield:
      "Makes about 1 1/2 dozen cookies. I'm not 100% sure about the yield here because I tested a variety of cookies sizes.",
    datePublished: "2009-07-29",
    prepTime: "PT10M",
    description:
      "I made these cookies for Wayne to eat when he finished the San Francisco Marathon. The batter is made with pureed white beans, lots of oats, and whole wheat flour. The resulting cookies are sesame coated and flavored with aniseed, lemon zest, olive oil and chopped dates. They are beautifully tender, licorice-scented, with a bit of crunch from the sesame seed coating.",
  },
  {
    name: "Biscotti al Pistacchio Recipe (Pistachio Cookies)",
    ingredients:
      "4 1/3 cups / 500 g raw pistachios\n1 cup / 200 g granulated sugar\n1 tablespoon honey\n1 teaspoon vanilla extract\n1 1/2 tablespoons freshly grated lemon zest\nscant 1/2 cup egg whites / 3 1/2 oz - from 3 large eggs\n1 cup confectioners' sugar, for coating cookies",
    url: "http://www.101cookbooks.com/archives/biscotti-al-pistacchio-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/pistachio_biscotti_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2010-10-20",
    prepTime: "",
    description:
      "Charming little bite-sized, powder-coated pistachio cookies inspired by a visit to Mona Talbott's kitchen and the Rome Sustainable Food Project at the American Academy in Rome.",
  },
  {
    name: "Peppermint Bark Chocolate Chip Cookie Recipe",
    ingredients:
      "3 1/2 cups whole wheat pastry flour (or unbleached all-purpose flour)\n1 teaspoon baking soda\n1 teaspoon aluminum-free baking powder\n3/4 teaspoon fine-grain sea salt\n1 cup unsalted butter, at room temperature\n2 cups sugar\n3 large eggs\n1 tablespoon vanilla extract\n2 cups peppermint bark, roughly chopped\n1/2 cup chocolate chips or shaved chocolate",
    url: "http://www.101cookbooks.com/archives/000015.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/peppermintbarkcookies.jpg",
    cookTime: "",
    recipeYield: "Makes 2 to 3 dozen medium-large cookies.",
    datePublished: "2003-12-08",
    prepTime: "",
    description:
      "A great peppermint bark cookie recipe using one of my favorite cookie doughs and peppered with a generous amount of chopped peppermint bark.",
  },
  {
    name: "Maya's Day of the Dead Cookie Recipe",
    ingredients:
      "Vanilla dough:\n2 cups all-purpose flour\n1/2 teaspoon baking powder\n1/4 teaspoon salt\n8 tablespoons (1 stick) unsalted butter, softened\n1 cup sugar\n1 egg\n1 1/2 teaspoons vanilla extract\nChocolate dough:\n1 cup all-purpose flour\n1/2 cup unsweetened cocoa powder, Dutch process\n1/2 teaspoon baking soda\n1/4 teaspoon baking powder\n1/8 teaspoon salt\n8 tablespoons (1 stick) unsalted butter, softened\n1/2 cup (packed) brown sugar, lump free\n1/2 cup granulated sugar\n1 egg\n1 teaspoon vanilla extract\nEquipment:\nBaking sheets lined with parchment paper",
    url: "http://www.101cookbooks.com/archives/000123.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2004-10-26",
    prepTime: "",
    description:
      "Fun Alice Medrich Day of the Dead skull cookie recipe made from vanilla and chocolate dough.",
  },
  {
    name: "Chocolate Peppermint Bark Cookie Recipe",
    ingredients:
      "3 cups whole wheat pastry flour (or unbleached all-purpose flour)\n1 cup non-alkalized cocoa powder\n1 teaspoon baking soda\n1 teaspoon aluminum-free baking powder\n3/4 teaspoon fine-grain sea salt\n1 cup unsalted butter, at room temperature\n2 cups sugar\n3 large eggs\n1 tablespoon vanilla extract\n2 cups peppermint bark, roughly chopped\n1/2 cup miniature chocolate chips (optional)",
    url: "http://www.101cookbooks.com/archives/000133.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/chocpeppermintbarkcookies.jpg",
    cookTime: "",
    recipeYield: "Makes 2 to 3 dozen medium-large cookies.",
    datePublished: "2004-12-17",
    prepTime: "",
    description:
      "A chocolate peppermint bark cookie recipe featuring a rich chocolate dough punctuated by generous amount of chopped peppermint bark and mini chocolate chips.",
  },
  {
    name: "Dates filled with Chocolate Cream and Almonds",
    ingredients:
      "48 (10 ounces) pitted dates\n1/4 cup (2 ounces) heavy whipping cream\n4 ounces bittersweet chocolate, finely chopped\n48 (2 ounces) whole blanched almonds",
    url: "http://www.101cookbooks.com/archives/000144.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/stuffed_date_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-02-14",
    prepTime: "",
    description:
      "Stuffed dates are rich, indulgent, and delicious.  I strongly suggest trying this recipe the next time you are looking for a nice, simple dessert to top off a nicer than average meal. ",
  },
  {
    name: "Chocolate Oblivion Truffle Torte Recipe",
    ingredients:
      "bittersweet chocolate: 1 pound or 5 1/3 (3-ounce) bars or 454 grams\nunsalted butter: 1 cup or 1/2 pound or 227 grams\n6 large eggs: 1 1/4 scant cups or 10.5 ounces or 300 grams (weighed without shells)",
    url: "http://www.101cookbooks.com/archives/000287.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/best_chocolate_tart_recipe2.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-08-10",
    prepTime: "",
    description:
      "Rose Beranbaum's Chocolate Oblivion Truffle Torte Recipe creates the best chocolate cake I've ever tasted.",
  },
  {
    name: "Amaretto-Spiked Vegan Chocolate Mousse Recipe",
    ingredients:
      "1/2 cup organic chocolate soy milk (for this recipe I like to use Vitasoy Rich Chocolate Soy Milk)\n9 or 10 ounce bag of semisweet vegan chocolate chips (I've had good success with Tropical Source or Sunspire Brand all-natural brands, NOT carob chips)\n12 ounces silken tofu\n1/4 cup Amaretto or almond-flavored liquor\n1/4 teaspoon natural pure almond extract (I use the Flavorganics Almond Extract for this recipe)",
    url: "http://www.101cookbooks.com/archives/000310.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/chocmousse2.jpg",
    cookTime: "",
    recipeYield: "Makes 6 decadent servings.",
    datePublished: "2005-08-17",
    prepTime: "",
    description:
      "Simple-yet-decadent this dairy-free chocolate mousse recipe wins over non-vegans and vegans alike. ",
  },
  {
    name: "Heather's Toasted Pecan Toffee Recipe",
    ingredients:
      "1  cup butter, cut into chunks\n1 1/2 cups granulated sugar\n3 tablespoons corn syrup\n3 tablespoons water\n2 cups well-chopped pecans, toasted (divided)\n1/2 pound (8 ounces) chocolate, cut into chunks - milk, semi, or bittersweet (your choice)",
    url: "http://www.101cookbooks.com/archives/000893.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/toffee_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes a big plate of toffee.",
    datePublished: "2005-12-08",
    prepTime: "",
    description:
      "My sister Heather teaches me her favorite toffee recipe. It is peppered with toasted pecans and slathered with a thin layer of chocolate on each side. ",
  },
  {
    name: "Valentine's Chocolate Fondue Recipe",
    ingredients:
      "1 pound of premium semisweet or bittersweet chocolate, well chopped\n1 1/2 cups of organic heavy cream",
    url: "http://www.101cookbooks.com/archives/001246.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/chocolate_fondue_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2006-02-10",
    prepTime: "",
    description:
      "Silky, dark chocolate fondue recipe. Simple with just two ingredients and lots of ideas on what makes the best dunkables.",
  },
  {
    name: "Coconut Chocolate Pudding Recipe",
    ingredients:
      "1 14-ounce can of coconut milk (lite is fine), divided\n3 tablespoons sugar\nscant 1/4 teaspoon salt\n1/4 cup arrowroot powder, sifted\n1 teaspoon raz el hanout spice blend or curry powder, (optional)\n3 tablespoons alkalized dutch-cocoa powder, sifted\n1 3.5-ounce bar semi-sweet chocolate, chopped\n1 teaspoons vanilla extract \n1/4 cup coconut flakes, toasted in a dry skillet",
    url: "http://www.101cookbooks.com/archives/coconut-chocolate-pudding-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/chocolatepuddingrecipe_07.jpg",
    cookTime: "",
    recipeYield: "Serves four.",
    datePublished: "2007-09-04",
    prepTime: "",
    description:
      "A deeply dark and impossibly decadent coconut chocolate pudding recipe. Creamy coconut milk base infused it with a whisper of warming spices.",
  },
  {
    name: "Minty Chocolate Christmas Cookie Recipe",
    ingredients:
      "1 cup unsalted butter, at room temperature\n1 cup powdered sugar\n1 teaspoon pure vanilla extract\n1 cup nonalkalized cocoa powder\n1 egg white\n3/4 teaspoon fine-grain sea salt\n1 1/2 cups whole-wheat pastry flour\nPeppermint cream filling:\n2+ cups powdered sugar, sifted\n10 - 15 drops peppermint extract (to taste)\n1/4 cup half and half (or water if you are going to keep the cookies around unrefrigerated for a while)",
    url: "http://www.101cookbooks.com/archives/minty-chocolate-christmas-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/christmascookierecipe_07.jpg",
    cookTime: "",
    recipeYield: "Makes about 3 dozen 1 1/2-inch sandwich cookies.",
    datePublished: "2007-12-11",
    prepTime: "",
    description:
      "This cookie combines thin chocolate wafers with a thick, creamy peppermint filling. A wonderful holiday or Christmas cookie.",
  },
  {
    name: "Heavenly Pie Recipe",
    ingredients:
      "2 cups well-crushed graham crackers\n1/3 cup melted butter\n2 tablespoons honey\n8 ounces cream cheese, softened\n8 ounces organic silken tofu\n1 large egg\n6 ounces carob or chocolate chips, melted\n1 teaspoon vanilla\nGreek yogurt (sweetened a bit, optional for serving), in place of whipped cream\n ",
    url: "http://www.101cookbooks.com/archives/heavenly-pie-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/heavenly_pie_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes one pie. About 12 servings.",
    datePublished: "2008-05-27",
    prepTime: "",
    description:
      "Imagine a honey-sweetened graham cracker crust filled with a cream cheese chocolate filling. From the book Country Wisdom &amp; Know-How - the recipe calls for equal parts tofu and cream cheese in the filling. This combination creates a decadent, mousse-like texture that's also a breeze to cut into precision slices.",
  },
  {
    name: "Coco Choco Cluster Recipe",
    ingredients:
      "2 1/2 cups finely shredded unsweetened coconut, lightly toasted and cooled\n1/2 cup toasted almonds, cooled and chopped\n7-8 ounces dark chocolate, chopped\n1 tablespoon finely ground espresso beans (optional)\na big grain finishing salt - if you can get your hands on a smoked one, great",
    url: "http://www.101cookbooks.com/archives/coco-choco-clusters-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/coco_choco_cluster_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes 36 clusters.",
    datePublished: "2008-08-10",
    prepTime: "",
    description:
      "Toasted coconut, almonds, ground coffee, and good chocolate dropped into little bite-sized chocolate clusters.",
  },
  {
    name: "Fantasy-ish Fudge Recipe",
    ingredients:
      "1 9.7-ounce bar of good-quality semi-sweet chocolate (62% Scharffen Berger)\n3 cups organic cane sugar\n3/4 cup unsalted butter\n2/3 cup lite coconut milk (regular is fine too)\n7 ounces Ricemellow Cr\u00e8me (or the marshmallow creme of your choice)\n2 teaspoons vanilla extract\n1 cup chopped walnuts (optional)",
    url: "http://www.101cookbooks.com/archives/fantasyish-fudge-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/fantasy_fudge_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes a couple hundred tiny fudge bites.",
    datePublished: "2008-12-09",
    prepTime: "",
    description:
      "My take on the classic fantasy fudge recipe - made with Scharffen Berger chocolate, butter (not margarine) , and organic cane sugar.",
  },
  {
    name: "Bittersweet Chocolate Tart",
    ingredients:
      "Tart Shell:\n1/2 cup + 1 T / 4.5 oz / 130g unsalted butter, room temperature\n1/2 cup / 2.5 oz / 75g natural cane sugar, muscovado,  or brown sugar, sifted\n1/4 teaspoon fine grain sea salt\n1 large egg, room temperature\n1 3/4 cup / 8 oz / 225g whole wheat pastry flour\nFilling:\nscant cup /  225 ml heavy whipping cream\n2 tablespoons milk\n7 ounces / 200g 70% bittersweet chocolate, chopped\n1 large egg, beaten\nflaky sea salt, cocoa powder\nequipment: two 9-inch tart pans (or equivalent). ",
    url: "http://www.101cookbooks.com/archives/bittersweet-chocolate-tart-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/bittersweet_chocolate_tart_recipe_09.jpg",
    cookTime: "PT30M",
    recipeYield: "Serves 8 - 10. ",
    datePublished: "2009-12-30",
    prepTime: "PT120M",
    description:
      "The little black dress of my tart repertoire - bittersweet chocolate with a thin brown sugar crust.  The filling is a dark chocolate ganache, the consistency of thick frosting, set off by the crispness of the crust, finished with a dusting of cocoa powder, and a pinch of sea salt.",
  },
  {
    name: "Chocolate Puddle Cookies",
    ingredients:
      "3 cups / 11 oz / 310 g walnut halves, toasted &amp; cooled\n4 cups / 1 lb / 453 g confectioner's (powdered) sugar\n1/2 cup plus 3 tablespoons / 2 oz / 60 g unsweetened cocoa powder\nscant 1/2 teaspoon fine grain sea salt\n4 large egg whites, room temperature\n1 tablespoon real, good-quality vanilla extract",
    url: "http://www.101cookbooks.com/archives/chocolate-puddle-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/chocolate_puddle_cookies.jpg",
    cookTime: "PT15M",
    recipeYield: "Makes 18 large cookies.",
    datePublished: "2010-02-09",
    prepTime: "PT20M",
    description:
      "I came across a cookie when I visited Portland, it was a crackle-edged puddle of chocolate with a texture that made me think of the collision between a soft meringue and a fudgy brownie. ",
  },
  {
    name: "No Bake Chocolate Cake",
    ingredients:
      "butter, to grease pan\n8 ounces / 225 g 70% chocolate, well chopped\n8 ounces / 225 g heavy cream\n1/2 teaspoon allspice (optional)\n2 teaspoons finely ground espresso (optional)\n1/4 teaspoon fine grain salt\ncocoa powder, to serve",
    url: "http://www.101cookbooks.com/archives/no-bake-chocolate-cake-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/no_bake_chocolate_cake_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 12.",
    datePublished: "2011-07-02",
    prepTime: "PT10M",
    description:
      "A no bake chocolate cake I make when I'm feeling particularly lazy and need a crowd-pleaser of a dessert. Good-quality dark chocolate, cream, and whatever you like to infuse the cream - you're set.",
  },
  {
    name: "Glissade Chocolate Pudding",
    ingredients:
      "2 eggs, brought to room temperature shortly before using*\n6 ounces / 170 g good-quality dark chocolate, finely chopped\n4 tablespoons water\n4 tablespoons fine grain sugar\n4 tablespoons unsalted butter\nfine grain sea salt\nto top: heavy cream, loosely whipped, slightly sweetened (optional)",
    url: "http://www.101cookbooks.com/archives/glissade-chocolate-pudding-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/slippery_chocolate_pudding_recipe.jpg",
    cookTime: "PT5M",
    recipeYield: "",
    datePublished: "2013-03-04",
    prepTime: "PT3M",
    description:
      "A chocolate pudding that is hard to beat. From this day forward, if you come to my house for dinner, and I decide chocolate pudding might be a nice finish to the meal, this is the recipe I'll be using.",
  },
  {
    name: "Art Smith's Sour Cream Waffle Recipe",
    ingredients:
      "1 3/4 cups all-purpose flour\n1 tablespoon sugar\n1 tablespoon baking powder\n1/2 teaspoon salt\n8 tablespoons (1 stick) unsalted butter melted\n1 cup milk\n1/2 cup sour cream\n3 large eggs\nMaple syrup or jam, for serving",
    url: "http://www.101cookbooks.com/archives/000153.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/sourcream_waffle_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-03-24",
    prepTime: "",
    description:
      "Art Smith's sour cream waffle recipe - delicious, light yet structured waffles that cook up golden brown with just the right amount of outside crunch.",
  },
  {
    name: "Power Waffle Recipe",
    ingredients:
      "1 1/2 cups non-fat milk (divided)\n3/4 cup crystallized ginger\n3 tablespoons sugar\n1/2 teaspoon fresh (compressed) yeast\n1 1/4 cups Sir Galahad all-purpose flour\n3/4 cup buckwheat flour\n150 g (5.3 ounces) rolled oats\n1 tablespoon cinnamon\n1/2 teaspoon baking powder\n2 egg whites (heidi note: I ended up using 4)\n1/3 cup melted butter",
    url: "http://www.101cookbooks.com/archives/000164.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/power_waffle_recipe2.jpg",
    cookTime: "",
    recipeYield: "Makes about 6 average-sized waffles.",
    datePublished: "2005-05-07",
    prepTime: "",
    description:
      "A delicious yeast-leavened waffle recipe featuring oats, buckwheat flour, and crystallized ginger. A denser, heartier, more nutritious waffle, they also take longer to cook than a standard waffle, so they might not be the best choice for a waffle bar get-together. ",
  },
  {
    name: "Homemade Yogurt Recipe",
    ingredients:
      "4 cups of fresh, organic 2% milk\n1/3 cup of powdered milk\n1/2 cup organic yogurt (this will be your starter)",
    url: "http://www.101cookbooks.com/archives/000176.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/yogurtrecipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-06-18",
    prepTime: "",
    description:
      "All about making yogurt from scratch - includes Wayne's special homemade yogurt recipe.",
  },
  {
    name: "Whole-Grain Pancake Recipe with Blueberry Maple Syrup",
    ingredients:
      "1 (6-ounce) basket blueberries, rinsed\n1/4 cup natural granulated sugar (evaporated cane sugar)\n1/4 cup real-deal, PURE, maple syrup\n2 tablespoons water\n2 cups white whole wheat flour (or unbleaced all-purpose flour)\n1 teaspoon aluminum-free baking powder\n1/2 teaspoon baking soda\n1/3 cup natural granulated sugar (evaporated cane sugar)\n1/2 teaspoon fine grain sea salt\n2 1/4 cups organic buttermilk\n2 large organic eggs, lightly beaten\n2 tablespoons butter, melted (melt in the pan skillet you are going to use)\nbutter, to serve (and for pan)",
    url: "http://www.101cookbooks.com/archives/001464.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/bestpancakerecipe_07.jpg",
    cookTime: "",
    recipeYield:
      "Makes about 12 large pancakes, or dozens of silver-dollars - enough to feed a small crowd.",
    datePublished: "2006-08-03",
    prepTime: "",
    description:
      "Favorite pancake recipe - tall stacks of golden butter-kissed pancakes with the best tasting blueberry maple syrup.",
  },
  {
    name: "Baked Egg Recipe",
    ingredients:
      "2-3 tablespoons extra virgin olive oil\n3 big pinches ground cumin\n2 big pinches chili flakes\n2 big pinches smoked paprika\n2 big pinches fine sea salt\n1 cup spring (or regular) onion, chopped\n1 clove garlic, chopped\n1 cup cherry tomatoes, halved or quartered\n2 pieces of pita bread, cut into quarters\n6 large organic eggs\nGarnish: finely chopped tomatoes, chile flakes, cilantro (optional)\nSpecial equipment: standard 12 muffin tin",
    url: "http://www.101cookbooks.com/archives/baked-eggs-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/bakedeggrecipe_07.jpg",
    cookTime: "",
    recipeYield: "Makes six egg cups.",
    datePublished: "2007-05-18",
    prepTime: "",
    description:
      "Baked eggs in edible cups with cherry tomatoes, garlic, olive oil and  lots of vibrant spices.",
  },
  {
    name: "Skinny Omelette Recipe",
    ingredients:
      "2 large (preferably organic) eggs\na tiny pinch of fine grain sea salt\na few tablespoons of chopped chives\na dollop of pesto\na bit of goat cheese or feta\na small handful of mixed salad greens",
    url: "http://www.101cookbooks.com/archives/skinny-omelette-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/omeletterecipe.jpg",
    cookTime: "",
    recipeYield: "Serves one or two.",
    datePublished: "2007-06-13",
    prepTime: "",
    description:
      "Eggs cooked crepe thin and stuffed. A delicious and lighter alternative to heavy, cheese-stuffed omelette recipes - great for lunch and brunch.",
  },
  {
    name: "Lori's Skillet Smashed Potato Recipe",
    ingredients:
      "one small bag of small potatoes (yukon golds, fingerlings, or something similar)\nsalt &amp; pepper\n1 - 2 tablespoons olive oil",
    url: "http://www.101cookbooks.com/archives/loris-skillet-smashed-potatoes-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/smashedpotatorecipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2007-11-29",
    prepTime: "",
    description:
      "This skillet smashed potato recipe make delicious, golden-crusted potatoes. With a bit of prep you can boil them off (pre-cook) the night before. They come together in just a few minutes just as you are ready to serve the rest of your breakfast or brunch.",
  },
  {
    name: "Curried Egg Salad Recipe",
    ingredients:
      "5 good quality eggs\n1 1/2 teaspoons curry powder (your favorite)\n3 tablespoons plain yogurt \n2 big pinches of salt\n1/2 small onion, chopped\n1/2 medium apple, chopped\n1/4 cup pecans, toasted and chopped\n1 small bunch of chives, minced",
    url: "http://www.101cookbooks.com/archives/curried-egg-salad-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/egg_salad_recipe_08.jpg",
    cookTime: "",
    recipeYield: "Serves 3-4",
    datePublished: "2008-02-04",
    prepTime: "",
    description:
      "A variation on my favorite egg salad recipe, this version uses plain yogurt in place of mayo and incorporates curry powder, chopped apples, toasted pecans, and minced chives. ",
  },
  {
    name: "Big Sur Power Bar Recipe",
    ingredients:
      "1 tablespoon coconut oil (or regular butter)\n1 cup pecans, chopped\n1 cup slivered almonds\n2/3 cup (unsweetened) shredded coconut\n1 1/4 cups rolled oats\n1 1/2 cups unsweetened crisp brown rice cereal\n1 cup brown rice syrup\n1/4 cup natural cane sugar\n1/2 teaspoon fine-grain sea salt\n2 tablespoons ground espresso beans\n1 teaspoon pure vanilla extract",
    url: "http://www.101cookbooks.com/archives/video-big-sur-power-bars-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cooking_video_big_sur.jpg",
    cookTime: "",
    recipeYield: "Makes 16 to 24 bars.",
    datePublished: "2008-01-31",
    prepTime: "",
    description:
      "A homemade powerbar recipe packed with lots of toasted nuts and coconut, crisped rice and ground espresso beans. Video how-to as well as written instructions.",
  },
  {
    name: "Poppy Seed Pancake Recipe",
    ingredients:
      "1- 2 oranges, peeled, segments torn into small pieces\n1 lemon, peeled, segments torn into small pieces\n1/3 cup agave nectar\n2 cups white whole wheat flour (or unbleached a-p flour)\n1 teaspoon aluminum-free baking powder\n1/2 teaspoon baking soda\n1/2 teaspoon fine grain sea salt\n1/3 cup poppy seeds\n1/2 cup sunflower seeds, toasted until deeply golden\n2 1/4 cups organic buttermilk\n2 large organic eggs, lightly beaten\n2 tablespoons butter, melted \nbutter, to serve (and for pan)",
    url: "http://www.101cookbooks.com/archives/poppy-seed-pancakes-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/poppyseed_pancake_recipe.jpg",
    cookTime: "",
    recipeYield:
      "Makes about 12 large pancakes, or dozens of silver-dollar pancakes - enough to feed a small crowd.",
    datePublished: "2008-02-18",
    prepTime: "",
    description:
      "My go-to poppy seed pancake recipe. Made with buttermillk, a generous amount of poppy seeds, toasted sunflower seeds. Drizzled with an simple-to-make, chunky citrus syrup.",
  },
  {
    name: "Breakfast Polenta Recipe",
    ingredients:
      "4 cups water \n1/2 teaspoon salt\n1 cup coarse polenta (not quick cooking)\n1/2 cup sliced almonds, toasted\n1/2 cup dried fruit, chopped\nhoney\ncream",
    url: "http://www.101cookbooks.com/archives/breakfast-polenta-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/breakfast_polenta_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves about 4",
    datePublished: "2008-02-25",
    prepTime: "",
    description:
      "This breakfast polenta recipe is creamy, comforting and receptive to many add-in flavors and textures. For this version I served small bowls of fluffy yellow polenta topped with toasted almonds, jewel-colored dried fruits, and a drizzle of cream and honey.",
  },
  {
    name: "Coconut Macaroon Pancake Recipe",
    ingredients:
      "1  14-ounce can of coconut milk\n2 tablespoons honey (or agave nectar)\n1 /4 cup whole wheat pastry flour (or all-purpose or regular pastry flour)\n3 cups unsweetened dried shredded coconut\nscant 1/2 teaspoon fine grain sea salt\n2 teaspoons baking powder\n3 large eggs. whisked in a medium bowl\n1/4 cup natural cane sugar or brown sugar",
    url: "http://www.101cookbooks.com/archives/coconut-macaroon-pancakes-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/macaroon_pancake_recipe.jpg",
    cookTime: "",
    recipeYield:
      "Makes dozens of silver dollar sized pancakes, or a dozen or so larger ones.",
    datePublished: "2008-04-10",
    prepTime: "",
    description:
      "A uniquely delicious pancake recipe. If you can imagine coconut macaroons in pancake form -  moist, golden, coconut-packed, with just a hint of sweetness - that's what you'll get.",
  },
  {
    name: "Strawberry Panzanella Recipe",
    ingredients:
      "1/4 cup unsalted butter\n1/4 cup  + 2 tablespoons natural cane sugar OR brown sugar*\ncouple pinches of fine grain salt\n1 pound loaf of hearty, substantial day-old bread, cut into 1-inch cubes\n1+ pint basket of ripe strawberries, trimmed and cut into matchsticks\na 7 or 8 ounce container of plain (Greek) yogurt\npoppy seeds for garnish",
    url: "http://www.101cookbooks.com/archives/strawberry-panzanella-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/strawberry_panzanella_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 6 or so.",
    datePublished: "2008-04-17",
    prepTime: "",
    description:
      "A stunning, delicious sweet strawberry panzanella recipe. Bread cubes are tossed with a sweet brown sugar glaze, strawberries are mashed into a dressing, and it is all served family style.",
  },
  {
    name: "Warm and Nutty Cinnamon Quinoa Recipe",
    ingredients:
      "1 cup organic 1% low fat milk\n1 cup water\n1 cup organic quinoa, (hs note: rinse quinoa)\n2 cups fresh blackberries, organic preferred\n1/2 teaspoon ground cinnamon\n1/3 cup chopped pecans, toasted*\n4 teaspoons organic agave nectar, such as Madhava brand\n ",
    url: "http://www.101cookbooks.com/archives/warm-and-nutty-cinnamon-quinoa-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/berry_quinoa_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 4.",
    datePublished: "2008-05-04",
    prepTime: "",
    description:
      "A stunning berry-studded breakfast quinoa with pecans and blackberries, sweetened with agave nectar or honey.",
  },
  {
    name: "Zucchini Ricotta Cheesecake",
    ingredients:
      "2 cups zucchini, unpeeled &amp; grated\n1 teaspoon fine grain sea salt\n2 1/2 cups ricotta cheese\n1/2 cup freshly shredded Parmesan cheese\n2 shallots, chopped\n2 cloves garlic, chopped\n1/4 cup fresh dill, chopped\nzest of one lemon\n2 large eggs, well beaten\n1/3 cup goat cheese, crumbled\ndrizzle of olive oil",
    url: "http://www.101cookbooks.com/archives/zucchini-ricotta-cheesecake-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/ricotta_cheesecake_recipe_08.jpg",
    cookTime: "",
    recipeYield: "Serves 8. ",
    datePublished: "2008-07-30",
    prepTime: "",
    description:
      "A savory, summertime ricotta cheesecake recipe made with shredded zucchini, dill, garlic, and Parmesan cheese. Perfect picnic fare.",
  },
  {
    name: "Wheat Berry Breakfast Bowl",
    ingredients:
      "1 cup Greek yogurt\n1/4 cup maple syrup\nscan tablespoon of extra-virgin olive oil\nscant tablespoon of butter\n2 firm pears, cored and chopped into 1/4-inch THIN bite-sized slices\n1/2 cup fresh cranberries\n3 cups cooked wheat berries* (see head notes for alternatives)\n1/2 cup toasted pecans\n1/2 cup assorted dried fruits, chopped (I used equal portions of dried persimmons, dates, and crystallized ginger)",
    url: "http://www.101cookbooks.com/archives/wheat-berry-breakfast-bowl-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/wheatberry_breakfast_bowl.jpg",
    cookTime: "",
    recipeYield: "Serves 4-6.",
    datePublished: "2009-01-18",
    prepTime: "",
    description:
      "A perfect breakfast - thin slices of saut\u00e9ed pears, ruby-hued cranberries, and plump, golden wheat berries are sweetened with generous dollops of maple-sweetened yogurt and finished with plenty of toasted pecans and a sprinkling of dried persimmons, ginger, and dates.",
  },
  {
    name: "Multigrain Waffles",
    ingredients:
      "1 1/2 tablespoons poppy seeds\n2 cups / 475 ml buttermilk\n1 cup / 3.5 oz / 100g barley flour\n1/2 cup / 1.5 oz / 45 g oat flour\n1/2 cup / 2 oz / 55g rye flour\n1 tablespoon natural cane sugar or Muscovado sugar\n1 tablespoon aluminum-free baking powder\nscant 1/2 teaspoon fine grain sea salt\n3 large eggs, whisked\n1/3 cup / 3 oz unsalted butter, melted and cooled a bit",
    url: "http://www.101cookbooks.com/archives/multigrain-waffles-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/multigrain_waffle_recipe.jpg",
    cookTime: "PT20M",
    recipeYield: "",
    datePublished: "2010-04-14",
    prepTime: "PT10M",
    description:
      "Poppyseed-flecked and made with a blend of barley, oat, and rye flours, these multigrain waffles are buttermilk-moist with a golden crust and a hint of tanginess. ",
  },
  {
    name: "Cinnamon Buns",
    ingredients:
      "4 teaspoons active dry yeast\n1 cup warm whole milk (105F to 115F / 40C to 46C)\n3/4 cup / 100g light muscovado or brown sugar \n1 large egg, beaten\n1/2 cup / 125g unsalted butter, barely melted\n1 tablespoon ground cardamom\n1 teaspoon fine grain sea salt\n4 cups / 600g all-purpose flour\nFilling:\n1/2 cup / 60g  light muscovado or brown sugar\n2 tablespoons cinnamon\n1/2 cup / 125g unsalted butter, softened\nGlaze:\n1 egg beaten with 1 tablespoon of water\nlarge grain raw sugar or pearl sugar for sprinkling OR you can make an icing to spread on the rolls after baking (recipe below, not pictured)*",
    url: "http://www.101cookbooks.com/archives/cinnamon-buns-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cinnamon_buns_recipe.jpg",
    cookTime: "PT20M",
    recipeYield: "",
    datePublished: "2010-12-20",
    prepTime: "PT150M",
    description:
      "Inspired by a cinnamon bun recipe in Lotta Jansdotter's new book, Handmade Living, these cinnamon buns are made from a cardamom-flecked, buttery yeast dough with a classic cinnamon-sugar swirl. ",
  },
  {
    name: "Herb Cream Cheese Scrambled Eggs",
    ingredients:
      "8 oz / 225 g cream cheese, room temperature\n4 tablespoons chopped herbs - equal parts thyme, tarragon, oregano\n6 green onions, with greens, chopped\n1/3 cup (big handful) chopped chives\nfine grain sea salt and freshly ground pepper\n1 tablespoon unsalted butter\n3 eggs, well whisked\nplenty of toast, for serving",
    url: "http://www.101cookbooks.com/archives/herb-cream-cheese-scrambled-eggs-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/herb_creamcheese_scrambled_eggs.jpg",
    cookTime: "PT5M",
    recipeYield: "",
    datePublished: "2011-08-15",
    prepTime: "PT5M",
    description:
      "A scrambled egg recipe taught to me by the lovely Lynn from Satsuma Press - herby cream cheese is the last-second finish that make these eggs simple but special.",
  },
  {
    name: "Super-eggy Scrambled Eggs",
    ingredients:
      "3 large eggs\n2 large egg yolks\nscant tablespoon butter\nfine grain sea salt\nOregano Pesto\n3/4 cup extra-virgin olive oil\n1/4 cup fresh oregano, chopped\n1/4 cup fresh parsley, chopped\n1 large garlic clove\n1/4 teaspoon fine grain sea salt, plus more to taste.\ntoasted sunflower seeds, (optional)",
    url: "http://www.101cookbooks.com/archives/supereggy-scrambled-eggs-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/supereggy_scrambled_eggs.jpg",
    cookTime: "PT5M",
    recipeYield: "",
    datePublished: "2011-11-25",
    prepTime: "PT5M",
    description:
      "A slight twist makes these scrambled eggs extra special. I drizzled them with oregano pesto and served with a thick slab of toast. Thanks to Serious Eats for the excellent tip :)",
  },
  {
    name: "Blood Orange Gin Sparkler",
    ingredients:
      "2 cups / 480 ml water\n1 cup / 6.5 oz / 185 g sugar\n4 tablespoons (~2 sprigs-worth) fresh rosemary leaves\n1 bay leaf (optional)\nblood oranges \ngin\nice cubestonic water (or sparkling water)",
    url: "http://www.101cookbooks.com/archives/blood-orange-gin-sparkler-recipe.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/gin_sparkler.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2011-12-22",
    prepTime: "PT5M",
    description:
      "The citrus gin sparkler you want to be drinking at your next holiday party.",
  },
  {
    name: "Toasted Four Grain Cereal",
    ingredients:
      "Four grain cereal blend:\n1 cup / 3.5 oz / 100g rolled oats\n1 cup / 3.5 oz / 100g rolled rye\n1 cup / 3.5 oz / 100g rolled barley\n1 cup / 3.5 oz / 100g rolled spelt\n1 tablespoon butter\n1/4 teaspoon fine grain sea salt\n2 2/3 cup / 560 ml water, plus more to your preference\nOptional toppings:\n- bourbon blueberries*\n- buttermilk maple butter**\n- lots of toasted nuts &amp; seeds\n- tiny drizzle of half &amp; half or cream\n- chopped apples sauteed in a bit of butter and cinnamon\n- in summer, brown sugar-mashed berries",
    url: "http://www.101cookbooks.com/archives/toasted-four-grain-cereal-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/four_grain_cereal.jpg",
    cookTime: "PT10M",
    recipeYield: "Serves 2-3.",
    datePublished: "2012-01-30",
    prepTime: "PT10M",
    description:
      "A hot, filling, wintertime DIY four-grain breakfast cereal that you can trick out with all sorts of different toppings.",
  },
  {
    name: "Cottage Pancakes",
    ingredients:
      "1 cup / \u00a07 oz  / 200g cottage cheese\n3/4 cup / 180 ml milk\n4 room temperature eggs, separated\n1 cup / 4 oz / 115g raw (or quickly blanched) cauliflower, chopped into rice-sized bits\n1/2 cup / 75 g whole wheat pastry flour\n1/2 cup / 75 g all-purpose flour\n1 teaspoon baking powder\nscant 1/2 teaspoon fine grain sea salt\nbutter, for cooking",
    url: "http://www.101cookbooks.com/archives/cottage-pancakes-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cottage_pancake_recipe.jpg",
    cookTime: "PT15M",
    recipeYield: "Makes ~1 1/2 dozen medium pancakes.",
    datePublished: "2012-02-09",
    prepTime: "PT10M",
    description:
      "A few of you asked about the cottage cheese pancakes I mentioned a few posts back. Here you go. Plus a look at some of the vintage photos I've picked up at flea markets and antique shops over the years.",
  },
  {
    name: "Rice and Sesame Pancakes",
    ingredients:
      "1 1/2 cups / 6 3/4 oz all-purpose (or whole wheat pastry) flour\n1 tablespoon baking powder\n1 teaspoon brown sugar\n1/2 teaspoon fine grain sea salt\n2 1/2 tablespoons toasted sesame seeds\nzest of one lemon\n1/4 teaspoon toasted ground cumin \n1/4 teaspoon ground cayenne\n1 sheet nori, toasted (carefully) over burner until crunchy\n2 large eggs\n2 cups / 480 ml milk\n1/4 cup unsalted butter, just-melted\n1/8 tsp toasted sesame oil (optional)\n2 cups / 10 oz cooked brown rice, not hot",
    url: "http://www.101cookbooks.com/archives/rice-and-sesame-pancakes-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/brown_rice_pancakes_recipe.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2012-07-02",
    prepTime: "PT5M",
    description:
      "Really great pancakes made with lots of brown rice and sesame seeds. I throw in crumbled, toasted nori and spices to make them extra special.\n",
  },
  {
    name: "Pomegranate Yogurt Bowl",
    ingredients:
      "For each bowl: \na big dollop of Greek yogurt\n2 tablespoons fresh pomegranate juice\na drizzle of honey\na handful of puffed quinoa crisps (or other cereal/granola)\nsprinkling of toasted sunflower seeds\noptional: whole pomegranate seeds or fresh/dried rose petals, a bit of bee pollen",
    url: "http://www.101cookbooks.com/archives/pomegranate-yogurt-bowl-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/breakfast_yogurt_bowl.jpg",
    cookTime: "",
    recipeYield: "Serves 1. ",
    datePublished: "2013-01-20",
    prepTime: "PT5M",
    description:
      "A simple breakfast bowl made with Greek yogurt, fresh pomegranate juice, puffed quinoa cereal, toasted sunflower seeds, and honey.",
  },
  {
    name: "Making Corn Tortillas as instructed by Diana Kennedy",
    ingredients:
      "1 1/2 pounds (675g) Tortilla Masa, about 2 1/2 cups\nWater if needed",
    url: "http://www.101cookbooks.com/archives/000160.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/corntortillas.jpg",
    cookTime: "",
    recipeYield: "Makes 15 5 1/2-inch tortillas.",
    datePublished: "2005-04-19",
    prepTime: "",
    description:
      "Making Corn Tortillas as instructed by Diana Kennedy: From My Mexican Kitchen.",
  },
  {
    name: "Homemade Ricotta Recipe",
    ingredients:
      "1 gallon good-quality whole milk\n1 quart good-quality buttermilk",
    url: "http://www.101cookbooks.com/archives/000282.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/ricottarecipe.jpg",
    cookTime: "",
    recipeYield: "Makes about 4 cups.",
    datePublished: "2005-07-31",
    prepTime: "",
    description:
      "So simple, a fresh ricotta recipe should be part of every cook's repertoire. Made from just two ingredients - buttermilk and whole milk.",
  },
  {
    name: "Peter Reinhart's Napoletana Pizza Dough Recipe",
    ingredients:
      "4 1/2 cups (20.25 ounces)  unbleached high-gluten, bread, or all-purpose flour, chilled \n1 3/4 (.44 ounce) teaspoons salt\n1 teaspoon (.11 ounce) instant yeast \n1/4 cup (2 ounces) olive oil (optional)\n1 3/4 cups  (14 ounces)  water, ice cold (40\u00b0F) \nSemolina flour OR cornmeal for dusting ",
    url: "http://www.101cookbooks.com/archives/001199.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/best_pizza_dough_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes six 6-ounce pizza crusts.",
    datePublished: "2006-01-30",
    prepTime: "",
    description:
      "Peter Reinhart's Napoletana pizza dough recipe. It makes my all-time favorite pizza dough using a delayed-fermentation method. ",
  },
  {
    name: "White Whole Wheat Pizza Dough Recipe",
    ingredients:
      "4 1/2 cups  King Arthur White Whole Wheat Flour\n1 3/4 teaspoons salt\n1 teaspoon instant yeast\n1/4 cup olive oil\n1 3/4 cups water, ice cold\na few tablespoons chopped herbs (optional)\nSemolina flour or cornmeal for dusting",
    url: "http://www.101cookbooks.com/archives/001506.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/wholewheatpizzadough.jpg",
    cookTime: "",
    recipeYield: "Makes six 6-ounce pizza crusts.",
    datePublished: "2006-09-20",
    prepTime: "",
    description:
      "Fantastic Peter Reinhart inspired rustic, thin-ish crust pizza dough recipe - made from white whole wheat flour, yeast, olive oil, salt, and ice water.",
  },
  {
    name: "How to Make Pesto like an Italian Grandmother",
    ingredients:
      "1 large bunch of basil, leaves only, washed and dried\n3 medium cloves of garlic\none small handful of raw pine nuts\nroughly 3/4 cup Parmesan, loosely packed and FRESHLY GRATED\nA few tablespoons of extra-virgin olive oil\nSpecial equipment: large mezzaluna for chopping",
    url: "http://www.101cookbooks.com/archives/001570.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/pesto_ultimate07.jpg",
    cookTime: "",
    recipeYield: "Makes about 1 cup.",
    datePublished: "2007-03-25",
    prepTime: "",
    description:
      "This favorite, stunning, vibrant pesto recipe was taught to me by my friend Francesca's mother who came to visit recently - handchopped basil, garlic, Parmesan, olive oil and pinenuts.",
  },
  {
    name: "Five Minute Tomato Sauce",
    ingredients:
      "1/4 cup extra virgin olive oil\n1 1/2 teaspoons crushed red pepper flakes\n1/2 teaspoon fine grain sea salt\n3 medium cloves of garlic, finely chopped\n1 28-ounce can crushed red tomatoes\nzest of one lemon",
    url: "http://www.101cookbooks.com/archives/five-minute-tomato-sauce-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/tomatosaucerecipe_07.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2007-08-16",
    prepTime: "",
    description:
      "Quick, simple and easy tomato sauce recipe. Bright and clean flavors, a vibrant red in color, exudes the essence of tomatoes.",
  },
  {
    name: "Potato Crouton Recipe",
    ingredients:
      "scant 1 tablespoon extra virgin olive oil\n1 1/2 cups potatoes, 1/3-inch dice\npinch of salt\n1 garlic clove, minced (optional)",
    url: "http://www.101cookbooks.com/archives/potato-crouton-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/croutonrecipe_07.jpg",
    cookTime: "",
    recipeYield: "Makes 1 1/2 cups of potato croutons.",
    datePublished: "2007-08-26",
    prepTime: "",
    description:
      "Golden, crisped potato crouton recipe. Great in place of bread croutons in soups and salads.",
  },
  {
    name: "Spooky Ghost Meringues",
    ingredients:
      "2 egg whites, room temperature\ntiny pinch of salt\ntiny pinch of cream of tartar\n3/4 cup powdered sugar, sifted\ntiny silver candy sprinkles (chocolate or little seeds) for eyes\n1 dark chocolate bar, melted (optional)\n1/4 cup shredded coconut, toasted (optional)\nSpecial equipment: \npastry bag with 1//2-inch tip",
    url: "http://www.101cookbooks.com/archives/spooky-ghost-meringues-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/meringuerecipe_07.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2007-10-31",
    prepTime: "",
    description:
      "A fun meringue recipe that enables you to shape the meringue into seasonal shapes - ghosts for halloween, or snowmen for the holidays",
  },
  {
    name: "A Tasty Frittata Recipe",
    ingredients:
      "Cilantro Chile Sauce\n2 large cloves garlic\n1/2 cup extra virgin olive oil\n2 tablespoons lemon juice, freshly squeezed\n1 small bunch cilantro\n1 green (serrano) chile, seeds removed\n2 pinches ground cumin\n a couple big pinches of salt \nFrittata\n6 large organic eggs\n1 tablespoon olive oil\n1 small yellow onion, chopped\n3 small potatoes, very very thinly sliced\n1/2 cup yellow zucchini or cauliflower,1/2-inch pieces\n1/4 cup goat cheese, crumbled\n1/4 cup pumpkin seeds, toasted \ncouple pinches of salt",
    url: "http://www.101cookbooks.com/archives/a-tasty-frittata-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/frittatarecipe_07.jpg",
    cookTime: "",
    recipeYield: "Serves 2 to 4.",
    datePublished: "2007-12-20",
    prepTime: "",
    description:
      "The prettiest, tastiest, frittata recipe. Made with potatoes, onions, and eggs drizzled with a cilantro chile sauce. ",
  },
  {
    name: "Maple Grilled Tempeh Recipe",
    ingredients:
      "8 ounces tempeh\n3 tablespoons soy sauce (I prefer shoyu sauce)\n3 tablespoons maple syrup\n1 teaspoon rice vinegar\n2 cloves garlic, peeled, crushed and chopped\n1/2 teaspoon powdered chipotle (or a couple pinches of cayenne)\noptional (version in photo):\n1 -2 portobello mushrooms\n2 1/2 cups cooked quinoa or brown rice\na handful of blanched green beans",
    url: "http://www.101cookbooks.com/archives/maple-grilled-tempeh-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/grilled_tempeh_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 2 - 4",
    datePublished: "2008-07-10",
    prepTime: "",
    description:
      "A fantastic salty-sweet grilled tempeh recipe. The marinade is made from a simple (but effective) combination of maple syrup, soy sauce, garlic and ground chipotle pepper.",
  },
  {
    name: "Grandma's Grain Recipe",
    ingredients:
      "1 cup long grain brown rice (I use Lundberg's)\n1 cup millet\n3 handfuls of whole barley\n3 handfuls of whole oats (groats)\n1 handful of red rice, wild rice, or a mixture of wild type rices\n2 teaspoons salt",
    url: "http://www.101cookbooks.com/archives/grandmas-grain-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/mixed_grains_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2008-08-13",
    prepTime: "",
    description:
      "A simple, single pot mixed grain recipe inspired by a reader email from a grandmother of four - rice, oats, barley, and millet.",
  },
  {
    name: "Garlicky Greens Recipe",
    ingredients:
      "1 large bunch of kale, chard\n2 tablespoons extra-virgin olive oil\nfine grain sea salt\n5 cloves of garlic, crushed and chopped\n1/4 cup Parmesan cheese (opt)\ncrushed red pepper flakes",
    url: "http://www.101cookbooks.com/archives/garlicky-greens-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/garlicky_greens_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 2- 3.",
    datePublished: "2008-12-21",
    prepTime: "",
    description:
      "If you love sauteed greens, give this recipe a go. I avoid overcooking, and throw plenty of garlic into the pan. You can use kale, chard, or spinach.",
  },
  {
    name: "Homemade Bouillon",
    ingredients:
      "5 ounces / 150 g leeks, sliced and well-washed\n7 ounces / 200g fennel bulb, chopped\n7 ounces / 200g carrot, well scrubbed and chopped\n3.5 ounces / 100 g celery\n3.5 ounces / 100g celery root (celeriac), peeled and chopped\n1 ounce / 30g sun-dried tomatoes\n3.5 ounces / 100g shallots, peeled\n3 medium garlic cloves\n9 ounces / 250g fine grain sea salt\n1.5 ounces / 40 g flat-leaf parsley, loosely chopped\n2 ounces / 60g cilantro (coriander), loosely chopped",
    url: "http://www.101cookbooks.com/archives/homemade-bouillon-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/bouillon_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2010-01-15",
    prepTime: "PT40M",
    description:
      "Inspired by a recipe in the River Cottage Preserves Handbook I made my own bouillon. I've been using it in soups and stews all week, and it's so much better than any canned broth I've tasted.",
  },
  {
    name: "Golden Tomato Sauce Recipe",
    ingredients:
      "1 1/2 pounds / 24 oz / 680g ripe yellow tomatoes, cored and halved\n3 tablespoons extra-virgin olive oil\n3 medium cloves garlic, chopped\n1/2 teaspoon fine-grain sea salt\n1/2 teaspoon red pepper flakes",
    url: "http://www.101cookbooks.com/archives/golden-tomato-sauce-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/golden_tomato_sauce_recipe.jpg",
    cookTime: "PT5M",
    recipeYield: "Makes 2 cups / 475 ml.",
    datePublished: "2010-08-18",
    prepTime: "PT10M",
    description:
      "I spent Saturday brewing beer with my brother-in-law. For dinner, later on, I brought a simple lasagna, using this golden tomato sauce as the base - garlic, red pepper flakes, and olive oil. That's it. It's good on pasta, pizza, and only takes a few minutes to pull together. ",
  },
  {
    name: "Homemade Celery Salt",
    ingredients:
      "Leaves from one bunch of celery\nflaky sea salt (see head notes)",
    url: "http://www.101cookbooks.com/archives/homemade-celery-salt-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/homemade_celery_salt_recipe.jpg",
    cookTime: "PT5M",
    recipeYield: "",
    datePublished: "2011-07-18",
    prepTime: "PT5M",
    description:
      "Homemade celery salt couldn't be easier to make. I keep a bottomless jar of it on hand and use it on just about everything - eggs, soups, salads. It's hard to go wrong with it.",
  },
  {
    name: "A Nice Berry Pie",
    ingredients:
      "Flaky Rye Pie Crust\n75 g / v. scant 2/3 cup rye flour\n175g / 1 1/2 cups unbleached all-purpose flour\n1/4 teaspoon fine grain sea salt\n8 oz / 1 cup salted butter\n1/3 cup / 80 ml cold water or beer\nYou can make the crust using the quick and popular food processor technique. BUT I always make it by hand, using the above ingredients, and this technique. If you like a super-puffy crust, do the folding in Pim's instructions 4x. I usually like mine less so, and fold &amp; roll just 2 or 3 times, depending on how the dough is feeling. The pie in the photo was 3x.\nBerry Pie Filling\n2/3 cup / 3.5 oz / 100g natural cane or brown sugar\n1/3 cup / 1.5 oz / 45 g flour (apf or wwp)\n1/4 teaspoon fine grain sea salt\n1/2 teaspoon cinnamon\n2 sprigs thyme (prefer. lemon thyme) ~ 1/2 t.\n2 pounds of berries, (see head notes)\n2 tablespoons lemon juice\n2 tablespoons butter\n1 egg plus 1 tablespoon water, whisked\nLarge grain sugar, for sprinkling\nPreheat your oven to 425F / 220C, with a rack in the bottom third. Roll out your pie crust - top and bottom - on a flour dusted counter. I tend to work the edges a bit first (particularly if I'm getting cracks) - roll and turn, roll and turn, dusting with flour when necessary. Flip once or twice. Work quickly and keep the dough moving. Place between unbleached parchment paper or Silpats, and refrigerate while you make the filling. If you're nervous about rolling out the crust, have a look at the second part of Melissa Clark's video. See how she's not super fussy? Channel some of that. If you need an extra confidence booster, read this. It's o.k. if your dough doesn't roll out into a perfect circle - you can patch and pinch later if needed. Just shoot for 11 or 12-inch inch rounds.\nMake the filling by combining the sugar, flour, salt, cinnamon, and thyme in large mixing bowl. Add the berries, and toss gently until well combined. Set aside.\nLine a 9 or 10-inch pie plate with the bottom piece of pie dough. Guide it into place without stretching. You want about an inch of dough extending past the rim of the pie plate, trim a bit with scissors or a sharp knife if needed.\nFill the crust with the berries, drizzle with lemon juice, and dot with the butter. Brush the rim of the bottom crust with a bit of egg wash, then top with the other piece of pie crust. Trim the top crust a bit if needed, then press the top and bottom crusts together at the edges. Working around the rim, tuck the overhanging dough under itself, and crimp with a fork or flute using your fingers (see picture up above). Brush the crust with more of the egg wash, cut a few slits into the top, and place in the oven for about 45 minutes - until the crust is deeply golden. Check your pie regularly after 25 minutes. If you need to foil the edges of the pie - pull it out and do so - this way the edges wont get too dark and dry. I don't have to foil in my oven for this pie, even at this temp, but your oven might be a bit different. I also sprinkle with large-grain sugar about 25 minutes in - for a little extra crunch and sweetness. Let cool a bit, slice and serve.\nServes 8.\n\nPrep time: 90 min  - \n   Cook time: 45 min   \n  \nPrint Recipe",
    url: "http://www.101cookbooks.com/archives/a-nice-berry-pie-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/berry_pie_recipe.jpg",
    cookTime: "PT45M",
    recipeYield: "",
    datePublished: "2011-09-07",
    prepTime: "PT90M",
    description:
      "My go-to berry pie recipe - a rye flour crust and mixed berry filling seasoned with fresh thyme leaves.",
  },
  {
    name: "Citrus Salt",
    ingredients:
      "For each type of salt you'll need:\n1/2 cup / 2.25 oz  / 65 g flaky sea salt\n1 tablespoon citrus zest",
    url: "http://www.101cookbooks.com/archives/citrus-salt-recipe.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/citrus_salt.jpg",
    cookTime: "PT70M",
    recipeYield: "",
    datePublished: "2012-01-18",
    prepTime: "PT5M",
    description:
      "A spectrum of citrus salts made from all sorts of winter citrus zest - clementines, wild lime, Meyer lemon, kalamansi oranges, and mandarinquats. Couldn't be simpler.",
  },
  {
    name: "Cinnamon Vanilla Sunflower Butter",
    ingredients:
      "2 cups / 225 g raw sunflower seeds\n1/4 cup / 60 ml sunflower oil, divided\n1/2 teaspoon fine grain sea salt, plus more as needed\n2 tablespoons vanilla bean paste (or seeds scraped from 2 plump vanilla beans)\n3 teaspoons ground cinnamon\nzest of 1/2 a lemon, or to taste",
    url: "http://www.101cookbooks.com/archives/cinnamon-vanilla-sunflower-butter-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/sunflower_seed_butter_recipe.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2012-06-26",
    prepTime: "PT5M",
    description:
      "This one is for my sis - homemade Cinnamon Vanilla Sunflower Butter. ",
  },
  {
    name: "Tarragon Oil",
    ingredients:
      "3/4 cup / 12g tarragon leaves\n3/4 cup / 12 g flat-leaf parsley leaves\n3/4 cup / 180 ml extra virgin olive oil\nfine grain sea salt",
    url: "http://www.101cookbooks.com/archives/tarragon-oil-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/tarragon_oil_recipe.jpg",
    cookTime: "PT5M",
    recipeYield: "Makes 2/3 cup.",
    datePublished: "2012-09-25",
    prepTime: "PT5M",
    description:
      "Tarragon oil - one of my little secret weapons. Use it as a finishing oil on soups, as a component of anything bread-centric, and as a vinaigrette base. It's vibrant green with grassy anise notes, and just the sort of thing to keep on hand.",
  },
  {
    name: "Za'atar",
    ingredients:
      "4 tablespoons fresh thyme leaves, stripped from stems (or equivalent dried)\n2  teaspoons ground sumac*\nscant 1/2 teaspoon fine sea salt, or to taste\n1 tablespoon toasted sesame seeds",
    url: "http://www.101cookbooks.com/archives/zaatar-recipe.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/zaatar.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2013-01-27",
    prepTime: "PT5M",
    description:
      "Za'atar is an incredibly versatile Middle Eastern spice blend, one of my favorites. Particularly this time of year when it's a welcome addition to all sorts of roasted vegetables, soups and stews, or simply sprinkled over everything from yogurt, to eggs, to savory granola.",
  },
  {
    name: "Seeded Popovers",
    ingredients:
      "2 cups / 475 ml whole milk\n2 tablespoons unsalted butter\n2 cups / 9 ounces / 255 g unbleached all-purpose flour\n1 1/4 teaspoons fine grain sea salt\n3/4 teaspoon baking powder\n1/4 cup / 1.5 oz / 45 g raw, uncooked millet seeds*\n2 tablespoons / .5 oz / 15 g toasted sesame seeds*\n2 tablespoons / .5 oz / 15 g toasted sunflower seeds*\n5 large eggs, room temperature(!)",
    url: "http://www.101cookbooks.com/archives/seeded-popovers-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/popover_recipe_2013.jpg",
    cookTime: "PT50M",
    recipeYield: "Makes 6-8 large popovers, or more smaller ones..",
    datePublished: "2013-02-04",
    prepTime: "PT65M",
    description:
      "Popovers are the most delightful thing my oven produces - sky-high and billowy. Here's my go-to recipe, a few tips, and the overall technique I use.",
  },
  {
    name: "Roast Banana-Pumpkin Breakfast Bread Recipe",
    ingredients:
      "3/4 cup golden raisins\n1/2 cup Myer's dark rum\n2 ripe bananas, unpeeled\n2 cups cake flour\n2 teaspoons baking powder\n1/2 teaspoon baking soda\n1/4 teaspoon salt\n6 tablespoons unsalted butter, softened\n2/3 cup sugar\n2 large eggs\n1/2 cup unsweetened coconut milk\n1 teaspoon pure vanilla extract\n1/2 cup toasted pumpkin seeds\nPowdered sugar (optional)",
    url: "http://www.101cookbooks.com/archives/000121.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/roasted_banana_bread_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes 1 loaf",
    datePublished: "2004-10-11",
    prepTime: "",
    description:
      "Stephan Pyles' banana bread recipe includes rum-soaked golden raisins, toasted pumpkin seeds, coconut milk, and oven-caramelized ripe bananas.",
  },
  {
    name: "Great Chocolate Chip Cookie Recipe",
    ingredients:
      "1/2 cup (100 grams) granulated sugar\n1/2 cup (120 grams) firmly packed light brown sugar\n8 tablespoons (1 stick) (115 grams) unsalted butter, cold, cut into 1/2-inch (1cm) pieces\n1 large egg\n1 teaspoon vanilla extract\n1/2 teaspoon baking soda\n1 1/4 cups (175 grams) all-purpose flour\n1/4 teaspoon salt\n1 1/2 cups (200 grams) semisweet chocolate chips\n1 cup(130 grams) walnuts or pecans, toasted and chopped",
    url: "http://www.101cookbooks.com/archives/000158.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/great_chocolatechip_cookies.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-04-11",
    prepTime: "",
    description:
      "If you like a serious chocolate chip cookie, this is the recipe. A high chip to dough ratio guarantees lots of chocolate in every bite, and the walnuts add crunch, density, and a delicious flavor to the overall mix. They are that good.",
  },
  {
    name: "Ginger Cupcake Recipe",
    ingredients:
      "1 1/2 cups all-purpose flour\n1 tbsp ground ginger\n1 tsp baking powder\n1/4 tsp salt\n3/4 cup finely chopped candied ginger\n1 1/4 cups granulated sugar\n1/2 cup  unsalted butter, at room temperature\n3 eggs\n3/4 cup milk\n4 oz cream cheese, at room temperature \n1/4 cup unsalted butter, at room temperature\n2 1/4 cups confectioner's (icing) sugar, sifted\n1/4 cup finely chopped crystalIized ginger\n1 tsp  ground ginger \nPinch salt ",
    url: "http://www.101cookbooks.com/archives/000174.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/gingercupcakerecipe.jpg",
    cookTime: "",
    recipeYield: "Makes 12 cupcakes.",
    datePublished: "2005-06-13",
    prepTime: "",
    description:
      "Julie Hasson's delicious ginger cupcake recipe. Little bursts of crystallized ginger speckle each moist and sophisticated little cake.",
  },
  {
    name: "Apple Coffee Cake Recipe",
    ingredients:
      "2 medium tart apples such as Granny Smith\n2 cups unbleached all-purpose flour\n2 1/4 teaspoons baking powder\n2 teaspoons ground cinnamon\n1/4 teaspoon salt\n1/2 cup (1 stick) butter, at room temperature\n1 cup sugar\n1/2 cup milk or plain soy milk\n2 large eggs\n1 1/2 teaspoons vanilla extract\n1/3 cup apple jelly, stirred over low heat until smooth",
    url: "http://www.101cookbooks.com/archives/000557.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/applecoffeecake.jpg",
    cookTime: "",
    recipeYield: "Serves 8.",
    datePublished: "2005-10-04",
    prepTime: "",
    description:
      "Spicy apple coffee cake recipe punctuated with oozy, warm apples.",
  },
  {
    name: "Cele's Old-Fashioned Pear Cake Recipe",
    ingredients:
      "1/2 cup unsalted butter, at room temperature, plus 2 tablespoons melted\nAll-purpose flour for dusting\n1 cup whole-wheat pastry flour\n1 teaspoon ground cinnamon\n1 teaspoon baking powder\n1/4 teaspoon sea salt\n1 cup sugar\n2 eggs\n6 firm but ripe small pears such as Seckel, cored and cut lengthwise into quarters",
    url: "http://www.101cookbooks.com/archives/000725.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/pear_cake_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 10.",
    datePublished: "2005-11-06",
    prepTime: "",
    description:
      "From Michael Ableman's book, Fields of Plenty, a rustic, homey, unfussy pear cake recipe that comes together in five minutes before baking. ",
  },
  {
    name: "Vintage Jam Tarts Recipe",
    ingredients:
      "1 cup finely-ground cornmeal\n1 cup whole wheat pastry flour\n2 cups all-purpose flour\n1 1/2 teaspoons finely ground sea salt\n2 tablespoons baking powder\n3 tablespoons sugar\n1 cup unsalted butter, chilled, and cut into 1/4-inch chunks\n1 1/2+ cups milk\n1 egg, just the egg white\n1/3 cup jam (any flavor(s) you like)",
    url: "http://www.101cookbooks.com/archives/001054.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/jam_tarts_recipe1.jpg",
    cookTime: "",
    recipeYield:
      "Makes about 1 - 2 dozen tarts, depending on the size of your cutters.",
    datePublished: "2006-01-03",
    prepTime: "",
    description:
      "This jam tart recipe makes the cutest tarts ever.  Cornmeal biscuit dough is the base, and you can play around with different shapes and sizes - they are delicious and buttery straight from the oven or at room temperature hours later. ",
  },
  {
    name: "Lilikoi Passionfruit Curd Cake Recipe",
    ingredients:
      "1 cup whole wheat pastry flour\n1/2 cup unbleached all-purpose flour\n1 1/2 teaspoon baking powder\n3/4 teaspoon fine-grain sea salt\n1 1/2 sticks organic unsalted butter\n1 1/2 cups granulated sugar (I used 1 cup Florida Crystals organic + 1/2 cup Alter-Eco unrefined ground cane sugar)\n3 large organic eggs\n1 teaspoon vanilla extract\n3/4 cup lilikoi curd (or curd flavor of your preference - lemon, raspberry, etc)",
    url: "http://www.101cookbooks.com/archives/001191.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/passionfruitcake.jpg",
    cookTime: "",
    recipeYield: "Makes about 12 modest slices.",
    datePublished: "2006-01-26",
    prepTime: "",
    description:
      "A lilikoi curd-swirled loaf cake. It moist in the middle, sliceable, and delicious. Change curds with the seasons or as you are inspired -  any flavor will work.",
  },
  {
    name: "The Madame's Souffle Recipe",
    ingredients:
      "4 deciliters (1 2/3 cups) of very good milk \n100 grams (31/2 ounces) of sugar lumps\n40 grams (1 3/8 ounces) of rice starch or 30 grams (1 ounce) of sifted fine wheat flour\na nice half vanilla bean\n5 egg yolks\n6 egg whites whisked Into a very firm snow\n30 grams (1 ounce, 2 tablespoons) of fine butter\n2 tablespoons of confectioners' sugar or superfine sugar. \nA timbale or a souffle dish about 20 centimeters (8-inches) In diameter and 7 centimeters (2 3/4 inches) deep.",
    url: "http://www.101cookbooks.com/archives/001316.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/best_souffle_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2006-02-14",
    prepTime: "",
    description:
      "The most exhaustive, detailed instructions on how to make a souffle excerpted from La Bonne Cuisine de Madame E. Saint-Ange - there are few better teachers.",
  },
  {
    name: "Homemade and All-natural Thin Mint Recipe",
    ingredients:
      "Chocolate Wafers:\n8 ounces organic butter, room temperature\n1 cup organic powdered sugar, (I use Wholesome Sweeteners brand)\n1 teaspoon natural vanilla extract\n1 cup cocoa powder (I use Dagoba's cacao powder)\n3/4 teaspoon fine grain sea salt\n1 1/2 cups whole wheat pastry flour\nChocolate Peppermint Coating:\n1 pound good quality semi-sweet chocolate, chopped\nnatural peppermint oil to taste",
    url: "http://www.101cookbooks.com/archives/001370.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/thinmintrecipe1.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2006-03-12",
    prepTime: "",
    description:
      "As promised, an all-natural Thin Mint recipe for you. No shortening, no trans-fats from partially hydrogenated vegetable oils - just good old-fashioned butter, cocoa, vanilla, sugar, chocolate, whole grain flour, and peppermint turned into delicious, thin minty goodness. ",
  },
  {
    name: "Triple Chocolate Espresso Bean Cookie Recipe",
    ingredients:
      "2 1/2 cups whole-wheat pastry flour\n2 tablespoons freshly ground espresso powder\n3/4 teaspoon aluminum-free baking soda\n3/4 teaspoon aluminum-free baking powder\n3/4 teaspoon finely ground sea salt\n1/2 cup  natural cocoa or cacao powder (Scharffen Berger or Dagoba), not dutched\n1 cup unsalted butter, room temperature (soft to the touch)\n2 cups fine-grain natural granulated sugar (evaporated cane sugar) - for example, I love Alter-eco brand, OR do 1 1/2 cups sugar + 1/2 cup dark brown sugar\n2 large eggs\n3 teaspoons vanilla extract\n3/4 cup semi-sweet chocolate chips\n8 ounces chocolate covered espresso beans",
    url: "http://www.101cookbooks.com/archives/001408.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/espresso_bean_cookie_recipe1.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2006-05-25",
    prepTime: "",
    description:
      "Dark chocolate cookie recipe, each cookie pumped full of lots of freshly ground espresso powder.",
  },
  {
    name: "Whole Grain Mexican Wedding Cookie Recipe",
    ingredients:
      "1 cup pecans, toasted and cooled to room temperature\n1 cup organic unsalted butter\n1/2 cup fine grain evaporated cane sugar (I used Alter-Eco brand)\nA splash of vanilla extract\nA splash of bourbon (optional)\n1 1/2 cups whole wheat pastry four\n1 cup oat flour\n1/2 teaspoon fine grain sea salt\norganic powdered sugar for dusting",
    url: "http://www.101cookbooks.com/archives/001434.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/mexican_wedding_cookie_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes 1 1/2 dozen small cookies.",
    datePublished: "2006-06-22",
    prepTime: "",
    description:
      "A good Mexican wedding cookie recipe results in a tender nutty, butter-based cookie topped with an extravagant blizzard of powdered sugar. ",
  },
  {
    name: "Snow-topped Holiday Cupcake Recipe",
    ingredients:
      "2 1/2 cups plus 2 tablespoons unsifted bleached all-purposed flour\n1/2 teaspoon baking soda\n3/4 teaspoon salt\n3/4 teaspoon nutmeg\n12 tablespoons (1 1/2 sticks) unsalted butter, softened\n1 1/2 cups superfine sugar\n3 large eggs\n2 1/2 teaspoons pure vanilla extract\n3/4 cup thick, cultured sour cream\n1 cup tightly packed sweetened flaked coconut\nCoconut Cream Frosting (see recipe below), without the addition of the sweetened flaked coconut, for topping the baked cupcakes\nAbout 1 1/2 cups sweetened flaked coconut, to top the frosted cupcakes\nBakeware needed:\n8 jumbo muffin/cupcake cups (two pans each holding six individual muffin cups), each cup measuring 4 inches in diameter, 1 3/4 inches deep, with a capacity of about 1 1/8 cups (hs note: I used standard muffin pans. When I filled the cups 2/3 full, I got nice classic cupcakes. When I filled to the top I got big, jumbo-style cupcakes. Both were great, and plenty jumbo for me.)\nNonstick cookware spray, for preparing the muffin/cupcake pans\n12 ounces (one and one-half 8-ounce packages) cream cheese, softened\n5 tablespoons (1/4 stick plus 1 tablespoon) unsalted butter, softened\n2 1/2 teaspoons pure vanilla extract\n3 tablespoons heavy cream\n1/8 teaspoon freshly grated nutmeg\n5 1/2 cups unsifted confectioners' sugar (hs note: I used a bit more)\n3/4 cup lightly packed sweetened flaked coconut",
    url: "http://www.101cookbooks.com/archives/000132.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/holidaycupcakerecipe.jpg",
    cookTime: "",
    recipeYield: "Makes 8 jumbo frosted cupcakes.Makes about 4 1/2 cups.",
    datePublished: "2006-12-15",
    prepTime: "",
    description:
      "Knee-deep coconut flecked frosting tops over a sour cream coconut cake batter base make these a quintessential holiday cupcake recipe.",
  },
  {
    name: "Baked Doughnuts Recipe",
    ingredients:
      "1 1/3 cups warm milk, 95 to 105 degrees (divided)\n1 packet active dry yeast (2 1/4 teaspoons)\n2 tablespoons butter\n2/3 cup sugar\n2 eggs\n5 cups all-purpose flour (alternately, white whole wheat might work -  haven't tried it yet)\nA pinch or two of nutmeg, freshly grated\n1 teaspoon fine grain sea salt\n1/2 cup unsalted butter, melted\n1 1/2 cups sugar\n1 tablespoon cinnamon",
    url: "http://www.101cookbooks.com/archives/001561.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/bakeddoughnuts.jpg",
    cookTime: "",
    recipeYield: "Makes 1 1/2 - 2 dozen medium doughnuts.",
    datePublished: "2007-02-12",
    prepTime: "",
    description:
      "A fun and delicious alternative to deep-fried doughnuts. This cinnamon-sugar dusted baked doughnut recipe turns milk, flour, nutmeg, sugar, eggs, butter, and yeast into perfectly dunkable, delicious doughnuts.",
  },
  {
    name: "Plum and Peach Crisp Recipe",
    ingredients:
      "Fruit:\n1 pound ripe peaches\n1 pound ripe plums\n1/4 cup natural cane sugar (or brown sugar)\n1 tablespoon plus 1 teaspoons arrowroot (or cornstarch)\na scant 1/2 teaspoon orange blossom water (opt)\nCrisp:\n3/4 cup rolled oats\n3/4 cup white whole wheat flour (all-purpose flour)\n1/2 cup natural cane sugar (or brown sugar)\n1/2 teaspoon cinnamon\nbig pinch of salt \n1/3 cup butter, melted\n1/3 cup yogurt\nSpecial equipment: 8x8 square baking dish or equivalent",
    url: "http://www.101cookbooks.com/archives/plum-and-peach-crisp-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/plumandpeachcrisprecipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2007-07-12",
    prepTime: "",
    description:
      "This rustic plum and peach crisp has a generous oat-flecked crumbly crust. Paired with a dollop of cold, creamy vanilla ice cream - heavenly.",
  },
  {
    name: "Challah Bread Recipe",
    ingredients:
      "1 3/4 cups (8 ounces) whole wheat flour, preferably fine grind\n1/2 teaspoon (.14 ounces) salt\n3/4 cup (6 ounces) water\n1 3/4 cups (8 ounces) unbleached bread flour\n1/4 teaspoon (.03 ounces) instant yeast\n7 tablespoons (3.5 ounces) filtered or spring water, at room temperature (about 70F or 21C)\n1 large egg (1.65 ounces), slightly beaten\n4 egg yolks (2 ounces)\nUse all of the soaker\nUse all of the biga\n7 tablespoons (2 ounces) whole wheat flour\n1/2 teaspoon (.14 ounces) salt\n2 1/4 teaspoons (.25 ounces) instant yeast\n1 1/2 tablespoons honey or agave nectar (1 ounce) OR  2 tablespoons or  sugar or brown sugar (1 ounce)\n2 tablespoons (1 ounce) vegetable oil\n- extra whole wheat flour for adjustments\n- 1 egg beaten with 1 tablespoon water plus a pinch of salt for egg wash\n- poppy seeds or sesame seeds for topping (optional)",
    url: "http://www.101cookbooks.com/archives/challah-bread-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/challahbreadrecipe_07.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2007-08-12",
    prepTime: "",
    description:
      "Peter Reinhart's challah recipe creates a wonderful (and reasonably forgiving) dough that bakes into a tender, delicious version of the traditional Jewish celebration bread. ",
  },
  {
    name: "Madeleine Recipe",
    ingredients:
      "1 1/2 sticks unsalted butter (6 ounces)\n2 tablespoons softened unsalted butter (for greasing pan)\n3/4 cups unbleached all-purpose flour\n4 large eggs\na pinch fine-grain sea salt\n2/3 cups sugar\nzest of one large lemon\n1 teaspoon vanilla extract\npowdered sugar\na bit of extra flour for dusting baking pan\nSpecial equipment: A madeleine baking pan, regular or small",
    url: "http://www.101cookbooks.com/archives/madeleines-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/madeleinerecipe_07.jpg",
    cookTime: "",
    recipeYield: "Makes 2 -3 dozen regular madeleines.",
    datePublished: "2007-08-21",
    prepTime: "",
    description:
      "Perfect, golden, scalloped madeleines. From a favorite recipe shared with me by a friend and long-time Madeleine baker.",
  },
  {
    name: "Sun-dried Tomato Cottage Cheese Muffin Recipe",
    ingredients:
      "1 cup plain cottage cheese (low-fat is fine)\n3/4 cup parmesan cheese, freshly grated\n1/4 cup flour (see headnotes)\n1 cup almonds, very finely ground\n1 teaspoon baking powder\n1/4 cup sun-dried tomatoes (in oil), finely chopped\n1/4 cup basil, finely chopped\n1/4 cup water\n4 eggs, lightly beaten\n1/2 teaspoon salt",
    url: "http://www.101cookbooks.com/archives/cottage-cheese-muffins-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cottagecheesemuffinrecipe_07.jpg",
    cookTime: "",
    recipeYield: "Makes 9 muffins.",
    datePublished: "2007-09-29",
    prepTime: "",
    description:
      "Golden, puffy, sun-dried tomato, and cottage cheese muffins. High in protein, low in carbs, they are a great, satisfying way to start the day.",
  },
  {
    name: "Grown-up Fig Cookies",
    ingredients:
      "1/2 pound dried figs\n1/2 cup pomegranate juice\n1/2 cup port\n1/4 cup meyer (or regular) lemon juice\n1 cup brown rice flour\n1 cup sorghum flour\n1/2 cup tapioca flour\n1/2 teaspoon baking soda\n1 teaspoon baking powder\n1/2 teaspoon xantham gum\nscant 1 teaspoon salt\n1 teaspoon freshly ground nutmeg\n1/2 cup packed brown sugar\n1/2 cup unsalted butter, room temperature\n1/2 cup organic cane sugar\n1 large egg\n1 teaspoon vanilla\n2 tablespoons molasses",
    url: "http://www.101cookbooks.com/archives/grownup-fig-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/figcookierecipe_07.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2007-10-22",
    prepTime: "",
    description:
      "A grown-up twist on the figgy classic. This filling for this fig cookie recipe is dried figs that are marinated overnight in port and pomegranate juice and then pureed. They also happen to be gluten-free.",
  },
  {
    name: "Yeast-raised Cornbread Recipe",
    ingredients:
      "4 cups white whole wheat flour\n1 1/2 cup organic cornmeal\n1 1/2 teaspoons fine grained sea salt\n1 (1/4 ounce) package active dry yeast\n1 cup warm water (~105 degrees)\n1/4 cup olive oil\n3 tablespoons honey\n3 extra-large eggs, room temperature\n2 cups of fresh or frozen corn, if frozen defrosted to room temp\n2/3 cup chopped chives \nCornmeal and olive oil for preparing loaf pans or muffin tins",
    url: "http://www.101cookbooks.com/archives/yeastraised-cornbread-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cornbreadrecipe.jpg",
    cookTime: "",
    recipeYield: "Makes two loaves or 1 1/2 dozen rolls.",
    datePublished: "2007-11-14",
    prepTime: "",
    description:
      "Yeast-leavened corn bread recipe, heavily flecked with kernels of bright yellow corn and generously spiked with chives. Perfect for stuffing and soup-dunking.",
  },
  {
    name: "Pine Nut Rosemary Shortbread Recipe",
    ingredients:
      "2 cups white whole-wheat flour (or unbleached all-purpose flour)\nscant teaspoon fine-grain sea salt\n1 cup unsalted butter, at room temperature\n2/3 cup (natural cane) sugar\nzest of one lemon\n2/3 cup pine nuts, toasted and loosely chopped\n1 1/4 teaspoons fresh rosemary, finely chopped",
    url: "http://www.101cookbooks.com/archives/pine-nut-rosemary-shortbread-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/shortbreadrecipe_07.jpg",
    cookTime: "",
    recipeYield: "Makes about 2 dozen small cookies.",
    datePublished: "2007-12-16",
    prepTime: "",
    description:
      "A twist on the shortbread recipe I included in my book -perfectly golden pine nuts and just enough rosemary and lemon zest to infuse the buttery sweet dough with fragrance and flavor.",
  },
  {
    name: "Raspberry Mega Scones Recipe",
    ingredients:
      "4 cups whole wheat pastry flour (or unbleached all-purpose flour)\n3 tablespoons aluminum-free baking powder\n1 teaspoon fine-grain sea salt\n1 stick unsalted butter (4 oz), chilled and cut into 1/4-inch cubes\n3/4 cup fine grain natural cane sugar or granulated sugar\n1 1/4 cups half-and-half ( or you can also use heavy cream or whole milk)\n1 teaspoon vanilla extract\nzest of one lemon\n2/3 cups raspberry preserves\nGlaze:\n1/2 cup powdered sugar\n1 tablespoon lemon juice\nzest of one lemon",
    url: "http://www.101cookbooks.com/archives/raspberry-mega-scones-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/sconesrecipe_07.jpg",
    cookTime: "",
    recipeYield: "Makes two mega scones.",
    datePublished: "2007-12-28",
    prepTime: "",
    description:
      "A fun twist on a traditional scone recipe. Instead of cutting dough into small pieces, a big piece of lemony scone dough is slathered with raspberry jam and folded in on itself.",
  },
  {
    name: "Anzac Cookie Recipe",
    ingredients:
      "1 cup flour (all-purpose or whole wheat pastry)\n1 cup rolled oats\n1/2 cup sugar\n1/2 cup fine grain natural cane sugar OR brown sugar\n1 cup finely shredded non-sweetened coconut\nscant 1/2 teaspoon fine sea salt\n1/2 cup butter, cut into little cubes\n2 tablespoons golden syrup or honey\nzest of one medium orange\n1 tablespoon boiling water\n1/2 teaspoon baking soda\n1 tablespoon orange blossom water*",
    url: "http://www.101cookbooks.com/archives/anzac-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/anzac_cookie_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes 18 - 24 medium cookies.",
    datePublished: "2008-03-10",
    prepTime: "",
    description:
      "An Anzac cookie recipe, with a few little twists. Not overly-sweet, Anzacs are made from oats, coconut, and flour coming together in a butter-kissed dough. You end up with a hearty, sturdy cookie, with little fuss - altogether hard to get wrong. ",
  },
  {
    name: "Amazing Black Bean Brownie Recipe",
    ingredients:
      "4 ounces unsweetened chocolate\n1 cup unsalted butter\n2 cups soft-cooked black beans, drained well (hs: canned is fine)\n1 cup walnuts, chopped\n1 tablespoon vanilla extract\n\u00bc cup (granulated) natural coffee substitute (or instant coffee, for gluten-sensitive)\n\u00bc teaspoon sea salt\n4 large eggs\n1\u00bd cups light agave nectar",
    url: "http://www.101cookbooks.com/archives/amazing-black-bean-brownies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/amazing_brownie_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2008-03-17",
    prepTime: "",
    description:
      "This quirky, yet amazing black bean brownie recipe delivers deliciously dense, bite-sized squares of melt-in-your-mouth fudge-textured brownies. ",
  },
  {
    name: "Nibby Buckwheat Butter Cookie Recipe",
    ingredients:
      "1 1/4 cups (5.6 ounces) all-purpose flour\n3/4 cup (3 ounces) buckwheat flour\n1/2 pound (2 sticks) unsalted butter, softened\n2/3 cup sugar\n1/4 teaspoon salt\n1/3 cup cacao nibs\n1 1/2 teaspoons pure vanilla extract",
    url: "http://www.101cookbooks.com/archives/nibby-buckwheat-butter-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/buckwheat_butter_cookies.jpg",
    cookTime: "",
    recipeYield: "Makes forty-eight 2 1/2-inch cookies.",
    datePublished: "2008-03-27",
    prepTime: "",
    description:
      "Alice Medrich's twist on a traditional butter cookie recipe from her latest book, Pure Dessert. She uses a knock-out blend of all-purpose and buckwheat flours. ",
  },
  {
    name: "Banana Chip Cookie Recipe",
    ingredients:
      "1 3/4 cups whole wheat pastry flour (see head notes)\n1/2 cup (toasted) wheat germ\n1/2 teaspoon baking soda\n1/2 teaspoon baking powder\nscant 1/2 teaspoon fine grain sea salt\n1/2 cup unsalted butter\n1 cup natural cane sugar (or brown sugar)\n2 large eggs\n2 teaspoons vanilla extract\n2/3 cup banana chips, loosely chopped\n1 cup chocolate chips\n2/3 cup toasted walnuts, chopped",
    url: "http://www.101cookbooks.com/archives/banana-chip-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/banana_chip_cookie_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2008-06-15",
    prepTime: "",
    description:
      "A riff on one of my favorite chocolate chip cookie recipes. This version features banana chips, chocolate chips, toasted walnuts, toasted wheat germ, and whole wheat pastry flour.",
  },
  {
    name: "Cherry Cobbler Recipe",
    ingredients:
      "2 1/2 cups sweet cherries, pitted\n1 tablespoon cornstarch \n1/4 cup fine-grain natural cane sugar\n1 1/4 whole wheat pastry flour\n2 teaspoons baking powder\n1/3 cup fine-grain natural cane sugar (or brown sugar)\n1/4+ teaspoon salt\n1/4-1/2 cup toasted nuts (optional)\n1 egg\n1/2 cup buttermilk\n3 tablespoons butter, melted and cooled a bit",
    url: "http://www.101cookbooks.com/archives/cherry-cobbler-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cherry_cobbler_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves about 8.",
    datePublished: "2008-07-16",
    prepTime: "",
    description:
      "A rustic, cherry cobbler recipe made from fresh cherries - though you can certainly try this recipe with other types of summer fruit and berries.",
  },
  {
    name: "Peanut Butter Cookies",
    ingredients:
      "2 cups whole wheat pastry flour, spelt flour, or unbleached all-purpose flour\n1 teaspoon baking soda\n3/4 teaspoon fine grain sea salt\n1 cup organic, chunky natural peanut butter\n1 cup maple syrup\n1/3 cup extra virgin olive oil\n1 1/2 teaspoons vanilla extract",
    url: "http://www.101cookbooks.com/archives/peanut-butter-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/peanut_butter_cookies.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2008-07-23",
    prepTime: "",
    description:
      "Not your typical peanut butter cookie recipe - but just as good. Tastes pretty darn close to the classic bu without all that butter, and with maple syrup in place of the white sugar. Vegan, egg-free, and easily made wheat-free if you like.",
  },
  {
    name: "Brown Sugar Sandwich Cookie Recipe",
    ingredients:
      "2 1/2 cups whole wheat pastry flour\n1 teaspoon baking powder\nscant 1 teaspoon salt\n2 tablespoons + 1 teaspoon poppy seeds\n6 ounces (1 1/2 sticks) unsalted butter, room temperature\n2/3 cup good-quality brown sugar / natural cane sugar\n2 large egg yolks\n1 tablespoon vanilla extract\n2-3 tablespoons milk\n1 tablespoon big flaky sea salt (optional)\n1 tablespoon turbinado sugar (optional)\n6-7 ounces dark chocolate, chopped\nspecial equipment: a 1 1/2-inch cookie cutter",
    url: "http://www.101cookbooks.com/archives/brown-sugar-sandwich-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/sandwich_cookie_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes 2 dozen 1 1/2-inch sandwich cookies.",
    datePublished: "2008-08-28",
    prepTime: "",
    description:
      "Chocolate stuffed sandwich cookie recipe made with a poppy-flecked brown sugar dough.\n\n",
  },
  {
    name: "My Special Zucchini Bread Recipe",
    ingredients:
      "1 1/2 cups chopped walnuts, plus a few to sprinkle on top\n1/3 cup poppy seeds (optional)\nzest of two lemons (optional)\n1/2 cup crystallized ginger, finely chopped (optional)\n1/2 cup unsalted butter\n1 cup sugar\n1/2 cup fine grain natural cane sugar or brown sugar, lightly packed\n3 large eggs\n2 teaspoons vanilla extract\n3 cups grated zucchini (about 3 medium), skins on, squeeze some of the moisture out and then fluff it up again  before using\n3 cups whole wheat pastry flour (or all-purpose flour)\n1 1/2 teaspoons baking soda\n1/2 teaspoon baking powder\n1 teaspoon salt\n1 teaspoon cinnamon\n1 tablespoon curry powder (optional) \nSpecial equipment: two 1 pound loaf pans (5 x 9 inches)",
    url: "http://www.101cookbooks.com/archives/my-special-zucchini-bread-recipe-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/zucchinibreadrecipe_07.jpg",
    cookTime: "",
    recipeYield: "Makes 2 loaves.",
    datePublished: "2008-07-26",
    prepTime: "",
    description:
      "A favorite zucchini bread recipe - green-lined strands of shredded zucchini, lemon zest, poppy seeds, and fragrant notes of coriander, cumin, and clove make this a very special zucchini bread recipe.",
  },
  {
    name: "Nikki's Healthy Cookie Recipe",
    ingredients:
      "3 large, ripe bananas,  well mashed (about 1 1/2 cups)\n1 teaspoon vanilla extract\n1/4 cup coconut oil, barely warm - so it isn't solid (or alternately, olive oil)\n2 cups rolled oats\n2/3 cup almond meal\n1/3 cup coconut, finely shredded &amp; unsweetened\n1/2 teaspoon cinnamon\n1/2 teaspoon fine grain sea salt\n1 teaspoon baking powder\n6 - 7 ounces chocolate chips or dark chocolate bar chopped",
    url: "http://www.101cookbooks.com/archives/nikkis-healthy-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/healthy_cookies.jpg",
    cookTime: "",
    recipeYield: "Makes about 3 dozen bite-sized cookies.",
    datePublished: "2008-09-14",
    prepTime: "",
    description:
      "A remarkable healthy cookie recipe - banana-batter, shredded coconut, dark chocolate chunks, and oats. Butter-less, flour-less, egg-less, and potentially sugar-less cookies make great after school or after work treats.",
  },
  {
    name: "Maple Huckleberry Coffee Cake Recipe",
    ingredients:
      "1 cup whole wheat pastry flour (or spelt flour)\n3 tablespoons rolled oats\n1/2 teaspoon baking powder\n1/2 teaspoon baking soda\nscant 1/2 teaspoon fine grain sea salt\n1/4 teaspoon fresh thyme, chopped \n1/4 teaspoon fresh rosemary, chopped\n4 tablespoons (1/2 stick) unsalted butter, room temperature\n1/3 cup maple syrup, room temperature\n1 large egg, room temperature\nzest of one lemon\n2 teaspoons vanilla extract\n1/4 cup buttermilk\n1 1/3 cups fresh wild huckleberries (or other berries), well picked over\nTopping:\n1/2 cup whole wheat pastry flour\n4 tablespoons cold unsalted butter, cut 1/4-inch cubes\n1/3 cup maple sugar (or brown sugar)\n1/4 teaspoon fresh thyme\n1/2 cup chopped pecans\nspecial equipment: a 1-pound loaf pan",
    url: "http://www.101cookbooks.com/archives/maple-huckleberry-coffee-cake-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/coffee_cake_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 12 - 16 modest slices. ",
    datePublished: "2008-09-22",
    prepTime: "",
    description:
      "A wonderful coffee cake recipe made from fresh wild huckleberries using maple syrup as a sweetener instead of white sugar.",
  },
  {
    name: "Animal Cracker Cookie Recipe",
    ingredients:
      "1 cup whole wheat pastry flour\n1/4 cup walnut of almond meal (see head notes)\n1/2 cup unsweetened finely shredded coconut, very finely minced\n1/4 cup extra-virgin coconut oil, softened\n1/3 cup fine-grain natural cane sugar\n1/4 teaspoon salt\n1 large egg, lightly beaten\na few tablespoons big-grain turbinado sugar",
    url: "http://www.101cookbooks.com/archives/animal-cracker-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/animal_cracker_cookies.jpg",
    cookTime: "",
    recipeYield:
      "Makes about 2 dozen cookies, depending on the size of your cookie cutters.",
    datePublished: "2008-10-02",
    prepTime: "",
    description:
      "Kids love these animal-shaped cookies. They bake up fragrant, golden and crisp and are made from whole wheat pastry flour, a dollop of coconut oil, shredded coconut, ground walnuts, a touch of salt, and as little sugar as I thought I could get away with.",
  },
  {
    name: "Unfussy Apple Cake Recipe",
    ingredients:
      "2 cups sweet, crisp red apples, cut into 1/4 cubes (peel on)\n2 1/2 cups whole wheat pastry flour\n1 tablespoon aluminum-free baking powder\n2 teaspoons cinnamon\n1/2 cup dark Muscavado sugar (or other fine-grain natural cane or brown sugar), lump-free\n1/2 teaspoon fine grain sea salt\n2 eggs\n1 cup buttermilk\n1/4 cup butter, melted and cooled a bit\n3 tablespoons large grain sugar",
    url: "http://www.101cookbooks.com/archives/unfussy-apple-cake-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/apple_cake_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves about 12.",
    datePublished: "2008-11-05",
    prepTime: "",
    description:
      "A deliciously unfussy and relatively healthy apple cake recipe. Red-skinned apples punctuate a buttermilk batter and a final sprinkling of sugar before baking lends a nice top crust.",
  },
  {
    name: "Firecracker Cornbread Recipe",
    ingredients:
      "3 tablespoons butter\n1 teaspoon red pepper flakes\n1 cup whole wheat pastry flour\n3/4 cup instant cornmeal (or instant polenta) or fine-grain cornmeal\n1/4 cup natural cane sugar (or brown sugar)\n1 tablespoon aluminum-free baking powder\n1 1/2 teaspoons fine grain sea salt\n1 cup buttermilk\n1 large egg\n2 1/2 cups corn, fresh (or at room temperature if previously frozen)\nmore butter for drizzling (optional)",
    url: "http://www.101cookbooks.com/archives/firecracker-cornbread-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/firecracker_cornbread_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes 10 slices.",
    datePublished: "2008-11-19",
    prepTime: "",
    description:
      "A moist, tender buttermilk cornbread packed with corn kernels and flecked with red pepper flakes. Simple and delicious.",
  },
  {
    name: "Spice-kissed Pumpkin Pie Recipe",
    ingredients:
      "1 pie crust (of your choice), see head notes for pat-in-pan option\n2 cups hazelnuts (divided) , toasted\n1/2 cup brown sugar\n1 tablespoon pumpkin pie spice blend*\n1 teaspoon salt\n1 tablespoon arrowroot (or cornstarch)\n1 1/2 cups of roasted pumpkin puree*\n1 teaspoon vanilla extract\n3 extra large eggs PLUS one for glaze, lightly beaten\n1 cup coconut milk",
    url: "http://www.101cookbooks.com/archives/spicekissed-pumpkin-pie-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/pumpkinpierecipe.jpg",
    cookTime: "",
    recipeYield: "Makes one 9 or 10-inch pie.",
    datePublished: "2008-11-23",
    prepTime: "",
    description:
      "Favorite, easy pumpkin pie recipe. Made from a rich, roasted pumpkin and coconut milk base, and baked in a hazelnut-lined crust - delicious!",
  },
  {
    name: "Sante's Hermit Cookie Recipe",
    ingredients:
      "1 1/2 cups whole wheat pastry flour (or unbleached all-purpose)\n2 teaspoons aluminum-free baking powder\n1/2 teaspoon fine grain salt\n1/2 teaspoon ground cloves\n1 teaspoon ground cinnamon\n1 teaspoon ground allspice\n1/2 cup unsalted butter, room temperature\n1 cup natural cane sugar, sift out any chunks\n1 large egg\n1 teaspoon pure vanilla extract\n1 cup currants\n1 cup walnuts, chopped\n1/4 cup milk\n1 cup organic powdered sugar, sifted\n4 - 5 tablespoons heavy cream\n1 teaspoon pure vanilla extract",
    url: "http://www.101cookbooks.com/archives/santes-hermit-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/hermit_cookie_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes about three dozen hermits.",
    datePublished: "2008-12-17",
    prepTime: "",
    description:
      "My friend Sante shared his hermit recipe with me - a simple, drop-style, spice cookie loaded with tiny currants, chopped walnuts, and finished with a bit of icing.",
  },
  {
    name: "Triple Ginger Cookies",
    ingredients:
      "1/2+ cup large-grain sugar (i.e. turbinado)\n2 cups spelt flour OR whole wheat pastry flour\n1 teaspoons baking soda\n1 teaspoon star anise, finely ground\n4 1/2 teaspoons ground ginger\n1/2 teaspoon fine grain sea salt\n1 stick (1/2 cup) unsalted butter, room temperature\n1/4 cup unsulphured molasses (I use Wholesome Sweeteners brand)\n2/3 cup fine grain natural cane sugar, sifted\n1 1/2 tablespoons fresh ginger, peeled and grated\n1 large egg, well beaten\n1 cup crystallized ginger, then finely minced\n2 lemons, zest only",
    url: "http://www.101cookbooks.com/archives/triple-ginger-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/ginger_cookies.jpg",
    cookTime: "",
    recipeYield: "Makes about 4 dozen or so. ",
    datePublished: "2009-01-14",
    prepTime: "",
    description:
      "This ginger cookie recipe is made special with three kinds of ginger and a hint of lemon zest. Cracked and sugar-crusted on the outside, dense and moist within.",
  },
  {
    name: "Itsy Bitsy Chocolate Chip Cookie Recipe",
    ingredients:
      "5 ounces good-quality semi-sweet chocolate bar (Scharffen Berger 62%)\n1 cup whole wheat pastry flour\n1/2 teaspoon baking powder \n1/2 teaspoon baking soda \n1/2 teaspoon salt \n1 cup old-fashioned rolled oats\n1/2 cup walnuts, very, very finely chopped (by hand)\n1/2 cup unsalted butter, at room temperature\nscant 1 cup natural cane sugar (or brown sugar)\nscant 1 tablespoon organic unsulphured molasses (blackstrap)\n1 large egg\n1 1/2 teaspoon vanilla extract \n1/4 cup large-grain sugar (for ex: turbinado)",
    url: "http://www.101cookbooks.com/archives/itsy-bitsy-chocolate-chip-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/itsy_chocolate_chip_cookie_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes about 12 dozen tiny, bite-sized cookies.",
    datePublished: "2009-02-04",
    prepTime: "",
    description:
      "The perfect bite-sized chocolate chip cookie. Tiny, thin, golden, crisp, a bit nutty with plenty of shaved chocolate.",
  },
  {
    name: "Nut and Seed Biscotti Recipe",
    ingredients:
      "1 1/3 cups white whole wheat flour\n2 cups mixed nuts and seeds (see head notes)\nscant 1/2 teaspoon fine grain sea salt\n2 large eggs\n2/3 cup natural cane sugar, fine grain\n1/4 cup extra-virgin olive oil",
    url: "http://www.101cookbooks.com/archives/nut-and-seed-biscotti-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/nut_seed_biscotti_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes 1 1/2 - 2 dozen.",
    datePublished: "2009-03-02",
    prepTime: "",
    description:
      "Thin, biscotti-style crackers densely pebbled with all manner of nuts and seeds - green pistachios, rust-toned hazelnuts, and off-black poppy seeds.",
  },
  {
    name: "Honey-sweetened Thumbprint Cookie Recipe",
    ingredients:
      "2/3 cup honey (I use a clover honey)\n1/3 cup warm coconut oil or clarified butter\n1 1/2 teaspoon vanilla extract\n1 1/2 cups whole wheat pastry flour\n3/4 cup rolled oats\n1 tablespoon all natural cornstarch (or arrowroot)\nscant 1/2 teaspoon fine grain sea salt\n1/4 teaspoon baking soda\nzest of one lemon\nyour favorite jam or preserves (preferably fruit sweetened) - berry goes nicely",
    url: "http://www.101cookbooks.com/archives/honeysweetened-thumbprint-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/thumbprint_cookies.jpg",
    cookTime: "",
    recipeYield: "Makes a few dozen cookies.",
    datePublished: "2009-03-05",
    prepTime: "",
    description:
      "A simple thumbprint cookie recipe. Made with whole wheat pastry flour and oats, and sweetened with honey instead of granulated sugar.",
  },
  {
    name: "Carrot Oatmeal Cookie Recipe",
    ingredients:
      "1 cup whole wheat pastry flour\n1 teaspoon baking powder\nscant 1/2 teaspoon fine grain sea salt\n1 cup rolled oats\n2/3 cup chopped walnuts\n1 cup shredded carrots\n1/2 cup real maple syrup, room temperature\n1/2 cup unrefined (fragrant) coconut oil, warmed until just melted\n1 teaspoon grated fresh ginger",
    url: "http://www.101cookbooks.com/archives/carrot-oatmeal-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/carrot_oatmeal_cookie_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2009-03-26",
    prepTime: "",
    description:
      "One of my favorite cookies - a carrot oatmeal cookie sweetened with maple syrup. They are made with fragrant coconut oil, plenty of chopped walnuts, rolled oats, and a bit of fresh ginger. They also happen to be egg-free and vegan.",
  },
  {
    name: "Basic Chocolate Cake Recipe",
    ingredients:
      "2 1/2 cups whole wheat pastry flour\n3/4 cup non-alkaline/non-Dutched cocoa powder (I use Dagoba)\n1 tablespoon baking powder (look for non-aluminum type)\n3/4 teaspoon fine grain sea salt\n1/2 cup barely melted unsalted butter (or coconut oil)\n1 cup real maple syrup, room temperature\n2 eggs, lightly beaten\n2 teaspoons vanilla extract\n1 cup coconut milk, room temp\n8 ounces good-quality bittersweet chocolate, shaved or finely chopped\n2 ounces bittersweet chocolate (chopped)\n1/4 cup unsalted butter, room temperature\n1/4 cup maple syrup\n1 cup heavy cream, whipped to stiff peaks",
    url: "http://www.101cookbooks.com/archives/basic-chocolate-cake-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/basic_chocolate_cake_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes one 8x8 or 9x9 cake.",
    datePublished: "2009-04-05",
    prepTime: "",
    description:
      "This is a rich, decadent, but basic chocolate cake recipe. It is chocolate-packed, moist, and not-too-complicated. Baked and served in one pan slathered with a layer of fresh chocolate whipped cream frosting.",
  },
  {
    name: "Carrot Cake Recipe",
    ingredients:
      "2 cups whole wheat pastry flour\n2 1/2 teaspoons baking powder\n1 1/2 teaspoons cinnamon\n3/4 teaspoon fine grain sea salt\n3/4 cup finely chopped walnuts \n4 ounces unsalted butter, heated until just melted\n1/2 cup dried dates, seeded and finely chopped into a paste\n3 ripe bananas (1 1/4 cups), mashed well\n1 1/2 cups grated carrots (about 3 medium)\n1/2 cup plain Greek yogurt (2% or lowfat is ok)\n2 eggs, lightly whisked\n6 ounces cream cheese, room temperature\n3 tablespoons agave nectar or maple syrup (or to taste)",
    url: "http://www.101cookbooks.com/archives/carrot-cake-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/carrot_cake_recipe_09.jpg",
    cookTime: "",
    recipeYield: "Makes one carrot cake.",
    datePublished: "2009-04-26",
    prepTime: "",
    description:
      "An all-natural carrot cake recipe. It is dense, rich, rustic, walnut-studded and carrot-flecked. Sweetened with dates and ripe bananas, it doesn't need any added sugar beyond that. Topped with cream cheese frosting.",
  },
  {
    name: "Yogurt Tartlets Recipe",
    ingredients:
      "1 cup whole wheat pastry flour\n1/3 cup rolled oats\nscant 1/2 teaspoon fine-grain sea salt\n1/3 cup + 1 tablespoon butter, coconut oil, or olive oil\n2 tablespoons maple syrup\n2 tablespoons natural cane sugar (optional)\n1/4 teaspoon toasted sesame oil\n1 cup plain Greek yogurt (I use low-fat here)\n1/4 cup maple syrup\nzest of one lemon\n3 teaspoons fresh ginger juice*\n2 large eggs, lightly beaten\ncrystalized ginger, dried fruit, or fresh fruit/berries for topping\nspecial equipment: 6 small tart (4-inch) pans or I suspect one 9-inch tart pan would be just about right for a single tart.",
    url: "http://www.101cookbooks.com/archives/yogurt-tartlets-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/yogurt_tartlet_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes six 4-inch tartlets.",
    datePublished: "2009-05-03",
    prepTime: "",
    description:
      "These charming little tartlets finish off a meal nicely. Oat-crusted with a creamy, ginger-spiked yogurt filling, they are delightful topped with any number of adornments - fresh berries, dried fruit, or crystallized ginger.",
  },
  {
    name: "Breton Buckwheat Cake with Fleur de Sel",
    ingredients:
      "For the cake:\n7/8 cup (140g) buckwheat flour\n1 cup (140g) all-purpose flour\n1/2 teaspoon plus 1/3 teaspoon fleur de sel\n1/4 teaspoon ground cinnamon\n1/2 pound (240g) unsalted butter, at room temp\n1 cup (200g) sugar\n4 large egg yolks\n1 large egg\n3/4 teaspoon vanilla extract\n2 tablespoons dark rum\nFor the glaze\n1 large egg yolk\n1 teaspoon milk",
    url: "http://www.101cookbooks.com/archives/breton-buckwheat-cake-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/buckwheat_cake_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2009-05-20",
    prepTime: "",
    description:
      "A deliciously dense, buckwheat flour cake that can be baked off in a tart or cake pan. From David Lebovitz's new book, The Sweet Life in Paris.",
  },
  {
    name: "Whole Wheat Oatmeal Chocolate Chip Cookies",
    ingredients:
      "2 3/4 cup /  9 oz  / 255 rolled oats (not instant)\n1 cup / 4.5 oz / 125 g whole wheat flour\n2/3 cup / 1 1/2 oz / 45 g wheat bran (or germ)\n1 teaspoon baking soda\n1 1/2 teaspoons baking powder\n1 teaspoon fine grain sea salt\n1 cup / 8 oz / 225 g unsalted butter\n1 cup / 6.5 oz / 185 g natural cane sugar or light brown sugar\n1 cup / 6 oz / 170 g firmly packed Muscovado or dark brown sugar\n2 large eggs\n2 teaspoons vanilla extract\n10 oz / 285 g semi-sweet chocolate bar, chopped and shaved into chunks and splinters",
    url: "http://www.101cookbooks.com/archives/whole-wheat-oatmeal-chocolate-chip-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/whole_wheat_oatmeal_cookies.jpg",
    cookTime: "PT15M",
    recipeYield: "",
    datePublished: "2010-07-17",
    prepTime: "PT20M",
    description:
      "I'm posting this recipe not because these are the best oatmeal chocolate chip cookies ever of all time. They're good, but...I'm posting the recipe, because they make amazing ice cream sandwich cookies. And it's prime ice cream sandwich season. ",
  },
  {
    name: "Limoncello Macaroons",
    ingredients:
      "1 large egg white\n14 oz / 400g almond paste\n1/2 cup / 2 oz / 55g confectioners' sugar, sifted, plus quite a bit more for surface and coating\n1/4 teaspoon pure almond extract\nscant 2 teaspoons freshly grated lemon zest\n1 tablespoon limoncello\nscant 1/2 teaspoon fine grain sea salt",
    url: "http://www.101cookbooks.com/archives/limoncello-macaroons-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/limoncello_macaroon_recipe.jpg",
    cookTime: "PT15M",
    recipeYield: "",
    datePublished: "2010-09-02",
    prepTime: "PT45M",
    description:
      "A limoncello macaroon recipe along with a batch of photos from a cabin weekend in Mendocino. The cookies are golden-crusted, powder-coated, almond-citrus gems spiked with limoncello liqueur my sister made for me.",
  },
  {
    name: "Olive Biscuit Cookies",
    ingredients:
      "9 tablespoons / 4.5 oz / 130g  unsalted butter, room temperature\n3/4 cup / 3 oz / 85 g powdered sugar, sifted\n1 tablespoon extra-virgin olive oil\n1 1/4 cups / 6.5 oz / 185 g all-purpose flour\n1/2 cup / 2 oz / 55g cured olives, pitted and chopped\ntwo pinches of sea salt",
    url: "http://www.101cookbooks.com/archives/olive-biscuit-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/olive_cookie_recipe.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2010-09-21",
    prepTime: "PT60M",
    description:
      "Adapted from a Susan Herrmann Loomis recipe - charming, snappy, salty-sweet olive-flecked shortbread deliciousness. Quirky yet sophisticated, they exist in some middle Earth realm between cracker and cookie. ",
  },
  {
    name: "Pumpkin and Feta Muffins",
    ingredients:
      "1 tablespoon unsalted butter\n2 tablespoons olive oil\n2 cups / 9 oz / 255g cubed pumpkin or butternut squash, 1/2-inch cubes\nsalt and pepper to taste\n1 large handful of baby spinach, chopped\n2 tablespoons chopped parsley or cilantro\n3 tablespoons sunflower seeds kernels\n3/4 cup / 1 oz / 30g freshly grated Parmesan\n100g / 3.5 oz / 1/2 cup cubed feta\n2 teaspoons whole-grain mustard\n2 large eggs, lightly beaten\n3/4 cup / 180 ml milk\n2 cups flour (see headnote!)\n4 teaspoons aluminum free baking powder\n1 teaspoon fine-grain sea salt",
    url: "http://www.101cookbooks.com/archives/pumpkin-and-feta-muffins-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/pumpkin_feta_muffins.jpg",
    cookTime: "PT60M",
    recipeYield: "",
    datePublished: "2010-10-08",
    prepTime: "PT20M",
    description:
      "Savory muffins packed with spinach, feta and Parmesan cheeses, black pepper, mustard, and sunflower seeds. Adapted from a recipe in a lovely little self-published Australian cookbook, Martha Goes Green.",
  },
  {
    name: "Oat Soda Bread Recipe",
    ingredients:
      "butter, to grease pan\n2 cups / 7 oz rolled oats\n10 ounces / 285 g / ~2 1/4 cups unbleached all-purpose flour, plus more for dusting and kneading\n1 3/4 teaspoons baking soda\n1 1/4 teaspoons fine-grain sea salt\n1 3/4 cups / 415 ml buttermilk, plus more if needed, and 2T. for brushing\nmixed seeds - sesame, caraway, poppy, etc.",
    url: "http://www.101cookbooks.com/archives/oat-soda-bread-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/oat_soda_bread_recipe.jpg",
    cookTime: "PT50M",
    recipeYield: "Makes one loaf.",
    datePublished: "2011-01-11",
    prepTime: "PT10M",
    description:
      "A rustic oat soda bread you can make in less than an hour. Seriously. Made from a simple ingredient list of rolled oats, flour, baking soda, salt, and buttermilk.",
  },
  {
    name: "Whole Wheat Chocolate Chip Skillet Cookie",
    ingredients:
      "3 cups / 13.5 oz / 380 g whole-wheat flour\n1 1/2 teaspoon baking powder\n1 teaspoon baking soda\n1 1/4 teaspoon fine grain sea salt\n8 ounces / 225 g (2 sticks) cold unsalted butter, cut into 1/2-inch pieces, plus more for buttering the pan\n1 cup / 5 oz / 140 g dark brown sugar\n1 cup / 7 oz / 200 g sugar\n2 large eggs\n2 teaspoons pure vanilla extract\n8 ounces / 225 g bittersweet chocolate, roughly chopped into 1/4- and 1/2-inch pieces",
    url: "http://www.101cookbooks.com/archives/whole-wheat-chocolate-chip-skillet-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/whole_wheat_chocolatechip_skillet_cookies.jpg",
    cookTime: "PT30M",
    recipeYield: "",
    datePublished: "2011-02-08",
    prepTime: "PT10M",
    description:
      "Made using 100% whole wheat flour and hand-chopped chocolate chips, this is a skillet-baked twist on Kim Boyce's celebrated Chocolate Chip Cookies.",
  },
  {
    name: "Toasted Almond Sables Cookies",
    ingredients:
      "1 cup / 4.5 oz / 130 g unbleached all-purpose flour\nScant 1 cup / 4 oz / 115g whole wheat flour\n1/2 pound (2 sticks) salted butter, softened\n1/2 cup / 3.5 oz / 100 g sugar\n1/4 teaspoon fine sea salt\n1 teaspoon pure vanilla extract\n1/3 cup / 1 oz / 30 g lightly toasted sliced almonds\n1/2 cup / 2.5 oz / currants\nlarge grain sugar, for sprinkling",
    url: "http://www.101cookbooks.com/archives/toasted-almond-sables-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/almond_sable_cookies_recipe.jpg",
    cookTime: "PT15M",
    recipeYield: "",
    datePublished: "2011-03-31",
    prepTime: "PT120M",
    description:
      "Toasty, nutty sable cookies made with whole wheat flour, sliced almonds, currents and salted butter. And a peek at some of my favorite vintage cookie cutters.",
  },
  {
    name: "Oatmeal Muffins",
    ingredients:
      "Crumble topping:\nscant 3/4 cup / 3 oz / 85 g whole wheat pastry flour\n1/2 cup / 1.5 oz / 45 g rolled oats\n1/2 cup / 2.5 oz / 70 g natural cane or brown sugar\nscant 1/2 teaspoon fine grain sea salt\n1/3 cup / 2.5 oz / 70 g unsalted butter, melted\nMuffin batter:\n1 cup / 3.5 oz / 100 g rolled oats\n3/4 cup / 3.5 oz / 100 g unbleached all purpose flour\n3/4 cup / 3.5 oz / 100 g whole wheat pastry flour\n1/2 teaspoon baking soda\nscant 1/2 teaspoon fine grain sea salt\n7/8 cup / 7 oz /  200 g unsalted butter, plus more for greasing pan\n1/2 cup / 2.5 oz / 70 g natural cane or brown sugar\n1 1/2 cups / 12 oz / 350 ml plain yogurt\n2 large eggs, whisked",
    url: "http://www.101cookbooks.com/archives/oatmeal-muffins-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/oatmeal_muffins.jpg",
    cookTime: "PT35M",
    recipeYield: "Makes about 1 1/2 dozen muffins.",
    datePublished: "2011-06-06",
    prepTime: "PT10M",
    description:
      "A crumble-topped muffin recipe made with an oatmeal and yogurt base. Craggy, golden-topped, the last thing I'll bake before moving on to a new oven.",
  },
  {
    name: "Easy Little Bread Recipe",
    ingredients:
      "1 1/4 cups / 300 ml warm water (105-115F)\n2 teaspoons active dry yeast (one packet)\n1 tablespoon runny honey\n1 cup / 4.5 oz / 125 g unbleached all-purpose flour\n1 cup / 5 oz / 140 g whole wheat flour\n1 cup / 3.5 oz / 100 g rolled oats (not instant oats)\n1 1/2 teaspoons fine grain sea salt\n2 tablespoons butter, melted, for brushing",
    url: "http://www.101cookbooks.com/archives/easy-little-bread-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/easy_little_bread_recipe.jpg",
    cookTime: "PT35M",
    recipeYield: "",
    datePublished: "2011-08-03",
    prepTime: "PT10M",
    description:
      "The bread you should make right this minute -  yeast-based, farm-style, made from rolled oats and a blend of all-purpose and whole wheat flours.",
  },
  {
    name: "Maple Buttermilk Pie",
    ingredients:
      "Flaky Rye Pie Dough\n75 g / v. scant 2/3 cup rye flour\n175g / 1 1/2 cups unbleached all-purpose flour\n1/4 teaspoon fine grain sea salt\n8 oz / 1 cup salted butter\n1/4 - 1/3 cup / 60 - 80 ml cold water or beer\nzest of one lemon\n2 tablespoons brown sugar\n6 egg yolks\n1/4 cup flour\n2/3 cup maple syrup (pref. grade b)\n2 cups buttermilk\n1 teaspoon vanilla extract\nscant 1/2 teaspoon fine grain sea salt\nLarge grain sugar, for sprinkling",
    url: "http://www.101cookbooks.com/archives/maple-buttermilk-pie-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/maple_buttermilk_pie_recipe.jpg",
    cookTime: "PT30M",
    recipeYield: "Serves 8.",
    datePublished: "2011-09-30",
    prepTime: "PT60M",
    description:
      "A sweet little buttermilk pie I made. The filling is pure, creamy, maple-kissed tanginess, and simple to pull together.",
  },
  {
    name: "Baked Quinoa Patties",
    ingredients:
      "2 1/2 cups / 12 oz /340 g cooked quinoa, at room temperature*\n5 large eggs, lightly beaten\n1/2 teaspoon fine-grain sea salt\n1/3 cup/ .5 oz /15 g finely chopped fresh chives\n1/3 cup /.5 oz /15 g finely chopped fresh dill\n1 cup / 1.5 oz /45 g finely chopped kale\n1 yellow or white onion, finely chopped\n3 cloves garlic, finely chopped\n1 teaspoon (toasted) cumin\n1 teaspoons baking powder\n1 cup / 3.5 oz /100 g whole grain bread crumbs, plus more if needed\nwater or a bit of flour, if needed\n1/3 cup / .5 oz / 15 g crumbled feta\n1 tablespoon extra-virgin olive oil or clarified butter",
    url: "http://www.101cookbooks.com/archives/baked-quinoa-patties-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/baked_quinoa_patties.jpg",
    cookTime: "PT25M",
    recipeYield: "Makes about a dozen patties.",
    datePublished: "2011-10-11",
    prepTime: "PT10M",
    description:
      "A few London pics, a look at how I packed my lunch for the flight, and the baked quinoa patties I brought along with me - dill, feta, chives, cumin, and garlic.",
  },
  {
    name: "Lemony Olive Oil Banana Bread",
    ingredients:
      "1 cup / 4.5 oz / 125g all-purpose flour\n1 cup / 5 oz / 140g  whole wheat flour\n3/4 cup / 4.5 oz / 125 g dark muscovado or dark brown sugar\n3/4 teaspoon baking soda\n1/2 teaspoon kosher salt\n1 cup / 4 oz / 115 g coarsely chopped bittersweet chocolate\n1/3 cup / 80 ml extra-virgin olive oil\n2 large eggs, lightly beaten\n1 1/2 cups / 12 oz / 340 g mashed, VERY ripe bananas (~3 bananas)\n1/4 cup / 60 ml plain, whole milk yogurt\n1 teaspoon freshly grated lemon zest\n1 teaspoon vanilla extract\n\u00a0For the glaze:\n1/2 cup / 3 oz / 85 g sifted dark muscovado or dark brown sugar\n1/2 cup / 2 oz / 55g confectioners' sugar\n4 teaspoons freshly squeezed lemon juice",
    url: "http://www.101cookbooks.com/archives/lemony-olive-oil-banana-bread-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/lemon_banana_bread_recipe.jpg",
    cookTime: "PT50M",
    recipeYield: "",
    datePublished: "2011-11-02",
    prepTime: "PT10M",
    description:
      "A moist, ridiculously good banana bread recipe. A banana bread that is chocolate studded, lemon kissed, and made with whole wheat flour (and olive oil!) - from Melissa Clark's new book. Plus pics from a a beautiful wedding I attended at an off-season summer camp.\n",
  },
  {
    name: "Black Sticky Gingerbread Recipe",
    ingredients:
      "1 cup / 8 oz / 225 g unsalted butter\n1/2 cup / 120 ml water\n3/4 cup / 180 ml unsulphured blackstrap molasses\u2028\n3/4 cup / 180 m flavorful, real honey\n1 cup / 5 1/2 oz / 155 g tightly packed dark brown / Muscovado sugar \u2028\n3 cups / 13 1/2 oz / 385 g  whole wheat pastry flour (or all-purpose flour)\u2028\n1 1/2 teaspoons baking soda \u2028\n1/2 teaspoon salt \u2028\n2 teaspoons ground ginger \u2028\n2 teaspoons ground cinnamon \u2028\n1/2 teaspoon allspice\u2028\n1/4 teaspoon ground cloves \n\u20283 large eggs, at room temperature\u2028\n1/2 cup / 120 ml milk\n\u20281 packed tablespoon grated fresh ginger root\nLightly sweetened whipped cream, to serve",
    url: "http://www.101cookbooks.com/archives/black-sticky-gingerbread-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/gingerbread_recipe.jpg",
    cookTime: "PT60M",
    recipeYield: "Serves 12-16.",
    datePublished: "2011-12-11",
    prepTime: "PT15M",
    description:
      "This black sticky gingerbread recipe makes an outrageously dark, dense, flavorful and delicious cake. The burnt-caramel-esque crust that forms on the top of the cake is part of what makes this recipe a keeper.",
  },
  {
    name: "Black Bread",
    ingredients:
      "2 1/4 teaspoons active dry yeast\n320 - 400 ml warm water (105 - 115F)\n1 teaspoon natural cane sugar / brown sugar\n2 tablespoons cocoa powder\n2 tablespoons finely ground espresso beans\n1/4+ cup / 70 ml molasses\n3 teaspoons caraway seeds, plus more for topping\n3 tablespoons unsalted butter, cut into pieces\n2 teaspoons fine grain sea salt\n~2 cups / 150 g coarsely grated carrot (2 large)\n1 1/3 cup / 150 g rye flour\n~3 1/4 cup / 15 oz / 425 g bread flour (or unbleached all -purpose flour), plus more for dusting\nolive oil for kneading and oiling baking sheet\n2 tablespoons buttermilk, water, or milk",
    url: "http://www.101cookbooks.com/archives/black-bread-recipe.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/black_bread.jpg",
    cookTime: "PT45M",
    recipeYield: "",
    datePublished: "2012-01-12",
    prepTime: "PT245M",
    description:
      "A hearty black bread - caraway-crusted, and flecked with dashes of grated carrot. It's dark, dense with rye, and perfect when toasted then topped with a fat smear of dill butter. ",
  },
  {
    name: "Chocolate Bundt Cake",
    ingredients:
      "Chocolate Bundt Cake:\n2 cups / 475 ml chocolate porter or stout beer\n8 tablespoons unsalted butter, plus more for the pan\n3/4 cup / 75g natural cocoa powder (non-dutched)\n1 cup / 5 oz / 140 g whole wheat flour\n1 cup / 4.5 oz / 125 g all-purpose flour\n1 cup / 4.25 oz  / 120 g muscovado or dark brown sugar\n1 1/2 teaspoons baking soda\n3/4 teaspoon fine grain sea salt\n3 large eggs\n1 1/2 cups / 355 ml plain whole yogurt\n3/4 cup / 180 ml pure maple syrup\nChocolate Buttermilk Icing:\n3/4 cup / 2.75 oz / 75 g powdered sugar\n1/4 cup / 25g natural cocoa powder (non-dutched)\n2 tablespoons buttermilk\nflaky sea salt, to serve",
    url: "http://www.101cookbooks.com/archives/chocolate-bundt-cake-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/chocolate_bundt_cake_recipe.jpg",
    cookTime: "PT45M",
    recipeYield: "Makes one chocolate bundt cake.",
    datePublished: "2012-03-15",
    prepTime: "PT25M",
    description:
      "I took slices of this chocolate bundt cake on a road trip to Portland this week. Slathered with chocolate buttermilk icing, it's a great travel treat made with a blend of whole wheat and all-purpose flours, lots of yogurt, and the darkest brown sugar I can get my hands on.",
  },
  {
    name: "Homemade Cheese Crackers",
    ingredients:
      "3 tablespoons unsalted butter, cut into 1/2-inch cubes, plus additional for baking sheets\n1 1/2 cups / 7 oz / 200g whole wheat pastry flour, plus more for the counter\n1 teaspoon dry mustard powder\n1 teaspoon fine grain sea salt\n6 ounces / 170 g Cheddar cheese, grated\n2 teaspoons white wine vinegar\n1 ice cube\nseeds (optional)",
    url: "http://www.101cookbooks.com/archives/homemade-cheese-crackers-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cheese_cracker_recipe.jpg",
    cookTime: "PT25M",
    recipeYield: "",
    datePublished: "2012-04-21",
    prepTime: "PT120M",
    description:
      "Inspired by a recipe from Alana Chernila's The Homemade Pantry, these are the cheese crackers I made for my nephew (in owl shapes!) when he came to stay with us last week.",
  },
  {
    name: "Rose Petal Granola",
    ingredients:
      "4 cups / 14 oz / 400 g rolled oats\u2028\n1 1/2 cups / 6 oz / 170 g walnut halves\n\u20281/2 teaspoon fine-grain sea salt\n1/8 teaspoon freshly ground pepper\n\u20282/3 cup / 3 oz / 85 g dried currants\ndried petals from a dozen (or so) small roses\n\u20281/2 cup  / 4 oz unsalted butter\n\u20281/2 cup / 120 ml honey\n1/2 teaspoon rose water\n1 egg white (large egg), optional",
    url: "http://www.101cookbooks.com/archives/rose-petal-granola-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/arctic_rose_granola_recipe.jpg",
    cookTime: "PT40M",
    recipeYield: "Makes about 7 cups.",
    datePublished: "2012-06-19",
    prepTime: "PT5M",
    description:
      "A variation on the granola from my last book - this time with rose petals, walnuts, currants, and black pepper.",
  },
  {
    name: "Whole Vanilla Bean Cookies",
    ingredients:
      "1/2 cup+ / 2.5 oz /70 g powdered sugar\nscant 1/4 cup  / 1 1/2 oz / 45 g granulated sugar\n1 pliable vanilla bean, cut into segments, ends trimmed if tough\n1/4 teaspoon fine grain sea salt\n8 tablespoons / 4 oz  / 115 g unsalted butter, room temperature, cut into chunks\n\u20281/2 teaspoon vanilla extract\n\u20281/2 cup / 2 oz / 55g rye flour\n1/2 cup / 2.5 oz / 70 g  all-purpose flour\na touch of sugar/salt for topping",
    url: "http://www.101cookbooks.com/archives/whole-bean-vanilla-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/whole_vanilla_bean_cookies.jpg",
    cookTime: "PT15M",
    recipeYield: "Makes about 2 dozen small cookies.",
    datePublished: "2012-07-18",
    prepTime: "PT45M",
    description:
      "Snappy, small, fragrant, vanilla wafer cookies made with a whole vanilla pod. The entire thing!",
  },
  {
    name: "Tomato Tarte Tatin Recipe",
    ingredients:
      "2 medium yellow onions, chopped\n2 tablespoons extra-virgin olive oil or clarified butter\n1 1/2 pounds / 24 oz small tomatoes (here it's a mix of heirloom cherry &amp; early girls)\nscant 1/2 teaspoon fine grain sea salt\n2 teaspoons balsamic vinegar\na bit of flour\nzest of one lemon\n1 pie crust, this rye crust is my go-to\n1 egg whisked with a tablespoon of water",
    url: "http://www.101cookbooks.com/archives/tomato-tarte-tatin-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/tomato_tarte_tatin_recipe.jpg",
    cookTime: "PT45M",
    recipeYield: "Serves 6-8.",
    datePublished: "2012-08-15",
    prepTime: "PT10M",
    description:
      "A simple savory tomato tarte tatin made with ripe market tomatoes, plenty of caramelized onions, a wee splash of balsamic vinegar, and whatever pie dough you might have on hand (or in the freezer)...",
  },
  {
    name: "Sesame Banana Bread",
    ingredients:
      "1 cup / 4.5 oz / 125g all-purpose flour\u2028\n1 cup / 5 oz / 140g whole wheat flour\u2028\n3/4 cup / 4.5 oz / 125 g dark brown sugar (or muscovado)\n\u20283/4 teaspoon baking soda\u2028\n1/2 teaspoon fine grain sea salt\n\u20281 1/3 cups / 7 ounces / 200 g toasted sesame seeds\n\u20281/3 cup / 80 ml extra-virgin olive oil\n\u20282 large eggs, lightly beaten\n\u20281 1/2 cups / 12 oz / 340 g mashed, VERY ripe bananas (~3 bananas)\u2028\n1/4 cup / 60 ml plain, whole milk yogurt\u2028\n1 teaspoon freshly grated lemon zest\u2028\u2028\u00a0\n\u2028For the glaze:\n\u20281/2 cup / 3 oz / 85 g sifted dark brown sugar (muscovado)\u2028\n1/2 cup / 2 oz / 55g confectioners' sugar\u2028\n4-6 teaspoons freshly squeezed lemon juice",
    url: "http://www.101cookbooks.com/archives/sesame-banana-bread-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/sesame_banana_bread_recipe.jpg",
    cookTime: "PT45M",
    recipeYield: "",
    datePublished: "2012-09-03",
    prepTime: "PT10M",
    description:
      "A banana bread absolutely packed with sesame seeds, made with a blend of whole wheat and white flour, yogurt, ripe bananas, and lemon zest.",
  },
  {
    name: "Saffron-Vanilla Snickerdoodles",
    ingredients:
      "about 30 threads of saffron (to yield 1/8 teaspoon ground saffron)\n1/2 vanilla bean\n2 tablespoons milk\n2 cups (9.9 oz / 280 g) all-purpose flour\n1 teaspoon baking soda\n1/2 cup (4 oz / 113 g) unsalted butter, at room temperature\n1/2 cup (3.5 oz / 100 g) granulated sugar\n1/2 cup (3.8 oz / 109 g) packed light brown sugar\n1 teaspoon kosher salt\n1 egg (1.8 oz / 50 g), at room temperature\n1/2 teaspoon vanilla extract",
    url: "http://www.101cookbooks.com/archives/saffronvanilla-snickerdoodles-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/saffron_vanilla_snickerdoodles_recipe.jpg",
    cookTime: "PT20M",
    recipeYield: "",
    datePublished: "2012-09-19",
    prepTime: "PT20M",
    description:
      "The Saffron-Vanilla Snickerdoodle recipe from The Blue Bottle Craft of Coffee: Growing, Roasting, and Drinking, with Recipes.\n\n",
  },
  {
    name: "Whole Wheat Blackberry Ricotta Scones",
    ingredients:
      "1 cup (120 grams) whole-wheat flour\n1 cup (125 grams) all-purpose flour\n1 tablespoon (15 grams) baking powder, preferably aluminum-free\n1/4 cup (50 grams) sugar\n1/2 teaspoon fine grain sea salt\n6 tablespoons (3 ounces or 85 grams) unsalted butter, chilled\n1 cup (4 3/4 ounces or 135 grams) fresh blackberries\n3/4 cup (190 grams) whole-milk ricotta\n1/3 cup (80 ml) heavy cream",
    url: "http://www.101cookbooks.com/archives/whole-wheat-blackberry-ricotta-scones-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/ricotta_scone_recipe.jpg",
    cookTime: "PT15M",
    recipeYield: "Makes six extra-large scones.",
    datePublished: "2012-11-13",
    prepTime: "PT5M",
    description:
      "Whole Wheat Raspberry Ricotta Scones - golden-crusted, tender, moist, barely sweet, and streaked with violet swaths and chunks of blackberry. They're beautiful.",
  },
  {
    name: "Thinnest Oatmeal Cookies",
    ingredients:
      "1 tablespoon whole wheat flour\n1 teaspoon baking powder\n1/4 teaspoon fine grain sea salt\n1 teaspoon fennel seeds, crushed\n4 teaspoons poppy seeds\n1/2 cup unsalted butter\n1 1/2 cup / 5 oz uncooked rolled oats (not instant)\n1 egg, room temperature\n2/3 cup / 4 oz natural cane sugar",
    url: "http://www.101cookbooks.com/archives/thinnest-oatmeal-cookies-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/thin_oatmeal_cookies.jpg",
    cookTime: "PT10M",
    recipeYield: "Makes about 2 dozen cookies.",
    datePublished: "2012-12-14",
    prepTime: "PT10M",
    description:
      "One of the easiest cookies I know how to make - made from rolled oats, they're razor thin and lacy, golden, freckled with poppy seeds, with and anise accent from crushed fennel seeds.",
  },
  {
    name: "Buttermilk Berry Muffins",
    ingredients:
      "1 1/4 cups / 5 1/2 oz / 160 g whole wheat pastry flour\n2 1/4 cups / 10 1/2 oz / 295 g unbleached all-purpose flour\n1/2 cup / 3 1/2 oz / 100 g firmly packed brown sugar\n3/4 teaspoon fine grain sea salt\n1/2 teaspoon baking soda\n2 teaspoons baking powder\n5 1/2 oz mashed, ripe banana (~2 med.)\n240 ml buttermilk\n3 large eggs\n1 teaspoon vanilla extract\n1/2 cup / 4 oz / 115 g unsalted butter, barely melted\n1 cup / 4.5 oz / 125 g berries, plus more for topping\nrose cinnamon sugar*",
    url: "http://www.101cookbooks.com/archives/buttermilk-berry-muffins-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/buttermilk_berry_muffin_recipe.jpg",
    cookTime: "PT30M",
    recipeYield: "Makes 1 - 1 1/2 dozen, depending on size.",
    datePublished: "2013-03-12",
    prepTime: "PT10M",
    description:
      "Beautiful buttermilk muffins - berry-streaked with sugar-sparkled tops, big flavor, and buttermilk-tender texture.",
  },
  {
    name: "Herbed Buttermilk Popcorn Recipe",
    ingredients:
      "1 tablespoon powdered buttermilk\n1 teaspoon garlic powder\n1 teaspoon onion powder\n1 teaspoon lemon pepper\n1/2 teaspoon dried dill weed\n1/2 teaspoon powdered chicken bouillon or kosher salt\n1 tablespoon corn oil\n1/3 cup popcorn kernals\n2 tablespoons unsalted butter",
    url: "http://www.101cookbooks.com/archives/000131.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/buttermilkpop.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2004-12-07",
    prepTime: "",
    description:
      "The seasoning from this popcorn recipe hits you in waves - the smell of the dill, the tang of the buttermilk powder, a bit of kick from the onion and garlic powder. You'll never go back to the movie theatre variety.",
  },
  {
    name: "Herb Jam with Olives and Lemon Recipe",
    ingredients:
      "4 large cloves garlic, halved\n1 pound baby spinach leaves\n1 large bunch flat-leaf parsley, stems discarded \n1/2 cup celery leaves, coarsely chopped\n1/2 cup cilantro leaves , stemmed\n1/4 cup extra-virgin olive oil\n12 oil-cured black olives, pitted, rinsed, coarsely chopped \n1 1/4 teaspoons Spanish sweet smoked paprika (pimenton de la Vera)\nPinch of cayenne\nPinch of ground cumin\n1 tablespoon lemon juice, or more to taste \nSalt and freshly ground pepper",
    url: "http://www.101cookbooks.com/archives/000143.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/herbjam.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-02-09",
    prepTime: "",
    description:
      "A Paula Wolfert recipe - this is a fantastic Moroccan spread made of a thick mash of herbs and greens, accented with smokey spices, chopped olives, and lemon.",
  },
  {
    name: "Simple, Perfect Peas with Butter and SaltSpring Pea slathered CrostiniHand-cut Chive Raviolis bursting with Sweet English Pea PureeMy Well-behaved (now more nutritional) Pasta DoughA Tasty Green Tart that should've had a Different Crust",
    ingredients:
      "1 standard brown paper lunch bag full of fresh English peas (still in their pods) - I'm guessing a pound or two\nSqueeze of lemon juice\n1/2 cup toasted pine nuts\n1/2 cup FRESHLY shredded parmesan\ntiny pinch of cayenne\nlemon zest\nsalt to taste\n1 cup durum wheat flour (semolina also works great, but not as nutritious)\n2 cups all-purpose flour\n1 1/2 t. salt\n4 eggs\n1 T. extra-virgin olive oil\nHandful of chives (optional - this is where you can add any herbs, spices, or other flavorings)",
    url: "http://www.101cookbooks.com/archives/000161.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/freshpeas.jpg",
    cookTime: "",
    recipeYield: "Makes about 1 1/2 to 2 cups of puree.",
    datePublished: "2005-04-25",
    prepTime: "",
    description:
      "I went to the market and came back with fresh peas - here's how I cooked them. Pea recipes, time four.",
  },
  {
    name: "Beluga Lentil Crostini Recipe",
    ingredients:
      "1 lb. black beluga lentils\n1 sweet baguette, sliced thinly into 1/6th-inch rounds\n1/3 cup extra-virgin olive oil or melted clarified butter\n1/2 t. fine-grain sea salt\n8 ounces spreadable goat cheese\na small splash of milk\n3-4 large cloves of garlic\n2 big bunches of chives\nmore salt to taste",
    url: "http://www.101cookbooks.com/archives/000280.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/crostinirecipe_05.jpg",
    cookTime: "",
    recipeYield:
      "Makes about 5 dozen. You will have plenty of lentils leftover to experiment with....",
    datePublished: "2005-07-23",
    prepTime: "",
    description:
      "This has become one of my favorite crostini recipes - goat cheese, black beluga lentils, and chives on garlic-rubbed crostini.",
  },
  {
    name: "Heirloom Tomato Tart in a Parmesan Crust",
    ingredients:
      "6 perfect, colorful, medium-sized heirloom tomatoes - washed and sliced 1/6-inch thick\n1 t. fine-grain sea salt\n1/2 cup unbleached all-purpose flour\n1/2 cup whole wheat flour\n1/2 cup unsalted organic butter, well chilled + cut into 1/4-inch cubes\n4-ounce chunk of good fresh Parmesan, microplane-grated (you should end up with about 2 cups loosely packed grated cheese. Save any leftover grated cheese for sprinkling on the crusts when they come out of the oven.\n2 T. ice cold water\n2T. best quality extra virgin olive oil\n1/4 cup slivered basil\nSpecial equipment: tart pan(s),  pie weights, paper towels",
    url: "http://www.101cookbooks.com/archives/000283.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/heirloomtart.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2005-08-05",
    prepTime: "",
    description:
      "A knock-out tomato tart recipe - it highlights the flavor and vibrancy of the tomatoes while remaining mush-free.",
  },
  {
    name: "Spiced Candied Walnuts Recipe",
    ingredients:
      "Peanut or canola oil for deep-frying (hs note: has anyone seen an organic peanut oil out there?)\nFinely ground sea salt, preferably gray salt \nFreshly ground black pepper \n1/2 teaspoon ground cinnamon \n1/2 teaspoon cayenne pepper \n4 cups walnut halves \n1 cup confectioners' sugar, sifted\n2 cans (15 1/2 ounces each) chickpeas (garbanzo beans) \n3/4 cup buttermilk\n3/4 cup olive oil\n1 1/2 cups 1Arborio Rice Coating (below)\n1/4 cup thinly sliced garlic \n15 fresh sage leaves\n2 teaspoons thin serrano chili slices (optional) \nFinely ground sea salt, preferably gray salt \nZest of 1 lemon, cut into julienne \nFreshly ground black pepper\n1 cup Arborio rice \n3 cups unbleached all-purpose flour \n1 cup semolina flour \n2 tablespoons finely ground sea salt, preferably gray salt \n1 teaspoon freshly ground black pepper ",
    url: "http://www.101cookbooks.com/archives/001033.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/candiedwalnutrecipe.jpg",
    cookTime: "",
    recipeYield: "Makes 4 cups.Makes about 5 cups.",
    datePublished: "2005-12-30",
    prepTime: "",
    description:
      "This candied walnut recipe was is the perfect solution to a New Years Eve hors d'oeuvres dilemma. Made with walnuts, sea salt, black pepper, cinnamon, cayenne pepper, and powdered sugar.",
  },
  {
    name: "Whipped Chickpea Hummus Recipe",
    ingredients:
      "Crostini:\n1 sweet baguette, cut into 1/4-inch thick slices\n3 tablespoons olive oil\na couple pinches of salt\n1 large garlic clove, peeled.\nChickpea spread:\n1 cup dried chickpeas, rinsed and picked over\n1 small new potato (Yukon Gold, Yellow Fin, etc), peeled and quartered\n5-6 handfuls of spinach, washed well\n1 small red onion, chopped\nzest of one lemon\njuice of 1/2 lemon, approx.\nsalt and pepper\n1/4 cup extra virgin olive oil\nwarm water\nchives for garnish (opt)",
    url: "http://www.101cookbooks.com/archives/001393.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/chickpeahummusrecipe1.jpg",
    cookTime: "",
    recipeYield: "Serves many.",
    datePublished: "2006-04-15",
    prepTime: "",
    description:
      "Actually two different takes on hummus. One with an Italian twist, and one a lovely shade of green from the incorporation of a bit of sauteed spinach.",
  },
  {
    name: "Dukkah Recipe",
    ingredients:
      "1/2 cup hazelnuts\n1/4 cup coriander seeds\n3 tablespoons sesame seeds\n2 tablespoons cumin seeds\n1 tablespoon black peppercorns\n1 teaspoon fennel seeds\n1 teaspoon dried mint leaves\n1 teaspoon salt",
    url: "http://www.101cookbooks.com/archives/001416.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/dukkah_recipe_3.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2006-06-07",
    prepTime: "",
    description:
      "Great for dipping with olive oil, this dukkah recipe is a crumbly nut and spice blend typically associated with Egypt - hazelnuts, cariander seeds, sesame seeds, cumin seeds, black peppercorns, fennel seeds, dried mint leaves, and salt.",
  },
  {
    name: "Animal Cracker Recipe",
    ingredients:
      "1 packet of extra-large wonton wrappers\n1/4 cup natural sugar, evaporated cane sugar\n1 1/2 teaspoons ground ginger\n1/4 teaspoon fine grain sea salt\n1 organic egg\ntiny splash of heavy cream\n1/4 cup mixed seeds\nSpecial equipment: cookie cutters",
    url: "http://www.101cookbooks.com/archives/001444.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/animal_cracker_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2006-07-09",
    prepTime: "",
    description:
      "Make crispy crackers from wonton wrappers. The great thing about this cracker recipe is the way the wrappers provide a quick and easy blank canvas to experiment with - sweet or savory, spicy or seedy - there are countless directions to explore.",
  },
  {
    name: "Cheesy, Heirloom, Panini Batons",
    ingredients:
      "1 clove of garlic\n2 tablespoons of extra-virgin olive oil\n1 cup ricotta cheese\n1/2 cup fresh basil\n1 bunch of chives\n1/2 teaspoon fine grain sea salt\nMozzarella (preferably water-packed)\nSmall heirloom tomatoes, sliced 1/4-inch thick\n1 flat slab of ciabatta, sturdy foccacia bread, or comparable\nSalt and pepper",
    url: "http://www.101cookbooks.com/archives/001455.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/paninibatons.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2006-07-29",
    prepTime: "",
    description:
      "One-inch wide slabs of toasted, cheesy, heirloom tomato filled deliciousness slathered with a basil-chive ricotta spread. ",
  },
  {
    name: "Baked Polenta Fries Recipe",
    ingredients:
      "2 cups organic milk\n2 cups water\n1 1/2 cups polenta (see above)\n1 teaspoon fine grain sea salt\n1/2 cup grated Parmesan cheese\n1/4 cup melted clarified butter or olive oil",
    url: "http://www.101cookbooks.com/archives/001473.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/bakedpolentafries.jpg",
    cookTime: "",
    recipeYield: "Makes 2 dozen wide-cut fries.",
    datePublished: "2006-08-13",
    prepTime: "",
    description:
      "Great party finger food. A thick slab of polenta is sliced into the shape of a french fry and baked off.  ",
  },
  {
    name: "Sweet &amp; Spicy Pumpkin Seeds",
    ingredients:
      "1 egg white\n1/4 cup natural cane sugar\n1/2 teaspoon cayenne pepper\nscant 1/2 teaspoon fine grained sea salt\n1 cup fresh pumpkin seeds\n1 egg white\n2 teaspoon curry powder\nscant 1/2 teaspoon fine grained sea salt\n1 cup fresh pumpkin seeds\n1 teaspoon (black) tea\n3 tablespoons unsalted butter, melted\nscant 1/2 teaspoon fine grained sea salt\n1 cup fresh pumpkin seeds",
    url: "http://www.101cookbooks.com/archives/001524.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/toastedpumpkinseeds1.jpg",
    cookTime: "",
    recipeYield: "Makes one cup.Makes one cup.Makes one cup.",
    datePublished: "2006-10-28",
    prepTime: "",
    description:
      "Don't let all those pumpkin seeds go to waste, toasting pumpkin seeds is easy! This year I tried some different flavor combinations: Sweet &amp; Spicy Toasted Pumpkin Seeds, Black Tea &amp; Butter Toasted Pumpkin Seeds, and Curried Toasted Pumpkin Seeds.",
  },
  {
    name: "My Dad's Garlic Bread",
    ingredients:
      "1 loaf artisan French bread or wide baguette\n1 - 2 heads of garlic\n1 - 2 sticks of unsalted butter\n1 bunch of chives (optional)\nzest of one lemon (optional)",
    url: "http://www.101cookbooks.com/archives/001563.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/garlicbreadbest.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2007-02-21",
    prepTime: "",
    description:
      "My dad shares his oft-requested garlic bread recipe - garlic, lots of butter, chives, and lemon zest slathered on a wide baguette. A garlic-studded, golden crusted masterpiece. ",
  },
  {
    name: "Spicy Polenta-Cheese Crackers",
    ingredients:
      "Equipment: A food processor or a blender; 2 nonstick baking sheets; a 1 3/4-inch round biscuit cutter or a glass.\n1 cup bread flour (hs note: white whole wheat flour works as well)\n1 cup instant polenta\n3/4 teaspoon fine sea salt\n1/2 teaspoon baking soda\n1/4 teaspoon cayenne pepper\n1/2 cup freshly grated Parmigiano-Reggiano cheese\n2 1/2 tablespoons cold unsalted butter, cut into 1/4-inch pieces\n3/4 cup buttermilk, shaken to blend",
    url: "http://www.101cookbooks.com/archives/spicy-polentacheese-crackers-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/crackerrecipe_07.jpg",
    cookTime: "",
    recipeYield: "Makes 75 crackers.",
    datePublished: "2007-04-22",
    prepTime: "",
    description:
      "Made from polenta, buttermilk, cayenne pepper, and Parmesan cheese, this is a perfect party cracker recipe.",
  },
  {
    name: "Baked Artichoke Dip Recipe",
    ingredients:
      "2 (14-ounce) cans water-packed artichokes, well drained\n4 ounces organic silken tofu\n3 large cloves garlic\n1/3 cup Parmesan cheese, freshly grated\n2/3 cup plain (or Greek) yogurt\n1/4 teaspoon fine grain sea salt, or more to taste\npinch of cayenne pepper\nmore Parmesan to sprinkle on top",
    url: "http://www.101cookbooks.com/archives/baked-artichoke-dip-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/artichoke_dip_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes 2-3 cups of artichoke dip.",
    datePublished: "2008-01-21",
    prepTime: "",
    description:
      "An updated, healthier version of my favorite artichoke dip recipe. Artichokes pureed with yogurt, tofu, Parmesan cheese, and garlic and baked until golden.",
  },
  {
    name: "Olive Oil Cracker Recipe",
    ingredients:
      "1 1/2 cups semolina flour\n1 1/2 cups white whole wheat flour (or all-purpose flour)\n1 teaspoon fine-grain sea salt\n1 cup warm water\n1/3 cup extra virgin olive oil\nspecial equipment: pasta machine (optional)",
    url: "http://www.101cookbooks.com/archives/olive-oil-crackers-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/cracker_recipe_08.jpg",
    cookTime: "",
    recipeYield: "Makes a dozen extra large crackers.",
    datePublished: "2008-01-24",
    prepTime: "",
    description:
      "This cracker recipe makes thin, snappy, rustic crackers - sturdy enough to stand up to a hearty dip. The technique is simple and straightforward (utilizing just a few ingredients) and the dough is a welcoming canvas to all manner of seeds, salts, cheeses, spices, or flavored oils that you might want to use as accents.  ",
  },
  {
    name: "Plump Pea Dumpling Recipe",
    ingredients:
      "2 cups (about 10 ounces) cups peas (freshly shelled or frozen)\n2/3 cup ricotta cheese\n2 tablespoons  olive oil\nscant 1/2 tea spoon fine grain sea salt\n1 small shallot, minced\n1/3 cup grated Parmesan\nzest of one large lemon\n1 package of wonton wrappers, or round wrappers\nspecial equipment: bamboo steamer (or see head notes for alternative cooking method)",
    url: "http://www.101cookbooks.com/archives/plump-pea-dumplings-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/vegetarian_dumpling_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes about 4 dozen dumplings.",
    datePublished: "2008-04-21",
    prepTime: "",
    description:
      "A vegetarian dumpling recipe featuring a simple pea, lemon, ricotta filling. Bright flavors and delicious steamed or pan-fried.",
  },
  {
    name: "Grilled Pizza Recipe",
    ingredients:
      "Pizza dough:\nI've had success with White Whole Wheat Pizza Dough or  Peter Reinhart's Napoletana Pizza Dough recipe.\nToppings: \n - my favorite five minute tomato sauce\n- caramelized fennel &amp; olives:  Made by slicing fennel thinly, but not paper thin (a mandolin does the job). In a large skillet over med-high heat,  saute the fennel in olive oil for 3 or 4 mins, to brown a bit. Turn down the heat to low and cook for another fifteen to twenty minutes. A few minutes before the fennel is done, toss in a handful of your favorite pitted olives.\n- Gruyere cheese, grated",
    url: "http://www.101cookbooks.com/archives/grilled-pizza-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/grilled_pizza_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2008-06-25",
    prepTime: "",
    description:
      "Grilled pizza recipe with an outline of techniques and considerations about the technique it takes to get grilled pizzas right - with topping ideas.",
  },
  {
    name: "Apple Zucchini Crostini Recipe",
    ingredients:
      "5-7 slices whole grain bread, very thinly sliced\n3 ounces goat cheese or chevre, crumbled\ntiny splash of milk or cream\nsplash of extra virgin olive oil\ntwo big pinches of salt\n1/4 cup apple, cut into 1/4 inch dice (place in a bit of lemon water if not using immediately)\n3/4 cup zucchini, cut into 1/4-inch dice\n1 1/2 teaspoons lemon juice, freshly squeezed\na bit of freshly ground black pepper",
    url: "http://www.101cookbooks.com/archives/apple-zucchini-crostini-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/zucchini_apple_crostini.jpg",
    cookTime: "",
    recipeYield: "Makes about 3 dozen bite-sized crostini.",
    datePublished: "2008-08-31",
    prepTime: "",
    description:
      "Inspired by a trip to Argentina, small crackers topped with an apple-zucchini relish, a tiny kiss of goat cheese, and a couple flecks of black pepper.",
  },
  {
    name: "Hummus en Fuego Recipe",
    ingredients:
      "1/2 cup extra-virgin olive oil\n1 1/2 teaspoons crushed red pepper flakes\n3/4 cup walnuts, toasted\n2 cups cooked (or canned) garbanzo beans, drained\n1 medium clove garlic\njuice of 1/2 a lemon (about 2 tablespoons)\n1/2 cup hot water\n1/4 cup oil-cured olives, chopped\na bit of chopped cilantro",
    url: "http://www.101cookbooks.com/archives/hummus-en-fuego-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/hummus_enfuego.jpg",
    cookTime: "",
    recipeYield: "Makes roughly 2 1/2 cups..",
    datePublished: "2008-10-08",
    prepTime: "",
    description:
      "A beautiful, spicy hummus recipe made from pureed garbanzo beans, toasted walnuts, and spicy crushed red pepper oil finished with a few chopped olives and a bit of cilantro.",
  },
  {
    name: "Caramelized Onion Dip Recipe",
    ingredients:
      "2 tablespoons extra virgin olive oil\n2 large yellow onions (about 1 1/2 pounds), finely chopped\n3/4 cup sour cream (low-fat is fine if you like)\n3/4 cup Greek yogurt (low-fat is fine if you like)\n3 teaspoons dehydrated onion powder/granulates (salt-free, natural)\nvery scant 1/2 teaspoon salt",
    url: "http://www.101cookbooks.com/archives/caramelized-onion-dip-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/onion_dip_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes about 2 cups.",
    datePublished: "2008-12-06",
    prepTime: "",
    description:
      "A grown-up remake of the onion dip I loved as a kid. This one features lots of deeply caramelized onions, sour cream and Greek yogurt.",
  },
  {
    name: "Classic Cheese Fondue Recipe",
    ingredients:
      "1 clove garlic, minced\n1 lb. Gruyere cheese, shredded (or 1/2 lb Gruyere + 1/2 lb Emmental cheese)\n3 tablespoons unbleached all-purpose flour\n1 3/4 cup dry white wine\n1/4 teaspoon freshly grated nutmeg\nA splash or two of kirsch (opt)\n1 lb. premium semisweet or bittersweet chocolate, well chopped\n1 1/2 cups heavy cream",
    url: "http://www.101cookbooks.com/archives/classic-cheese-fondue-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/fondue_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2008-12-26",
    prepTime: "",
    description:
      "A classic cheese fondue recipe. I've included dozens of my favorite things to dunk - don't limit yourself to just bread!",
  },
  {
    name: "Monica Bhide's Chile Pea Puffs",
    ingredients:
      "nonstick cooking spray (HS note: or a bit of olive oil)\n1 cup cooked green peas, lightly mashed\n1/4 cup crumbled paneer\n2 small green serrano chiles, minced (remove seeds to reduce heat)\n1/4 teaspoon salt to start\n1/4 teaspoon red chile powder or red chile flakes (less to reduce heat)\n1/2 teaspoon minced garlic\n32 wonton wrappers\n1 egg white, lightly beaten",
    url: "http://www.101cookbooks.com/archives/monica-bhides-chile-pea-puffs-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/pea_puff_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes 32 puffs.",
    datePublished: "2009-04-29",
    prepTime: "",
    description:
      "Monica Bhide's Chile Pea Puff recipe - crispy-skinned baked snacks stuffed with peas, paneer cheese, chiles, and garlic. From her new cookbook - Modern Spice: Inspired Indian Flavors for the Contemporary Kitchen.",
  },
  {
    name: "Baked Sweet Potato Falafel Recipe",
    ingredients:
      "2 medium sweet potatoes (orange inside), around 700g or 1 1/2 pounds in total\n1 1/2 teaspoons ground cumin\n2 small cloves of garlic, chopped\n1 1/2 teaspoons ground coriander\n2 big handfuls of fresh cilantro/coriander, chopped\nJuice of half a lemon\na scant cup (120g) gram /chickpea flour   \na splash of olive oil\na sprinkling of sesame seeds\nsalt and pepper",
    url: "http://www.101cookbooks.com/archives/baked-sweet-potato-falafel-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/sweetpotato_falafel_recipe.jpg",
    cookTime: "",
    recipeYield: "",
    datePublished: "2009-05-17",
    prepTime: "",
    description:
      "Baked Sweet Potato Falafel recipe from the Leon cookbook -made from mashed sweet potatoes, chickpea flour, spices, a nice amount of garlic and plenty of chopped cilantro.",
  },
  {
    name: "Buckwheat Cheese Straws",
    ingredients:
      "1/2 cup buckwheat flour\n1 cup whole wheat pastry flour\n1 teaspoon fine grain sea salt\n1 teaspoon fresh thyme, chopped\n8 tablespoons (4 ounces) unsalted butter, cold, cut into 1/4-inch cubes\n3/4 cup (2 1/2 ounces) white cheddar, shredded on a box grater\n1/2 cup ice cold water",
    url: "http://www.101cookbooks.com/archives/buckwheat-cheese-straws-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/buckwheat_cheese_straws.jpg",
    cookTime: "PT10M",
    recipeYield: "Makes about 4 dozen straws. ",
    datePublished: "2009-08-22",
    prepTime: "PT60M",
    description:
      "These cheese straws look like wispy tree branches. Wayne calls them cheese twigs, and they never last very long around here. Crispy, cheddar-flecked, and rustic - it's the buckwheat flour that lends these slender creations their convincing shade of brownish gray.",
  },
  {
    name: "Grilled Salt &amp; Vinegar Potatoes",
    ingredients:
      "2 cups / 475 ml white wine vinegar\n1 pound / 16 oz / 450 g waxy potatoes (see head notes), cut into 1/4-inch slices\n2 tablespoons extra virgin olive oil\n1 teaspoon flaky sea salt, plus more for seasoning\n1/4 teaspoon freshly ground pepper\nfennel salt* to taste (optional)",
    url: "http://www.101cookbooks.com/archives/grilled-salt-vinegar-potatoes-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/salt_and_vinegar_potatoes.jpg",
    cookTime: "PT10M",
    recipeYield: "",
    datePublished: "2010-07-11",
    prepTime: "PT35M",
    description:
      "Salt &amp; vinegar chip enthusiasts, these are for you. You take slabs of sliced potatoes, boil them in vinegar, then grill them to a crisp. Not for the faint of heart, or anyone with particularly sensitive taste buds ;)...",
  },
  {
    name: "Oatmeal Crackers",
    ingredients:
      "1 cup / 3 oz / 85 g rolled oats\n1 1/4 cups / 300 ml whole milk, heated just to boiling\n1/4 cup / 2 oz / 55g room-temperature unsalted butter\n4 tablespoons natural cane sugar\n3 teaspoons aluminum-free baking powder\n2 teaspoons crushed anise seed - optional\n1/2 teaspoon fine grain sea salt\n1 1/4 cup / 5.5 oz / 155g dark rye flour\n1 1/2 cups / 6.75 oz / 190g  all-purpose flour, plus more for dusting\nmore salt for sprinkling",
    url: "http://www.101cookbooks.com/archives/oatmeal-crackers-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/oatmeal_crackers.jpg",
    cookTime: "PT15M",
    recipeYield: "",
    datePublished: "2011-03-14",
    prepTime: "PT45M",
    description:
      "Snappy, substantial, homemade oatmeal crackers - made with rolled oats and rye flour. Plus a little glimpse at some postcards I made.",
  },
  {
    name: "Liptauer Cheese Crostini",
    ingredients:
      "8 ounces / goat cheese, room temperature\n4 oz unsalted butter, room temperature\n2 teaspoons sweet paprika\n2 teaspoons Dijon mustard\n2 big pinches of salt, or to taste\n1 1/2 teaspoons caraway seeds, toasted &amp; crushed\n1 teaspoon capers, rinsed, chopped\n2 tablespoons chopped shallots or onion\n1 tablespoon chopped pickles\na few dozen thin crostini or crackers*\none bunch of chopped chives, to serve",
    url: "http://www.101cookbooks.com/archives/liptauer-cheese-crostini-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/liptauer_cheese_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes about 1 1/2 cups.",
    datePublished: "2011-04-21",
    prepTime: "PT10M",
    description:
      "A couple book signing pics. And in an effort to expand my crostini repertoire, I made this flavor-packed liptauer cheese spread on black bread crostini - goat cheese, paprika, capers, pickles, onions.",
  },
  {
    name: "Golden Potstickers",
    ingredients:
      "1/2 cup sunflower oil\n8 green onions / scallions, white and green parts, thinly sliced\n1 small serrano chiles, thinly sliced, or to taste\n1 1/2 tablespoons sugar\n1/4 cup / 60 ml soy sauce\u2028\n1/4 cup / 60 ml water\n4 tablespoons sunflower oil, plus more for pan-frying\n1/2 cup chopped shallots (4 medium)\n1/2 teaspoon fine grain sea salt, or to taste\n2 cups / 11 oz / 310 g cooked yellow split peas, ideally at room temperature, then process in a food processor until uniform and fluffy\n1 package round potsticker wrappers",
    url: "http://www.101cookbooks.com/archives/golden-potstickers-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/potsticker_recipe.jpg",
    cookTime: "PT10M",
    recipeYield: "Makes a big platter of dumplings.",
    datePublished: "2011-10-05",
    prepTime: "PT60M",
    description:
      "Potstickers - For my flight to London,  I made the filling with lots of caramelized shallots &amp; pureed yellow split peas then pan-fried them until the bottoms were crisp and golden. They freeze like beautifully, perfect for quick dumpling-centric meals later on.",
  },
  {
    name: "Goug\u00e8res",
    ingredients:
      "2/3 cup / 160 ml beer / ale  OR water\n1/3 cup / 80 ml milk\n8 tablespoons butter, thickly sliced\n3/4 teaspoon fine grain sea salt\nscant 1/2 cup / 65 g / 2.25 oz all-purpose flour\nscant 1/2 cup / 65 g / 2.25 oz whole wheat flour\n4 large eggs, room temperature\n1 1/4 cup / 3 1/4 oz / 90 g sharp white cheddar, grated on box grater\n1 teaspoon fennel seeds, crushed w/ mortar + pestle",
    url: "http://www.101cookbooks.com/archives/gougares-recipe.html",
    image: "http://www.101cookbooks.com/mt-static/images/food/gougeres.jpg",
    cookTime: "PT30M",
    recipeYield: "",
    datePublished: "2011-12-17",
    prepTime: "PT10M",
    description:
      "Goug\u00e8res - I have these little cheese puffs in my freezer, ready to bake, nearly always. This version, a favorite, is made with whole wheat flour, sharp white cheddar cheese, fennel, and ale.",
  },
  {
    name: "Parmesan Cheese Spread",
    ingredients:
      "2 1/2 cups / 5 1/2 oz / 150g finely grated Parmesan cheese\nscant 1/4 cup / 50 ml extra virgin olive oil\n1/4 cup dry white wine\nadd in ideas: chopped dried figs, chopped dates, finely lots of chopped chives, lemon zest, or red pepper flakes, dried herbs, chopped sun-dried tomatoes",
    url: "http://www.101cookbooks.com/archives/parmesan-cheese-spread-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/parmesan_spread_recipe.jpg",
    cookTime: "",
    recipeYield: "Makes ~1 1/2 cups of spread.",
    datePublished: "2012-05-09",
    prepTime: "PT5M",
    description:
      "A Parmesan cheese spread made with grated cheese, olive oil, a splash of white wine, and any other accents you can think of.",
  },
  {
    name: "Mast-o-Khiar Yogurt Dip",
    ingredients:
      "2 medium garlic cloves, peeled\n1/2 teaspoon fine grain sea salt\n2 cups / 480 ml Greek yogurt\n3 tablespoons chopped fresh dill\na dozen fresh mint leaves, chopped\n1 medium cucumber, seeded &amp; finely diced\ngreat quality extra-virgin olive oil\n1/3 cup walnuts, deeply toasted\n2 teaspoons crushed dried rose petals\n3 tablespoons chopped dried cranberries",
    url: "http://www.101cookbooks.com/archives/mastokhiar-yogurt-dip-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/mastokhiar_yogurt_dip_recipe.jpg",
    cookTime: "",
    recipeYield: "Serves 6-8.",
    datePublished: "2012-09-08",
    prepTime: "PT5M",
    description:
      "The prettiest dip in my repertoire - my take on the Iranian preparation of Mast-o-Khiar (yogurt and cucumber). I use lots of fresh herbs, dried rose petals, toasted walnuts and a pop of added color and tartness from dried cranberries. \n",
  },
  {
    name: "Fennel Mushrooms",
    ingredients:
      "12 ounces mushrooms, brushed clean\n1 tablespoon unsalted butter\na few pinches fine grain sea salt\n1 small bulb of fennel, trimmed and sliced very thinly\n1-2 tablespoons creme fraiche\n2 tablespoons fresh dill, chopped\na small bunch of chives, minced\nfreshly ground black pepper\na small bunch of watercress, sorrel, or arugula\n1 teaspoon of olive oil",
    url: "http://www.101cookbooks.com/archives/fennel-mushrooms-recipe.html",
    image:
      "http://www.101cookbooks.com/mt-static/images/food/fennel_mushroom_recipe.jpg",
    cookTime: "PT7M",
    recipeYield: "Serves 2-3.",
    datePublished: "2012-10-01",
    prepTime: "PT5M",
    description:
      "A fennel mushroom recipe inspired by one of my vintage cookbooks, The Seasonal Kitchen by Perla Meyers. It's a simple, brilliant twist on everyday sauteed mushrooms with dill, chives, fresh fennel, and a kiss of creme fraiche.",
  },
];

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

function convertISO8601DurationToReadable(duration) {
  const regex =
    /P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const matches = duration.match(regex);

  if (!matches) {
    //   throw new Error('Invalid ISO 8601 duration format');
    return duration;
  }

  const years = matches[1];
  const months = matches[2];
  const days = matches[3];
  const hours = matches[4];
  const minutes = matches[5];
  const seconds = matches[6];

  // ... rest of your code ...
  let result = '';

    if (years) result += years + ' year' + (years > 1 ? 's' : '') + ' ';
    if (months) result += months + ' month' + (months > 1 ? 's' : '') + ' ';
    if (days) result += days + ' day' + (days > 1 ? 's' : '') + ' ';
    if (hours) result += hours + ' hour' + (hours > 1 ? 's' : '') + ' ';
    if (minutes) result += minutes + ' minute' + (minutes > 1 ? 's' : '') + ' ';
    if (seconds) result += seconds + ' second' + (seconds > 1 ? 's' : '') + ' ';

    return result.trim();
}

recipes = recipes.map((recipe, index) => {
  return {
    ...recipe,
    prepTime: convertISO8601DurationToReadable(recipe.prepTime),
    cookTime: convertISO8601DurationToReadable(recipe.cookTime),
    id: uuidv4(),
    ingredients: recipe.ingredients.split("\n").map((ingredient) => {
      const parts = ingredient.split(" ");
      let amount, unit, name;
      if (!isNaN(parseInt(parts[0]))) {
        amount = parts.shift();
        unit = parts.shift();
      }
      name = parts.join(" ").trim();
      return { amount, unit, name };
    }),
  };
});
fs.writeFile("output.json", JSON.stringify(recipes, null, 2), (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
