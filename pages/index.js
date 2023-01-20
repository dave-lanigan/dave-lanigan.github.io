import TechComponent from '../components/techCard.js'
import ProjectComponent from '../components/projectCard.js'
import {AiFillTwitterCircle, AiFillInstagram, AiFillGithub, AiFillHeart} from 'react-icons/ai';
import {DiPython, DiJavascript1, DiSqllite} from 'react-icons/di';
import {FaRProject, FaReact, FaVuejs, FaAws, FaCss3Alt,FaTelegram} from 'react-icons/fa';
// import Image from 'next/image'
import {
  AiFillHtml5
} from 'react-icons/ai';
import {
  SiFirebase,
  SiTypescript,
  SiFastapi,
  SiNextdotjs,
  SiPostgresql,
  SiAmazondynamodb,
  SiSqlite,
  SiFlask,
  SiGo,
  SiGooglecloud,
  SiDocker,
  SiElectron,
  SiTailwindcss
} from 'react-icons/si';

const techIconSize = 22;

let languages = [
    {
      icon: <DiPython size={ techIconSize } />,
      title: "Python"
    },
    {
      icon: <DiJavascript1 size={ techIconSize } />,
      title: "Javascript"
    },
    {
        icon: <SiTypescript size={ techIconSize } />,
        title: "Typescipt"
    },
    {
        icon: <FaRProject size={ techIconSize } />,
        title: "R"
    },
    {
      icon: <SiGo size={ techIconSize } />,
      title: "Go"
    }
]

let frameworks = [
  {
    icon: <SiFastapi size={ techIconSize } />,
    title: "FastAPI"
  },
  {
    icon: <FaReact size={ techIconSize } />,
    title: "React.js"
  },
  {
      icon: <SiNextdotjs size={ techIconSize } />,
      title: "Next.js"
  },
  {
    icon: <FaVuejs size={ techIconSize } />,
    title: "Vue.js"
  },
  {
      icon: <FaRProject size={ techIconSize } />,
      title: "R Shiny"
  }
]

let databases = [
  {
    icon: <SiPostgresql size={ techIconSize } />,
    title: "PostgreSQL"
  },
  {
    icon: <SiSqlite size={ techIconSize } />,
    title: "SQLite"
  },
  {
    icon: <SiFirebase size={ techIconSize } />,
    title: "Firebase"
  },
  {
    icon: <SiAmazondynamodb size={ techIconSize } />,
    title: "DynamoDB"
  }
]

let otherTech = [
  {
    icon: <FaAws size={ techIconSize } />,
    title: "AWS"
  },
  {
    icon: <SiGooglecloud size={ techIconSize } />,
    title: "GCloud"
  },
  {
    icon: <SiDocker size={ techIconSize } />,
    title: "Docker"
  },
  {
    icon: <SiTailwindcss size={ techIconSize } />,
    title: "Tailwind CSS"
  }
]

let iconSize = 22;

let projects = [
  {
    title: "Contractor | Bayer",
    project: false,
    blurb: "Various applications and APIs using Python, R, Javascript and Vue.js.",
    //img: bayer,
    img: "bayer.jpg",
    stack: [ 
      <FaAws key="0" className='ml-1 mr-1' title="AWS" size={iconSize}/>,
      <SiFastapi key="1" className='ml-1 mr-1' title="FastAPI" size={iconSize}/>,
      <SiDocker key="2" className='ml-1 mr-1' title="Docker" size={iconSize}/>,
      <SiPostgresql key="3" className='ml-1 mr-1' title="PostgreSQL" size={iconSize}/>,
      <FaVuejs key="4" className='ml-1 mr-1' title="PostgreSQL" size={iconSize}/>
    ],
    repo: null,
  },
  {
    title: "Regional Sales App",
    project: true,
    blurb: "App to visualize sales data by region in the USA, Canada and Mexico for Tapi Group.",
    //img: tapi,
    img: "tapi.png",
    stack: [ 
      <AiFillHtml5 key="0" className='ml-1 mr-1' title="HTML" size={iconSize} />,
      <FaCss3Alt key="1" className='ml-1 mr-1' title="CSS" size={iconSize} />,
      <FaVuejs key="2" className='ml-1 mr-1' title="Vue.js" size={iconSize}/>
    ],
    repo: null,
  },
  {
    title: "Fusion Financial App",
    project: true,
    blurb: "Financial app that with charts minute by minute stock data and shows plots triggered indicators for registered functions.",
    //img: fusion,
    img: "fusion.png",
    stack: [
      <FaVuejs key="0" className='ml-1 mr-1' title="Vue.js" size={iconSize} />,
      <SiElectron key="1" className='ml-1 mr-1' title="Electron.js" size={iconSize} />,
      <DiSqllite key="2" className='ml-1 mr-1' title="Sqlite3" size={iconSize} />
    ],
    repo: null,
  },
  {
    title: "Personal Website",
    project: true,
    blurb: "Static website using Next.js to generate the site and tailwind for css.",
    //img: bayer,
    img: "bayer.jpg",
    stack: [
      <SiTailwindcss key="0" className='ml-1 mr-1' title="TailwindCSS" size={iconSize} />,
      <SiNextdotjs key="1" className='ml-1 mr-1' title="Next.js" size={iconSize} />,
      // <AiFillHtml5 className='ml-1 mr-1' title="HTML" size={iconSize} />,
      // <FaCss3Alt className='ml-1 mr-1' title="CSS" size={iconSize} />,
    ],
    repo: "https://github.com/dave-lanigan/dave-lanigan.github.io",
  },
  {
    title: "Stake Everything Crypto Website/API",
    project: true,
    blurb: "React website and Flask API [no longer maintained]. See github for code.",
    //img: bayer,
    img: "bayer.jpg",
    stack: [
      <SiGooglecloud key="0" className='ml-1 mr-1' title="Google Cloud" size={iconSize} />,
      <FaReact key="1" className='ml-1 mr-1' title="React" size={iconSize} />,
      <SiFlask key="2" className='ml-1 mr-1' title="Flask" size={iconSize} />,
      // <FaCss3Alt className='ml-1 mr-1' title="CSS" size={iconSize} />,
    ],
    repo: "https://github.com/stake-everything",
  } 
]

let projectsList = projects.map((el,idx)=>{
  return(<ProjectComponent key={idx} info={el} />)
})


const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch('./dmjl-resume.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          console.log( fileURL )
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'dmjl-resume.pdf';
          alink.click();
      })
  })
}

//https://www.youtube.com/watch?v=k-Pi5ZMxHWY&t=832s

function App() {
  return (
    <div className="App">
      <main className='bg-white'>
        <section className='min-h-screen bg-bluish-lighter'>
          
          <nav className='p-5 flex justify-between items-center bg-bluish'>
            <a href="https://github.com/dave-lanigan"><p className='text-2xl text-bluish-lighter font-semibold'>dmjl</p></a>
            <ul className='flex items-center'>
              {/* <li><BsFillMoonStarsFill className="cursor-pointer"/></li> */}
              <button onClick={onButtonClick}>
                <li className="bg-bluish-lightish text-bluish text-xl font-semibold px-4 py-2 rounded-md ml-8 drop-shadow-md">Resume</li>
              </button>
            </ul>
          </nav>

          <div className='h-full text-center p-10 flex-row justify-evenly'>
            <div className='flex justify-center'>
              <div className='m-12 flex justify-center rounded-full w-fit border-2 border-bluish-medium bg-bluish-medium shadow-2xl'>
                <img className='rounded-full' src="./me.png"/>
              </div>
            </div>
            <p className='text-3xl text-bluish-medium font-medium'>
              David MJ Lanigan
            </p>
            <h2 className='text-xl py-2'>Full Stack Developer</h2>
            <br/>
            <p>I work as a developer and part time as freelancer, developing REST APIs and full stack apps. I enjoy learning about Web3, Bitcoin and ML in my spare time.</p>
            <br/>
            <p>I ♥ Python and React and have experience with alot <a href="#tech"><u className='text-bluish-medium'>more</u></a>.</p>
            <br/>
            <div className='text-3xl flex justify-center gap-8 py-3'>
              <a className='shadow-2xl' href="https://twitter.com/bohemdev"><AiFillTwitterCircle size={38} /></a>
              <a className='shadow-2xl' href="https://github.com/dave-lanigan"><AiFillGithub size={38} /></a>
              <a className='shadow-2xl' href="t.me/bohemdev"><FaTelegram size={38} /></a>
            </div>
          </div>
        </section>
        
        <section className='min-h-screen bg-bluish'>
          <h3 id="tech" className="text-3xl py-10 text-bluish-lighter text-center">Technologies</h3>
          <div className='flex flex-col justify-evenly items-center'>
            <TechComponent title="Languages" data={languages} />
            <TechComponent title="Frameworks" data={frameworks} />
            <TechComponent title="Databases" data={databases} />
            <TechComponent title="Other Tech" data={otherTech} />
          </div>
        </section>

        <section className='min-h-screen bg-bluish-lighter'>
          <h3 id="projects" className="text-3xl py-10 text-bluish- text-center">{`Work I've Done`}</h3>
          <div className='flex flex-col justify-evenly items-center'>
            {projectsList}
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
