import Image from 'next/image';

export function BannerView() {
  return (
    <div className="p-pattern w-full text-white md:h-95 h-45 relative">
      <div className="absolute z-2 md:mt-30 mt-12">
        <h1 className="md:text-4xl text-3xl font-medium italic">UNCommerce</h1>
        <p className="md:text-xl text-base">
          Qualidade tecnológica que{' '}
          <span className="text-primary font-medium">você merece!</span>
        </p>
      </div>

      <Image src="/banner.jpg" loading='eager' alt="Banner" fill className="brightness-30" />
    </div>
  );
}
