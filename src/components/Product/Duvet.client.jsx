import DuvetBanner from '../DuvetBanner';
import TheSecret from '../TheSecret';

export default function Duvet() {
  return (
    <div className="flex flex-col">
      <DuvetBanner />
      <TheSecret productName="Duvet Zissou" />
    </div>
  );
}
