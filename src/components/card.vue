<template>
    
    <div style="margin-top: 5px;" class="pa-7">
        <ul style="display: grid;grid-template-columns:repeat(2,1fr);" ref="listE1">
            <li v-for="(item,index) in items" style="display:inline">
                <img v-bind:src="item.img" height="450px" class="ma-5">
                <v-card class="px-5 mx-5" max-width="300" elevation="4">
                {{item.desc}}
                <v-divider></v-divider>
                    <div>
                        <p>SIZES: XS,S,M,L,XL,XXL</p>
                    </div>
                </v-card>
            </li>
        </ul>
    </div> 
 
</template>

<script>


export default{

    data: () => ({

        items:[
            {index:'1',img:'https:\/\/wforwoman.gumlet.io\/product\/20AUS10614-114021\/665\/20AUS10614-114021_1.JPG',desc:'Red Kurta'},
            {index:'2',img:'https:\/\/wforwoman.gumlet.io\/product\/8907819902971\/300\/20FEW13115-113294_1.JPG',desc:'White Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/8907819867539\/300\/20FEW13143-113310_1.JPG',desc:'Orange Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13511L-114170\/300\/20FEW13511L-114170_1.JPG',desc:'Beige Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/21AUW13940-117086\/665\/21AUW13940-117086_1.JPG',desc:'Red Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13312-113509\/300\/20FEW13312-113509_1.JPG',desc:'Yellow Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/21AUW16285-116695\/300\/21AUW16285-116695.jpg',desc:'Mustard Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/19AUW12906-112479\/300\/19AUW12906-112479_1.JPG',desc:'Blue Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/8907819963453\/300\/20AUW14105-214871_1.JPG',desc:'Olive Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13495-213697\/300\/20FEW13495-213697_1.JPG',desc:'White Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13552L-213429\/300\/20FEW13552L-213429_1.JPG',desc:'Yellow Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/21SKW14804-S1367\/300\/21SKW14804-S1367_1.JPG',desc:'Beige Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/21AUW16285-116695\/665\/21AUW16285-116695.jpg',desc:'Yellow Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/19AUS10228-211415\/300\/19AUS10228-211415_1.JPG',desc:'Pink Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/21FEW14261-114498\/300\/21FEW14261-114498_1.JPG',desc:'Yellow Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/8907819853594\/300\/20FEW12205-112159_1.JPG',desc:'Blue Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/8907819895549\/300\/20FEW12992-113439_1.JPG',desc:'Beige Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/8907819898144\/300\/20FEW13009-113438_1.JPG',desc:'Beige Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13258-113495\/300\/20FEW13258-113495_1.JPG',desc:'Brown Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/8907819893699\/300\/20FEW13924L-115125_1.JPG',desc:'Beige Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/21FEW14261-114498\/665\/21FEW14261-114498_1.JPG',desc:'Yellow Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/19FEW12109-111566\/300\/19FEW12109-111566_1.JPG',desc:'Pink Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/8907819182250\/300\/19FEW12109-111566_1.JPG',desc:'Pink Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13208-113242\/300\/20FEW13208-113242_1.JPG',desc:'Sky-Blue Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13216-213232\/300\/20FEW13216-213232_1.JPG',desc:'White Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13246L-213708\/300\/20FEW13246L-213708_1.JPG',desc:'Yellow Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13249-113680\/300\/20FEW13249-113680.jpg',desc:'Red Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/21FEW13727-214351\/665\/21FEW13727-21351_1.jpg',desc:'White Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/22FEW17495-117954\/300\/22FEW17495-117954_1.JPG',desc:'Blue Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13113-113515\/300\/20FEW13113-113515_1.JPG',desc:'White Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13115-113294\/300\/20FEW13115-113294_1.JPG',desc:'White Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/8907819867539\/300\/20FEW13143-113310_1.JPG',desc:'Orange Kurta'},
            {index:'1',img:'https:\/\/wforwoman.gumlet.io\/product\/20AUS10614-114021\/665\/20AUS10614-114021_1.JPG',desc:'Red Kurta'},
            {index:'2',img:'https:\/\/wforwoman.gumlet.io\/product\/8907819902971\/300\/20FEW13115-113294_1.JPG',desc:'White Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/8907819867539\/300\/20FEW13143-113310_1.JPG',desc:'Orange Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13511L-114170\/300\/20FEW13511L-114170_1.JPG',desc:'Beige Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/21AUW13940-117086\/665\/21AUW13940-117086_1.JPG',desc:'Red Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13312-113509\/300\/20FEW13312-113509_1.JPG',desc:'Yellow Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/21AUW16285-116695\/300\/21AUW16285-116695.jpg',desc:'Mustard Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/19AUW12906-112479\/300\/19AUW12906-112479_1.JPG',desc:'Blue Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/8907819963453\/300\/20AUW14105-214871_1.JPG',desc:'Olive Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13495-213697\/300\/20FEW13495-213697_1.JPG',desc:'White Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13552L-213429\/300\/20FEW13552L-213429_1.JPG',desc:'Yellow Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/21SKW14804-S1367\/300\/21SKW14804-S1367_1.JPG',desc:'Beige Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/21AUW16285-116695\/665\/21AUW16285-116695.jpg',desc:'Yellow Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/19AUS10228-211415\/300\/19AUS10228-211415_1.JPG',desc:'Pink Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/21FEW14261-114498\/300\/21FEW14261-114498_1.JPG',desc:'Yellow Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/8907819853594\/300\/20FEW12205-112159_1.JPG',desc:'Blue Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/8907819895549\/300\/20FEW12992-113439_1.JPG',desc:'Beige Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/8907819898144\/300\/20FEW13009-113438_1.JPG',desc:'Beige Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13258-113495\/300\/20FEW13258-113495_1.JPG',desc:'Brown Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/8907819893699\/300\/20FEW13924L-115125_1.JPG',desc:'Beige Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/21FEW14261-114498\/665\/21FEW14261-114498_1.JPG',desc:'Yellow Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/19FEW12109-111566\/300\/19FEW12109-111566_1.JPG',desc:'Pink Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/8907819182250\/300\/19FEW12109-111566_1.JPG',desc:'Pink Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13208-113242\/300\/20FEW13208-113242_1.JPG',desc:'Sky-Blue Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13216-213232\/300\/20FEW13216-213232_1.JPG',desc:'White Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13246L-213708\/300\/20FEW13246L-213708_1.JPG',desc:'Yellow Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13249-113680\/300\/20FEW13249-113680.jpg',desc:'Red Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/21FEW13727-214351\/665\/21FEW13727-21351_1.jpg',desc:'White Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/22FEW17495-117954\/300\/22FEW17495-117954_1.JPG',desc:'Blue Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13113-113515\/300\/20FEW13113-113515_1.JPG',desc:'White Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/20FEW13115-113294\/300\/20FEW13115-113294_1.JPG',desc:'White Kurta'},
            {index:'',img:'https:\/\/wforwoman.gumlet.io\/product\/8907819867539\/300\/20FEW13143-113310_1.JPG',desc:'Orange Kurta'},
        ],

    }),
  

}
</script>