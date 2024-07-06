// import { Meta, StoryFn } from '@storybook/angular';
// import { moduleMetadata } from '@storybook/angular';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
// import { provideMockStore, MockStore } from '@ngrx/store/testing';
// import * as fromArtwork from '../app/store/reducers/artwork.reducer';
// import { ArtworkListComponent } from '../app/artworks/artwork-list/artwork-list.component';
// import { ArtworkService } from '../app/services/artwork.service';

// export default {
//   title: 'Components/ArtworkList',
//   component: ArtworkListComponent,
//   decorators: [
//     moduleMetadata({
//       declarations: [ArtworkListComponent],
//       imports: [
//         BrowserAnimationsModule,
//         HttpClientModule
//       ],
//       providers: [
//         ArtworkService,
//         provideMockStore({
//           initialState: {
//             artwork: {
//               artworks: [],
//               loading: false,
//               error: null
//             }
//           }
//         })
//       ]
//     })
//   ]
// } as Meta;

// const Template: StoryFn<ArtworkListComponent> = (args: ArtworkListComponent, { parameters }) => {
//   const store = parameters.store as MockStore;
//   store.setState(parameters.storeInitialState);

//   return {
//     props: {
//       ...args,
//       store
//     },
//   };
// };

// export const Default = Template.bind({});
// Default.parameters = {
//   storeInitialState: {
//     artwork: {
//       artworks: [
//         {
//           title: 'Sample Artwork 1',
//           artist_display: 'Sample Artist 1',
//           place_of_origin: 'Sample Place 1',
//           date_display: '2023',
//           medium_display: 'Sample Medium 1',
//           image_url: 'https://via.placeholder.com/150'
//         },
//         {
//           title: 'Sample Artwork 2',
//           artist_display: 'Sample Artist 2',
//           place_of_origin: 'Sample Place 2',
//           date_display: '2024',
//           medium_display: 'Sample Medium 2',
//           image_url: 'https://via.placeholder.com/150'
//         }
//       ],
//       loading: false,
//       error: null
//     }
//   }
// };
// Default.args = {};