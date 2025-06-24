const uiuxMain = "/uiux-main.jpg";
const uiuxCollage = ["/uiux1.jpg", "/uiux2.jpg", "/uiux3.jpg", "/uiux4.jpg"];

const musicMain = "/music-main.jpg";
const musicCollage = ["/music1.jpg", "/music2.jpg", "/music3.jpg", "/music4.jpg"];

const filmMain = "/film-main.jpg";
const filmCollage = ["/film1.jpg", "/film2.jpg", "/film3.jpg", "/film4.jpg"];

export default function Landing() {
  return (
    <div className="w-screen h-screen flex flex-row md:flex-row flex-col items-stretch justify-stretch overflow-hidden">
      <Card
        to="/uiux"
        mainImage={uiuxMain}
        collageImages={uiuxCollage}
        alt="UI/UX"
        bgColor="bg-blue-700"
        title="UI/UX"
      />
      <Card
        to="/music"
        mainImage={musicMain}
        collageImages={musicCollage}
        alt="Music"
        bgColor="bg-pink-700"
        title="Music"
      />
      <Card
        to="/film"
        mainImage={filmMain}
        collageImages={filmCollage}
        alt="Film"
        bgColor="bg-yellow-700"
        title="Film"
      />
    </div>
  );
}