const sample = [
  {
    id: 'tt19465630',
    productionStatus: {
      currentProductionStage: {
        id: 'released',
        text: 'Released',
        __typename: 'ProductionStage',
      },
      productionStatusHistory: [
        {
          status: {
            id: 'released',
            text: 'Released',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
      ],
      restriction: null,
      __typename: 'ProductionStatusDetails',
    },
    canHaveEpisodes: false,
    series: null,
    titleText: { text: 'Sniper. The White Raven', __typename: 'TitleText' },
    titleType: { id: 'movie', canHaveEpisodes: false, __typename: 'TitleType' },
    originalTitleText: {
      text: 'Sniper. The White Raven',
      __typename: 'TitleText',
    },
    certificate: { rating: 'R', __typename: 'Certificate' },
    releaseYear: { year: 2022, __typename: 'YearRange' },
    releaseDate: {
      day: 24,
      month: 8,
      year: 2022,
      country: {
        id: 'UA',
        text: 'Ukraine',
        __typename: 'LocalizedDisplayableCountry',
      },
      __typename: 'ReleaseDate',
    },
    runtime: { seconds: 6660, __typename: 'Runtime' },
    canRate: { isRatable: true, __typename: 'CanRate' },
    ratingsSummary: { topRanking: null, __typename: 'RatingsSummary' },
    meterRanking: {
      currentRank: 2519,
      rankChange: {
        changeDirection: 'UP',
        difference: 1534,
        __typename: 'MeterRankChange',
      },
      __typename: 'TitleMeterRanking',
    },
    primaryImage: { id: 'rm1439244033', __typename: 'Image' },
    images: {
      total: 7,
      edges: [
        {
          node: { id: 'rm2361990913', __typename: 'Image' },
          __typename: 'ImageEdge',
        },
      ],
      __typename: 'ImageConnection',
    },
    videos: { total: 3, __typename: 'TitleRelatedVideosConnection' },
    primaryVideos: {
      edges: [
        {
          node: {
            id: 'vi787071513',
            createdDate: '2022-06-06T17:09:03.553Z',
            isMature: false,
            runtime: { value: 129, __typename: 'VideoRuntime' },
            name: {
              value: 'Official Trailer',
              language: 'uk',
              __typename: 'LocalizedString',
            },
            description: {
              value:
                'After suffering a tragedy at the hand of invading soldiers in Donbas, an Ukrainian physics teacher seeks revenge. He sets his sights on an elite Russian sniper whose elimination could change the tide of the conflict.',
              language: 'uk',
              __typename: 'LocalizedString',
            },
            timedTextTracks: [],
            recommendedTimedTextTrack: null,
            thumbnail: {
              url: 'https://m.media-amazon.com/images/M/MV5BMjYyNDMwN2MtNTAyZS00NDBkLWI5ZTktMzA3ZGU5NDRlMWY4XkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg',
              height: 1080,
              width: 1920,
              __typename: 'Thumbnail',
            },
            primaryTitle: {
              id: 'tt19465630',
              titleText: {
                text: 'Sniper. The White Raven',
                __typename: 'TitleText',
              },
              originalTitleText: {
                text: 'Sniper. The White Raven',
                __typename: 'TitleText',
              },
              releaseYear: { year: 2022, __typename: 'YearRange' },
              __typename: 'Title',
            },
            playbackURLs: [
              {
                displayName: {
                  value: '480p',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'MP4',
                videoDefinition: 'DEF_480p',
                url: 'https://imdb-video.media-imdb.com/vi787071513/1434659607842-pgv4ql-1654535344437.mp4?Expires=1704594378&Signature=pk9oLzJ7nmRPWziOoPqahnfl1pneZBj~QozltPVrlatPp1zzkQ2j0i1rWC4-R6PIrfFhTzAyEyY2pXlpFo4EP98U4sfDGct12M5U7w6TvG11CmYxuXEZ8uooIjR64ZDAL0L2shne8V8soqSDobNTUhECPhMcB3F6XXQ9SC7dqTWxVVyOW6~SJMZod~OhdNX73dTCkrIZeZU7wKBoanFva-xofPCEzIlRWbyFckbH6tgMCBM6VEyIUT0bn-xnLuklPEGqNpaZCJGjDTYCcxaDJ5GmtXuHwfOa6rMadZS0lCbKedV-t-w9HrZj8lwcbdLWHEPpVveO9hs4RGbSyKd8qA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
              {
                displayName: {
                  value: 'SD',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'MP4',
                videoDefinition: 'DEF_SD',
                url: 'https://imdb-video.media-imdb.com/vi787071513/1434659454657-dx9ykf-1654535344437.mp4?Expires=1704594378&Signature=AYZnXpjVl7gGYNhWeblMyFJstwdwT3eRC4GdfG70XlNfcGldz3Wxyvi0Box6~WgXkPGeO828~whVObwKZ27alF3BcgVlOWyUxzq5lnUmxR0vKqxt4gm0S8TtYVRPwwuq6xyvyDipCrH-LSxg~5nkou4jNsjvZh0siyHi~mUJ-CDVypapq0vNwBsyXvInoRiqqVHW~rc-0mk3Sur8GWVjCdHSYfN32EjZk4zxrWEMUeoFGxuNafykXfBhv89O-6AKnS5brV~5lBBzpmn-tL0PctWZiVDFHbrQ1g4ilipeMNeckqOGgz4GE19i0CnWPY~ySiVGNFJfb13Qe6M~eakugA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
            ],
            contentType: {
              id: 'amzn1.imdb.video.contenttype.trailer',
              displayName: { value: 'Trailer', __typename: 'LocalizedString' },
              __typename: 'VideoContentType',
            },
            previewURLs: [
              {
                displayName: {
                  value: 'AUTO',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'M3U8',
                videoDefinition: 'DEF_AUTO',
                url: 'https://imdb-video.media-imdb.com/vi787071513/hls-preview-79353ff1-9750-49d0-8f07-f8d72a396b4b.m3u8?Expires=1704594378&Signature=FAjZQw6fU-60FSeAODxL1nuetmYdE1u1EdJ9Ke5r4TZPx-ZGdO8cwok-IQwlMz3b4zuFTgDB32nHJBLJm6QoGhC6fKiAMJP0i7CdULOERNz2f-IniRzLyD4eKgb5hYEfc6f2St28XjLfumHICcGK5RwrlKnHwviX~VgSHozUkzFnnly9-yX3YEeMKQ44rDMYV5Il2jAzi3qAA9FIZt7F6T2bj2opNm0hItS8n4aAolU-80wXtmobZWLOELBdp6NJvGcsgKmutxjClb2c6TOXhE~wOvCA0CSepGd1d7nLkRhqrsUR1gEZMON5M8FXvKRrM81~58D~XYCBqfL6k5RCIg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
            ],
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi1334755865',
            createdDate: '2022-05-17T15:34:59.035Z',
            isMature: false,
            runtime: { value: 137, __typename: 'VideoRuntime' },
            name: {
              value: 'Teaser Trailer',
              language: 'uk',
              __typename: 'LocalizedString',
            },
            description: {
              value:
                "Mykola is an eccentric pacifist who wants to be useful to humanity. When the war begins at Donbass, Mykola's naive world is collapsing as the militants kill his pregnant wife and burn his home to the ground.",
              language: 'uk',
              __typename: 'LocalizedString',
            },
            timedTextTracks: [],
            recommendedTimedTextTrack: null,
            thumbnail: {
              url: 'https://m.media-amazon.com/images/M/MV5BYjcyZThmYmUtZTFjMC00YzU5LWFkYzItNGNiNjUzMWJhYTJkXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg',
              height: 1080,
              width: 1920,
              __typename: 'Thumbnail',
            },
            primaryTitle: {
              id: 'tt19465630',
              titleText: {
                text: 'Sniper. The White Raven',
                __typename: 'TitleText',
              },
              originalTitleText: {
                text: 'Sniper. The White Raven',
                __typename: 'TitleText',
              },
              releaseYear: { year: 2022, __typename: 'YearRange' },
              __typename: 'Title',
            },
            playbackURLs: [
              {
                displayName: {
                  value: '480p',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'MP4',
                videoDefinition: 'DEF_480p',
                url: 'https://imdb-video.media-imdb.com/vi1334755865/1434659607842-pgv4ql-1652801699420.mp4?Expires=1704594378&Signature=FR569ZnbklrWDAqaMAsKcARJ~36uYBmYKid5iS~RvuftTBiTCXyCWVFDEyGg4BgnJxbNQGWU8k0EKG-SXeTl6cWsh0yrsoBVASekGpG6lll-lugWN4iujn6dPRNinxC~IcXkGD55GV9SKrUWsxOw9FqBEpll1Vr1a~ZOpsnCRXqrtAlBMUl2lskUDXzQTohViIPsKbhwI8Vv6qMu0CLGqITzcdDqJ9dkA0vyDyxU2xDwh7eMnlzmtz~EPIntyNHoHZkIUMG9kiDvFH0BvXB1tsFAnPhaUXoasQoW2tC-3b8FmsGwlBgoUrQhojpq~NLgvV-6u6QmGcWivo4tXDVEyw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
              {
                displayName: {
                  value: 'SD',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'MP4',
                videoDefinition: 'DEF_SD',
                url: 'https://imdb-video.media-imdb.com/vi1334755865/1434659454657-dx9ykf-1652801699420.mp4?Expires=1704594378&Signature=bnrJMp2eaobQQ2iV~T-liA4muWWwLMhERyrmd99GBSJdpuOcDqbo9Vn6lR56YgWbNlRKwvNUAPl1HkP~jP3jOoo7bwdg6Te4t-uwSxYIHMjrdJTr0Rrhfb7ecPmOqk7vsAH87afPsuJccPwiIKlP4uAi~HwUcH91mFl2SzJ5Jh-kNhOD8s1dhQ5FpZvZkuAwqecMvcNm-pn1BuEMtCEgyWYByd6Dpln8OF1cFiAJuOOoSbodTqGffvoK6YSBxJwg2ttcjXM342KRv34AKk0KpVgG9iNaZGD3-DBBmPRknxiOC-mv9l~MTz2kyzrR2~2lcGHlLhuuWfguCfORSHKPDQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
            ],
            contentType: {
              id: 'amzn1.imdb.video.contenttype.trailer',
              displayName: { value: 'Trailer', __typename: 'LocalizedString' },
              __typename: 'VideoContentType',
            },
            previewURLs: [
              {
                displayName: {
                  value: 'AUTO',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'M3U8',
                videoDefinition: 'DEF_AUTO',
                url: 'https://imdb-video.media-imdb.com/vi1334755865/hls-preview-a6117403-2798-4aea-87a8-ca26d1b444e7.m3u8?Expires=1704594378&Signature=m6HWwCHE8051mY53lnERHSzIdMq-OK~sLLgol6mQVeQXbzMNRtCzfWrEWNV0vSRTvdSsHEjWMmOqd1P-wi4r~q~xA2cKcVdJlyssqmwLNXIHYxuJkV1qfsMV77F08djeCmQEK9ipru30TvMSWu8GceQwCIS22Yz2bPNjQ5NgAXmRdAa6DSjGIrhymAsTEU3QbYCvLPDn94FKeskY1TYkmojficXWWzM6cZ1IWvbXNwUp3QdSmCTb~NAVQPF9cAfBmczK1tGr5Rysbpo9A0kqUV-S3f14Xp1G7hdhOBTsxz3wRvgdzvj5d8B49Qo-f9l05TGch1G04zoHm7HR1eoz-A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
            ],
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
      ],
      __typename: 'VideoConnection',
    },
    externalLinks: { total: 28, __typename: 'ExternalLinkConnection' },
    metacritic: {
      metascore: { score: 54, __typename: 'Metascore' },
      __typename: 'Metacritic',
    },
    keywords: {
      total: 43,
      edges: [
        {
          node: {
            text: 'russian occupation of ukraine',
            __typename: 'TitleKeyword',
          },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: { text: 'loss of wife', __typename: 'TitleKeyword' },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: {
            text: 'husband wife relationship',
            __typename: 'TitleKeyword',
          },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: {
            text: 'ukrainian russian relations',
            __typename: 'TitleKeyword',
          },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: { text: 'eastern europe', __typename: 'TitleKeyword' },
          __typename: 'TitleKeywordEdge',
        },
      ],
      __typename: 'TitleKeywordConnection',
    },
    genres: {
      genres: [
        { text: 'Drama', id: 'Drama', __typename: 'Genre' },
        { text: 'War', id: 'War', __typename: 'Genre' },
      ],
      __typename: 'Genres',
    },
    plot: {
      plotText: {
        plainText:
          'After suffering a tragedy at the hand of invading soldiers in Donbas, an Ukrainian physics teacher seeks revenge. He sets his sights on an elite Russian sniper whose elimination could change the tide of the conflict.',
        __typename: 'Markdown',
      },
      language: { id: 'en-US', __typename: 'DisplayableLanguage' },
      __typename: 'Plot',
    },
    plotContributionLink: {
      url: 'https://contribute.imdb.com/updates?update=tt19465630:outlines.add.1.locale~en-US',
      __typename: 'ContributionLink',
    },
    credits: { total: 68, __typename: 'CreditConnection' },
    principalCredits: [
      {
        totalCredits: 1,
        category: {
          text: 'Director',
          id: 'director',
          __typename: 'CreditCategory',
        },
        credits: [
          {
            name: {
              nameText: { text: 'Marian Bushan', __typename: 'NameText' },
              id: 'nm11595610',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
      {
        totalCredits: 2,
        category: {
          text: 'Writers',
          id: 'writer',
          __typename: 'CreditCategory',
        },
        credits: [
          {
            name: {
              nameText: { text: 'Marian Bushan', __typename: 'NameText' },
              id: 'nm11595610',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
          {
            name: {
              nameText: { text: 'Mykola Voronin', __typename: 'NameText' },
              id: 'nm13887614',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
      {
        totalCredits: 32,
        category: { text: 'Stars', id: 'cast', __typename: 'CreditCategory' },
        credits: [
          {
            name: {
              nameText: { text: 'Pavlo Aldoshyn', __typename: 'NameText' },
              id: 'nm3838884',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Cast',
          },
          {
            name: {
              nameText: { text: 'Maryna Koshkina', __typename: 'NameText' },
              id: 'nm9582810',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Cast',
          },
          {
            name: {
              nameText: { text: 'Andrey Mostrenko', __typename: 'NameText' },
              id: 'nm5643878',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Cast',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
    ],
    reviews: { total: 51, __typename: 'ReviewsConnection' },
    criticReviewsTotal: { total: 22, __typename: 'ExternalLinkConnection' },
    triviaTotal: { total: 1, __typename: 'TriviaConnection' },
    engagementStatistics: {
      watchlistStatistics: {
        displayableCount: {
          text: 'Added by 9.9K users',
          __typename: 'LocalizedDisplayableCount',
        },
        __typename: 'WatchlistStatistics',
      },
      __typename: 'EngagementStatistics',
    },
    subNavCredits: { total: 68, __typename: 'CreditConnection' },
    subNavReviews: { total: 51, __typename: 'ReviewsConnection' },
    subNavTrivia: { total: 1, __typename: 'TriviaConnection' },
    subNavFaqs: { total: 0, __typename: 'FaqConnection' },
    subNavTopQuestions: { total: 15, __typename: 'AlexaQuestionConnection' },
    titleGenres: {
      genres: [
        {
          genre: { text: 'Drama', __typename: 'GenreItem' },
          __typename: 'TitleGenre',
        },
        {
          genre: { text: 'War', __typename: 'GenreItem' },
          __typename: 'TitleGenre',
        },
      ],
      __typename: 'TitleGenres',
    },
    meta: {
      canonicalId: 'tt19465630',
      publicationStatus: 'PUBLISHED',
      __typename: 'TitleMeta',
    },
    castPageTitle: {
      edges: [
        {
          node: {
            name: {
              nameText: { text: 'Pavlo Aldoshyn', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              nameText: { text: 'Maryna Koshkina', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              nameText: { text: 'Andrey Mostrenko', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              nameText: { text: 'Roman Semysal', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
      ],
      __typename: 'CreditConnection',
    },
    creatorsPageTitle: [],
    directorsPageTitle: [
      {
        credits: [
          {
            name: {
              nameText: { text: 'Marian Bushan', __typename: 'NameText' },
              __typename: 'Name',
            },
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
    ],
    countriesOfOrigin: {
      countries: [{ id: 'UA', text: 'Ukraine', __typename: 'CountryOfOrigin' }],
      __typename: 'CountriesOfOrigin',
    },
    production: {
      edges: [
        {
          node: {
            company: {
              id: 'co0750475',
              companyText: { text: 'UM Group', __typename: 'CompanyText' },
              __typename: 'Company',
            },
            __typename: 'CompanyCredit',
          },
          __typename: 'CompanyCreditEdge',
        },
      ],
      __typename: 'CompanyCreditConnection',
    },
    featuredReviews: {
      edges: [
        {
          node: {
            id: 'rw8387911',
            author: {
              nickName: 'nhmbwngrt',
              userId: 'ur155200617',
              __typename: 'UserProfile',
            },
            summary: {
              originalText: 'Unfortunately very real',
              __typename: 'ReviewSummary',
            },
            text: {
              originalText: {
                plaidHtml:
                  'I see a lot of 1 star ratings but all this are from russians watching this movie.<br/><br/>So I had to give 10 stars but in fact its 7-8 star movie. Definetely watchable and good spent time.',
                __typename: 'Markdown',
              },
              __typename: 'ReviewText',
            },
            authorRating: 10,
            submissionDate: '2022-07-31',
            helpfulness: {
              upVotes: 53,
              downVotes: 37,
              __typename: 'ReviewHelpfulness',
            },
            __typename: 'Review',
          },
          __typename: 'ReviewEdge',
        },
      ],
      __typename: 'ReviewsConnection',
    },
    __typename: 'Title',
    wins: { total: 0, __typename: 'AwardNominationConnection' },
    nominations: { total: 3, __typename: 'AwardNominationConnection' },
    prestigiousAwardSummary: null,
    episodes: null,
    videoStrip: {
      edges: [
        {
          node: {
            id: 'vi787071513',
            contentType: {
              displayName: { value: 'Trailer', __typename: 'LocalizedString' },
              __typename: 'VideoContentType',
            },
            name: { value: 'Official Trailer', __typename: 'LocalizedString' },
            runtime: { value: 129, __typename: 'VideoRuntime' },
            thumbnail: {
              height: 1080,
              url: 'https://m.media-amazon.com/images/M/MV5BMjYyNDMwN2MtNTAyZS00NDBkLWI5ZTktMzA3ZGU5NDRlMWY4XkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg',
              width: 1920,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi1334755865',
            contentType: {
              displayName: { value: 'Trailer', __typename: 'LocalizedString' },
              __typename: 'VideoContentType',
            },
            name: { value: 'Teaser Trailer', __typename: 'LocalizedString' },
            runtime: { value: 137, __typename: 'VideoRuntime' },
            thumbnail: {
              height: 1080,
              url: 'https://m.media-amazon.com/images/M/MV5BYjcyZThmYmUtZTFjMC00YzU5LWFkYzItNGNiNjUzMWJhYTJkXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg',
              width: 1920,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi2515386905',
            contentType: {
              displayName: { value: 'Trailer', __typename: 'LocalizedString' },
              __typename: 'VideoContentType',
            },
            name: {
              value: 'Sniper. The White Raven',
              __typename: 'LocalizedString',
            },
            runtime: { value: 129, __typename: 'VideoRuntime' },
            thumbnail: {
              height: 1080,
              url: 'https://m.media-amazon.com/images/M/MV5BYzQyZGJmNDEtYmU1MS00MGQ3LWE4MjEtMjc1ZDVmOTU0ZjY0XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg',
              width: 1920,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
      ],
      __typename: 'VideoConnection',
    },
    titleMainImages: {
      total: 7,
      edges: [
        {
          node: {
            id: 'rm2361990913',
            url: 'https://m.media-amazon.com/images/M/MV5BNzU4YTZhNGItYWU2MS00MDU5LWFkMTUtZDVmNDM2N2NlNjk0XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
            caption: {
              plainText: 'Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 791,
            width: 1815,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm3167297281',
            url: 'https://m.media-amazon.com/images/M/MV5BZmQ3ZWI3ZjQtZDhiOC00ZGMyLWE3NGItNzk0OGNkOGZlOTE0XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
            caption: {
              plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 795,
            width: 1821,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm2697535233',
            url: 'https://m.media-amazon.com/images/M/MV5BY2MwNDkxZTgtNjI1Ni00NmUxLWI0ZTctN2I5ZmFiZTA5MjY5XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
            caption: {
              plainText: 'Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 791,
            width: 1811,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm1489575681',
            url: 'https://m.media-amazon.com/images/M/MV5BZTk0OGI3ZDEtZmFhOS00NGYxLWI0YWQtYTg0YjFkMGExZDE1XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
            caption: {
              plainText: 'Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 793,
            width: 1817,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm356781569',
            url: 'https://m.media-amazon.com/images/M/MV5BYzRiMmFlN2UtMmM3ZS00NTJiLTk0N2UtZmExNzkyZWQ5YjhlXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg',
            caption: {
              plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 3000,
            width: 2000,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm1026951169',
            url: 'https://m.media-amazon.com/images/M/MV5BMDRiODE1MDctMTU5Yy00OGJkLTljNzAtNGRkOTYwYmFhNTJjXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg',
            caption: {
              plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 1772,
            width: 1181,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm1439244033',
            url: 'https://m.media-amazon.com/images/M/MV5BNWMwOTgyNmMtYWNlYS00NGIyLTllOWYtZTVlNzU3N2ViZWQ5XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
            caption: {
              plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
              __typename: 'Markdown',
            },
            height: 1772,
            width: 1181,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
      ],
      __typename: 'ImageConnection',
    },
    imageUploadLink: {
      url: 'https://contribute.imdb.com/image/tt19465630/add?bus=imdb&return_url=https%3A%2F%2Fwww.imdb.com%2Fclose_me&site=web',
      __typename: 'ContributionLink',
    },
    cast: {
      edges: [
        {
          node: {
            name: {
              id: 'nm3838884',
              nameText: { text: 'Pavlo Aldoshyn', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Mykola', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm9582810',
              nameText: { text: 'Maryna Koshkina', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BYTM1MGRkMzgtMTFmZS00NjU4LWIwOGYtNjhmODY0MWJmMzE4XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_.jpg',
                width: 1280,
                height: 720,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actress', __typename: 'CreditCategory' },
            characters: [{ name: 'Nastya', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm5643878',
              nameText: { text: 'Andrey Mostrenko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: [
              {
                text: 'as Andriy Mostrenko',
                __typename: 'CreditedAsCreditAttribute',
              },
            ],
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Cap', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm9457418',
              nameText: { text: 'Roman Semysal', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [
              { name: 'Brigade commander', __typename: 'Character' },
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm0236618',
              nameText: { text: 'Oleg Drach', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BYzE0Y2UwZjgtYjE0OC00OGNjLThlMWQtNWU0MDNlNmNjZTVmXkEyXkFqcGdeQXVyMTMzOTU3MDcz._V1_.jpg',
                width: 261,
                height: 420,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Syeryy', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm7424662',
              nameText: { text: 'Roman Yasinovskiy', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BN2M0NmFiZmQtMTZlZi00MWNiLTlhMjAtMjA4NWNmNjc2MThlXkEyXkFqcGdeQXVyNjg3MTIwODI@._V1_.jpg',
                width: 2048,
                height: 1281,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Klym', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm9236420',
              nameText: { text: 'Oleg Shulga', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BZWM5NTdhMDAtYmRiNC00NWY3LWFhN2UtZmQ4N2IxZmQyZjIxXkEyXkFqcGdeQXVyNTc0NjY1ODk@._V1_.jpg',
                width: 960,
                height: 960,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Dunay', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm9201438',
              nameText: { text: 'Vadim Lyalko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: [
              {
                text: 'as Vadym Lyalko',
                __typename: 'CreditedAsCreditAttribute',
              },
            ],
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [
              { name: 'Commander of the GRU (Buryy)', __typename: 'Character' },
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm8247168',
              nameText: { text: 'Vadim Kurilko', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BZGQyY2M0ZTItNzJlMy00YWViLTkxNGUtYTZkMzk2YzcwOTUzXkEyXkFqcGdeQXVyNjg3MTIwODI@._V1_.jpg',
                width: 540,
                height: 435,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: [
              {
                text: 'as Vadym Kurylko',
                __typename: 'CreditedAsCreditAttribute',
              },
            ],
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Hyurza', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm12115530',
              nameText: { text: 'Vladyslav Dmytrenko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Malysh', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm10823253',
              nameText: { text: 'Eugen Volosheniuk', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: [
              {
                text: 'as Yevhen Voloshenyuk',
                __typename: 'CreditedAsCreditAttribute',
              },
            ],
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Batyanya', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm11383417',
              nameText: { text: 'Oleksandr Bykov', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Thin', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm15108485',
              nameText: { text: 'Serhiy Artemenko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Volunteer', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm11348671',
              nameText: { text: 'Egor Kozlov', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Ivan', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm10801200',
              nameText: { text: 'Zachary Shadrin', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BODI1ZGMzODgtNzIyZC00ZjE1LWE4YmMtOGFiYTg2YTg5OWUyXkEyXkFqcGdeQXVyMTA0OTE1OTMx._V1_.jpg',
                width: 1334,
                height: 2000,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: [
              {
                text: 'as Zakhar Shadrin',
                __typename: 'CreditedAsCreditAttribute',
              },
            ],
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Taras', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm15108486',
              nameText: { text: 'Olena Chervonenko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actress', __typename: 'CreditCategory' },
            characters: [{ name: 'Journalist', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm4920987',
              nameText: { text: 'Demyan Radzivilyuk', __typename: 'NameText' },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BYjcyYWIyMGUtODdjNi00MjhhLWI3YTgtYTdkYWJkZTZmM2ZjXkEyXkFqcGdeQXVyMTY3NTY5OTcx._V1_.jpg',
                width: 577,
                height: 849,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'Operator', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm14091106',
              nameText: { text: 'Alina Karpenko', __typename: 'NameText' },
              primaryImage: null,
              __typename: 'Name',
            },
            attributes: null,
            category: { id: 'actor', __typename: 'CreditCategory' },
            characters: [{ name: 'News anchor', __typename: 'Character' }],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
      ],
      __typename: 'CreditConnection',
    },
    creators: [],
    directors: [
      {
        totalCredits: 1,
        category: { text: 'Director', __typename: 'CreditCategory' },
        credits: [
          {
            name: {
              id: 'nm11595610',
              nameText: { text: 'Marian Bushan', __typename: 'NameText' },
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
    ],
    writers: [
      {
        totalCredits: 2,
        category: { text: 'Writers', __typename: 'CreditCategory' },
        credits: [
          {
            name: {
              id: 'nm11595610',
              nameText: { text: 'Marian Bushan', __typename: 'NameText' },
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
          {
            name: {
              id: 'nm13887614',
              nameText: { text: 'Mykola Voronin', __typename: 'NameText' },
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
    ],
    isAdult: false,
    moreLikeThisTitles: {
      edges: [
        {
          node: {
            id: 'tt7691572',
            titleText: {
              text: 'Cyborgs: Heroes Never Die',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Kiborgy. Heroyi ne vmyrayut',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm3089784576',
              width: 1000,
              height: 1500,
              url: 'https://m.media-amazon.com/images/M/MV5BYTUyMWNkYWUtMTg1ZS00MjJiLWE2ZjgtYjJkYTJmMmEzNWI0XkEyXkFqcGdeQXVyNTEzNDIxOTg@._V1_.jpg',
              caption: {
                plainText:
                  'Vyacheslav Dovzhenko, Andrey Isaenko, Roman Yasinovskiy, Viktor Zhdanov, and Makar Tikhomirov in Cyborgs: Heroes Never Die (2017)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2017, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.5,
              voteCount: 7637,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6720, __typename: 'Runtime' },
            certificate: { rating: 'TV-14', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'War', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt8268302',
            titleText: {
              text: 'I Work at the Cemetery',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Ya pratsyuyu na tsvyntari',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm439794177',
              width: 1200,
              height: 1691,
              url: 'https://m.media-amazon.com/images/M/MV5BNjJkOWQwNTAtZjQ4Zi00ZTYxLTg1OGMtNTk3Njg5YTY5YmQ0XkEyXkFqcGdeQXVyNDAwMzY0OTk@._V1_.jpg',
              caption: {
                plainText: 'Vitaliy Saliy in I Work at the Cemetery (2021)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2021, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.4,
              voteCount: 1396,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6000, __typename: 'Runtime' },
            certificate: { rating: 'Not Rated', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Comedy', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Crime', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt11386020',
            titleText: { text: 'Black Raven', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Chornyy Voron',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm3018752513',
              width: 600,
              height: 900,
              url: 'https://m.media-amazon.com/images/M/MV5BMzc4NDViNTgtOGU3MC00NjcwLTk5MDktZTFjZDIwZWM1ZDA0XkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
              caption: {
                plainText: 'Black Raven (2019)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.3,
              voteCount: 583,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6600, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'History', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'War', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt5761544',
            titleText: { text: 'Kandahar', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Kandahar', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm487861761',
              width: 810,
              height: 1200,
              url: 'https://m.media-amazon.com/images/M/MV5BMjNiNDg2OWYtOGEzNy00M2E5LTgxZjItNzVmN2VmNTg3MzBhXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg',
              caption: {
                plainText: 'Gerard Butler in Kandahar (2023)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2023, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 6.1,
              voteCount: 29153,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 7140, __typename: 'Runtime' },
            certificate: { rating: 'R', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Thriller', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt26225074',
            titleText: { text: 'Myrnyi-21', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Myrnyi-21', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm2983014401',
              width: 600,
              height: 900,
              url: 'https://m.media-amazon.com/images/M/MV5BZGU3NTY1MDMtYWM3Zi00YWE0LWFjMTgtNjgwMjc0MmZjMTg4XkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
              caption: {
                plainText:
                  'Evgeniy Lamakh, Mariia Shtofa, Pavlo Li, Aleksey Tritenko, Andrey Saminin, and Andrey Mostrenko in Myrnyi-21 (2023)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2023, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.5,
              voteCount: 368,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 7020, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'War', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt8205656',
            titleText: { text: 'U311 Cherkasy', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Cherkasy', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm799080705',
              width: 1131,
              height: 1600,
              url: 'https://m.media-amazon.com/images/M/MV5BZGNhYjk4MzItZjhiMC00YWM0LWIwODQtZjBlYjBiNThkNTZlXkEyXkFqcGdeQXVyMTA1OTMyMjUw._V1_.jpg',
              caption: {
                plainText: 'U311 Cherkasy (2019)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 6.6,
              voteCount: 1178,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6120, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'History', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'War', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt17024450',
            titleText: { text: 'The Equalizer 3', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'The Equalizer 3',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm3479252737',
              width: 1080,
              height: 1350,
              url: 'https://m.media-amazon.com/images/M/MV5BODdiMzM2YjctZmU3ZS00MzUwLWJiYTMtMmI2NzIyMTQyOTQ1XkEyXkFqcGdeQXVyODY5NzkyMjA@._V1_.jpg',
              caption: {
                plainText: 'Denzel Washington in The Equalizer 3 (2023)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2023, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 6.8,
              voteCount: 84846,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6540, __typename: 'Runtime' },
            certificate: { rating: 'R', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Crime', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Thriller', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt21222434',
            titleText: {
              text: 'Sniper: Rogue Mission',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Sniper: Rogue Mission',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm1993804289',
              width: 1544,
              height: 2192,
              url: 'https://m.media-amazon.com/images/M/MV5BNjkxMzQwMzgtMzU0Yy00NGIzLWFiNjUtYmQ2MzVmMzJkN2JmXkEyXkFqcGdeQXVyNTg4MDc4Mg@@._V1_.jpg',
              caption: {
                plainText:
                  'Dennis Haysbert, Ryan Robbins, Chad Michael Collins, and Sayaka Akimoto in Sniper: Rogue Mission (2022)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2022, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 4.6,
              voteCount: 1578,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 5760, __typename: 'Runtime' },
            certificate: { rating: 'R', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Thriller', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt7876510',
            titleText: {
              text: 'My Thoughts Are Silent',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Moyi dumky tykhi',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm78351361',
              width: 1984,
              height: 2835,
              url: 'https://m.media-amazon.com/images/M/MV5BNzcxMzFmYzYtMjU0Mi00YTQzLWIwYzItN2NmZmY3NzRiNWMyXkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
              caption: {
                plainText:
                  'Andriy Lidagovskiy and Irma Vitovska in My Thoughts Are Silent (2019)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.8,
              voteCount: 3823,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6240, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Comedy', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt6349302',
            titleText: {
              text: 'Sniper: Ultimate Kill',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Sniper: Ultimate Kill',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm4087882240',
              width: 393,
              height: 521,
              url: 'https://m.media-amazon.com/images/M/MV5BYjVmYWRmYjgtODEyNS00ZTgwLTg5NDYtMDcyNzQ3ZGUyOGUyXkEyXkFqcGdeQXVyOTg4MDYyNw@@._V1_.jpg',
              caption: {
                plainText:
                  'Tom Berenger, Billy Zane, Chad Michael Collins, and Danay Garcia in Sniper: Ultimate Kill (2017)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: { year: 2017, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 5.6,
              voteCount: 5996,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 5400, __typename: 'Runtime' },
            certificate: { rating: 'R', __typename: 'Certificate' },
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Thriller', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt10276554',
            titleText: { text: 'Beshoot', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Beshoot', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm4260934145',
              width: 501,
              height: 709,
              url: 'https://m.media-amazon.com/images/M/MV5BOGZhZWZhY2ItNjM5My00YmJiLTk0MjAtNzkwYjUxNjlkMGQzXkEyXkFqcGdeQXVyODg1MTc3MTM@._V1_.jpg',
              caption: { plainText: 'Beshoot (2019)', __typename: 'Markdown' },
              __typename: 'Image',
            },
            releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.5,
              voteCount: 592,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 7200, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Action', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'War', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt10330046',
            titleText: { text: 'Censored', __typename: 'TitleText' },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: { plainText: '', __typename: 'Markdown' },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: { text: 'Zaboronenyy', __typename: 'TitleText' },
            primaryImage: {
              id: 'rm973182209',
              width: 600,
              height: 900,
              url: 'https://m.media-amazon.com/images/M/MV5BMGRkYWVlNGQtYTM4ZC00MmFmLWI0YTMtYmU4MTgzNWUzNDVlXkEyXkFqcGdeQXVyMjk1NzAxNg@@._V1_.jpg',
              caption: { plainText: 'Censored (2019)', __typename: 'Markdown' },
              __typename: 'Image',
            },
            releaseYear: { year: 2019, endYear: null, __typename: 'YearRange' },
            ratingsSummary: {
              aggregateRating: 7.4,
              voteCount: 834,
              __typename: 'RatingsSummary',
            },
            runtime: { seconds: 6000, __typename: 'Runtime' },
            certificate: null,
            canRate: { isRatable: true, __typename: 'CanRate' },
            titleGenres: {
              genres: [
                {
                  genre: { text: 'Biography', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'Drama', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
                {
                  genre: { text: 'History', __typename: 'GenreItem' },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
      ],
      __typename: 'MoreLikeThisConnection',
    },
    trivia: {
      edges: [
        {
          node: {
            text: {
              plaidHtml:
                'This gritty and evocative film follows a physics teacher in the Donbas region who suffers a family tragedy at the hands of invading Russian troops. The ex-pacifist joins the army as an unconventional sniper determined to gain revenge and defend the future of his country.<br/><br/>It was created with support from the Ukrainian State Film Agency, was co-written by Mykola Voronin - the real-life sniper whose story is portrayed - and features about 100 members of the Ukrainian armed forces and national guard. Even aside from those career military personnel, several of the main cast members are currently fighting on the front lines.',
              __typename: 'Markdown',
            },
            trademark: null,
            relatedNames: null,
            __typename: 'TitleTrivia',
          },
          __typename: 'TriviaEdge',
        },
      ],
      __typename: 'TriviaConnection',
    },
    goofsTotal: { total: 0, __typename: 'GoofConnection' },
    goofs: { edges: [], __typename: 'GoofConnection' },
    quotesTotal: { total: 0, __typename: 'TitleQuoteConnection' },
    quotes: { edges: [], __typename: 'TitleQuoteConnection' },
    crazyCredits: { edges: [], __typename: 'CrazyCreditConnection' },
    alternateVersions: {
      total: 0,
      edges: [],
      __typename: 'AlternateVersionConnection',
    },
    connections: { edges: [], __typename: 'TitleConnectionConnection' },
    soundtrack: { edges: [], __typename: 'SoundtrackConnection' },
    iframeAddReviewLink: {
      url: 'https://contribute.imdb.com/review/tt19465630/add?bus=imdb&return_url=https%3A%2F%2Fwww.imdb.com%2Fclose_me&site=web',
      __typename: 'ContributionLink',
    },
    topQuestions: {
      total: 15,
      edges: [
        {
          node: {
            attributeId: 'run-time',
            question: {
              plainText: 'How long is Sniper. The White Raven?',
              __typename: 'Markdown',
            },
            __typename: 'AlexaQuestion',
          },
          __typename: 'AlexaQuestionEdge',
        },
      ],
      __typename: 'AlexaQuestionConnection',
    },
    faqs: { total: 0, edges: [], __typename: 'FaqConnection' },
    detailsExternalLinks: {
      edges: [
        {
          node: {
            url: 'https://wellgousa.com/films/sniper-white-raven',
            label: 'official site',
            externalLinkRegion: null,
            __typename: 'ExternalLink',
          },
          __typename: 'ExternalLinkEdge',
        },
        {
          node: {
            url: 'http://www.wellgousa.com/films/sniper-the-white-raven',
            label: 'US Distributor Company Site - film page',
            externalLinkRegion: null,
            __typename: 'ExternalLink',
          },
          __typename: 'ExternalLinkEdge',
        },
      ],
      total: 3,
      __typename: 'ExternalLinkConnection',
    },
    spokenLanguages: {
      spokenLanguages: [
        { id: 'uk', text: 'Ukrainian', __typename: 'SpokenLanguage' },
        { id: 'ru', text: 'Russian', __typename: 'SpokenLanguage' },
      ],
      __typename: 'SpokenLanguages',
    },
    akas: {
      edges: [
        {
          node: { text: 'Снайпер. Білий ворон', __typename: 'Aka' },
          __typename: 'AkaEdge',
        },
      ],
      __typename: 'AkaConnection',
    },
    filmingLocations: {
      edges: [],
      total: 0,
      __typename: 'FilmingLocationConnection',
    },
    companies: { total: 9, __typename: 'CompanyCreditConnection' },
    productionBudget: {
      budget: { amount: 997800, currency: 'EUR', __typename: 'Money' },
      __typename: 'ProductionBudget',
    },
    lifetimeGross: {
      total: { amount: 881, currency: 'USD', __typename: 'Money' },
      __typename: 'BoxOfficeGross',
    },
    openingWeekendGross: {
      gross: {
        total: { amount: 881, currency: 'USD', __typename: 'Money' },
        __typename: 'BoxOfficeGross',
      },
      weekendEndDate: '2022-07-03',
      __typename: 'OpeningWeekendGross',
    },
    worldwideGross: {
      total: { amount: 6105, currency: 'USD', __typename: 'Money' },
      __typename: 'BoxOfficeGross',
    },
    technicalSpecifications: {
      soundMixes: { items: [], __typename: 'SoundMixes' },
      aspectRatios: {
        items: [
          { aspectRatio: '2.39:1', attributes: [], __typename: 'AspectRatio' },
        ],
        __typename: 'AspectRatios',
      },
      colorations: {
        items: [
          {
            conceptId: 'color',
            text: 'Color',
            attributes: [],
            __typename: 'Coloration',
          },
        ],
        __typename: 'Colorations',
      },
      __typename: 'TechnicalSpecifications',
    },
    contributionQuestions: {
      contributionLink: {
        url: 'https://contribute.imdb.com/answers',
        __typename: 'ContributionQuestionsLink',
      },
      edges: [
        {
          node: {
            entity: {
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BNWMwOTgyNmMtYWNlYS00NGIyLTllOWYtZTVlNzU3N2ViZWQ5XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_.jpg',
                width: 1181,
                height: 1772,
                caption: {
                  plainText: 'Pavlo Aldoshyn in Sniper. The White Raven (2022)',
                  __typename: 'Markdown',
                },
                __typename: 'Image',
              },
              __typename: 'Title',
            },
            questionId: 'tt19465630.plot_outline.fr-CA',
            questionText: {
              plainText:
                'What is the Canadian French language plot outline for Sniper. The White Raven (2022)?',
              __typename: 'Markdown',
            },
            contributionLink: {
              url: 'https://contribute.imdb.com/answers?pinnedQuestion=tt19465630.plot_outline.fr-CA',
              __typename: 'ContributionQuestionsLink',
            },
            __typename: 'Question',
          },
          __typename: 'QuestionEdge',
        },
      ],
      __typename: 'QuestionConnection',
    },
  },
];
console.log(sample[0].originalTitleText.text);
const poster = document.createElement('img');
poster.src =
  sample[0].contributionQuestions.edges[0].node.entity.primaryImage.url;
poster.alt = sample[0].plot.plotText.plainText;
poster.width = 200;
poster.style.borderRadius = '5px';
poster.style.boxShadow = '0px 0px 10px 2px gray';
poster.style.margin = '0 auto';
poster.style.display = 'block';

const body = document.querySelector('body');
body.style.padding = '20px 50px';
body.style.backgroundColor = 'rgb(0,55,95,0.10)';
const div = document.createElement('div');
document.body.prepend(div);
div.appendChild(poster);
// div.insertAdjacentHTML('afterbegin', image);
