import { useState, useEffect } from "react";
import dogsApi from "@axios/axios";
import "./notFound.styles.scss";
import { config } from "@config/index";

const NotFound = () => {
  const [currentImage, setCurrentImage] = useState<string>();

  let dogAwake = false;
  let newDog = 1;

  useEffect(() => {
      (async () => {
        console.log("This Shit has been called!");

        while (!dogAwake) {
          newDog = getNewDog();
          dogAwake = await getAwakeDog(newDog);
        }

        dogAwake && setCurrentImage(`${config.url.media.images.dogs}${newDog}._TTD_.jpg`);
      })();
  }, []);

  const getAwakeDog = async (randomDog: number) => {
    let dogAvailable = false;
    const random = await dogsApi
      .get(`${randomDog}._TTD_.jpg`)
      .then((res) => (dogAvailable = true))
      .catch((err) => (err.code ? (dogAvailable = false) : null));

    return dogAvailable;
  };

  const getNewDog = () => {
    const randomNumber = Math.random() * 500;
    const randomDog = Math.floor(randomNumber);

    return randomDog;
  };

  return (
    <div className="main-not-found-container">
      <img src={"/src/assets/images/not-found.png"} />
      {currentImage ? <img src={currentImage} /> : null}
    </div>
  );
};

export default NotFound;
