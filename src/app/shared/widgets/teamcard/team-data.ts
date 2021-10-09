export interface TeamData {
  title: string;
  sport: string;
  tr: string;
  tr_delta: string;
  tr_arrow_type: string;
  pr: string;
  pr_delta: string;
  pr_arrow_type: string;
  imgsrc: string;
  players: string;
  type: string;
  lastMatch: string;
  nextMatch: string;
}

export const data: TeamData[] = [
  {
    title: 'Knights XI Kollam',
    sport: 'Cricket',
    tr: '25',
    tr_delta: ' +2',
    pr: '31',
    tr_arrow_type: 'arrow_drop_up',
    pr_delta: ' -5',
    pr_arrow_type: 'arrow_drop_down',
    imgsrc: '/assets/images/cricket.png',
    players: '12',
    type: 'Zone',
    lastMatch: '27-09(w)',
    nextMatch: '02-11',
  },
  {
    title: 'Eagles XI TVM',
    sport: 'Football',
    tr: '45',
    tr_delta: ' -7',
    tr_arrow_type: 'arrow_drop_down',
    pr: '41',
    pr_delta: ' -4',
    pr_arrow_type: 'arrow_drop_down',
    imgsrc: '/assets/images/football.png',
    players: '38',
    type: 'District',
    lastMatch: '21-10(w)',
    nextMatch: '27-10',
  },
];
