import c from './HomePage.module.css';

export default function Home() {
  return (
    <div className={c.container}>
      <h1>
        Phone<span className={c.span}>Book</span>
      </h1>
    </div>
  );
}
