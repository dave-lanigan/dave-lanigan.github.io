import {BsBriefcaseFill} from 'react-icons/bs'
import {AiOutlineFundProjectionScreen, AiFillGithub} from 'react-icons/ai'

export default function ProjectCard(props){
    
    let title = props.info.title;
    let stack = props.info.stack;
    let img = props.info.img;


    let GithubLink = function(props) {
        if (props.repo) {
            return(
                <a href={props.repo}>
                    <div className='absolute bottom-0 right-0 p-3 pt-4 bg-white rounded-tl-lg'>
                        <AiFillGithub size={22} />
                    </div>
                </a>
            );
        }
    }

    return(
        <div className='flex-col items-center justify-center relative m-4 max-w-xl h-80 overflow-hidden rounded-xl shadow-lg bg-bluish'>
            
            <img className='brightness-50 content-center object-cover min-w-full min-h-full'  src={ `./${img}` } />

            <div className='absolute top-0 right-0 p-3 pt-4 bg-white rounded-bl-lg'>
                { props.info.project ? <AiOutlineFundProjectionScreen className='text-black' title="Project" size={22}/> : <BsBriefcaseFill className='text-black' title="Job" size={19}/> }
            </div>
            <div className="absolute top-0 left-0 bg-white p-2 pt-4 rounded-br-lg">
                {title}
            </div>

            <div className='flex flex-row justify-evenly p-4 bg-white rounded-md shadow-lg absolute w-3/4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                { props.info.blurb }
            </div>

            <div className="flex flex-row items-center w-fit p-4 bg-white absolute bottom-0 rounded-tr-lg">
                <div className="flex flex-row text-black">{stack}</div>
            </div>

            <GithubLink repo={props.info.repo} />
        </div>
    );
}