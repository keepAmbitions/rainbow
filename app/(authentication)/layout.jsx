"use client";
/**
 * 上层采用路由分组的形式，即(authentication)
 * 因为这样既可以避免 authentication 出现在路由段中
 * 又可以让login和logout共享此布局
*/
import styles from './index.module.css';
export default function AuthLayout({ children }) {
  return <main className={styles.main}>AuthLayout{ children }</main>;
}
