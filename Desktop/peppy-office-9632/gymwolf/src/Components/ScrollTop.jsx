import React, {useState} from 'react';

export  const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
    setVisible(true)
    }
    else if (scrolled <= 300){
    setVisible(false)
    }
};
console.log(visible)
const scrollToTop = () =>{
    window.scrollTo({
    top: 520,
    behavior: 'smooth'
    });
};
window.addEventListener('scroll', toggleVisible);
return (
    <button onClick={scrollToTop} >
     GET YOUR TRAINER
    </button>
);
};