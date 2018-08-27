const DOCUMENT = {
  type: "document",
  nodes: [
    {
      type: "heading1",
      text: "A title"
    },
    {
      type: "paragraph",
      text: "This is a second paragraph of text"
    },
    {
      type: "quote",
      nodes: [
        {
          type: "paragraph",
          text: "This paragraph is nested within a quote"
        }
      ]
    }
  ]
};

export default DOCUMENT;
