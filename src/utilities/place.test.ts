import testPlace from "../mocks/place.json";
import testPlaceDetail from "../mocks/placeDetail.json";
import emptyPlaceDetail from "../mocks/emptyPlaceDetail.json";
import badPlaceDetail from "../mocks/badPlaceDetail.json";
import { PlaceWithDetail } from "../entities/PlaceApi.interface";
import { createRestaurantRecord } from "./place";

describe("Place", () => {
  it("should populate restaurant record with place and place detail values", () => {
    const input: PlaceWithDetail = {
      place: testPlace,
      detail: testPlaceDetail,
    };
    const res = createRestaurantRecord(input);

    expect(res.name).toEqual("Blue Bottle Coffee");
    expect(res.address).toEqual({
      street: "3081 S Delaware St",
      city: "San Mateo",
      state: "CA",
      zipcode: "94403",
    });
    expect(res.phone).toEqual("(510) 653-3394");
    expect(res.website).toEqual(
      "https://bluebottlecoffee.com/cafes/bay-meadows"
    );
    expect(res.hours).toEqual([
      { Sunday: { close: "18:00", open: "06:00" } },
      { Monday: { close: "18:00", open: "06:00" } },
      { Tuesday: { close: "18:00", open: "06:00" } },
      { Wednesday: { close: "18:00", open: "06:00" } },
      { Thursday: { close: "18:00", open: "06:00" } },
      { Friday: { close: "18:00", open: "06:00" } },
      { Saturday: { close: "18:00", open: "06:00" } },
    ]);
    expect(res.photo).toEqual(
      "ATtYBwLBZBTSVnXan6X7cvlfg8_hDQFWehGlNuRfv0wA8VOOYqNmwcNt-_KJO4rxjNDZa5V4iAKGBH0NKOrem56_GLzRoozLAGOQswMBlDLXmUaAqJO8zHRpLZxAaikDJXydeQK06bqi3sp_FSJwDCE5S0h5MqIb8VMXgysUL5ovSRmgMtrT"
    );
    expect(res.google_place_id).toEqual("ChIJnW-0QB2fj4ARbC3KqnXoo80");
  });
});

describe("Place", () => {
  it("should handle empty records", () => {
    const input: PlaceWithDetail = {
      place: testPlace,
      detail: emptyPlaceDetail,
    };
    const res = createRestaurantRecord(input);

    expect(res.name).toEqual("Blue Bottle Coffee");
    expect(res.address).toEqual({
      street: "",
      city: "",
      state: "",
      zipcode: "",
    });
    expect(res.phone).toEqual("(510) 653-3394");
    expect(res.website).toEqual(
      "https://bluebottlecoffee.com/cafes/bay-meadows"
    );
    expect(res.hours).toEqual([]);
    expect(res.photo).toEqual("");
    expect(res.google_place_id).toEqual("ChIJnW-0QB2fj4ARbC3KqnXoo80");
  });
});
