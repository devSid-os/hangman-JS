const words = [
    { word: "Bicycle", hint: "Two wheeled vehicle powered by pedaling" },
    { word: "Pyramid", hint: "Ancient structure in Egypt" },
    { word: "Astronaut", hint: "Person who travels to space" },
    { word: "Chocolate", hint: "Sweet treat made from cocoa" },
    { word: "Library", hint: "Place where books are borrowed" },
    { word: "Volcano", hint: "A mountain that erupts with lava" },
    { word: "Pineapple", hint: "Tropical fruit with a spiky exterior" },
    { word: "Kangaroo", hint: "Australian marsupial known for hopping" },
    { word: "Giraffe", hint: "Tall animal with a long neck" },
    { word: "Elephant", hint: "Large land animal with a trunk" },
    { word: "Calendar", hint: "Tool used to track dates and months" },
    { word: "Saxophone", hint: "Musical instrument commonly used in jazz" },
    { word: "Oxygen", hint: "Essential gas for breathing" },
    { word: "Rainforest", hint: "Dense, tropical forest with high rainfall" },
    { word: "Submarine", hint: "Underwater vessel" },
    { word: "Sculpture", hint: "Art form created by carving or modeling" },
    { word: "Microscope", hint: "Device for viewing tiny objects" },
    { word: "Bouquet", hint: "Arrangement of flowers" },
    { word: "Carnival", hint: "Festival with rides and games" },
    { word: "Accordion", hint: "Musical instrument with bellows" },
    { word: "Trampoline", hint: "Equipment used for jumping and bouncing" },
    { word: "Hippopotamus", hint: "Large, water - loving mammal" },
    { word: "Helicopter", hint: "Aircraft with rotating blades" },
    { word: "Zebra", hint: "African animal with black and white stripes" },
    { word: "Rainbow", hint: "Colorful arc seen after rain" },
    { word: "Pencil", hint: "Writing instrument with an eraser" },
    { word: "Jellyfish", hint: "Ocean creature with tentacles" },
    { word: "Telescope", hint: "Device used to observe distant objects in space" },
    { word: "Origami", hint: "Japanese art of paper folding" },
    { word: "Igloo", hint: "Ice shelter built by Eskimos" },
    { word: "Sunflower", hint: "Tall plant with a large yellow flower" },
    { word: "Butterfly", hint: "Insect with colorful wings" },
    { word: "Metronome", hint: "Device used to keep a steady tempo in music" },
    { word: "Whirlpool", hint: "Circular, powerful water current" },
    { word: "Carnivore", hint: "Animal that eats meat" },
    { word: "Labyrinth", hint: "Complex maze" },
    { word: "Fossil", hint: "Preserved remains of ancient organisms" },
    { word: "Tarantula", hint: "Large, hairy spider" },
    { word: "Sapphire", hint: "Precious blue gemstone" },
    { word: "Chandelier", hint: "Ornate hanging light fixture" },
    { word: "Parasol", hint: "Light umbrella used for shade" },
    { word: "Gondola", hint: "Long, narrow boat used in Venice" },
    { word: "Sculpture", hint: "Art created by shaping materials" },
    { word: "Peppermint", hint: "Plant used for flavoring, often in candy" },
    { word: "Harmonica", hint: "Small, hand - held wind instrument" },
    { word: "Velociraptor", hint: "Small, fast dinosaur" },
    { word: "Geyser", hint: "Hot spring that erupts water and steam" },
    { word: "Mermaid", hint: "Mythical creature with the upper body of a woman and the tail of a fish" },
    { word: "Oasis", hint: "Fertile spot in a desert with water" },
    { word: "Gazelle", hint: "Graceful, fast - running antelope" },
    { word: "Spaghetti", hint: "Long, thin pasta" },
    { word: "Hologram", hint: "3D image created with lasers" },
    { word: "Cucumber", hint: "Green, elongated vegetable" },
    { word: "Herbivore", hint: "Animal that only eats plants" },
    { word: "Quicksand", hint: "Loose, wet sand that can trap objects" },
    { word: "Geography", hint: "Study of the Earth's physical features" },
    { word: "Easel", hint: "Stand used to hold a canvas for painting" },
    { word: "Hummingbird", hint: "Small bird that can hover in place" },
    { word: "Octopus", hint: "Sea creature with eight arms" },
    { word: "Blizzard", hint: "Severe snowstorm with strong winds" },
    { word: "Anemone", hint: "Sea creature with tentacles" },
    { word: "Kaleidoscope", hint: "Tube with mirrors and colored patterns inside" },
    { word: "Toucan", hint: "Bird with a large colorful beak" },
    { word: "Tangerine", hint: "Small citrus fruit similar to an orange" },
    { word: "Panther", hint: "Large wild cat, also known as a leopard or jaguar" },
    { word: "Jukebox", hint: "Machine that plays selected music tracks" },
    { word: "Canoe", hint: "Lightweight boat paddled by hand" },
    { word: "Nightmare", hint: "Frightening dream" },
    { word: "Papaya", hint: "Tropical fruit with orange flesh" },
    { word: "Icicle", hint: "Hanging, tapering piece of ice" },
    { word: "Leprechaun", hint: "Mythical Irish creature associated with luck" },
    { word: "Quarantine", hint: "Isolation to prevent the spread of disease" },
    { word: "Carousel", hint: "Amusement park ride with rotating seats" },
    { word: "Antarctica", hint: "Continent covered in ice" },
    { word: "Violin", hint: "String instrument played with a bow" },
    { word: "Monarch", hint: "Ruler of a kingdom" },
    { word: "Boulevard", hint: "Wide street in a city" },
    { word: "Caterpillar", hint: "Larval stage of a butterfly" },
    { word: "Accordion", hint: "Musical instrument with bellows" },
    { word: "Croissant", hint: "Flaky, buttery pastry" },
    { word: "Banana", hint: "Yellow fruit with a peel" },
    { word: "Hurricane", hint: "Severe tropical storm with strong winds" },
    { word: "Carnation", hint: "Type of flower often used in bouquets" },
    { word: "Eclipse", hint: "Event where one celestial body moves into the shadow of another" },
    { word: "Parliament", hint: "Legislative body of government" },
    { word: "Opera", hint: "Dramatic musical performance with singing" },
    { word: "Rhinoceros", hint: "Large, thick - skinned animal with a horn" },
    { word: "Tsunami", hint: "Large ocean wave caused by an underwater earthquake" },
    { word: "Mountains", hint: "Large natural elevations of the earth's surface" },
    { word: "Harpsichord", hint: "Keyboard instrument similar to a piano" },
    { word: "Boomerang", hint: "Curved throwing stick that returns to the thrower" },
    { word: "Scarecrow", hint: "Figure used to scare birds away from crops" },
    { word: "Tornado", hint: "Destructive spinning column of air" },
    { word: "Stethoscope", hint: "Medical instrument used by doctors" },
    { word: "Marathon", hint: "Long distance running race" },
    { word: "Cauliflower", hint: "White, edible vegetable" },
    { word: "Chameleon", hint: "Lizard known for changing colors" },
    { word: "Gorilla", hint: "Large primate found in Africa" },
    { word: "Lighthouse", hint: "Tower with a light to guide ships" },
    { word: "Parachute", hint: "Device used for safe descent from high altitudes" },
]

const keys = [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
    ['J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'],
    ['S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
]

const RANDOM_WORD = document.getElementById("random-word");
const RANDOM_WORD_HINT = document.getElementById("random-word-hint");
var selected_word = "";

function select_random_word() {
    return words[Math.round(Math.random() * words.length)];
}

function set_random_word() {
    var { word, hint } = select_random_word();
    RANDOM_WORD_HINT.textContent = hint;
    word = word.toLocaleUpperCase();
    selected_word = word;
    word = word.split("");
    word.map((char, index) => {
        const CHAR_DIV = document.createElement("div");
        CHAR_DIV.style = "border-bottom: 2px solid black; padding: 1em"
        CHAR_DIV.id = char;
        RANDOM_WORD.appendChild(CHAR_DIV);
    });
}

set_random_word();
var test_str = "Siddharth"
console.log(test_str.indexOf('d', 4))


keys.map((row, index) => {
    const KEYS_DIV = document.querySelector(`#keys-div-${index + 1}`);
    row.map(key => {
        const KEY_BTN = document.createElement("button");
        KEY_BTN.id = key;
        KEY_BTN.textContent = key;
        KEY_BTN.addEventListener("click", () => {
            var res = selected_word.indexOf(key);
            if (res != -1) {
                while (res != -1) {
                    RANDOM_WORD.children[res].textContent = key;
                    RANDOM_WORD.children[res].style = "border: none";
                    res = selected_word.indexOf(key, res + 1);
                }
            }
            KEY_BTN.style = "background-color: #9da1e9";
        });
        KEYS_DIV.appendChild(KEY_BTN);
    })
})

