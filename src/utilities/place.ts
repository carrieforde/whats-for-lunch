import { Address } from "../entities/address.interface";
import {
  AdressComponent,
  OpeningHourPeriods,
  PlaceDetailApiResponse,
  PlaceWithDetail,
} from "../entities/PlaceApi.interface";
import {
  BusinessHours,
  OpenClose,
  Restaurant,
} from "../entities/restaurant.interface";

export function formatOpenCloseTime(time: string): string {
  return time[0] + time[1] + ":" + time[2] + time[3];
}

export function toOpenCloseHours(
  openTime: string,
  closeTime: string,
  lunchTime = "1230"
): OpenClose {
  if (openTime <= lunchTime && closeTime >= lunchTime) {
    return {
      open: formatOpenCloseTime(openTime),
      close: formatOpenCloseTime(closeTime),
    };
  }
  return { open: "", close: "" };
}

export function toDayOfWeekRecords(
  periods: OpeningHourPeriods[]
): BusinessHours[] {
  const dayOfWeekMap: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return periods.map((period: OpeningHourPeriods) => {
    return {
      [dayOfWeekMap[period.close.day]]: toOpenCloseHours(
        period.open.time,
        period.close.time
      ),
    };
  });
}

export function processBusinessHours(
  detail: PlaceDetailApiResponse
): BusinessHours[] {
  const hours = detail.result.opening_hours.periods;
  return toDayOfWeekRecords(hours);
}

export function getPlacesAddressComponent(
  components: AdressComponent[],
  component: string
): string {
  for (let i = 0; i < components.length; i++) {
    if (components[i].types.indexOf(component) > -1) {
      return components[i].short_name;
    }
  }

  return "";
}

export function getRestaurantAddress(detail: PlaceDetailApiResponse): Address {
  const addressComponents = detail.result.address_components;
  if (addressComponents.length > 1) {
    const street_number: string = getPlacesAddressComponent(
      addressComponents,
      "street_number"
    );
    const street_name: string = getPlacesAddressComponent(
      addressComponents,
      "route"
    );
    const city_name: string = getPlacesAddressComponent(
      addressComponents,
      "locality"
    );
    const state_name: string = getPlacesAddressComponent(
      addressComponents,
      "administrative_area_level_1"
    );
    const zip_code: string = getPlacesAddressComponent(
      addressComponents,
      "postal_code"
    );

    return {
      street: street_number + " " + street_name,
      city: city_name,
      state: state_name,
      zipcode: zip_code,
    };
  } else {
    return {
      street: "",
      city: "",
      state: ",",
      zipcode: "",
    };
  }
}

export function selectRestaurantPhoto(detail: PlaceDetailApiResponse): string {
  const photoList = detail.result.photos;
  if (photoList.length > 1) {
    return photoList[0].photo_reference;
  } else {
    return "";
  }
}

export function createRestaurantRecord(
  selectedPlaceWithDetail: PlaceWithDetail
): Restaurant {
  const restaurant: Restaurant = {
    name: selectedPlaceWithDetail.place.name,
    address: getRestaurantAddress(selectedPlaceWithDetail.detail),
    phone: selectedPlaceWithDetail.detail.result.formatted_phone_number,
    website: selectedPlaceWithDetail.detail.result.website,
    hours: processBusinessHours(selectedPlaceWithDetail.detail),
    photo: selectRestaurantPhoto(selectedPlaceWithDetail.detail),
    google_place_id: selectedPlaceWithDetail.place.place_id,
  };

  return restaurant;
}
