
import Head from 'next/head';
import { FC } from 'react';
import { childrens } from '../../pages/api/interfaces/props';
import Navbar from '../Navbar';
import styles from './MainLayout.module.css';

const MainLayout: FC<childrens> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home mi primer app nextjs</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="keywords" content="bryan, suaza, nextjs" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <main className={styles.main}>

                { children }

            </main>

        </div>
    )
}

export default MainLayout