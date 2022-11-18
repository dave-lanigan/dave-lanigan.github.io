import TechComponent from '../components/techCard.js'
import ProjectComponent from '../components/projectCard.js'
import {AiFillTwitterCircle, AiFillInstagram, AiFillGithub, AiFillHeart} from 'react-icons/ai';
import {DiPython, DiJavascript1, DiSqllite} from 'react-icons/di';
import {FaRProject, FaReact, FaVuejs, FaAws, FaCss3Alt} from 'react-icons/fa';
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
  //SiGo,
  SiGooglecloud,
  SiDocker,
  SiElectron,
  SiTailwindcss
} from 'react-icons/si';

let languages = [
    {
      icon: <DiPython />,
      title: "Python"
    },
    {
      icon: <DiJavascript1 />,
      title: "Javascript"
    },
    {
        icon: <SiTypescript />,
        title: "Typescipt"
    },
    {
        icon: <FaRProject />,
        title: "R"
    },
    // {
    //   icon: <SiGo />,
    //   title: "Go"
    // }
]

let frameworks = [
  {
    icon: <SiFastapi />,
    title: "FastAPI"
  },
  {
    icon: <FaReact />,
    title: "React.js"
  },
  {
      icon: <SiNextdotjs />,
      title: "Next.js"
  },
  {
    icon: <FaVuejs />,
    title: "Vue.js"
  },
  {
      icon: <FaRProject />,
      title: "R Shiny"
  }
]

let databases = [
  {
    icon: <SiPostgresql />,
    title: "PostgreSQL"
  },
  {
    icon: <SiSqlite />,
    title: "SQLite"
  },
  {
    icon: <SiFirebase />,
    title: "Firebase"
  },
  {
    icon: <SiAmazondynamodb/>,
    title: "DynamoDB"
  }
]

let otherTech = [
  {
    icon: <FaAws />,
    title: "AWS"
  },
  {
    icon: <SiGooglecloud />,
    title: "GCloud"
  },
  {
    icon: <SiDocker />,
    title: "Docker"
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS"
  }
]

let iconSize = 22;

let projects = [
  {
    title: "Contractor | Bayer",
    project: false,
    blurb: "Various applications and APIs using Python and R.",
    //img: bayer,
    img: "bayer.jpg",
    stack: [ 
      <FaAws key="0" className='ml-1 mr-1' title="AWS" size={iconSize}/>,
      <SiFastapi key="1" className='ml-1 mr-1' title="FastAPI" size={iconSize}/>,
      <SiDocker key="2" className='ml-1 mr-1' title="Docker" size={iconSize}/>,
      <SiPostgresql key="3console.log( pic )" className='ml-1 mr-1' title="PostgreSQL" size={iconSize}/>,
      <FaVuejs key="4" className='ml-1 mr-1' title="PostgreSQL" size={iconSize}/>
    ],
    repo: "",
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
    repo: "",
  },
  {
    title: "Fusion Financial App",
    project: true,
    blurb: "Financial app that with charts minute by minute stock data and shows plots triggered indicators for registered functions.",
    //img: fusion,
    img: "fusion.png",
    stack: [
      <FaVuejs key="0" className='ml-1 mr-1' title="Vue.js" size={iconSize} />,
      <SiElectron key="2" className='ml-1 mr-1' title="Electron.js" size={iconSize} />,
      <DiSqllite key="3" className='ml-1 mr-1' title="Sqlite3" size={iconSize} />
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
    repo: "",
  } 
]

let projectsList = projects.map((el,idx)=>{
  return(<ProjectComponent key={idx} info={el} />)
})

//https://www.youtube.com/watch?v=k-Pi5ZMxHWY&t=832s

function App() {
  return (
    <div className="App">
      <main className='bg-white'>
        <section className='min-h-screen bg-white'>
          <nav className='p-5 flex justify-between items-center bg-teal-600'>
            <a href="https://github.com/dave-lanigan"><p className='text-xl text-white'>dmjl</p></a>
            <ul className='flex items-center'>
              {/* <li><BsFillMoonStarsFill className="cursor-pointer"/></li> */}
              <a href="#"><li className="bg-jimbo-medium text-black px-4 py-2 rounded-md ml-8">Resume</li></a>
              <li></li>
            </ul>
          </nav>
          <div className='h-full text-center p-10 flex-row justify-evenly'>
            <div className='m-12 flex justify-center'>
              <img className='rounded-full shadow-xl' src="./me.png"/>
            </div>
            <p className='text-3xl text-sky-600 font-medium'>
              David MJ Lanigan
            </p>
            <h2 className='text-xl py-2'>Full Stack Developer</h2>
            <br/>
            <p>I work as a developer and part time as freelancer develops APIs and full stack apps. I enjoy learning about Web3, Bitcoin and ML in my spare time.</p>
            <br/>
            <p>I ♥ Python and React and have experience with alot <a href="#tech"><u className='text-sky-600'>more</u></a>.</p>
            <br/>
            <div className='text-3xl flex justify-center gap-8 py-3'>
              <AiFillTwitterCircle />
              <a href="https://github.com/dave-lanigan"><AiFillGithub /></a>
              <AiFillInstagram />
            </div>
          </div>
        </section>
        
        <section className='min-h-screen bg-jimbo-medium'>
          <h3 id="tech" className="text-2xl py-10 text-white text-center">Technologies</h3>
          <div className='flex flex-col justify-evenly items-center'>
            <TechComponent title="Languages" data={languages} />
            <TechComponent title="Frameworks" data={frameworks} />
            <TechComponent title="Databases" data={databases} />
            <TechComponent title="Other Tech" data={otherTech} />
          </div>
        </section>

        <section className='min-h-screen bg-jimbo-light'>
          <h3 id="projects" className="text-2xl py-10 text-jimbo-medium text-center">{`Work I've Done`}</h3>
          <div className='flex flex-col justify-evenly items-center'>
            {projectsList}
          </div>
        </section>


      </main>
    </div>
  );
}

export default App;
