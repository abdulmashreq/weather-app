const images = [
    { src: 'https://lunenburgdocfest.com/wp-content/uploads/2016/11/Climate-Change-Still-1-1-400x400.jpg' },
    { src: 'https://vichumanist.org.au/wp-content/uploads/stock/smokestack_hirise_building_med.jpg' },
    { src: 'https://pbs.twimg.com/profile_images/1054790003908317184/w7BqKMZE_400x400.jpg' },
    { src: 'https://pbs.twimg.com/profile_images/1118601912029286401/ELNiDKnN_400x400.png' },
    { src: 'https://pbs.twimg.com/profile_images/1116456470726545409/WAZcnaOr_400x400.jpg' },
    { src: 'https://pbs.twimg.com/profile_images/639041298750668801/NhKuN58O_400x400.jpg' },
    { src: 'https://canadianmennonite.org/sites/default/files/article_photos/CFBlogosquare.jpg' },
    { src: 'https://pbs.twimg.com/profile_images/1141028960295432193/G3CLSJyG_400x400.png' },
    { src: 'https://agenparl.eu/wp-content/uploads/2019/05/Government-of-Canada.jpg' },
    { src: 'https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_78/climate_change_oh_its_real.jpg' },
];

const city = [
    { name: "Toronto",
      desc: "Toronto, the capital of the province of Ontario, is a major Canadian city along Lake Ontario’s northwestern shore. It's a dynamic metropolis with a core of soaring skyscrapers, all dwarfed by the iconic, free-standing CN Tower. Toronto also has many green spaces, from the orderly oval of Queen’s Park to 400-acre High Park and its trails, sports facilities and zoo.",
      country: "Canada",
      province: "Ontario",
      url: "/weather/toronto",
      code: 'CAON0696',
      pic: "https://images-na.ssl-images-amazon.com/images/I/61l3a6aiN6L._AC_SY400_.jpg"
     },
     { name: "Montreal",
       desc: "Montréal is the largest city in Canada's Québec province. It’s set on an island in the Saint Lawrence River and named after Mt. Royal, the triple-peaked hill at its heart. Its boroughs, many of which were once independent cities, include neighbourhoods ranging from cobblestoned, French colonial Vieux-Montréal – with the Gothic Revival Notre-Dame Basilica at its centre – to bohemian Plateau.",
       country: "Canada",
       province: "Quebec",
       url: "/weather/montreal",
       code: 'CAQC0363',
       pic: "https://obesitycanada.ca/wp-content/uploads/2018/06/Montreal-600x600-400x400.jpg"
      }
];

module.exports = { images, city };
