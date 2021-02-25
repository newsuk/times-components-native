/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { editionBreakpoints } from "@times-components-native/styleguide";
import {
  getTileStrapline,
  TileLink,
  TileSummary,
  getTileSummary,
} from "../shared";
import stylesFactory from "./styles";
import WithoutWhiteSpace from "../shared/without-white-space";
import PositionedTileStar from "../shared/positioned-tile-star";

const TileX = ({
  onPress,
  tile,
  breakpoint = editionBreakpoints.medium,
  orientation,
}) => {
  const styles = stylesFactory(breakpoint, orientation);

  const testSummary = [
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "It’s a Sin",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "It’s 1981: five 18-year-old lads leave home to share a London flat and a life of heady gay abandon. But a virus is on the rise . . . That’s the premise of ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "this is a link",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/what-ive-learnt-russell-t-davies-kfhj3jvhq",
            type: "article",
            canonicalId: "what-ive-learnt-russell-t-davies-kfhj3jvhq",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: "’s new series (his first since ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Years and Years",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "), loosely based on his experiences as it follows the characters over a decade. ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Olly Alexander",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/years-yearss-olly-alexander-celebrity-has-positives-but-my-sex-lifes-taken-quite-a-beating-6z8zfpfjw",
            type: "article",
            canonicalId:
              "years-yearss-olly-alexander-celebrity-has-positives-but-my-sex-lifes-taken-quite-a-beating-6z8zfpfjw",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: ", ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Keeley Hawes",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/keeley-hawes-on-taking-a-different-line-of-duty-in-her-new-tv-drama-honour-v8tt858t2",
            type: "article",
            canonicalId:
              "keeley-hawes-on-taking-a-different-line-of-duty-in-her-new-tv-drama-honour-v8tt858t2",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: ", Neil Patrick Harris and ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Stephen Fry",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/stephen-fry-i-wouldn-t-be-here-without-the-fringe-fk6bvqfqg",
            type: "article",
            canonicalId:
              "stephen-fry-i-wouldn-t-be-here-without-the-fringe-fk6bvqfqg",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: " star.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Channel 4; coming soon",
              },
            },
          ],
        },
      ],
    },
    {
      name: "image",
      attributes: {
        display: "primary",
        caption: "Alexandria Riley and Luke Evans in The Pembrokeshire Murders",
        credits: "ITV",
        url:
          "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F4769a506-43b9-11eb-afd8-7d77005d5199.jpg?crop=5988%2C3992%2C0%2C0",
        ratio: "1500:1000",
        relativeHorizontalOffset: 0,
        relativeVerticalOffset: 0,
        relativeWidth: 0.998,
        relativeHeight: 1,
      },
      children: [],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "The Pembrokeshire Murders ",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "New year, new ITV true-crime drama. For this one Luke Evans (Bard the Bowman in ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "The Hobbit",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              ") swaps Middle-earth for his native Wales as the detective reinvestigating two unsolved double murders from the 1980s. Most tantalising is the prospect of Keith Allen as serial killer John Cooper",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: ".",
              },
            },
            {
              name: "break",
              children: [],
            },
            {
              name: "text",
              children: [],
              attributes: {
                value: "ITV; Jan 10",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "WandaVision ",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "The Marvel “universe” is back with a vengeance in 2021 on Disney+, but first up, and by far the most curiosity-piquing, is ",
          },
        },
        {
          name: "bold",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Some bold text",
              },
            },
          ],
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value:
                  " This is a very long link text which will be cut off soon so keep going",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/elizabeth-the-great-nqdddv6nt",
            type: "article",
            canonicalId: "elizabeth-the-great-nqdddv6nt",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: " reprises her role from the ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Avengers ",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: "movies as Wanda, the Scarlet Witch.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Disney+; Jan 15",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Dead Pixels ",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "The second series of the sitcom that takes potshots at gamers and their obsessions has mellowed nicely. Standout stars are Charlotte Ritchie and ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Alexa Davies",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/guide-to-gaming-from-the-last-of-us-part-ii-to-mafia-what-to-play-if-lockdown-returns-g82dk363d",
            type: "article",
            canonicalId:
              "guide-to-gaming-from-the-last-of-us-part-ii-to-mafia-what-to-play-if-lockdown-returns-g82dk363d",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: ", real game fans.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "E4; Jan",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "The Investigation",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "This unusual Danish series tracks the investigative forces at work to bring the killer of the Swedish journalist Kim Wall to trial. Stars ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Borgen",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: "’s Pilou Asbaek and Soren Malling.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "BBC Two; Jan 29",
              },
            },
          ],
        },
      ],
    },
    {
      name: "ad",
      children: [],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Devils ",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "After ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Billions ",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: "and ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "italic",
              children: [
                {
                  name: "text",
                  children: [],
                  attributes: {
                    value: "Industry",
                  },
                },
              ],
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/how-real-is-industry-the-shows-writers-on-what-its-like-to-work-in-the-city-w9xhjm69j",
            type: "article",
            canonicalId:
              "how-real-is-industry-the-shows-writers-on-what-its-like-to-work-in-the-city-w9xhjm69j",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              ", the world of high finance is again presented as a place of sharks, snakes and other nasties with this stylish and topical international thriller. Patrick Dempsey plays one of the most powerful men in global finance and the mentor to the ruthless head of trading at a London investment bank. Their bond begins to crack when they get involved in an intercontinental financial battle and a war of loyalties.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Sky Atlantic; Feb",
              },
            },
          ],
        },
      ],
    },
    {
      name: "image",
      attributes: {
        display: "primary",
        caption: "Charlene McKenna plays a detective in Bloodlands",
        credits: "HTM TELEVISION/STEFFAN HILL",
        url:
          "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc450ab8c-43b9-11eb-afd8-7d77005d5199.jpg?crop=4500%2C3000%2C0%2C0",
        ratio: "1500:1000",
        relativeHorizontalOffset: 0,
        relativeVerticalOffset: 0,
        relativeWidth: 1,
        relativeHeight: 1,
      },
      children: [],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Bloodlands",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "Could Irish noir be the next big thing? Quite possibly, if this is a hit. ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "James Nesbitt",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/james-nesbitt-if-you-have-hair-you-still-get-offered-good-roles-bfqzsz8j0",
            type: "article",
            canonicalId:
              "james-nesbitt-if-you-have-hair-you-still-get-offered-good-roles-bfqzsz8j0",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              " gets back to his tough side playing a Northern Irish detective who discovers a possible suicide note in a car that had been left in a sea loch.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "BBC One; Feb",
              },
            },
          ],
        },
      ],
    },
    {
      name: "image",
      attributes: {
        display: "primary",
        caption: "Jonas Nay returns as Martin Rauch in Deutschland 89",
        credits: null,
        url:
          "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F50804bb0-4547-11eb-afd8-7d77005d5199.jpg?crop=2494%2C1663%2C338%2C22",
        ratio: "1500:1000",
        relativeHorizontalOffset: 0.11266666666666666,
        relativeVerticalOffset: 0.013033175355450236,
        relativeWidth: 0.8313333333333334,
        relativeHeight: 0.9851895734597157,
      },
      children: [],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Deutschland 89",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "The spies-and-sex trilogy about Martin Rauch, a handsome young East German recruited as an undercover agent in the west, reaches the final stretch, as the Berlin Wall’s days are numbered. But which side for Rauch?",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "More 4; Feb 26",
              },
            },
          ],
        },
      ],
    },
    {
      name: "image",
      attributes: {
        display: "primary",
        caption: "Kelly Macdonald as DCI Joanne Davidson in Line of Duty",
        credits: "WORLD PRODUCTIONS/STEFFAN HILL",
        url:
          "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F82c79bee-43b9-11eb-afd8-7d77005d5199.jpg?crop=4096%2C2731%2C0%2C0",
        ratio: "1500:1000",
        relativeHorizontalOffset: 0,
        relativeVerticalOffset: 0,
        relativeWidth: 1,
        relativeHeight: 1,
      },
      children: [],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Line of Duty",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "The most eagerly awaited show will be the latest series of bent coppers, table-turning police interviews and questions around the identity of chief baddie “H” (just how many Hs must there be by now?). Kelly Macdonald is the guest adversary this time. The guessing starts here.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "BBC One; early spring",
              },
            },
          ],
        },
      ],
    },
    {
      name: "image",
      attributes: {
        display: "primary",
        caption: "ZeroZeroZero is set across six countries in six languages",
        credits: "SKY/ZERO CUBED",
        url:
          "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F2be766d2-43ba-11eb-afd8-7d77005d5199.jpg?crop=5702%2C3801%2C0%2C0",
        ratio: "1500:1000",
        relativeHorizontalOffset: 0,
        relativeVerticalOffset: 0,
        relativeWidth: 1,
        relativeHeight: 1,
      },
      children: [],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "ZeroZeroZero",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "A big meaty eight-part delve into the global cocaine trade, set across six countries in six languages. This is from the same minds behind ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Gomorrah ",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: "and ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Suburra ",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "(the novelist Robert Saviano and the director Stefano Sollima) and we can expect a satisfyingly dense plot in which Mexican drug cartels, American businessmen and Calabrian gangsters vie for supremacy, along with a decent cast led by ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Andrea Riseborough",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/andrea-riseborough-interview-enough-cleaning-the-loo-i-m-ready-to-get-back-to-work-0zg8jt0ss",
            type: "article",
            canonicalId:
              "andrea-riseborough-interview-enough-cleaning-the-loo-i-m-ready-to-get-back-to-work-0zg8jt0ss",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: " and ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Gabriel Byrne",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/gabriel-byrne-interview-i-know-weinstein-he-was-a-bully-8d5clt22b",
            type: "article",
            canonicalId:
              "gabriel-byrne-interview-i-know-weinstein-he-was-a-bully-8d5clt22b",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: ".",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Sky Atlantic/Now TV; spring",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Hausen",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "This German series is billed as a groundbreaking horror mystery, which sets its bar high. As a widower tries to establish a new existence for himself as the caretaker of a building in a run-down housing complex, his grieving 16-year-old son gradually discovers that the house has a vicious life of its own, feeding on the suffering of its inhabitants.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Sky Atlantic/Now TV, spring",
              },
            },
          ],
        },
      ],
    },
    {
      name: "image",
      attributes: {
        display: "primary",
        caption:
          "Lily James as Linda and Emily Beecham as Fanny in The Pursuit of Love",
        credits: "ROBERT VIGLASKY",
        url:
          "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F54d541de-4547-11eb-afd8-7d77005d5199.jpg?crop=5000%2C3333%2C0%2C0",
        ratio: "1500:1000",
        relativeHorizontalOffset: 0,
        relativeVerticalOffset: 0,
        relativeWidth: 1,
        relativeHeight: 1,
      },
      children: [],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "The Pursuit of Love",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Emily Mortimer",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/emily-mortimer-interview-why-she-decided-to-make-horror-flick-relic-9vjck7z08",
            type: "article",
            canonicalId:
              "emily-mortimer-interview-why-she-decided-to-make-horror-flick-relic-9vjck7z08",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              " steps behind the camera to direct a three-part adaptation of Nancy Mitford’s romantic novel about love and friendship between the two world wars. ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Lily James ",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/lily-james-talks-karaoke-nights-house-hunting-with-matt-smith-and-going-on-a-secret-sabbatical-pg5f6fnmb",
            type: "article",
            canonicalId:
              "lily-james-talks-karaoke-nights-house-hunting-with-matt-smith-and-going-on-a-secret-sabbatical-pg5f6fnmb",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "plays the freewheeling Linda Radlett on the hunt for love along with her best friend, Fanny Logan (",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Emily Beecham",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/emily-beecham-interview-the-little-joe-actress-on-her-shock-cannes-prize-going-to-drama-school-with-phoebe-waller-bridge-and-cracking-hollywood-in-cruella-gqw9z8mqk",
            type: "article",
            canonicalId:
              "emily-beecham-interview-the-little-joe-actress-on-her-shock-cannes-prize-going-to-drama-school-with-phoebe-waller-bridge-and-cracking-hollywood-in-cruella-gqw9z8mqk",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "), who then has the temerity to settle down. The cast is a decent one: ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Andrew Scott",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/his-dark-materials-andrew-scott-on-life-after-fleabag-and-sherlock-fx7n2tsfz",
            type: "article",
            canonicalId:
              "his-dark-materials-andrew-scott-on-life-after-fleabag-and-sherlock-fx7n2tsfz",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              " plays Linda’s oddball neighbour Lord Merlin, with Dominic West and ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Dolly Wells",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/dolly-wells-how-sister-agatha-in-dracula-found-fame-at-48-q5wtkhszc",
            type: "article",
            canonicalId:
              "dolly-wells-how-sister-agatha-in-dracula-found-fame-at-48-q5wtkhszc",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: " as her parents.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "BBC One; March",
              },
            },
          ],
        },
      ],
    },
    {
      name: "image",
      attributes: {
        display: "fullwidth",
        caption: "Stephen Graham in The North Water",
        credits: "NICK WALL/HARPOONER FILMS LIMITED",
        url:
          "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F4c76b3ec-4547-11eb-afd8-7d77005d5199.jpg?crop=4242%2C2828%2C0%2C0",
        ratio: "1500:1000",
        relativeHorizontalOffset: 0,
        relativeVerticalOffset: 0,
        relativeWidth: 1,
        relativeHeight: 1,
      },
      children: [],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "The North Water ",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "To the ice floes of the Arctic, where madness and murder await an 1850s whaling expedition. On board the Volunteer are a disgraced ex-army surgeon failing to escape his traumas (",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Jack O’Connell",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/the-life-of-jack-o-connell-sienna-miller-west-end-cat-on-a-hot-tinned-roof-trt9rchfw",
            type: "article",
            canonicalId:
              "the-life-of-jack-o-connell-sienna-miller-west-end-cat-on-a-hot-tinned-roof-trt9rchfw",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: "), a dodgy captain (",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Stephen Graham",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/stephen-graham-interview-the-teetotal-actor-on-playing-an-alcoholic-in-the-virtues-his-failed-suicide-bid-and-playing-a-mobster-in-scorseses-epic-the-irishman-5cnx89060",
            type: "article",
            canonicalId:
              "stephen-graham-interview-the-teetotal-actor-on-playing-an-alcoholic-in-the-virtues-his-failed-suicide-bid-and-playing-a-mobster-in-scorseses-epic-the-irishman-5cnx89060",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              ") and a murderous psychopathic harpooner (Colin Farrell). What could go wrong?",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "BBC Two; April",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Time",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Jimmy McGovern",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/my-culture-fix-jimmy-mcgovern-gbz5rgqkg",
            type: "article",
            canonicalId: "my-culture-fix-jimmy-mcgovern-gbz5rgqkg",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: ", ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Sean Bean",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/sean-bean-turning-60-was-a-relief-its-all-right-really-cb26zvcmf",
            type: "article",
            canonicalId:
              "sean-bean-turning-60-was-a-relief-its-all-right-really-cb26zvcmf",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              ", Stephen Graham, a prison: with those ingredients this cannot fail to be a powerful drama serial. Bean is Mark Cobden, an inmate consumed with guilt after accidentally killing an innocent man. He befriends a caring police officer, Eric McNally, played by Graham, but when a dangerous inmate identifies Eric’s weakness we have a high-stakes portrayal of life in British clink on our hands.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "BBC One; later in 2021",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Help",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "Is Stephen Graham the busiest screen actor in Britain? Here he is again, in a drama written by ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Jack Thorne",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/jack-thorne-on-the-challenges-of-adapting-the-secret-garden-rb9nwf32v",
            type: "article",
            canonicalId:
              "jack-thorne-on-the-challenges-of-adapting-the-secret-garden-rb9nwf32v",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: " (",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "His Dark Materials",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: "; ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "The Eddy ",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "etc), the busiest screenwriter in Britain, about a young care home worker, played by the luminous ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Jodie Comer",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/jodie-comer-id-live-with-my-mum-and-dad-till-i-was-old-and-grey-if-i-could-2lmgr3kn3",
            type: "article",
            canonicalId:
              "jodie-comer-id-live-with-my-mum-and-dad-till-i-was-old-and-grey-if-i-could-2lmgr3kn3",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: ", and a patient with early onset dementia (Graham).",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Channel 4; later in 2021",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Mare of Easttown",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "After taking the lead role in ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Mildred Pierce",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              " in 2011, Kate Winslet returns to HBO drama in another mini-series, playing a small-town Pennsylvania detective who investigates a local murder as her life crumbles around her. Little more than that is known, but Winslet will undoubtedly make this a big draw.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Sky Atlantic/Now TV; later in 2021",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Vigil",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "This one sounds as if it has a whiff of ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Edge of Darkness ",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: "about it, with ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Suranne Jones",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/suranne-jones-interview-coronation-street-doctor-foster-frozen-theatre-royal-haymarket-london-k79xl795t",
            type: "article",
            canonicalId:
              "suranne-jones-interview-coronation-street-doctor-foster-frozen-theatre-royal-haymarket-london-k79xl795t",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              " as a detective leading the investigation into the disappearance of a Scottish fishing trawler and a death on board a Trident submarine. Jones is soon up to her neck in a nuclear conspiracy.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "BBC Two; later in 2021",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "The Irregulars",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "Sherlock Holmes and Dr Watson are back (again!), but not as we know them (again!). After ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Sherlock ",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: "and ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Enola Holmes",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              ", this latest twist on Conan Doyle focuses on a group of street urchins who solve crimes for a sinister Watson, whose business partner, a drug-addled Holmes, takes the credit.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Netflix; later in 2021",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "The Offenders",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Stephen Merchant",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/stephen-merchant-id-rather-play-the-tough-guy-like-daniel-craig-rh6h3ctqg",
            type: "article",
            canonicalId:
              "stephen-merchant-id-rather-play-the-tough-guy-like-daniel-craig-rh6h3ctqg",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              " will be conspicuous on screen in 2021 — not least in his original series following seven strangers (among them Christopher Walken, no less) from different walks of life forced together to complete a community payback sentence in Bristol.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "BBC One; later in 2021",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Anatomy of a Scandal",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "David E Kelley adapts Sarah Vaughan’s bestseller: ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Sienna Miller",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/sienna-miller-interview-the-actress-on-modern-co-parenting-marriage-and-her-new-film-american-woman-h2hclhfn5",
            type: "article",
            canonicalId:
              "sienna-miller-interview-the-actress-on-modern-co-parenting-marriage-and-her-new-film-american-woman-h2hclhfn5",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: ", ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Rupert Friend",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/rupert-friend-interview-the-pretty-boy-who-made-it-big-by-playing-dirty-72n8kbbz2",
            type: "article",
            canonicalId:
              "rupert-friend-interview-the-pretty-boy-who-made-it-big-by-playing-dirty-72n8kbbz2",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              " and Michelle Dockery head the cast in a plot about a married Westminster politician accused of raping his aide. Guilty or innocent? This already sounds as though it’s set to be the next big US watercooler drama.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Netflix; later in 2021",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Danny Boy",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Toby Jones",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/toby-jones-interview-the-detectorists-star-on-his-new-show-don-t-forget-the-driver-q58g9qjrp",
            type: "article",
            canonicalId:
              "toby-jones-interview-the-detectorists-star-on-his-new-show-don-t-forget-the-driver-q58g9qjrp",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              " plays the human rights lawyer Phil Shiner, who accused a soldier, Brian Wood, of war crimes in Iraq. The pair go head to head in a moral conflict in a journey from the battlefield to the courtroom. This true story was one of Britain’s biggest public inquiries, the Al-Sweady inquiry.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "BBC Two; later in 2021",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "The Underground Railroad ",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "The ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Moonlight ",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "director Barry Jenkins’s first TV series will be on Amazon, an adaptation of Colson Whitehead’s 2017 Pulitzer prizewinning ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "novel",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/the-underground-railroad-by-colson-whitehead-g8v66p9lp",
            type: "article",
            canonicalId:
              "the-underground-railroad-by-colson-whitehead-g8v66p9lp",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              " of the same name that follows a slave girl’s journey as she makes a desperate bid for freedom in the Deep South.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Amazon Prime Video; later in 2021",
              },
            },
          ],
        },
      ],
    },
    {
      name: "image",
      attributes: {
        display: "primary",
        caption: "Bryan Cranston in Your Honor",
        credits: "SHOWTIME",
        url:
          "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fe572881c-43b9-11eb-afd8-7d77005d5199.jpg?crop=3851%2C2567%2C394%2C26",
        ratio: "1500:1000",
        relativeHorizontalOffset: 0.08465835840137516,
        relativeVerticalOffset: 0.009927453226422299,
        relativeWidth: 0.8274602492479587,
        relativeHeight: 0.9801450935471554,
      },
      children: [],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Your Honor ",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Bryan Cranston",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/bryan-cranston-im-61-my-energy-is-dropping-so-if-i-dont-like-a-script-you-cant-buy-me-nnlxwwhb5",
            type: "article",
            canonicalId:
              "bryan-cranston-im-61-my-energy-is-dropping-so-if-i-dont-like-a-script-you-cant-buy-me-nnlxwwhb5",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: " is back on TV with his first series since ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Breaking Bad — ",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "a ten-part legal thriller with Cranston as a New Orleans judge trying to protect his son, who is involved in a hit-and-run. A high-stakes game of lies, deceit and impossible choices follows, which sounds very ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Breaking Bad",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: ".",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Sky Atlantic/Now TV",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Slow Horses",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "It’s not known for certain if this will be 2021, but it is too irresistible not to mention: Gary Oldman, ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Jonathan Pryce",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/jonathan-pryce-on-his-papal-bromance-with-sir-anthony-hopkins-in-the-two-popes-t2dmrcsj3",
            type: "article",
            canonicalId:
              "jonathan-pryce-on-his-papal-bromance-with-sir-anthony-hopkins-in-the-two-popes-t2dmrcsj3",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: " and ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Kristin Scott Thomas",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/kristin-scott-thomas-on-being-clementine-churchill-wl6hm8zs2",
            type: "article",
            canonicalId:
              "kristin-scott-thomas-on-being-clementine-churchill-wl6hm8zs2",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              " in a spy thriller based on Mick Herron’s novel about a team of British agents consigned to a dumping ground of MI5 — Slough House — due to their career-ending mistakes. Being written for screen by Will Smith (",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "The Thick of It",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: "; ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Veep",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              ") suggests sharp dialogue, with Oldman as the brilliant but irascible boss.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "AppleTV+; late 2021 possibly",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Dalgliesh",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Bertie Carvel",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/doctor-foster-star-bertie-carvel-on-making-villains-human-w792w6mzg",
            type: "article",
            canonicalId:
              "doctor-foster-star-bertie-carvel-on-making-villains-human-w792w6mzg",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              " takes the role of PD James’s poet-detective, previously played in the 1980s by Roy Marsden. The novels being adapted are ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Shroud for a Nightingale",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: ", ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "The Black Tower ",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: "and ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "A Taste for Death",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: ".",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Channel 5, later in 2021",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "The Beast Must Die",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "Cecil Day-Lewis, as “Nicholas Blake”, wrote the 1938 novel this thriller is based on, about a grieving parent who infiltrates the life of the person they think killed their child. Stars ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Jared Harris",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/what-ive-learnt-jared-harris-n769grn2r",
            type: "article",
            canonicalId: "what-ive-learnt-jared-harris-n769grn2r",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: ", ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Cush Jumbo",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/cush-jumbo-interview-the-good-fight-star-on-acting-with-david-tennant-in-the-murder-drama-deadwater-fell-and-why-shes-finally-ready-to-play-hamlet-vjfzth7n8",
            type: "article",
            canonicalId:
              "cush-jumbo-interview-the-good-fight-star-on-acting-with-david-tennant-in-the-murder-drama-deadwater-fell-and-why-shes-finally-ready-to-play-hamlet-vjfzth7n8",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: " and Billy Howle.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Britbox",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Bloods ",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Samson Kayo and ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Jane Horrocks",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/jane-horrocks-interview-i-had-a-holiday-from-hell-in-hydra-hxc2qn3f7",
            type: "article",
            canonicalId:
              "jane-horrocks-interview-i-had-a-holiday-from-hell-in-hydra-hxc2qn3f7",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: " are sparring paramedics in a new sitcom.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Sky",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Domina",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "Eight-part drama about the brutal power politics of ancient Rome from Simon Burke (",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Fortitude",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: "), with the future empress Livia Drusilla as its focus.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Sky",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Conversations with Friends ",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "The television version of Sally Rooney’s second novel, ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "italic",
              children: [
                {
                  name: "text",
                  children: [],
                  attributes: {
                    value: "Normal People",
                  },
                },
              ],
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/review-normal-people-by-sally-rooney-will-they-wont-they-pair-up-2srntjwgv",
            type: "article",
            canonicalId:
              "review-normal-people-by-sally-rooney-will-they-wont-they-pair-up-2srntjwgv",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              ", was the on-demand hit of 2020; here comes a 12-part adaptation of ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "her debut",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/books-conversations-with-friends-by-sally-rooney-gf8zlgsdp",
            type: "article",
            canonicalId:
              "books-conversations-with-friends-by-sally-rooney-gf8zlgsdp",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: " from the same team.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "BBC Three; spring/summer",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "The Nevers",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "A Victorian paranormal drama from the ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Buffy",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              " creator Joss Whedon, about women known as the Touched who develop abnormal powers. Its strong cast includes Laura Donnelly, ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "James Norton",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/james-norton-interview-the-mcmafia-star-on-being-odds-on-favourite-to-replace-daniel-craig-as-james-bond-b29fpmr0k",
            type: "article",
            canonicalId:
              "james-norton-interview-the-mcmafia-star-on-being-odds-on-favourite-to-replace-daniel-craig-as-james-bond-b29fpmr0k",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: ", ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Olivia Williams",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/interview-actress-olivia-williams-on-her-cancer-diagnosis-tears-ran-down-my-cheeks-i-thought-im-done-gkpgfkrlx",
            type: "article",
            canonicalId:
              "interview-actress-olivia-williams-on-her-cancer-diagnosis-tears-ran-down-my-cheeks-i-thought-im-done-gkpgfkrlx",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: " and ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Ben Chaplin",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/ben-chaplin-women-i-dont-know-anything-any-more-v5h6zp7pt",
            type: "article",
            canonicalId:
              "ben-chaplin-women-i-dont-know-anything-any-more-v5h6zp7pt",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: ".",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Sky Atlantic",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "A Very English Scandal",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "The second series, written by the Agatha Christie adapter Sarah Phelps, focuses on the Duchess of Argyll’s 1963 divorce, the multiple lovers she was accused of having by her husband and the infamous picture of the “headless man”, taken in flagrante, the duchess wearing only pearls.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "BBC One",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Landscapers ",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Olivia Colman",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/olivia-colman-and-josh-oconnor-interview-the-crown-is-back-meet-the-queen-and-prince-charles-5llsbm0np",
            type: "article",
            canonicalId:
              "olivia-colman-and-josh-oconnor-interview-the-crown-is-back-meet-the-queen-and-prince-charles-5llsbm0np",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "’s versatility gets another outing as she plays the convicted murderer Susan Edwards, who, with her husband, killed her parents as part of a bizarre fantasy life. Written by Colman’s husband, Ed Sinclair, it’s from the same team as the award-winning ",
          },
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Chernobyl",
              },
            },
          ],
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: " and directed by Alexander Payne.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Sky, autumn/winter",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Anne Boleyn ",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "The last days of the doomed Tudor queen are recreated in a three-parter starring ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Jodie Turner Smith",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/jodie-turner-smith-interview-the-pregnant-queen-slim-star-on-her-unconventional-rise-to-fame-3qv0cck7t",
            type: "article",
            canonicalId:
              "jodie-turner-smith-interview-the-pregnant-queen-slim-star-on-her-unconventional-rise-to-fame-3qv0cck7t",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: " (",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "italic",
              children: [
                {
                  name: "text",
                  children: [],
                  attributes: {
                    value: "Queen & Slim",
                  },
                },
              ],
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/queen-amp-slim-review-lovers-on-the-run-are-to-die-for-gx60mx6h7",
            type: "article",
            canonicalId:
              "queen-amp-slim-review-lovers-on-the-run-are-to-die-for-gx60mx6h7",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: ") and ",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Paapa Essiedu",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/paapa-essiedu-i-may-destroy-you-hamlet-sexual-consent-and-black-lives-matter-gdht67vgh",
            type: "article",
            canonicalId:
              "paapa-essiedu-i-may-destroy-you-hamlet-sexual-consent-and-black-lives-matter-gdht67vgh",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: " (",
          },
        },
        {
          name: "link",
          children: [
            {
              name: "italic",
              children: [
                {
                  name: "text",
                  children: [],
                  attributes: {
                    value: "I May Destroy You",
                  },
                },
              ],
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/the-best-tv-shows-of-2020-from-i-may-destroy-you-to-the-queens-gambit-ptxwz8t85",
            type: "article",
            canonicalId:
              "the-best-tv-shows-of-2020-from-i-may-destroy-you-to-the-queens-gambit-ptxwz8t85",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value: ").",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Channel 5, winter",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Baptiste 2",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "Tchéky Karyo’s retired detective has gone full hermit, drowning his sorrows in booze, but agrees to help the British ambassador (Fiona Shaw) to find her lost family.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "BBC One",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading2",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Returning favourites",
          },
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Marcella",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "Anna Friel blacks out and comes round with a new identity in Belfast.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "ITV; Jan",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Unforgotten",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "The detective duo Nicola Walker and Sanjeev Bhaskar return to crack the case of a dead Millwall supporter.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "ITV; early spring",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Gentleman Jack ",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "Suranne Jones’s 1830s romp is back for a second series of saucy Halifax intrigue.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "BBC One; later in 2021",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Britannia ",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "The Romans inhale more druidic madness in a third series of the cult Jez Butterworth show.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Sky Atlantic/Now TV; later in 2021",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Succession",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "link",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "The best series",
              },
            },
          ],
          attributes: {
            href:
              "https://www.thetimes.co.uk/article/what-to-watch-netflix-bbc-sky-amazon-prime-video-uk-38qk8v925",
            type: "article",
            canonicalId:
              "what-to-watch-netflix-bbc-sky-amazon-prime-video-uk-38qk8v925",
          },
        },
        {
          name: "text",
          children: [],
          attributes: {
            value:
              " around is due back this year. How will Logan Roy react to his son Kendall’s betrayal?",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Sky Atlantic/Now TV; later in 2021",
              },
            },
          ],
        },
      ],
    },
    {
      name: "heading3",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value: "Stranger Things",
          },
        },
      ],
    },
    {
      name: "paragraph",
      children: [
        {
          name: "text",
          children: [],
          attributes: {
            value:
              "We’re not in Hawkins any more. This time the kids and monsters go to Russia, where Chief Hopper is toiling in a gulag.",
          },
        },
        {
          name: "break",
          children: [],
        },
        {
          name: "italic",
          children: [
            {
              name: "text",
              children: [],
              attributes: {
                value: "Netflix; later in 2021",
              },
            },
          ],
        },
      ],
    },
  ];
  return (
    <TileLink onPress={onPress} style={styles.container} tile={tile}>
      <WithoutWhiteSpace
        render={(whiteSpaceHeight) => (
          <TileSummary
            headlineStyle={styles.headline}
            strapline={getTileStrapline(tile)}
            straplineStyle={styles.strapline}
            summary={testSummary}
            summaryStyle={styles.summary}
            tile={tile}
            whiteSpaceHeight={whiteSpaceHeight}
            withStar={false}
          />
        )}
      />
      <PositionedTileStar articleId={tile.article.id} />
    </TileLink>
  );
};

TileX.propTypes = {
  onPress: PropTypes.func.isRequired,
  tile: PropTypes.shape({}).isRequired,
  breakpoint: PropTypes.string,
};

export default TileX;
