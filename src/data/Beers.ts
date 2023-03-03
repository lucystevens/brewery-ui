import Beer from "models/Beer";

// switch to hardcoded data while the API is reworked
export const beers: Beer[] = [
    {
       id: 1,
       name: "Mieter*innen",
       iconUrl: "/images/beers/mieterinnen.png",
       abv: 4.8,
       description: 
       "Roughly translated to English, mieter*innen means 'the residents of a building' or 'tenants' (can you see where we are going with this). " +
       "Our 4.5% helles lager takes the best of German and Scottish beer cultures for a crisp, bohemian refreshment, making it the perfect accompaniment to a slice of pizza on the beach.",
       style: "Helles Lager",
       core: true,
       untappdLink: "closet-brewing-project-mieter-innen/4988956",
    },
    {
       id: 2,
       name: "Lost in the Sauce",
       iconUrl: "/images/beers/lost-in-the-sauce.png",
       abv: 6.8,
       description: 
       "At 6.8% we recommend you enjoy this hazy New England IPA juicebomb in your garden, preferably next to a barbecue. " +
       "Expect a mouthful of stonefruit and citrus, courtesy of its iconic hop trio.",
       style: "New England IPA",
       core: true,
       untappdLink: "closet-brewing-project-mieter-innen/4988956",
    },
    {
       id: 3,
       name: "Vampire Spa Day",
       iconUrl: "/images/beers/vampire-spa-day.png",
       abv: 4.8,
       description: 
        "The only thing paler and more relaxing than a vampire enjoying a spa day? Our extra pale ale of course! " +
        "This refreshing beer is certainly one you'd want to sink your teeth into, and at 4.8% its just enough to get your blood pumping.",
       style: "Extra Pale Ale",
       core: false,
       untappdLink: "closet-brewing-project-vampire-spa-day/5085817",
    },
    {
        id: 4,
        name: "Beyond The Pale",
        iconUrl: "/images/beers/beyond-the-pale.png",
        abv: 7.0,
        description: 
            "This spooky Black IPA presents a gothic twist on your typical tipple. " +
            "The unholy combination of dark malts and resinous hops produces a haunting bitterness. " +
            "Much like a vengeful spirit, the flavour lingers even after the drink is all gone.",
        style: "Black IPA",
        core: false,
        untappdLink: "closet-brewing-project-beyond-the-pale/5085822",
     },
     {
        id: 5,
        name: "Cocoa Cannonball",
        iconUrl: "/images/beers/cocoa-cannonball.png",
        abv: 9.7,
        description: 
            "Our festive favourite, Cocoa Canonball is a big, boozy, imperial chocolate porter. " +
            "It is certainly a beer to be savoured, preferably in front of a fire with a mince pie to hand.",
        style: "Chocolate Porter",
        core: false,
        untappdLink: "closet-brewing-project-cocoa-cannonball/5085819",
     },
     {
        id: 6,
        name: "This is your Captain Speaking",
        iconUrl: "/images/beers/this-is-your-captain.png",
        abv: 8.4,
        description: 
            "This DIPA was made in collaboration with the lovely gang at Seabuckthorn Scotland, a delightful social enterprise dedicated to sustainably harvesting seabuckthorn berries in East Lothian. " +
            "To be enjoyed starboard while listening to the deep melodic tones of sailors singing sea shanties. This seabuckthorn double IPA is tart and tangy- the perfect antidote to a stiff sea breeze.",
        style: "Seabuckthorn DIPA",
        core: false,
        untappdLink: "closet-brewing-project-this-is-your-captain-speaking/5176844",
     },
     {
        id: 7,
        name: "It's a Stoat!",
        iconUrl: "/images/beers/its-a-stoat.png",
        abv: 4.7,
        description: 
            "This sessionable oaty stout is packed with toasted pecans and vanilla beans for pudding in beer form. " +
            "Nutty, creamy and silky smooth it's the perfect winter drink.",
        style: "Pecan Oatmeal Stout",
        core: false,
        untappdLink: "closet-brewing-project-it-s-a-stoat/5199967",
     },
     {
        id: 8,
        name: "Size Doesn't Matter",
        iconUrl: "/images/beers/size-doesnt-matter.png",
        abv: 1.8,
        description: 
            "It ain't about how big it is, it's what you do with it. " +
            "In our low alcohol micro IPA, we've packed in a bunch of hops for a juicy sessionable drink that will leave you floored, " +
            "but with a percentage that won't put you on the floor.",
        style: "Micro IPA",
        core: false,
        untappdLink: "closet-brewing-project-size-doesn-t-matter/5229289"
     },
     {
        id: 9,
        name: "8 Days a Week",
        iconUrl: "/images/beers/8-days-a-week.png",
        abv: 4.5,
        description: 
            "Fresh, floral and flavoursome with a moreish bite. " + 
            "This extra pale ale is perfect to enjoy any day of the week. " +
            "The gentle malt profile gives the hops space to shine, providing a sturdy backbone for the notes of lychee, grapefruit, peach and gooseberry that make up 8 Days A Week.",
        style: "Pale Ale",
        core: false,
        untappdLink: "closet-brewing-project-8-days-a-week/5258957"
     },
 ]