import React from 'react';

var style = {
    backgroundColor: "rgb(100, 100, 100)",
    color:"white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "relative",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer({children})
{
    return(<> 
   <div>
            <div style={phantom} />
            <div style={style}>
                { children }
                <p>its footer</p>
            </div>
        </div>
  </>);
}
export default Footer;