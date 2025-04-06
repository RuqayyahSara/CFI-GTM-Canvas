import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/About.css'

export default function About() {
  return (
    <>
      <Navbar />
      <div className='about'>
        <section className='excellence'>
          <div className='left'>
            <p className='heading'>
              GTM<i>Canvas</i>: <br /> Founded On Excellence.
            </p>
            <p>
              Meraj Faheem, the visionary behind the GTM certification program,
              brings over a decade of expertise in helping businesses thrive in
              competitive markets.
            </p>
            <p>
              A seasoned serial entrepreneur, Meraj has built multiple
              first-to-market, 0-7 figure businesses.He has worked with
              government agencies, corporates, Big 4, and has helped over 300+
              startups build their products and take them to market.
            </p>
          </div>
          <div className='right'>
            <div className='first'>
              <h1>1 IN 6</h1>
            </div>
            <div className='second'>
              <h3>
                1 &nbsp;&nbsp;&nbsp;in &nbsp;&nbsp;&nbsp;6 &nbsp;&nbsp;&nbsp;business schools/ organisations use GTM Canvas as their
                primary GTM strategy tool
              </h3>
            </div>
          </div>
        </section>

        <section className='section2'>
          <img src='/aboutSection2.png' alt='aboutSection2' />
        </section>

        <section className='section3'>
          <div className='section3Container'>
            <span className='heading'>Let&apos;s Make Something Great</span>
            <p>
              If you&apos;re looking to advance your career and become a GTM
              expert, <br /> we&apos;re excited to work together.
            </p>
            <button>
              <span>Contact Us</span>&nbsp;
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 -960 960 960'
                width='24px'
                fill='#FFFFFF'
              >
                <path d='M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z' />
              </svg>
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
