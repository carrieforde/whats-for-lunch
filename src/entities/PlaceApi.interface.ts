export interface LatLng {
  lat: number;
  lng: number;
}

export interface GeoViewport {
  northeast: LatLng;
  southwest: LatLng;
}

export interface Geometry {
  location: LatLng;
  viewport: GeoViewport;
}

export interface OpeningHours {
  open_now: boolean;
}

export interface PlusCode {
  compound_code: string;
  global_code: string;
}

export interface PlaceApiResponse {
  business_status: string;
  formatted_address: string;
  geometry: Geometry;
  icon: string;
  name: string;
  opening_hours: OpeningHours;
  place_id: string;
  plus_code: PlusCode;
  price_level: number;
  rating: number;
  types: string[];
  user_ratings_total: number;
}

export interface AdressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface AdressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface OpeningHourPeriodElement {
  day: number;
  time: string;
}
export interface OpeningHourPeriods {
  open: OpeningHourPeriodElement;
  close: OpeningHourPeriodElement;
}

export interface DetailOpeningHours {
  open_now: boolean;
  periods: OpeningHourPeriods[];
  weekday_text: string[];
}

export interface Photos {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

export interface PlaceDetailApiResponseResult {
  address_components: AdressComponent[];
  adr_address: string;
  formatted_phone_number: string;
  opening_hours: DetailOpeningHours;
  photos: Photos[];
  website: string;
}

export interface PlaceDetailApiResponse {
  html_attributions: string[];
  result: PlaceDetailApiResponseResult;
  status: string;
}

export interface PlaceWithDetail {
  place: PlaceApiResponse;
  detail: PlaceDetailApiResponse;
}
