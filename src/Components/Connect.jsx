import line from '../assets/line.svg'
import shape1 from '../assets/header-left-shape-1.png'
import shape2 from '../assets/header-left-shape-3.png'

function Connect() {
  return (
    <div className='connect-wrapper' >
        <div className="container-fluid">
            <div className="container">
                <div className="connect-shape-wrapper">
                    <img src={shape1} alt="" className='connect-shape-1' />
                    <img src={shape2} alt="" className='connect-shape-2' />
                </div>
                <div className="connect-div">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="connect-title-para text-center"  data-aos="zoom-in" >
                                <h2>15,000+</h2>
                                <p>Wallets Connected</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="connect-title-para text-center" data-aos="zoom-in">
                                <h2>40,000+</h2>
                                <p>Telegram Members</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="connect-title-para text-center" data-aos="zoom-in">
                                <h2>$1,257,773</h2>
                                <p>Market Cap</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line-svg"  data-aos="zoom-in" >
          <img src={line} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Connect