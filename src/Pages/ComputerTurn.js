import { useParams, NavLink, useNavigate} from 'react-router-dom';
import ScoreHead from '../Components/ScoreHead';
import BottomButtons from '../Components/BottomButtons';
import {IoMdClose} from 'react-icons/io'
import RuleImg from '../images/image-rules-bonus.svg'
import RuleImg2 from '../images/image-rules.svg'
import { selectedType } from '../Components/SelectData';
import { useEffect, useState } from 'react';


const ComputerTurn = (props) => {
  const navigate = useNavigate();
    const {selected} = useParams();
    const [randomS, randomStart] = useState(null);
    const [out, outcome] = useState('');
    const [text, outcomeText] = useState('');
    const select = selectedType.find(item=> item.name === selected);
    var random;


    const Win = () =>{
      props.updatedScore(props.score + 1);
      outcomeText('YOU WIN');
      return outcome('Won');
    }

    const Lose = () =>{
      props.updatedScore(props.score !== 0? props.score - 1: 0);
      outcomeText('YOU LOSE');
      return outcome('Lost');
    }

    const Draw = () =>{
      outcomeText('DRAW');
      return outcome('Draw');
    }

    

    // save score result to localStorage
    useEffect(() => {
      if(props.score >=1){
        localStorage.setItem('score', JSON.stringify(props.score));
      }
    },[props.score])
    

    // generate random numbers within the game range
    if(props.bonus===false){
      random = Math.floor(Math.random() * (4 - 1) + 1); 
    }else{
        random = Math.floor(Math.random() * (6 - 1) + 1);
    }

    //get the selected game coresponding to the random number generated
    useEffect(() => {
      const timer = setInterval(() => {
          randomStart(selectedType.find(item=> item.id === random))
      }, 500);

      return () => clearInterval(timer);
     }, []);


    // handle game wins/loses
    useEffect(() => {
      var cSelected;
      if(randomS !== null){
        cSelected = randomS.name;
      }

     if(selected === 'paper'){
      switch (cSelected) {
        case ('rock'|| 'spock'):
          Win();
          break;
        case ('scissors'|| 'lizard'):
          Lose();
          break;
        case 'paper':
          Draw();
          break;
      
        default:
          break;
      }
      }else if(selected === 'rock'){
        switch (cSelected) {
          case ('scissors' || 'lizard'):
            Win();
            break;
          case ('paper' || 'spock'):
            Lose();
            break;
          case 'rock':
          Draw();
          break;
        
          default:
            break;
        }
      }else if(selected === 'scissors'){
        switch (cSelected) {
          case ('paper' || 'lizard'):
            Win();
            break;
          case ('rock' || 'spock'):
            Lose();
            break;
          case 'scissors':
            Draw();
            break;
          default:
            break;
        }
      } else if(selected === 'lizard'){
        switch (cSelected) {
          case ('spock'||'paper'):
            Win();
            break;
          case ('rock'|| 'scissors'):
            Lose();
            break;
          case 'lizard':
            Draw();
            break;
        
          default:
            break;
        }
      }else if(selected === 'spock'){
          switch (cSelected) {
            case ('rock'|| 'scissors'):
              Win();
              break;
            case ('lizard' || 'paper'):
              Lose();
              break;
            case 'spock':
              Draw();
              break;
          
            default:
              break;
          }
      }
    }, [randomS])


  return (
    <div className="body ">
      <div className="body-inner w-[90%] md:w-[70%] mx-auto flex flex-col justify-between spae-y-10 h-full py-5">
        <ScoreHead bonus={props.bonus} score={props.score} />


        <div className={`type-select bg-center relative bg-no-repeat w-full flex flex-col gap-y-14 justify-center items-center mx-auto h-[55%] md:w-3/6 gap-x-5`}>
            <div className='flex items-start justify-between w-full'>
              <div className="picked uppercase text-center text-white">
                  <div className={`type-outer ${select.gradient} p-4 h-36 w-36 `}>
                    <div className='type-inner'>
                      <img src={select.image} alt="" className=''/>
                    </div>

                  </div>
                  <h3 className='text-base font-semibold pt-5'>You Picked</h3>
              </div>


              <div className="picked uppercase flex flex-col justify-center items-center text-white">
                  <div className={`type-outer self-end ${randomS===null?'':randomS.gradient} p-4 h-36 w-36`}>
                    <div className="type-inner">
                      {randomS===null?'':<img src={randomS.image} alt="" className='select-image'/>}
                    </div>
                  </div>
                  <h3 className='text-base font-semibold pt-5'>The house Picked</h3>
              </div>
            </div>

            {out !== ''?<div className="verdict text-center tracking-wide w-full space-y-3">
              <h2 className='text-4xl font-bold uppercase'>
                {text}
              </h2>
              <button className='play-btn' onClick={()=>navigate('/')}>PlAY AGAIN</button>
            </div>:''}
            
          

        </div>
          <BottomButtons knowRules={props.knowRules} bonus={props.bonus} bonusAdd={props.bonusAdd}/>
        </div>



      <div className={`transition-all duration-500 delay-150 ease-in-out rule-img fixed h-screen w-screen ${props.rules?'top-0 bg-white':'top-full'} left-0 flex flex-col justify-around items-center`}>
        <h3 className='text-[#606e85] text-4xl font-bold -tracking-wider'>RULES</h3>
        <img src={props.bonus?RuleImg:RuleImg2} alt="" />
        <IoMdClose className='text-gray-400 text-3xl' onClick={()=>props.knowRules(false)}/>
      </div>


      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
        {/* Coded by <a href="#">Your Name Here</a>. */}
      </div>
    </div>
  )
}

export default ComputerTurn
