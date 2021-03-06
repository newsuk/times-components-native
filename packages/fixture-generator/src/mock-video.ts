class MockVideo {
  video: any;

  constructor() {
    this.video = {
      __typename: "Video",
      posterImage: {
        crop: {
          ratio: "16:9",
          url:
            "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fd3abdbfc-1776-11e6-b4ba-d249b128bacc.jpg?crop=620%2C348%2C0%2C32",
        },
        crop11: {
          ratio: "1:1",
          url:
            "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F5af6925e-2599-11e9-b782-40e94f317da5.jpg?crop=1000%2C1000%2C250%2C0",
        },
        crop169: {
          ratio: "16:9",
          url:
            "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fd3abdbfc-1776-11e6-b4ba-d249b128bacc.jpg?crop=620%2C348%2C0%2C32",
        },
        crop23: {
          ratio: "2:3",
          url:
            "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F5a14c64e-06db-11e9-abe2-4909b2eb0130.jpg?crop=1195%2C1792%2C747%2C0",
        },
        crop32: {
          ratio: "3:2",
          url:
            "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F5a14c64e-06db-11e9-abe2-4909b2eb0130.jpg?crop=2688%2C1792%2C0%2C0",
        },
        crop45: {
          ratio: "4:5",
          url:
            "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F5a14c64e-06db-11e9-abe2-4909b2eb0130.jpg?crop=1434%2C1792%2C627%2C0",
        },
        crop54: {
          ratio: "5:4",
          url:
            "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F5a14c64e-06db-11e9-abe2-4909b2eb0130.jpg?crop=1250%2C1000%2C627%2C0",
        },
      },
    };
  }

  get() {
    return this.video;
  }
}

export default MockVideo;
