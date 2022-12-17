import React, {useState} from 'react'


export default function TextForm(props) {

  const [text, setText] = useState("");
  const [font, setFont] = useState('12')
    const upperCase = (e) => {
setText(text.toUpperCase())
props.showAlert('Text tranform to uppercase', "green")
    }
    const onChange = (e)=>{
setText(e.target.value)
    }
    const eraseAll = () =>{
        setText("")
        props.showAlert('Text erase', "green")
    }
    const fontChange = (e) =>{
     
        setFont(e.target.value)
    
    }
    const copyText = () =>{
      var text = document.getElementById('message');
      text.select();
  text.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(text.value);
  props.showAlert('Text copied', "green")
  

    }
    const removeSpace = () => {
      setText(text.split(" ").map(a => a.trim()).filter(text => text !== "").join(" "))
      props.showAlert('Space removed', "green")
    }

  
  return (
    <>
    <div className='container mx-auto'>
<h1 className='text-2xl mt-8 my-1 font-bold'>{props.heading}</h1>
<textarea id="message" rows="10" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={text} placeholder="Leave a comment..." onChange={onChange}></textarea>
<button className='p-2 bg-blue-500 rounded text-white text-[14px] mt-2' onClick={upperCase}>Convert to Uppercase</button>
<button className='p-2 bg-red-500 rounded text-white text-[14px] mt-2 ml-2' onClick={eraseAll}>Erase All</button>
<button className='p-2 bg-yellow-500 ml-2 rounded text-white text-[14px] mt-2' onClick={copyText}>Copy to Clipboard</button>
<button className='p-2 bg-yellow-500 ml-2 rounded text-white text-[14px] mt-2' onClick={removeSpace}>Remove Extra Space</button>
</div>
<div className='container mx-auto'>
<h1 className='text-2xl mt-5 my-1 font-bold dark:text-white'>Your text summary</h1>
<p className='text-[15px] font-light dark:text-white'>{text.split(" ").map(a => a.trim()).filter(text => text !== "").length} words, {text.split(" ").map(a => a.trim()).filter(text => text !== "").join('').length} characters</p>
<div className='md:w-1/2  flex justify-between item-center mt-3'>
<h3 className='text-xl font-bold dark:text-white'>Preview</h3>
<div className=''>
<label htmlFor="fontSize" className='font-semibold cursor-pointer dark:text-white'>Font Size</label>
  <select name="font" id="fontSize" className='ml-2 cursor-pointer border-none focus:outline-gray-900 dark:bg-gray-900 dark:text-gray-100' onChange={fontChange}>
    <option value="12">12</option>
    <option value="14">14</option>
    <option value="16">16</option>
    <option value="18">18</option>
    <option value="20">20</option>
    <option value="22">22</option>
    <option value="24">24</option>
    <option value="26">26</option>
    <option value="28">28</option>
    <option value="30">30</option>
</select>
</div>

</div>
<p id='info' className='dark:text-white mt-1.5' style={{fontSize : `${font}px`}}>{text}</p>
</div>
</>
  )
}
