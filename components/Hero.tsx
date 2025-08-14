// components/Hero.tsx

export const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden bg-black">
      {/* Background Video Layer */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          src="/hero-video1.mp4" // Points to the video in your public folder
          autoPlay
          loop
          muted
          playsInline // Important for playback on mobile devices
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.5) contrast(1.1)' }} // Adjust these values
        ></video>
      </div>

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-transparent to-black opacity-80 z-10"></div>

      {/* Text Content Layer */}
      <div className="relative z-20 p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Building the Future of Campus Connection.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 shadow-md ">
          We are a Milwaukee-based innovation studio dedicated to empowering student creators and streamlining campus communication.
        </p>
        <div className="mt-8">
          <a
            href="#about"
            className="px-8 py-3 font-semibold text-black bg-white rounded-md hover:bg-gray-200 transition-transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};