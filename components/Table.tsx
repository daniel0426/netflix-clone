import { CheckIcon } from '@heroicons/react/outline';
import { Product } from '@stripe/firestore-stripe-payments';

interface Props {
  products: Product[];
  selectedPlan: Product | null;
}
function Table({ products, selectedPlan }: Props) {
  console.log(products);
  return (
    <table>
      <tbody className="divide-y divide-white/50">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly Price</td>
          {products.map((product) => (
            <td
              className={`tableData ${
                selectedPlan?.id === product.id
                  ? 'text-[#e50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              NZD {product.prices[0].unit_amount! / 100}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video Quality</td>
          {products.map((product) => (
            <td
              className={`tableData ${
                selectedPlan?.id === product.id
                  ? 'text-[#e50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.metadata.videoQuality}
            </td>
          ))}
        </tr>

        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          {products.map((product) => (
            <td
              className={`tableData ${
                selectedPlan?.id === product.id
                  ? 'text-[#e50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.metadata.Resolution}
            </td>
          ))}
        </tr>

        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, Computer, mobile phone and tablet
          </td>
          {products.map((product) => (
            <td
              className={`tableData ${
                selectedPlan?.id === product.id
                  ? 'text-[#e50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.metadata.portability === 'true' && (
                <CheckIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
