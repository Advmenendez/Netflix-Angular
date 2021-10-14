import { Action } from 'rxjs/internal/scheduler/Action';
import { NetflixModel } from './models/netflix-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent implements OnInit {
  public netflixModel: NetflixModel;

  constructor() {
    this.netflixModel = {
      nav: {
        title: 'Warner live',
        logo: {
          src: 'https://1000marcas.net/wp-content/uploads/2020/11/Warner-Bros-Logo.png',
          alt: 'Logo Warner',
        },
      },
      hero: {
        title: 'Los 5 más populares hoy',
        gallery: [
          {
            img: {
              src: 'https://occ-0-1936-360.1.nflxso.net/dnm/api/v6/Da_vleYcahiCE7JMYt8LJRyoenc/AAAABSecphfJ-FgvucvW5696-uAdzAGObunkAkTJ78mrUTvkzBTVN2x0S0rbMLQfBemwUHqUnAwoqOlc34n8_2lB1qSlIgfaHpGUF17fFqNczg0UK8pn1gzQIl8U1jkGDQ.jpg?r=cd1',
              alt: 'Top 1',
            },
          },
          {
            img: {
              src: 'https://occ-0-1936-360.1.nflxso.net/dnm/api/v6/Da_vleYcahiCE7JMYt8LJRyoenc/AAAABab4GPMjAMvuoAPM_9G8cB19fTc-IA0N8D6JBjpBdm3EUssJZRlkJzG8Gkqdp5vkUuxCHoKr1UAor2dvgOtKqvIE01visVzf44wzvF6TCI1WVf5NKMUlo342McGU4g.jpg?r=467',
              alt: 'Top 2',
            },
          },
          {
            img: {
              src: 'https://occ-0-1936-360.1.nflxso.net/dnm/api/v6/Da_vleYcahiCE7JMYt8LJRyoenc/AAAABY7GOf8guqey6vNkbiL86dHqvAkDpW5JxNz2IhNxih758t0xChOMJ47pMl2Dw2nHLZRiP6tAM3zS8007-cTCJ8OONdr4pjUeE38VhSAEquH1QBfWSjKh49uSn18Tlw.jpg?r=2fb',
              alt: 'Top 3',
            },
          },
          {
            img: {
              src: 'https://occ-0-1936-360.1.nflxso.net/dnm/api/v6/Da_vleYcahiCE7JMYt8LJRyoenc/AAAABcAijw8TqkHXm8ykoYv3nf2HjMz5C-fEF3GuuUMop0ixnVH-FCnf8-jd7CpfKkYk5BQQIYz5RkXxj47POXJYdWpv7bGXuvAMqs8eshWQveAoiu9AtIuNk4PBlXizexD-m4KpcxXNqZ8xui6_w_wTlKa1xGUWYSOZ_cL4MTY-ualkZZy8f0BtHd1_1mnggb7QWO1XBLLA7qQsIhuacPfce4FjJ4oADDLhIkfx3BUl7pZJykJA73BY544XEFn1KGqfjF0-YsJmUu9yE30dFwl-WWiFwg.jpg?r=f61',
              alt: 'Top 4',
            },
          },
          {
            img: {
              src: 'https://occ-0-1936-360.1.nflxso.net/dnm/api/v6/Da_vleYcahiCE7JMYt8LJRyoenc/AAAABbWieZIiwCfI9dkwI6A-hGa0vOKS1cLdMN24jQ0aSlhOGCnwufabcpfeCBfIoQH27JtUYTjJ92R02qTa6_VPD5g5P_XAaWTbAlJgbGVBW4xcqJriRoAZVZkctl9pYg.jpg?r=0be',
              alt: 'Top 5',
            },
          },
        ],
      },
      scifi: {
        title: 'Ciencia Ficción',
        gallery: [
          {
            img: {
              src: 'https://occ-0-1936-360.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABbci0qhN4eJhl3B4fkLZ_ZIxvXfjbrNbfICWLfUNzaLd102H5Ahqojqo3e2hNdztXYSfcVAE2Y7psBKqRz-wYMYBY7iaWawJq-MOJVTD1vHQBGzytupoQ2kLhi1S.jpg?r=4a1',
              alt: 'The Witcher',
            },
          },
          {
            img: {
              src: 'https://occ-0-1936-360.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABS75EhpcN9CSbW3ZUJbTpllKyspIVxyqCKYEhZZPO2JzIOON51WqxKAtIaGgg4jp1DF92P_bk5CrKEsNuIA13HkdYt3cCaD6OndwKe8_Qis3CiFieYWpckFHUc0g.jpg?r=da1',
              alt: 'Stranger Things',
            },
          },
          {
            img: {
              src: 'https://occ-0-1936-360.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABR99ayNFC6SG49yoFkaDBzFixVTaFNMhNJbESlziNkOxu7jFLbXUjI4j4roJpPrQckB54xMcA95k7K7uqDisSpp39rfIUkvSTt4NPGOe4_UmM2UUPu_1ra-LK1Ql.jpg?r=758',
              alt: 'Umbrella Academy',
            },
          },
          {
            img: {
              src: 'https://occ-0-1936-360.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABXZt-CWjyWLRUcWOId5N1CrRG2ITuAc7b0D9OWzAS-l6D4NxtQV43PxGpkTs3c87niTwzKjGa1yN7H9g95DoJD4rX6fTeRhIKc949jGoIC8UYGudTY3Y2-lmMmRh.jpg?r=026',
              alt: '3%',
            },
          },
          {
            img: {
              src: 'https://occ-0-1936-360.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABcER5M8uizaiitNlJTGnsjuIA4GIrbiAJIfk1q_DNyw9Y8z9nkyAwlFFv9vS1lt1Ec7pfp2S-Q5oQIrh8umRpZdTDr77FjZx1WOO3l457UKdLe2nx3ZAAE0CS2cZ.jpg?r=e98',
              alt: 'Better than Us',
            },
          },
        ],
      },
      action: {
        title: 'Acción',
        gallery: [
          {
            img: {
              src: 'https://occ-0-1936-360.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABcaUkRd_l2xZ9Mfzp3OJH8MTxFTltbrGmEid43OFzi3mzhwmo5zAPdjxSgpgHbVol7UF80zUHXTG-On54B4oV1VEXeM.jpg?r=bab',
              alt: 'Malditos Bastardos',
            },
          },
          {
            img: {
              src: 'https://occ-0-1936-360.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABZ80KdotG81NJxhzN_opicbBUqrwsxVSK3wUb0WijwC80osYyTvMmlyR1PDBqq1KS0BOh3wNzoDUd7vLkZRtIsUQ_Mg.jpg?r=6f3',
              alt: 'El Hobbit',
            },
          },
          {
            img: {
              src: 'https://occ-0-1936-360.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABXj6COJ1mxLMKSI0gKnkuUxyiCgRN_77bxwofN2n64Bh_jz0GGdfsp_3wIGRyUghNBV2P5kmEnXsA7-XXA3KnRTeYG67wgobUOmM1b-WrqsYAQ9NiR-x_NFZ0Ek9.jpg?r=5f6',
              alt: 'Kate',
            },
          },
          {
            img: {
              src: 'https://occ-0-1936-360.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABcZ3dP0iW_Qy-nybDogXb35ES28cCckjJEez3_UyL28EUC2Ao8BYQSVOW_XIMdZCu5DqefbaEv7Dn1IzpwB35EXb_CA.jpg?r=3b1',
              alt: 'Kill Bill',
            },
          },
          {
            img: {
              src: 'https://occ-0-1936-360.1.nflxso.net/dnm/api/v6/7e0PTVDdJ65eumyzagWiJKiw6MU/AAAABSws7djuXCDu80Tl1UHYVAbxNGjGGRenIF0uUqaSLvOTVSW-95Klf9hwG1H8cbAL07g-R_wDrVx5heTYJhHX3y_HPI8.jpg?r=427',
              alt: 'Scott Pilgrim',
            },
          },
        ],
      },
    };
  }

  ngOnInit(): void {}
}
