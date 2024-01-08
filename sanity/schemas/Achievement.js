const Achievement = {
  name: "achievement",
  title: "Achievement",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },

    {
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
};
export default Achievement;
