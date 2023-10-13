'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <Button onClick={() => router.push('/demo')} variant="contained">我的第一个Next项目</Button>
          <Button onClick={() => router.push('/demo')} variant="outlined">持续迭代</Button>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/favicon-192x192.png"
          width={192}
          height={192}
          alt=""
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
// https://gd-hbimg.huaban.com/6329686a8d4f39aba408aa0b479b8c4094bc141f29e936-HUBpGw 大图
// https://gd-hbimg.huaban.com/6329686a8d4f39aba408aa0b479b8c4094bc141f29e936-HUBpGw_fw658webp 缩略图