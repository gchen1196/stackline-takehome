import { useSelector } from "react-redux";
import { RootState } from "../app/store";

import styles from "./ProductOverview.module.css";

const ProductOverview = () => {
  const product = useSelector((state: RootState) => state.product.productData);

  if (!product.length) return;
  const productInfo = product[0];
  return (
    <div className={styles.info}>
      <img src={productInfo.image} alt="Product Image" />
      <div className={styles.title}>{productInfo.title}</div>
      <div className={styles.description}>{productInfo.subtitle}</div>
      <div className={styles.tags}>
        {productInfo.tags.map(val => (
          <span className={styles.tag}>{val}</span>
        ))}
      </div>
    </div>
  );
};
export default ProductOverview;
