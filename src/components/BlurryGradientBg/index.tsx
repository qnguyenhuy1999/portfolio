interface BlurryGradientBgProps {
  children?: React.ReactNode;
}

export default function BlurryGradientBg({ children }: BlurryGradientBgProps) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Pink/Purple Blob */}
      <div className="absolute left-1/4 top-1/2 w-[400px] h-[400px] bg-pink-700 opacity-60 rounded-full blur-[140px] animate-pulse" />
      {/* Blue Blob */}
      <div className="absolute right-1/4 top-0 w-[400px] h-[400px] bg-cyan-500 opacity-50 rounded-full blur-[150px] animate-pulse" />
      {/* Optional content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
