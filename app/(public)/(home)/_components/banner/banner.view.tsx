import Image from 'next/image';

export function BannerView() {
  return (
    <div className="p-pattern w-full text-white h-85 relative">
      <div className="absolute z-2 mt-20">
        <h1 className="text-4xl font-medium italic">UNCommerce</h1>
        <p className="text-xl">
          Qualidade tecnologica que{' '}
          <span className="text-primary font-medium">você merece!</span>
        </p>
      </div>

      <Image src="/banner.jpg" alt="Banner" fill className="brightness-30" />
    </div>
  );
}
