import { Component } from '@angular/core';

export type Champion = {
  name: string;
  image: string;
  tournament_name: string;
  tournament_subname: string;
  profile_url: string;
};

@Component({
  selector: 'app-home-hall-fame',
  templateUrl: './home-hall-fame.component.html',
  styleUrls: ['./home-hall-fame.component.css'],
})
export class HomeHallFameComponent {
  championList: Champion[] = [
    {
      name: 'Lionheart_uk',
      image: 'assets/images/hall_of_fame_btb2.png',
      tournament_name: 'Beat the Boss II',
      tournament_subname: 'Smackdown',
      profile_url: 'https://freefoodparty.com/profile?idPlayer=3620442',
    },
    {
      name: 'Kaleli',
      image: 'assets/images/hall_of_fame_btb1.png',
      tournament_name: 'Beat the Boss',
      tournament_subname: 'Smackdown',
      profile_url: 'https://freefoodparty.com/profile?idPlayer=5033495',
    },
    {
      name: 'Revnak',
      image: 'assets/images/hall_of_fame_ktv.png',
      tournament_name: 'Kavern Kombat II',
      tournament_subname: 'Tournament',
      profile_url: 'https://freefoodparty.com/profile?idPlayer=3609213',
    },
    {
      name: 'Widgie',
      image: 'assets/images/hall_of_fame_ktv.png',
      tournament_name: 'Kavern Kombat I',
      tournament_subname: 'Tournament',
      profile_url: 'https://freefoodparty.com/profile?idPlayer=3717817',
    }
  ];
}