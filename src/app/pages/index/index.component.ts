import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export default class  IndexComponent implements OnInit{

  router = inject(Router);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    
  }


  channelId: string = '';
  channel: any;

  channels = [
    {
      id: "tycsports",
      name: 'TyCSports',
      img: "https://th.bing.com/th/id/OIP.dj2u3rFYlwXvLjLZfVjDyQHaDS?rs=1&pid=ImgDetMain"
    },

    {
      id: "tntsports",
      name: 'TNT Sports',
      img: "https://th.bing.com/th/id/R.ec5c6be5eca7ab4cc8c21e4d2d9a9848?rik=EjeurBNwGQDvmQ&pid=ImgRaw&r=0"
    },

    {
      id: "winsportsplus",
      name: 'WIN Sports +',
      img: "https://www.logotypes101.com/logos/503/212BD31172EFC9828FBA51FEFE4D4FF9/win_sports.png"
    },

    {
      id: "azteca7",
      name: 'Azteca 7',
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Logotipo_de_TV_Azteca.png"
    },

    {
      id: "premiere3",
      name: 'Premiere 3 Brazil',
      img: "https://logodownload.org/wp-content/uploads/2018/04/premiere-fc-logo-3.png"
    },

    {
      id: "premiere",
      name: 'Premiere Brazil',
      img: "https://logodownload.org/wp-content/uploads/2018/04/premiere-fc-logo-3.png"
    },

    {
      id: "movistarp",
      name: 'Movistar Perú',
      img: "https://selectra.com.pe/sites/selectra.com.pe/files/images/logos/movistar-logo.png"
    },

    {
      id: "espn",
      name: 'ESPN',
      img: "https://th.bing.com/th/id/R.00846fa97c5bb2d18103b11bd8fe9c0c?rik=EWsttNNVLlndpw&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2017%2f04%2fespn_logo_download.png&ehk=luqoGe9Uy4HsHJzFYatZUJfpOCwVC1XiWF0hg7NKHMY%3d&risl=&pid=ImgRaw&r=0"
    },

    {
      id: "vix",
      name: 'VIX',
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b7/VixLogoOf2022.png"
    },

    {
      id: "vix2",
      name: 'VIX (OPCION 2)',
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b7/VixLogoOf2022.png"
    },

    {
      id: "vixtudn",
      name: 'VIX | TUDN',
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b7/VixLogoOf2022.png"
    },

    {
      id: "espnc",
      name: 'ESPN Colombia',
      img: "https://th.bing.com/th/id/R.00846fa97c5bb2d18103b11bd8fe9c0c?rik=EWsttNNVLlndpw&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2017%2f04%2fespn_logo_download.png&ehk=luqoGe9Uy4HsHJzFYatZUJfpOCwVC1XiWF0hg7NKHMY%3d&risl=&pid=ImgRaw&r=0"
    },

    {
      id: "dsports",
      name: 'Directv Sports',
      img: "https://www.trecebits.com/wp-content/uploads/2023/06/DirecTV-Sports-1.webp"
    },

    {
      id: "foxsport",
      name: 'Fox Sports',
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Fox_Sports_logo1.svg/1200px-Fox_Sports_logo1.svg.png"
    },

    {
      id: "foxsport2",
      name: 'Fox Sports 2',
      img: "https://th.bing.com/th/id/OIP.t5gf9_M-SH5SbMJo3tdoQQHaDV?rs=1&pid=ImgDetMain"
    },

    {
      id: "foxsportsu",
      name: 'Fox Sports 1 US',
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/2015_Fox_Sports_1_logo.svg/1200px-2015_Fox_Sports_1_logo.svg.png"
    },

    {
      id: "appletv",
      name: 'Apple Tv',
      img: "https://logowik.com/content/uploads/images/apple-tv-plus8550.jpg"
    },

    {
      id: "tvenezuela",
      name: 'Tv Venezuela',
      img: "https://th.bing.com/th/id/R.f3de7aff86e20f5c59173da14e177010?rik=HB9tXtz0%2b%2f9u5A&riu=http%3a%2f%2fdirectostv.teleame.com%2fwp-content%2fuploads%2f2018%2f02%2fVenezolana-de-Televisi%c3%b3n-en-vivo-Online.png&ehk=xGVbM0xjgYiQQGbUO%2f6MeROQBT6LmwxRIGFA%2ff6zeic%3d&risl=&pid=ImgRaw&r=0"
    },

    {
      id: "ecuavisa",
      name: 'Ecuavisa Ecuador',
      img:"https://th.bing.com/th/id/OIP.FciSCkjKj7r0ZekwJ6GMiwHaEK?rs=1&pid=ImgDetMain"
    },

    {
      id: "teleamazonas",
      name: 'Teleamazonas Ecuador',
      img:"https://th.bing.com/th/id/OIP.sY_xcYfFwy23mcQLt3laXAHaEK?rs=1&pid=ImgDetMain"
    }
  ];

  goToChannel(channelId: string) {
    this.router.navigate(['/index/channel'], { queryParams: { id: channelId } });
  }

}
