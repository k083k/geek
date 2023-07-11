import { inputProps } from "@/core/shared/interface";
import styles from "../../styles/form.module.css";

export default function InputField(props: inputProps) {
  return (
    <>
      <input
        className={`${styles.ttInputField} ${
          props.scheme == "dark"
            ? styles.ttInputFieldDark
            : styles.ttInputFieldDefault
        } h-10`}
        type={props.type ? props.type : "text"}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
      />
    </>
  );
}
