const images = import.meta.glob('../assets/images/*.png', { eager: true, as: 'url' });

export const profileData = [
  {
    image: images['../assets/images/profile_woman.png'],
    name: "Sed ut perspiciatis",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
  },
  {
    image: images['../assets/images/profile_man.png'],
    name: "Lorem ipsum dolor",
    description:
      "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
  },
  {
    image: images['../assets/images/profile_cat.png'],
    name: "Nemo enim ipsam",
    description:
      "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.",
  },
];