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
      <div className="body-inner w-[90%] md:w-[70%] mx-auto flex flex-col justify-between spae-y-10 h-full py-5">
        <ScoreHead bonus={props.bonus} score={props.score}/>


        <div className={`type-select  ${props.bonus?"bg-[url('./images/bg-pentagon.svg')]":"bg-[url('./images/bg-triangle.svg')]"}`}>

          {props.bonus?
            <div className="type-outer-outer">

              <div className='type-outer from-[#ec9e0e] to-[#eca922] ' onClick={()=>navigate(`computer/scissors`)}>
                <div className="type-inner">
                  <img src={scissors} alt="" className='select-image'/>
                </div>
              </div>


              <div className='flex w-full justify-between'>
                <div className={`type-outer from-[#40b9ce] to-[#52bed1]`} onClick={()=>navigate(`computer/spock`)}>
                  <div className="type-inner">
                    <img src={spock} alt="" className='select-image'/>
                  </div>
                </div>


                <div className='type-outer from-[#4865f4] to-[#5671f5]' onClick={()=>navigate(`computer/paper`)}>
                  <div className="type-inner">
                    <img src={paper} alt="" className='select-image'/>
                  </div>
                </div>
              </div>


              <div className='flex w-[85%] justify-between relative -bottom-16'>
                <div className={`type-outer from-[#834fe3] to-[#8c5de5] `} onClick={()=>navigate(`computer/lizard`)}>
                  <div className="type-inner">
                    <img src={lizard} alt="" className='select-image'/>
                  </div>
                </div>

                <div className='type-outer from-[#dc2e4e] to-[#dd405d]' onClick={()=>navigate(`computer/rock`)}>
                  <div className="type-inner">
                    <img src={rock} alt="" className='select-image'/>
                  </div>
                </div>
              </div>
            </div>
          :
            <div className="top-[2%] type-outer-outer w-[95%] mx-auto">
              <div className='flex w-full justify-between'>
                <div className='type-outer from-[#4865f4] to-[#5671f5] h-32 w-32' onClick={()=>navigate(`computer/paper`)}>
                  <div className="type-inner">
                    <img src={paper} alt="" className='select-image'/>
                  </div>
                </div>

                <div className='type-outer from-[#ec9e0e] to-[#eca922] h-32 w-32 ' onClick={()=>navigate(`computer/scissors`)}>
                  <div className="type-inner">
                    <img src={scissors} alt="" className='select-image'/>
                  </div>
                </div>
              </div>

              <div className='type-outer from-[#dc2e4e] to-[#dd405d] h-32 w-32 -top-[7%] relative' onClick={()=>navigate(`computer/rock`)}>
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