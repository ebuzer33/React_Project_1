import React, { Component } from "react";
import { Card, CardImg, CardText, CardTitle } from "reactstrap";

export default class Menu extends Component {
  state = {
    menubar: [
      {
        cartId: 1,
        cartName: "New York",
        cartSrc:
          "https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_960_720.jpg",

        cartText:
          "Home to the Statue of Liberty, Empire State Building, Central Park, Times Square, New York is the most populous city in the USA." +
          " We have a lot to tell about the city where city lights illuminate the sky.",
      },
      {
        cartId: 2,
        cartName: "Philippines",
        cartSrc:
          "https://bigseventravel.com/wp-content/uploads/2019/11/john-hernandez-IL-fBBnF-GU-unsplash-1920x1440.jpg",

        cartText:
          "The island country, the Philippines, is one of the most beautiful countries where blue and green are together. Forget the potion of" +
          " youth, traveling to the Philippines will rejuvenate you for at least 5 years.",
      },
      {
        cartId: 3,
        cartName: "Bali",
        cartSrc:
          "https://ak.picdn.net/shutterstock/videos/26368511/thumb/1.jpg",

        cartText:
          "Bali, Indonesia's most famous island, has taken its place as the 'last paradise' in mind. Providing 80% of its livelihood with tourism," +
          " Bali hosts thousands of tourists every year.",
      },
      {
        cartId: 4,
        cartName: "Egypt",
        cartSrc:
          "https://images.memphistours.com/large/34d5b5a3fbaa4b3b5d9487bf924b0145.jpg",

        cartText:
          "Being one of the biggest countries of the Middle East, Egypt has been the transition point of many civilizations with its thousands of years of history. The pyramids and miracles that come to mind when talking about Egypt have been the subject of many films. It still remains a mystery.",
      },
      {
        cartId: 5,
        cartName: "Cappadocia",
        cartSrc:
          "https://i.hurimg.com/i/hdn/75/0x0/5aa10544d3806c25541af273.jpg",
        cartText:
          "Cappadocia… 'Kappa Tuchia', which means 'Land of Beautiful Horses' in the words of Persians. A location in Turkey and in the center of Anatolia's most popular and unique tourist centers of someone who Cappadocia, magnificent nature, valleys of unique beauty, fairy chimneys, rock-hewn settlements, millions every year with open-air museums and underground cities, local and hosts foreign tourists.",
      },
      {
        cartId: 6,
        cartName: "Paris",
        cartSrc:
          "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180221130827/iStock-155381519.jpg",
        cartText:
          "Paris has been recognized as one of the most romantic cities in the world. Many famous buildings here have been added to the Unesco World Heritage List. It awaits you with its museums, fashion and historical buildings.",
      },
      {
        cartId: 7,
        cartName: "Venice",
        cartSrc:
          "https://www.qantas.com/content/travelinsider/en/explore/europe/italy/venice/things-you-need-to-know-before-you-go-to-venice/_jcr_content/parsysTop/hero.img.full.medium.jpg/1535006246068.jpg",
        cartText:
          "Venice, one of Italy's indispensable stops, is known as the 'City of Channels', 'City of Waters' or 'City of Masks' thanks to its world-famous masks. If you visit in February, you can catch the Venice Carnival, where everyone wears a mask and has fun.",
      },
      {
        cartId: 8,
        cartName: "India",
        cartSrc:
          "https://lp-cms-production.imgix.net/2020-11/GettyRF_494057771.jpg",
        cartText:
          "If you are not a vacationer but a traveler, we can say that India is the place for you. India, one of the most colorful places in the world, has a crazy variety. The Taj Mahal, the story of which you have heard more or less, is one of its famous buildings.",
      },
      {
        cartId: 9,
        cartName: "Northern Lights",
        cartSrc:
          "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        cartText:
          "Northern lights, the 'Aurora Borealis', named after the Dawn Goddess Aurora, are the natural glows that emerge in the sky with the interaction of the earth's magnetic field and charged particles from the Sun. This image, which makes most of us feel like in a fairy tale land, deserves to be visited at least once in a lifetime.",
      },
      {
        cartId: 10,
        cartName: "Fuji Mountain",
        cartSrc:
          "https://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/038/943/original/pixta_43064884_S.jpg?2019&d=750x400",
        cartText:
          "The symbol and highest mountain of Japan, Mount Fuji is considered sacred by the Japanese and is called Fuji-San. This mountain, which has an active startovolcano, is depicted in art and photography and is a natural wonder visited by athletes and tourists.",
      },
      {
        cartId: 11,
        cartName: "Arashiyama Bamboo Grove",
        cartSrc: "https://wallpaperaccess.com/full/534182.jpg",
        cartText:
          "Bamboo Forest, or Arashiyama Bamboo Grove or Sagano Bamboo Forest, is a natural forest of bamboo in Arashiyama, Kyoto, Japan. The forest consists mostly of Moso Bamboo (Phyllostachys edulis) and consists of several pathways for tourists and visitors. The Ministry of the Environment considers it a part of the soundscape of Japan.",
      },
      {
        cartId: 12,
        cartName: "Antelope Canyon",
        cartSrc:
          "https://images.unsplash.com/photo-1444076784383-69ff7bae1b0a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvd2VyJTIwYW50ZWxvcGUlMjBjYW55b258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        cartText:
          "Antelope Canyon is a slot canyon in the American Southwest, on Navajo land east of Page, Arizona. It includes two separate, scenic slot canyon sections, referred to as Upper Antelope Canyon (or The Crack), and Lower Antelope Canyon (or The Corkscrew).",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        {this.state.menubar.map((xy) => (
          <Card key={xy.cartId} id="cart">
            <CardTitle id="title">{xy.cartName}</CardTitle>
            <CardImg id="img" src={xy.cartSrc} />
            <div className="asd">
              <CardText id="desc">{xy.cartText}</CardText>
            </div>
          </Card>
        ))}
      </div>
    );
  }
}
