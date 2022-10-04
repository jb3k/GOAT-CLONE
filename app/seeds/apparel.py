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
            "price_sold": 800,
            "quantity_sold": 1,
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
            "price_sold": 1000,
            "quantity_sold": 1,
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
            "price_sold": 300,
            "quantity_sold": 1,
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
            "price_sold": 300,
            "quantity_sold": 1,
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
            "price_sold": 1000,
            "quantity_sold": 1,
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
            "price_sold": 900,
            "quantity_sold": 1,
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
            "price_sold": 560,
            "quantity_sold": 1,
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
            "price_sold": 740,
            "quantity_sold": 1,
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
            "price_sold": 300,
            "quantity_sold": 1,
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
            "price_sold": 320,
            "quantity_sold": 1,
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
            "price_sold": 500,
            "quantity_sold": 1,
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
            "price_sold": 500,
            "quantity_sold": 1,
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
            "price_sold": 500,
            "quantity_sold": 1,
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
            "price_sold": 500,
            "quantity_sold": 1,
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
            "price_sold": 500,
            "quantity_sold": 1,
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
            "price_sold": 400,
            "quantity_sold": 1,
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
            "price_sold": 400,
            "quantity_sold": 1,
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
            "price_sold": 400,
            "quantity_sold": 1,
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
            "price_sold": 400,
            "quantity_sold": 1,
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
            "price_sold": 400,
            "quantity_sold": 1,
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
            "price_sold": 400,
            "quantity_sold": 1,
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
            "price_sold": 400,
            "quantity_sold": 1,
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
            "price_sold": 400,
            "quantity_sold": 1,
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
            "price_sold": 400,
            "quantity_sold": 1,
            "image_url": "https://cdn.flightclub.com/2200/TEMPLATE/281433/1.jpg"
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
            price_sold = item["price_sold"],
            quantity_sold = item["quantity_sold"],
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
