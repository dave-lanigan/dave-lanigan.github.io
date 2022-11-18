export default function TechCard(props){
    
    let title = props.title;
    let data = props.data;

    let listItems = data.map((el,idx)=>{
        return(
            <li key={idx} className='flex items-center justify-center'>
                { el.icon }
                <p key={idx} className='pl-2 text-base'>{ el.title }</p>
            </li>
        );
    })
    
    return(
        <div className='flex flex-row justify-evenly w-5/6 max-w-xl m-4 p-4 rounded-lg shadow-lg bg-jimbo-light'>
            <div className='flex justify-center items-center border-r-2 border-black w-6/12'>
            <p className='text-xl'>{title}</p>
            </div>
            <div className='p-4 flex justify-center w-6/12'>
            <ul className='flex flex-col items-start w-fit'>
                { listItems }
            </ul>
            </div>
    </div>
    );
}