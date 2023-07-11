import { inputProps } from "@/core/shared/interface";
import styles from "../../styles/form.module.css";

export default function TextField(props: inputProps) {
  return (
    <textarea
      name={props.name}
      className={`${styles.ttInputField} ${
        props.scheme == "dark"
          ? styles.ttInputFieldDark
          : styles.ttInputFieldDefault
      } h-40`}
      placeholder={props.placeholder}
      required
    />
  );
}
