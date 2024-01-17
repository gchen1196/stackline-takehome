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
        <span className={styles.tag}>Pantry</span>
        <span className={styles.tag}>Obsolete</span>
        <span className={styles.tag}>Blender</span>
        <span className={styles.tag}>Lightning Deal</span>
      </div>
    </div>
  );
};
export default ProductOverview;
