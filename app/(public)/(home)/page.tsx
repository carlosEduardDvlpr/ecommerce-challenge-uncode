import Banner from './_components/banner';
import OfferProductsViewModel from './_components/offers';

export default async function HomePage() {
  return (
    <main>
      <Banner />
      <OfferProductsViewModel />
    </main>
  );
}
