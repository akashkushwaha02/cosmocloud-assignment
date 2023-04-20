const explorer = {
  id: "1",
  name: "root",
  isObject: true,
  type: "object",
  items: [
    {
      id: "2",
      name: "public",
      isObject: true,
      type: "object",
      items: [
        {
          id: "3",
          name: "public nested 1",
          isObject: true,
          type: "object",
          items: [
            {
              id: "4",
              name: "index.html",
              isObject: false,
              type: "string",
              items: [],
            },
            {
              id: "5",
              name: "hello.html",
              isObject: false,
              type: "string",
              items: [],
            },
          ],
        },
        {
          id: "6",
          name: "public_nested_file",
          isObject: false,
          type: "string",
          items: [],
        },
      ],
    },
    {
      id: "7",
      name: "src",
      isObject: true,
      type: "object",
      items: [
        {
          id: "8",
          name: "App.js",
          isObject: false,
          type: "string",
          items: [],
        },
        {
          id: "9",
          name: "Index.js",
          isObject: false,
          type: "string",
          items: [],
        },
        {
          id: "10",
          name: "styles.css",
          isObject: false,
          type: "string",
          items: [],
        },
      ],
    },
    {
      id: "11",
      name: "package.json",
      isObject: false,
      type: "string",
      items: [],
    },
  ],
};

export default explorer;
