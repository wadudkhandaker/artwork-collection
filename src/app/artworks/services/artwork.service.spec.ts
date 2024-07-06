import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ArtworkService } from './artwork.service';
import { Artwork } from '../models/artwork.model';
import { ArtworkResponse } from '../models/artwork-response.model';

describe('ArtworkService', () => {
  let service: ArtworkService;
  let httpMock: HttpTestingController;

  const mockArtworkResponse: ArtworkResponse = {
    data: [
      {
        id: 1,
        title: 'Artwork Title',
        artist_display: 'Artist Name',
        date_start: 2000,
        date_end: 2000,
        place_of_origin: 'Origin',
        medium_display: 'Medium',
        style_titles: ['Style 1', 'Style 2'],
        image_id: 'some-image-id',
        thumbnail: {
          lqip: '',
          width: 100,
          height: 100,
          alt_text: 'Alt text'
        },
        material_titles: ['oil paint (paint)', 'canvas, paint, painting']
      }
    ],
    pagination: {
      total: 1,
      limit: 12,
      offset: 0,
      total_pages: 1,
      current_page: 1,
      next_url: ''
    },
    config: {
      iiif_url: 'https://iiif.example.com'
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArtworkService]
    });
    service = TestBed.inject(ArtworkService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch artworks and map them correctly', () => {
    const page = 1;
    const size = 12;

    service.getArtworks(page, size).subscribe((result) => {
      expect(result.artworks.length).toBe(1);
      expect(result.artworks[0].imageUrl).toBe('https://iiif.example.com/some-image-id/full/843,/0/default.jpg');
      expect(result.artworks[0].creationPeriod).toBe('Origin (2000)');
      expect(result.artworks[0].material_titles).toEqual(['oil paint (paint)', 'canvas, paint, painting']);
      expect(result.pagination).toEqual(mockArtworkResponse.pagination);
    });

    const req = httpMock.expectOne((request) =>
      request.url === service['apiUrl'] &&
      request.params.get('fields') === 'id,title,artist_display,date_start,date_end,place_of_origin,medium_display,style_titles,thumbnail,image_id,material_titles' && // Include material_titles
      request.params.get('page') === page.toString() &&
      request.params.get('limit') === size.toString()
    );

    expect(req.request.method).toBe('GET');
    req.flush(mockArtworkResponse);
  });

  it('should handle artworks without image_id correctly', () => {
    const modifiedResponse = {
      ...mockArtworkResponse,
      data: [
        {
          ...mockArtworkResponse.data[0],
          image_id: null
        }
      ]
    };

    const page = 1;
    const size = 12;

    service.getArtworks(page, size).subscribe((result) => {
      expect(result.artworks.length).toBe(1);
      expect(result.artworks[0].imageUrl).toBe('https://upload.wikimedia.org/wikipedia/commons/3/32/Art_Institute_of_Chicago_logo.svg');
      expect(result.artworks[0].material_titles).toEqual(['oil paint (paint)', 'canvas, paint, painting']); // Check material_titles
    });

    const req = httpMock.expectOne((request) =>
      request.url === service['apiUrl'] &&
      request.params.get('fields') === 'id,title,artist_display,date_start,date_end,place_of_origin,medium_display,style_titles,thumbnail,image_id,material_titles' && // Include material_titles
      request.params.get('page') === page.toString() &&
      request.params.get('limit') === size.toString()
    );

    expect(req.request.method).toBe('GET');
    req.flush(modifiedResponse);
  });
});