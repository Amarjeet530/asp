import './header.css';
const Header = () => {
return(
    <div 
        style={{
            background:'linear-gradient(45deg, blue, transparent)',
            height: '300px',
            height:'300px',
            position:'relative'
        }}
    >
        <div
        style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingInline:'30px',height:'60px',alignItems:'center'}}
        >
            <div
            style={{display:'flex',flexDirection:'row',alignItems:'center'}}
            >
                <img 
                    src="https://www.w3schools.com/css/img_lights.jpg"
                    alt="loading"
                    width="50"
                    height="50"
                    style={{borderRadius:'50px'}}
                />
                <p style={{fontFamily:'monospace', fontWeight:'bold', fontSize:'18px',marginInline:'10px'}}>Devil</p>
            </div> 
            <div
                style={{display:'flex',flexDirection:'row'}}
            >
                <p style={{fontSize:'18px',fontWeight:'bold',marginInline:'20px',cursor:'pointer'}} title="Log in">Log In</p>
                <p style={{fontSize:'18px',fontWeight:'bold',cursor:'pointer'}} title="Sign up">Sign Up</p>
            </div>
        </div>
            <div style={{
                position:'absolute', 
                bottom: '-23px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection:'column'
                }}>
                <img 
                    style={{alignSelf:'center',marginBottom:'-28px'}}
                width="350px"
                height="200px"
                src="https://www.transparentpng.com/thumb/kids/FdW2aB-young-kids-image.png"/>
                <button
                    className="pushable"
                >
                    <span 
                        className="front"
                    >
                        Explore
                    </span>
                </button>
            </div>
    </div>
)

}
export default Header;