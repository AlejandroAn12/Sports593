import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafePipe } from '../../safe.pipe';

interface Channel {
  id?: string;
  name: string;
  url: string;
}

@Component({
  selector: 'app-channel',
  standalone: true,
  imports: [CommonModule, SafePipe],
  templateUrl: './channel.component.html',
  styleUrl: './channel.component.scss'
})
export default class ChannelComponent implements OnInit {
  route = inject(ActivatedRoute);

  channelId: string = '';
  channel: any;

  channels = [
    {
      id: "tycsports",
      name: 'TyCSports',
      url: "https://sv4.streamtp.live/global1.php?stream=tyc_sports"
      // url: "https://golazohd.com/online/canal.php?stream=tycsports"
    },

    {
      id: "tntsports",
      name:"TNT Sports",
      url: "https://tucanaldeportivo.org/tycsports-sd.php"
    },

    {
      id: "winsportsplus",
      name: 'WIN Sports Premiun',
      url: "https://sv1.streamtp.live/global1.php?stream=winplus"
    },

    {
      id: "azteca7",
      name: 'Azteca 7',
      url: "https://golazohd.com/online/canal.php?stream=azteca7"
    },

    {
      id: "premiere3",
      name: 'Premiere 3 Brazil',
      url: "https://golazohd.com/mpd.php?id=premiere3"
    },

    {
      id: "premiere",
      name: 'Premiere Brazil',
      url: "https://voodc.com/embed/858a93889b898c9187998387968f988988.html"
    },

    {
      id: "movistarp",
      name: 'Movistar Perú',
      url: "https://betzta.com/canales.php?stream=movistar"
    },

    {
      id: "espn",
      name: 'ESPN',
      url: "https://golazohd.com/online/canal.php?stream=espn"
    },

    {
      id: "vix",
      name: 'VIX',
      url: "https://global.streamtp.live/verf.php?stream=versoccer85"
    },
    {
      id: "vix2",
      name: 'VIX 2',
      url: "https://voodc.com/player/d/hYuSiKGMhZWNnKHC28DVwLSWh8C9wcXG4MehtYiZhI64wNeKh5zPn4iU0cfVuarGubS9x5aKoIeJrJ-9oZ-Nw9K.uKi8zL.CpL.bw8DGiJuKg5GHvLW5wsnSiYaYip-Zt8iIm4qDkYc_/nYaOjJaHmI6HmoGEmImahouTi5-EgKe6"
    },

    {
      id: "espnc",
      name: 'ESPN Colombia',
      url: "https://golazohd.com/tv/espnec.php"
    },

    {
      id: "dsports",
      name: 'Directv Sports',
      url: "https://sv1.streamtp.live/global1.php?stream=dsports",
    },

    {
      id: "foxsport",
      name: 'Fox Sports',
      url: "https://betzta.com/canales.php?stream=foxsport"
    },

    {
      id: "foxsport2",
      name: 'Fox Sports 2',
      url:"https://global.streamtp.live/verf.php?stream=verfut"
    },

    {
      id: "appletv",
      name: 'Apple Tv',
      url:"https://voodc.com/embed/858a93889b8a859787998387988e988b8a.html"
    },

    {
      id: "tvenezuela",
      name: 'Tv Venezuela',
      url:"https://voodc.com/embed/858a93889b8a8597879983879890988b8c.html"
    },

    {
      id: "foxsportsu",
      name: 'Fox Sports US',
      url:"https://voodc.com/embed/858a93889b8a859787998387988f988b8b.html"
    },

    {
      id :"ecuavisa",
      name: 'Ecuavisa Ecuador',
      url: "https://rudo.video/live/ecuavisa"
    },

    {
      id :"teleamazonas",
      name: 'Teleamazonas Ecuador',
      url: "https://cdn.jwplayer.com/players/QyzmCh3X-1k0Xjzae.html"
    }
  ];


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.channelId = params['id'];
      this.channel = this.channels.find(c => c.id === this.channelId);
    });
  }

}
