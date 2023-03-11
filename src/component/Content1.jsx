import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function Mycontent1(){

    return(
        <>

<div className=" container mx-auto flex flex-row ...">
  <div className="basis-1/4"> <div className="max-w-sm">
  <Card
 
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://a-static.besthdwallpaper.com/cute-doggie-dogs-puppies-wallpaper-1280x960-84105_20.jpg"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      DOGS
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
</div></div>
  <div className="basis-1/4"> <div className="max-w-sm">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://webneel.com/wallpaper/sites/default/files/images/05-2013/two%20cute%20cats%20wallpaper.jpg"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      CATS
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
</div></div>
  <div className="basis-1/4"> <div className="max-w-sm">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://www.teahub.io/photos/full/164-1643794_cute-love-bird.jpg"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      BIRDS
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
</div></div>\
<div className="basis-1/4"> <div className="max-w-sm">
  <Card
 
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://www.wallpapers13.com/wp-content/uploads/2016/02/Underwater-fish-fishes-goldfish-gold-fish-wallpaper-background-1280x960.jpg"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Aquatic animals
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
</div></div>
</div>
       
        
        </>
    )
}