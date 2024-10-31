import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/Home.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='home'>
        <section className='hero'>
          <div className='heroHeading'>
            <div className='line1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='91'
                height='51'
                viewBox='0 0 91 51'
                fill='none'
              >
                <path
                  d='M90.0878 25.5155C90.1057 28.8597 89.4607 32.1744 88.1896 35.2694C86.9185 38.3645 85.0465 41.179 82.681 43.551C80.361 45.8698 77.6106 47.7166 74.5829 48.9886C71.4594 50.3066 68.0991 50.9762 64.7072 50.9568C61.3164 50.9647 57.9583 50.2955 54.8314 48.9886C51.8004 47.7227 49.0488 45.8752 46.7333 43.551C43.1219 39.9997 40.6542 35.4563 39.6452 30.5011C38.6362 25.5458 39.1317 20.4035 41.0684 15.7301C43.0051 11.0567 46.2952 7.06431 50.5187 4.26269C54.7422 1.46107 59.7077 -0.0228011 64.7812 0.000409792C68.1731 -0.0189941 71.5334 0.650884 74.657 1.96891C77.6799 3.24962 80.4288 5.09532 82.7551 7.40647C85.0962 9.72559 86.9509 12.4858 88.2114 15.5262C89.5153 18.6932 90.1539 22.0929 90.0878 25.5155Z'
                  fill='#FE6B36'
                />
                <path
                  d='M74.8195 27.1237C75.6155 26.3277 75.6155 25.0371 74.8195 24.2411L61.8479 11.2695C61.0519 10.4735 59.7613 10.4735 58.9653 11.2695C58.1693 12.0655 58.1693 13.3561 58.9653 14.1521L70.4956 25.6824L58.9653 37.2127C58.1693 38.0087 58.1693 39.2992 58.9653 40.0952C59.7613 40.8912 61.0519 40.8912 61.8479 40.0952L74.8195 27.1237ZM19.5674 27.7207H73.3782V23.6441H19.5674V27.7207Z'
                  fill='#232323'
                />
                <circle
                  cx='11.289'
                  cy='25.557'
                  r='9.25069'
                  stroke='#232323'
                  strokeWidth='4.07657'
                />
              </svg>
              <span>Go-To</span>
              <span className='iconHorizontal'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M1.27465 19.1992C0.461568 19.9777 0.433564 21.268 1.2121 22.0811C1.99065 22.8941 3.28091 22.9221 4.094 22.1436L1.27465 19.1992ZM23.3119 2.91561C23.3364 1.79016 22.4438 0.857999 21.3184 0.833573L2.97809 0.435519C1.85264 0.411093 0.920485 1.30365 0.896059 2.4291C0.871632 3.55455 1.76419 4.48671 2.88964 4.51113L19.1921 4.86496L18.8383 21.1674C18.8138 22.2929 19.7064 23.225 20.8318 23.2495C21.9573 23.2739 22.8895 22.3813 22.9139 21.2559L23.3119 2.91561ZM4.094 22.1436L22.6838 4.3436L19.8645 1.39916L1.27465 19.1992L4.094 22.1436Z'
                    fill='#232323'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='5'
                  viewBox='0 0 24 5'
                  fill='none'
                >
                  <path
                    d='M2.68433 2.08545L21.4366 2.08545'
                    stroke='#232323'
                    strokeWidth='4.07657'
                    strokeLinecap='round'
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='29'
                  viewBox='0 0 28 29'
                  fill='none'
                >
                  <path
                    d='M27.7924 14.4986C27.8022 16.3178 27.4512 18.121 26.7598 19.8047C26.0683 21.4884 25.0499 23.0195 23.7631 24.3099C22.501 25.5713 21.0048 26.576 19.3577 27.2679C17.6585 27.985 15.8305 28.3492 13.9853 28.3386C12.1407 28.3429 10.314 27.9789 8.61294 27.2679C6.96405 26.5793 5.46718 25.5743 4.20757 24.3099C2.24294 22.378 0.900517 19.9064 0.351623 17.2107C-0.197271 14.5151 0.0722664 11.7176 1.12583 9.17534C2.1794 6.63303 3.96921 4.46115 6.26681 2.93707C8.56442 1.41299 11.2656 0.60576 14.0256 0.618387C15.8708 0.607831 17.6988 0.972245 19.398 1.68925C21.0425 2.38596 22.5379 3.39002 23.8034 4.64728C25.077 5.90888 26.086 7.41044 26.7716 9.06439C27.4809 10.7873 27.8284 12.6367 27.7924 14.4986Z'
                    fill='#4B80F9'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24px'
                  viewBox='0 -960 960 960'
                  width='24px'
                  fill='#000000'
                >
                  <path d='M480-392 300-212q-18 18-44 18t-44-18q-18-18-18-44t18-44l180-180-180-180q-18-18-18-44t18-44q18-18 44-18t44 18l180 180 180-180q18-18 44-18t44 18q18 18 18 44t-18 44L568-480l180 180q18 18 18 44t-18 44q-18 18-44 18t-44-18L480-392Z' />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='29'
                  viewBox='0 0 28 29'
                  fill='none'
                >
                  <path
                    d='M27.8959 14.4986C27.9057 16.3178 27.5548 18.121 26.8633 19.8047C26.1718 21.4884 25.1534 23.0195 23.8666 24.3099C22.6046 25.5713 21.1083 26.576 19.4612 27.268C17.7621 27.985 15.9341 28.3492 14.0888 28.3386C12.2443 28.3429 10.4175 27.9789 8.71645 27.268C7.06757 26.5793 5.5707 25.5743 4.31108 24.3099C2.34646 22.378 1.00403 19.9064 0.455139 17.2107C-0.0937551 14.5151 0.175782 11.7176 1.22935 9.17534C2.28292 6.63303 4.07272 4.46115 6.37033 2.93707C8.66794 1.41299 11.3691 0.60576 14.1291 0.618387C15.9743 0.607831 17.8023 0.972245 19.5015 1.68925C21.146 2.38596 22.6414 3.39002 23.9069 4.64728C25.1805 5.90888 26.1895 7.41044 26.8752 9.06439C27.5845 10.7873 27.9319 12.6367 27.8959 14.4986Z'
                    fill='#3AB170'
                  />
                </svg>
              </span>
            </div>

            <div className='line2'>
              <span>Market</span>
              <img src='/heroHeadingLine2.svg' alt='svg' />
            </div>

            <div className='line3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='27'
                height='52'
                viewBox='0 0 27 52'
                fill='none'
              >
                <path
                  d='M0.739746 0.914307H3.90405C9.81954 0.914307 15.4928 3.26423 19.6757 7.44712C23.8585 11.63 26.2084 17.3032 26.2084 23.2187V29.5671C26.2084 35.4826 23.8585 41.1558 19.6757 45.3387C15.4928 49.5216 9.81954 51.8715 3.90405 51.8715H0.739746V0.914307Z'
                  fill='#11A858'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='52'
                viewBox='0 0 25 52'
                fill='none'
              >
                <path
                  d='M0.615967 0.914307H3.60422C9.19061 0.914307 14.5482 3.2635 18.4984 7.44509C22.4485 11.6267 24.6678 17.2981 24.6678 23.2118L24.6678 29.574C24.6678 35.4877 22.4485 41.1591 18.4984 45.3407C14.5482 49.5223 9.19061 51.8715 3.60422 51.8715H0.615964L0.615967 0.914307Z'
                  fill='#A837DD'
                />
              </svg>
              <span>Faster</span>
              <svg
                className='alignBottom'
                xmlns='http://www.w3.org/2000/svg'
                width='13'
                height='13'
                viewBox='0 0 13 13'
                fill='none'
              >
                <path
                  d='M6.6989 0.263114C6.43097 0.173363 6.26699 0.173363 5.99906 0.263114C5.34543 0.482023 5.37378 1.86734 5.57576 3.23415C5.0644 1.95061 4.39355 0.738249 3.71837 0.876977C3.4416 0.933876 3.29977 1.01615 3.11307 1.22826C2.66412 1.73834 3.35735 2.89618 4.20175 3.96431C3.13173 3.12228 1.9724 2.43154 1.46333 2.88166C1.25166 3.0688 1.16967 3.21079 1.11341 3.48768C0.977099 4.15861 2.17354 4.82229 3.44843 5.32951C2.09071 5.13131 0.722723 5.10775 0.505302 5.75692C0.41555 6.02484 0.41555 6.18882 0.505302 6.45675C0.722723 7.10592 2.09071 7.08236 3.44843 6.88415C2.17354 7.39138 0.977058 8.05506 1.11337 8.72598C1.16967 9.00288 1.25166 9.14486 1.46333 9.33201C1.9724 9.78209 3.13177 9.09142 4.20175 8.24936C3.35735 9.31753 2.66412 10.4753 3.11311 10.9854C3.29981 11.1975 3.44164 11.2798 3.71837 11.3367C4.3936 11.4755 5.06444 10.263 5.57584 8.97948C5.37382 10.3463 5.34547 11.7316 5.9991 11.9506C6.26703 12.0403 6.43101 12.0403 6.69894 11.9506C7.35257 11.7316 7.32422 10.3463 7.1222 8.97939C7.63361 10.263 8.30445 11.4755 8.97967 11.3367C9.25644 11.2798 9.39827 11.1975 9.58497 10.9854C10.0339 10.4753 9.34069 9.31753 8.49629 8.24936C9.56631 9.09142 10.7256 9.78209 11.2347 9.33201C11.4464 9.14486 11.5284 9.00288 11.5847 8.72598C11.721 8.05506 10.5245 7.39138 9.24965 6.88415C10.6073 7.08236 11.9753 7.10592 12.1927 6.45675C12.2825 6.18882 12.2825 6.02484 12.1927 5.75692C11.9753 5.10775 10.6073 5.13131 9.24965 5.32951C10.5245 4.82229 11.721 4.15861 11.5847 3.48768C11.5284 3.21079 11.4464 3.0688 11.2347 2.88166C10.7256 2.43154 9.56627 3.12224 8.49625 3.96431C9.34065 2.89618 10.0339 1.73834 9.58493 1.22826C9.39823 1.01615 9.25644 0.933876 8.97967 0.876977C8.30445 0.738249 7.63361 1.95065 7.1222 3.23423C7.32422 1.86738 7.35253 0.482023 6.6989 0.263114Z'
                  fill='#232323'
                />
              </svg>
            </div>
          </div>

          <div className='heroSubHeading'>
            GTM<span>Canvas</span>
          </div>

          <div className='heroParagraph'>
            <span>
              Go to Market (GTM) Canvas is the strategic way to develop your Go
              to Market Strategy for your startup/idea. This works well for all
              idea stage products and services across all sectors and
              industries.
            </span>
            <p>[open source]</p>
          </div>

          <div className='cta'>
            <button>
              <span>Download</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 -960 960 960'
                width='24px'
                fill='#000000'
              >
                <path d='M594-417H189q-26 0-44.5-18.5T126-480q0-26 18.5-44.5T189-543h405l-77-77q-18-18-18-44t18-44q18-18 44-18t44 18l184 183q9 9 14 21t5 24q0 12-5 24t-14 21L605-252q-18 18-44 18t-44-18q-18-18-18-44t18-44l77-77Z' />
              </svg>
            </button>
          </div>
        </section>

        <section className='companiesSection'>
          <span>250+ Companies Use GTM Canvas including</span>
          <div className='companies'>
            <img src='/Leadmagic.svg' alt='Leadmagic' />
            <img src='/activar.svg' alt='Activar' />
            <img src='/circularise.svg' alt='Circularise' />
            <img src='/pixiebrix.svg' alt='pixiebrix' />
            <img src='/bvrit.svg' alt='bvrit' />
            <img src='/mintit.svg' alt='mintit' />
          </div>
        </section>

        <section className='workshops'>
          <div className='workshopContent'>
            <span className='heading'>Workshops</span>
            <span className='subHeading'>Unlocking GTM Mastery: </span>
            <span className='subHeading'>
              Mastery for Leaders and Innovators.
            </span>
            <div>
              <div className='left'>
                <p className='title'>Expert-Led GTM Workshops.</p>
                <p className='content'>
                  Immersive, hands-on workshops designed for emerging corporate
                  leaders, entrepreneurs, product managers, and marketing
                  professionals.
                </p>
              </div>
              <div className='right'>
                <p className='title'>
                  Actionable insights and real-world case studies.
                </p>
                <p className='content'>
                  Learn the art and science of creating a robust Go-To-Market
                  (GTM) strategy through practical exercises and real-world case
                  studies.
                </p>
              </div>
            </div>

            <button>Book A Session</button>
          </div>

          <img src='/workshop.png' alt='workshop' className='workshopImage' />
        </section>

        <section className='consultation'>
          <div className='consultationContent'>
            <p className='heading'>Consultation</p>

            <p className='subHeading'>
              Expert Consulting <br /> For Your Product&apos;s Success.
            </p>

            <p className='title'>Elevate your product&apos;s trajectory.</p>

            <p className='content'>
              Navigating the complexities of a new product launch can be
              daunting. Our consulting services, guided by the proven GTM Canvas
              framework, offer tailored strategies to help startups and emerging
              businesses achieve significant growth.
            </p>

            <ul>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24px'
                  viewBox='0 -960 960 960'
                  width='24px'
                  fill='#75FB4C'
                >
                  <path d='M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z' />
                </svg>
                <span>Product Discovery</span>
              </li>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24px'
                  viewBox='0 -960 960 960'
                  width='24px'
                  fill='#75FB4C'
                >
                  <path d='M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z' />
                </svg>
                <span>Customized GTM Strategy</span>
              </li>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24px'
                  viewBox='0 -960 960 960'
                  width='24px'
                  fill='#75FB4C'
                >
                  <path d='M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z' />
                </svg>
                <span>Develop Effective Marketing Channels</span>
              </li>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24px'
                  viewBox='0 -960 960 960'
                  width='24px'
                  fill='#75FB4C'
                >
                  <path d='M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z' />
                </svg>
                <span>Growth Planning</span>
              </li>
            </ul>

            <button>Book A Session</button>
          </div>
          <img src='/consultation.svg' alt='consultation' />
        </section>

        <section className='certification'>
          <div className='certificationContent'>
            <p className='heading'>Certification</p>
            <p className='subHeading'>
              Accelerate Your Career. <br /> Become A Certified GTM Pro.
            </p>
            <p className='earn'>
              Earn your GTM certification and showcase your expertise. Gain the
              edge in developing and implementing effective go-to-market
              strategies.
            </p>

            <p className='title'>Why Get Certified with Us?</p>
            <ul>
              <li>
                <strong>Master GTM:</strong> Industry led approach with
                practical action items, methods and frameworks to master the art
                & science of GTM.
              </li>
              <li>
                <strong>Industry Demand:</strong> Everyday, the industry needs
                thousands of GTM strategy consultants with certified skills.
              </li>
              <li>
                <strong>Professional Recognition:</strong> Become a Certified
                GTM Strategy Consultant and join the industry.
              </li>
            </ul>

            <button>Book A Session</button>
          </div>
          <img src='/certification.png' alt='certification' />
        </section>

        <section className='banner'>
          <div>
            <span>Idea</span>
            <img src='/star.svg' alt='star' />
            <span>Product</span>
            <img src='/star.svg' alt='star' />
            <span>Market</span>
            <img src='/star.svg' alt='star' />
            <span>Research</span>
            <img src='/star.svg' alt='star' />
            <span>Launch</span>
            <img src='/star.svg' alt='star' />
            <span>Idea</span>
            <img src='/star.svg' alt='star' />
            <span>Product</span>
            <img src='/star.svg' alt='star' />
            <span>Market</span>
            <img src='/star.svg' alt='star' />
            <span>Research</span>
            <img src='/star.svg' alt='star' />
            <span>Launch</span>
            <img src='/star.svg' alt='star' />
            <span>Idea</span>
            <img src='/star.svg' alt='star' />
            <span>Product</span>
            <img src='/star.svg' alt='star' />
            <span>Market</span>
            <img src='/star.svg' alt='star' />
            <span>Research</span>
            <img src='/star.svg' alt='star' />
            <span>Launch</span>
            <img src='/star.svg' alt='star' />
          </div>
        </section>

        <section className='handbook'>
          <div className='handbookContainer'>
            <img src='/monitor.png' alt='monitor' />

            <div className='content'>
              <p className='heading'>
                Dive into the <br /> GTM handbook.
              </p>
              <p className='text'>
                Grab the comprehensive guide to get your business ready for a
                successful Go To Market Strategy.
              </p>
              <div className='buttons'>
                <button className='active'>
                  GTM Canvas
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

                <button>GTM Handbook</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
