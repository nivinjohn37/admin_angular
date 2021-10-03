export interface Data {
    title: string;
    content: string;
    tags: string[];
  }
  
  export const data: Data[] = [
    {
      title: "Filtering Objects",
      content: "Click search to filter posts by title, content, and tags.",
      tags: ["javascript", "filtering"]
    },
    {
      title: "Searching an Array of Dates",
      content: "See this article for searching dates.  For eaxample try typing in '11/25/2014'",
      tags: ["javascript", "searching"]
    }
  ];
  