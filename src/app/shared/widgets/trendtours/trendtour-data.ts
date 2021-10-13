export interface TrendtourData {

    title: string;
    totalPlayers: string;
    newPlayers:string;
    tr: string;
    tr_delta: string;
    tr_arrow_type: string;
    imgsrc: string;
    status: string;
    players: string;
    type: string;
    lastMatch: string;
    nextMatch: string;
  }
  
  export const data: TrendtourData[] = [
    {
      title: 'Cricket',
      totalPlayers: "11k",
      newPlayers: "1k",
      tr: '25',
      tr_delta: ' +2',
      tr_arrow_type: 'arrow_drop_up',
      status: 'ongoing',
      imgsrc: '/assets/images/trendtour1.png',
      players: '148',
      type: 'Zone',
      lastMatch: '27-09(w)',
      nextMatch: '02-11',
    },
    {
      title: 'Football',
      totalPlayers: "8k",
      newPlayers: "800",
      tr: '61',
      tr_delta: ' -7',
      tr_arrow_type: 'arrow_drop_down',
      status: 'ongoing',
      imgsrc: '/assets/images/trendtour2.png',
      players: '251',
      type: 'District',
      lastMatch: '21-10(L)',
      nextMatch: '27-10',
    },
    {
      title: 'Badminton',
      totalPlayers: "5k",
      newPlayers: "450",
      tr: '74',
      tr_delta: ' +4',
      tr_arrow_type: 'arrow_drop_up',
      status: 'upcoming',
      imgsrc: '/assets/images/trendtour3.png',
      players: '752',
      type: 'State',
      lastMatch: '-',
      nextMatch: '-',
    },
  ];
  