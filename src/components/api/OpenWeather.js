import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/"
const instance = axios.create({
    baseURL: BASE_URL
})

export const OpenWeather = {
    getData: function (lat, lon, units) {
        return instance.get("forecast",  { params: { lat, lon, cnt: 50, appid: "fba0b4cdd06491d2eb25716fc60d2d81", units }})

    },
    getData2: function (q, units) {
        return instance.get("weather",  { params: { q, appid: "fba0b4cdd06491d2eb25716fc60d2d81", units }})
    }
}