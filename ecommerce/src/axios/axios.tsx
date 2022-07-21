import { config } from "@config/index";
import axios from "axios";

const dogsApi = axios.create({
  baseURL: `${config.url.media.images.dogs}`,
});

export default dogsApi;