import styles from "../../styles/form.module.css"

type labelProps = {
    label: string,
    scheme?: string
}


export default function InputLabel(props: labelProps) {
  return (
    <label 
    className={`${styles.ttInputLabel} ${props.scheme =="dark"? styles.ttInputLabelDark : styles.ttInputLabelDefault}`}>
      {props.label}
      </label>
  )
}
