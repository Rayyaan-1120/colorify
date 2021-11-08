import React,{useState,useEffect} from 'react'

function useDarkmode() {
    
    const [theme,settheme] = useState('light')

    const setmode = mode => {
        localStorage.setItem('theme',mode)
        settheme(mode)
    }

    const themetoggler = () => {
        theme === "light" ? setmode('dark') : setmode('light')
    }

    useEffect(() => {
        const localtheme = localStorage.getItem('theme')
        localtheme && settheme(localtheme)
    },[])

    return [theme,themetoggler]

}

export default useDarkmode
