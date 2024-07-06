// import { Meta, StoryFn } from '@storybook/angular';
// import { moduleMetadata } from '@storybook/angular';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
// import { StoreModule } from '@ngrx/store';
// import { MockStore, provideMockStore } from '@ngrx/store/testing';
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
//         HttpClientModule,
//         StoreModule.forRoot({})
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

// const Template: StoryFn<ArtworkListComponent> = (args: ArtworkListComponent) => ({
//   props: {
//     ...args,
//     store: MockStore
//   }
// });

// export const Default = Template.bind({});
// Default.args = {};