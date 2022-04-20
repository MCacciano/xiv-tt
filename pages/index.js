import Head from 'next/head';
import Image from 'next/image';
import Board from '../components/Board/Board';
import PlayerPanel from '../components/PlayerPanel/PlayerPanel';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='flex min-h-screen'>
      <PlayerPanel name='Player One' />
      <Board />
      <PlayerPanel name='Player Two' />
    </div>
  );
}
