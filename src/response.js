export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - one piece",
        totalResults: "5070000000",
        searchTerms: "one piece",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "f5e6c0338bb6f4441",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - one piece",
        totalResults: "5070000000",
        searchTerms: "one piece",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "f5e6c0338bb6f4441",
      },
    ],
  },
  context: {
    title: "Google",
  },
  searchInformation: {
    searchTime: 0.312528,
    formattedSearchTime: "0.31",
    totalResults: "5070000000",
    formattedTotalResults: "5,070,000,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "One Piece - Wikipedia",
      htmlTitle: "\u003cb\u003eOne Piece\u003c/b\u003e - Wikipedia",
      link: "https://en.wikipedia.org/wiki/One_Piece",
      displayLink: "en.wikipedia.org",
      snippet:
        "The story follows the adventures of Monkey D. Luffy and his crew, the Straw Hat Pirates, where he explores the Grand Line in search of the mythical treasure ...",
      htmlSnippet:
        "The story follows the adventures of Monkey D. Luffy and his crew, the Straw Hat Pirates, where he explores the Grand Line in search of the mythical treasure&nbsp;...",
      formattedUrl: "https://en.wikipedia.org/wiki/One_Piece",
      htmlFormattedUrl:
        "https://en.wikipedia.org/wiki/\u003cb\u003eOne\u003c/b\u003e_\u003cb\u003ePiece\u003c/b\u003e",
      pagemap: {
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
            "theme-color": "#eaecf0",
            "og:image:width": "1200",
            "og:type": "website",
            viewport:
              "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0",
            "og:title": "One Piece - Wikipedia",
            "og:image:height": "1893",
            "format-detection": "telephone=no",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Watch ONE PIECE | Netflix Official Site",
      htmlTitle:
        "Watch \u003cb\u003eONE PIECE\u003c/b\u003e | Netflix Official Site",
      link: "https://www.netflix.com/title/80217863",
      displayLink: "www.netflix.com",
      snippet:
        "ONE PIECE ... With his straw hat and ragtag crew, young pirate Monkey D. Luffy goes on an epic voyage for treasure in this live-action adaptation of the popular ...",
      htmlSnippet:
        "\u003cb\u003eONE PIECE\u003c/b\u003e ... With his straw hat and ragtag crew, young pirate Monkey D. Luffy goes on an epic voyage for treasure in this live-action adaptation of the popular&nbsp;...",
      formattedUrl: "https://www.netflix.com/title/80217863",
      htmlFormattedUrl: "https://www.netflix.com/title/80217863",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdfPOOc9zKhglU53sipQXLgYhDDVPCs46-uM23QamnDeI8HUzTT_LGDo&s",
            width: "300",
            height: "168",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUO5oZTgqdLOE1sKmWvGSyEsGDBAz39MZZMDCJ2cVKgTXD4k7r9A3H28AMVoVWVApEZtXIxWB7WoVPnuoRGHxkeYyFFK7wG1vgsg.jpg?r=7c0",
            "twitter:card": "summary_large_image",
            "al:ios:app_name": "Netflix",
            "og:title": "Watch ONE PIECE | Netflix Official Site",
            "al:android:package": "com.netflix.mediaclient",
            "og:video:secure_url":
              "https://occ-0-8407-2219.1.nflxso.net/so/soa1/792/1666751741512729089.mp4?v=1&e=1727789529&t=ssSrbUGrqk8SLmuWXgE2jwsDt4w",
            "al:ios:url": "nflx://www.netflix.com/title/80217863",
            "og:description":
              "With his straw hat and ragtag crew, young pirate Monkey D. Luffy goes on an epic voyage for treasure in this live-action adaptation of the popular manga.",
            "al:ios:app_store_id": "363590051",
            "al:android:url": "nflx://www.netflix.com/title/80217863",
            "twitter:site": "@netflix",
            "og:video":
              "https://occ-0-8407-2219.1.nflxso.net/so/soa1/792/1666751741512729089.mp4?v=1&e=1727789529&t=ssSrbUGrqk8SLmuWXgE2jwsDt4w",
            viewport:
              "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0",
            "og:video:type": "video/mp4",
            "og:url": "https://www.netflix.com/title/80217863",
            "al:android:app_name": "Netflix",
          },
        ],
        cse_image: [
          {
            src: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUO5oZTgqdLOE1sKmWvGSyEsGDBAz39MZZMDCJ2cVKgTXD4k7r9A3H28AMVoVWVApEZtXIxWB7WoVPnuoRGHxkeYyFFK7wG1vgsg.jpg?r=7c0",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "One Piece (TV Series 1999– ) - IMDb",
      htmlTitle:
        "\u003cb\u003eOne Piece\u003c/b\u003e (TV Series 1999– ) - IMDb",
      link: "https://www.imdb.com/title/tt0388629/",
      displayLink: "www.imdb.com",
      snippet:
        "One Piece: Created by Eiichiro Oda. With Mayumi Tanaka, Akemi Okamura, Laurent Vernin, Tony Beck. Monkey D. Luffy sets off on an adventure with his pirate ...",
      htmlSnippet:
        "\u003cb\u003eOne Piece\u003c/b\u003e: Created by Eiichiro Oda. With Mayumi Tanaka, Akemi Okamura, Laurent Vernin, Tony Beck. Monkey D. Luffy sets off on an adventure with his pirate&nbsp;...",
      formattedUrl: "https://www.imdb.com/title/tt0388629/",
      htmlFormattedUrl: "https://www.imdb.com/title/tt0388629/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKalA4caWfd5WL5NcFdVlvVZUtkCGpS4VsOvVz-K6S8exGMgYVtdzVatWF&s",
            width: "191",
            height: "263",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "og:type": "video.tv_show",
            "og:image:width": "1000",
            "twitter:title":
              "One Piece (TV Series 1999– ) ⭐ 9.0 | Animation, Action, Adventure",
            "twitter:card": "summary_large_image",
            "imdb:subpagetype": "main",
            "og:site_name": "IMDb",
            "og:title":
              "One Piece (TV Series 1999– ) ⭐ 9.0 | Animation, Action, Adventure",
            "imdb:pageconst": "tt0388629",
            "og:image:height": "1374.0234375",
            "og:description": "24m | TV-14",
            "twitter:image":
              "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "next-head-count": "48",
            "twitter:image:alt":
              'One Piece: Created by Eiichiro Oda. With Mayumi Tanaka, Akemi Okamura, Laurent Vernin, Tony Beck. Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure ever, known as the "One Piece."',
            "twitter:site": "@IMDb",
            "og:locale:alternate": "es_ES",
            viewport: "width=device-width",
            "twitter:description": "24m | TV-14",
            "og:locale": "en_US",
            "og:url": "https://www.imdb.com/title/tt0388629/",
            "imdb:pagetype": "title",
          },
        ],
        cse_image: [
          {
            src: "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "Read One Piece Manga Free - Official Shonen Jump From Japan - VIZ",
      htmlTitle:
        "Read One Piece Manga Free - Official Shonen Jump From Japan - VIZ",
      link: "https://www.viz.com/shonenjump/chapters/one-piece",
      displayLink: "www.viz.com",
      snippet:
        "The world's most popular manga! Read free or become a member. Start your free trial today! | One Piece - Join Monkey D. Luffy and his swashbuckling crew in ...",
      htmlSnippet:
        "The world&#39;s most popular manga! Read free or become a member. Start your free trial today! | \u003cb\u003eOne Piece\u003c/b\u003e - Join Monkey D. Luffy and his swashbuckling crew in&nbsp;...",
      formattedUrl: "https://www.viz.com/shonenjump/chapters/one-piece",
      htmlFormattedUrl:
        "https://www.viz.com/sh\u003cb\u003eone\u003c/b\u003enjump/chapters/\u003cb\u003eone\u003c/b\u003e-\u003cb\u003epiece\u003c/b\u003e",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_Vb85j7b7J4wZAkbWYNPEDTzSHLbkg6mUSAv34EbnpPrUpT3ns5hTbEx&s",
            width: "355",
            height: "142",
          },
        ],
        metatags: [
          {
            "cart-version": "5.1.5.3",
            "msapplication-config": "/favicon/browserconfig.xml?v=47MPqANpyj",
            "theme-color": "#ff0000",
            viewport: "width=device-width, initial-scale=1",
            "server-info": "Vizmule-Group1-d-0f5b1@702ed85",
            "viz-itunes-app":
              "app-id=594237344, affiliate-data=pt=432995&ct=VizSmartBanner",
            "google-play-app": "app-id=com.viz.wsj.android",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src: "https://dw9to29mmj727.cloudfront.net/promo/2016/5265-SeriesHeaders_OP_2000x800_wm.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Watch One Piece - Crunchyroll",
      htmlTitle: "Watch \u003cb\u003eOne Piece\u003c/b\u003e - Crunchyroll",
      link: "https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece",
      displayLink: "www.crunchyroll.com",
      snippet:
        "Stream and watch the anime One Piece on Crunchyroll. Embark on a voyage of a lifetime with One Piece. The epic anime series created by renowned mangaka ...",
      htmlSnippet:
        "Stream and watch the anime \u003cb\u003eOne Piece\u003c/b\u003e on Crunchyroll. Embark on a voyage of a lifetime with \u003cb\u003eOne Piece\u003c/b\u003e. The epic anime series created by renowned mangaka&nbsp;...",
      formattedUrl: "https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece",
      htmlFormattedUrl:
        "https://www.crunchyroll.com/series/GRMG8ZQZR/\u003cb\u003eone\u003c/b\u003e-\u003cb\u003epiece\u003c/b\u003e",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBixUUfDO32bYxTthtxsMYU5LDIoKe0FYZeXByfQzm5k52hwC7eFh0vcq9&s",
            width: "300",
            height: "168",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=640,height=360/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpg",
            "theme-color": "#1b1a26",
            "og:type": "video.tv_show",
            "twitter:card": "summary",
            "og:image:width": "640",
            viewport: "width=device-width,initial-scale=1,maximum-scale=1",
            "og:title": "Watch One Piece",
            "og:locale": "en_US",
            "og:image:user_generated": "false",
            "og:url": "https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece",
            "og:description":
              "Stream and watch the anime One Piece on Crunchyroll. Embark on a voyage of a lifetime with One Piece. The epic anime series created by renowned mangaka Eiichiro Oda is a global phenomenon, captivating the hearts of fans across generations throughout its 25-year span. This thrilling high seas adventure is filled with unwavering friendship, epic battles for freedom, and the relentless pursuit of dreams. Join Monkey D. Luffy and his lovable pirate crew as they discover the true meaning of power and justice in this great pirate era.\r\n\r\nMonkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become King of the Pirates. With his rubber-like stretching powers granted by the supernatural Devil Fruit, the spirited young pirate seeks the legendary treasure known as the One Piece. He’ll chart a course for the treacherous waters of the Grand Line and recruit a motley crew to build his Straw Hat Pirates one bond at a time. This is one captain who’ll never drop anchor until he and his friends",
          },
        ],
        cse_image: [
          {
            src: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=640,height=360/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "One Piece Wiki",
      htmlTitle: "\u003cb\u003eOne Piece\u003c/b\u003e Wiki",
      link: "https://onepiece.fandom.com/wiki/One_Piece_Wiki",
      displayLink: "onepiece.fandom.com",
      snippet:
        "One Piece Encyclopedia is a database that anyone can edit about the Shonen Jump anime and manga series One Piece created by Eiichiro Oda, that features ...",
      htmlSnippet:
        "\u003cb\u003eOne Piece\u003c/b\u003e Encyclopedia is a database that anyone can edit about the Shonen Jump anime and manga series \u003cb\u003eOne Piece\u003c/b\u003e created by Eiichiro Oda, that features&nbsp;...",
      formattedUrl: "https://onepiece.fandom.com/wiki/One_Piece_Wiki",
      htmlFormattedUrl:
        "https://\u003cb\u003eonepiece\u003c/b\u003e.fandom.com/wiki/\u003cb\u003eOne\u003c/b\u003e_\u003cb\u003ePiece\u003c/b\u003e_Wiki",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBAN8iVk2fd5X3znQsfCX8oRFf6MigJBHQL9ZEFqeYZ8k99lJMEhwo_7BW&s",
            width: "216",
            height: "151",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://images.wikia.com/onepiece/images/b/bc/Wiki.png",
            "theme-color": "#eaecf0",
            "twitter:card": "summary",
            "twitter:title": "One Piece Wiki | Fandom",
            "fb:app_id": "112328095453510",
            "og:type": "website",
            "twitter:site": "@getfandom",
            "twitter:url": "https://onepiece.fandom.com/wiki/One_Piece_Wiki",
            viewport:
              "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0",
            "og:title": "One Piece Wiki",
            "og:url": "https://onepiece.fandom.com/wiki/One_Piece_Wiki",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src: "https://images.wikia.com/onepiece/images/b/bc/Wiki.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "ONE PIECE ODYSSEY | Official Site",
      htmlTitle: "\u003cb\u003eONE PIECE\u003c/b\u003e ODYSSEY | Official Site",
      link: "https://www.bandainamcoent.com/games/one-piece-odyssey",
      displayLink: "www.bandainamcoent.com",
      snippet:
        "The crew sets out on a new adventurous journey filled with wonders of a raging nature, powerful enemies, and strange encounters with island locals.",
      htmlSnippet:
        "The crew sets out on a new adventurous journey filled with wonders of a raging nature, powerful enemies, and strange encounters with island locals.",
      formattedUrl: "https://www.bandainamcoent.com/games/one-piece-odyssey",
      htmlFormattedUrl:
        "https://www.bandainamcoent.com/games/\u003cb\u003eone\u003c/b\u003e-\u003cb\u003epiece\u003c/b\u003e-odyssey",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJricP7P0B3XNF1zcjZryx3y5urud5-pLE_xVDNVzt6KPqC_jZ1g8-VTMX&s",
            width: "310",
            height: "163",
          },
        ],
        metatags: [
          {
            "og:image": "https://media.graphassets.com/ENhxA6GbRd4us7RBtr8A",
            "og:type": "website",
            "twitter:card": "summary",
            "twitter:title": "ONE PIECE ODYSSEY | Official Site",
            "msvalidate.01": "4E7A7D3903010D6535144D2F5AC58C93",
            "twitter:url": "https://bandainamcoent.com/games/one-piece-odyssey",
            "og:title": "ONE PIECE ODYSSEY | Official Site",
            title: "ONE PIECE ODYSSEY | Official Site",
            "og:description":
              "Join the Straw Hats in One Piece Odyssey as they embark on a thrilling new adventure. Filled with raging nature, powerful enemies, and strange encounters.",
            "og:image:secure_url":
              "https://media.graphassets.com/ENhxA6GbRd4us7RBtr8A",
            "twitter:image:src":
              "https://media.graphassets.com/ENhxA6GbRd4us7RBtr8A",
            viewport: "width=device-width, initial-scale=1",
            "twitter:description":
              "Join the Straw Hats in One Piece Odyssey as they embark on a thrilling new adventure. Filled with raging nature, powerful enemies, and strange encounters.",
            "og:url": "https://bandainamcoent.com/games/one-piece-odyssey",
          },
        ],
        cse_image: [
          {
            src: "https://media.graphassets.com/ENhxA6GbRd4us7RBtr8A",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Onepiece Onesies",
      htmlTitle: "\u003cb\u003eOnepiece\u003c/b\u003e Onesies",
      link: "https://www.onepiece.com/",
      displayLink: "www.onepiece.com",
      snippet:
        "Original Onesie 2.0 Jumpsuit Mid Blue New arrival Add to wishlist Original Onesie 2.0 Jumpsuit Mid Blue 179.00 USD",
      htmlSnippet:
        "Original Onesie 2.0 Jumpsuit Mid Blue New arrival Add to wishlist Original Onesie 2.0 Jumpsuit Mid Blue 179.00 USD",
      formattedUrl: "https://www.onepiece.com/",
      htmlFormattedUrl: "https://www.\u003cb\u003eonepiece\u003c/b\u003e.com/",
      pagemap: {
        metatags: [
          {
            "application-name": "Onepiece",
            "msapplication-tilecolor": "#010101",
            "theme-color": "#010101",
            "og:type": "website",
            "og:site_name": "Onepiece",
            viewport: "width=device-width, initial-scale=1",
            "apple-mobile-web-app-title": "Onepiece",
            "og:title": "Onepiece Onesies",
            "mobile-web-app-capable": "yes",
            "og:url": "https://www.onepiece.com/us",
            "og:description":
              "A unique collection of comfortable designer onesies designed in Norway. Browse our latest arrivals. Worldwide shipping.",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "One Piece",
      htmlTitle: "\u003cb\u003eOne Piece\u003c/b\u003e",
      link: "https://www.reddit.com/r/OnePiece/",
      displayLink: "www.reddit.com",
      snippet:
        "r/OnePiece: Welcome to r/OnePiece, the community for Eiichiro Oda's manga and anime series One Piece. From the East Blue to the New World, anything…",
      htmlSnippet:
        "r/\u003cb\u003eOnePiece\u003c/b\u003e: Welcome to r/\u003cb\u003eOnePiece\u003c/b\u003e, the community for Eiichiro Oda&#39;s manga and anime series \u003cb\u003eOne Piece\u003c/b\u003e. From the East Blue to the New World, anything…",
      formattedUrl: "https://www.reddit.com/r/OnePiece/",
      htmlFormattedUrl:
        "https://www.reddit.com/r/\u003cb\u003eOnePiece\u003c/b\u003e/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLqquwbM7H7QLTutVSUGYQSaEFT5VY4HHqiGDRFL96XE9g1j4bihQFrQO&s",
            width: "225",
            height: "225",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://styles.redditmedia.com/t5_2rfz5/styles/communityIcon_0jgg9qqdkbxb1.png",
            "theme-color": "#000000",
            "og:image:width": "256",
            "og:type": "website",
            "twitter:card": "summary",
            "twitter:title": "r/OnePiece",
            "og:site_name": "Reddit",
            "og:title": "r/OnePiece",
            "og:image:height": "256",
            bingbot: "noarchive",
            "msapplication-navbutton-color": "#000000",
            "og:description":
              "Welcome to r/OnePiece, the community for Eiichiro Oda's manga and anime series One Piece. From the East Blue to the New World, anything related to the world of One Piece belongs here! If you've just set sail with the Straw Hat Pirates, be wary of spoilers on this subreddit!",
            "twitter:image":
              "https://styles.redditmedia.com/t5_2rfz5/styles/communityIcon_0jgg9qqdkbxb1.png",
            "apple-mobile-web-app-status-bar-style": "black",
            "twitter:site": "@reddit",
            viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
            "apple-mobile-web-app-capable": "yes",
            "og:ttl": "600",
            "og:url": "https://www.reddit.com/r/OnePiece/",
          },
        ],
        cse_image: [
          {
            src: "https://styles.redditmedia.com/t5_2rfz5/styles/communityIcon_0jgg9qqdkbxb1.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "One Piece | One Piece Wiki | Fandom",
      htmlTitle:
        "\u003cb\u003eOne Piece\u003c/b\u003e | \u003cb\u003eOne Piece\u003c/b\u003e Wiki | Fandom",
      link: "https://onepiece.fandom.com/wiki/One_Piece",
      displayLink: "onepiece.fandom.com",
      snippet:
        "For other uses of this name, see One Piece (Disambiguation). One Piece is the name the world gave to all the treasure gained by the Pirate King Gol D. Roger ...",
      htmlSnippet:
        "For other uses of this name, see \u003cb\u003eOne Piece\u003c/b\u003e (Disambiguation). \u003cb\u003eOne Piece\u003c/b\u003e is the name the world gave to all the treasure gained by the Pirate King Gol D. Roger&nbsp;...",
      formattedUrl: "https://onepiece.fandom.com/wiki/One_Piece",
      htmlFormattedUrl:
        "https://\u003cb\u003eonepiece\u003c/b\u003e.fandom.com/wiki/\u003cb\u003eOne\u003c/b\u003e_\u003cb\u003ePiece\u003c/b\u003e",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9K7papBd8d-_4nn9zgDJEQC1nGE8C1IVqmQjQ5_LgD5XNwi37iVaOyw&s",
            width: "250",
            height: "65",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://static.wikia.nocookie.net/onepiece/images/e/e6/Site-logo.png/revision/latest?cb=20210522224219",
            "theme-color": "#eaecf0",
            "twitter:card": "summary",
            "twitter:title": "One Piece | One Piece Wiki | Fandom",
            "og:type": "article",
            "og:site_name": "One Piece Wiki",
            "twitter:url": "https://onepiece.fandom.com/wiki/One_Piece",
            "og:title": "One Piece",
            "og:description":
              "For other uses of this name, see One Piece (Disambiguation). One Piece is the name the world gave to all the treasure gained by the Pirate King Gol D. Roger.[2] At least a portion of it once belonged to Joy Boy during the Void Century.[3] The treasure is said to be of unimaginable value, and is currently located on Laugh Tale, the final island of the Grand Line. The One Piece is the driving goal of Monkey D. Luffy and his crew, as well as that of multiple other pirates, who all seek to claim the",
            "fb:app_id": "112328095453510",
            "twitter:site": "@getfandom",
            viewport:
              "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0",
            "twitter:description":
              "For other uses of this name, see One Piece (Disambiguation). One Piece is the name the world gave to all the treasure gained by the Pirate King Gol D. Roger.[2] At least a portion of it once...",
            "og:url": "https://onepiece.fandom.com/wiki/One_Piece",
            "format-detection": "telephone=no",
          },
        ],
        videoobject: [
          {
            duration: "PT01M40S",
            contenturl: "https://cdn.jwplayer.com/videos/RuZ0vHE3-cSpmBcaY.mp4",
            uploaddate: "2024-09-11T20:47:53+00:00",
            name: "Dan Da Dan | Official Trailer",
            thumbnailurl:
              "https://cdn.jwplayer.com/v2/media/RuZ0vHE3/poster.jpg?width=720",
          },
        ],
        cse_image: [
          {
            src: "https://static.wikia.nocookie.net/onepiece/images/e/e6/Site-logo.png/revision/latest?cb=20210522224219",
          },
        ],
      },
    },
  ],
};
