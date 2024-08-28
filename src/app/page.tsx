import Image from "next/image";

export default function Home() {
  return (
    <main>
     <section className="one bg-primary rounded-b-[5rem]">
      <div className="md:mx-20 mx-5">
        <div className="flex justify-between items-center">
          <div><Image src="/image/Logo.png" alt="" width={100} height={25}/></div>
          <div className="md:block hidden">
            <ul className="flex space-x-20 text-white">
              <div className="flex items-center space-x-10 text-xl">
                <li><a href="./index.html">Home</a></li>
                <li><a href="./Courses.html">Courses</a></li>
                <li><a href="/Membership.html">Membership</a></li>
                <li><a href="./blog.html">Blog</a></li>
              </div>
              <div className="flex items-center space-x-10">
                <a href="./Search.html" title="Search"
                  ><i className="fas fa-magnifying-glass"></i></a>
                <li className="bg-white text-accent px-5 py-1 rounded-full">
                  <a href="./login.html">Login</a>
                </li>
                <li className="bg-primary border px-5 py-1 rounded-full">
                  <a href="./register.html">Sign up</a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-3 items-center">
          <div className="text-white py-20">
            <div className="space-y-10">
              <h3 className="text-5xl font-bold">
                <span className="text-main">Studying</span> Online is now much
                easier
              </h3>
              <p className="text-lg font-thin">
                TOTC is an interesting platform that will teach you in more an
                interactive way
              </p>
            </div>
            <div className="flex items-center pt-10 space-x-8">
              <div className="">
                <button
                  className="bg-secondary text-white text-semibold px-7 py-3 rounded-full"
                >
                  Join for free
                </button>
              </div>
              <div className="md:flex hidden items-center space-x-4">
                <Image src="/image/watch it.png" alt="" width={25} height={25} className="w-12" />
                <p className="text-black text-lg">watch how it works</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:block hidden relative">
            <Image src="/image/hero-img.png" alt="" width={500} height={100} className="w-1/2 mx-auto" />
            <Image
              src="/image/subhero1.png"
              alt=""
              width={100}
              height={25}
              className="absolute top-32 right-20"
            />
          </div>
        </div>
      </div>
    </section>
  
      <section className="Two">
      <div className="md:mx-20 mx-5 my-5 md:my-20">
        <div className="text-center md:px-96">
          <h3 className="md:text-5xl text-3xl font-bold pb-5">Our Success</h3>
          <p className="md:text-lg font-medium">
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
            sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
            ultrices eu ornare tristique vel nisl orci.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div
            className="flex md:flex-row flex-col md:space-x-20 md:space-y-0 space-y-10 px-10 pt-20 text-center"
          >
            <div>
              <p className="text-6xl text-linear">15K+</p>
              <p className="text-2xl font-semibold">Students</p>
            </div>
            <div>
              <p className="text-6xl text-linear">75%</p>
              <p className="text-2xl font-semibold">Total success</p>
            </div>
            <div>
              <p className="text-6xl text-linear">35</p>
              <p className="text-2xl font-semibold">Main questions</p>
            </div>
            <div>
              <p className="text-6xl text-linear">26</p>
              <p className="text-2xl font-semibold">Chief expert</p>
            </div>
            <div>
              <p className="text-6xl text-linear">16</p>
              <p className="text-2xl font-semibold">Years of experience</p>
            </div>
          </div>
        </div>
      </div>
     </section>

     <section className="Three">
      <div className="md:mx-32 mx-5 my-10 md:my-20">
        <div className="text-center font-bold md:px-96">
          <h3 className="text-sub text-4xl pb-5">
            All-In-One <span className="text-subheading">cloud software</span>
          </h3>
          <p className="text-accent text-lg font-medium">
            TOTC is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </p>
        </div>
        <div className="grid md:grid-cols-3 mt-32 md:gap-10 gap-20">
          <div className="cloud-card">
            <Image src="/image/subpicx.png" alt="Online billing" width={100} height={24} className="-mt-20 mx-auto" />
            <p className="text-sub text-3xl font-semibold px-5">
              Online Billing, Invoicing, & Contracts
            </p>
            <p className="text-accent text-lg font-medium py-10">
              Simple and secure control of your organization’s financial and
              legal transactions. Send customized invoices and contracts
            </p>
          </div>
          <div className="cloud-card">
            <Image src="/image/billing.png" alt="online billing" width={100} height={25} className="-mt-20 mx-auto"/>
            <p className="text-sub text-3xl font-semibold px-5">
              Easy Scheduling & Attendance Tracking
            </p>
            <p className="text-accent text-lg font-medium py-10">
              Schedule and reserve classNamerooms at one campus or multiple
              campuses. Keep detailed records of student attendance
            </p>
          </div>
          <div className="cloud-card">
            <Image src="/image/subpicx2.png" alt="" width={100} height={24} className="-mt-20 mx-auto" />
            <p className="text-sub text-3xl font-semibold px-5">
              Customer Tracking
            </p>
            <p className="text-accent text-lg font-medium py-10">
              Automate and track emails to individuals or groups. Skilline’s
              built-in system helps organize your organization
            </p>
          </div>
        </div>
      </div>
     </section>

     <section className="Four">
      <div className="md:mx-32 mx-5 md:my-24">
        <div className="text-center md:px-80">
          <h3 className="text-sub text-4xl font-semibold py-7 pb-3">
            What is <span className="text-subheading">TOTC?</span>
          </h3>
          <p className="features-paragraph">
            TOTC is a platform that allows educators to create online classNamees
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 text-white pt-20">
          <div>
            <div
              className="instructors h-96 rounded-3xl flex items-center justify-center text-center"
            >
              <div>
                <h3 className="md:text-4xl text-2xl font-semibold pb-5">
                  FOR INSTRUCTORS
                </h3>
                <button
                  className="border border-white border-double rounded-full px-10 md:py-5 py-2"
                >
                  Start a class today
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className="students h-96 rounded-3xl flex items-center justify-center text-center"
            >
              <div>
                <h3 className="md:text-4xl text-2xl font-semibold pb-5">
                  FOR STUDENTS
                </h3>
                <button
                  className="border bg-primary rounded-full px-10 md:py-5 py-2"
                >
                  Enter access code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>

     <section className="Five md:mx-32 mx-5">
      <div className="grid md:grid-cols-2 md:gap-14 gap-5 items-center">
        <div className="p-5">
          <h3 className="text-sub md:text-5xl text-2xl font-semibold md:pb-5">
            Everything you can do in a physical classroom,<span
              className="text-subheading"
            >
              you can do with TOTC</span>
          </h3>
          <p className="text-accent md:text-xl font-medium py-7">
            TOTC’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classNamerooms all in one secure cloud-based system.
          </p>
          <a href="#" className="text-accent text-lg font-semibold mt-5"
            >Learn more</a>
        </div>
        <div className="">
          <Image
            src="/image/Classroom teacher.png"
            alt=""
            width={500}
            height={24}
            className="rounded-3xl h-96"
          />
        </div>
      </div>
     </section>

     <section className="Six md:mx-32 md:my-20 mx-5 my-5">
      <div>
        <div className="text-center my-20">
          <h3 className="text-sub md:text-5xl text-2xl font-semibold md:pb-10 pb-5">
            Our <span className="text-subheading">Features</span>
          </h3>
          <p className="features-paragraph">
            This very extraordinary feature, can make learning activities more
            efficient
          </p>
        </div>
        <div
          className="grid md:grid-cols-2 md:gap-x-10 md:gap-y-20 gap-y-10 items-center"
        >
          <div><Image src="/image/UI classrom.png" alt="" width={500} height={24} /></div>
          <div className="px-10 space-y-5">
            <h3 className="text-sub md:text-5xl text-2xl font-semibold">
              A <span className="text-subheading">user interface</span> designed for
              the classNameroom
            </h3>
            <div className="flex items-center">
              <Image src="/image/four squares.png" alt="" width={30} height={24} />
              <p className="paragraph">
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </div>
            <div className="flex items-center">
              <Image src="/image/two squares.png" alt="" width={30} height={24} />
              <p className="paragraph">
                TA’s and presenters can be moved to the front of the className.
              </p>
            </div>
            <div className="flex items-center">
              <Image src="/image/users 2.png" alt="" width={30} height={24} />
              <p className="paragraph">
                Teachers can easily see all students and className data at one time.
              </p>
            </div>
          </div>
          <div className="px-10">
            <div>
              <h3 className="text-sub md:text-5xl text-2xl font-semibold pb-7">
                <span className="text-subheading">Tools</span> For Teachers And
                Learners
              </h3>
              <p className="features-paragraph">
                className has a dynamic set of teaching tools built to be deployed
                and used during className. Teachers can handout assignments in
                real-time for students to complete and submit.
              </p>
            </div>
          </div>
          <div><Image src="/image/Tools for learning.png" alt="" width={500} height={24} /></div>
          <div><Image src="/image/AQT.png" alt="" width={500} height={24} /></div>
          <div className="px-10">
            <div>
              <h3 className="text-sub md:text-5xl text-2xl font-semibold pb-7">
                Assessments,<span className="text-subheading"> Quizzes,</span> Tests
              </h3>
              <p className="features-paragraph">
                Easily launch live assignments, quizzes, and tests. Student
                results are automatically entered in the online gradebook.
              </p>
            </div>
          </div>
          <div className="px-10">
            <div>
              <h3 className="text-sub md:text-5xl text-2xl font-semibold pb-7">
                <span className="text-subheading">class Management</span> Tools for
                Educators
              </h3>
              <p className="features-paragraph">
                class provides tools to help run and manage the class such as
                class Roster, Attendance, and more. With the Gradebook, teachers
                can review and grade tests and quizzes in real-time.
              </p>
            </div>
          </div>
          <div><Image src="/image/Class management.png" alt="" width={500} height={24}/></div>
          <div><Image src="/image/one-on-one.png" alt="" width={500} height={24} /></div>
          <div className="px-10">
            <div>
              <h3 className="text-sub md:text-5xl text-2xl font-semibold pb-7">
                One-on-One <span className="text-subheading">Discussions</span>
              </h3>
              <p className="features-paragraph">
                Teachers and teacher assistants can talk with students privately
                without leaving the Zoom environment.
              </p>
            </div>
          </div>
        </div>
      </div>
     </section>

     <section className="Seven md:mx-32 md:my-20 mx-5 my-5">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="md:px-28 px-5">
          <p className="text-accent text-xl font-thin">TESTIMONIAL</p>
          <h3 className="text-sub text-4xl font-semibold py-7">What They Say?</h3>
          <p className="features-paragraph pb-7">
            TOTC has got more than 100k positive ratings from our users around
            the world.
          </p>
          <p className="features-paragraph">
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>
          <p className="features-paragraph py-7">
            Are you too? Please give your assessment
          </p>
          <div className="flex items-center">
            <div
              className="flex items-center justify-between text-primary border border-primary rounded-full space-x-2 pl-3"
            >
              <span className="">Write your assessment</span>
              <span className="border border-primary p-3 rounded-full py-5"
                ><svg
                  width="26"
                  height="16"
                  viewBox="0 0 26 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.53841 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z"
                    fill="#49BBBD"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div>
          <Image src="/image/what they say.png" alt="" width={500} height={24} />
          <div
            className="border rounded-3xl border-l-8 border-l-red-400 shadow-black shadow-2xl md:px-10 md:py-10 px-3 py-5 relative z-10 bottom-32 object-cover mx-7 bg-white"
          >
            <p className="features-paragraph">
              "Thank you so much for your help. It's exactly what I've been
              looking for. You won't regret it. It really saves me time and
              effort. TOTC is exactly what our business has been lacking."
            </p>
            <div className="flex items-center justify-between">
              <p className="features-paragraph pt-10">Gloria Rose</p>
              <div>
                <div className="flex items-center text-orange-400 pt-7">
                  <p><i className="fas fa-star fa-xs"></i></p>
                  <p><i className="fas fa-star fa-xs"></i></p>
                  <p><i className="fas fa-star fa-xs"></i></p>
                  <p><i className="fas fa-star fa-xs"></i></p>
                  <p><i className="fas fa-star fa-xs"></i></p>
                </div>
                <p className="features-paragraph">12 reviews at Yelp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>

     <section className="Eight md:mx-32 md:my-20 mx-5 my-5">
      <div className="text-center">
        <h3 className="text-sub md:text-5xl text-2xl font-semibold md:pb-5 pb-2">
          Latest News and Resources
        </h3>
        <p className="features-paragraph pb-10">
          See the developments that has occured to TOTC in the world
        </p>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="md:px-16 md:pb-0 pb-5">
          <div className="pb-10">
            <Image src="/image/Heroimg2.png" alt="" width={500} height={100} className="border rounded-3xl" />
          </div>
          <div>
            <a
              href=""
              className="border rounded-3xl bg-primary text-white px-7 py-2"
              >News</a>
            <p className="text-2xl font-medium md:py-7 py-5">
              class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </p>
            <p className="features-paragraph pb-7">
              class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <p className="features-paragraph"><a href="#">Read More</a></p>
          </div>
        </div>
        <div className="">
          <div className="grid md:grid-cols-2 gap-x-5 gap-y-7">
            <div className="relative">
              <Image
                src="/image/press release.png"
                alt=""
                width={100} height={24}
                className="border rounded-3xl w-full object-cover"
              />
              <button className="absolute top-40 right-6">
                <a
                  href=""
                  className="border rounded-3xl bg-primary text-white px-7 py-2"
                  >PRESS RELEASE</a>
              </button>
            </div>
            <div className="space-y-5">
              <p className="text-xl font-medium">
                class Technologies Inc. Closes $30 Million Series A Financing to
                Meet High Demand
              </p>
              <p className="features-paragraph">
                class Technologies Inc., the company that created className,...
              </p>
            </div>
            <div className="relative">
              <Image
                src="/image/news.png"
                alt=""
                width={100} height={24}
                className="border rounded-3xl w-full object-cover"
              />
              <button className="absolute top-40 right-6">
                <a
                  href=""
                  className="border rounded-3xl bg-primary text-white px-7 py-2"
                  >NEWS</a>
              </button>
            </div>
            <div className="space-y-5">
              <p className="text-xl font-medium">
                Zoom’s earliest investors are betting millions on a better Zoom
                for schools
              </p>
              <p className="features-paragraph">
                Zoom was never created to be a consumer product. Nonetheless,
                the...
              </p>
            </div>
            <div className="relative">
              <Image
                src="/image/news2.png"
                alt=""
                width={100} height={24}
                className="border rounded-3xl w-full object-cover"
              />
              <button className="absolute top-44 right-6">
                <a
                  href=""
                  className="border rounded-3xl bg-primary text-white px-7 py-2"
                  >NEWS</a>
              </button>
            </div>
            <div className="space-y-5">
              <p className="text-xl font-medium">
                Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom
                classNamerooms
              </p>
              <p className="features-paragraph">
                This year, investors have reaped big financial returns from
                betting on Zoom...
              </p>
            </div>
          </div>
        </div>
      </div>
     </section>


     <footer className="bg-foot">
      <div className="md:mx-96 mx-5 py-12 text-accent text-center">
        <div className="flex items-center justify-center pb-10">
          <Image src="/image/Logo.png" alt="" width={100} height={25}/>
          <p className="text-white text-base font-medium ml-5 border-l-[1px] pl-3">
            Virtual className for Zoom
          </p>
        </div>
        <div>
          <p className="pb-3">Subscribe to get our Newsletter</p>
          <div className="md:flex-none flex flex-col">
            <input
              type="text"
              placeholder="Your Email"
              className="border md:rounded-full px-16 py-3 bg-inherit"
            />
            <button
              className="bg-primary text-white border md:rounded-full px-7 py-3"
            >
              <a href="#">Subscribe</a>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3 pt-14">
          <p>Careers</p>
          <p className="border-x-[1px] px-3">privacy policy</p>
          <p>Terms &amp; Conditions</p>
        </div>
        <div className="pt-5">
          <p>© 2021 className Technologies Inc.</p>
          <p className="features-paragraph">Coded by DevIdayah</p>
        </div>
      </div>
     </footer>
    </main>
   /* <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main> */
  );
}
