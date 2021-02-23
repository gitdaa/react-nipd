import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const XExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>XExample Component: {text}</div>
}

export const ABCComponent = ({ text }: Props) => {
  return <div className={styles.test}>TEST XExample Component: {text}</div>
}
