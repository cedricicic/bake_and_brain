'use client';
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bake.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to Bake & Brain
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Where creativity meets deliciousness
          </p>
          <Link
  href="/sample"
  className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
>
  Get Started
</Link>
        </div>
      </div>
    </div>
  );
} 