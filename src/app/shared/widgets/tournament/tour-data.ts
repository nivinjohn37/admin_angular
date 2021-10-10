export interface TourData {
  title: string;
  sport: string;
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

export const data: TourData[] = [
  {
    title: 'Lions Cup',
    sport: 'Cricket',
    tr: '25',
    tr_delta: ' +2',
    tr_arrow_type: 'arrow_drop_up',
    status: 'ongoing',
    imgsrc: '/assets/images/tour1.jpg',
    players: '148',
    type: 'Zone',
    lastMatch: '27-09(w)',
    nextMatch: '02-11',
  },
  {
    title: 'FC Trophy',
    sport: 'Football',
    tr: '61',
    tr_delta: ' -7',
    tr_arrow_type: 'arrow_drop_down',
    status: 'ongoing',
    imgsrc: '/assets/images/tour2.jpg',
    players: '251',
    type: 'District',
    lastMatch: '21-10(L)',
    nextMatch: '27-10',
  },
  {
    title: 'Swadesh Cup',
    sport: 'Cricket',
    tr: '74',
    tr_delta: ' +4',
    tr_arrow_type: 'arrow_drop_up',
    status: 'upcoming',
    imgsrc: '/assets/images/tour3.jpg',
    players: '752',
    type: 'State',
    lastMatch: '-',
    nextMatch: '-',
  },
];
