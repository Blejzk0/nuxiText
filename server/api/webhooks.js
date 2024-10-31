const token = "Bearer OcRRsUBrM7XEHGrmHcftBv3us3zF9jfPYxMQ8iyd3wUB2O426D4IWSZhQzXr4H625uLYEwBGRI5TgW24KmcUbyRmjpVCv02ZjF47mjYaPqj1bL5Zb3xx8843y4eeSvWZr0ltDv1Yfi62YmzaPK5wRIz3l9kZUa7LHezt7U7YOlbJpeuiJaEUx0t1SwyI7kh0Gs8DrcP0B3U3pTPGd4OC8c6G0MjJVV1AJySSzcUGXcR296S9ZcqfCL9wTWoZvbKKMMhJD47PV0CcyyQR0SCwvDRO0ofhoFsBFepHvO0tx5BH6Jvi70c9k1755bCvqqhUYKkgeGRAwfHKr605OV47D0acrmrEUTSaTrLh3QOGcGexWDw8DPeJz9kzHDerZQX6BC1emLtGBkPQFoaq15egrIS1aR4PhoX28H319dXuvugBHEVMKM12xKli50Y6uH06Ml2vuBpdvEvth4EK6MEWfJCarDUteawdM89lOgaRdOUMBgExx9BzZISMMsbvLII1";

export default defineEventHandler(async (event) => {
    if(getHeader(event, "Authorization") === token) {
        const body = await readBody(event);
        console.log(body);
    }else {
        console.log("unauth");
    }
});