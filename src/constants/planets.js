import mercury from "../images/mercury.jpg";
import venus from "../images/venus.jpg";
import earth from "../images/earth.jpg";
import mars from "../images/mars.jpg";
import jupiter from "../images/jupiter.jpg";
import saturn from "../images/saturn.jpg";
import uranus from "../images/uranus.jpg";
import neptune from "../images/neptune.jpg";
import pluto from "../images/pluto.jpg";

const planets = [
    {
        name: "mercury",
        description:
            "The closest planet to our sun, Mercury is the fastest planet in the Solar System to orbit its star, which is likely why the Romans named it after their nimble messenger-god.",
        blurb1: "Mercury is the smallest planet in the Solar System and is closest to the Sun, with earliest recorded observations dating back to the 14th century. The planet's apparent distance from the Sun as viewed from Earth never exceeds 28°, meaning it can only be seen from Earth near the western horizon after sunset or the eastern horizon before sunrise. ",
        blurb2: "Mercury is too small and hot for its gravity to maintain any significant atmosphere, although its surface-bounded exosphere contains hydrogen, helium, oxygen, sodium, calcium, potassium, and other elements. Due to its extreme temperatures and large amounts of solar radiation, it is unlikely that any living organisms could withstand its conditions.",
        blurb3: mercury,
    },
    {
        name: "venus",
        description:
            "Named after the Roman goddess of love and beauty, Venus is the second brightest object in our night sky behind the Moon. It can even be seen during daylight with the naked eye.",
        blurb1: "Venus is the brightest natural object in Earth's night sky after the moon. It is so bright that it can even cast shadows. Venus is most visible for the few hours after sunrise or before sunset. Because the movement of the planet appears discontinuous (its visibility varies with its proximity to the Sun), ancient cultures believed to be two entities: the morning star and the evening star.",
        blurb2: "Despite being further from the Sun than Mercury, Venus is the hottest surface planet in the Solar System. Its atmosphere consists of 96% carbon dioxide, and it's surrounded by a layer of sulfuric acid clouds, obscuring the visilibilty of its surface to us. Venus' harsh conditions make the probability for supporting life quite low, but some scientists believe that thermoacidophilic extremophile organisms may exist in the upper atmosphere.",
        blurb3: venus,
    },
    {
        name: "earth",
        description:
            "Our home. Earth is the only known planet to contain free oxygen in its atmosphere and surface oceans of liquid water. It is also currently the only astronomical object known to harbor life.",
        blurb1: "Earth formed over 4.5 billion years ago. In the first couple billion of those years, the ocean formed and produced life. While large bodies of water can be found throughout the Solar System, Earth is the only planet that contains surface liquid water. In fact, 71% of its surface is made of liquid water. The remaining 29% consists of continents and islands. Earth's upper layer is comprised of slowly-moving tectonic plates, which interact with each other to form mountains, earthquakes, and volcanoes.",
        blurb2: "Earth's atmosphere consists mainly of oxygen and nitrogen. Water vapor is very prevalent in the atmosphere and leads to the formation of clouds that cover the majority of the planet. Greenhouse gases such as carbon dioxide, trap energy from the Sun and hold it near the surface. The unique combination of its distance from the Sun, orbital eccentricity, rate of rotation, tilt, atmosphere, and magnetic field make Earth an ideal environment for organic molecules, and therefore, life.",
        blurb3: earth,
    },
    {
        name: "mars",
        description:
            "The red planet. Named after the Roman god of war, Mars is a terrestrial planet with a thin atmosphere and intricate surface features such as valleys, mountains, and polar ice caps.",
        blurb1: "Mars has been explored for several uncrewed spacecraft, beginning in 1965 with Mariner 4. Some of the more notable surface features of the planet include Olympus Mons, a mountain that dwarfs the size of even Mount Everest, and the Valles Marineris, one of the largest known canyons in the Solar System. Days and seasons on Mars are quite comparable to those on Earth due to their similar rotation period and rotaional axis tilt.",
        blurb2: "Mars can be seen by the naked eye in a dark reddish color, hence its nickname, due to the presence of iron oxide on its surface. Despite its polar ice caps likely being composed of water, the atmospheric pressure on Mars is 1% of that on Earth, making the presence of liquid surface water impossible. The planet may have been wetter in the past, but it is unknown is it has ever supported life.",
        blurb3: mars,
    },
    {
        name: "jupiter",
        description:
            "The largest planet in our Solar System. Named after the Roman god Jupiter, king of the gods, it is a gas giant with a mass over twice as large as all the other planets combined.",
        blurb1: "Jupiter is more massive than all the other planets in the Solar System combined, despite only being 0.01% the size of the Sun. Along with the other giant planets, Jupiter doesn't have a well-defined solid surface. It is instead made primarily of hydrogen and helium gas. Due to its rapid rotation, Jupiter is actually slightly spherical shape, with a slight bulde around its equator.",
        blurb2: "Arguably Jupiter's most promiment feature is its so-called 'Great Red Spot', often seen in images and illustrations. The giant spot is a result of latitudinal bands around the outer atmosphere which produce turbulence and storms at their intersections. Scientists are not sure why the spot appears red in color, although a possible explanation is the reaction of photodissociated ammonia and acetylene.",
        blurb3: jupiter,
    },
    {
        name: "saturn",
        description:
            "The second largest planet in our Solar System, behind Jupiter. Saturn is most known for its prominent ring system consisting mostly of ice, dust, and debris.",
        blurb1: "Saturn is a gas giant with a radius nearly 10 times that of Earth. Its characteristic pale yellow color is due to the presence of ammonia crystals in its upper atmosphere. The planet consists of a core likely consisting of iron and nickel, followed by layers of metallic hydrogen, liquid hydrogen and helium, and gaseous helium, respectively.",
        blurb2: "The planet's amazing ring system extends out to 120,000 kilometers outwards from its equator. Each ring approximately 20 meters in thickness. Saturn also has at least 83 moons, not including the hundreds of smaller 'moonlets' in its rings. Its largest moon, Titan, is larger than Mercury and is the only known moon in the Solar System to have its own atmosphere.",
        blurb3: saturn,
    },
    {
        name: "uranus",
        description:
            "Uranus, along with Neptune, is classified as an 'ice giant' due to its composition of water, ammonia, and methane. It has the coldest atmospheric temperature in the Solar System.",
        blurb1: "Uranus has a complex, layered cloud structure resulting from its lower water region to its upper methane region. Despite its bitterly cold surface temperatures, Uranus has a hot, dense fluid mantle made of water, ammonia, and other volatile compounds. The extreme pressure and temperatures within the planet could potentially break down methane molecules, with the carbon atoms compressing into diamond crystals that rain down like hail.",
        blurb2: "Uranus has a very unique configuration. Its axis of rotation is tilted sideways, almost completely in plane with its solar orbit. The north and south poles, therefore, exist where other planets typically have their equator. Voyager 2 was the only spacecraft to visit the planet, back in 1986. The findings describe 'an almost featureless' planet, without the clouds or storms typical of other gas giants.",
        blurb3: uranus,
    },
    {
        name: "neptune",
        description:
            "The other so-called 'ice giant' along with Uranus, Neptune is denser and physically smaller than its nearby partner due to the gravitational compression of its atmosphere.",
        blurb1: "Neptune is named after the Roman god of the sea, and has an astronomical symbol representing Neptune's trident. Neptune isn't visible to the naked eye and is the only planet in the Solar System discovered by mathematical prediction rather than empirical observation. Scientists noted unexpected changes in the orbital behaviour of Uranus, leading them to believe that Neptune must be under the gravitational influence of an unknown body.",
        blurb2: "After noting the predicted position of the planet, Neptune was first observed with a telescope in 1846. The planet's relative distance from Earth makes it challenging to study with telescopes on Earth. The Hubble Space Telescope and other imaging technology with adaptive optics have made observing the planet from Earth much easier.",
        blurb3: neptune,
    },
    {
        name: "pluto",
        description:
            "Prevously the ninth planet from the sun, Pluto was formally reclassified as a dwarf planet in 2006 due to its location along with other bodies in the Kuiper belt.",
        blurb1: "Pluto is an inhabitant of the Kuiper Belt - a large ring of bodies existing beyond the orbit of Neptune. The discovery of other bodies in this system - notably a body larger than Pluto, Eris - led scientists to revoke Pluto's designation as a planet in 2006. Compared to Earth's moon, Pluto has only one sixth of its mass. ",
        blurb2: "Pluto's moderately eccentric and inclined orbit makes its distance from the Sun range from 4.5 to 7.3 billion kilometres. This is so far that light from the Sun takes about five and a half hours to reach the dwarf planet. Pluto's surface is almost entirely composed of solid nitrogen ice, with small amounts of methane and carbon dioxide.",
        blurb3: pluto,
    },
];

export default planets;
