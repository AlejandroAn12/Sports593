import { Routes } from "@angular/router";


export default [
   {
    path: 'index',
    loadComponent: () => import('./index.component'),
   },
   {
      path: 'index/channel',
      loadComponent: () => import('../channel/channel.component'),
   }

   
] as Routes;