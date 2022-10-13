from app.models import db, Apparel


# Adds a demo user, you can add other users here if you want
def seed_apparel():

    apparels = [
        {
            "name": "Jordan 3 Retro Black Cement",
            "description": "Any year that an Air Jordan 3 releases is a good year for sneakerheads and the Air Jordan 3 'Black Cement' ensured 2011 was a good one for many collectors. You can’t talk about the Jordan 3 without talking about its legendary designer, Tinker Hatfield. Tinker’s superhero status amongst sneaker enthusiasts comes directly from groundbreaking designs like the Air Jordan 3.",
            "colorway": "Black / Cement",
            "release_date": "2011",
            "brand": "Jordan",
            "style": "mid",
            "brand_type": "3",
            "condition": "New",
            "retail_price": 160,
            "image_url": "https://cdn.flightclub.com/500/TEMPLATE/803111/1.jpg"

        }, 
        {
            "name": "Air Jordan 1 Retro High OG",
            "description": "The Air Jordan 1 High Bred Patent features black and red patent leather upper with signature weaved Nike Air tongue labels. From there, a classic Wings logo on the collar and a white with red Air sole complete the retro design.",
            "colorway": "Black / Red",
            "release_date": "2021",
            "brand": "Jordan",
            "style": "high",
            "brand_type": "1",
            "condition": "New",
            "retail_price": 170,
            "image_url": "https://myawsshoepictures.s3.us-west-1.amazonaws.com/40f2d0c493c441c7acacbe0f99b8dd09.png"

        }, 
        {
            "name": "Nike Dunk Low Retro, Panda",
            "description": "From the school-spirited College Colors Program to the vibrant Nike CO.JP collection, Nike Dunks have seen many colorways since the design’s inception in 1985. But with each new colorway, the Dunk’s classic color-blocking has remained in some capacity. Nike put its timeless color-blocking to work with the Nike Dunk Low Retro White Black.",
            "colorway": "White Black Panda",
            "release_date": "2021",
            "brand": "Nike",
            "style": "low",
            "brand_type": "Dunk",
            "condition": "New",
            "retail_price": 110,
            "image_url": "https://cdn.flightclub.com/1000/TEMPLATE/174219/1.jpg"
        }, 
        {
            "name": "Adidas Yeezy Boost 350 V2",
            "description": "Yeezy provided a new colorway of its most popular design with the adidas Yeezy 350 Flax, now available on StockX. This release shows slight resemblance to the 350 V2 Marsh in colorway, displaying warm tones to embody the arrival of spring. This model was released as a regional exclusive specific to the Asia Pacific and Africa.",
            "colorway": "Flax",
            "release_date": "2020",
            "brand": "Adidas",
            "style": "350",
            "brand_type": "Yeezy Boost",
            "condition": "New",
            "retail_price": 220,
            "image_url": "https://cdn.flightclub.com/1000/TEMPLATE/169516/1.jpg"
        }, 
        {
            "name": "OFF-WHITE X AIR FORCE 1 LOW 'BROOKLYN'",
            "description": "The Off-White x Nike Air Force 1 Low 'Brooklyn' features the same color block and details first seen in the 2019 'MCA' iteration and the 2021 'Lemonade' version. The 'Brooklyn' colorway features a vivid green leather upper, with classic Abloh details such as exposed foam construction and medial side text in Helvetica. The silver foil Swooshes return with black zigzag stitching, along with 'AIR' stamped on the lateral midsole.",
            "colorway": "Light Green Spark",
            "release_date": "2022",
            "brand": "Nike x OFF-WHITE",
            "style": "Low",
            "brand_type": "Air Force 1",
            "condition": "New",
            "retail_price": 160,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/311965/1.jpg"
        }, 
        {
            "name": "OFF-WHITE X AIR FORCE 1 LOW '07 'MCA'",
            "description": "The OFF-WHITE x Air Force 1 Low '07 'MCA' released to help celebrate Virgil Abloh's exhibit at the Museum of Contemporary Art in Chicago in June 2019. Bruce Kilgore's basketball classic gets reimagined with Abloh's signature deconstructed look, sporting prominent stitching on the Swoosh and an exposed-foam tongue and collar. The leather upper appears primarily in University Blue, while the usual over-the-top branding emerges on the laces and medial side. A tonal sole unit includes the usual Air cushioning and concentric traction pattern.",
            "colorway": "University Blue",
            "release_date": "2019",
            "brand": "Nike x OFF-WHITE",
            "style": "Low",
            "brand_type": "Air Force 1",
            "condition": "New",
            "retail_price": 160,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/145083/1.jpg"
        }, 
        {
            "name": "OFF-WHITE X AIR PRESTO 'WHITE'",
            "description": "The OFF-WHITE x Air Presto 'White' released in August 2018, a week after an all-black iteration. The shoe's deconstruction build is highlighted by rough seams and an exposed-foam tongue, while the mesh construction maintains the signature build of the Air Presto. Virgil Abloh's tongue-in-cheek branding includes 'Air' on the heel, with a red zip-tie hang-tag adding more color to the look.",
            "colorway": "White",
            "release_date": "2018",
            "brand": "Nike x OFF-WHITE",
            "style": "Low",
            "brand_type": "AIR PRESTO",
            "condition": "New",
            "retail_price": 120,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/804113/1.jpg"
        }, 
        {
            "name": "Nike OFF-WHITE X AIR MAX 97 'MENTA'",
            "description": "The OFF-WHITE x Air Max 97 ‘Menta’ collab features a translucent textile upper wrapped in Wolf Grey, complemented by Virgil Abloh’s signature text and tonal zigzag stitching throughout. The neutral color palette is punctuated by a multicolored Swoosh that transitions from green to blue to red, while a smoky grey rubber outsole maintains the shoe’s translucent theme underfoot.",
            "colorway": "Wolf Grey",
            "release_date": "2018",
            "brand": "Nike x OFF-WHITE",
            "style": "97",
            "brand_type": "AIR MAX",
            "condition": "New",
            "retail_price": 180,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/805150/1.jpg"
        }, 
        {
            "name": "Nike Dunk Low UCLA",
            "description": "The Nike Dunk Low UCLA closely resembles the school colors used by the University of California Los Angeles. The upper of the Nike Dunk Low UCLA is made of University Gold-colored leather. The sneaker’s upper part also features 'Blue Jay' leather overlays. The tongue of this shoe is golden colored and features blue detailing. The white midsole of this sneaker create an airy break from the combination of a gold-blue color that widely constitutes this shoe.",
            "colorway": "Blue & Gold",
            "release_date": "2021",
            "brand": "Nike",
            "style": "low",
            "brand_type": "Dunk",
            "condition": "New",
            "retail_price": 100,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/323910/1.jpg"
        }, 
        {
            "name": "Nike Dunk Low 'VAST GREY'",
            "description": "Neutral tones dominate the Nike Dunk Low Premium 'Vast Grey', a vintage hoops style that has been adapted to reflect street style. A cream colored suede upper features soft grey overlays and a matching Swoosh. Tonal Nike hits on the back heel and tongue tag match the 'Vast Grey' tone, while a white midsole sits atop a grey rubber outsole.",
            "colorway": "Vast Grey",
            "release_date": "2022",
            "brand": "Nike",
            "style": "low",
            "brand_type": "Dunk",
            "condition": "New",
            "retail_price": 100,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/295857/1.jpg"
        }, 
        {
            "name": "UNION LA X DUNK LOW 'PASSPORT PACK - ARGON'",
            "description": "Drawing from the three-pice 'Passport Pack' which takes inspiration from the early '90s days of the Union crew is the Union LA x Nike Dunk Low 'Argon.' Each style from the pack pays homage to the cities the retailer called or calls home, New York, Los Angeles, and Tokyo. It features unfinished red stitching and a tearaway ripstop upper that reveals a leather underlay in varying shades of blue. On the lateral side is a yellow 'UN/LA' tag with a heel emblem marked with Union's Frontman graphic, which reappears on the blue translucent rubber outsole.",
            "colorway": "Hyper Royal White",
            "release_date": "2022",
            "brand": "Nike",
            "style": "low",
            "brand_type": "Dunk",
            "condition": "New",
            "retail_price": 100,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/292478/1.jpg"
        }, 
        {
            "name": "DUNK LOW 'UNIVERSITY BLUE'",
            "description": "The Dunk Low 'University Blue' brings a two-tone look to its retro basketball construction. The shoe's upper features an all-leather build, finished with a white base that's highlighted by University Blue on the overlays and Swoosh branding. A nylon tongue supports the fit, marked by a traditional woven tongue tag, as does a padded collar. Both colors come together on the rubber cupsole that anchors the build.",
            "colorway": "University Blue",
            "release_date": "2021",
            "brand": "Nike",
            "style": "low",
            "brand_type": "Dunk",
            "condition": "New",
            "retail_price": 100,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/261743/1.jpg"
        }, 
        {
            "name": "KD 14 'AUNT PEARL'",
            "description": "The Nike KD 14 Aunt Pearl are high tops and typically fall at the top of the ankle for most wearers. They also have extra cushioning, making them comfortable for longer walks. The Nike KD 14 Aunt Pearl has a Gum rubber outsole, as well as a vibrant pink base that features a detailed pattern. Towards the front of the shoe, you will find a hot pink speckled pattern. Across the pink laces and tongue, there is a pink strap that features the iconic Nike Swoosh symbol.",
            "colorway": "Soft Pink",
            "release_date": "2022",
            "brand": "Nike",
            "style": "mid",
            "brand_type": "KD",
            "condition": "New",
            "retail_price": 160,
            "image_url": "https://cdn.flightclub.com/1000/TEMPLATE/294004/1.jpg"
        }, 
        {
            "name": "DON C X KD 12 'NBA ASG 2020'",
            "description": "Inspired by the flag of Chicago, the Don C x KD 12 'NBA ASG 2020' released as part of Nike's collection for that year's All-Star Game. The shoe's multilayer mesh upper appears in red and blue, with six-pointed stars around the tongue branding. The midsole incorporates full-length Zoom Air and an added Zoom unit in the heel for cushioning, giving way to an icy translucent outsole for traction.",
            "colorway": "Blue",
            "release_date": "2020",
            "brand": "Nike",
            "style": "mid",
            "brand_type": "KD",
            "condition": "New",
            "retail_price": 160,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/168071/1.jpg"
        }, 
        {
            "name": "YOUTUBE X KD 12",
            "description": "The Nike KD 12 'YouTube' gives the nod to Kevin Durant’s social media channel, which began streaming in 2017 as a way for the media-savvy athlete to connect with his millions of fans. The sneaker’s simple red and white color scheme draws inspiration from the YouTube logo, while co-branded graphic hits in black and white adorn the tongue and heel panel.",
            "colorway": "Red & White",
            "release_date": "2019",
            "brand": "Nike",
            "style": "mid",
            "brand_type": "KD",
            "condition": "New",
            "retail_price": 160,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/158242/1.jpg"
        }, 
        {
            "name": "YEEZY BOOST 350 V2 'BRED'",
            "description": "The Yeezy Boost 350 V2 'Bred' brings a classic colorway to its minimalist construction. The shoe's upper is built with Primeknit, finished in black and highlighted by the SPLY-350 branding on the side wall. More red marks the heel pull-loop, while rope laces secure the fit. Underfoot, a full-length Boost midsole wrapped in a black rubber cage provides cushioning. A rubber outsole with cutouts provides traction.",
            "colorway": "Black & Red",
            "release_date": "2017",
            "brand": "Adidas",
            "style": "350",
            "brand_type": "Yeezy Boost",
            "condition": "New",
            "retail_price": 220,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/800389/1.jpg"
        }, 
        {
            "name": "YEEZY BOOST 350 V2 'SLATE'",
            "description": "The adidas Yeezy Boost 350 V2 'Slate' features a two-tone color block, featuring a light tan hue across the Primeknit upper, intersected by a black stripe across the middle with 'SPLY-350' branding. Full-length Boost cushioning is embedded in the beige TPU translucent midsole, while a gum rubber outsole features a unique traction pattern for grip.",
            "colorway": "Slate",
            "release_date": "2022",
            "brand": "Adidas",
            "style": "350",
            "brand_type": "Yeezy Boost",
            "condition": "New",
            "retail_price": 220,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/308404/1.jpg"
        }, 
        {
            "name": "YEEZY BOOST 350 V2 'ZEBRA'",
            "description": "The Yeezy Boost 350 V2 'Zebra' released on February 25, 2017, combining an upper white / core black Primeknit with a red SPLY 350 branding and a full-length translucent midsole boost. On November 16, 2018 and April 9th, 2022, restocks of the ' Zebra ' arrived, with more pairs hitting the marketplace and building on Kanye's commitment to make Yeezy more available to anyone who wished to acquire them.",
            "colorway": "Black & White",
            "release_date": "2022",
            "brand": "Adidas",
            "style": "350",
            "brand_type": "Yeezy Boost",
            "condition": "New",
            "retail_price": 220,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/800502/1.jpg"
        }, 
        {
            "name": "YEEZY BOOST 350 V2 'BELUGA REFLECTIVE'",
            "description": "The adidas Yeezy Boost 350 V2 'Beluga Reflective' revisits a 2016 colorway, pairing a predominantly grey Primeknit upper with an orange side stripe that features SPLY-350 branding. The knit build is interwoven with reflective fibers that provide enhanced visibility in low-light conditions. A full-length Boost midsole housed in a semi-translucent rubber cage provides support, durability and traction.",
            "colorway": "Steeple Gray",
            "release_date": "2021",
            "brand": "Adidas",
            "style": "350",
            "brand_type": "Yeezy Boost",
            "condition": "New",
            "retail_price": 220,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/289333/1.jpg"
        }, 
        {
            "name": "YEEZY BOOST 700 'WAVE RUNNER'",
            "description": "This first colorway of Yeezy Wave Runner 700 from Kanye West was introduced in November 2017, following an initial public opening in the Yeezy Season 5 fashion show previously that year. The retro-inspired lines of the sneaker worked together with a chunky silhouette reminiscent of a previous age. A mesh base on the quarter panel is completed in gray and a yellow with a teal forefoot.",
            "colorway": "Chalk White & Core Black",
            "release_date": "2021",
            "brand": "Adidas",
            "style": "700",
            "brand_type": "Yeezy Boost",
            "condition": "New",
            "retail_price": 300,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/802501/1.jpg"
        }, 
        {
            "name": "YEEZY 700 V3 'DARK GLOW'",
            "description": "The Yeezy 700 V3 'Dark Glow' emerges with a look almost exactly like the 2020 'Alvah' colorway. However, the design is differentiated by the RPU cage, which sports a glow-in-the-dark finish in blue, rather than its predecessor's green. The rest of the upper is built with engineered mesh, while underfoot, a tonal EVA midsole inside a polyurethane core provides cushioning, giving way to a rubber outsole with a herringbone pattern for traction.",
            "colorway": "Dark Glow Black",
            "release_date": "2021",
            "brand": "Adidas",
            "style": "700",
            "brand_type": "Yeezy Boost",
            "condition": "New",
            "retail_price": 300,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/277780/1.jpg"
        }, 
        {
            "name": "YEEZY BOOST 700 MNVN 'GEODE'",
            "description": "The adidas Yeezy Boost 700 MNVN Geode is a collaboration product between adidas and music icon Kanye West’s Yeezy brand. Initially released as a Yeezy supply exclusive in 2021, this colorway had a wider launch in Spring 2022.",
            "colorway": "Geode Black",
            "release_date": "2021",
            "brand": "Adidas",
            "style": "700",
            "brand_type": "Yeezy Boost",
            "condition": "New",
            "retail_price": 220,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/293584/1.jpg"
        }, 
        {
            "name": "YEEZY 500 'ENFLAME'",
            "description": "The Yeezy 500 'Enflame' features vibrant tooling on its signature construction. The shoe's upper is built with a mix of open mesh and suede, finished in brown, tan, grey and indigo. A tongue pull-loop is included for easy on and off, while a rubber midfoot wrap bolsters the design. Underfoot, an Adiprene+ midsole provides cushioning and highlights the design in orange, matched underfoot by the rubber outsole, which offers traction.",
            "colorway": "Enflame",
            "release_date": "2021",
            "brand": "Adidas",
            "style": "500",
            "brand_type": "Yeezy Boost",
            "condition": "New",
            "retail_price": 220,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/251736/1.jpg"
        }, 
        {
            "name": "YEEZY 500 'BROWN CLAY'",
            "description": "An earthy color tone is featured on the adidas Yeezy 500 'Brown Clay' throughout the branding-free upper with a ventilated open mesh base with soft suede overlays and a reinforced rubber mudguard. The subdued color palette extends to the sneaker's high-rebound adiPRENE+ midsole, modeled after the retro 'Feet You Wear' technology used on Kobe Bryant's adidas KB8 3 from 1999. It's built on rubber pods to deliver better grip.",
            "colorway": "Brown Clay",
            "release_date": "2021",
            "brand": "Adidas",
            "style": "500",
            "brand_type": "Yeezy Boost",
            "condition": "New",
            "retail_price": 220,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/281433/1.jpg"
        }, 
        {
            "name": "Jordan 3 Retro Fire Red",
            "description": "The Air Jordan 3 Retro 'Fire Red' sees one of the original colors of the silhouette return, true to form. A white leather upper is paired with grey elephant print overlays on the toe and heel, while Fire Red accents on the midsole and collor offers a pop of contrast. Designed by Tinker Hatfield, the Air Jordan 3 was the first to feature a visible Nike Air unit, along with the Jumpman logo. This 2022 edition sees the return of the 'Nike Air' logo on the back heel, along with the 'Nike' wordmark on the outsole.",
            "colorway": "White / Fire Red",
            "release_date": "2022",
            "brand": "Jordan",
            "style": "mid",
            "brand_type": "3",
            "condition": "New",
            "retail_price": 160,
            "image_url": "https://cdn.flightclub.com/1250/TEMPLATE/314576/1.jpg"
        }, 
        {
            "name": "AIR JORDAN 11 RETRO 'COOL GREY' 2021",
            "description": "Released in December 2021, the Air Jordan 11 Retro 'Cool Grey' 2021 brings back a colorway from 2001 and 2010. Faithful to the OG, the shoe's upper is built with leather, finished in grey and supported by a darker grey patent leather mudguard. Tonal webbing eyelets are worked into the lacing system to secure the fit, while underfoot, a contrasting white phylon midsole houses full-length Air for cushioning, with a carbon fiber plate included for added support. An icy translucent rubber outsole provides traction.",
            "colorway": "White / Cool Grey",
            "release_date": "2021",
            "brand": "Jordan",
            "style": "mid",
            "brand_type": "11",
            "condition": "New",
            "retail_price": 225,
            "image_url": "https://cdn.flightclub.com/1500/TEMPLATE/248952/1.jpg"
        }, 
        {
            "name": "AIR JORDAN 11 RETRO 'JUBILEE'",
            "description": "Releasing to celebrate 25 years of the iconic silhouette, the Air Jordan 11 Retro 'Jubilee / 25th Anniversary' emerges with a classic look. The shoe's upper is built with a ballistic mesh base, overlaid by patent leather, with both elements finished in black. The 3D metallic Jumpman and '23' heel branding accent the look in silver, with a similar finish on the 'Jordan' that marks the eyelets. Underfoot, a white Air midsole provides cushioning and contrast, giving way to a translucent rubber outsole for traction.",
            "colorway": "White / Cool Grey",
            "release_date": "2020",
            "brand": "Jordan",
            "style": "mid",
            "brand_type": "11",
            "condition": "New",
            "retail_price": 225,
            "image_url": "https://cdn.flightclub.com/1500/TEMPLATE/162081/1.jpg"
        }, 
        {
            "name": "AIR JORDAN 11 RETRO 'BRED' 2019",
            "description": "Bringing back an OG colorway, the Air Jordan 11 Retro 'Bred' 2019 features a familiar Chicago Bulls look. The shoe's upper is built with a mix of mesh and patent leather, all finished in black, save for the Varsity Red Jumpman and white '23.' Underfoot, a contrasting white midsole houses Air and a midfoot plate, while a Varsity Red rubber outsole provides traction and completes the look.",
            "colorway": "Black / White / Varsity Red",
            "release_date": "2020",
            "brand": "Jordan",
            "style": "mid",
            "brand_type": "11",
            "condition": "New",
            "retail_price": 225,
            "image_url": "https://cdn.flightclub.com/1500/TEMPLATE/152814/1.jpg"
        }, 
        {
            "name": "AIR JORDAN 11 RETRO 'CONCORD' 2018",
            "description": "The 2018 version of the Air Jordan 11 Retro ‘Concord’ shows off ‘45’ imprinted on the black heel tab in honor of the jersey number that Michael Jordan wore when he returned to the NBA after his first retirement. The shoe’s other signature details remain intact, including a white ballistic mesh upper, black patent leather overlays, and an icy translucent outsole.",
            "colorway": "Black / White / Concord",
            "release_date": "2018",
            "brand": "Jordan",
            "style": "mid",
            "brand_type": "11",
            "condition": "New",
            "retail_price": 225,
            "image_url": "https://cdn.flightclub.com/1500/TEMPLATE/805882/1.jpg"
        }, 
        {
            "name": "AIR JORDAN 11 RETRO 'LEGEND BLUE' 2014",
            "description": "Bringing back a 1996 OG colorway, the Air Jordan 11 Retro 'Legend Blue' 2014 dropped in 2014. Originally worn by Michael Jordan in his first All-Star Game after his first retirement, the shoe's upper emerges with a white leather base, highlighted by Legend Blue hits drawn from his University of North Carolina alma mater. The usual patent leather mudguard supports the fit, while underfoot, full-length Air in the phylon midsole provides cushioning.",
            "colorway": "White / Legend Blue",
            "release_date": "2014",
            "brand": "Jordan",
            "style": "mid",
            "brand_type": "11",
            "condition": "New",
            "retail_price": 225,
            "image_url": "https://cdn.flightclub.com/1500/TEMPLATE/012088/1.jpg"
        }, 
        {
            "name": "AIR JORDAN 11 RETRO 'SPACE JAM' 2016",
            "description": "The 2016 reissue of the Air Jordan 11 Retro ‘Space Jam’ was successful enough that it surpassed all previous releases in Nike history to become the brand’s highest grossing sneaker to date. The retro launch, marking the 20th anniversary of the shoe’s namesake film, features a design that’s true to Michael Jordan’s original PE colorway, including the ‘45’ printed in white on the heel tab.",
            "colorway": "White / Legend Blue",
            "release_date": "2016",
            "brand": "Jordan",
            "style": "mid",
            "brand_type": "11",
            "condition": "New",
            "retail_price": 225,
            "image_url": "https://cdn.flightclub.com/1500/TEMPLATE/012597/1.jpg"
        }, 
        {
            "name": "AIR JORDAN 4 RETRO OG 'BRED' 2019",
            "description": "The Air Jordan 4 Retro OG 'Bred' 2019 released to help celebrate the 30th annivesary of the silhouette. Featuring the same OG colorway that Michael Jordan wore while hitting 'The Shot' in 1989, the shoe features a black nubuck upper complemented by hits of Cement Grey. Fire Red accents emerge on the tongue and outsole, while Air in the heel provides cushioning.",
            "colorway": "Black / White / Fire-red",
            "release_date": "2019",
            "brand": "Jordan",
            "style": "mid",
            "brand_type": "4",
            "condition": "New",
            "retail_price": 200,
            "image_url": "https://cdn.flightclub.com/1500/TEMPLATE/139813/1.jpg"
        }, 
        {
            "name": "AIR JORDAN 4 RETRO OG 'WHITE CEMENT' 2016",
            "description": "The Air Jordan 4 Retro OG ‘White Cement’ returned to store shelves in 2016, featuring a design that’s true to the original 1989 release. The build makes use of a white leather upper, accented with speckled Cement Grey hits on the shoe’s structural wings, midsole and heel panel, the latter adorned with Nike Air branding. A red Jumpman logo on the woven Flight tongue tag offers a contrasting pop of color.",
            "colorway": "Black / White ",
            "release_date": "2016",
            "brand": "Jordan",
            "style": "mid",
            "brand_type": "4",
            "condition": "New",
            "retail_price": 200,
            "image_url": "https://cdn.flightclub.com/1500/TEMPLATE/804168/1.jpg"
        }, 
        {
            "name": "AIR JORDAN 4 RETRO 'MOTORSPORTS'",
            "description": "Launching in 2017, the Air Jordan 4 Retro ‘Motorsports’ is modeled after an extremely limited pair that was gifted to the 16 members of MJ’s motorcycle racing team back in 2006. Unlike its predecessor, there is no Mars Blackmon graphic on the lateral heel, but the larger design remains the same, highlighted by a white leather upper with black and Game Royal accents.",
            "colorway": "Black / White / Blue ",
            "release_date": "2014",
            "brand": "Jordan",
            "style": "mid",
            "brand_type": "4",
            "condition": "New",
            "retail_price": 200,
            "image_url": "https://cdn.flightclub.com/1500/TEMPLATE/800490/1.jpg"
        }, 
        {
            "name": "AIR JORDAN 4 RETRO SE 'WHAT THE 4'",
            "description": "The Air Jordan 4 Retro SE 'What The 4' combines the silhouette’s four OG colorways on a single pair. The mismatched designs on the left and right shoe both make use of a white leather upper, complete with original details that include a woven flight tongue tag, quarter panel netting, visible Air cushioning on the midsole and Nike Air branding on the heel panel.",
            "colorway": "Black / White / Blue / Red",
            "release_date": "2019",
            "brand": "Jordan",
            "style": "mid",
            "brand_type": "4",
            "condition": "New",
            "retail_price": 200,
            "image_url": "https://cdn.flightclub.com/1500/TEMPLATE/138143/1.jpg"
        }, 
        {
            "name": "AIR JORDAN 4 RETRO 'UNIVERSITY BLUE'",
            "description": "The Air Jordan 4 Retro 'University Blue' looks to Michael Jordan's college days to inform its classic look. Built with suede, the shoe's upper appears primarily in University Blue, with cement detailing on the classic wings and heel overlay. Tonal mesh inserts emerge at the vamp and quarter panel, while the tongue tag is designed to look like a jock tag on the bottom hem of Jordan jerseys. Visible Air in the heel of the speckled midsole provides cushioning.",
            "colorway": "Black / White / Blue ",
            "release_date": "2021",
            "brand": "Jordan",
            "style": "mid",
            "brand_type": "4",
            "condition": "New",
            "retail_price": 200,
            "image_url": "https://cdn.flightclub.com/1500/TEMPLATE/186212/1.jpg"
        }, 
        {
            "name": "AIR JORDAN 4 RETRO 'LIGHTNING' 2021",
            "description": "Bringing back a 2006 colorway, which released alongside the 'Thunder,' the Air Jordan 4 Retro 'Lightning' 2021 features inspiration from Michael Jordan's motorsports team. The shoe's upper is built with nubuck, finished in Tour Yellow and contrasted by the mesh netting and signature wings. Underfoot, a white PU midsole houses visible Air in the heel to provide cushioning, giving way to a herringbone rubber outsole for traction.",
            "colorway": "Dark Grey / White / Yellow ",
            "release_date": "2021",
            "brand": "Jordan",
            "style": "mid",
            "brand_type": "4",
            "condition": "New",
            "retail_price": 200,
            "image_url": "https://cdn.flightclub.com/1500/TEMPLATE/248963/1.jpg"
        }, 
        
    ]


    for item in apparels:
        new_apparel = Apparel(
            name = item["name"],
            description = item["description"],
            colorway = item["colorway"],
            release_date = item["release_date"],
            brand = item["brand"],
            style = item["style"],
            brand_type = item["brand_type"],
            condition = item["condition"],
            retail_price = item["retail_price"],
            # price_sold = item["price_sold"],
            # quantity_sold = item["quantity_sold"],
            image_url = item["image_url"]
        )

        db.session.add(new_apparel)
    
    db.session.commit()
    print('Apparel was succesfully seeded')


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_apparel():
    db.session.execute('DELETE FROM apparels;')
    db.session.commit()
