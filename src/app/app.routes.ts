import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'artworks', pathMatch: 'full' },
  { path: 'artworks', loadChildren: () => import('./artworks/artworks.module').then(m => m.ArtworksModule) },
  { path: '**', redirectTo: 'artworks' }  // Wildcard route for a 404 page
];