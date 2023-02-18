import RuleImg from '../images/image-rules-bonus.svg'
import RuleImg2 from '../images/image-rules.svg'
import {IoMdClose} from 'react-icons/io'
import ScoreHead from '../Components/ScoreHead';
import BottomButtons from '../Components/BottomButtons';
import scissors from '../images/icon-scissors.svg'
import spock from '../images/icon-spock.svg'
import lizard from '../images/icon-lizard.svg'
import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import {useNavigate} from 'react-router-dom';


const Index = (props) => {
    const navigate = useNavigate();

    

  return (
    <div className="body">
      <div className="body-inner w-[90%] sm:w-[70%] md:w-[50%]">
        <ScoreHead bonus={props.bonus} score={props.score}/>


        <div className={`type-select  ${props.bonus?"bg-[url('./images/bg-pentagon.svg')] -top-3":"bg-[url('./images/bg-triangle.svg')]"}`}>

          {props.bonus?
            <div className="type-outer-outer -top-[10%]">

              <div className='type-outer from-[#ec9e0e] to-[#eca922] h-28 w-28 sm:w-24 sm:h-24' onClick={()=>navigate(`computer/scissors`)}>
                <div className="type-inner">
                  <img src={scissors} alt="" className='select-image'/>
                </div>
              </div>


              <div className='flex w-full justify-between'>
                <div className={`type-outer from-[#40b9ce] to-[#52bed1] h-28 w-28 sm:w-24 sm:h-24`} onClick={()=>navigate(`computer/spock`)}>
                  <div className="type-inner">
                    <img src={spock} alt="" className='select-image'/>
                  </div>
                </div>


                <div className='type-outer from-[#4865f4] to-[#5671f5] h-28 w-28 sm:w-24 sm:h-24' onClick={()=>navigate(`computer/paper`)}>
                  <div className="type-inner">
                    <img src={paper} alt="" className='select-image'/>
                  </div>
                </div>
              </div>


              <div className='flex w-[85%] justify-between relative -bottom-16'>
                <div className={`type-outer from-[#834fe3] to-[#8c5de5] h-28 w-28 sm:w-24 sm:h-24`} onClick={()=>navigate(`computer/lizard`)}>
                  <div className="type-inner">
                    <img src={lizard} alt="" className='select-image'/>
                  </div>
                </div>

                <div className='type-outer from-[#dc2e4e] to-[#dd405d] h-28 w-28 sm:w-24 sm:h-24' onClick={()=>navigate(`computer/rock`)}>
                  <div className="type-inner">
                    <img src={rock} alt="" className='select-image'/>
                  </div>
                </div>
              </div>
            </div>
          :
            <div className="type-outer-outer w-full mx-auto">
              <div className='flex w-full justify-between relative sm:-top-[5%]'>
                <div className='type-outer from-[#4865f4] to-[#5671f5]' onClick={()=>navigate(`computer/paper`)}>
                  <div className="type-inner">
                    <img src={paper} alt="" className='select-image'/>
                  </div>
                </div>

                <div className='type-outer from-[#ec9e0e] to-[#eca922]' onClick={()=>navigate(`computer/scissors`)}>
                  <div className="type-inner">
                    <img src={scissors} alt="" className='select-image'/>
                  </div>
                </div>
              </div>

              <div className='type-outer from-[#dc2e4e] to-[#dd405d]  -top-[7%] sm:-top-[0] relative' onClick={()=>navigate(`computer/rock`)}>
                  <div className="type-inner">
                    <img src={rock} alt="" className='select-image'/>
                  </div>
              </div>
            </div>
          }

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

export default Index