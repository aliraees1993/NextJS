import { createApi } from "unsplash-js";

const unsplashApi = createApi({
    accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});

const getUnsplashPhotos = async (query, limit) => {
    return await unsplashApi.search.getPhotos({
        query: query,
        perPage: limit,
    });
};

const getFourSquareUrl = (query, latLong, radius, sort, limit) => {
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&radius=${radius}&sort=${sort}&limit=${limit}`;
};

export const fetchCafes = async (
    latLong = "49.27816559266887%2C7.036614055963037",
    limit = 6
) => {
    const unsplashData = await getUnsplashPhotos("cafe", 40);

    const photos = unsplashData.response.results.map(
        (result) => result.urls["small"]
    );

    const fourSquareUrl = getFourSquareUrl(
        "cafe",
        latLong,
        "5000",
        "DISTANCE",
        limit
    );

    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
        },
    };

    const response = await fetch(fourSquareUrl, options);
    const data = await response.json();

    return data.results.map((result, idx) => {
        return {
            id: result.fsq_id,
            name: result.name,
            imgUrl: photos[idx],
            address: result.location.address,
            postcode: result.location.postcode,
            locality: result.location.locality,
        };
    });
};
