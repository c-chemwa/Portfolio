import Card from "../components/Card";

// Use your own images in "public" or "src/assets"
const uiuxImages = ["/uiux1.jpg", "/uiux2.jpg", "/uiux3.jpg"];
const musicImages = ["/music1.jpg", "/music2.jpg", "/music3.jpg"];
const filmImages = ["/film1.jpg", "/film2.jpg", "/film3.jpg"];

export default function Landing() {
  return (
    <div className="w-screen h-screen flex flex-row md:flex-row flex-col items-stretch justify-stretch overflow-hidden">
      <Card
        to="/uiux"
        images={uiuxImages}
        alt="UI/UX"
        bgColor="bg-blue-700"
        title="UI/UX"
      />
      <Card
        to="/music"
        images={musicImages}
        alt="Music"
        bgColor="bg-pink-700"
        title="Music"
      />
      <Card
        to="/film"
        images={filmImages}
        alt="Film"
        bgColor="bg-yellow-700"
        title="Film"
      />
    </div>
  );
}