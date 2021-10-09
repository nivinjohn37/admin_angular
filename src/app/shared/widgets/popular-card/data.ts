export interface Data {
    title: string;
    content: string;
    imgsrc: string;
    teamName: string;
    oppTeam: string;
    stats: string[];
    nextMatch: string,
    tags: string[];
  }
  
  export const data: Data[] = [
    {
      title: "Cricket",
      content: "Last game: 27th Sep 2021",
      imgsrc: "/assets/images/cricket.png",
      teamName: "Knights XI Kollam",
      oppTeam: "Sunrisers Cochin",
      stats: ["W-L-L-W","121/3|100/10","12R/3W"],
      nextMatch: "Next game: 2nd Oct 2021",
      tags: ["javascript", "filtering"]
    },
    {
      title: "Football",
      content: "Last game: 21th Oct 2021",
      imgsrc: "/assets/images/football.png",
      teamName: "Eagles XI TVM",
      oppTeam: "Sunrisers Cochin",
      stats: ["W-W-W-L","4-3","27'(P)"],
      nextMatch: "Next game: 27th Oct 2021",
      tags: ["javascript", "searching"]
    }
  ];
  