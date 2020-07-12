const initialState = {
  courses: [
    {
      title: "Learn React",
      id: 0,
      img: "https://via.placeholder.com/300",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae nam placeat a. Nihil deleniti magnam explicabo accusantium neque quia dignissimos maiores minus eveniet porro cumque nulla quisquam, eaque quaerat nesciunt.",
      videos: [
        {
          title: "Fire Up React.js",
          id: 103201888,
          url: "https://vimeo.com/103201888",
        },
        {
          title: "ReactJS Components",
          id: 267695766,
          url: "https://vimeo.com/267695766",
        },
      ],
    },
    {
      title: "Learn React For beginners",
      id: 1,
      img: "https://via.placeholder.com/300",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae nam placeat a. Nihil deleniti magnam explicabo accusantium neque quia dignissimos maiores minus eveniet porro cumque nulla quisquam, eaque quaerat nesciunt.",
    },
    {
      title: "Learn React Advanced",
      id: 2,
      img: "https://via.placeholder.com/300",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae nam placeat a. Nihil deleniti magnam explicabo accusantium neque quia dignissimos maiores minus eveniet porro cumque nulla quisquam, eaque quaerat nesciunt.",
    },
  ],
};

export const courses = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
